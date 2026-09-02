import Image from "next/image";
import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

// Shared two-column chrome for the portal auth screens (client login,
// create password). The admin OTP screen keeps its own copy for now.
export function PortalAuthLayout({
  tagline,
  heading,
  subheading,
  children,
}: {
  tagline: string;
  heading: string;
  subheading: string;
  children: React.ReactNode;
}) {
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
          <p className="text-xs font-semibold tracking-[0.25em] text-white/70 uppercase">
            Nestiquè Studio
          </p>
          <p className="mt-4 max-w-md text-3xl leading-tight font-semibold text-white">{tagline}</p>
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
              {heading}
            </h1>
            <p className="mt-3 text-base text-muted-foreground">{subheading}</p>

            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export function AlertBox({ message, tone = "error" }: { message: string; tone?: "error" | "success" }) {
  return (
    <div
      className={cn(
        "flex items-start gap-2.5 rounded-xl border px-4 py-3.5",
        tone === "error" ? "border-red-200 bg-red-50" : "border-emerald-200 bg-emerald-50"
      )}
    >
      <AlertCircle
        className={cn(
          "mt-0.5 size-4 shrink-0",
          tone === "error" ? "text-red-500" : "text-emerald-600"
        )}
      />
      <p className={cn("text-sm", tone === "error" ? "text-red-700" : "text-emerald-700")}>
        {message}
      </p>
    </div>
  );
}
