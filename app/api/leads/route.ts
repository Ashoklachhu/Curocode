import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, service } = body;

    // Basic server-side validation
    if (!name || !email || !phone || !service) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    // Prefer service role key (bypasses RLS), fall back to anon key (requires RLS insert policy)
    const apiKey =
      serviceKey && serviceKey !== "your_service_role_key_here"
        ? serviceKey
        : anonKey;

    if (!url || !apiKey) {
      console.error("Missing Supabase environment variables");
      return NextResponse.json(
        { error: "Server configuration error. Please contact support." },
        { status: 500 }
      );
    }

    const supabase = createClient(url, apiKey);

    const { error } = await supabase.from("leads").insert([
      {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        service,
        status: "new",
        source: "hero_form",
      },
    ]);

    if (error) {
      console.error("Supabase insert error:", error.message, error.hint ?? "");
      return NextResponse.json(
        { error: "Failed to save your request. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Lead saved successfully." },
      { status: 201 }
    );
  } catch (err) {
    console.error("API route error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
