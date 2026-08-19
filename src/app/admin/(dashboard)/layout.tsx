import { createClient } from "@/lib/supabase/server";
import { AdminSidebar } from "@/components/admin/AdminSidebar";

export default async function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  return (
    <div className="flex min-h-screen bg-[var(--light-bg)]">
      <AdminSidebar currentAdminEmail={data.user?.email} />
      <main className="min-w-0 flex-1 overflow-x-hidden pb-24 md:pb-0">
        <div className="mx-auto max-w-6xl px-6 py-10 md:px-12 md:py-14">{children}</div>
      </main>
    </div>
  );
}
