"use client";

import { useState, type FormEvent } from "react";
import { Trash2, UserPlus } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/portal/Card";
import { EmptyState } from "@/components/portal/EmptyState";
import { ErrorState } from "@/components/portal/ErrorState";
import type { Client } from "@/types/database";
import { Users } from "lucide-react";

export function ClientsManager({ initialClients }: { initialClients: Client[] }) {
  const [clients, setClients] = useState(initialClients);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);

  async function handleAdd(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setSaving(true);

    const supabase = createClient();
    const { data, error: insertError } = await supabase
      .from("clients")
      .insert({ email: email.trim(), name: name.trim() || null, phone: phone.trim() || null })
      .select()
      .single();

    if (insertError) {
      setError(
        insertError.code === "23505" ? "That email is already on the client list." : "Could not add client."
      );
      setSaving(false);
      return;
    }

    setClients((prev) => [data as Client, ...prev]);
    setEmail("");
    setName("");
    setPhone("");
    setSaving(false);
  }

  async function toggleApproved(client: Client) {
    setBusyId(client.id);
    const supabase = createClient();
    const { error: updateError } = await supabase
      .from("clients")
      .update({ approved: !client.approved })
      .eq("id", client.id);

    if (!updateError) {
      setClients((prev) =>
        prev.map((c) => (c.id === client.id ? { ...c, approved: !c.approved } : c))
      );
    }
    setBusyId(null);
  }

  async function handleDelete(client: Client) {
    if (!confirm(`Remove ${client.email} from client access? This also removes their project links.`)) {
      return;
    }
    setBusyId(client.id);
    const supabase = createClient();
    const { error: deleteError } = await supabase.from("clients").delete().eq("id", client.id);

    if (!deleteError) {
      setClients((prev) => prev.filter((c) => c.id !== client.id));
    }
    setBusyId(null);
  }

  return (
    <div className="space-y-8">
      <form
        onSubmit={handleAdd}
        className="grid grid-cols-1 gap-4 rounded-2xl border border-black/[0.06] bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] sm:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)_auto] sm:items-end"
      >
        <div className="space-y-2">
          <Label htmlFor="client-email">Email</Label>
          <Input
            id="client-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="client@example.com"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="client-name">Name (optional)</Label>
          <Input id="client-name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="client-phone">Phone (optional)</Label>
          <Input id="client-phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <Button
          type="submit"
          disabled={saving || !email}
          className="bg-[var(--orange)] text-white hover:bg-[var(--orange-hover)]"
        >
          <UserPlus className="size-4" />
          Add client
        </Button>
      </form>

      {error && <ErrorState message={error} />}

      {clients.length === 0 ? (
        <EmptyState
          icon={Users}
          title="No clients yet"
          description="Add a client's email above to let them sign in to their project."
        />
      ) : (
        <Card className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-[var(--light-bg)] text-left text-xs font-medium tracking-wide text-muted-foreground uppercase">
              <tr>
                <th className="px-5 py-3.5">Name</th>
                <th className="px-5 py-3.5">Email</th>
                <th className="px-5 py-3.5">Phone</th>
                <th className="px-5 py-3.5">Status</th>
                <th className="px-5 py-3.5" />
              </tr>
            </thead>
            <tbody className="divide-y divide-black/[0.06]">
              {clients.map((client) => (
                <tr key={client.id} className="transition-colors hover:bg-[var(--light-bg)]/60">
                  <td className="px-5 py-4 text-base font-medium text-[var(--text)]">
                    {client.name || "—"}
                  </td>
                  <td className="px-5 py-4 text-sm text-muted-foreground">{client.email}</td>
                  <td className="px-5 py-4 text-sm text-muted-foreground">{client.phone || "—"}</td>
                  <td className="px-5 py-4">
                    <button
                      type="button"
                      onClick={() => toggleApproved(client)}
                      disabled={busyId === client.id}
                      className="cursor-pointer"
                    >
                      <Badge variant={client.approved ? "default" : "secondary"}>
                        {client.approved ? "Approved" : "Disabled"}
                      </Badge>
                    </button>
                  </td>
                  <td className="px-5 py-4 text-right">
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon-sm"
                      disabled={busyId === client.id}
                      onClick={() => handleDelete(client)}
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
