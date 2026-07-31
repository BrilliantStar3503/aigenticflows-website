import { Loader2 } from "lucide-react";

/**
 * Dashboard-specific loading UI. Without this, Next.js falls back to the
 * root app/loading.tsx (a homepage hero skeleton) for this route too — a
 * jarring flash of the marketing page's layout right after signing in.
 */
export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-white">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-red">
        <div className="h-3 w-3 rounded-[2px] bg-white" />
      </div>
      <Loader2 size={22} className="animate-spin text-brand-red" />
      <p className="text-sm font-medium text-neutral-500">Setting up your workspace…</p>
    </div>
  );
}
