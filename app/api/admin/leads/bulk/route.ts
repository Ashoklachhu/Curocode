import { NextRequest, NextResponse } from "next/server";
import { getAdminClient } from "@/lib/supabase-admin";

export async function POST(req: NextRequest) {
  try {
    const { leads } = await req.json();
    if (!Array.isArray(leads) || leads.length === 0)
      return NextResponse.json({ error: "No leads provided." }, { status: 400 });
    if (leads.length > 500)
      return NextResponse.json({ error: "Max 500 leads per import." }, { status: 400 });

    const db = getAdminClient();

    const rows = leads.map((l: Record<string, string>) => ({
      name:    (l.name ?? "").trim(),
      email:   (l.email ?? "").trim().toLowerCase(),
      phone:   (l.phone ?? "").trim(),
      service: (l.service ?? "Other").trim(),
      status:  ["new","contacted","proposal","converted","lost"].includes(l.status) ? l.status : "new",
      source:  (l.source ?? "csv_import").trim(),
      notes:   (l.notes ?? "").trim() || null,
    }));

    // Validate required fields
    const invalid = rows.filter((r) => !r.name || !r.email || !r.phone);
    if (invalid.length > 0)
      return NextResponse.json({ error: `${invalid.length} rows are missing name, email or phone.` }, { status: 400 });

    const { data, error } = await db.from("leads").insert(rows).select();
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });

    return NextResponse.json({ success: true, imported: data?.length ?? 0 });
  } catch (err) {
    console.error("Bulk import error:", err);
    return NextResponse.json({ error: "Import failed. Please try again." }, { status: 500 });
  }
}
