import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import { ClientsManager } from "@/components/admin/ClientsManager";
import type { Client } from "@/types/database";

export const metadata: Metadata = { title: "Clients", robots: { index: false, follow: false } };

export default async function AdminClientsPage() {
  const supabase = await createClient();
  const { data: clients } = await supabase.from("clients").select("*").order("created_at", { ascending: false });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight text-[var(--text)]">Clients</h1>
        <p className="mt-2 text-base text-muted-foreground">
          Only emails listed here can sign in to the client portal.
        </p>
      </div>
      <ClientsManager initialClients={(clients ?? []) as Client[]} />
    </div>
  );
}
