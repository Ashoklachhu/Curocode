import { NextRequest, NextResponse } from "next/server";
import { getAdminClient } from "@/lib/supabase-admin";

const admin = getAdminClient();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const status = searchParams.get("status");
  const search = searchParams.get("search");
  const service = searchParams.get("service");
  const page = parseInt(searchParams.get("page") ?? "1");
  const limit = 20;
  const offset = (page - 1) * limit;

  let query = admin.from("leads").select("*", { count: "exact" });

  if (status && status !== "all") query = query.eq("status", status);
  if (service && service !== "all") query = query.eq("service", service);
  if (search) query = query.or(`name.ilike.%${search}%,email.ilike.%${search}%,phone.ilike.%${search}%`);

  const { data, count, error } = await query
    .order("created_at", { ascending: false })
    .range(offset, offset + limit - 1);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ leads: data ?? [], total: count ?? 0, page, limit });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, service, status = "new", source = "manual", notes = "" } = body;
    if (!name || !email || !phone)
      return NextResponse.json({ error: "Name, email and phone are required." }, { status: 400 });
    const { data, error } = await admin.from("leads").insert([
      { name: name.trim(), email: email.trim().toLowerCase(), phone: phone.trim(), service, status, source, notes }
    ]).select().single();
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json(data, { status: 201 });
  } catch { return NextResponse.json({ error: "Server error." }, { status: 500 }); }
}
