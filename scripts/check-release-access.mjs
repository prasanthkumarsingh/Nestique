// Read-only access audit. Credential values stay in process memory and never print.
import { spawnSync } from 'node:child_process';
const credential = spawnSync('git', ['-c','credential.interactive=false','credential','fill'], { input:'protocol=https\nhost=github.com\n\n', encoding:'utf8', timeout:20000, env:{...process.env,GCM_INTERACTIVE:'never',GIT_TERMINAL_PROMPT:'0'} });
const entries=Object.fromEntries((credential.stdout||'').trim().split(/\r?\n/).filter(line=>line.includes('=')).map(line=>{const i=line.indexOf('=');return [line.slice(0,i),line.slice(i+1)];}));
const token=process.env.GH_TOKEN || process.env.GITHUB_TOKEN || entries.password;
console.log(JSON.stringify({githubCredentialAvailable:!!token,credentialCommandSucceeded:credential.status===0}));
const headers={Accept:'application/vnd.github+json','User-Agent':'Nestique-release-audit','X-GitHub-Api-Version':'2022-11-28',...(token?{Authorization:`Bearer ${token}`}:{})};
const repo='prasanthkumarsingh/Nestique';
async function get(path) { const response=await fetch('https://api.github.com'+path,{headers,signal:AbortSignal.timeout(20000)});let data;try{data=await response.json();}catch{}return {status:response.status,data}; }
for (const path of [`/repos/${repo}`,`/repos/${repo}/actions/workflows`,`/repos/${repo}/hooks`,`/repos/${repo}/actions/secrets`,`/repos/${repo}/environments`,`/repos/${repo}/deployments?per_page=5`]) {
 const {status,data}=await get(path); let summary;
 if(status===200) {
  if(path.endsWith(`/repos/${repo}`)) summary={defaultBranch:data.default_branch,private:data.private,permissions:data.permissions};
  else if(path.includes('/workflows')) summary=data.workflows?.map(w=>({name:w.name,path:w.path,state:w.state,id:w.id}));
  else if(path.endsWith('/hooks')) summary=data.map(h=>({name:h.name,active:h.active,events:h.events,host:h.config?.url?new URL(h.config.url).hostname:null}));
  else if(path.endsWith('/secrets')) summary=data.secrets?.map(s=>s.name);
  else if(path.endsWith('/environments')) summary=data.environments?.map(e=>({name:e.name,protectionRules:e.protection_rules?.map(r=>r.type)}));
  else summary=data.map(d=>({environment:d.environment,ref:d.ref,sha:d.sha,createdAt:d.created_at}));
 }
 console.log(JSON.stringify({path,status,summary}));
}
