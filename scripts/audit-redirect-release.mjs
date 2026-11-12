import {spawnSync} from 'node:child_process';
const result=spawnSync('git',['-c','credential.interactive=false','credential','fill'],{input:'protocol=https\nhost=github.com\n\n',encoding:'utf8',timeout:15000,env:{...process.env,GCM_INTERACTIVE:'never',GIT_TERMINAL_PROMPT:'0'}});
const fields=Object.fromEntries((result.stdout||'').trim().split(/\r?\n/).filter(x=>x.includes('=')).map(x=>{const i=x.indexOf('=');return[x.slice(0,i),x.slice(i+1)];}));
const token=process.env.GH_TOKEN||process.env.GITHUB_TOKEN||fields.password;
if(!token)throw new Error('GitHub credential unavailable');
const repo='/repos/prasanthkumarsingh/Nestique';
for(const path of ['/commits/master','/commits/master/check-runs','/commits/master/status','/contents/next.config.ts?ref=master','/actions/runs?per_page=3']){
 const response=await fetch('https://api.github.com'+repo+path,{headers:{Authorization:`Bearer ${token}`,Accept:'application/vnd.github+json','User-Agent':'Nestique-targeted-redirect-release'},signal:AbortSignal.timeout(20000)});
 const data=await response.json(); let summary;
 if(path==='/commits/master')summary={sha:data.sha,message:data.commit?.message?.split('\n')[0]};
 else if(path.includes('check-runs'))summary=data.check_runs?.map(x=>({id:x.id,name:x.name,status:x.status,conclusion:x.conclusion,details:x.details_url,title:x.output?.title}));
 else if(path.endsWith('/status'))summary=data.statuses?.map(x=>({context:x.context,state:x.state,target:x.target_url}));
 else if(path.includes('/contents/')){const code=Buffer.from(data.content||'','base64').toString();summary={redirects:code.slice(code.indexOf('async redirects()'),code.indexOf('images:'))};}
 else summary=data.workflow_runs?.map(x=>({id:x.id,sha:x.head_sha,event:x.event,status:x.status,conclusion:x.conclusion,url:x.html_url}));
 console.log(JSON.stringify({path,status:response.status,scopes:response.headers.get('x-oauth-scopes'),summary}));
}
