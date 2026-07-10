"use client";

import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import { getLocaleDefaults } from "@/lib/provisioning/locale-defaults";
import type { ProvisionWorkspaceInput } from "@/lib/provisioning/types";

export interface SavePendingRegistrationResult {
  success: boolean;
  error?: string;
}

const NETWORK_RETRY_DELAYS_MS = [500, 1500];

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * "Failed to fetch" is the browser's generic signal that the request never
 * got a response at all (dropped connection, DNS hiccup, extension
 * interference) rather than the server returning an error. Retrying a real
 * application error (e.g. a rejected RPC precondition) would be pointless,
 * so only this class of failure is retried.
 */
function isNetworkFailure(error: unknown): boolean {
  return error instanceof TypeError;
}

/**
 * Persists onboarding data server-side, tied to the newly created auth user.
 * Called before a session exists (email confirmation is required by this
 * project), so it goes through a SECURITY DEFINER RPC rather than a normal
 * RLS-gated insert. Works across devices since nothing is stored locally.
 */
export async function savePendingRegistration(
  userId: string,
  email: string,
  input: ProvisionWorkspaceInput
): Promise<SavePendingRegistrationResult> {
  const supabase = getSupabaseBrowserClient();
  const { timeZone, currency, locale } = getLocaleDefaults(input.country);

  for (let attempt = 0; ; attempt++) {
    try {
      const { error } = await supabase.rpc("save_pending_registration", {
        p_user_id: userId,
        p_email: email,
        p_company_name: input.companyName,
        p_workspace_name: input.workspaceName,
        p_industry: input.industry,
        p_country: input.country,
        p_industry_template: input.industryTemplate || null,
        p_time_zone: timeZone,
        p_currency: currency,
        p_locale: locale,
      });

      if (error) return { success: false, error: error.message };
      return { success: true };
    } catch (error) {
      if (isNetworkFailure(error) && attempt < NETWORK_RETRY_DELAYS_MS.length) {
        await sleep(NETWORK_RETRY_DELAYS_MS[attempt]);
        continue;
      }
      return {
        success: false,
        error: isNetworkFailure(error)
          ? "Couldn't reach the server. Please check your connection and try again."
          : error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      };
    }
  }
}

/** Reads the current user's pending registration, if any. Requires an active session. */
export async function readPendingRegistration(): Promise<ProvisionWorkspaceInput | null> {
  const supabase = getSupabaseBrowserClient();
  const { data, error } = await supabase
    .from("pending_registrations")
    .select("company_name, workspace_name, industry, country, template")
    .maybeSingle();

  if (error || !data) return null;

  const row = data as {
    company_name: string;
    workspace_name: string;
    industry: string;
    country: string;
    template: string | null;
  };

  return {
    companyName: row.company_name,
    workspaceName: row.workspace_name,
    industry: row.industry,
    country: row.country,
    industryTemplate: row.template ?? "",
  };
}

/** Deletes the current user's pending registration. Requires an active session. */
export async function deletePendingRegistration(): Promise<void> {
  const supabase = getSupabaseBrowserClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return;

  await supabase.from("pending_registrations").delete().eq("user_id", user.id);
}
