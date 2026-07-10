import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import { isSupabaseConfigured, supabaseEnv } from "@/lib/supabase/env";
import { SupabaseNotConfiguredError } from "@/lib/supabase/errors";

export async function getSupabaseServerClient() {
  if (!isSupabaseConfigured) {
    throw new SupabaseNotConfiguredError();
  }

  const cookieStore = await cookies();

  return createServerClient(supabaseEnv.url, supabaseEnv.anonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
        } catch {
          // Called from a Server Component render — middleware refreshes the session instead.
        }
      },
    },
  });
}
