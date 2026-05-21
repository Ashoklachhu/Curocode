import { notFound } from "next/navigation";
import { getAdminClient } from "@/lib/supabase-admin";
import LeadDetailClient from "@/components/admin/LeadDetailClient";

export const dynamic = "force-dynamic";

export default async function LeadDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const db = getAdminClient();
  const { data: lead } = await db.from("leads").select("*").eq("id", id).single();
  if (!lead) notFound();
  return <LeadDetailClient lead={lead} />;
}
