"use client";

import { useState, type FormEvent } from "react";
import { Pencil, Plus, Trash2, ListTodo } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { EmptyState } from "@/components/portal/EmptyState";
import { ErrorState } from "@/components/portal/ErrorState";
import { UPDATE_STATUS_OPTIONS, type ProjectUpdate } from "@/types/database";

function today() {
  return new Date().toISOString().slice(0, 10);
}

export function ProjectUpdatesManager({
  projectId,
  initialUpdates,
  createdBy,
}: {
  projectId: string;
  initialUpdates: ProjectUpdate[];
  createdBy: string;
}) {
  const [updates, setUpdates] = useState(
    [...initialUpdates].sort((a, b) => (a.update_date < b.update_date ? 1 : -1))
  );
  const [editingId, setEditingId] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [updateDate, setUpdateDate] = useState(today());
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);

  function resetForm() {
    setEditingId(null);
    setTitle("");
    setDescription("");
    setStatus("");
    setUpdateDate(today());
  }

  function startEdit(update: ProjectUpdate) {
    setEditingId(update.id);
    setTitle(update.title);
    setDescription(update.description || "");
    setStatus(update.status || "");
    setUpdateDate(update.update_date);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setSaving(true);

    const supabase = createClient();
    const payload = {
      title: title.trim(),
      description: description.trim() || null,
      status: status.trim() || null,
      update_date: updateDate,
    };

    if (editingId) {
      const { error: updateError } = await supabase.from("project_updates").update(payload).eq("id", editingId);
      if (updateError) {
        setError("Could not save the update.");
        setSaving(false);
        return;
      }
      setUpdates((prev) =>
        [...prev.map((u) => (u.id === editingId ? { ...u, ...payload } : u))].sort((a, b) =>
          a.update_date < b.update_date ? 1 : -1
        )
      );
    } else {
      const { data, error: insertError } = await supabase
        .from("project_updates")
        .insert({ ...payload, project_id: projectId, created_by: createdBy })
        .select()
        .single();

      if (insertError || !data) {
        setError("Could not add the update.");
        setSaving(false);
        return;
      }
      setUpdates((prev) =>
        [data as ProjectUpdate, ...prev].sort((a, b) => (a.update_date < b.update_date ? 1 : -1))
      );
    }

    resetForm();
    setSaving(false);
  }

  async function handleDelete(update: ProjectUpdate) {
    if (!confirm(`Delete update "${update.title}"?`)) return;
    setBusyId(update.id);
    const supabase = createClient();
    const { error: deleteError } = await supabase.from("project_updates").delete().eq("id", update.id);

    if (!deleteError) {
      setUpdates((prev) => prev.filter((u) => u.id !== update.id));
    }
    setBusyId(null);
  }

  return (
    <div className="space-y-6">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 rounded-2xl border border-black/[0.06] bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor="update-title">Title</Label>
            <Input
              id="update-title"
              required
              placeholder="e.g. Foundation complete"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="update-date">Date</Label>
            <Input
              id="update-date"
              type="date"
              required
              value={updateDate}
              onChange={(e) => setUpdateDate(e.target.value)}
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="update-status">Status (optional)</Label>
          <Select value={status || undefined} onValueChange={setStatus}>
            <SelectTrigger id="update-status" className="w-full">
              <SelectValue placeholder="Select a status" />
            </SelectTrigger>
            <SelectContent>
              {UPDATE_STATUS_OPTIONS.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="update-description">Notes (optional)</Label>
          <Textarea
            id="update-description"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {error && <ErrorState message={error} />}

        <div className="flex gap-3">
          <Button
            type="submit"
            disabled={saving || !title}
            className="bg-[var(--orange)] text-white hover:bg-[var(--orange-hover)]"
          >
            <Plus className="size-4" />
            {editingId ? "Save update" : "Post update"}
          </Button>
          {editingId && (
            <Button type="button" variant="outline" onClick={resetForm}>
              Cancel
            </Button>
          )}
        </div>
      </form>

      {updates.length === 0 ? (
        <EmptyState icon={ListTodo} title="No progress updates yet" />
      ) : (
        <ol className="space-y-0 rounded-2xl border border-black/[0.06] bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          {updates.map((update, idx) => (
            <li key={update.id} className="relative flex gap-4 pb-7 last:pb-0">
              <div className="flex flex-col items-center">
                <span className="mt-1.5 size-3 shrink-0 rounded-full bg-[var(--orange)]" />
                {idx !== updates.length - 1 && <span className="w-px flex-1 bg-black/10" />}
              </div>
              <div className="flex-1 pt-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-xs text-muted-foreground">
                      {new Date(update.update_date).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                    <p className="mt-1 text-base font-semibold text-[var(--text)]">{update.title}</p>
                    {update.status && (
                      <p className="mt-0.5 text-sm font-medium text-[var(--orange)]">{update.status}</p>
                    )}
                    {update.description && (
                      <p className="mt-1.5 text-sm text-muted-foreground">{update.description}</p>
                    )}
                  </div>
                  <div className="flex shrink-0 gap-1">
                    <Button type="button" variant="ghost" size="icon-xs" onClick={() => startEdit(update)}>
                      <Pencil className="size-3.5" />
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon-xs"
                      disabled={busyId === update.id}
                      onClick={() => handleDelete(update)}
                    >
                      <Trash2 className="size-3.5 text-destructive" />
                    </Button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
