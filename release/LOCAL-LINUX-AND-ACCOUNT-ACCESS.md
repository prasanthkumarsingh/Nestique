# Local Linux validation and separate account access

OpenNext packaging, Wrangler's upload dry run, local workerd, HTTP checks and mocked browser/form tests **do not require Cloudflare login or an API token**. They also do not require GitHub when run from the source archive. Only public dependency/browser/font downloads need network access. Production is not deployed by this validation path.

## Current Linux status

WSL 2 is installed, with a distribution named `Ubuntu` running Ubuntu 26.04.1 LTS. The complete Linux package/workerd/HTTP/browser validation has passed. No further Linux setup step is required for the current check. See `release/linux-validation.json` and the completed Linux section of `SEO-REVIEW.md`. The separate Ubuntu 24.04 GitHub workflow has not run.

## Prepared authentication-free path

The review source is exported with `git archive`, excluding `.env*`, `.dev.vars`, dependencies and build outputs. `scripts/bootstrap-linux-validation.sh` accepts that archive, creates a fresh Linux `/tmp/nestique-validation.*` workspace, downloads official Node 24 with checksum verification, installs pinned pnpm and Linux dependencies/Chromium, then runs `scripts/validate-linux-local.mjs`.

The runner removes Cloudflare/GitHub/provider credentials from its child-process environment, refuses local secret files, substitutes invalid test-project settings and isolates Wrangler's configuration directory. It performs contract tests, **full OpenNext packaging**, a staging-config dry run, loopback-only workerd, the sitemap/link/asset crawl and desktop/mobile browser tests. It terminates its owned runtime process group and writes per-stage results to `release-results/linux-local-summary.json`. No `--remote`, login, build-trigger mutation, version upload or deployment command is executed. The dry run is explicitly `wrangler deploy --dry-run`.

The bootstrap downloads browsers without requesting sudo. Missing browser system libraries can be installed separately with Linux administrative privileges; this was completed in WSL for the current run. It never installs Windows features or reboots Windows. Do not build from Windows `node_modules` or copy production environment files into Linux. The build now includes read-only static-cache population, required for the generated dynamic service/blog routes to work in workerd.

## GitHub is a separate issue

The latest authenticated GitHub check still returned HTTP 401 for repository, workflows, hooks, secret-name and deployment metadata. GitHub access must be refreshed to push/open a PR/run Actions. It does not block the local archive path. The review branch still cannot be pushed until the external production deployment integration is checked or isolated, but this is not a prerequisite for local validation.

## Account checks through the existing integration

An existing Cloudflare Git integration can use its own configured build token without Wrangler browser login. Its existence and current branch filters have not been confirmed through account access. `scripts/check-cloudflare-integration.mjs` is GET-only: it inspects the `nestique` Worker tag, existing repository/build settings, production/preview commands and legacy triggers. It does not request secret values, run a build or alter settings. This lets us use existing integration information once read-only account access is available. It does not assume that integration grants the local CLI a login.

## Scoped token setup — later, independently of the Linux checks

When account inspection is needed, create a **user API token**, not a Global API Key or account-scoped token, at https://dash.cloudflare.com/profile/api-tokens → Create Custom Token. Limit resources to the one account containing `nestique`; set a short expiry. For GET-only inspection request **Workers CI Read** (dashboard build-configuration Read permission) and **Workers Scripts Read** to resolve the Worker tag. The trigger endpoint accepts Workers CI Read. Do not grant DNS, zone, deployment or script-write permissions. If Read is unavailable in your dashboard, stop and check the available permission labels rather than selecting a broad edit template. Changes to branch isolation, if later necessary, need a separately reviewed build-configuration Edit permission; they are not performed by this reader.

To save the token later, run `scripts/save-cloudflare-readonly-token.ps1` locally. It prompts for account ID and a **hidden** token, then writes a Windows DPAPI-encrypted credential to `%LOCALAPPDATA%\Nestique\cloudflare-readonly.credential.xml`, outside the repository. Only that Windows user on that machine can decrypt it. No plaintext token is stored or printed. Do not paste the token into chat, `.env.local`, source, terminal command arguments or the validation workflow. The GET-only reader consumes this encrypted file in memory. On other hosts, use protected environment settings for `CLOUDFLARE_ACCOUNT_ID` and `CLOUDFLARE_API_TOKEN` instead; the unauthenticated validation runner discards the token.

Sources: [Microsoft WSL installation](https://learn.microsoft.com/en-us/windows/wsl/install), [Cloudflare Builds API and user-token requirement](https://developers.cloudflare.com/workers/ci-cd/builds/api-reference/), [trigger endpoint read permissions](https://developers.cloudflare.com/api/resources/workers_builds/subresources/triggers/methods/list/).
