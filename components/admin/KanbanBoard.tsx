"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, ExternalLink } from "lucide-react";

interface Lead {
  id: string; name: string; email: string; phone: string;
  service: string; status: string; created_at: string;
}

const COLUMNS = [
  { id: "new",       label: "New",       color: "border-sand-500/40",  dot: "bg-sand-400",  count_bg: "bg-sand-500/15 text-sand-300" },
  { id: "contacted", label: "Contacted", color: "border-amber-500/40",   dot: "bg-amber-400",   count_bg: "bg-amber-500/15 text-amber-300" },
  { id: "proposal",  label: "Proposal",  color: "border-sky-500/40",  dot: "bg-sky-400",  count_bg: "bg-sky-500/15 text-sky-300" },
  { id: "converted", label: "Converted", color: "border-emerald-500/40", dot: "bg-emerald-400", count_bg: "bg-emerald-500/15 text-emerald-300" },
  { id: "lost",      label: "Lost",      color: "border-red-500/40",     dot: "bg-red-400",     count_bg: "bg-red-500/15 text-red-400" },
];

function timeAgo(d: string) {
  const m = Math.floor((Date.now() - new Date(d).getTime()) / 60000);
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  return `${Math.floor(h / 24)}d ago`;
}

interface Props {
  leads: Lead[];
  loading: boolean;
  onStatusChange: (id: string, status: string) => Promise<void>;
  onRefresh: () => void;
}

export default function KanbanBoard({ leads, loading, onStatusChange, onRefresh }: Props) {
  const [dragging, setDragging] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState<string | null>(null);
  const [updating, setUpdating] = useState<string | null>(null);

  const handleDragStart = (e: React.DragEvent, leadId: string) => {
    setDragging(leadId);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent, colId: string) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    setDragOver(colId);
  };

  const handleDrop = async (e: React.DragEvent, colId: string) => {
    e.preventDefault();
    setDragOver(null);
    if (!dragging) return;
    const lead = leads.find((l) => l.id === dragging);
    if (!lead || lead.status === colId) { setDragging(null); return; }
    setUpdating(dragging);
    await onStatusChange(dragging, colId);
    setDragging(null);
    setUpdating(null);
    onRefresh();
  };

  const handleDragEnd = () => { setDragging(null); setDragOver(null); };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-16 text-stone-600">
        <svg className="animate-spin h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
        </svg>
        Loading pipeline...
      </div>
    );
  }

  return (
    <div className="flex gap-4 overflow-x-auto pb-4">
      {COLUMNS.map((col) => {
        const colLeads = leads.filter((l) => l.status === col.id);
        const isDragTarget = dragOver === col.id;
        return (
          <div
            key={col.id}
            className={`flex-shrink-0 w-72 rounded-2xl border ${col.color} bg-[#161616]/60 transition-all duration-200 ${isDragTarget ? "bg-sand-500/5 border-sand-500/60 scale-[1.01]" : ""}`}
            onDragOver={(e) => handleDragOver(e, col.id)}
            onDrop={(e) => handleDrop(e, col.id)}
            onDragLeave={() => setDragOver(null)}
          >
            {/* Column header */}
            <div className="px-4 py-3.5 border-b border-white/[0.05] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${col.dot}`} />
                <span className="text-sm font-semibold text-white">{col.label}</span>
              </div>
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${col.count_bg}`}>
                {colLeads.length}
              </span>
            </div>

            {/* Cards */}
            <div className="p-3 space-y-3 min-h-[200px]">
              {colLeads.length === 0 && (
                <div className={`flex items-center justify-center h-20 rounded-xl border-2 border-dashed ${isDragTarget ? "border-sand-500/40" : "border-white/[0.05]"} transition-colors`}>
                  <span className="text-stone-700 text-xs">Drop here</span>
                </div>
              )}
              {colLeads.map((lead) => (
                <div
                  key={lead.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, lead.id)}
                  onDragEnd={handleDragEnd}
                  className={`group rounded-xl bg-[#1a1a1a] border border-white/[0.06] p-4 cursor-grab active:cursor-grabbing transition-all duration-200 hover:border-white/[0.12] hover:shadow-[0_4px_20px_rgba(0,0,0,0.4)] ${dragging === lead.id ? "opacity-40 scale-95" : ""} ${updating === lead.id ? "opacity-50" : ""}`}
                >
                  {/* Card header */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-sand-500/20 to-sand-500/20 border border-white/[0.08] flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-sand-300">{lead.name[0]?.toUpperCase()}</span>
                      </div>
                      <span className="text-sm font-semibold text-white leading-tight">{lead.name}</span>
                    </div>
                    <Link
                      href={`/admin/leads/${lead.id}`}
                      className="opacity-0 group-hover:opacity-100 p-1 rounded-lg hover:bg-white/[0.06] text-stone-500 hover:text-white transition-all flex-shrink-0"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={12} />
                    </Link>
                  </div>

                  {/* Service tag */}
                  <div className="mb-3">
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/[0.05] text-stone-500 border border-white/[0.06]">
                      {lead.service}
                    </span>
                  </div>

                  {/* Contact */}
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5 text-[11px] text-stone-600">
                      <Mail size={10} className="flex-shrink-0" />
                      <span className="truncate">{lead.email}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-stone-600">
                      <Phone size={10} className="flex-shrink-0" />
                      <span>{lead.phone}</span>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-3 pt-2.5 border-t border-white/[0.05] flex items-center justify-between">
                    <span className="text-[10px] text-stone-700">{timeAgo(lead.created_at)}</span>
                    {/* Quick status change */}
                    <select
                      value={lead.status}
                      onChange={async (e) => {
                        e.stopPropagation();
                        setUpdating(lead.id);
                        await onStatusChange(lead.id, e.target.value);
                        setUpdating(null);
                        onRefresh();
                      }}
                      onClick={(e) => e.stopPropagation()}
                      className="text-[10px] bg-transparent border-none outline-none cursor-pointer text-stone-600 hover:text-stone-400 transition-colors"
                    >
                      {COLUMNS.map((c) => (
                        <option key={c.id} value={c.id} style={{ background: "#1a1a1a" }}>{c.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
