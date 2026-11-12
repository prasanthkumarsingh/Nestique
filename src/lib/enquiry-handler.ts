export type EnquiryKind = "contact" | "consultation";
export type EnquiryFields = Record<string, string>;
export type EnquiryRecord = { request_hash: string; notification_status: string };
export type EnquiryDependencies = {
  insert: (key: string, hash: string, fields: EnquiryFields) => Promise<"inserted" | "duplicate">;
  find: (key: string) => Promise<EnquiryRecord | null>;
  notify: (key: string, fields: EnquiryFields) => Promise<string>;
  mark: (key: string, status: "sent" | "failed", deliveryId?: string) => Promise<void>;
};
const json = (body: object, status = 200) => Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
const fields = ["name", "email", "phone", "city", "subject", "message", "projectType", "timeline", "land"];
export function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]!);
}

// Pure request boundary: real adapters are supplied only by the server module.
export async function handleEnquiry(req: Request, kind: EnquiryKind, deps: EnquiryDependencies) {
  let data: unknown;
  try {
    // Enforce a real streamed-body limit, including chunked requests.
    const reader = req.body?.getReader();
    if (!reader) return json({ error: "Missing request body" }, 400);
    const chunks: Uint8Array[] = []; let size = 0;
    while (true) { const { done, value } = await reader.read(); if (done) break; size += value.byteLength; if (size > 24000) { await reader.cancel(); return json({ error: "Request too large" }, 413); } chunks.push(value); }
    const body = new Uint8Array(size); let offset = 0; for (const chunk of chunks) { body.set(chunk, offset); offset += chunk.byteLength; }
    data = JSON.parse(new TextDecoder().decode(body));
  } catch { return json({ error: "Invalid JSON" }, 400); }
  if (!data || typeof data !== "object" || Array.isArray(data)) return json({ error: "Invalid fields" }, 400);
  const input = data as Record<string, unknown>, clean: EnquiryFields = {};
  for (const key of fields) {
    const value = input[key];
    if (value != null && typeof value !== "string") return json({ error: "Invalid fields" }, 400);
    clean[key] = typeof value === "string" ? value.trim() : "";
    if (clean[key].length > (key === "message" ? 5000 : 250) || /[\u0000-\u0008\u000b\u000c\u000e-\u001f]/.test(clean[key])) return json({ error: "Invalid fields" }, 400);
  }
  if (!clean.name || !/^[^\s@<>"\r\n]+@[^\s@<>"\r\n]+\.[^\s@<>"\r\n]+$/.test(clean.email) || /[\r\n]/.test(clean.name + clean.subject + clean.city + clean.projectType) || (kind === "contact" ? !clean.message : !/^[+\d() .-]{7,30}$/.test(clean.phone))) return json({ error: "Missing or invalid required fields" }, 400);
  const key = req.headers.get("Idempotency-Key");
  if (!key || !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(key)) return json({ error: "A valid submission key is required. Refresh the form and try again." }, 400);
  const bytes = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(JSON.stringify([kind, clean])));
  const hash = Array.from(new Uint8Array(bytes), byte => byte.toString(16).padStart(2, "0")).join("");
  try {
    if (await deps.insert(key, hash, clean) === "duplicate") {
      const existing = await deps.find(key);
      if (!existing || existing.request_hash !== hash) return json({ error: "This submission key has already been used for different details." }, 409);
      return json({ success: true, accepted: true, duplicate: true });
    }
  } catch {
    // Never send email if durable persistence could not be confirmed.
    console.error("Enquiry persistence unavailable", { kind });
    return json({ error: "Unable to save your enquiry. Please retry or call the studio." }, 503);
  }
  try {
    const deliveryId = await deps.notify(key, clean);
    await deps.mark(key, "sent", deliveryId);
  } catch {
    console.error("Enquiry saved; notification needs review", { kind });
    try { await deps.mark(key, "failed"); } catch { console.error("Unable to update notification status", { kind }); }
  }
  // Success means the enquiry is durably saved. Email acceptance is not inbox delivery.
  return json({ success: true, accepted: true, duplicate: false });
}
