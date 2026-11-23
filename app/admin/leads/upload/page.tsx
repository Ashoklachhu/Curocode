"use client";

import { useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Papa from "papaparse";
import * as XLSX from "xlsx";
import {
  ArrowLeft, Upload, FileText, Plus, CheckCircle2,
  AlertCircle, Download, Trash2, Save, X, ChevronDown,
} from "lucide-react";
import { LEAD_SOURCES } from "@/lib/lead-sources";
import { ENQUIRY_OPTIONS } from "@/lib/services-data";
import LeadStatusBadge from "@/components/admin/LeadStatusBadge";

const SERVICES = [...ENQUIRY_OPTIONS, "Other"];
const STATUSES = ["new", "contacted", "proposal", "converted", "lost"];

/* ─────────────── Types ─────────────── */
interface ParsedRow {
  _id: string;
  name: string; email: string; phone: string;
  service: string; status: string; source: string; notes: string;
  _errors: string[];
}

/* ─────────────── Helpers ─────────────── */
function uid() { return Math.random().toString(36).slice(2); }

function validate(row: Omit<ParsedRow, "_id" | "_errors">): string[] {
  const errs: string[] = [];
  if (!row.name?.trim()) errs.push("Name required");
  if (!row.email?.trim()) errs.push("Email required");
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(row.email)) errs.push("Invalid email");
  if (!row.phone?.trim()) errs.push("Phone required");
  return errs;
}

function normaliseRow(raw: Record<string, string>, defaultSource: string): Omit<ParsedRow, "_id" | "_errors"> {
  // flexible column name matching
  const g = (keys: string[]) => {
    for (const k of keys) {
      const val = raw[k] ?? raw[k.toLowerCase()] ?? raw[k.toUpperCase()] ?? "";
      if (val) return String(val).trim();
    }
    return "";
  };
  return {
    name:    g(["name", "full name", "fullname", "Name"]),
    email:   g(["email", "email address", "Email"]),
    phone:   g(["phone", "phone number", "mobile", "Phone", "whatsapp"]),
    service: g(["service", "interest", "Service"]) || "Other",
    status:  STATUSES.includes(g(["status", "Status"])) ? g(["status", "Status"]) : "new",
    source:  g(["source", "Source"]) || defaultSource,
    notes:   g(["notes", "note", "Notes", "comments"]),
  };
}

/* ─────────────── Manual add form ─────────────── */
function ManualForm({ onSuccess }: { onSuccess: () => void }) {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", service: ENQUIRY_OPTIONS[0],
    status: "new", source: "manual", notes: "",
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    const res = await fetch("/api/admin/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) { onSuccess(); }
    else { const d = await res.json(); setError(d.error ?? "Failed to save."); }
    setSaving(false);
  };

  const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
    <div>
      <label className="text-xs text-stone-500 font-medium mb-1.5 block">{label}</label>
      {children}
    </div>
  );

  const inputCls = "w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm focus:outline-none focus:border-sand-500/50 transition-all";
  const selectCls = inputCls + " appearance-none cursor-pointer";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Full Name *">
          <input required value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Ahmed Al Mansoori" className={inputCls} />
        </Field>
        <Field label="Email Address *">
          <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="ahmed@company.ae" className={inputCls} />
        </Field>
        <Field label="Phone / WhatsApp *">
          <input required value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="+971 50 000 0000" className={inputCls} />
        </Field>
        <Field label="Service Interest">
          <div className="relative">
            <select value={form.service} onChange={e => setForm({...form, service: e.target.value})} className={selectCls}>
              {SERVICES.map(s => <option key={s} value={s} style={{background:"#161616"}}>{s}</option>)}
            </select>
            <ChevronDown size={13} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-500 pointer-events-none" />
          </div>
        </Field>
        <Field label="Lead Source">
          <div className="relative">
            <select value={form.source} onChange={e => setForm({...form, source: e.target.value})} className={selectCls}>
              {LEAD_SOURCES.map(s => <option key={s.id} value={s.id} style={{background:"#161616"}}>{s.emoji} {s.label}</option>)}
            </select>
            <ChevronDown size={13} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-500 pointer-events-none" />
          </div>
        </Field>
        <Field label="Pipeline Status">
          <div className="relative">
            <select value={form.status} onChange={e => setForm({...form, status: e.target.value})} className={selectCls}>
              {STATUSES.map(s => <option key={s} value={s} style={{background:"#161616"}}>{s.charAt(0).toUpperCase()+s.slice(1)}</option>)}
            </select>
            <ChevronDown size={13} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-500 pointer-events-none" />
          </div>
        </Field>
      </div>
      <Field label="Notes">
        <textarea value={form.notes} onChange={e => setForm({...form, notes: e.target.value})} rows={3} placeholder="Any additional notes..." className={inputCls + " resize-none"} />
      </Field>
      {error && (
        <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/25 text-red-400 text-sm">
          <AlertCircle size={14} /> {error}
        </div>
      )}
      <button type="submit" disabled={saving}
        className="w-full py-3 rounded-xl bg-sand-300 text-stone-950 hover:bg-sand-200 font-semibold text-sm transition-all disabled:opacity-60 flex items-center justify-center gap-2">
        {saving ? <><svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/></svg> Saving...</> : <><Plus size={16}/> Add Lead</>}
      </button>
    </form>
  );
}

/* ─────────────── Main Page ─────────────── */
export default function UploadPage() {
  const router = useRouter();
  const fileRef = useRef<HTMLInputElement>(null);
  const [tab, setTab] = useState<"upload" | "manual">("upload");
  const [rows, setRows] = useState<ParsedRow[]>([]);
  const [defaultSource, setDefaultSource] = useState("csv_import");
  const [importing, setImporting] = useState(false);
  const [result, setResult] = useState<{ok: boolean; msg: string} | null>(null);
  const [dragOver, setDragOver] = useState(false);

  const parseFile = useCallback((file: File) => {
    setResult(null);
    const ext = file.name.split(".").pop()?.toLowerCase();

    const process = (raw: Record<string, string>[]) => {
      const parsed: ParsedRow[] = raw.map((r) => {
        const norm = normaliseRow(r, defaultSource);
        return { _id: uid(), ...norm, _errors: validate(norm) };
      });
      setRows(parsed);
    };

    if (ext === "csv") {
      Papa.parse<Record<string, string>>(file, {
        header: true, skipEmptyLines: true,
        complete: (res) => process(res.data),
      });
    } else if (ext === "xlsx" || ext === "xls") {
      const reader = new FileReader();
      reader.onload = (e) => {
        const wb = XLSX.read(e.target?.result, { type: "binary" });
        const ws = wb.Sheets[wb.SheetNames[0]];
        const data = XLSX.utils.sheet_to_json<Record<string, string>>(ws, { defval: "" });
        process(data);
      };
      reader.readAsBinaryString(file);
    } else {
      setResult({ ok: false, msg: "Unsupported file type. Use .csv, .xlsx, or .xls" });
    }
  }, [defaultSource]);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault(); setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) parseFile(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) parseFile(file);
  };

  const updateRow = (id: string, field: string, value: string) => {
    setRows(prev => prev.map(r => {
      if (r._id !== id) return r;
      const updated = { ...r, [field]: value };
      return { ...updated, _errors: validate(updated) };
    }));
  };

  const removeRow = (id: string) => setRows(prev => prev.filter(r => r._id !== id));

  const validRows = rows.filter(r => r._errors.length === 0);
  const invalidRows = rows.filter(r => r._errors.length > 0);

  const handleImport = async () => {
    if (validRows.length === 0) return;
    setImporting(true);
    const res = await fetch("/api/admin/leads/bulk", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ leads: validRows }),
    });
    const data = await res.json();
    if (res.ok) {
      setResult({ ok: true, msg: `✅ Successfully imported ${data.imported} leads!` });
      setRows([]);
    } else {
      setResult({ ok: false, msg: data.error ?? "Import failed." });
    }
    setImporting(false);
  };

  const downloadTemplate = () => {
    const csv = "name,email,phone,service,source,status,notes\nAhmed Al Mansoori,ahmed@company.ae,+971501234567,Staff Augmentation,linkedin,new,Needs two senior React developers\n";
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url; a.download = "leads-template.csv"; a.click();
  };

  return (
    <div className="p-6 lg:p-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link href="/admin/leads" className="p-2 rounded-xl border border-white/[0.08] text-stone-500 hover:text-white hover:border-white/20 transition-all">
            <ArrowLeft size={16} />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-white">Add Leads</h1>
            <p className="text-stone-500 text-sm mt-0.5">Import from file or add manually</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 p-1 rounded-xl bg-white/[0.04] border border-white/[0.06] w-fit mb-8">
        {[
          { id: "upload", label: "📤 Upload File", desc: "CSV or Excel" },
          { id: "manual", label: "✏️ Add Manually", desc: "Single lead" },
        ].map((t) => (
          <button key={t.id} onClick={() => setTab(t.id as "upload" | "manual")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${tab === t.id ? "bg-sand-300 text-stone-950" : "text-stone-500 hover:text-white"}`}>
            {t.label}
            <span className={`text-[10px] ${tab === t.id ? "text-sand-200" : "text-stone-600"}`}>{t.desc}</span>
          </button>
        ))}
      </div>

      {/* ── UPLOAD TAB ── */}
      {tab === "upload" && (
        <div className="space-y-6">
          {/* Default source + download template row */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-3">
              <label className="text-sm text-stone-400 font-medium whitespace-nowrap">Default source for this import:</label>
              <div className="relative">
                <select value={defaultSource} onChange={e => setDefaultSource(e.target.value)}
                  className="pl-4 pr-8 py-2 rounded-xl bg-white/[0.05] border border-white/[0.08] text-stone-200 text-sm focus:outline-none focus:border-sand-500/50 appearance-none cursor-pointer">
                  {LEAD_SOURCES.map(s => <option key={s.id} value={s.id} style={{background:"#161616"}}>{s.emoji} {s.label}</option>)}
                </select>
                <ChevronDown size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-500 pointer-events-none" />
              </div>
            </div>
            <button onClick={downloadTemplate}
              className="ml-auto flex items-center gap-2 px-4 py-2 rounded-xl border border-white/[0.08] text-stone-400 hover:text-white hover:border-white/20 text-sm transition-all">
              <Download size={14} /> Download Template
            </button>
          </div>

          {/* Drop zone */}
          <div
            className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-all cursor-pointer ${dragOver ? "border-sand-500 bg-sand-500/8" : "border-white/[0.10] hover:border-white/20 hover:bg-white/[0.02]"}`}
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            onClick={() => fileRef.current?.click()}
          >
            <input ref={fileRef} type="file" accept=".csv,.xlsx,.xls" onChange={handleFileChange} className="hidden" />
            <div className="w-14 h-14 rounded-2xl bg-sand-500/15 border border-sand-500/30 flex items-center justify-center mx-auto mb-4">
              <Upload size={24} className="text-sand-400" />
            </div>
            <p className="text-white font-semibold text-lg mb-1">Drop your file here</p>
            <p className="text-stone-500 text-sm">or <span className="text-sand-400 underline underline-offset-2">browse to upload</span></p>
            <p className="text-stone-600 text-xs mt-3">Supports .csv, .xlsx, .xls · Max 500 rows</p>
          </div>

          {/* Result banner */}
          {result && (
            <div className={`flex items-center gap-3 px-5 py-3.5 rounded-xl border text-sm font-medium ${result.ok ? "bg-emerald-500/10 border-emerald-500/25 text-emerald-300" : "bg-red-500/10 border-red-500/25 text-red-400"}`}>
              {result.ok ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
              {result.msg}
              {result.ok && (
                <Link href="/admin/leads" className="ml-auto text-xs underline underline-offset-2 hover:opacity-80">
                  View leads →
                </Link>
              )}
            </div>
          )}

          {/* Preview table */}
          {rows.length > 0 && (
            <div className="space-y-4">
              {/* Summary */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-stone-400"><span className="text-white font-bold">{rows.length}</span> rows parsed</span>
                  {validRows.length > 0 && <span className="text-emerald-400"><span className="font-bold">{validRows.length}</span> valid</span>}
                  {invalidRows.length > 0 && <span className="text-red-400"><span className="font-bold">{invalidRows.length}</span> with errors</span>}
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => setRows([])} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/[0.08] text-stone-500 hover:text-white text-xs transition-all">
                    <X size={12} /> Clear
                  </button>
                  <button onClick={handleImport} disabled={importing || validRows.length === 0}
                    className="flex items-center gap-2 px-5 py-2 rounded-xl bg-sand-300 text-stone-950 hover:bg-sand-200 text-sm font-semibold transition-all disabled:opacity-60">
                    {importing ? <><svg className="animate-spin h-3.5 w-3.5" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/></svg> Importing...</> : <><Save size={14}/> Import {validRows.length} Leads</>}
                  </button>
                </div>
              </div>

              {/* Table */}
              <div className="gradient-border rounded-2xl overflow-hidden bg-[#161616]/70">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/[0.06]">
                        {["", "Name", "Email", "Phone", "Service", "Source", "Status", ""].map((h, i) => (
                          <th key={i} className="text-left px-4 py-3 text-xs font-semibold text-stone-600 uppercase tracking-wider whitespace-nowrap">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/[0.03]">
                      {rows.map((row) => (
                        <tr key={row._id} className={row._errors.length > 0 ? "bg-red-500/[0.04]" : ""}>
                          {/* Status dot */}
                          <td className="pl-4 py-3 w-6">
                            {row._errors.length > 0
                              ? <span title={row._errors.join(", ")}><AlertCircle size={14} className="text-red-400" /></span>
                              : <CheckCircle2 size={14} className="text-emerald-400" />}
                          </td>
                          {/* Editable cells */}
                          {(["name","email","phone"] as const).map(f => (
                            <td key={f} className="px-3 py-2">
                              <input value={row[f]} onChange={e => updateRow(row._id, f, e.target.value)}
                                className={`w-full min-w-[120px] px-2.5 py-1.5 rounded-lg bg-white/[0.04] border text-white text-xs focus:outline-none focus:border-sand-500/50 transition-all ${row._errors.some(e => e.toLowerCase().includes(f)) ? "border-red-500/40" : "border-white/[0.06]"}`} />
                            </td>
                          ))}
                          <td className="px-3 py-2">
                            <select value={row.service} onChange={e => updateRow(row._id, "service", e.target.value)}
                              className="min-w-[130px] px-2.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-stone-300 text-xs focus:outline-none appearance-none cursor-pointer">
                              {SERVICES.map(s => <option key={s} value={s} style={{background:"#161616"}}>{s}</option>)}
                            </select>
                          </td>
                          <td className="px-3 py-2">
                            <select value={row.source} onChange={e => updateRow(row._id, "source", e.target.value)}
                              className="min-w-[130px] px-2.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-stone-300 text-xs focus:outline-none appearance-none cursor-pointer">
                              {LEAD_SOURCES.map(s => <option key={s.id} value={s.id} style={{background:"#161616"}}>{s.emoji} {s.label}</option>)}
                            </select>
                          </td>
                          <td className="px-3 py-2">
                            <LeadStatusBadge status={row.status} />
                          </td>
                          <td className="px-3 py-2">
                            <button onClick={() => removeRow(row._id)} className="p-1.5 rounded-lg hover:bg-red-500/10 text-stone-600 hover:text-red-400 transition-all">
                              <Trash2 size={13} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {invalidRows.length > 0 && (
                <p className="text-xs text-stone-600 flex items-center gap-1.5">
                  <AlertCircle size={12} className="text-amber-400" />
                  Rows with errors will be skipped. Fix them above or remove them to proceed.
                </p>
              )}
            </div>
          )}
        </div>
      )}

      {/* ── MANUAL TAB ── */}
      {tab === "manual" && (
        <div className="max-w-2xl">
          <div className="gradient-border rounded-2xl p-7 bg-[#161616]/70">
            <h2 className="text-white font-semibold mb-6 flex items-center gap-2">
              <Plus size={16} className="text-sand-400" />
              Add a New Lead
            </h2>
            <ManualForm onSuccess={() => router.push("/admin/leads")} />
          </div>
        </div>
      )}
    </div>
  );
}
