"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  AlertTriangle,
  Briefcase,
  Building2,
  CheckCircle2,
  LogOut,
  Loader2,
  ShieldAlert,
  User as UserIcon,
  Workflow,
} from "lucide-react";
import { signOut } from "@/lib/auth/actions";
import { EmptyState } from "@/components/shared/empty-state";
import { provisionWorkspace } from "@/lib/provisioning/provisionWorkspace";
import { deletePendingRegistration, readPendingRegistration } from "@/lib/provisioning/pendingRegistration";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import { buildCrmHandoffUrl } from "@/lib/crm/handoff";

type DashboardState = "config-error" | "no-workspace" | "ready";
type ProvisioningPhase = "idle" | "checking" | "provisioning" | "error";

interface DashboardClientProps {
  state: DashboardState;
  email?: string;
  organizationName?: string;
  workspaceName?: string;
  industry?: string;
}

function TopBar({
  showActions,
  onSignOut,
  isSigningOut,
}: {
  showActions: boolean;
  onSignOut: () => void;
  isSigningOut: boolean;
}) {
  return (
    <div className="flex items-center justify-between border-b border-neutral-100 bg-white px-6 py-4">
      <Link href="/" className="flex items-center gap-2.5">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-red">
          <div className="h-2.5 w-2.5 rounded-[2px] bg-white" />
        </div>
        <span className="text-sm font-bold text-neutral-900">AIGENTIC Flows</span>
      </Link>

      {showActions && (
        <button
          type="button"
          disabled={isSigningOut}
          onClick={onSignOut}
          className="flex h-9 items-center gap-1.5 rounded-lg bg-brand-gold px-3 text-[12.5px] font-semibold text-neutral-900 shadow-[0_8px_20px_rgba(245,194,72,0.35)] transition-all enabled:hover:bg-brand-gold-hover disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSigningOut ? <Loader2 size={14} className="animate-spin" /> : <LogOut size={14} />}
          Sign out
        </button>
      )}
    </div>
  );
}

function InfoRow({ icon: Icon, label, value }: { icon: typeof UserIcon; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 py-3">
      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-neutral-50">
        <Icon size={15} className="text-neutral-400" />
      </div>
      <div className="min-w-0">
        <p className="text-[11.5px] font-medium text-neutral-500">{label}</p>
        <p className="mt-0.5 truncate text-sm font-medium text-neutral-900">{value}</p>
      </div>
    </div>
  );
}

export function DashboardClient({ state, email, organizationName, workspaceName, industry }: DashboardClientProps) {
  const router = useRouter();
  const [isSigningOut, setIsSigningOut] = useState(false);
  const [phase, setPhase] = useState<ProvisioningPhase>(state === "no-workspace" ? "checking" : "idle");
  const [provisioningError, setProvisioningError] = useState("");
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    if (state !== "no-workspace") return;

    let cancelled = false;
    setPhase("checking");

    (async () => {
      const pending = await readPendingRegistration();
      if (cancelled) return;

      if (!pending) {
        setPhase("idle");
        return;
      }

      setPhase("provisioning");
      const result = await provisionWorkspace(pending);
      if (cancelled) return;

      if (!result.success && !result.alreadyProvisioned) {
        setProvisioningError(result.error ?? "We couldn't finish setting up your workspace. Please try again.");
        setPhase("error");
        return;
      }

      await deletePendingRegistration();
      if (cancelled) return;

      const supabase = getSupabaseBrowserClient();
      const [{ data: agency }, { data: sessionData }] = await Promise.all([
        supabase.from("agencies").select("slug").eq("id", result.agencyId).maybeSingle(),
        supabase.auth.getSession(),
      ]);
      if (cancelled) return;

      if (agency?.slug && sessionData.session) {
        window.location.href = buildCrmHandoffUrl({
          accessToken: sessionData.session.access_token,
          refreshToken: sessionData.session.refresh_token,
          agencySlug: agency.slug,
        });
        return;
      }

      router.refresh();
    })();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, attempt]);

  const handleSignOut = async () => {
    setIsSigningOut(true);
    await signOut();
    router.push("/");
    router.refresh();
  };

  if (state === "config-error") {
    return (
      <main className="min-h-screen bg-neutral-50">
        <TopBar showActions={false} onSignOut={handleSignOut} isSigningOut={isSigningOut} />
        <div className="mx-auto max-w-[520px] px-4 py-16">
          <div className="rounded-2xl border border-neutral-100 bg-white p-8 text-center shadow-[0_4px_20px_rgba(17,17,17,0.04)]">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-50">
              <ShieldAlert size={22} className="text-amber-500" />
            </div>
            <h1 className="mt-4 text-base font-bold text-neutral-900">Dashboard unavailable</h1>
            <p className="mt-1.5 text-[13px] leading-relaxed text-neutral-500">
              Authentication isn&apos;t configured yet. Please try again later.
            </p>
          </div>
        </div>
      </main>
    );
  }

  if (state === "no-workspace" && (phase === "checking" || phase === "provisioning")) {
    return (
      <main className="min-h-screen bg-neutral-50">
        <TopBar showActions onSignOut={handleSignOut} isSigningOut={isSigningOut} />
        <div className="mx-auto max-w-[520px] px-4 py-16">
          <div className="rounded-2xl border border-neutral-100 bg-white p-8 text-center shadow-[0_4px_20px_rgba(17,17,17,0.04)]">
            <Loader2 size={22} className="mx-auto animate-spin text-brand-red" />
            <h1 className="mt-4 text-base font-bold text-neutral-900">Finishing setup…</h1>
            <p className="mt-1.5 text-[13px] leading-relaxed text-neutral-500">
              Your email is confirmed. We&apos;re creating your workspace now.
            </p>
          </div>
        </div>
      </main>
    );
  }

  if (state === "no-workspace" && phase === "error") {
    return (
      <main className="min-h-screen bg-neutral-50">
        <TopBar showActions onSignOut={handleSignOut} isSigningOut={isSigningOut} />
        <div className="mx-auto max-w-[520px] px-4 py-16">
          <div className="rounded-2xl border border-neutral-100 bg-white p-8 text-center shadow-[0_4px_20px_rgba(17,17,17,0.04)]">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-50">
              <AlertTriangle size={22} className="text-red-500" />
            </div>
            <h1 className="mt-4 text-base font-bold text-neutral-900">Setup failed</h1>
            <p role="alert" className="mt-1.5 text-[13px] leading-relaxed text-neutral-500">
              {provisioningError}
            </p>
            <button
              type="button"
              onClick={() => setAttempt((value) => value + 1)}
              className="mt-6 h-11 w-full rounded-xl bg-brand-gold text-sm font-semibold text-neutral-900 shadow-[0_8px_20px_rgba(245,194,72,0.35)] transition-all hover:bg-brand-gold-hover hover:-translate-y-0.5"
            >
              Try again
            </button>
          </div>
        </div>
      </main>
    );
  }

  if (state === "no-workspace") {
    return (
      <main className="min-h-screen bg-neutral-50">
        <TopBar showActions onSignOut={handleSignOut} isSigningOut={isSigningOut} />
        <div className="mx-auto max-w-[520px] px-4 py-16">
          <EmptyState
            icon={Building2}
            title="No workspace yet"
            description="Complete the Start Free Trial flow to provision your AIGENTIC Flows workspace."
            actionLabel="Return to homepage"
            onAction={() => router.push("/")}
          />
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-50">
      <TopBar showActions onSignOut={handleSignOut} isSigningOut={isSigningOut} />

      <div className="mx-auto max-w-[640px] px-4 py-10 sm:px-6">
        <div className="flex items-center gap-2 rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-[12.5px] font-medium text-emerald-700">
          <CheckCircle2 size={16} />
          Your workspace was created successfully.
        </div>

        <h1 className="mt-6 text-xl font-bold text-neutral-900">{organizationName}</h1>
        <p className="mt-1 text-[13px] text-neutral-500">Workspace overview</p>

        <div className="mt-6 rounded-2xl border border-neutral-100 bg-white px-5 py-2 shadow-[0_4px_20px_rgba(17,17,17,0.04)]">
          <div className="divide-y divide-neutral-50">
            <InfoRow icon={Building2} label="Organization" value={organizationName ?? "—"} />
            <InfoRow icon={Workflow} label="Workspace" value={workspaceName ?? "—"} />
            <InfoRow icon={UserIcon} label="Logged in as" value={email ?? "—"} />
            <InfoRow icon={Briefcase} label="Industry" value={industry ?? "—"} />
          </div>
        </div>
      </div>
    </main>
  );
}
