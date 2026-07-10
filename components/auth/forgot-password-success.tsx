"use client";

import { MailCheck } from "lucide-react";
import { CountdownTimer } from "@/components/auth/countdown-timer";
import { requestPasswordReset } from "@/lib/auth/actions";

interface ForgotPasswordSuccessProps {
  email: string;
  onBackToSignIn: () => void;
}

export function ForgotPasswordSuccess({ email, onBackToSignIn }: ForgotPasswordSuccessProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-pink">
        <MailCheck size={26} className="text-brand-red" />
      </div>

      <h2 id="login-modal-title" className="mt-4 text-lg font-bold text-neutral-900">
        Check your email
      </h2>
      <p className="mt-1.5 max-w-[340px] text-[12.5px] leading-relaxed text-neutral-500">
        If an account exists for that email, we&apos;ve sent password reset instructions. Please check
        your inbox and spam folder.
      </p>

      <button
        type="button"
        onClick={onBackToSignIn}
        className="mt-6 h-11 w-full rounded-xl bg-brand-gold text-sm font-semibold text-neutral-900 shadow-[0_8px_20px_rgba(245,194,72,0.35)] transition-all hover:bg-brand-gold-hover hover:-translate-y-0.5"
      >
        Back to sign in
      </button>

      <div className="mt-4 flex items-center gap-1.5 text-[12.5px] text-neutral-500">
        <span>Didn&apos;t receive the email?</span>
        <CountdownTimer onResend={() => requestPasswordReset(email)} />
      </div>
    </div>
  );
}
