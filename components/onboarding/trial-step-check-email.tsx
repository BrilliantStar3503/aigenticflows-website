"use client";

import { MailCheck } from "lucide-react";

interface TrialStepCheckEmailProps {
  email: string;
  onReturnHome: () => void;
}

export function TrialStepCheckEmail({ email, onReturnHome }: TrialStepCheckEmailProps) {
  return (
    <div className="flex flex-col items-center py-2 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-pink">
        <MailCheck size={30} className="text-brand-red" />
      </div>

      <h2 id="trial-modal-title" className="mt-4 text-xl font-bold text-neutral-900">
        Confirm your email
      </h2>
      <p className="mt-1.5 max-w-[340px] text-[12.5px] leading-relaxed text-neutral-500">
        We&apos;ve sent a confirmation link to <span className="font-semibold text-neutral-700">{email}</span>.
        Click it to activate your account — your workspace will finish setting up automatically and you&apos;ll
        land on your dashboard.
      </p>

      <div className="mt-7 flex w-full flex-col gap-3">
        <button
          type="button"
          onClick={onReturnHome}
          className="h-11 w-full rounded-xl bg-brand-gold text-sm font-semibold text-neutral-900 shadow-[0_8px_20px_rgba(245,194,72,0.35)] transition-all hover:bg-brand-gold-hover hover:-translate-y-0.5"
        >
          Return to homepage
        </button>
      </div>
    </div>
  );
}
