import { createClient } from "@supabase/supabase-js";

/**
 * Server-only client using the service role key, which bypasses Row Level
 * Security. Used exclusively by the public quote-request submission route
 * so anonymous visitors can create a lead without needing a Supabase Auth
 * session. Never import this from client components.
 */
export function createSupabaseAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) return null;

  return createClient(url, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}
