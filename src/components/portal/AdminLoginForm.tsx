"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { OtpBoxInput } from "@/components/portal/OtpBoxInput";
import { PortalAuthLayout, AlertBox } from "@/components/portal/PortalAuthLayout";

const TAGLINE = "The private studio for managing every client's journey.";
const OTP_LENGTH = 8;
const MIN_LENGTH = 8;

const inputClass =
  "h-14 rounded-xl border-black/10 px-5 text-base focus-visible:border-[var(--orange)] focus-visible:ring-4 focus-visible:ring-[var(--orange)]/15 sm:text-lg";
const buttonClass =
  "h-14 w-full rounded-xl bg-[var(--orange)] text-base font-semibold text-white transition-all duration-150 hover:bg-[var(--orange-hover)] active:scale-[0.98]";

type Step = "password" | "otp-email" | "otp-code" | "reset";
type Reason = "setup" | "forgot";

export function AdminLoginForm({ redirectTo }: { redirectTo: string }) {
  const router = useRouter();
  const [step, setStep] = useState<Step>("password");
  // Whether the OTP flow was entered to create a first password or reset one —
  // the mechanism is identical, only the wording changes.
  const [reason, setReason] = useState<Reason>("forgot");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function resetErrors() {
    setError(null);
  }

  async function ensureAdmin(supabase: ReturnType<typeof createClient>, value: string) {
    const { data: allowed, error: rpcError } = await supabase.rpc("is_admin_email_allowed", {
      check_email: value,
    });
    if (rpcError) throw new Error("Something went wrong. Please try again.");
    return Boolean(allowed);
  }

  async function handlePasswordLogin(e: FormEvent) {
    e.preventDefault();
    resetErrors();
    setLoading(true);

    const supabase = createClient();
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    if (signInError) {
      setError("Incorrect email or password.");
      setLoading(false);
      return;
    }

    try {
      if (!(await ensureAdmin(supabase, email.trim()))) {
        await supabase.auth.signOut();
        setError("This email isn't registered as an admin.");
        setLoading(false);
        return;
      }
    } catch (err) {
      setError((err as Error).message);
      setLoading(false);
      return;
    }

    router.push(redirectTo);
    router.refresh();
  }

  async function handleSendOtp(e: FormEvent) {
    e.preventDefault();
    resetErrors();
    setLoading(true);

    const supabase = createClient();
    try {
      if (!(await ensureAdmin(supabase, email.trim()))) {
        setError("This email isn't registered as an admin.");
        setLoading(false);
        return;
      }
    } catch (err) {
      setError((err as Error).message);
      setLoading(false);
      return;
    }

    // Allowlisted admins may not have an auth.users row yet on their first
    // visit — let the OTP create it. The is_admin_email_allowed check above
    // keeps this restricted to emails an existing admin has added.
    const { error: otpError } = await supabase.auth.signInWithOtp({
      email: email.trim(),
      options: { shouldCreateUser: true },
    });

    if (otpError) {
      setError("Could not send the code. Please try again.");
      setLoading(false);
      return;
    }

    setStep("otp-code");
    setLoading(false);
  }

  async function verifyCode(token: string) {
    resetErrors();
    setLoading(true);

    const supabase = createClient();
    const { error: verifyError } = await supabase.auth.verifyOtp({
      email: email.trim(),
      token,
      type: "email",
    });

    if (verifyError) {
      setError("That code is incorrect or expired.");
      setCode("");
      setLoading(false);
      return;
    }

    setStep("reset");
    setLoading(false);
  }

  async function handleSaveNewPassword(e: FormEvent) {
    e.preventDefault();
    resetErrors();

    if (newPassword.length < MIN_LENGTH) {
      setError(`Use at least ${MIN_LENGTH} characters.`);
      return;
    }
    if (newPassword !== confirm) {
      setError("Those passwords don't match.");
      return;
    }

    setLoading(true);
    const supabase = createClient();
    const { error: updateError } = await supabase.auth.updateUser({ password: newPassword });

    if (updateError) {
      setError("Could not save your password. Please try again.");
      setLoading(false);
      return;
    }

    router.push(redirectTo);
    router.refresh();
  }

  // Auto-submit the code once all boxes are filled.
  useEffect(() => {
    if (step === "otp-code" && code.length === OTP_LENGTH && !loading) {
      verifyCode(code);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code, step]);

  const flowTitle = reason === "setup" ? "Create your password" : "Reset your password";
  const heading =
    step === "password" ? "Welcome back" : step === "reset" ? flowTitle : flowTitle;
  const subheading =
    step === "password"
      ? "Sign in to manage clients, projects and uploads."
      : step === "reset"
        ? "Choose a password for your admin account."
        : "We'll email you a one-time code to verify it's you.";

  return (
    <PortalAuthLayout tagline={TAGLINE} heading={heading} subheading={subheading}>
      {step === "password" && (
        <form onSubmit={handlePasswordLogin} className="mt-10 space-y-5">
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
                  resetErrors();
                  setReason("forgot");
                  setStep("otp-email");
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

          {error && <AlertBox message={error} />}

          <Button type="submit" disabled={loading || !email || !password} className={buttonClass}>
            {loading && <Loader2 className="size-4 animate-spin" />}
            {loading ? "Signing in…" : "Sign in"}
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            First time here?{" "}
            <button
              type="button"
              onClick={() => {
                resetErrors();
                setReason("setup");
                setStep("otp-email");
              }}
              className="font-medium text-[var(--text)] underline-offset-4 transition-colors hover:text-[var(--orange)] hover:underline"
            >
              Create your password
            </button>
          </p>
        </form>
      )}

      {step === "otp-email" && (
        <form onSubmit={handleSendOtp} className="mt-10 space-y-5">
          <div className="space-y-2">
            <Label htmlFor="otp-email">Email address</Label>
            <Input
              id="otp-email"
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

          {error && <AlertBox message={error} />}

          <Button type="submit" disabled={loading || !email} className={buttonClass}>
            {loading && <Loader2 className="size-4 animate-spin" />}
            {loading ? "Sending code…" : "Send me a code"}
          </Button>

          <button
            type="button"
            onClick={() => {
              resetErrors();
              setStep("password");
            }}
            className="w-full text-center text-sm text-muted-foreground transition-colors hover:text-[var(--text)]"
          >
            Back to sign in
          </button>
        </form>
      )}

      {step === "otp-code" && (
        <div className="mt-10 space-y-6">
          <p className="text-sm text-muted-foreground">
            We sent an {OTP_LENGTH}-digit code to{" "}
            <span className="font-medium text-[var(--text)]">{email}</span>. Check your inbox.
          </p>

          <OtpBoxInput
            length={OTP_LENGTH}
            value={code}
            onChange={setCode}
            disabled={loading}
            autoFocus
          />

          {error && <AlertBox message={error} />}

          <Button
            type="button"
            onClick={() => verifyCode(code)}
            disabled={loading || code.length !== OTP_LENGTH}
            className={buttonClass}
          >
            {loading && <Loader2 className="size-4 animate-spin" />}
            {loading ? "Verifying…" : "Verify & continue"}
          </Button>

          <button
            type="button"
            onClick={() => {
              resetErrors();
              setCode("");
              setStep("otp-email");
            }}
            className="w-full text-center text-sm text-muted-foreground transition-colors hover:text-[var(--text)]"
          >
            Use a different email
          </button>
        </div>
      )}

      {step === "reset" && (
        <form onSubmit={handleSaveNewPassword} className="mt-10 space-y-5">
          <div className="space-y-2">
            <Label htmlFor="new-password">New password</Label>
            <Input
              id="new-password"
              type="password"
              required
              autoFocus
              autoComplete="new-password"
              placeholder="••••••••"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className={inputClass}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirm">Confirm password</Label>
            <Input
              id="confirm"
              type="password"
              required
              autoComplete="new-password"
              placeholder="••••••••"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className={inputClass}
            />
          </div>

          {error && <AlertBox message={error} />}

          <Button type="submit" disabled={loading || !newPassword || !confirm} className={buttonClass}>
            {loading && <Loader2 className="size-4 animate-spin" />}
            {loading ? "Saving…" : "Save password & continue"}
          </Button>
        </form>
      )}
    </PortalAuthLayout>
  );
}
