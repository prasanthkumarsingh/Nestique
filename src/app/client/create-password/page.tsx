import type { Metadata } from "next";
import { CreatePasswordForm } from "@/components/portal/CreatePasswordForm";

export const metadata: Metadata = {
  title: "Create Password",
  robots: { index: false, follow: false },
};

export default function CreatePasswordPage() {
  return <CreatePasswordForm />;
}
