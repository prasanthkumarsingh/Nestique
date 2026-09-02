import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { AdminLoginForm } from "@/components/portal/AdminLoginForm";

export const metadata: Metadata = {
  title: "Admin Login",
  robots: { index: false, follow: false },
};

export default async function AdminLoginPage() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  if (data.user) {
    const { data: adminRow } = await supabase
      .from("admins")
      .select("id")
      .eq("email", data.user.email!)
      .maybeSingle();

    if (adminRow) redirect("/admin");
  }

  return <AdminLoginForm redirectTo="/admin" />;
}
