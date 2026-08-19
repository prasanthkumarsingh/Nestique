import { EmptyState } from "@/components/portal/EmptyState";
import type { ProjectUpdate } from "@/types/database";
import { ListTodo } from "lucide-react";

export function UpdateTimeline({ updates }: { updates: ProjectUpdate[] }) {
  const sorted = [...updates].sort((a, b) => (a.update_date < b.update_date ? 1 : -1));

  if (sorted.length === 0) {
    return <EmptyState icon={ListTodo} title="No progress updates yet" description="Check back soon." />;
  }

  return (
    <ol className="space-y-0 rounded-2xl border border-black/[0.06] bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
      {sorted.map((update, idx) => (
        <li key={update.id} className="relative flex gap-4 pb-7 last:pb-0">
          <div className="flex flex-col items-center">
            <span className="mt-1.5 size-3 shrink-0 rounded-full bg-[var(--orange)]" />
            {idx !== sorted.length - 1 && <span className="w-px flex-1 bg-black/10" />}
          </div>
          <div className="flex-1">
            <p className="text-xs text-muted-foreground">
              {new Date(update.update_date).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>
            <p className="mt-1 text-base font-semibold text-[var(--text)]">{update.title}</p>
            {update.status && <p className="mt-0.5 text-sm font-medium text-[var(--orange)]">{update.status}</p>}
            {update.description && (
              <p className="mt-1.5 text-sm text-muted-foreground">{update.description}</p>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
