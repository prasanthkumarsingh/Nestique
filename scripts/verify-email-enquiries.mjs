// Operational test: never print credentials, email bodies or client records.
import fs from 'node:fs';
import crypto from 'node:crypto';
process.loadEnvFile('.env.local');
const headers={Authorization:`Bearer ${process.env.RESEND_API_KEY}`};
for(const kind of ['consultation','contact']){
 const file=`tmp/${kind}-production-test.json`;
 let test;
 if(fs.existsSync(file))test=JSON.parse(fs.readFileSync(file,'utf8'));
 else{test={key:crypto.randomUUID(),label:'LABELLED PRODUCTION VERIFICATION — synthetic contact, no client action required',time:new Date().toISOString()};fs.writeFileSync(file,JSON.stringify(test));}
 if(process.argv.includes('--submit')){
  const response=await fetch(`https://www.nestiquestudio.in/api/${kind}`,{method:'POST',headers:{'Content-Type':'application/json','Idempotency-Key':test.key},body:JSON.stringify({name:'Nestique Technical Verification',email:'verification@example.invalid',phone:'+00000000000',city:'Visakhapatnam',projectType:'Technical verification only',...(kind==='contact'?{subject:'Production email verification'}:{}),message:test.label,timeline:'Not a client enquiry',land:'Not applicable'}),signal:AbortSignal.timeout(30000)});
  const body=await response.json();console.log(JSON.stringify({kind,status:response.status,body,ray:response.headers.get('cf-ray')}));
  if(!response.ok)continue;
 }
 const list=await fetch('https://api.resend.com/emails',{headers,signal:AbortSignal.timeout(20000)});
 const listed=await list.json();
 if(!list.ok){console.log(JSON.stringify({kind,deliveryLookupStatus:list.status}));continue;}
 const subject=kind==='consultation'?'Consultation enquiry: Technical verification only':'Contact enquiry: Production email verification';
 // Allow small local/provider clock skew; body label and reply-to also must match.
 const candidates=(listed.data||[]).filter(email=>email.subject===subject&&new Date(email.created_at).getTime()>=new Date(test.time).getTime()-30000);
 const matches=[];
 for(const candidate of candidates){
  await new Promise(resolve=>setTimeout(resolve,600));
  const response=await fetch('https://api.resend.com/emails/'+encodeURIComponent(candidate.id),{headers,signal:AbortSignal.timeout(20000)});
  const email=await response.json();
  if(response.ok&&email.html?.includes(test.label)&&email.reply_to?.includes('verification@example.invalid'))matches.push(email);
 }
 console.log(JSON.stringify({kind,verifiedTestMessages:matches.length,lastEvents:matches.map(email=>email.last_event),sameProviderMessageOnRetry:test.deliveryId?matches.length===1&&matches[0].id===test.deliveryId:undefined}));
 if(matches.length===1){test.deliveryId=matches[0].id;fs.writeFileSync(file,JSON.stringify(test));}
 await new Promise(resolve=>setTimeout(resolve,600));
}
