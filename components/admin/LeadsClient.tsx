"use client";

import { useState, useTransition, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Search, Filter, LayoutList, Kanban, Plus,
  ChevronLeft, ChevronRight, Trash2, ExternalLink,
} from "lucide-react";
import LeadStatusBadge from "./LeadStatusBadge";
import LeadSourceBadge from "./LeadSourceBadge";
import KanbanBoard from "./KanbanBoard";
import { ENQUIRY_OPTIONS, LEGACY_SERVICE_NAMES } from "@/lib/services-data";

interface Lead {
  id: string; name: string; email: string; phone: string;
  service: string; status: string; source: string; created_at: string; notes?: string;
}

const STATUSES = ["all", "new", "contacted", "proposal", "converted", "lost"];
const SERVICES = ["all", ...ENQUIRY_OPTIONS, ...LEGACY_SERVICE_NAMES];

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-AE", { day: "numeric", month: "short", year: "numeric" });
}

interface Props {
  initialLeads: Lead[];
  initialTotal: number;
  initialParams: { search?: string; status?: string; service?: string; page?: string; view?: string };
}

export default function LeadsClient({ initialLeads, initialTotal, initialParams }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const [leads, setLeads] = useState(initialLeads);
  const [total] = useState(initialTotal);
  const [view, setView] = useState<"table" | "kanban">(initialParams.view === "kanban" ? "kanban" : "table");
  const [deleting, setDeleting] = useState<string | null>(null);
  const [searchVal, setSearchVal] = useState(initialParams.search ?? "");

  // Update URL → triggers server re-render with new data
  const updateParams = useCallback((updates: Record<string, string | undefined>) => {
    const sp = new URLSearchParams();
    const merged = { ...initialParams, ...updates };
    Object.entries(merged).forEach(([k, v]) => { if (v && v !== "all") sp.set(k, v); });
    startTransition(() => router.push(`/admin/leads?${sp.toString()}`));
  }, [initialParams, router]);

  // Debounced search
  const handleSearch = (val: string) => {
    setSearchVal(val);
    const t = setTimeout(() => updateParams({ search: val, page: "1" }), 350);
    return () => clearTimeout(t);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this lead? This cannot be undone.")) return;
    setDeleting(id);
    // Optimistic remove
    setLeads((prev) => prev.filter((l) => l.id !== id));
    await fetch(`/api/admin/leads/${id}`, { method: "DELETE" });
    setDeleting(null);
  };

  const handleStatusChange = async (id: string, status: string) => {
    // Optimistic update
    setLeads((prev) => prev.map((l) => l.id === id ? { ...l, status } : l));
    await fetch(`/api/admin/leads/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
  };

  const currentPage = parseInt(initialParams.page ?? "1");
  const totalPages = Math.ceil(total / 20);

  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Leads</h1>
          <p className="text-stone-500 text-sm mt-0.5">{total} total leads</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/admin/leads/upload"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-sand-300 text-stone-950 hover:bg-sand-200 text-sm font-semibold transition-all">
            <Plus size={14} /> Add Lead
          </Link>
        </div>
        {/* View toggle */}
        <div className="flex items-center gap-1 p-1 rounded-xl bg-white/[0.04] border border-white/[0.06]">
          <button onClick={() => { setView("table"); updateParams({ view: undefined }); }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${view === "table" ? "bg-sand-300 text-stone-950" : "text-stone-500 hover:text-white"}`}>
            <LayoutList size={13} /> Table
          </button>
          <button onClick={() => { setView("kanban"); updateParams({ view: "kanban" }); }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${view === "kanban" ? "bg-sand-300 text-stone-950" : "text-stone-500 hover:text-white"}`}>
            <Kanban size={13} /> Kanban
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-500 pointer-events-none" />
          <input type="text" placeholder="Search name, email or phone..."
            value={searchVal}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-stone-600 text-sm focus:outline-none focus:border-sand-500/50 transition-all"
          />
        </div>
        <div className="relative">
          <Filter size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-500 pointer-events-none" />
          <select value={initialParams.status ?? "all"}
            onChange={(e) => updateParams({ status: e.target.value, page: "1" })}
            className="pl-8 pr-8 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-stone-300 text-sm focus:outline-none focus:border-sand-500/50 appearance-none cursor-pointer">
            {STATUSES.map((s) => <option key={s} value={s} style={{ background: "#161616" }}>{s === "all" ? "All Statuses" : s.charAt(0).toUpperCase() + s.slice(1)}</option>)}
          </select>
        </div>
        <div className="relative">
          <select value={initialParams.service ?? "all"}
            onChange={(e) => updateParams({ service: e.target.value, page: "1" })}
            className="px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-stone-300 text-sm focus:outline-none focus:border-sand-500/50 appearance-none cursor-pointer">
            {SERVICES.map((s) => <option key={s} value={s} style={{ background: "#161616" }}>{s === "all" ? "All Services" : s}</option>)}
          </select>
        </div>
      </div>

      {/* Loading overlay */}
      {isPending && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          <div className="absolute top-4 right-4 flex items-center gap-2 bg-sand-300 text-stone-950 text-xs font-medium px-3 py-1.5 rounded-full shadow-lg">
            <svg className="animate-spin h-3 w-3" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            Filtering...
          </div>
        </div>
      )}

      {/* Table View */}
      {view === "table" && (
        <>
          <div className={`gradient-border rounded-2xl overflow-hidden bg-[#161616]/70 transition-opacity duration-200 ${isPending ? "opacity-60" : "opacity-100"}`}>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/[0.06]">
                    {["Name", "Contact", "Service", "Source", "Status", "Date", ""].map((h, i) => (
                      <th key={i} className="text-left px-5 py-3.5 text-xs font-semibold text-stone-600 uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.04]">
                  {leads.length === 0 && (
                    <tr><td colSpan={6} className="text-center py-14 text-stone-600 text-sm">No leads found matching your filters</td></tr>
                  )}
                  {leads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-white/[0.02] transition-colors group">
                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sand-500/20 to-sand-500/20 border border-white/[0.08] flex items-center justify-center flex-shrink-0">
                            <span className="text-xs font-bold text-sand-300">{lead.name[0]?.toUpperCase()}</span>
                          </div>
                          <span className="text-sm font-medium text-white">{lead.name}</span>
                        </div>
                      </td>
                      <td className="px-5 py-3.5">
                        <div className="text-sm text-stone-400">{lead.email}</div>
                        <div className="text-xs text-stone-600">{lead.phone}</div>
                      </td>
                      <td className="px-5 py-3.5 text-sm text-stone-500 max-w-[140px] truncate">{lead.service}</td>
                      <td className="px-5 py-3.5"><LeadSourceBadge source={lead.source} /></td>
                      <td className="px-5 py-3.5">
                        <select
                          value={lead.status}
                          onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                          className="bg-transparent border-none outline-none cursor-pointer text-xs sr-only"
                        />
                        <button
                          onClick={() => {
                            const next = STATUSES.filter(s => s !== "all");
                            const idx = next.indexOf(lead.status);
                            handleStatusChange(lead.id, next[(idx + 1) % next.length]);
                          }}
                          className="cursor-pointer"
                          title="Click to cycle status"
                        >
                          <LeadStatusBadge status={lead.status} />
                        </button>
                      </td>
                      <td className="px-5 py-3.5 text-sm text-stone-500 whitespace-nowrap">{formatDate(lead.created_at)}</td>
                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Link href={`/admin/leads/${lead.id}`} className="p-1.5 rounded-lg hover:bg-white/[0.06] text-stone-500 hover:text-white transition-all">
                            <ExternalLink size={14} />
                          </Link>
                          <button onClick={() => handleDelete(lead.id)} disabled={deleting === lead.id}
                            className="p-1.5 rounded-lg hover:bg-red-500/10 text-stone-500 hover:text-red-400 transition-all disabled:opacity-50">
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between mt-4">
              <p className="text-stone-600 text-sm">Page {currentPage} of {totalPages}</p>
              <div className="flex gap-2">
                <button onClick={() => updateParams({ page: String(Math.max(1, currentPage - 1)) })} disabled={currentPage === 1}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-white/[0.08] text-stone-400 hover:text-white disabled:opacity-30 text-sm transition-all">
                  <ChevronLeft size={14} /> Prev
                </button>
                <button onClick={() => updateParams({ page: String(Math.min(totalPages, currentPage + 1)) })} disabled={currentPage === totalPages}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-white/[0.08] text-stone-400 hover:text-white disabled:opacity-30 text-sm transition-all">
                  Next <ChevronRight size={14} />
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {/* Kanban View */}
      {view === "kanban" && (
        <KanbanBoard leads={leads} loading={false} onStatusChange={handleStatusChange} onRefresh={() => router.refresh()} />
      )}
    </div>
  );
}
