"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, FolderKanban, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { SignOutButton } from "@/components/portal/SignOutButton";

const NAV_ITEMS = [
  { href: "/admin", label: "Overview", icon: LayoutDashboard, exact: true },
  { href: "/admin/clients", label: "Clients", icon: Users },
  { href: "/admin/projects", label: "Projects", icon: FolderKanban },
  { href: "/admin/admins", label: "Admins", icon: ShieldCheck },
];

export function AdminSidebar({ currentAdminEmail }: { currentAdminEmail?: string }) {
  const pathname = usePathname();

  return (
    <>
      <aside className="hidden w-72 shrink-0 flex-col border-r border-black/[0.06] bg-white md:flex">
        <div className="flex items-center gap-3 px-7 py-8">
          <Image src="/logo.png" alt="" width={32} height={32} className="h-8 w-auto" />
          <div>
            <span className="text-[0.95rem] font-semibold tracking-tight text-[var(--text)]">
              Nestiquè Studio
            </span>
            <p className="text-xs text-muted-foreground">Admin Panel</p>
          </div>
        </div>
        <nav className="flex-1 space-y-1.5 px-5">
          {NAV_ITEMS.map((item) => {
            const active = item.exact ? pathname === item.href : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative flex items-center gap-3 rounded-xl py-3 pr-4 pl-6 text-sm font-medium transition-colors duration-150",
                  active
                    ? "bg-[var(--orange)]/8 text-[var(--orange)]"
                    : "text-muted-foreground hover:bg-[var(--light-bg)] hover:text-[var(--text)]"
                )}
              >
                {active && (
                  <span className="absolute top-1/2 left-1 h-5 w-1 -translate-y-1/2 rounded-full bg-[var(--orange)]" />
                )}
                <item.icon className="size-[18px]" strokeWidth={active ? 2.25 : 1.75} />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="border-t border-black/[0.06] p-5">
          {currentAdminEmail && (
            <p className="mb-3 truncate px-1 text-xs text-muted-foreground">
              Signed in as <span className="font-medium text-[var(--text)]">{currentAdminEmail}</span>
            </p>
          )}
          <SignOutButton redirectTo="/admin/login" className="w-full" />
        </div>
      </aside>

      <nav className="fixed inset-x-0 bottom-0 z-20 flex border-t border-black/[0.06] bg-white/95 backdrop-blur md:hidden">
        {NAV_ITEMS.map((item) => {
          const active = item.exact ? pathname === item.href : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-1 flex-col items-center gap-1 py-3 text-[0.65rem] font-medium transition-colors duration-150",
                active ? "text-[var(--orange)]" : "text-muted-foreground"
              )}
            >
              <item.icon className="size-5" strokeWidth={active ? 2.25 : 1.75} />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
