import type { Metadata } from "next";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { EmptyState } from "@/components/portal/EmptyState";
import { StatusBadge } from "@/components/admin/StatusBadge";
import type { Project, ProjectUpdate } from "@/types/database";
import { FolderKanban, ImageIcon } from "lucide-react";

export const metadata: Metadata = { title: "My Projects", robots: { index: false, follow: false } };

export default async function ClientDashboardPage() {
  const supabase = await createClient();

  const { data: projects } = await supabase.from("projects").select("*").order("created_at", { ascending: false });
  const projectList = (projects ?? []) as Project[];
  const projectIds = projectList.map((p) => p.id);

  const [{ data: updates }, { data: images }] = await Promise.all([
    projectIds.length
      ? supabase.from("project_updates").select("*").in("project_id", projectIds)
      : Promise.resolve({ data: [] as ProjectUpdate[] }),
    projectIds.length
      ? supabase.from("project_images").select("project_id").in("project_id", projectIds)
      : Promise.resolve({ data: [] as { project_id: string }[] }),
  ]);

  const latestUpdateByProject = new Map<string, ProjectUpdate>();
  for (const update of (updates ?? []) as ProjectUpdate[]) {
    const existing = latestUpdateByProject.get(update.project_id);
    if (!existing || update.update_date > existing.update_date) {
      latestUpdateByProject.set(update.project_id, update);
    }
  }

  const imageCountByProject = new Map<string, number>();
  for (const img of (images ?? []) as { project_id: string }[]) {
    imageCountByProject.set(img.project_id, (imageCountByProject.get(img.project_id) ?? 0) + 1);
  }

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight text-[var(--text)]">Your Projects</h1>
        <p className="mt-2 text-base text-muted-foreground">
          Track renders, site progress and updates for each of your projects.
        </p>
      </div>

      {projectList.length === 0 ? (
        <EmptyState
          icon={FolderKanban}
          title="No projects yet"
          description="Once your studio team creates a project for you, it'll show up here."
        />
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {projectList.map((project) => {
            const latest = latestUpdateByProject.get(project.id);
            const imageCount = imageCountByProject.get(project.id) ?? 0;
            return (
              <Link
                key={project.id}
                href={`/client/projects/${project.id}`}
                className="group rounded-2xl border border-black/[0.06] bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h2 className="text-lg font-semibold text-[var(--text)] group-hover:text-[var(--orange)]">
                      {project.name}
                    </h2>
                    {project.project_type && (
                      <p className="mt-0.5 text-sm text-muted-foreground">{project.project_type}</p>
                    )}
                  </div>
                  <StatusBadge status={project.status} />
                </div>

                <div className="mt-5 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <ImageIcon className="size-3.5" />
                    {imageCount} photo{imageCount === 1 ? "" : "s"}
                  </span>
                </div>

                {latest && (
                  <div className="mt-5 border-t border-black/[0.06] pt-4">
                    <p className="text-xs text-muted-foreground">Latest update</p>
                    <p className="mt-1 text-sm font-medium text-[var(--text)]">{latest.title}</p>
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
