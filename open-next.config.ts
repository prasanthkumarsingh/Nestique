import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// Minimal config: no ISR/cache bindings yet. Add R2 incremental cache, a
// queue, or a D1 tag cache here later if the app starts using ISR.
const config = defineCloudflareConfig({});

// package.json's "build" script is `opennextjs-cloudflare build` so the
// Cloudflare dashboard's `pnpm run build` step produces `.open-next/`.
// Without this override, OpenNext's own "Building Next.js app" step runs
// `pnpm build` — which is `opennextjs-cloudflare build` again — and recurses
// until the CI job times out. Point it straight at the plain Next build.
// OpenNext still forces standalone output via NEXT_PRIVATE_STANDALONE on the
// child process, so `build:next` does not need `output: "standalone"`.
config.buildCommand = "pnpm run build:next";

export default config;
