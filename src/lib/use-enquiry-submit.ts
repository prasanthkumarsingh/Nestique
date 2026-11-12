"use client";
import { useRef, useState } from "react";
import { trackEnquiry } from "@/lib/enquiry-events";

export function useEnquirySubmit(form: "contact" | "consultation") {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const inFlight = useRef(false);
  const attempt = useRef({ payload: "", key: "" });
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inFlight.current) return;
    inFlight.current = true;
    const element = event.currentTarget;
    const data = Object.fromEntries(new FormData(element));
    if (form === "consultation") data.message = [data.propertyType ? `Property type: ${data.propertyType}` : "", data.message].filter(Boolean).join("\n");
    const payload = JSON.stringify(data);
    if (attempt.current.payload !== payload) attempt.current = { payload, key: crypto.randomUUID() };
    setStatus("sending");
    try {
      const response = await fetch(`/api/${form}`, { method: "POST", headers: { "Content-Type": "application/json", "Idempotency-Key": attempt.current.key }, body: payload });
      const result = await response.json();
      if (!response.ok || result.success !== true || result.accepted !== true) throw new Error("Submission not confirmed");
      setStatus("success");
      if (!result.duplicate) trackEnquiry(form, String(data.projectType || "other"), String(data.city || ""));
      element.reset();
    } catch { setStatus("error"); }
    finally { inFlight.current = false; }
  }
  return { status, handleSubmit };
}
