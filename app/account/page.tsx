import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { AccountClient } from "@/components/account/account-client";

export const metadata: Metadata = {
  title: "Account",
  robots: { index: false, follow: false },
};

export default async function AccountPage() {
  if (!isSupabaseConfigured) {
    return <AccountClient user={null} configError />;
  }

  const supabase = await getSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/?authRedirect=/account");
  }

  return (
    <AccountClient
      user={{
        id: user.id,
        email: user.email ?? "",
        firstName: typeof user.user_metadata?.first_name === "string" ? user.user_metadata.first_name : "",
        lastName: typeof user.user_metadata?.last_name === "string" ? user.user_metadata.last_name : "",
        emailConfirmedAt: user.email_confirmed_at ?? null,
        createdAt: user.created_at ?? null,
        lastSignInAt: user.last_sign_in_at ?? null,
      }}
    />
  );
}
