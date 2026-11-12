import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    // OpenNext matches hosts as regexes and leaves an empty wildcard literal.
    // Match only the apex host, and give the homepage a concrete destination.
    return [
      { source: "/", has: [{ type: "host", value: "^nestiquestudio\\.in$" }], destination: "https://www.nestiquestudio.in/", permanent: true },
      { source: "/:path*", has: [{ type: "host", value: "^nestiquestudio\\.in$" }], destination: "https://www.nestiquestudio.in/:path*", permanent: true },
    ];
  },
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
