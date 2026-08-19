import Link from "next/link";
import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/portal/Card";
import { EmptyState } from "@/components/portal/EmptyState";
import type { Project, Client } from "@/types/database";
import { FolderKanban, Users, Activity, CheckCircle2, UserPlus, FolderPlus } from "lucide-react";
import { StatusBadge } from "@/components/admin/StatusBadge";

export const metadata: Metadata = { title: "Admin Overview", robots: { index: false, follow: false } };

type ProjectWithClients = Project & { project_clients: { client_email: string }[] };

export default async function AdminOverviewPage() {
  const supabase = await createClient();

  const [{ data: clients }, { data: projects }] = await Promise.all([
    supabase.from("clients").select("*").order("created_at", { ascending: false }),
    supabase
      .from("projects")
      .select("*, project_clients(client_email)")
      .order("created_at", { ascending: false }),
  ]);

  const clientList = (clients ?? []) as Client[];
  const projectList = (projects ?? []) as ProjectWithClients[];

  const activeCount = projectList.filter((p) => p.status !== "completed").length;
  const completedCount = projectList.filter((p) => p.status === "completed").length;

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight text-[var(--text)]">Overview</h1>
        <p className="mt-2 text-base text-muted-foreground">
          Everything happening across clients and projects.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <StatCard icon={Users} label="Clients" value={clientList.length} />
        <StatCard icon={FolderKanban} label="Total Projects" value={projectList.length} />
        <StatCard icon={Activity} label="Active" value={activeCount} />
        <StatCard icon={CheckCircle2} label="Completed" value={completedCount} />
      </div>

      <section>
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-[var(--text)]">Recent projects</h2>
          <Link href="/admin/projects" className="text-sm font-medium text-[var(--orange)] hover:underline">
            View all
          </Link>
        </div>
        {projectList.length === 0 ? (
          <EmptyState
            icon={FolderKanban}
            title="No projects yet"
            description="Create your first project to start tracking renders and progress for a client."
            action={
              <Button asChild className="bg-[var(--orange)] text-white hover:bg-[var(--orange-hover)]">
                <Link href="/admin/projects">
                  <FolderPlus className="size-4" />
                  Create a project
                </Link>
              </Button>
            }
          />
        ) : (
          <Card className="overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-[var(--light-bg)] text-left text-xs font-medium tracking-wide text-muted-foreground uppercase">
                <tr>
                  <th className="px-5 py-3.5">Project</th>
                  <th className="px-5 py-3.5">Clients</th>
                  <th className="px-5 py-3.5">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/[0.06]">
                {projectList.slice(0, 8).map((project) => (
                  <tr key={project.id} className="transition-colors hover:bg-[var(--light-bg)]/60">
                    <td className="px-5 py-4">
                      <Link
                        href={`/admin/projects/${project.id}`}
                        className="font-medium text-[var(--text)] hover:text-[var(--orange)]"
                      >
                        {project.name}
                      </Link>
                    </td>
                    <td className="px-5 py-4 text-sm text-muted-foreground">
                      {project.project_clients.map((pc) => pc.client_email).join(", ") || "—"}
                    </td>
                    <td className="px-5 py-4">
                      <StatusBadge status={project.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        )}
      </section>

      <section>
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-[var(--text)]">Clients</h2>
          <Link href="/admin/clients" className="text-sm font-medium text-[var(--orange)] hover:underline">
            Manage
          </Link>
        </div>
        {clientList.length === 0 ? (
          <EmptyState
            icon={Users}
            title="No clients yet"
            description="Add a client's email to let them sign in and follow their project."
            action={
              <Button asChild className="bg-[var(--orange)] text-white hover:bg-[var(--orange-hover)]">
                <Link href="/admin/clients">
                  <UserPlus className="size-4" />
                  Add a client
                </Link>
              </Button>
            }
          />
        ) : (
          <Card className="overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-[var(--light-bg)] text-left text-xs font-medium tracking-wide text-muted-foreground uppercase">
                <tr>
                  <th className="px-5 py-3.5">Name</th>
                  <th className="px-5 py-3.5">Email</th>
                  <th className="px-5 py-3.5">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/[0.06]">
                {clientList.slice(0, 8).map((client) => (
                  <tr key={client.id} className="transition-colors hover:bg-[var(--light-bg)]/60">
                    <td className="px-5 py-4 font-medium text-[var(--text)]">{client.name || "—"}</td>
                    <td className="px-5 py-4 text-sm text-muted-foreground">{client.email}</td>
                    <td className="px-5 py-4">
                      <Badge variant={client.approved ? "default" : "secondary"}>
                        {client.approved ? "Approved" : "Disabled"}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        )}
      </section>
    </div>
  );
}

function StatCard({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: number }) {
  return (
    <Card className="p-6 transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
      <div className="flex size-11 items-center justify-center rounded-xl bg-[var(--orange)]/10">
        <Icon className="size-5 text-[var(--orange)]" strokeWidth={1.75} />
      </div>
      <p className="mt-4 text-4xl font-bold tracking-tight text-[var(--text)] sm:text-[2.75rem]">{value}</p>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </Card>
  );
}
