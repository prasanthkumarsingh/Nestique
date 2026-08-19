import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import { AdminsManager } from "@/components/admin/AdminsManager";
import type { Admin } from "@/types/database";

export const metadata: Metadata = { title: "Admins", robots: { index: false, follow: false } };

export default async function AdminAdminsPage() {
  const supabase = await createClient();
  const [{ data: admins }, { data: userData }] = await Promise.all([
    supabase.from("admins").select("*").order("created_at", { ascending: false }),
    supabase.auth.getUser(),
  ]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight text-[var(--text)]">Admins</h1>
        <p className="mt-2 text-base text-muted-foreground">
          Only existing admins can add more admin emails.
        </p>
      </div>
      <AdminsManager
        initialAdmins={(admins ?? []) as Admin[]}
        currentAdminEmail={userData.user?.email ?? ""}
      />
    </div>
  );
}
