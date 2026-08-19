import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
  className,
}: {
  icon?: LucideIcon;
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-2xl border border-dashed border-black/10 bg-[var(--light-bg)]/60 px-6 py-20 text-center",
        className
      )}
    >
      {Icon && (
        <div className="mb-4 flex size-14 items-center justify-center rounded-full bg-[var(--orange)]/10">
          <Icon className="size-6 text-[var(--orange)]" strokeWidth={1.75} />
        </div>
      )}
      <p className="text-base font-semibold text-[var(--text)]">{title}</p>
      {description && <p className="mt-1.5 max-w-sm text-sm text-muted-foreground">{description}</p>}
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}
