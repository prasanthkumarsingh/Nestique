import type { Metadata } from "next";
import { OtpLoginForm } from "@/components/portal/OtpLoginForm";

export const metadata: Metadata = {
  title: "Client Login",
  robots: { index: false, follow: false },
};

export default function ClientLoginPage() {
  return <OtpLoginForm role="client" redirectTo="/client" />;
}
