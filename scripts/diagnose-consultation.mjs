// Values are loaded into memory only. Never print keys, rows, or enquiry content.
import fs from 'node:fs';
import crypto from 'node:crypto';
try { process.loadEnvFile('.env.local'); } catch {}
const required = ['NEXT_PUBLIC_SUPABASE_URL','SUPABASE_SERVICE_ROLE_KEY','RESEND_API_KEY'];
console.log(JSON.stringify({localConfigurationPresent:Object.fromEntries(required.map(k=>[k,Boolean(process.env[k])])),cloudflareApiCredentialPresent:Boolean(process.env.CLOUDFLARE_API_TOKEN)}));
const base = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
async function rest(path) {
  const response=await fetch(base+'/rest/v1/'+path,{headers:{apikey:key,Authorization:`Bearer ${key}`},signal:AbortSignal.timeout(20000)});
  let data;try{data=await response.json();}catch{}
  return {response,data};
}
if (base && key) {
 for (const table of ['consultation_submissions','contact_submissions']) {
  for (const column of ['id','name','email','phone','city','message',...(table==='consultation_submissions'?['project_type','timeline','land']:['subject']),'request_key','request_hash','notification_status','notification_id']) {
   const {response,data}=await rest(`${table}?select=${column}&limit=0`);
   console.log(JSON.stringify({check:'schema-read-only',table,column,ok:response.ok,status:response.status,code:data?.code}));
   if(column==='id'&&!response.ok) break;
  }
 }
}
if(process.argv.includes('--audit-email')&&process.env.RESEND_API_KEY){
 const response=await fetch('https://api.resend.com/domains',{headers:{Authorization:`Bearer ${process.env.RESEND_API_KEY}`},signal:AbortSignal.timeout(20000)});
 const data=await response.json();
 const domain=data.data?.find(domain=>domain.name==='nestiquestudio.in');
 console.log(JSON.stringify({check:'email-domain-read-only',status:response.status,domainConfigured:Boolean(domain),domainVerified:domain?.status==='verified'}));
}
if (process.argv.includes('--submit')) {
 const file='tmp/consultation-production-test.json';
 let test;
 if(fs.existsSync(file)) test=JSON.parse(fs.readFileSync(file,'utf8'));
 else {test={key:crypto.randomUUID(),label:'LABELLED PRODUCTION VERIFICATION — synthetic consultation, no client action required',time:new Date().toISOString()};fs.writeFileSync(file,JSON.stringify(test));}
 const response=await fetch('https://www.nestiquestudio.in/api/consultation',{method:'POST',headers:{'Content-Type':'application/json','Idempotency-Key':test.key},body:JSON.stringify({name:'Nestique Technical Verification',email:'verification@example.invalid',phone:'+00000000000',city:'Visakhapatnam',projectType:'Technical verification only',message:test.label,timeline:'Not a client enquiry',land:'Not applicable'}),signal:AbortSignal.timeout(30000)});
 const body=await response.json();
 console.log(JSON.stringify({check:'labelled-test-response',status:response.status,body,ray:response.headers.get('cf-ray')}));
 if(base&&key){const {response:r,data}=await rest(`consultation_submissions?select=id,notification_status,notification_id&request_key=eq.${test.key}`);console.log(JSON.stringify({check:'labelled-test-persistence',ok:r.ok,count:Array.isArray(data)?data.length:undefined,code:data?.code,notificationStatus:Array.isArray(data)?data[0]?.notification_status:undefined}));
  if(Array.isArray(data)&&data[0]?.notification_id&&process.env.RESEND_API_KEY){const email=await fetch('https://api.resend.com/emails/'+encodeURIComponent(data[0].notification_id),{headers:{Authorization:`Bearer ${process.env.RESEND_API_KEY}`},signal:AbortSignal.timeout(20000)});const delivery=await email.json();console.log(JSON.stringify({check:'labelled-test-delivery',status:email.status,lastEvent:delivery.last_event}));}
 }
}
