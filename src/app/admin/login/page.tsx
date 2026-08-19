import type { Metadata } from "next";
import { OtpLoginForm } from "@/components/portal/OtpLoginForm";

export const metadata: Metadata = {
  title: "Admin Login",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return <OtpLoginForm role="admin" redirectTo="/admin" />;
}
