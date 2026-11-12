const paths = process.argv.slice(2);
const starts = paths.length ? paths : [
  'http://nestiquestudio.in/', 'https://nestiquestudio.in/',
  'http://www.nestiquestudio.in/', 'https://www.nestiquestudio.in/',
  'https://nestiquestudio.in/services?city=Vizag&redirect_probe=1',
  'https://www.nestiquestudio.in/services?city=Vizag&redirect_probe=1',
];
for (const start of starts) {
  let current=start; const seen=new Set(); const chain=[];
  for(let hop=0;hop<8;hop++) {
    if(seen.has(current)){chain.push({url:current,loop:true});break;}
    seen.add(current);
    try {
      const response=await fetch(current,{redirect:'manual',signal:AbortSignal.timeout(15000),headers:{'User-Agent':'Nestique-redirect-diagnostic','Cache-Control':'no-cache'}});
      const location=response.headers.get('location');
      chain.push({url:current,status:response.status,location,server:response.headers.get('server'),cache:response.headers.get('cf-cache-status'),age:response.headers.get('age')});
      await response.body?.cancel();
      if(!location || response.status<300 || response.status>=400) break;
      const next=new URL(location,current);
      if(!['nestiquestudio.in','www.nestiquestudio.in'].includes(next.hostname)){chain.push({externalRedirect:next.toString()});break;}
      current=next.toString();
    } catch(error){chain.push({url:current,error:error.cause?.code||error.name});break;}
  }
  console.log(JSON.stringify({start,chain}));
}
