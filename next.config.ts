import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    // Cloudflare Workers has no Next.js image-optimization server. Serve images
    // as-is; swap in a Cloudflare Images loader later if optimization is needed.
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
      { protocol: "https", hostname: "tpkawdequqsvvtwsjfya.supabase.co" },
    ],
  },
};

export default nextConfig;

// Lets `next dev` reach the Cloudflare bindings/vars (.dev.vars) locally.
// No-op during `next build` / in production.
initOpenNextCloudflareForDev();
