import { NextResponse } from "next/server";

import { createSupabaseAdminClient } from "@/lib/supabase/admin";

function isValidEmail(value: unknown): value is string {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: { email?: unknown; locale?: unknown; sourcePath?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!isValidEmail(body.email)) {
    return NextResponse.json({ error: "A valid email address is required." }, { status: 400 });
  }

  const supabase = createSupabaseAdminClient();
  if (!supabase) {
    return NextResponse.json({ error: "The newsletter is not configured yet. Please try again later." }, { status: 503 });
  }

  const { error } = await supabase.from("blog_subscribers").insert({
    email: body.email,
    locale: body.locale === "es" ? "es" : "en",
    source_path: typeof body.sourcePath === "string" ? body.sourcePath : null,
  });

  if (error) {
    if (error.code === "23505") {
      return NextResponse.json({ success: true });
    }
    console.error("Failed to insert newsletter subscriber:", error);
    return NextResponse.json({ error: "Could not save your subscription. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
