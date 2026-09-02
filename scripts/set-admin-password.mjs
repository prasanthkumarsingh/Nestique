// Set (or create) an admin's email+password directly, bypassing email.
// Use this when Supabase can't send OTP/reset mail yet.
//
//   node scripts/set-admin-password.mjs [email] [password]
//
// Defaults: hello@nestiquestudio.in / Welcome@123
// Requires SUPABASE_SERVICE_ROLE_KEY + NEXT_PUBLIC_SUPABASE_URL in .env.local

import { readFileSync } from "node:fs";
import { createClient } from "@supabase/supabase-js";

function loadEnv(path) {
  try {
    for (const line of readFileSync(path, "utf8").split("\n")) {
      const m = line.match(/^\s*([A-Za-z0-9_]+)\s*=\s*(.*)\s*$/);
      if (m && process.env[m[1]] === undefined) {
        process.env[m[1]] = m[2].trim().replace(/^["']|["']$/g, "");
      }
    }
  } catch {
    /* no .env.local — rely on real env */
  }
}
loadEnv(".env.local");

const email = (process.argv[2] || "hello@nestiquestudio.in").trim().toLowerCase();
const password = process.argv[3] || "Welcome@123";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !serviceKey) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local");
  process.exit(1);
}

const supabase = createClient(url, serviceKey, { auth: { persistSession: false } });

// Find an existing auth user with this email.
let user = null;
for (let page = 1; page <= 25 && !user; page++) {
  const { data, error } = await supabase.auth.admin.listUsers({ page, perPage: 200 });
  if (error) {
    console.error("listUsers:", error.message);
    process.exit(1);
  }
  user = data.users.find((u) => u.email?.toLowerCase() === email) ?? null;
  if (data.users.length < 200) break;
}

if (user) {
  const { error } = await supabase.auth.admin.updateUserById(user.id, {
    password,
    email_confirm: true,
  });
  if (error) {
    console.error("updateUserById:", error.message);
    process.exit(1);
  }
  console.log(`Updated password for existing user ${email}`);
} else {
  const { error } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
  });
  if (error) {
    console.error("createUser:", error.message);
    process.exit(1);
  }
  console.log(`Created ${email} with a password`);
}

// Make sure the admin allowlist row exists.
const { error: upsertError } = await supabase
  .from("admins")
  .upsert({ email }, { onConflict: "email" });
if (upsertError) console.warn("admins upsert warning:", upsertError.message);

console.log(`\nDone. Sign in at /admin/login with:\n  ${email}\n  ${password}`);
