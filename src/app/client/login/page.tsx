import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { OtpLoginForm } from "@/components/portal/OtpLoginForm";

export const metadata: Metadata = {
  title: "Client Login",
  robots: { index: false, follow: false },
};

export default async function ClientLoginPage() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  if (data.user) {
    const { data: clientRow } = await supabase
      .from("clients")
      .select("id")
      .eq("email", data.user.email!)
      .eq("approved", true)
      .maybeSingle();

    if (clientRow) redirect("/client");
  }

  return <OtpLoginForm role="client" redirectTo="/client" />;
}
