import Link from "next/link";
import { Users, UserCheck, TrendingUp, Calendar, ArrowRight } from "lucide-react";
import { getAdminClient } from "@/lib/supabase-admin";
import LeadStatusBadge from "@/components/admin/LeadStatusBadge";
import RefreshButton from "@/components/admin/RefreshButton";

// Always fresh — no stale cache
export const dynamic = "force-dynamic";

async function getStats() {
  const db = getAdminClient();
  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate()).toISOString();

  const [total, newLeads, today, thisMonth, converted, allLeads, recent] = await Promise.all([
    db.from("leads").select("*", { count: "exact", head: true }),
    db.from("leads").select("*", { count: "exact", head: true }).eq("status", "new"),
    db.from("leads").select("*", { count: "exact", head: true }).gte("created_at", startOfToday),
    db.from("leads").select("*", { count: "exact", head: true }).gte("created_at", startOfMonth),
    db.from("leads").select("*", { count: "exact", head: true }).eq("status", "converted"),
    db.from("leads").select("service"),
    db.from("leads").select("*").order("created_at", { ascending: false }).limit(6),
  ]);

  // Service breakdown
  const svcMap: Record<string, number> = {};
  allLeads.data?.forEach((r) => { svcMap[r.service] = (svcMap[r.service] ?? 0) + 1; });
  const byService = Object.entries(svcMap)
    .map(([service, count]) => ({ service, count }))
    .sort((a, b) => b.count - a.count);

  const totalCount = total.count ?? 0;
  const convRate = totalCount ? Math.round(((converted.count ?? 0) / totalCount) * 100) : 0;

  return {
    total: totalCount,
    newLeads: newLeads.count ?? 0,
    today: today.count ?? 0,
    thisMonth: thisMonth.count ?? 0,
    conversionRate: convRate,
    byService,
    recent: recent.data ?? [],
  };
}

function timeAgo(date: string) {
  const m = Math.floor((Date.now() - new Date(date).getTime()) / 60000);
  if (m < 1) return "just now";
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  return `${Math.floor(h / 24)}d ago`;
}

export default async function Dashboard() {
  const stats = await getStats();

  const cards = [
    { label: "Total Leads",     value: stats.total,          icon: Users,      from: "from-indigo-500/20", to: "to-indigo-600/10", iconColor: "text-indigo-400",   glow: "rgba(99,102,241,0.2)" },
    { label: "New Leads",       value: stats.newLeads,        icon: UserCheck,  from: "from-purple-500/20", to: "to-purple-600/10", iconColor: "text-purple-400",   glow: "rgba(139,92,246,0.2)" },
    { label: "This Month",      value: stats.thisMonth,       icon: Calendar,   from: "from-cyan-500/20",   to: "to-cyan-600/10",   iconColor: "text-cyan-400",     glow: "rgba(6,182,212,0.2)" },
    { label: "Conversion Rate", value: `${stats.conversionRate}%`, icon: TrendingUp, from: "from-emerald-500/20", to: "to-emerald-600/10", iconColor: "text-emerald-400", glow: "rgba(16,185,129,0.2)" },
  ];

  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <p className="text-slate-500 text-sm mt-0.5">Welcome back. Here&apos;s what&apos;s happening.</p>
        </div>
        <div className="flex items-center gap-3">
          <RefreshButton />
          <Link href="/admin/leads" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold shadow-[0_0_20px_rgba(99,102,241,0.35)] hover:shadow-[0_0_30px_rgba(99,102,241,0.55)] transition-all">
            View All Leads <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div key={card.label} className="gradient-border rounded-2xl p-5 bg-[#0a0e20]/70 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-200">
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: card.glow }} />
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${card.from} ${card.to} flex items-center justify-center mb-4`}>
                <Icon size={19} className={card.iconColor} />
              </div>
              <div className="text-3xl font-black text-white mb-1">{card.value}</div>
              <div className="text-slate-500 text-xs">{card.label}</div>
            </div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Leads */}
        <div className="lg:col-span-2 gradient-border rounded-2xl bg-[#0a0e20]/70 overflow-hidden">
          <div className="px-6 py-4 border-b border-white/[0.05] flex items-center justify-between">
            <h2 className="text-white font-semibold">Recent Leads</h2>
            <Link href="/admin/leads" className="text-indigo-400 hover:text-indigo-300 text-xs font-medium flex items-center gap-1 transition-colors">
              View all <ArrowRight size={12} />
            </Link>
          </div>
          <div className="divide-y divide-white/[0.04]">
            {stats.recent.length === 0 && (
              <div className="px-6 py-10 text-center text-slate-600 text-sm">No leads yet — share your website to start getting leads!</div>
            )}
            {stats.recent.map((lead) => (
              <Link key={lead.id} href={`/admin/leads/${lead.id}`} className="flex items-center gap-4 px-6 py-3.5 hover:bg-white/[0.02] transition-colors group">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/[0.08] flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-indigo-300">{lead.name[0]?.toUpperCase()}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-white group-hover:text-indigo-300 transition-colors truncate">{lead.name}</div>
                  <div className="text-xs text-slate-600 truncate">{lead.email}</div>
                </div>
                <div className="hidden sm:block text-xs text-slate-600 flex-shrink-0 max-w-[120px] truncate">{lead.service}</div>
                <LeadStatusBadge status={lead.status} />
                <div className="text-xs text-slate-600 flex-shrink-0 w-16 text-right">{timeAgo(lead.created_at)}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* By Service */}
        <div className="gradient-border rounded-2xl bg-[#0a0e20]/70 overflow-hidden">
          <div className="px-6 py-4 border-b border-white/[0.05]">
            <h2 className="text-white font-semibold">Leads by Service</h2>
          </div>
          <div className="p-6 space-y-4">
            {stats.byService.length === 0 && (
              <p className="text-slate-600 text-sm text-center py-4">No data yet</p>
            )}
            {stats.byService.map((item) => {
              const pct = stats.total ? Math.round((item.count / stats.total) * 100) : 0;
              return (
                <div key={item.service}>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-slate-400 truncate">{item.service}</span>
                    <span className="text-white font-semibold ml-2">{item.count}</span>
                  </div>
                  <div className="h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                      style={{ width: `${pct}%`, boxShadow: "0 0 8px rgba(99,102,241,0.5)" }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
