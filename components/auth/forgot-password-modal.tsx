"use client";

import { ArrowLeft } from "lucide-react";
import { ForgotPasswordForm } from "@/components/auth/forgot-password-form";

interface ForgotPasswordModalProps {
  onBack: () => void;
  onSubmitted: (email: string) => void;
}

export function ForgotPasswordModal({ onBack, onSubmitted }: ForgotPasswordModalProps) {
  return (
    <div>
      <button
        type="button"
        onClick={onBack}
        aria-label="Back to sign in"
        className="mb-4 flex h-8 w-8 items-center justify-center rounded-lg text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-700"
      >
        <ArrowLeft size={16} />
      </button>

      <h2 id="login-modal-title" className="text-lg font-bold text-neutral-900">
        Reset your password
      </h2>
      <p className="mt-1 text-[12.5px] leading-relaxed text-neutral-500">
        Enter the email associated with your account and we&apos;ll send you instructions to reset your
        password.
      </p>

      <div className="mt-6">
        <ForgotPasswordForm onSubmitted={onSubmitted} onBackToSignIn={onBack} />
      </div>
    </div>
  );
}
