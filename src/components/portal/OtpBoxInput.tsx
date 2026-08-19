"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export function OtpBoxInput({
  length,
  value,
  onChange,
  disabled,
  autoFocus,
}: {
  length: number;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  autoFocus?: boolean;
}) {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (autoFocus) inputsRef.current[0]?.focus();
  }, [autoFocus]);

  function setDigit(index: number, digit: string) {
    const chars = value.split("");
    chars[index] = digit;
    onChange(chars.join("").slice(0, length));
  }

  function handleChange(index: number, raw: string) {
    const digits = raw.replace(/\D/g, "");

    if (!digits) {
      setDigit(index, "");
      return;
    }

    if (digits.length > 1) {
      const next = (value.slice(0, index) + digits).slice(0, length);
      onChange(next);
      inputsRef.current[Math.min(index + digits.length, length - 1)]?.focus();
      return;
    }

    setDigit(index, digits);
    if (index < length - 1) inputsRef.current[index + 1]?.focus();
  }

  function handleKeyDown(index: number, e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Backspace" && !value[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputsRef.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  }

  function handlePaste(e: React.ClipboardEvent<HTMLInputElement>) {
    e.preventDefault();
    const digits = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, length);
    if (!digits) return;
    onChange(digits);
    inputsRef.current[Math.min(digits.length, length - 1)]?.focus();
  }

  return (
    <div className="flex justify-center gap-2 sm:gap-2.5">
      {Array.from({ length }).map((_, i) => (
        <input
          key={i}
          ref={(el) => {
            inputsRef.current[i] = el;
          }}
          type="text"
          inputMode="numeric"
          maxLength={1}
          autoComplete={i === 0 ? "one-time-code" : "off"}
          disabled={disabled}
          value={value[i] ?? ""}
          onChange={(e) => handleChange(i, e.target.value)}
          onKeyDown={(e) => handleKeyDown(i, e)}
          onPaste={handlePaste}
          className={cn(
            "size-10 rounded-xl border bg-white text-center text-xl font-semibold text-[var(--text)] outline-none transition-all duration-150 sm:size-12",
            "focus:border-[var(--orange)] focus:ring-4 focus:ring-[var(--orange)]/15",
            value[i] ? "border-[var(--orange)]/50" : "border-black/10",
            disabled && "opacity-60"
          )}
        />
      ))}
    </div>
  );
}
