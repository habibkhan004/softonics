import { createServiceSupabase } from "@/lib/supabase/admin";
import { createServerSupabase } from "@/lib/supabase/server";
import { hasSupabaseServiceRole, isSupabaseConfigured } from "@/lib/env";

export async function supabaseRead() {
  if (!isSupabaseConfigured()) return null;
  try {
    return (await createServerSupabase()) ?? createServiceSupabase();
  } catch (error) {
    console.error("[cms] supabase client failed", error);
    return null;
  }
}

export async function supabaseWrite() {
  if (!isSupabaseConfigured()) return null;
  try {
    if (hasSupabaseServiceRole()) return createServiceSupabase();
    return createServerSupabase();
  } catch (error) {
    console.error("[cms] supabase write client failed", error);
    return null;
  }
}
