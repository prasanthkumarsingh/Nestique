import { test, expect } from "@playwright/test";
import { EnquiryAdapterError, handleEnquiry, escapeHtml, type EnquiryDependencies, type EnquiryFields, type EnquiryKind } from "../../src/lib/enquiry-handler";

function fixture(options: { dbFails?: boolean; emailFails?: boolean; statusFails?: boolean } = {}) {
  const records = new Map<string, { request_hash: string; notification_status: string; fields: EnquiryFields }>();
  const notifications: string[] = [];
  const dependencies: EnquiryDependencies = {
    async insert(key, hash, fields) {
      if (options.dbFails) throw new Error("simulated database outage");
      if (records.has(key)) return "duplicate";
      records.set(key, { request_hash: hash, notification_status: "pending", fields }); return "inserted";
    },
    async find(key) { return records.get(key) || null; },
    async notify(key) { if (options.emailFails) throw new Error("simulated email failure"); notifications.push(key); return "mock-provider-accepted-id"; },
    async mark(key, status) { if (options.statusFails) throw new Error("simulated update failure"); records.get(key)!.notification_status = status; },
  };
  return { records, notifications, dependencies };
}
const details = { name: "Release Test", email: "release@example.invalid", phone: "+919999999999", city: "Hyderabad", message: "Synthetic test only", projectType: "architecture" };
function request(data: unknown, key = crypto.randomUUID()) { return new Request("https://preview.invalid/api/contact", { method: "POST", headers: { "Content-Type": "application/json", "Idempotency-Key": key }, body: JSON.stringify(data) }); }
for (const kind of ["contact", "consultation"] as EnquiryKind[]) {
  test(`${kind}: persistence and provider acceptance, concurrent duplicate protection`, async () => {
    const f = fixture(), key = crypto.randomUUID();
    const responses = await Promise.all(Array.from({ length: 8 }, () => handleEnquiry(request(details, key), kind, f.dependencies)));
    for (const response of responses) { expect(response.status).toBe(200); expect(await response.json()).toMatchObject({ success: true, accepted: true }); }
    expect(f.records.size).toBe(1); expect(f.notifications).toEqual([key]); expect(f.records.get(key)?.notification_status).toBe("sent");
    expect(f.records.get(key)?.fields.email).toBe(details.email);
  });
  test(`${kind}: conflicting retries do not alter saved data or send again`, async () => {
    const f=fixture(), key=crypto.randomUUID(); await handleEnquiry(request(details,key),kind,f.dependencies);
    const response=await handleEnquiry(request({...details,message:"changed"},key),kind,f.dependencies);
    expect(response.status).toBe(409); expect(f.records.size).toBe(1); expect(f.notifications.length).toBe(1);
  });
  test(`${kind}: database outage is failure, no notification`, async () => {
    const f=fixture({dbFails:true}); const response=await handleEnquiry(request(details),kind,f.dependencies);
    expect(response.status).toBe(503); expect(f.notifications.length).toBe(0); expect(f.records.size).toBe(0);
  });
  test(`${kind}: email failure keeps accepted enquiry, status and safe replay`, async () => {
    const f=fixture({emailFails:true}), key=crypto.randomUUID(); const response=await handleEnquiry(request(details,key),kind,f.dependencies);
    expect(await response.json()).toMatchObject({success:true,accepted:true}); expect(f.records.get(key)?.notification_status).toBe("failed");
    const retry=await handleEnquiry(request(details,key),kind,f.dependencies); expect(await retry.json()).toMatchObject({duplicate:true}); expect(f.records.size).toBe(1);
  });
}
test("malformed, oversized, non-string, invalid email and missing keys are rejected before adapters", async () => {
  const f=fixture();
  for (const input of [{}, [], null, {...details,name:{}}, {...details,email:"bad"}, {...details,message:"x".repeat(25000)}, {...details,name:"unsafe\r\nheader"}]) {
    const response=await handleEnquiry(request(input),"contact",f.dependencies); expect([400,413]).toContain(response.status);
  }
  expect((await handleEnquiry(new Request('https://preview.invalid',{method:'POST',body:'{'}),'contact',f.dependencies)).status).toBe(400);
  expect((await handleEnquiry(new Request('https://preview.invalid',{method:'POST',body:JSON.stringify(details)}),'contact',f.dependencies)).status).toBe(400);
  expect(f.records.size).toBe(0); expect(f.notifications.length).toBe(0);
});
test("HTML special characters are escaped in notification content", async () => {
  expect(escapeHtml('<img src=x onerror="bad">&\'')).toBe('&lt;img src=x onerror=&quot;bad&quot;&gt;&amp;&#39;');
});

test("persistence diagnostics retain safe stage/code/correlation without enquiry fields or exception contents", async () => {
  const f = fixture(), logs: string[] = [], original = console.error;
  console.error = (...args) => { logs.push(args.join(" ")); };
  try {
    for (const failure of [new EnquiryAdapterError("insert", "PGRST205", 404), new Error("SECRET_PROVIDER_RESPONSE " + details.email)]) {
      f.dependencies.insert = async () => { throw failure; };
      const response = await handleEnquiry(request(details), "consultation", f.dependencies);
      expect(response.status).toBe(503);
      const body = await response.json();
      expect(body.diagnosticId).toMatch(/^[a-f0-9-]{36}$/);
      expect(body).not.toHaveProperty("stage");
      const logged = JSON.parse(logs.at(-1)!);
      expect(logged.diagnosticId).toBe(body.diagnosticId);
      expect(logged.stage).toBe(failure instanceof EnquiryAdapterError ? "insert" : "persistence");
      if (failure instanceof EnquiryAdapterError) expect(logged).toMatchObject({ code: "PGRST205", status: 404 });
    }
    expect(logs.join()).not.toContain(details.email);
    expect(logs.join()).not.toContain(details.name);
    expect(logs.join()).not.toContain("SECRET_PROVIDER_RESPONSE");
    expect(f.notifications).toHaveLength(0);
  } finally { console.error = original; }
});
