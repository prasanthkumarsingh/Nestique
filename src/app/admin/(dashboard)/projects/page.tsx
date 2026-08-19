import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import { ProjectsManager } from "@/components/admin/ProjectsManager";
import type { Client, Project } from "@/types/database";

export const metadata: Metadata = { title: "Projects", robots: { index: false, follow: false } };

type ProjectWithClients = Project & { project_clients: { client_email: string }[] };

export default async function AdminProjectsPage() {
  const supabase = await createClient();
  const [{ data: projects }, { data: clients }] = await Promise.all([
    supabase
      .from("projects")
      .select("*, project_clients(client_email)")
      .order("created_at", { ascending: false }),
    supabase.from("clients").select("*").eq("approved", true).order("email"),
  ]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight text-[var(--text)]">Projects</h1>
        <p className="mt-2 text-base text-muted-foreground">Create projects and link them to clients.</p>
      </div>
      <ProjectsManager
        initialProjects={(projects ?? []) as ProjectWithClients[]}
        clients={(clients ?? []) as Client[]}
      />
    </div>
  );
}
