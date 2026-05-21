import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const admin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET() {
  const now = new Date();
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate()).toISOString();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();

  const [
    { count: total },
    { count: newLeads },
    { count: today },
    { count: thisMonth },
    { count: converted },
    { data: byService },
    { data: recent },
  ] = await Promise.all([
    admin.from("leads").select("*", { count: "exact", head: true }),
    admin.from("leads").select("*", { count: "exact", head: true }).eq("status", "new"),
    admin.from("leads").select("*", { count: "exact", head: true }).gte("created_at", startOfToday),
    admin.from("leads").select("*", { count: "exact", head: true }).gte("created_at", startOfMonth),
    admin.from("leads").select("*", { count: "exact", head: true }).eq("status", "converted"),
    admin.from("leads").select("service").then(async ({ data }) => {
      const counts: Record<string, number> = {};
      data?.forEach((r) => { counts[r.service] = (counts[r.service] ?? 0) + 1; });
      return { data: Object.entries(counts).map(([service, count]) => ({ service, count })).sort((a, b) => b.count - a.count) };
    }),
    admin.from("leads").select("*").order("created_at", { ascending: false }).limit(5),
  ]);

  const conversionRate = total ? Math.round(((converted ?? 0) / total) * 100) : 0;

  return NextResponse.json({
    total: total ?? 0,
    newLeads: newLeads ?? 0,
    today: today ?? 0,
    thisMonth: thisMonth ?? 0,
    converted: converted ?? 0,
    conversionRate,
    byService: byService ?? [],
    recent: recent ?? [],
  });
}
