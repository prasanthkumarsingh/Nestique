import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function ErrorState({ message, className }: { message: string; className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive",
        className
      )}
    >
      <AlertCircle className="size-4 shrink-0" />
      <span>{message}</span>
    </div>
  );
}
