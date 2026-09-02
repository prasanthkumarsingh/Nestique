// Diagnose why an admin can't sign in.
//   node scripts/check-admin.mjs [email] [password]
// Defaults: hello@nestiquestudio.in / Welcome@123

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
  } catch {}
}
loadEnv(".env.local");

const email = (process.argv[2] || "hello@nestiquestudio.in").trim().toLowerCase();
const password = process.argv[3] || "Welcome@123";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

console.log("URL:", url || "(missing)");
console.log("anon key:", anonKey ? "set" : "(missing)");
console.log("service key:", serviceKey ? "set" : "(missing)");
console.log("---");

if (serviceKey) {
  const admin = createClient(url, serviceKey, { auth: { persistSession: false } });

  let user = null;
  for (let page = 1; page <= 25 && !user; page++) {
    const { data, error } = await admin.auth.admin.listUsers({ page, perPage: 200 });
    if (error) {
      console.log("listUsers error:", error.message);
      break;
    }
    user = data.users.find((u) => u.email?.toLowerCase() === email) ?? null;
    if (data.users.length < 200) break;
  }

  if (!user) {
    console.log(`auth.users: NO row for ${email}  ->  run scripts/set-admin-password.mjs`);
  } else {
    console.log("auth.users: found");
    console.log("  id:", user.id);
    console.log("  email_confirmed_at:", user.email_confirmed_at || "(NOT confirmed)");
    console.log("  last_sign_in_at:", user.last_sign_in_at || "(never)");
    console.log("  providers:", (user.app_metadata?.providers || []).join(", ") || "(none)");
  }

  const { data: adminRow, error: adminErr } = await admin
    .from("admins")
    .select("email, name")
    .eq("email", email)
    .maybeSingle();
  console.log(
    "admins allowlist:",
    adminErr ? `error ${adminErr.message}` : adminRow ? "present" : "MISSING"
  );
}

console.log("---");
if (anonKey) {
  const pub = createClient(url, anonKey, { auth: { persistSession: false } });
  const { data, error } = await pub.auth.signInWithPassword({ email, password });
  if (error) {
    console.log(`signInWithPassword FAILED: ${error.status} ${error.message}`);
  } else {
    console.log("signInWithPassword OK  ->  session for", data.user?.email);
  }

  const { data: rpc, error: rpcErr } = await pub.rpc("is_admin_email_allowed", {
    check_email: email,
  });
  console.log("is_admin_email_allowed RPC:", rpcErr ? `error ${rpcErr.message}` : rpc);
}
