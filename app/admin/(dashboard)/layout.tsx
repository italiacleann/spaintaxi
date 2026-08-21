import { redirect } from "next/navigation";

import { createSupabaseServerClient } from "@/lib/supabase/server";
import { AdminMobileHeader, AdminSidebar } from "@/components/admin/admin-sidebar";

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createSupabaseServerClient();
  if (!supabase) {
    redirect(
      "/admin/login?error=" +
        encodeURIComponent("Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.")
    );
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  const email = user.email ?? "";

  return (
    <div className="min-h-screen bg-muted/30">
      <AdminSidebar email={email} />
      <div className="flex min-h-screen flex-col lg:pl-64">
        <AdminMobileHeader email={email} />
        <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          {children}
        </main>
      </div>
    </div>
  );
}
