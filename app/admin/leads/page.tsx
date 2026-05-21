import { Suspense } from "react";
import { getAdminClient } from "@/lib/supabase-admin";
import LeadsClient from "@/components/admin/LeadsClient";

export const dynamic = "force-dynamic";

interface PageProps {
  searchParams: Promise<{ search?: string; status?: string; service?: string; page?: string; view?: string }>;
}

async function getLeads(params: Awaited<PageProps["searchParams"]>) {
  const db = getAdminClient();
  const { search, status, service, page = "1" } = params;
  const limit = 20;
  const offset = (parseInt(page) - 1) * limit;

  let query = db.from("leads").select("*", { count: "exact" });
  if (status && status !== "all") query = query.eq("status", status);
  if (service && service !== "all") query = query.eq("service", service);
  if (search) query = query.or(`name.ilike.%${search}%,email.ilike.%${search}%,phone.ilike.%${search}%`);

  const { data, count } = await query
    .order("created_at", { ascending: false })
    .range(offset, offset + limit - 1);

  return { leads: data ?? [], total: count ?? 0 };
}

export default async function LeadsPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const { leads, total } = await getLeads(params);

  return (
    <Suspense fallback={null}>
      <LeadsClient
        initialLeads={leads}
        initialTotal={total}
        initialParams={params}
      />
    </Suspense>
  );
}
