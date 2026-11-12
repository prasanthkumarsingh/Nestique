import { createClient } from "@supabase/supabase-js";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import "server-only";

// Service-role client — bypasses RLS and can call the Auth admin API
// (inviteUserByEmail, generateLink, etc). Server-only: importing this into a
// client component would leak the secret into the browser bundle.
export function createAdminClient() {
  let serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  let url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  try {
    const env = getCloudflareContext().env as CloudflareEnv & {
      SUPABASE_SERVICE_ROLE_KEY?: string;
      NEXT_PUBLIC_SUPABASE_URL?: string;
    };
    serviceKey ||= env.SUPABASE_SERVICE_ROLE_KEY;
    url ||= env.NEXT_PUBLIC_SUPABASE_URL;
  } catch {
    // Local Next.js development can use .env.local without Worker bindings.
  }
  if (!serviceKey) {
    throw new Error("SUPABASE_SERVICE_ROLE_KEY is not set");
  }

  if (!url) throw new Error("NEXT_PUBLIC_SUPABASE_URL is not set");

  return createClient(url, serviceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}
