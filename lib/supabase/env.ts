const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

export const supabaseEnv = { url, anonKey };

export const isSupabaseConfigured = Boolean(url && anonKey);

if (typeof window === "undefined" && !isSupabaseConfigured) {
  console.warn(
    "[supabase] NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY are not set. Authentication is disabled until they are configured."
  );
}
