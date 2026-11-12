import "server-only";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { getResend } from "@/lib/resend";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { EnquiryAdapterError, escapeHtml, handleEnquiry, type EnquiryFields, type EnquiryKind } from "@/lib/enquiry-handler";

function setting(key: string) {
  try { const env = getCloudflareContext().env as unknown as Record<string, string>; if (env[key]) return env[key]; } catch { /* Next-only development */ }
  return process.env[key];
}
export function submitEnquiry(req: Request, kind: EnquiryKind) {
  const table = kind === "contact" ? "contact_submissions" : "consultation_submissions";
  let configurationLogged = false;
  function database() {
    if (!configurationLogged) {
      configurationLogged = true;
      console.info(JSON.stringify({ event: "enquiry_configuration", kind, production: setting("APP_ENV") === "production",
        present: Object.fromEntries(["APP_ENV", "NEXT_PUBLIC_SUPABASE_URL", "SUPABASE_SERVICE_ROLE_KEY", "RESEND_API_KEY", "ENQUIRY_DATABASE_URL", "ENQUIRY_DATABASE_SERVICE_ROLE_KEY"].map(key => [key, Boolean(setting(key))])),
        ray: /^[a-f0-9]+(?:-[A-Z]+)?$/i.test(req.headers.get("cf-ray") || "") ? req.headers.get("cf-ray") : undefined,
      }));
    }
    if (setting("APP_ENV") === "production") {
      const url = setting("NEXT_PUBLIC_SUPABASE_URL"), key = setting("SUPABASE_SERVICE_ROLE_KEY");
      if (!url || !key) throw new EnquiryAdapterError("configuration", "PRODUCTION_DATABASE");
      return createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
    }
    const url = setting("ENQUIRY_DATABASE_URL"), key = setting("ENQUIRY_DATABASE_SERVICE_ROLE_KEY");
    if (!url || !key || new URL(url).hostname === "tpkawdequqsvvtwsjfya.supabase.co") throw new EnquiryAdapterError("configuration", "STAGING_DATABASE");
    return createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
  }
  return handleEnquiry(req, kind, {
    deliveryMode: setting("ENQUIRY_DELIVERY_MODE") === "email" ? "email" : undefined,
    async insert(key, hash, data) {
      const common = { request_key: key, request_hash: hash, name: data.name, email: data.email, phone: data.phone || null, city: data.city || null, message: data.message || null };
      const row: Record<string, string | null> = kind === "contact" ? { ...common, subject: data.subject || null } : { ...common, project_type: data.projectType || null, timeline: data.timeline || null, land: data.land || null };
      const { error, status } = await database().from(table).insert(row);
      if (error?.code === "23505") return "duplicate";
      if (error) throw new EnquiryAdapterError("insert", error.code, status);
      return "inserted";
    },
    async find(key) {
      const { data, error, status } = await database().from(table).select("request_hash,notification_status").eq("request_key", key).single();
      if (error) throw new EnquiryAdapterError("dedup_lookup", error.code, status); return data;
    },
    async notify(key, data: EnquiryFields) {
      const environment = setting("APP_ENV");
      const recipient = environment === "production" ? "hello@nestiquestudio.in" : setting("ENQUIRY_TEST_RECIPIENT");
      if (!recipient || (environment !== "production" && recipient.toLowerCase().includes("@nestiquestudio.in"))) throw new EnquiryAdapterError("configuration", "TEST_RECIPIENT");
      const from = setting("ENQUIRY_FROM") || (environment === "production" ? "Nestique Studio <hello@nestiquestudio.in>" : undefined);
      const testKey = setting("ENQUIRY_TEST_RESEND_API_KEY");
      if (!from || (environment !== "production" && !testKey)) throw new EnquiryAdapterError("configuration", "TEST_EMAIL");
      const resend = environment === "production" ? getResend() : new Resend(testKey);
      const rows = Object.entries(data).filter(([, value]) => value).map(([label, value]) => `<tr><th style="text-align:left;padding:10px">${escapeHtml(label)}</th><td style="padding:10px;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`).join("");
      const { data: delivery, error } = await resend.emails.send({ from, to: recipient, replyTo: data.email, subject: `${environment === "production" ? "" : "[STAGING] "}${kind === "contact" ? "Contact" : "Consultation"} enquiry: ${data.subject || data.projectType || "General"}`, html: `<h2>Nestique Studio enquiry</h2><table>${rows}</table>` }, { idempotencyKey: `${kind}/${key}` });
      if (error || !delivery?.id) throw new EnquiryAdapterError("notification", "EMAIL_NOT_ACCEPTED", error?.statusCode ?? undefined); return delivery.id;
    },
    async mark(key, status, deliveryId) {
      const { error, status: httpStatus } = await database().from(table).update({ notification_status: status, notification_id: deliveryId || null }).eq("request_key", key);
      if (error) throw new EnquiryAdapterError("notification_status", error.code, httpStatus);
    },
  });
}
