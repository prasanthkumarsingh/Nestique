import { NextResponse, type NextRequest } from "next/server";
import type { EmailOtpType } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/server";

// Landing point for the links in Supabase's "Invite user" and "Reset password"
// emails. It exchanges the one-time token for a real session (stored in
// cookies) and then forwards the client to the create-password screen.
//
// The email templates must point here — see supabase/AUTH_SETUP.md:
//   {{ .SiteURL }}/auth/confirm?token_hash={{ .TokenHash }}&type=invite&next=/client/create-password
export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);
  const tokenHash = searchParams.get("token_hash");
  const type = searchParams.get("type") as EmailOtpType | null;
  const code = searchParams.get("code");
  const next = safeNext(searchParams.get("next"));

  const supabase = await createClient();

  if (tokenHash && type) {
    const { error } = await supabase.auth.verifyOtp({ type, token_hash: tokenHash });
    if (!error) return NextResponse.redirect(new URL(next, origin));
  } else if (code) {
    // PKCE-style link (default {{ .ConfirmationURL }} template on a PKCE project).
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) return NextResponse.redirect(new URL(next, origin));
  }

  return NextResponse.redirect(new URL("/client/login?error=link_expired", origin));
}

// Only allow same-site relative paths so the link can't be turned into an
// open redirect.
function safeNext(value: string | null): string {
  if (value && value.startsWith("/") && !value.startsWith("//")) return value;
  return "/client/create-password";
}
