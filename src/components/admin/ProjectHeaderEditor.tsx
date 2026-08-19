"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { PROJECT_STATUS_LABELS, type Client, type ProjectStatus } from "@/types/database";

export function ProjectHeaderEditor({
  projectId,
  initialStatus,
  linkedEmails,
  allClients,
}: {
  projectId: string;
  initialStatus: ProjectStatus;
  linkedEmails: string[];
  allClients: Client[];
}) {
  const [status, setStatus] = useState(initialStatus);
  const [emails, setEmails] = useState(linkedEmails);
  const [updatingStatus, setUpdatingStatus] = useState(false);

  const available = allClients.filter((c) => !emails.includes(c.email));

  async function handleStatusChange(value: string) {
    setUpdatingStatus(true);
    const supabase = createClient();
    const { error } = await supabase
      .from("projects")
      .update({ status: value })
      .eq("id", projectId);
    if (!error) setStatus(value as ProjectStatus);
    setUpdatingStatus(false);
  }

  async function addClient(email: string) {
    const supabase = createClient();
    const { error } = await supabase.from("project_clients").insert({ project_id: projectId, client_email: email });
    if (!error) setEmails((prev) => [...prev, email]);
  }

  async function removeClient(email: string) {
    const supabase = createClient();
    const { error } = await supabase
      .from("project_clients")
      .delete()
      .eq("project_id", projectId)
      .eq("client_email", email);
    if (!error) setEmails((prev) => prev.filter((e) => e !== email));
  }

  return (
    <div className="flex flex-wrap items-center gap-4">
      <Select value={status} onValueChange={handleStatusChange} disabled={updatingStatus}>
        <SelectTrigger className="w-44">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {Object.entries(PROJECT_STATUS_LABELS).map(([value, label]) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className="flex flex-wrap items-center gap-1.5">
        {emails.map((email) => (
          <Badge key={email} variant="secondary" className="gap-1 pr-1">
            {email}
            <button type="button" onClick={() => removeClient(email)} className="rounded-full hover:bg-black/10">
              <X className="size-3" />
            </button>
          </Badge>
        ))}

        {available.length > 0 && (
          <Select key={emails.length} onValueChange={addClient}>
            <SelectTrigger className="h-7 w-auto gap-1 rounded-full border-dashed px-2.5 text-xs">
              <SelectValue placeholder="+ Link client" />
            </SelectTrigger>
            <SelectContent>
              {available.map((c) => (
                <SelectItem key={c.id} value={c.email}>
                  {c.name || c.email}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      </div>
    </div>
  );
}
