"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PortalAuthLayout, AlertBox } from "@/components/portal/PortalAuthLayout";

const TAGLINE = "Thoughtful interiors, considered spaces.";

const inputClass =
  "h-14 rounded-xl border-black/10 px-5 text-base focus-visible:border-[var(--orange)] focus-visible:ring-4 focus-visible:ring-[var(--orange)]/15 sm:text-lg";
const buttonClass =
  "h-14 w-full rounded-xl bg-[var(--orange)] text-base font-semibold text-white transition-all duration-150 hover:bg-[var(--orange-hover)] active:scale-[0.98]";

export function ClientLoginForm({
  redirectTo,
  linkExpired = false,
}: {
  redirectTo: string;
  linkExpired?: boolean;
}) {
  const router = useRouter();
  // /auth/confirm bounces expired links back here with ?error=link_expired.
  const [mode, setMode] = useState<"login" | "forgot">(linkExpired ? "forgot" : "login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(
    linkExpired ? "That link has expired or was already used. Request a new one below." : null
  );
  const [sent, setSent] = useState(false);

  async function handleLogin(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const supabase = createClient();
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    if (signInError) {
      setError(
        /email not confirmed/i.test(signInError.message)
          ? "Please open the link we emailed you and set your password first."
          : "Incorrect email or password."
      );
      setLoading(false);
      return;
    }

    router.push(redirectTo);
    router.refresh();
  }

  async function handleForgot(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const supabase = createClient();
    const trimmed = email.trim();

    const { data: allowed, error: rpcError } = await supabase.rpc("is_client_email_allowed", {
      check_email: trimmed,
    });

    if (rpcError) {
      setError("Something went wrong. Please try again.");
      setLoading(false);
      return;
    }

    if (!allowed) {
      setError("Your email isn't registered yet — please contact us.");
      setLoading(false);
      return;
    }

    const siteUrl = window.location.origin;
    const { error: resetError } = await supabase.auth.resetPasswordForEmail(trimmed, {
      redirectTo: `${siteUrl}/auth/confirm?next=/client/create-password`,
    });

    if (resetError) {
      setError("Could not send the email. Please try again.");
      setLoading(false);
      return;
    }

    setSent(true);
    setLoading(false);
  }

  const heading = mode === "login" ? "Client Portal" : "Reset your password";
  const subheading =
    mode === "login"
      ? "Sign in with your email and password to view your project."
      : "We'll email you a link to set a new password.";

  return (
    <PortalAuthLayout tagline={TAGLINE} heading={heading} subheading={subheading}>
      {sent ? (
        <div className="mt-10 space-y-4">
          <AlertBox
            tone="success"
            message={`If ${email.trim()} is registered with us, a link to set your password is on its way. Check your inbox.`}
          />
          <button
            type="button"
            onClick={() => {
              setSent(false);
              setMode("login");
              setNotice(null);
              setError(null);
            }}
            className="w-full text-center text-sm text-muted-foreground transition-colors hover:text-[var(--text)]"
          >
            Back to sign in
          </button>
        </div>
      ) : mode === "login" ? (
        <form onSubmit={handleLogin} className="mt-10 space-y-5">
          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              type="email"
              required
              autoFocus
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <button
                type="button"
                onClick={() => {
                  setMode("forgot");
                  setError(null);
                  setNotice(null);
                }}
                className="text-sm text-muted-foreground transition-colors hover:text-[var(--text)]"
              >
                Forgot password?
              </button>
            </div>
            <Input
              id="password"
              type="password"
              required
              autoComplete="current-password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={inputClass}
            />
          </div>

          {notice && <AlertBox message={notice} />}
          {error && <AlertBox message={error} />}

          <Button type="submit" disabled={loading || !email || !password} className={buttonClass}>
            {loading && <Loader2 className="size-4 animate-spin" />}
            {loading ? "Signing in…" : "Sign in"}
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            First time here? Use the link we emailed you to create a password.
          </p>
        </form>
      ) : (
        <form onSubmit={handleForgot} className="mt-10 space-y-5">
          <div className="space-y-2">
            <Label htmlFor="forgot-email">Email address</Label>
            <Input
              id="forgot-email"
              type="email"
              required
              autoFocus
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
            />
          </div>

          {notice && <AlertBox message={notice} />}
          {error && <AlertBox message={error} />}

          <Button type="submit" disabled={loading || !email} className={buttonClass}>
            {loading && <Loader2 className="size-4 animate-spin" />}
            {loading ? "Sending…" : "Email me a link"}
          </Button>

          <button
            type="button"
            onClick={() => {
              setMode("login");
              setError(null);
              setNotice(null);
            }}
            className="w-full text-center text-sm text-muted-foreground transition-colors hover:text-[var(--text)]"
          >
            Back to sign in
          </button>
        </form>
      )}
    </PortalAuthLayout>
  );
}
