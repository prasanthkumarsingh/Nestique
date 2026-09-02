"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PortalAuthLayout, AlertBox } from "@/components/portal/PortalAuthLayout";

const TAGLINE = "Thoughtful interiors, considered spaces.";
const MIN_LENGTH = 8;

const inputClass =
  "h-14 rounded-xl border-black/10 px-5 text-base focus-visible:border-[var(--orange)] focus-visible:ring-4 focus-visible:ring-[var(--orange)]/15 sm:text-lg";
const buttonClass =
  "h-14 w-full rounded-xl bg-[var(--orange)] text-base font-semibold text-white transition-all duration-150 hover:bg-[var(--orange-hover)] active:scale-[0.98]";

type Status = "checking" | "ready" | "invalid" | "done";

export function CreatePasswordForm() {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("checking");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const settledRef = useRef(false);

  // The link was consumed by /auth/confirm, which set a session cookie. When
  // the template uses the implicit flow instead, supabase-js parses the URL
  // hash on load and fires onAuthStateChange. Wait briefly for either.
  useEffect(() => {
    const supabase = createClient();

    function settle(next: Status) {
      if (settledRef.current) return;
      settledRef.current = true;
      setStatus(next);
    }

    supabase.auth.getSession().then(({ data }) => {
      if (data.session) settle("ready");
    });

    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) settle("ready");
    });

    const timer = setTimeout(() => settle("invalid"), 3000);

    return () => {
      clearTimeout(timer);
      sub.subscription.unsubscribe();
    };
  }, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);

    if (password.length < MIN_LENGTH) {
      setError(`Use at least ${MIN_LENGTH} characters.`);
      return;
    }
    if (password !== confirm) {
      setError("Those passwords don't match.");
      return;
    }

    setSaving(true);
    const supabase = createClient();
    const { error: updateError } = await supabase.auth.updateUser({ password });

    if (updateError) {
      setError(
        /different from the old|should be different/i.test(updateError.message)
          ? "Please choose a password you haven't used here before."
          : "Could not save your password. Your link may have expired."
      );
      setSaving(false);
      return;
    }

    setStatus("done");
    setTimeout(() => {
      router.push("/client");
      router.refresh();
    }, 1200);
  }

  if (status === "checking") {
    return (
      <PortalAuthLayout tagline={TAGLINE} heading="One moment" subheading="Verifying your link…">
        <div className="mt-10 flex justify-center">
          <Loader2 className="size-6 animate-spin text-muted-foreground" />
        </div>
      </PortalAuthLayout>
    );
  }

  if (status === "invalid") {
    return (
      <PortalAuthLayout
        tagline={TAGLINE}
        heading="Link expired"
        subheading="This create-password link is invalid or has already been used."
      >
        <div className="mt-10 space-y-4">
          <AlertBox message="Ask the studio to resend your invite, or request a new link from the sign-in page." />
          <Link
            href="/client/login"
            className="block w-full text-center text-sm text-muted-foreground transition-colors hover:text-[var(--text)]"
          >
            Go to sign in
          </Link>
        </div>
      </PortalAuthLayout>
    );
  }

  if (status === "done") {
    return (
      <PortalAuthLayout
        tagline={TAGLINE}
        heading="You're all set"
        subheading="Password saved. Taking you to your project…"
      >
        <div className="mt-10 flex justify-center">
          <Loader2 className="size-6 animate-spin text-muted-foreground" />
        </div>
      </PortalAuthLayout>
    );
  }

  return (
    <PortalAuthLayout
      tagline={TAGLINE}
      heading="Create your password"
      subheading="Choose a password to finish setting up your client portal access."
    >
      <form onSubmit={handleSubmit} className="mt-10 space-y-5">
        <div className="space-y-2">
          <Label htmlFor="password">New password</Label>
          <Input
            id="password"
            type="password"
            required
            autoFocus
            autoComplete="new-password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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

        <Button type="submit" disabled={saving || !password || !confirm} className={buttonClass}>
          {saving && <Loader2 className="size-4 animate-spin" />}
          {saving ? "Saving…" : "Save password & continue"}
        </Button>
      </form>
    </PortalAuthLayout>
  );
}
