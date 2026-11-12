// GET-only account audit. No build, preview, token, settings or deployment mutation.
import path from 'node:path';
import { spawnSync } from 'node:child_process';
let accountId = process.env.CLOUDFLARE_ACCOUNT_ID, token = process.env.CLOUDFLARE_API_TOKEN;
if ((!accountId || !token) && process.platform === 'win32') {
  const credentialPath = path.join(process.env.LOCALAPPDATA || '', 'Nestique', 'cloudflare-readonly.credential.xml');
  const result = spawnSync('powershell.exe', ['-NoProfile', '-NonInteractive', '-Command', '$c = Import-Clixml -LiteralPath $env:NESTIQUE_CF_CREDENTIAL_PATH; @{accountId=$c.UserName;token=$c.GetNetworkCredential().Password} | ConvertTo-Json -Compress'], { encoding: 'utf8', env: { ...process.env, NESTIQUE_CF_CREDENTIAL_PATH: credentialPath }, timeout: 10000 });
  if (result.status === 0) { try { const credential = JSON.parse(result.stdout); accountId = credential.accountId; token = credential.token; } catch {} }
}
if (!/^[a-f0-9]{32}$/i.test(accountId || '') || !token) {
  console.error('No read-only Cloudflare credential configured. Local Linux validation does not need it.'); process.exit(2);
}
async function get(endpoint) {
  const response = await fetch(`https://api.cloudflare.com/client/v4/accounts/${accountId}${endpoint}`, { headers: { Authorization: `Bearer ${token}` }, signal: AbortSignal.timeout(20000) });
  const data = await response.json();
  if (!response.ok || data.success === false) {
    const error = new Error(`Cloudflare GET ${endpoint}: HTTP ${response.status}; error codes ${(data.errors || []).map(error => error.code).join(',')}`);
    error.status = response.status; throw error;
  }
  return data.result;
}
try {
  const scripts = await get('/workers/scripts');
  const worker = scripts.find(script => script.id === 'nestique');
  if (!worker?.tag) throw new Error('nestique Worker tag not found in the selected account');
  try {
    const settings = await get(`/builds/workers/${worker.tag}`);
    console.log(JSON.stringify({ worker: 'nestique', gitIntegration: { repository: settings.git_repository?.repo_name, productionBranch: settings.git_repository?.branch, previewsEnabled: settings.previews_enabled }, production: { build: settings.production_settings?.build_command, deploy: settings.production_settings?.deploy_command }, preview: { build: settings.previews_base_config?.build_command, deploy: settings.previews_base_config?.deploy_command } }, null, 2));
  } catch (error) { if (error.status !== 404) throw error; console.log('Modern build settings unavailable; checking legacy triggers.'); }
  const triggers = await get(`/builds/workers/${worker.tag}/triggers`);
  console.log(JSON.stringify({ triggers: triggers.map(trigger => ({ name: trigger.trigger_name, includes: trigger.branch_includes, excludes: trigger.branch_excludes, build: trigger.build_command, deploy: trigger.deploy_command })) }, null, 2));
} catch (error) { console.error(error.message); process.exitCode = 1; }
