import { SupabaseNotConfiguredError } from "@/lib/supabase/errors";

export function mapAuthError(error: unknown): string {
  if (error instanceof SupabaseNotConfiguredError) {
    return "Authentication isn't configured yet. Please try again later.";
  }

  if (error instanceof Error) {
    const message = error.message.toLowerCase();

    if (message.includes("invalid login credentials")) {
      return "Incorrect email or password. Please try again.";
    }
    if (message.includes("email not confirmed")) {
      return "Please verify your email address before signing in.";
    }
    if (message.includes("user already registered") || message.includes("already registered")) {
      return "An account with this email already exists.";
    }
    if (message.includes("token has expired") || message.includes("expired") || message.includes("invalid")) {
      return "This link has expired or is invalid. Please request a new one.";
    }
    if (message.includes("rate limit") || message.includes("too many")) {
      return "Too many attempts. Please wait a moment and try again.";
    }
    if (message.includes("fetch") || message.includes("network")) {
      return "Network error. Please check your connection and try again.";
    }
    if (message.includes("password")) {
      return error.message;
    }
  }

  return "Something went wrong. Please try again.";
}
