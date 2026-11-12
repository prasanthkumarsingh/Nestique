import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';

// This runner never logs in, uses --remote, uploads a version or deploys a Worker.
if (process.platform !== 'linux') {
  console.error('Linux required. Run from the isolated source archive inside WSL/Ubuntu or the Ubuntu CI runner.');
  process.exit(2);
}
for (const file of ['.env', '.env.local', '.env.production', '.env.production.local', '.dev.vars', '.dev.vars.staging']) {
  if (fs.existsSync(file)) throw new Error(`Use a clean validation checkout without ${file}`);
}
fs.mkdirSync('release-results', { recursive: true });
const env = { ...process.env };
for (const key of Object.keys(env)) if (/^(CLOUDFLARE_|CF_|GH_TOKEN$|GITHUB_TOKEN$|RESEND_|SUPABASE_SERVICE_ROLE_KEY$|ENQUIRY_)/.test(key)) delete env[key];
Object.assign(env, {
  CI: 'true', APP_ENV: 'release-test', WRANGLER_SEND_METRICS: 'false',
  NEXT_PUBLIC_SITE_URL: 'https://www.nestiquestudio.in',
  NEXT_PUBLIC_SUPABASE_URL: 'https://release-test.invalid', NEXT_PUBLIC_SUPABASE_ANON_KEY: 'release-test-placeholder',
  XDG_CONFIG_HOME: path.resolve('release-results/isolated-config'),
  WRANGLER_LOG_PATH: path.resolve('release-results/wrangler.log'),
});
const summary = { platform: process.platform, authenticatedChecks: false, deployment: false, stages: [] };
let worker;
function stopWorker() { if (worker?.pid) { try { process.kill(-worker.pid, 'SIGTERM'); } catch {} worker = undefined; } }
function save() { fs.writeFileSync('release-results/linux-local-summary.json', JSON.stringify(summary, null, 2) + '\n'); }
function run(command, args, extraEnv = {}) {
  console.log(`\nRunning: ${command} ${args.join(' ')}`);
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { stdio: 'inherit', env: { ...env, ...extraEnv } });
    child.on('error', reject);
    child.on('exit', code => code === 0 ? resolve() : reject(new Error(`${command} exited ${code}`)));
  });
}
async function stage(name, command, args, extraEnv) {
  const record = { name, status: 'running' }; summary.stages.push(record); save();
  try { await run(command, args, extraEnv); record.status = 'passed'; }
  catch (error) { record.status = 'failed'; throw error; }
  finally { save(); }
}
process.on('SIGINT', () => { stopWorker(); process.exit(130); });
process.on('SIGTERM', () => { stopWorker(); process.exit(143); });
try {
  if (!process.argv.includes('--skip-install')) await stage('locked dependencies', 'pnpm', ['install', '--frozen-lockfile']);
  await stage('mock form contracts', 'pnpm', ['run', 'test:contracts']);
  await stage('OpenNext packaging', 'pnpm', ['run', 'build']);
  await stage('Wrangler dry run', 'pnpm', ['exec', 'wrangler', 'deploy', '--dry-run', '--config', 'wrangler.staging.jsonc', '--outdir', 'release-results/worker-dry-run']);
  const log = fs.openSync('release-results/workerd.log', 'w');
  worker = spawn('pnpm', ['exec', 'wrangler', 'dev', '--config', 'wrangler.staging.jsonc', '--ip', '127.0.0.1', '--port', '8788'], { env, detached: true, stdio: ['ignore', log, log] });
  fs.closeSync(log);
  let spawnError;
  worker.on('error', error => { spawnError = error; });
  await stage('workerd readiness', 'node', ['scripts/wait-for-release.mjs', 'http://127.0.0.1:8788']);
  if (spawnError) throw spawnError;
  await stage('packaged HTTP crawl', 'pnpm', ['run', 'check:seo'], { SEO_TEST_ORIGIN: 'http://127.0.0.1:8788' });
  await stage('desktop and mobile browsers', 'pnpm', ['run', 'test:browser'], { RELEASE_BASE_URL: 'http://127.0.0.1:8788' });
  console.log('Local Linux validation passed. No account authentication or deployment was performed.');
} catch (error) {
  console.error(error.message); process.exitCode = 1;
} finally { stopWorker(); save(); }
