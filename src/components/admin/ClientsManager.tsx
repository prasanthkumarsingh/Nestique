"use client";

import { useState, type FormEvent } from "react";
import { Mail, Trash2, UserPlus } from "lucide-react";
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
  const [notice, setNotice] = useState<string | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);

  async function sendSetupLink(targetEmail: string) {
    const res = await fetch("/api/client/send-setup-link", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: targetEmail }),
    });
    const body = (await res.json().catch(() => ({}))) as { sent?: string; error?: string };
    if (!res.ok) {
      throw new Error(body.error || "Could not send the setup email.");
    }
    return body.sent === "reset"
      ? `Password-reset link sent to ${targetEmail}.`
      : `Create-password link sent to ${targetEmail}.`;
  }

  async function handleAdd(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setNotice(null);
    setSaving(true);

    const supabase = createClient();
    const newEmail = email.trim();
    const { data, error: insertError } = await supabase
      .from("clients")
      .insert({ email: newEmail, name: name.trim() || null, phone: phone.trim() || null })
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

    try {
      setNotice(await sendSetupLink(newEmail));
    } catch (err) {
      setError(
        `${(err as Error).message} The client was added — use "Resend link" once it's resolved.`
      );
    }
    setSaving(false);
  }

  async function handleResendLink(client: Client) {
    setError(null);
    setNotice(null);
    setBusyId(client.id);
    try {
      setNotice(await sendSetupLink(client.email));
    } catch (err) {
      setError((err as Error).message);
    }
    setBusyId(null);
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
      {notice && (
        <div className="flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/5 px-4 py-3 text-sm text-emerald-700">
          <Mail className="size-4 shrink-0" />
          <span>{notice}</span>
        </div>
      )}

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
                  <td className="px-5 py-4">
                    <div className="flex items-center justify-end gap-1">
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        disabled={busyId === client.id}
                        onClick={() => handleResendLink(client)}
                      >
                        <Mail className="size-3.5" />
                        Resend link
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon-sm"
                        disabled={busyId === client.id}
                        onClick={() => handleDelete(client)}
                      >
                        <Trash2 className="size-4 text-destructive" />
                      </Button>
                    </div>
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
