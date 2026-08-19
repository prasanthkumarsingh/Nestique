import { Badge } from "@/components/ui/badge";
import { PROJECT_STATUS_LABELS, type ProjectStatus } from "@/types/database";
import { cn } from "@/lib/utils";

const STATUS_STYLES: Record<ProjectStatus, string> = {
  planning: "bg-muted text-muted-foreground",
  in_progress: "bg-[var(--orange)]/10 text-[var(--orange)]",
  completed: "bg-emerald-500/10 text-emerald-600",
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <Badge variant="secondary" className={cn("border-0", STATUS_STYLES[status])}>
      {PROJECT_STATUS_LABELS[status]}
    </Badge>
  );
}
