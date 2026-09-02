import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

// Admin-only. Sends a client either an invite ("create your password") email or,
// if they already have an auth account, a reset-password email. Both links land
// on /auth/confirm which forwards them to /client/create-password.
export async function POST(req: NextRequest) {
  const supabase = await createClient();

  // 1. Caller must be a signed-in admin.
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user?.email) {
    return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  }

  const { data: adminRow } = await supabase
    .from("admins")
    .select("id")
    .eq("email", user.email)
    .maybeSingle();

  if (!adminRow) {
    return NextResponse.json({ error: "Admins only." }, { status: 403 });
  }

  // 2. Validate the target address against the client allowlist.
  let email: string;
  try {
    ({ email } = await req.json());
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const normalized = (email ?? "").trim().toLowerCase();
  if (!normalized) {
    return NextResponse.json({ error: "Email is required." }, { status: 400 });
  }

  const { data: clientRow } = await supabase
    .from("clients")
    .select("id, approved")
    .eq("email", normalized)
    .maybeSingle();

  if (!clientRow) {
    return NextResponse.json({ error: "That email isn't on the client list." }, { status: 404 });
  }

  // 3. Send.
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || req.nextUrl.origin).replace(/\/$/, "");
  const redirectTo = `${siteUrl}/auth/confirm?next=/client/create-password`;

  let admin;
  try {
    admin = createAdminClient();
  } catch {
    return NextResponse.json(
      { error: "Server is missing SUPABASE_SERVICE_ROLE_KEY." },
      { status: 500 }
    );
  }

  const { error: inviteError } = await admin.auth.admin.inviteUserByEmail(normalized, {
    redirectTo,
  });

  if (!inviteError) {
    return NextResponse.json({ sent: "invite" });
  }

  // Already has an account — fall back to a password-reset email.
  const alreadyRegistered =
    inviteError.status === 422 ||
    /already been registered|already registered|already exists/i.test(inviteError.message);

  if (alreadyRegistered) {
    const { error: resetError } = await supabase.auth.resetPasswordForEmail(normalized, {
      redirectTo,
    });
    if (resetError) {
      return NextResponse.json({ error: "Could not send the reset email." }, { status: 500 });
    }
    return NextResponse.json({ sent: "reset" });
  }

  return NextResponse.json({ error: "Could not send the email." }, { status: 500 });
}
