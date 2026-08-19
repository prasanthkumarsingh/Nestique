"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { FolderPlus, Trash2 } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/portal/Card";
import { EmptyState } from "@/components/portal/EmptyState";
import { ErrorState } from "@/components/portal/ErrorState";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { PROJECT_STATUS_LABELS, type Client, type Project, type ProjectStatus } from "@/types/database";
import { FolderKanban } from "lucide-react";

type ProjectWithClients = Project & { project_clients: { client_email: string }[] };

export function ProjectsManager({
  initialProjects,
  clients,
}: {
  initialProjects: ProjectWithClients[];
  clients: Client[];
}) {
  const [projects, setProjects] = useState(initialProjects);
  const [name, setName] = useState("");
  const [projectType, setProjectType] = useState("");
  const [status, setStatus] = useState<ProjectStatus>("planning");
  const [selectedEmails, setSelectedEmails] = useState<string[]>([]);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);

  function toggleEmail(email: string) {
    setSelectedEmails((prev) => (prev.includes(email) ? prev.filter((e) => e !== email) : [...prev, email]));
  }

  async function handleCreate(e: FormEvent) {
    e.preventDefault();
    setError(null);

    if (selectedEmails.length === 0) {
      setError("Select at least one client for this project.");
      return;
    }

    setSaving(true);
    const supabase = createClient();

    const { data: project, error: insertError } = await supabase
      .from("projects")
      .insert({ name: name.trim(), project_type: projectType.trim() || null, status })
      .select()
      .single();

    if (insertError || !project) {
      setError("Could not create project.");
      setSaving(false);
      return;
    }

    const { error: linkError } = await supabase
      .from("project_clients")
      .insert(selectedEmails.map((client_email) => ({ project_id: project.id, client_email })));

    if (linkError) {
      setError("Project created, but linking clients failed. Try adding them from the project page.");
    }

    setProjects((prev) => [
      { ...(project as Project), project_clients: selectedEmails.map((client_email) => ({ client_email })) },
      ...prev,
    ]);
    setName("");
    setProjectType("");
    setStatus("planning");
    setSelectedEmails([]);
    setSaving(false);
  }

  async function handleDelete(project: Project) {
    if (!confirm(`Delete "${project.name}"? This removes its images and updates too.`)) return;

    setBusyId(project.id);
    const supabase = createClient();
    const { error: deleteError } = await supabase.from("projects").delete().eq("id", project.id);

    if (!deleteError) {
      setProjects((prev) => prev.filter((p) => p.id !== project.id));
    }
    setBusyId(null);
  }

  return (
    <div className="space-y-8">
      <form
        onSubmit={handleCreate}
        className="space-y-5 rounded-2xl border border-black/[0.06] bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="space-y-2">
            <Label htmlFor="project-name">Project name</Label>
            <Input id="project-name" required value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="project-type">Type</Label>
            <Input
              id="project-type"
              placeholder="e.g. Residential, Office"
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Status</Label>
            <Select value={status} onValueChange={(v) => setStatus(v as ProjectStatus)}>
              <SelectTrigger className="w-full">
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
          </div>
        </div>

        <div className="space-y-2">
          <Label>Link to client(s)</Label>
          {clients.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              Add a client under Clients first, then come back here.
            </p>
          ) : (
            <div className="flex flex-wrap gap-2">
              {clients.map((client) => {
                const active = selectedEmails.includes(client.email);
                return (
                  <button
                    type="button"
                    key={client.id}
                    onClick={() => toggleEmail(client.email)}
                    className={
                      "rounded-full border px-3.5 py-2 text-sm font-medium transition-colors duration-150 " +
                      (active
                        ? "border-[var(--orange)] bg-[var(--orange)]/10 text-[var(--orange)]"
                        : "border-black/10 text-muted-foreground hover:border-[var(--orange)]/40")
                    }
                  >
                    {client.name || client.email}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {error && <ErrorState message={error} />}

        <Button
          type="submit"
          size="lg"
          disabled={saving || !name || clients.length === 0}
          className="bg-[var(--orange)] text-white hover:bg-[var(--orange-hover)]"
        >
          <FolderPlus className="size-4" />
          Create project
        </Button>
      </form>

      {projects.length === 0 ? (
        <EmptyState icon={FolderKanban} title="No projects yet" description="Create your first project above." />
      ) : (
        <Card className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-[var(--light-bg)] text-left text-xs font-medium tracking-wide text-muted-foreground uppercase">
              <tr>
                <th className="px-5 py-3.5">Project</th>
                <th className="px-5 py-3.5">Type</th>
                <th className="px-5 py-3.5">Clients</th>
                <th className="px-5 py-3.5">Status</th>
                <th className="px-5 py-3.5" />
              </tr>
            </thead>
            <tbody className="divide-y divide-black/[0.06]">
              {projects.map((project) => (
                <tr key={project.id} className="transition-colors hover:bg-[var(--light-bg)]/60">
                  <td className="px-5 py-4">
                    <Link
                      href={`/admin/projects/${project.id}`}
                      className="text-base font-medium text-[var(--text)] hover:text-[var(--orange)]"
                    >
                      {project.name}
                    </Link>
                  </td>
                  <td className="px-5 py-4 text-sm text-muted-foreground">{project.project_type || "—"}</td>
                  <td className="px-5 py-4 text-sm text-muted-foreground">
                    {project.project_clients.map((pc) => pc.client_email).join(", ") || "—"}
                  </td>
                  <td className="px-5 py-4">
                    <StatusBadge status={project.status} />
                  </td>
                  <td className="px-5 py-4 text-right">
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon-sm"
                      disabled={busyId === project.id}
                      onClick={() => handleDelete(project)}
                    >
                      <Trash2 className="size-4 text-destructive" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      )}
    </div>
  );
}
