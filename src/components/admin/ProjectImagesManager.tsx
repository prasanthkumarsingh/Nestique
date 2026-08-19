"use client";

import { useEffect, useState, useRef, type DragEvent } from "react";
import Image from "next/image";
import { UploadCloud, Trash2, Pencil, ImageIcon, Loader2, Check, X } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card } from "@/components/portal/Card";
import { EmptyState } from "@/components/portal/EmptyState";
import { ErrorState } from "@/components/portal/ErrorState";
import { CategoryPicker } from "@/components/admin/CategoryPicker";
import { cn } from "@/lib/utils";
import {
  ALLOWED_IMAGE_TYPES,
  MAX_IMAGE_SIZE_BYTES,
  STORAGE_BUCKET,
  type ProjectImage,
} from "@/types/database";

type QueuedFile = {
  file: File;
  status: "queued" | "uploading" | "done" | "error";
  errorMessage?: string;
};

function validateFile(file: File): string | null {
  if (!ALLOWED_IMAGE_TYPES.includes(file.type as (typeof ALLOWED_IMAGE_TYPES)[number])) {
    return "Only JPG, PNG or WEBP images are allowed.";
  }
  if (file.size > MAX_IMAGE_SIZE_BYTES) {
    return `File is too large (max ${MAX_IMAGE_SIZE_BYTES / (1024 * 1024)}MB).`;
  }
  return null;
}

export function ProjectImagesManager({
  projectId,
  initialImages,
  uploadedBy,
}: {
  projectId: string;
  initialImages: ProjectImage[];
  uploadedBy: string;
}) {
  const [images, setImages] = useState(initialImages);
  const [signedUrls, setSignedUrls] = useState<Record<string, string>>({});
  const [category, setCategory] = useState("");
  const [caption, setCaption] = useState("");
  const [queue, setQueue] = useState<QueuedFile[]>([]);
  const [dragOver, setDragOver] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [editing, setEditing] = useState<ProjectImage | null>(null);
  const [editCategory, setEditCategory] = useState("");
  const [editCaption, setEditCaption] = useState("");
  const [busyId, setBusyId] = useState<string | null>(null);
  const [renamingCategory, setRenamingCategory] = useState<string | null>(null);
  const [renameValue, setRenameValue] = useState("");
  const [renaming, setRenaming] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const existingCategories = Array.from(
    new Set(images.map((img) => img.category).filter((c): c is string => !!c))
  ).sort((a, b) => a.localeCompare(b));

  useEffect(() => {
    async function loadUrls() {
      if (images.length === 0) return;
      const supabase = createClient();
      const { data } = await supabase.storage
        .from(STORAGE_BUCKET)
        .createSignedUrls(images.map((img) => img.storage_path), 3600);

      if (data) {
        const map: Record<string, string> = {};
        data.forEach((entry) => {
          if (entry.signedUrl && entry.path) map[entry.path] = entry.signedUrl;
        });
        setSignedUrls(map);
      }
    }
    loadUrls();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images.map((i) => i.id).join(",")]);

  async function uploadFiles(files: File[]) {
    setError(null);

    if (!category.trim()) {
      setError("Choose or enter a category for this batch before uploading.");
      return;
    }

    const initialQueue: QueuedFile[] = files.map((file) => {
      const validationError = validateFile(file);
      return validationError
        ? { file, status: "error", errorMessage: validationError }
        : { file, status: "queued" };
    });
    setQueue(initialQueue);

    const supabase = createClient();
    const uploaded: ProjectImage[] = [];

    for (let i = 0; i < files.length; i++) {
      if (initialQueue[i].status === "error") continue;

      const file = files[i];
      setQueue((prev) => prev.map((q, idx) => (idx === i ? { ...q, status: "uploading" } : q)));

      const path = `${projectId}/${crypto.randomUUID()}-${file.name.replace(/[^a-zA-Z0-9.\-_]/g, "_")}`;
      const { error: uploadError } = await supabase.storage.from(STORAGE_BUCKET).upload(path, file);

      if (uploadError) {
        setQueue((prev) =>
          prev.map((q, idx) => (idx === i ? { ...q, status: "error", errorMessage: "Upload failed." } : q))
        );
        continue;
      }

      const { data: row, error: insertError } = await supabase
        .from("project_images")
        .insert({
          project_id: projectId,
          storage_path: path,
          category: category.trim() || null,
          caption: caption.trim() || null,
          uploaded_by: uploadedBy,
        })
        .select()
        .single();

      if (insertError || !row) {
        setQueue((prev) =>
          prev.map((q, idx) => (idx === i ? { ...q, status: "error", errorMessage: "Could not save." } : q))
        );
        continue;
      }

      uploaded.push(row as ProjectImage);
      setQueue((prev) => prev.map((q, idx) => (idx === i ? { ...q, status: "done" } : q)));
    }

    if (uploaded.length > 0) {
      setImages((prev) => [...uploaded, ...prev]);
    }
    if (uploaded.length < files.length) {
      setError("Some files couldn't be uploaded — see details below.");
    }

    setCategory("");
    setCaption("");
    if (uploaded.length === files.length) {
      setTimeout(() => setQueue([]), 1500);
    }
  }

  function handleDrop(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) uploadFiles(files);
  }

  function openEdit(image: ProjectImage) {
    setEditing(image);
    setEditCategory(image.category || "");
    setEditCaption(image.caption || "");
  }

  async function saveEdit() {
    if (!editing || !editCategory.trim()) return;
    const supabase = createClient();
    const { error: updateError } = await supabase
      .from("project_images")
      .update({ category: editCategory.trim(), caption: editCaption.trim() || null })
      .eq("id", editing.id);

    if (!updateError) {
      setImages((prev) =>
        prev.map((img) =>
          img.id === editing.id
            ? { ...img, category: editCategory.trim(), caption: editCaption.trim() || null }
            : img
        )
      );
      setEditing(null);
    }
  }

  async function handleDelete(image: ProjectImage) {
    if (!confirm("Delete this image?")) return;
    setBusyId(image.id);
    const supabase = createClient();
    await supabase.storage.from(STORAGE_BUCKET).remove([image.storage_path]);
    const { error: deleteError } = await supabase.from("project_images").delete().eq("id", image.id);

    if (!deleteError) {
      setImages((prev) => prev.filter((img) => img.id !== image.id));
    }
    setBusyId(null);
  }

  function openRename(categoryLabel: string) {
    setRenamingCategory(categoryLabel);
    setRenameValue(categoryLabel === "General" ? "" : categoryLabel);
  }

  async function saveRename() {
    if (!renamingCategory) return;
    const newName = renameValue.trim();
    if (!newName) return;

    setRenaming(true);
    const supabase = createClient();
    let query = supabase.from("project_images").update({ category: newName }).eq("project_id", projectId);
    query = renamingCategory === "General" ? query.is("category", null) : query.eq("category", renamingCategory);
    const { error: renameError } = await query;

    if (!renameError) {
      setImages((prev) =>
        prev.map((img) => {
          const matches = renamingCategory === "General" ? !img.category : img.category === renamingCategory;
          return matches ? { ...img, category: newName } : img;
        })
      );
      setRenamingCategory(null);
    }
    setRenaming(false);
  }

  const doneCount = queue.filter((q) => q.status === "done" || q.status === "error").length;

  return (
    <div className="space-y-6">
      <Card className="space-y-6 p-6">
        <CategoryPicker
          id="img-category"
          label="Category / room"
          required
          placeholder="e.g. Bedroom, Living Room, Site Progress"
          value={category}
          onChange={setCategory}
          existingCategories={existingCategories}
        />
        <div className="space-y-2">
          <Label htmlFor="img-caption">Caption (optional)</Label>
          <Input id="img-caption" value={caption} onChange={(e) => setCaption(e.target.value)} />
        </div>

        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={cn(
            "flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed px-6 py-12 text-center transition-colors duration-150",
            dragOver ? "border-[var(--orange)] bg-[var(--orange)]/5" : "border-black/10 bg-[var(--light-bg)]"
          )}
        >
          <UploadCloud className="mb-3 size-8 text-muted-foreground" strokeWidth={1.5} />
          <p className="text-base font-medium text-[var(--text)]">Drag & drop images, or click to browse</p>
          <p className="mt-1 text-sm text-muted-foreground">
            JPG, PNG or WEBP, up to {MAX_IMAGE_SIZE_BYTES / (1024 * 1024)}MB each
          </p>
          <input
            ref={fileInputRef}
            type="file"
            accept={ALLOWED_IMAGE_TYPES.join(",")}
            multiple
            className="hidden"
            onChange={(e) => {
              const files = Array.from(e.target.files ?? []);
              if (files.length > 0) uploadFiles(files);
              e.target.value = "";
            }}
          />
        </div>

        {queue.length > 0 && (
          <div className="space-y-3 rounded-lg bg-[var(--light-bg)] p-4">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-muted-foreground">
                {doneCount} of {queue.length} processed
              </p>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-black/10">
              <div
                className="h-full bg-[var(--orange)] transition-all duration-300"
                style={{ width: `${(doneCount / queue.length) * 100}%` }}
              />
            </div>
            <ul className="space-y-1.5">
              {queue.map((q, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm">
                  {q.status === "uploading" && (
                    <Loader2 className="size-3.5 shrink-0 animate-spin text-muted-foreground" />
                  )}
                  {q.status === "queued" && <span className="size-3.5 shrink-0 rounded-full bg-black/10" />}
                  {q.status === "done" && (
                    <Check className="size-3.5 shrink-0 text-emerald-600" strokeWidth={2.5} />
                  )}
                  {q.status === "error" && <X className="size-3.5 shrink-0 text-destructive" strokeWidth={2.5} />}
                  <span className="truncate text-[var(--text)]">{q.file.name}</span>
                  {q.errorMessage && (
                    <span className="ml-auto shrink-0 text-xs text-destructive">{q.errorMessage}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {error && <ErrorState message={error} />}
      </Card>

      {images.length === 0 ? (
        <EmptyState icon={ImageIcon} title="No images uploaded yet" />
      ) : (
        <div className="space-y-8">
          {Array.from(new Set(images.map((img) => img.category || "General"))).map((categoryLabel) => (
            <div key={categoryLabel}>
              <div className="mb-4 flex items-center gap-2">
                <h3 className="text-base font-semibold text-[var(--text)]">{categoryLabel}</h3>
                <button
                  type="button"
                  onClick={() => openRename(categoryLabel)}
                  className="text-muted-foreground transition-colors hover:text-[var(--orange)]"
                  aria-label={`Rename ${categoryLabel}`}
                >
                  <Pencil className="size-3.5" />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                {images
                  .filter((img) => (img.category || "General") === categoryLabel)
                  .map((image) => (
                    <div
                      key={image.id}
                      className="group relative overflow-hidden rounded-xl border border-black/[0.06] shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
                    >
                      <div className="relative aspect-square bg-muted">
                        {signedUrls[image.storage_path] && (
                          <Image
                            src={signedUrls[image.storage_path]}
                            alt={image.caption || image.category || "Project image"}
                            fill
                            sizes="200px"
                            className="object-cover"
                          />
                        )}
                      </div>
                      <div className="absolute inset-x-0 top-0 flex items-center justify-between gap-1 bg-gradient-to-b from-black/60 to-transparent p-1.5 opacity-0 transition-opacity group-hover:opacity-100">
                        <Button type="button" size="icon-xs" variant="secondary" onClick={() => openEdit(image)}>
                          <Pencil className="size-3" />
                        </Button>
                        <Button
                          type="button"
                          size="icon-xs"
                          variant="secondary"
                          disabled={busyId === image.id}
                          onClick={() => handleDelete(image)}
                        >
                          <Trash2 className="size-3 text-destructive" />
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      )}

      <Dialog open={!!editing} onOpenChange={(open) => !open && setEditing(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit image</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <CategoryPicker
              id="edit-category"
              label="Category / room"
              required
              value={editCategory}
              onChange={setEditCategory}
              existingCategories={existingCategories}
            />
            <div className="space-y-1.5">
              <Label htmlFor="edit-caption">Caption</Label>
              <Input id="edit-caption" value={editCaption} onChange={(e) => setEditCaption(e.target.value)} />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setEditing(null)}>
              Cancel
            </Button>
            <Button
              onClick={saveEdit}
              disabled={!editCategory.trim()}
              className="bg-[var(--orange)] text-white hover:bg-[var(--orange-hover)]"
            >
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={!!renamingCategory} onOpenChange={(open) => !open && setRenamingCategory(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Rename category</DialogTitle>
          </DialogHeader>
          <div className="space-y-1.5">
            <Label htmlFor="rename-category">
              New name for &ldquo;{renamingCategory}&rdquo;
            </Label>
            <Input id="rename-category" value={renameValue} onChange={(e) => setRenameValue(e.target.value)} />
            <p className="text-xs text-muted-foreground">
              This renames the category for every image currently in it.
            </p>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setRenamingCategory(null)}>
              Cancel
            </Button>
            <Button
              onClick={saveRename}
              disabled={renaming || !renameValue.trim()}
              className="bg-[var(--orange)] text-white hover:bg-[var(--orange-hover)]"
            >
              {renaming ? "Saving…" : "Save"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
