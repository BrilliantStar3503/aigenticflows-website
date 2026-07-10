"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  BadgeCheck,
  Calendar,
  Clock,
  Fingerprint,
  LogOut,
  Mail,
  RefreshCw,
  ShieldAlert,
  User as UserIcon,
  Loader2,
} from "lucide-react";
import { signOut, refreshSession } from "@/lib/auth/actions";

interface AccountUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  emailConfirmedAt: string | null;
  createdAt: string | null;
  lastSignInAt: string | null;
}

interface AccountClientProps {
  user: AccountUser | null;
  configError?: boolean;
}

function formatDate(value: string | null): string {
  if (!value) return "—";
  return new Date(value).toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

function InfoRow({ icon: Icon, label, value, mono }: { icon: typeof UserIcon; label: string; value: string; mono?: boolean }) {
  return (
    <div className="flex items-start gap-3 py-3">
      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-neutral-50">
        <Icon size={15} className="text-neutral-400" />
      </div>
      <div className="min-w-0">
        <p className="text-[11.5px] font-medium text-neutral-500">{label}</p>
        <p className={`mt-0.5 truncate text-sm text-neutral-900 ${mono ? "font-mono text-[12.5px]" : "font-medium"}`}>
          {value}
        </p>
      </div>
    </div>
  );
}

export function AccountClient({ user, configError }: AccountClientProps) {
  const router = useRouter();
  const [isSigningOut, setIsSigningOut] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [refreshedAt, setRefreshedAt] = useState<string | null>(null);

  const topBar = (
    <div className="flex items-center justify-between border-b border-neutral-100 bg-white px-6 py-4">
      <Link href="/" className="flex items-center gap-2.5">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-red">
          <div className="h-2.5 w-2.5 rounded-[2px] bg-white" />
        </div>
        <span className="text-sm font-bold text-neutral-900">AIMP</span>
      </Link>

      {user && (
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            disabled={isRefreshing}
            onClick={async () => {
              setError(undefined);
              setIsRefreshing(true);
              const result = await refreshSession();
              setIsRefreshing(false);

              if (!result.success) {
                setError(result.error);
                return;
              }

              setRefreshedAt(new Date().toISOString());
              router.refresh();
            }}
            className="flex h-9 items-center gap-1.5 rounded-lg border border-neutral-200 px-3 text-[12.5px] font-semibold text-neutral-700 transition-colors enabled:hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isRefreshing ? <Loader2 size={14} className="animate-spin" /> : <RefreshCw size={14} />}
            Refresh session
          </button>
          <button
            type="button"
            disabled={isSigningOut}
            onClick={async () => {
              setError(undefined);
              setIsSigningOut(true);
              const result = await signOut();

              if (!result.success) {
                setIsSigningOut(false);
                setError(result.error);
                return;
              }

              router.push("/");
              router.refresh();
            }}
            className="flex h-9 items-center gap-1.5 rounded-lg bg-brand-gold px-3 text-[12.5px] font-semibold text-neutral-900 shadow-[0_8px_20px_rgba(245,194,72,0.35)] transition-all enabled:hover:bg-brand-gold-hover disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSigningOut ? <Loader2 size={14} className="animate-spin" /> : <LogOut size={14} />}
            Sign out
          </button>
        </div>
      )}
    </div>
  );

  if (configError || !user) {
    return (
      <main className="min-h-screen bg-neutral-50">
        {topBar}
        <div className="mx-auto max-w-[520px] px-4 py-16">
          <div className="rounded-2xl border border-neutral-100 bg-white p-8 text-center shadow-[0_4px_20px_rgba(17,17,17,0.04)]">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-50">
              <ShieldAlert size={22} className="text-amber-500" />
            </div>
            <h1 className="mt-4 text-base font-bold text-neutral-900">Account unavailable</h1>
            <p className="mt-1.5 text-[13px] leading-relaxed text-neutral-500">
              Authentication isn&apos;t configured yet. Please try again later.
            </p>
          </div>
        </div>
      </main>
    );
  }

  const fullName = [user.firstName, user.lastName].filter(Boolean).join(" ") || "Not set";
  const isVerified = Boolean(user.emailConfirmedAt);

  return (
    <main className="min-h-screen bg-neutral-50">
      {topBar}

      <div className="mx-auto max-w-[720px] px-4 py-10 sm:px-6">
        <h1 className="text-xl font-bold text-neutral-900">Account</h1>
        <p className="mt-1 text-[13px] text-neutral-500">
          A lightweight view of your session, used to verify authentication before workspace features ship.
        </p>

        {error && (
          <div role="alert" className="mt-4 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-[12.5px] font-medium text-red-600">
            {error}
          </div>
        )}

        {refreshedAt && !error && (
          <div className="mt-4 rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-[12.5px] font-medium text-emerald-700">
            Session refreshed at {formatDate(refreshedAt)}.
          </div>
        )}

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="rounded-2xl border border-neutral-100 bg-white px-5 py-2 shadow-[0_4px_20px_rgba(17,17,17,0.04)]">
            <h2 className="pt-3 text-[11px] font-bold uppercase tracking-wider text-neutral-400">Profile</h2>
            <div className="divide-y divide-neutral-50">
              <InfoRow icon={UserIcon} label="Full name" value={fullName} />
              <InfoRow icon={Mail} label="Email address" value={user.email} />
              <InfoRow icon={Fingerprint} label="User ID" value={user.id} mono />
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-100 bg-white px-5 py-2 shadow-[0_4px_20px_rgba(17,17,17,0.04)]">
            <h2 className="pt-3 text-[11px] font-bold uppercase tracking-wider text-neutral-400">Status</h2>
            <div className="divide-y divide-neutral-50">
              <InfoRow
                icon={BadgeCheck}
                label="Email verification"
                value={isVerified ? "Verified" : "Unverified"}
              />
              <InfoRow icon={Calendar} label="Account created" value={formatDate(user.createdAt)} />
              <InfoRow icon={Clock} label="Last sign-in" value={formatDate(user.lastSignInAt)} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
