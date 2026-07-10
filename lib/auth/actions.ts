"use client";

import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import { mapAuthError } from "@/lib/auth/errors";

export interface AuthActionResult {
  success: boolean;
  error?: string;
  userId?: string;
}

export async function signInWithPassword(email: string, password: string): Promise<AuthActionResult> {
  try {
    const supabase = getSupabaseBrowserClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return { success: false, error: mapAuthError(error) };
    return { success: true };
  } catch (error) {
    return { success: false, error: mapAuthError(error) };
  }
}

export async function signUpWithPassword(
  email: string,
  password: string,
  firstName: string,
  lastName: string
): Promise<AuthActionResult> {
  try {
    const supabase = getSupabaseBrowserClient();
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { first_name: firstName, last_name: lastName, full_name: `${firstName} ${lastName}`.trim() },
        emailRedirectTo: `${window.location.origin}/auth/callback?next=/dashboard`,
      },
    });
    if (error) return { success: false, error: mapAuthError(error) };
    return { success: true, userId: data.user?.id };
  } catch (error) {
    return { success: false, error: mapAuthError(error) };
  }
}

export async function signOut(): Promise<AuthActionResult> {
  try {
    const supabase = getSupabaseBrowserClient();
    const { error } = await supabase.auth.signOut();
    if (error) return { success: false, error: mapAuthError(error) };
    return { success: true };
  } catch (error) {
    return { success: false, error: mapAuthError(error) };
  }
}

export async function requestPasswordReset(email: string): Promise<AuthActionResult> {
  try {
    const supabase = getSupabaseBrowserClient();
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/callback?next=/reset-password`,
    });
    if (error) return { success: false, error: mapAuthError(error) };
    return { success: true };
  } catch (error) {
    return { success: false, error: mapAuthError(error) };
  }
}

export async function updatePassword(newPassword: string): Promise<AuthActionResult> {
  try {
    const supabase = getSupabaseBrowserClient();
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    if (error) return { success: false, error: mapAuthError(error) };
    return { success: true };
  } catch (error) {
    return { success: false, error: mapAuthError(error) };
  }
}

export async function refreshSession(): Promise<AuthActionResult> {
  try {
    const supabase = getSupabaseBrowserClient();
    const { error } = await supabase.auth.refreshSession();
    if (error) return { success: false, error: mapAuthError(error) };
    return { success: true };
  } catch (error) {
    return { success: false, error: mapAuthError(error) };
  }
}
