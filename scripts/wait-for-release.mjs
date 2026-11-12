const origin=process.argv[2];
if(!origin || !['127.0.0.1','localhost'].includes(new URL(origin).hostname)) throw new Error('Local preview URL required');
for(let attempt=0;attempt<60;attempt++) {
  try { const response=await fetch(origin+'/services',{signal:AbortSignal.timeout(2000)}); if(response.status===200) { console.log('Local preview ready'); process.exit(0); } } catch {}
  await new Promise(resolve=>setTimeout(resolve,1000));
}
throw new Error('Preview did not become ready');
