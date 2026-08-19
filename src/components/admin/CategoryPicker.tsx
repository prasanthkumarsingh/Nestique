"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export function CategoryPicker({
  id,
  label,
  value,
  onChange,
  existingCategories,
  required,
  placeholder,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  existingCategories: string[];
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>
        {label}
        {required ? " *" : ""}
      </Label>
      {existingCategories.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {existingCategories.map((cat) => {
            const active = value === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => onChange(cat)}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors duration-150",
                  active
                    ? "border-[var(--orange)] bg-[var(--orange)]/10 text-[var(--orange)]"
                    : "border-black/10 text-muted-foreground hover:border-[var(--orange)]/40"
                )}
              >
                {cat}
              </button>
            );
          })}
        </div>
      )}
      <Input
        id={id}
        required={required}
        placeholder={placeholder ?? "e.g. Bedroom, Living Room, Site Progress"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
