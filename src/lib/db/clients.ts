import { createServiceSupabase } from "@/lib/supabase/admin";
import { createServerSupabase } from "@/lib/supabase/server";
import { hasSupabaseServiceRole, isSupabaseConfigured } from "@/lib/env";

export async function supabaseRead() {
  if (!isSupabaseConfigured()) return null;
  return (await createServerSupabase()) ?? createServiceSupabase();
}

export async function supabaseWrite() {
  if (!isSupabaseConfigured()) return null;
  if (hasSupabaseServiceRole()) return createServiceSupabase();
  return createServerSupabase();
}
