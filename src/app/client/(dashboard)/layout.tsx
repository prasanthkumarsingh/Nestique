import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { SignOutButton } from "@/components/portal/SignOutButton";

export default async function ClientDashboardLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  if (!data.user) redirect("/client/login");

  const { data: clientRow } = await supabase
    .from("clients")
    .select("id")
    .eq("email", data.user.email!)
    .eq("approved", true)
    .maybeSingle();

  if (!clientRow) redirect("/client/login");

  return (
    <div className="min-h-screen bg-[var(--light-bg)]">
      <header className="border-b border-black/[0.06] bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 md:px-10">
          <Link href="/client" className="flex items-center gap-3">
            <Image src="/logo.png" alt="" width={32} height={32} className="h-8 w-auto" />
            <span className="text-[0.95rem] font-semibold tracking-tight text-[var(--text)]">
              Nestiquè Studio
            </span>
          </Link>
          <div className="flex items-center gap-4">
            {data.user?.email && (
              <span className="hidden text-sm text-muted-foreground sm:inline">{data.user.email}</span>
            )}
            <SignOutButton redirectTo="/client/login" />
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-6 py-12 md:px-10 md:py-14">{children}</main>
    </div>
  );
}
