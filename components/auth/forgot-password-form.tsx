"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { EmailInput } from "@/components/auth/email-input";
import { requestPasswordReset } from "@/lib/auth/actions";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ForgotPasswordFormProps {
  onSubmitted: (email: string) => void;
  onBackToSignIn: () => void;
}

export function ForgotPasswordForm({ onSubmitted, onBackToSignIn }: ForgotPasswordFormProps) {
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const isValid = EMAIL_PATTERN.test(email);
  const showError = touched && email.length > 0 && !isValid;
  const showEmptyError = touched && email.length === 0;

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={async (event) => {
        event.preventDefault();
        setTouched(true);
        if (!isValid) return;

        setError(undefined);
        setIsSubmitting(true);
        const result = await requestPasswordReset(email);
        setIsSubmitting(false);

        if (!result.success) {
          setError(result.error);
          return;
        }

        onSubmitted(email);
      }}
    >
      <EmailInput
        id="forgot-password-email"
        value={email}
        onChange={(value) => {
          setEmail(value);
          if (!touched) setTouched(true);
        }}
        error={showEmptyError ? "Email is required" : showError ? "Enter a valid email address" : error}
        autoFocus
      />

      <button
        type="submit"
        disabled={!isValid || isSubmitting}
        className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-brand-gold text-sm font-semibold text-neutral-900 shadow-[0_8px_20px_rgba(245,194,72,0.35)] transition-all enabled:hover:bg-brand-gold-hover enabled:hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none"
      >
        {isSubmitting && <Loader2 size={15} className="animate-spin" />}
        {isSubmitting ? "Sending…" : "Send reset link"}
      </button>

      <button
        type="button"
        onClick={onBackToSignIn}
        className="text-center text-[12.5px] font-medium text-neutral-500 hover:text-neutral-700"
      >
        Back to sign in
      </button>
    </form>
  );
}
