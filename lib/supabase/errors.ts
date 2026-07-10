export class SupabaseNotConfiguredError extends Error {
  constructor() {
    super("Authentication is not configured yet. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.");
    this.name = "SupabaseNotConfiguredError";
  }
}
