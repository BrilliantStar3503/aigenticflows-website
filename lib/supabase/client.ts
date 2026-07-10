import { createBrowserClient } from "@supabase/ssr";
import type { SupabaseClient } from "@supabase/supabase-js";
import { isSupabaseConfigured, supabaseEnv } from "@/lib/supabase/env";
import { SupabaseNotConfiguredError } from "@/lib/supabase/errors";

let browserClient: SupabaseClient | null = null;

export function getSupabaseBrowserClient(): SupabaseClient {
  if (!isSupabaseConfigured) {
    throw new SupabaseNotConfiguredError();
  }

  if (!browserClient) {
    browserClient = createBrowserClient(supabaseEnv.url, supabaseEnv.anonKey);
  }

  return browserClient;
}
