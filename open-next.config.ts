import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

// The marketing pages are generated at build time, including dynamic slugs.
// Serve their prerendered entries from the existing ASSETS binding. A dummy
// cache loses those entries and returns 404 for dynamicParams=false routes.
// This read-only cache requires a rebuild for content changes; add a writable
// store only if the application later adopts ISR or on-demand revalidation.
const config = defineCloudflareConfig({ incrementalCache: staticAssetsIncrementalCache });

// package.json's "build" script is `opennextjs-cloudflare build` so the
// Cloudflare dashboard's `pnpm run build` step produces `.open-next/`.
// Without this override, OpenNext's own "Building Next.js app" step runs
// `pnpm build` — which is `opennextjs-cloudflare build` again — and recurses
// until the CI job times out. Point it straight at the plain Next build.
// OpenNext still forces standalone output via NEXT_PRIVATE_STANDALONE on the
// child process, so `build:next` does not need `output: "standalone"`.
config.buildCommand = "pnpm run build:next";

export default config;
