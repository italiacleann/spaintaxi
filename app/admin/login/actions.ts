"use server";

import { redirect } from "next/navigation";

import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function signIn(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!email || !password) {
    redirect("/admin/login?error=" + encodeURIComponent("Enter your email and password."));
  }

  const supabase = await createSupabaseServerClient();
  if (!supabase) {
    redirect(
      "/admin/login?error=" +
        encodeURIComponent("Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.")
    );
  }

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    redirect("/admin/login?error=" + encodeURIComponent("Invalid email or password."));
  }

  redirect("/admin");
}
