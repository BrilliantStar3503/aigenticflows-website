import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { DashboardClient } from "@/components/dashboard/dashboard-client";

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
    .select("name, industry")
    .eq("id", membership.agency_id)
    .maybeSingle();

  const { data: units } = await supabase
    .from("units")
    .select("name")
    .eq("agency_id", membership.agency_id)
    .order("created_at", { ascending: true })
    .limit(1);

  return (
    <DashboardClient
      state="ready"
      email={user.email ?? ""}
      organizationName={agency?.name ?? "—"}
      workspaceName={units?.[0]?.name ?? "—"}
      industry={agency?.industry ?? "—"}
    />
  );
}
