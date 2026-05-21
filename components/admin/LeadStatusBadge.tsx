const config: Record<string, { label: string; classes: string }> = {
  new:       { label: "New",       classes: "bg-indigo-500/15 text-indigo-300 border-indigo-500/30" },
  contacted: { label: "Contacted", classes: "bg-amber-500/15 text-amber-300 border-amber-500/30" },
  proposal:  { label: "Proposal",  classes: "bg-purple-500/15 text-purple-300 border-purple-500/30" },
  converted: { label: "Converted", classes: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30" },
  lost:      { label: "Lost",      classes: "bg-red-500/15 text-red-400 border-red-500/30" },
};

export default function LeadStatusBadge({ status }: { status: string }) {
  const s = config[status] ?? { label: status, classes: "bg-slate-500/15 text-slate-400 border-slate-500/30" };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${s.classes}`}>
      {s.label}
    </span>
  );
}
