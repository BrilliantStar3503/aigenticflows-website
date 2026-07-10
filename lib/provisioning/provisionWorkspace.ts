"use client";

import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import { getLocaleDefaults } from "@/lib/provisioning/locale-defaults";
import { mapProvisioningError } from "@/lib/provisioning/errors";
import type { ProvisionWorkspaceInput, ProvisionWorkspaceResult } from "@/lib/provisioning/types";

export async function provisionWorkspace(input: ProvisionWorkspaceInput): Promise<ProvisionWorkspaceResult> {
  const supabase = getSupabaseBrowserClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { success: false, error: "Your session expired. Please sign in again." };
  }

  const { data: existingMembership } = await supabase
    .from("memberships")
    .select("agency_id")
    .eq("user_id", user.id)
    .eq("status", "active")
    .maybeSingle();

  if (existingMembership) {
    return {
      success: false,
      error: "You already have a workspace on this account.",
      alreadyProvisioned: true,
      agencyId: (existingMembership as { agency_id: string }).agency_id,
    };
  }

  const { timeZone, currency, locale } = getLocaleDefaults(input.country);

  const { data, error } = await supabase.rpc("provision_trial_agency", {
    p_agency_name: input.companyName,
    p_industry: input.industry,
    p_time_zone: timeZone,
    p_currency: currency,
    p_locale: locale,
    p_unit_name: input.workspaceName,
    p_template: input.industryTemplate || null,
  });

  if (error) {
    return { success: false, error: mapProvisioningError(error) };
  }

  const result = Array.isArray(data) ? data[0] : data;

  return {
    success: true,
    agencyId: result?.agency_id,
    unitId: result?.unit_id,
  };
}
