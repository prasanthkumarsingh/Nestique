"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Loader2, AlertCircle } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { OtpBoxInput } from "@/components/portal/OtpBoxInput";
import { cn } from "@/lib/utils";

type Role = "admin" | "client";

// This project's Supabase Auth email template is configured to send an
// 8-digit code (confirmed from a live test email) — Supabase's own default
// of 6 digits does not apply here, so the boxed input is sized to match.
const OTP_LENGTH = 8;

const COPY: Record<
  Role,
  { heading: string; subheading: string; notAllowed: string; reassurance?: string; tagline: string }
> = {
  admin: {
    heading: "Welcome back",
    subheading: "Sign in to manage clients, projects and uploads.",
    notAllowed: "This email isn't registered as an admin — please contact the studio.",
    tagline: "The private studio for managing every client's journey.",
  },
  client: {
    heading: "Client Portal",
    subheading: "Sign in with your email to view your project.",
    notAllowed: "Your email isn't registered yet — please contact us.",
    reassurance: "We'll only email you if your address is registered with us.",
    tagline: "Thoughtful interiors, considered spaces.",
  },
};

export function OtpLoginForm({ role, redirectTo }: { role: Role; redirectTo: string }) {
  const router = useRouter();
  const [step, setStep] = useState<"email" | "code">("email");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const copy = COPY[role];

  async function handleEmailSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const supabase = createClient();
    const rpcName = role === "admin" ? "is_admin_email_allowed" : "is_client_email_allowed";
    const { data: allowed, error: rpcError } = await supabase.rpc(rpcName, {
      check_email: email.trim(),
    });

    if (rpcError) {
      setError("Something went wrong. Please try again.");
      setLoading(false);
      return;
    }

    if (!allowed) {
      setError(copy.notAllowed);
      setLoading(false);
      return;
    }

    const { error: otpError } = await supabase.auth.signInWithOtp({
      email: email.trim(),
      options: { shouldCreateUser: true },
    });

    if (otpError) {
      setError("Could not send the code. Please try again.");
      setLoading(false);
      return;
    }

    setStep("code");
    setLoading(false);
  }

  async function verifyCode(token: string) {
    setError(null);
    setLoading(true);

    const supabase = createClient();
    const { error: verifyError } = await supabase.auth.verifyOtp({
      email: email.trim(),
      token,
      type: "email",
    });

    if (verifyError) {
      setError("That code is incorrect or expired.");
      setLoading(false);
      return;
    }

    router.push(redirectTo);
    router.refresh();
  }

  // Auto-submit once every box is filled — no need for a separate button tap.
  useEffect(() => {
    if (step === "code" && code.length === OTP_LENGTH && !loading) {
      verifyCode(code);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code, step]);

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="relative hidden lg:block">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80"
          alt=""
          fill
          priority
          sizes="50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />
        <div className="absolute inset-0 flex flex-col justify-end p-14">
          <p className="text-xs font-semibold tracking-[0.25em] text-white/70 uppercase">Nestiquè Studio</p>
          <p className="mt-4 max-w-md text-3xl leading-tight font-semibold text-white">{copy.tagline}</p>
        </div>
      </div>

      <div className="flex min-h-screen flex-col bg-[var(--light-bg)]">
        <div className="flex items-center justify-center gap-3 bg-[var(--dark)] px-6 py-7 lg:hidden">
          <Image src="/logo.png" alt="" width={36} height={36} className="h-9 w-auto" />
          <span className="text-lg font-semibold tracking-tight text-white">Nestiquè Studio</span>
        </div>

        <div className="flex flex-1 items-center justify-center px-6 py-14 sm:px-10">
          <div className="w-full max-w-md">
            <div className="mb-10 hidden lg:block">
              <Image src="/logo.png" alt="" width={48} height={48} className="h-12 w-auto" />
            </div>

            <h1 className="text-[2.25rem] leading-[1.1] font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
              {copy.heading}
            </h1>
            <p className="mt-3 text-base text-muted-foreground">{copy.subheading}</p>

            {step === "email" ? (
              <form onSubmit={handleEmailSubmit} className="mt-10 space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="email">Email address</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    autoFocus
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-14 rounded-xl border-black/10 px-5 text-base focus-visible:border-[var(--orange)] focus-visible:ring-4 focus-visible:ring-[var(--orange)]/15 sm:text-lg"
                  />
                </div>

                {error && <AlertBox message={error} />}

                <Button
                  type="submit"
                  disabled={loading || !email}
                  className="h-14 w-full rounded-xl bg-[var(--orange)] text-base font-semibold text-white transition-all duration-150 hover:bg-[var(--orange-hover)] active:scale-[0.98]"
                >
                  {loading && <Loader2 className="size-4 animate-spin" />}
                  {loading ? "Sending code…" : "Continue"}
                </Button>

                {copy.reassurance && (
                  <p className="text-center text-sm text-muted-foreground">{copy.reassurance}</p>
                )}
              </form>
            ) : (
              <div className="mt-10 space-y-6">
                <p className="text-sm text-muted-foreground">
                  We sent an {OTP_LENGTH}-digit code to{" "}
                  <span className="font-medium text-[var(--text)]">{email}</span>. Check your inbox.
                </p>

                <OtpBoxInput length={OTP_LENGTH} value={code} onChange={setCode} disabled={loading} autoFocus />

                {error && <AlertBox message={error} />}

                <Button
                  type="button"
                  onClick={() => verifyCode(code)}
                  disabled={loading || code.length !== OTP_LENGTH}
                  className="h-14 w-full rounded-xl bg-[var(--orange)] text-base font-semibold text-white transition-all duration-150 hover:bg-[var(--orange-hover)] active:scale-[0.98]"
                >
                  {loading && <Loader2 className="size-4 animate-spin" />}
                  {loading ? "Verifying…" : "Verify & Continue"}
                </Button>

                <button
                  type="button"
                  onClick={() => {
                    setStep("email");
                    setCode("");
                    setError(null);
                  }}
                  className="w-full text-center text-sm text-muted-foreground transition-colors hover:text-[var(--text)]"
                >
                  Use a different email
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function AlertBox({ message }: { message: string }) {
  return (
    <div className={cn("flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 px-4 py-3.5")}>
      <AlertCircle className="mt-0.5 size-4 shrink-0 text-red-500" />
      <p className="text-sm text-red-700">{message}</p>
    </div>
  );
}
