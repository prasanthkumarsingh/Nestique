import "server-only";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { getResend } from "@/lib/resend";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { escapeHtml, handleEnquiry, type EnquiryFields, type EnquiryKind } from "@/lib/enquiry-handler";

function setting(key: string) {
  try { const env = getCloudflareContext().env as unknown as Record<string, string>; if (env[key]) return env[key]; } catch { /* Next-only development */ }
  return process.env[key];
}
export function submitEnquiry(req: Request, kind: EnquiryKind) {
  const table = kind === "contact" ? "contact_submissions" : "consultation_submissions";
  function database() {
    if (setting("APP_ENV") === "production") {
      const url = setting("NEXT_PUBLIC_SUPABASE_URL"), key = setting("SUPABASE_SERVICE_ROLE_KEY");
      if (!url || !key) throw new Error("Production database configuration required");
      return createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
    }
    const url = setting("ENQUIRY_DATABASE_URL"), key = setting("ENQUIRY_DATABASE_SERVICE_ROLE_KEY");
    if (!url || !key || new URL(url).hostname === "tpkawdequqsvvtwsjfya.supabase.co") throw new Error("Separate staging database required");
    return createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
  }
  return handleEnquiry(req, kind, {
    async insert(key, hash, data) {
      const common = { request_key: key, request_hash: hash, name: data.name, email: data.email, phone: data.phone || null, city: data.city || null, message: data.message || null };
      const row: Record<string, string | null> = kind === "contact" ? { ...common, subject: data.subject || null } : { ...common, project_type: data.projectType || null, timeline: data.timeline || null, land: data.land || null };
      const { error } = await database().from(table).insert(row);
      if (error?.code === "23505") return "duplicate";
      if (error) throw new Error("Persistence failed");
      return "inserted";
    },
    async find(key) {
      const { data, error } = await database().from(table).select("request_hash,notification_status").eq("request_key", key).single();
      if (error) throw new Error("Lookup failed"); return data;
    },
    async notify(key, data: EnquiryFields) {
      const environment = setting("APP_ENV");
      const recipient = environment === "production" ? "hello@nestiquestudio.in" : setting("ENQUIRY_TEST_RECIPIENT");
      if (!recipient || (environment !== "production" && recipient.toLowerCase().includes("@nestiquestudio.in"))) throw new Error("Test recipient is required outside production");
      const from = setting("ENQUIRY_FROM") || (environment === "production" ? "Nestique Studio <hello@nestiquestudio.in>" : undefined);
      const testKey = setting("ENQUIRY_TEST_RESEND_API_KEY");
      if (!from || (environment !== "production" && !testKey)) throw new Error("Separate test email configuration required");
      const resend = environment === "production" ? getResend() : new Resend(testKey);
      const rows = Object.entries(data).filter(([, value]) => value).map(([label, value]) => `<tr><th style="text-align:left;padding:10px">${escapeHtml(label)}</th><td style="padding:10px;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`).join("");
      const { data: delivery, error } = await resend.emails.send({ from, to: recipient, replyTo: data.email, subject: `${environment === "production" ? "" : "[STAGING] "}${kind === "contact" ? "Contact" : "Consultation"} enquiry: ${data.subject || data.projectType || "General"}`, html: `<h2>Nestique Studio enquiry</h2><table>${rows}</table>` }, { idempotencyKey: `${kind}/${key}` });
      if (error || !delivery?.id) throw new Error("Email not accepted"); return delivery.id;
    },
    async mark(key, status, deliveryId) {
      const { error } = await database().from(table).update({ notification_status: status, notification_id: deliveryId || null }).eq("request_key", key);
      if (error) throw new Error("Status update failed");
    },
  });
}
