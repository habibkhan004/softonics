import { createClient } from "@supabase/supabase-js";
import { hasSupabaseServiceRole, isSupabaseConfigured } from "@/lib/env";

export function createServiceSupabase() {
  if (!isSupabaseConfigured() || !hasSupabaseServiceRole()) return null;
  return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
