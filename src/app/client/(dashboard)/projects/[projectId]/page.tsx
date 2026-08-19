import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { ImageGallery } from "@/components/client/ImageGallery";
import { UpdateTimeline } from "@/components/client/UpdateTimeline";
import { STORAGE_BUCKET, type Project, type ProjectImage, type ProjectUpdate } from "@/types/database";

export const metadata: Metadata = { title: "Project", robots: { index: false, follow: false } };

export default async function ClientProjectDetailPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;
  const supabase = await createClient();

  const [{ data: project }, { data: images }, { data: updates }] = await Promise.all([
    supabase.from("projects").select("*").eq("id", projectId).maybeSingle(),
    supabase.from("project_images").select("*").eq("project_id", projectId).order("uploaded_at", { ascending: false }),
    supabase.from("project_updates").select("*").eq("project_id", projectId),
  ]);

  if (!project) notFound();

  const imageList = (images ?? []) as ProjectImage[];
  const signedUrls: Record<string, string> = {};

  if (imageList.length > 0) {
    const { data: signed } = await supabase.storage
      .from(STORAGE_BUCKET)
      .createSignedUrls(imageList.map((img) => img.storage_path), 3600);

    if (signed) {
      for (const s of signed) {
        if (s.path && s.signedUrl) signedUrls[s.path] = s.signedUrl;
      }
    }
  }

  return (
    <div className="space-y-12">
      <div>
        <Link
          href="/client"
          className="mb-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-[var(--text)]"
        >
          ← Back to your projects
        </Link>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-[var(--text)]">{(project as Project).name}</h1>
            {(project as Project).project_type && (
              <p className="mt-2 text-base text-muted-foreground">{(project as Project).project_type}</p>
            )}
          </div>
          <StatusBadge status={(project as Project).status} />
        </div>
      </div>

      <section>
        <h2 className="mb-5 text-lg font-semibold text-[var(--text)]">Gallery</h2>
        <ImageGallery images={imageList} signedUrls={signedUrls} />
      </section>

      <section>
        <h2 className="mb-5 text-lg font-semibold text-[var(--text)]">Progress</h2>
        <UpdateTimeline updates={(updates ?? []) as ProjectUpdate[]} />
      </section>
    </div>
  );
}
