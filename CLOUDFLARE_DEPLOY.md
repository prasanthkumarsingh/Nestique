# Deploying to Cloudflare Workers (OpenNext)

This project now targets **Cloudflare Workers** via `@opennextjs/cloudflare`.

## Why earlier builds failed

1. **`ERR_PNPM_OUTDATED_LOCKFILE`** — `@opennextjs/cloudflare@1.20.6` needs
   `next >=15.5.24 <16 || >=16.3.3`; the repo was on `16.1.6`. `package.json`
   now pins `next` / `eslint-config-next` to `16.3.4`, `wrangler` to `^4.128.0`,
   and `pnpm-lock.yaml` is regenerated. Commit `package.json` **and**
   `pnpm-lock.yaml` together.
2. **`Node.js middleware is not currently supported`** — there is no
   `middleware.ts` in the repo. (If one is added later it must run on the Edge
   runtime — the default — not `runtime: 'nodejs'`.)
3. **`Could not find compiled Open Next config, did you run the build command?`**
   — the dashboard was set to build with `pnpm run build` (plain `next build`,
   which only writes `.next/`) and deploy with `npx wrangler deploy`. Wrangler
   then looks for `.open-next/` and finds nothing. Only
   `opennextjs-cloudflare build` produces `.open-next/`. Fix: deploy with
   **`pnpm run deploy`** (see below), not `npx wrangler deploy`.

All server code is `fetch`-based (`supabase-js`, `resend`); no Node built-ins, so
it runs on Workers with the `nodejs_compat` flag.

## Build / deploy scripts (package.json)

| Script | Runs | Use |
| --- | --- | --- |
| `build` | `next build` | local sanity check only — does **not** create `.open-next/` |
| `deploy` | `opennextjs-cloudflare build && opennextjs-cloudflare deploy` | the real deploy — self-contained, runs its own Next build |
| `preview` | `opennextjs-cloudflare build && opennextjs-cloudflare preview` | local Worker at `http://localhost:8788` |

`opennextjs-cloudflare build` invokes `next build` itself, so `deploy` / `preview`
never assume a prior `pnpm run build`.

## Files added / changed

| File | Purpose |
| --- | --- |
| `package.json` + `pnpm-lock.yaml` | `next` → 16.3.4; added `@opennextjs/cloudflare`, `wrangler`; `preview` / `deploy` / `cf-typegen` scripts; lockfile regenerated |
| `open-next.config.ts` | OpenNext adapter config (minimal — no ISR cache yet) |
| `wrangler.jsonc` | Worker name, `nodejs_compat`, assets binding, public vars |
| `next.config.ts` | dropped `output: standalone` + `compress`; `images.unoptimized: true`; `initOpenNextCloudflareForDev()` |
| `.dev.vars.example` | template for local secrets |
| `.gitignore` | ignore `.open-next/`, `.wrangler/`, `.dev.vars` |

## One-time local steps

```bash
pnpm install                 # lockfile already matches package.json
cp .dev.vars.example .dev.vars   # then fill in real values
pnpm run build               # sanity-check the plain Next build first
pnpm run preview             # builds with OpenNext + runs the Worker at http://localhost:8788
```

### Windows note

`pnpm run preview` / `pnpm run deploy` run OpenNext's `copyTracedFiles`, which
**creates symlinks**. On Windows that fails with
`EPERM: operation not permitted, symlink` unless you either:

- turn on **Settings → Privacy & security → For developers → Developer Mode**, or
- run the terminal **as Administrator**, or
- run it under **WSL**, or
- move the repo out of `OneDrive\` (OneDrive + `node_modules` is trouble anyway).

The Cloudflare build runs on **Linux**, where this is a non-issue — a Windows
`EPERM` here does not mean the CI deploy will fail. `pnpm run build` (plain
`next build`) works on Windows regardless.

## First deploy from your machine

```bash
pnpm dlx wrangler login
pnpm run deploy
```

## Continuous deploys (Cloudflare Workers Builds / Git integration)

In the Cloudflare dashboard for the `nestique` Worker → **Settings → Build**:

- **Build command:** `pnpm install` — or leave blank. Do **not** use
  `pnpm run build`; that only makes `.next/`, and the deploy then fails with
  `Could not find compiled Open Next config`.
- **Deploy command:** `pnpm run deploy` — **not** `npx wrangler deploy`.
  `pnpm run deploy` is what produces `.open-next/` and then ships it.
- **Root directory:** `/`

## Environment variables (Cloudflare dashboard → Settings → Variables and Secrets)

`NEXT_PUBLIC_*` are inlined into the client bundle **at build time**, so they must
be set before the build runs (Workers Builds exposes these to the build step).

| Name | Type | Value |
| --- | --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Plaintext | `https://tpkawdequqsvvtwsjfya.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Plaintext | `sb_publishable_…` |
| `NEXT_PUBLIC_SITE_URL` | Plaintext | your production URL, e.g. `https://nestiquestudio.in` |
| `SUPABASE_SERVICE_ROLE_KEY` | **Secret** | `service_role` key from Supabase → Settings → API |
| `RESEND_API_KEY` | **Secret** | `re_…` |

`NEXT_PUBLIC_SITE_URL` is also in `wrangler.jsonc` `vars` — keep them consistent
or remove it from one place. The dashboard value wins for deploys.

## Supabase, after the domain is live

- **Authentication → URL Configuration → Redirect URLs**: add
  `https://<your-domain>/auth/confirm`
- Keep the **Invite user** / **Reset password** email templates pointed at
  `/auth/confirm` (see `supabase/AUTH_SETUP.md`).
- Custom SMTP (Resend) under **Authentication → Emails** so invite/OTP mail sends.

## Notes

- `Dockerfile` is now unused (it was for a Node/standalone host). Left in place;
  delete if you're sure Cloudflare is the only target.
- `next/image` now emits plain `<img>` (no server optimization on Workers). For
  optimization later, add a Cloudflare Images loader in `next.config.ts`.
