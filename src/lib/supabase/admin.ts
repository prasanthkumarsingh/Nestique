import { createClient } from "@supabase/supabase-js";

// Service-role client — bypasses RLS and can call the Auth admin API
// (inviteUserByEmail, generateLink, etc). Server-only: importing this into a
// client component would leak the secret into the browser bundle.
export function createAdminClient() {
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!serviceKey) {
    throw new Error("SUPABASE_SERVICE_ROLE_KEY is not set");
  }

  return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, serviceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}
