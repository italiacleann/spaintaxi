import { createClient } from "@supabase/supabase-js";
import { firstEnv } from "@/lib/env";

/**
 * Anon-key client with no cookie dependency, safe to call from
 * generateStaticParams/generateMetadata at build time as well as from
 * Server Components at request time. Only ever reads RLS-public data
 * (published blog posts), so it never needs the service role key.
 */
export function createSupabasePublicClient() {
  const url = firstEnv("NEXT_PUBLIC_SUPABASE_URL", "SUPABASE_URL");
  const anonKey = firstEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY", "SUPABASE_ANON_KEY", "SUPABASE_PUBLISHABLE_KEY");

  if (!url || !anonKey) return null;

  return createClient(url, anonKey);
}
