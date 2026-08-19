"use client";

import { Button } from "@/components/ui/button";
import { ErrorState } from "@/components/portal/ErrorState";

export default function AdminError({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="space-y-4 py-10">
      <ErrorState message="Something went wrong loading this page." />
      <Button variant="outline" onClick={reset}>
        Try again
      </Button>
    </div>
  );
}
