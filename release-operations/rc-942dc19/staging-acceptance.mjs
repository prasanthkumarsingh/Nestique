// Operational acceptance test, outside the frozen application candidate.
// Default is preflight only. --execute sends two synthetic enquiries to an
// assistant-controlled localhost Worker backed by separate staging providers.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { randomUUID } from 'node:crypto';

const required = ['STAGING_BASE_URL', 'STAGING_CONFIRMED_RC', 'APP_ENV', 'ENQUIRY_DATABASE_URL', 'ENQUIRY_DATABASE_SERVICE_ROLE_KEY', 'ENQUIRY_TEST_RESEND_API_KEY', 'ENQUIRY_TEST_RECIPIENT', 'ENQUIRY_FROM'];
const missing = required.filter(name => !process.env[name]);
if (missing.length) { console.log(JSON.stringify({ candidate: '942dc19', status: 'blocked', missingSettings: missing, networkRequests: 0 })); process.exit(2); }
const env = process.env;
let base, database;
try {
assert.equal(env.STAGING_CONFIRMED_RC, '942dc19', 'Staging runtime identity must be confirmed');
assert.equal(env.APP_ENV, 'staging', 'Only staging is allowed');
base = new URL(env.STAGING_BASE_URL); database = new URL(env.ENQUIRY_DATABASE_URL);
assert(['127.0.0.1', 'localhost', '[::1]'].includes(base.hostname), 'Only a controlled localhost Worker is supported');
assert(['http:', 'https:'].includes(base.protocol) && base.pathname === '/' && !base.username && !base.password && !base.search, 'Use a localhost origin without credentials or query');
assert(database.protocol === 'https:' && /^[a-z0-9]+\.supabase\.co$/.test(database.hostname), 'Use the separate Supabase project URL');
assert.notEqual(database.hostname, 'tpkawdequqsvvtwsjfya.supabase.co', 'Production database is forbidden');
assert(!/@nestiquestudio\.in\b/i.test(env.ENQUIRY_TEST_RECIPIENT), 'Production recipients are forbidden');
assert(/^[^\s@,<>]+@[^\s@,<>]+\.[^\s@,<>]+$/.test(env.ENQUIRY_TEST_RECIPIENT), 'Use one controlled test inbox');
// Reject accidentally relabelled production credentials when the local file is available.
if (fs.existsSync('.env.local')) {
  const production = Object.fromEntries(fs.readFileSync('.env.local', 'utf8').split(/\r?\n/).filter(line => /^[A-Z_]+=/.test(line)).map(line => { const index=line.indexOf('='); return [line.slice(0,index),line.slice(index+1).replace(/^["']|["']$/g,'')]; }));
  if (production.RESEND_API_KEY) assert.notEqual(env.ENQUIRY_TEST_RESEND_API_KEY, production.RESEND_API_KEY, 'Use a separate test email credential');
  if (production.SUPABASE_SERVICE_ROLE_KEY) assert.notEqual(env.ENQUIRY_DATABASE_SERVICE_ROLE_KEY, production.SUPABASE_SERVICE_ROLE_KEY, 'Use a separate test database credential');
}
} catch {
  console.error('Staging configuration failed isolation checks. Configuration and credential values were not printed.'); process.exit(2);
}
if (!process.argv.includes('--execute')) { console.log(JSON.stringify({ candidate:'942dc19',status:'preflight passed',networkRequests:0,realTestsRun:false })); process.exit(0); }

const report = { candidate:'942dc19', status:'running', backend:'separate staging providers', realDatabase:true, realEmail:true, tests:[], inboxReceipt:'requires test-inbox confirmation', cleanup:'synthetic rows retained by request key for review' };
const output = new URL('./staging-evidence.local.json', import.meta.url);
function save() { fs.writeFileSync(output, JSON.stringify(report,null,2)+'\n'); }
async function json(url, options={}) {
  const response=await fetch(url,{...options,signal:AbortSignal.timeout(20000),redirect:'error'});
  let body; try { body=await response.json(); } catch { throw new Error(`Non-JSON response: HTTP ${response.status}`); }
  return {response,body};
}
async function submit(kind, data, key) {
  return json(new URL(`/api/${kind}`,base),{method:'POST',headers:{'Content-Type':'application/json','Idempotency-Key':key},body:JSON.stringify(data)});
}
async function row(kind,key) {
  const table=kind==='contact'?'contact_submissions':'consultation_submissions';
  const url=new URL(`/rest/v1/${table}`,database);
  url.searchParams.set('request_key',`eq.${key}`);
  url.searchParams.set('select','id,request_key,name,email,phone,city,message,notification_status,notification_id'+(kind==='contact'?',subject':',project_type'));
  const result=await json(url,{headers:{apikey:env.ENQUIRY_DATABASE_SERVICE_ROLE_KEY,Authorization:`Bearer ${env.ENQUIRY_DATABASE_SERVICE_ROLE_KEY}`}});
  assert.equal(result.response.status,200,'Staging database lookup failed');
  assert(Array.isArray(result.body) && result.body.length===1,'Expected exactly one row for this synthetic request key');
  return result.body[0];
}
async function delivery(id) {
  for(let attempt=0;attempt<45;attempt++) {
    const {response,body}=await json(`https://api.resend.com/emails/${encodeURIComponent(id)}`,{headers:{Authorization:`Bearer ${env.ENQUIRY_TEST_RESEND_API_KEY}`}});
    assert.equal(response.status,200,'Test email credential must permit delivery-metadata inspection');
    assert.deepEqual(body.to.map(value=>value.toLowerCase()),[env.ENQUIRY_TEST_RECIPIENT.toLowerCase()],'Email recipient mismatch');
    assert.equal((body.cc||[]).length,0); assert.equal((body.bcc||[]).length,0);
    if(['delivered','opened','clicked'].includes(body.last_event)) return body.last_event;
    assert(!['bounced','complained','failed','canceled','suppressed'].includes(body.last_event),'Test email delivery failed');
    await new Promise(resolve=>setTimeout(resolve,2000));
  }
  throw new Error('Provider delivery confirmation timed out; inspect the test inbox/provider logs');
}
try {
  save();
  for(const kind of ['contact','consultation']) {
    const key=randomUUID(), marker=`RC942dc19-${key}`;
    const data={name:'Synthetic Release Acceptance',email:'release-test@example.invalid',phone:'+919999999999',city:'Hyderabad',message:`Synthetic staging acceptance only: ${marker}`,...(kind==='contact'?{subject:marker}:{projectType:'architecture',land:'no'})};
    const test={form:kind,requestKey:key,status:'running'};report.tests.push(test);save();
    const initial=await submit(kind,data,key);
    assert.equal(initial.response.status,200);assert.equal(initial.body.success,true);assert.equal(initial.body.accepted,true);assert.equal(initial.body.duplicate,false);
    const persisted=await row(kind,key);
    assert.equal(persisted.name,data.name);assert.equal(persisted.email,data.email);assert.equal(persisted.phone,data.phone);assert.equal(persisted.city,data.city);assert.equal(persisted.message,data.message);
    assert.equal(persisted.notification_status,'sent','Saved enquiry needs successful notification status');assert(persisted.notification_id,'Provider message ID required');
    const duplicates=await Promise.all(Array.from({length:6},()=>submit(kind,data,key)));
    for(const result of duplicates){assert.equal(result.response.status,200);assert.equal(result.body.duplicate,true);assert.equal(result.body.accepted,true);}
    const after=await row(kind,key);assert.equal(after.id,persisted.id);assert.equal(after.notification_id,persisted.notification_id);
    const conflict=await submit(kind,{...data,message:'conflicting synthetic retry'},key);assert.equal(conflict.response.status,409);
    const invalid=await submit(kind,{},randomUUID());assert.equal(invalid.response.status,400);
    test.rowId=persisted.id;test.providerMessageId=persisted.notification_id;test.deliveryEvent=await delivery(persisted.notification_id);test.replays=6;test.status='passed';save();
  }
  report.status='passed: database, replay/conflict checks and provider delivery';save();
  console.log(JSON.stringify(report,null,2));
} catch(error) {
  report.status='failed';report.failureCode=error.code||'staging_acceptance_failed';save();
  // Do not echo provider responses, headers, secret values or arbitrary assertion values.
  console.error('Staging acceptance failed. Inspect the synthetic request IDs and provider/database status using the secure configuration.');process.exitCode=1;
}
