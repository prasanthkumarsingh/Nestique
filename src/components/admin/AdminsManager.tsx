"use client";

import { useState, type FormEvent } from "react";
import { ShieldPlus, Trash2 } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/portal/Card";
import { EmptyState } from "@/components/portal/EmptyState";
import { ErrorState } from "@/components/portal/ErrorState";
import type { Admin } from "@/types/database";
import { ShieldCheck } from "lucide-react";

export function AdminsManager({
  initialAdmins,
  currentAdminEmail,
}: {
  initialAdmins: Admin[];
  currentAdminEmail: string;
}) {
  const [admins, setAdmins] = useState(initialAdmins);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);

  async function handleAdd(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setSaving(true);

    const supabase = createClient();
    const { data, error: insertError } = await supabase
      .from("admins")
      .insert({ email: email.trim(), name: name.trim() || null, added_by: currentAdminEmail })
      .select()
      .single();

    if (insertError) {
      setError(
        insertError.code === "23505" ? "That email is already an admin." : "Could not add admin."
      );
      setSaving(false);
      return;
    }

    setAdmins((prev) => [data as Admin, ...prev]);
    setEmail("");
    setName("");
    setSaving(false);
  }

  async function handleDelete(admin: Admin) {
    if (admin.email === currentAdminEmail) {
      setError("You can't remove your own admin access.");
      return;
    }
    if (!confirm(`Remove admin access for ${admin.email}?`)) return;

    setBusyId(admin.id);
    const supabase = createClient();
    const { error: deleteError } = await supabase.from("admins").delete().eq("id", admin.id);

    if (!deleteError) {
      setAdmins((prev) => prev.filter((a) => a.id !== admin.id));
    }
    setBusyId(null);
  }

  return (
    <div className="space-y-8">
      <form
        onSubmit={handleAdd}
        className="grid grid-cols-1 gap-4 rounded-2xl border border-black/[0.06] bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] sm:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_auto] sm:items-end"
      >
        <div className="space-y-2">
          <Label htmlFor="admin-email">Email</Label>
          <Input
            id="admin-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="staff@nestiquestudio.in"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="admin-name">Name (optional)</Label>
          <Input id="admin-name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <Button
          type="submit"
          disabled={saving || !email}
          className="bg-[var(--orange)] text-white hover:bg-[var(--orange-hover)]"
        >
          <ShieldPlus className="size-4" />
          Add admin
        </Button>
      </form>

      {error && <ErrorState message={error} />}

      {admins.length === 0 ? (
        <EmptyState icon={ShieldCheck} title="No admins yet" />
      ) : (
        <Card className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-[var(--light-bg)] text-left text-xs font-medium tracking-wide text-muted-foreground uppercase">
              <tr>
                <th className="px-5 py-3.5">Email</th>
                <th className="px-5 py-3.5">Name</th>
                <th className="px-5 py-3.5">Added by</th>
                <th className="px-5 py-3.5" />
              </tr>
            </thead>
            <tbody className="divide-y divide-black/[0.06]">
              {admins.map((admin) => (
                <tr key={admin.id} className="transition-colors hover:bg-[var(--light-bg)]/60">
                  <td className="px-5 py-4 text-base font-medium text-[var(--text)]">
                    {admin.email}
                    {admin.email === currentAdminEmail && (
                      <span className="ml-2 text-xs font-normal text-muted-foreground">(you)</span>
                    )}
                  </td>
                  <td className="px-5 py-4 text-sm text-muted-foreground">{admin.name || "—"}</td>
                  <td className="px-5 py-4 text-sm text-muted-foreground">{admin.added_by || "—"}</td>
                  <td className="px-5 py-4 text-right">
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon-sm"
                      disabled={busyId === admin.id || admin.email === currentAdminEmail}
                      onClick={() => handleDelete(admin)}
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
