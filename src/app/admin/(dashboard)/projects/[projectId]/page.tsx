import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { ProjectHeaderEditor } from "@/components/admin/ProjectHeaderEditor";
import { ProjectImagesManager } from "@/components/admin/ProjectImagesManager";
import { ProjectUpdatesManager } from "@/components/admin/ProjectUpdatesManager";
import type { Client, Project, ProjectImage, ProjectUpdate } from "@/types/database";

export const metadata: Metadata = { title: "Project", robots: { index: false, follow: false } };

export default async function AdminProjectDetailPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;
  const supabase = await createClient();

  const [{ data: project }, { data: linkedClients }, { data: allClients }, { data: images }, { data: updates }, { data: userData }] =
    await Promise.all([
      supabase.from("projects").select("*").eq("id", projectId).maybeSingle(),
      supabase.from("project_clients").select("client_email").eq("project_id", projectId),
      supabase.from("clients").select("*").eq("approved", true).order("email"),
      supabase.from("project_images").select("*").eq("project_id", projectId).order("uploaded_at", { ascending: false }),
      supabase.from("project_updates").select("*").eq("project_id", projectId).order("update_date", { ascending: false }),
      supabase.auth.getUser(),
    ]);

  if (!project) notFound();

  return (
    <div className="space-y-12">
      <div>
        <Link
          href="/admin/projects"
          className="mb-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-[var(--text)]"
        >
          ← Back to projects
        </Link>
        <h1 className="text-4xl font-semibold tracking-tight text-[var(--text)]">{(project as Project).name}</h1>
        {(project as Project).project_type && (
          <p className="mt-2 text-base text-muted-foreground">{(project as Project).project_type}</p>
        )}
        <div className="mt-6">
          <ProjectHeaderEditor
            projectId={projectId}
            initialStatus={(project as Project).status}
            linkedEmails={(linkedClients ?? []).map((c) => c.client_email)}
            allClients={(allClients ?? []) as Client[]}
          />
        </div>
      </div>

      <section>
        <h2 className="mb-5 text-lg font-semibold text-[var(--text)]">Images</h2>
        <ProjectImagesManager
          projectId={projectId}
          initialImages={(images ?? []) as ProjectImage[]}
          uploadedBy={userData.user?.email ?? ""}
        />
      </section>

      <section>
        <h2 className="mb-5 text-lg font-semibold text-[var(--text)]">Progress updates</h2>
        <ProjectUpdatesManager
          projectId={projectId}
          initialUpdates={(updates ?? []) as ProjectUpdate[]}
          createdBy={userData.user?.email ?? ""}
        />
      </section>
    </div>
  );
}
