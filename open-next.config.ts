import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// Minimal config: no ISR/cache bindings yet. Add R2 incremental cache, a
// queue, or a D1 tag cache here later if the app starts using ISR.
export default defineCloudflareConfig({});
