"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save, Trash2, Mail, Phone, Calendar, Tag, FileText, CheckCircle2, ChevronDown } from "lucide-react";
import LeadStatusBadge from "./LeadStatusBadge";
import { LEAD_SOURCES } from "@/lib/lead-sources";
import { ENQUIRY_OPTIONS, LEGACY_SERVICE_NAMES } from "@/lib/services-data";

interface Lead {
  id: string; name: string; email: string; phone: string;
  service: string; status: string; source: string;
  notes: string; created_at: string; updated_at: string;
}

const STATUSES = ["new", "contacted", "proposal", "converted", "lost"];
const SERVICES = [...ENQUIRY_OPTIONS, ...LEGACY_SERVICE_NAMES];

const STATUS_COLORS: Record<string, string> = {
  new: "bg-sand-400", contacted: "bg-amber-400",
  proposal: "bg-sky-400", converted: "bg-emerald-400", lost: "bg-red-400",
};

export default function LeadDetailClient({ lead: initial }: { lead: Lead }) {
  const router = useRouter();
  const [form, setForm] = useState(initial);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const isDirty = JSON.stringify(form) !== JSON.stringify(initial);

  const handleSave = async () => {
    setSaving(true);
    const res = await fetch(`/api/admin/leads/${initial.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setSaving(false);
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
      router.refresh();
    }
  };

  const handleDelete = async () => {
    if (!confirm("Delete this lead permanently?")) return;
    setDeleting(true);
    await fetch(`/api/admin/leads/${initial.id}`, { method: "DELETE" });
    router.push("/admin/leads");
  };

  return (
    <div className="p-6 lg:p-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <Link href="/admin/leads" className="p-2 rounded-xl border border-white/[0.08] text-stone-500 hover:text-white hover:border-white/20 transition-all">
            <ArrowLeft size={16} />
          </Link>
          <div>
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="text-xl font-bold text-white">{initial.name}</h1>
              <LeadStatusBadge status={form.status} />
            </div>
            <p className="text-stone-500 text-sm mt-0.5">
              Added {new Date(initial.created_at).toLocaleDateString("en-AE", { day: "numeric", month: "long", year: "numeric" })}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={handleDelete} disabled={deleting}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-red-500/20 text-red-400 hover:bg-red-500/10 text-sm font-medium transition-all disabled:opacity-50">
            <Trash2 size={14} /> {deleting ? "Deleting..." : "Delete"}
          </button>
          <button onClick={handleSave} disabled={saving || !isDirty}
            className="flex items-center gap-2 px-5 py-2 rounded-xl bg-sand-300 text-stone-950 hover:bg-sand-200 text-sm font-semibold transition-all disabled:opacity-50">
            {saved ? <><CheckCircle2 size={14} /> Saved!</>
              : saving ? <><svg className="animate-spin h-3.5 w-3.5" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" /></svg> Saving...</>
              : <><Save size={14} /> {isDirty ? "Save Changes" : "No Changes"}</>}
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left */}
        <div className="lg:col-span-2 space-y-5">
          {/* Contact Info */}
          <div className="gradient-border rounded-2xl p-6 bg-[#161616]/70">
            <h2 className="text-white font-semibold mb-5 flex items-center gap-2 text-sm">
              <Mail size={15} className="text-sand-400" /> Contact Information
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="text-xs text-stone-500 font-medium mb-1.5 block">Full Name</label>
                <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm focus:outline-none focus:border-sand-500/50 transition-all" />
              </div>
              <div>
                <label className="text-xs text-stone-500 font-medium mb-1.5 block">Email Address</label>
                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm focus:outline-none focus:border-sand-500/50 transition-all" />
              </div>
              <div>
                <label className="text-xs text-stone-500 font-medium mb-1.5 block">Phone / WhatsApp</label>
                <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm focus:outline-none focus:border-sand-500/50 transition-all" />
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="gradient-border rounded-2xl p-6 bg-[#161616]/70">
            <h2 className="text-white font-semibold mb-5 flex items-center gap-2 text-sm">
              <FileText size={15} className="text-sand-400" /> Internal Notes
            </h2>
            <textarea value={form.notes ?? ""}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              placeholder="Add notes — call summaries, requirements, follow-up actions..."
              rows={6}
              className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-stone-600 text-sm focus:outline-none focus:border-sand-500/50 transition-all resize-none leading-relaxed" />
          </div>
        </div>

        {/* Right sidebar */}
        <div className="space-y-5">
          {/* Status */}
          <div className="gradient-border rounded-2xl p-5 bg-[#161616]/70">
            <h3 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
              <Tag size={14} className="text-amber-400" /> Pipeline Status
            </h3>
            <div className="space-y-1.5">
              {STATUSES.map((s) => (
                <button key={s} onClick={() => setForm({ ...form, status: s })}
                  className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all border ${
                    form.status === s ? "bg-sand-500/15 border-sand-500/40 text-white" : "border-transparent text-stone-500 hover:bg-white/[0.04] hover:text-stone-300"
                  }`}>
                  <div className={`w-2 h-2 rounded-full flex-shrink-0 ${STATUS_COLORS[s]}`} />
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                  {form.status === s && <CheckCircle2 size={13} className="ml-auto text-sand-400" />}
                </button>
              ))}
            </div>
          </div>

          {/* Service */}
          <div className="gradient-border rounded-2xl p-5 bg-[#161616]/70">
            <h3 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
              <Phone size={14} className="text-sand-400" /> Service Interest
            </h3>
            <div className="relative">
              <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-stone-300 text-sm focus:outline-none focus:border-sand-500/50 appearance-none cursor-pointer">
                {SERVICES.map((s) => <option key={s} value={s} style={{ background: "#161616" }}>{s}</option>)}
              </select>
              <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-500 pointer-events-none" />
            </div>
          </div>

          {/* Source */}
          <div className="gradient-border rounded-2xl p-5 bg-[#161616]/70">
            <h3 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
              <Tag size={14} className="text-pink-400" /> Lead Source
            </h3>
            <div className="relative">
              <select value={form.source} onChange={(e) => setForm({ ...form, source: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-stone-300 text-sm focus:outline-none focus:border-sand-500/50 appearance-none cursor-pointer">
                {LEAD_SOURCES.map((s) => <option key={s.id} value={s.id} style={{ background: "#161616" }}>{s.emoji} {s.label}</option>)}
              </select>
              <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-500 pointer-events-none" />
            </div>
          </div>

          {/* Meta */}
          <div className="gradient-border rounded-2xl p-5 bg-[#161616]/70 space-y-3">
            <h3 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
              <Calendar size={14} className="text-stone-400" /> Details
            </h3>
            {[
              { label: "Source", value: initial.source },
              { label: "Created", value: new Date(initial.created_at).toLocaleDateString("en-AE", { day: "numeric", month: "short", year: "numeric" }) },
              { label: "Updated", value: new Date(initial.updated_at).toLocaleDateString("en-AE", { day: "numeric", month: "short", year: "numeric" }) },
              { label: "Lead ID", value: `${initial.id.slice(0, 8)}...` },
            ].map((item) => (
              <div key={item.label} className="flex justify-between items-center py-0.5">
                <span className="text-xs text-stone-600">{item.label}</span>
                <span className="text-xs text-stone-400 font-medium">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
