import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { DashboardClient } from "@/components/dashboard/dashboard-client";
import { buildCrmHandoffUrl } from "@/lib/crm/handoff";

export const metadata: Metadata = {
  title: "Dashboard",
  robots: { index: false, follow: false },
};

export default async function DashboardPage() {
  if (!isSupabaseConfigured) {
    return <DashboardClient state="config-error" />;
  }

  const supabase = await getSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/?authRedirect=/dashboard");
  }

  const { data: membership } = await supabase
    .from("memberships")
    .select("agency_id")
    .eq("user_id", user.id)
    .eq("status", "active")
    .maybeSingle();

  if (!membership) {
    return <DashboardClient state="no-workspace" email={user.email ?? ""} />;
  }

  const { data: agency } = await supabase
    .from("agencies")
    .select("slug")
    .eq("id", membership.agency_id)
    .maybeSingle();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (agency?.slug && session) {
    redirect(
      buildCrmHandoffUrl({
        accessToken: session.access_token,
        refreshToken: session.refresh_token,
        agencySlug: agency.slug,
      })
    );
  }

  return <DashboardClient state="no-workspace" email={user.email ?? ""} />;
}
