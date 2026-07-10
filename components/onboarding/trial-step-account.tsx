"use client";

import { useState } from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { PasswordStrength } from "@/components/onboarding/password-strength";
import type { TrialAccountData } from "@/components/onboarding/types";
import { signUpWithPassword } from "@/lib/auth/actions";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface TrialStepAccountProps {
  initialData: TrialAccountData;
  onContinue: (data: TrialAccountData, userId: string) => void;
}

export function TrialStepAccount({ initialData, onContinue }: TrialStepAccountProps) {
  const [firstName, setFirstName] = useState(initialData.firstName);
  const [lastName, setLastName] = useState(initialData.lastName);
  const [email, setEmail] = useState(initialData.email);
  const [password, setPassword] = useState(initialData.password);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [touched, setTouched] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | undefined>(undefined);

  const emailValid = EMAIL_PATTERN.test(email);
  const passwordValid = password.length >= 8;
  const confirmValid = confirmPassword.length > 0 && confirmPassword === password;
  const isValid =
    firstName.trim().length > 0 &&
    lastName.trim().length > 0 &&
    emailValid &&
    passwordValid &&
    confirmValid &&
    agreed;

  return (
    <div>
      <h2 id="trial-modal-title" className="text-lg font-bold text-neutral-900">
        Create your workspace
      </h2>
      <p className="mt-1 text-[12.5px] text-neutral-500">Start your free 14-day trial.</p>

      <form
        className="mt-6 flex flex-col gap-4"
        onSubmit={async (event) => {
          event.preventDefault();
          setTouched(true);
          if (!isValid) return;

          setSubmitError(undefined);
          setIsSubmitting(true);
          const result = await signUpWithPassword(email, password, firstName, lastName);
          setIsSubmitting(false);

          if (!result.success) {
            setSubmitError(result.error);
            return;
          }

          onContinue({ firstName, lastName, email, password }, result.userId ?? "");
        }}
      >
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="trial-first-name" className="text-[12.5px] font-medium text-neutral-700">
              First name
            </label>
            <input
              id="trial-first-name"
              autoFocus
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              className="h-11 rounded-xl border border-neutral-200 bg-white px-3.5 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-brand-red focus:ring-2 focus:ring-brand-red/15"
            />
            {touched && firstName.trim().length === 0 && (
              <span className="text-[11px] font-medium text-red-500">Required</span>
            )}
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="trial-last-name" className="text-[12.5px] font-medium text-neutral-700">
              Last name
            </label>
            <input
              id="trial-last-name"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              className="h-11 rounded-xl border border-neutral-200 bg-white px-3.5 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-brand-red focus:ring-2 focus:ring-brand-red/15"
            />
            {touched && lastName.trim().length === 0 && (
              <span className="text-[11px] font-medium text-red-500">Required</span>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="trial-email" className="text-[12.5px] font-medium text-neutral-700">
            Business email
          </label>
          <input
            id="trial-email"
            type="email"
            placeholder="you@company.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="h-11 rounded-xl border border-neutral-200 bg-white px-3.5 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-brand-red focus:ring-2 focus:ring-brand-red/15"
          />
          {touched && !emailValid && (
            <span className="text-[11px] font-medium text-red-500">Enter a valid email address</span>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="trial-password" className="text-[12.5px] font-medium text-neutral-700">
            Password
          </label>
          <div className="relative">
            <input
              id="trial-password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="h-11 w-full rounded-xl border border-neutral-200 bg-white px-3.5 pr-10 text-sm text-neutral-900 outline-none transition-colors focus:border-brand-red focus:ring-2 focus:ring-brand-red/15"
            />
            <button
              type="button"
              onClick={() => setShowPassword((value) => !value)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          <PasswordStrength password={password} />
          {touched && !passwordValid && (
            <span className="text-[11px] font-medium text-red-500">Use at least 8 characters</span>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="trial-confirm-password" className="text-[12.5px] font-medium text-neutral-700">
            Confirm password
          </label>
          <div className="relative">
            <input
              id="trial-confirm-password"
              type={showConfirm ? "text" : "password"}
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              className="h-11 w-full rounded-xl border border-neutral-200 bg-white px-3.5 pr-10 text-sm text-neutral-900 outline-none transition-colors focus:border-brand-red focus:ring-2 focus:ring-brand-red/15"
            />
            <button
              type="button"
              onClick={() => setShowConfirm((value) => !value)}
              aria-label={showConfirm ? "Hide password" : "Show password"}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
            >
              {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          {touched && !confirmValid && (
            <span className="text-[11px] font-medium text-red-500">Passwords do not match</span>
          )}
        </div>

        <label className="flex items-start gap-2 text-[12px] leading-snug text-neutral-600">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(event) => setAgreed(event.target.checked)}
            className="mt-0.5 h-3.5 w-3.5 rounded border-neutral-300 text-brand-red focus:ring-brand-red/30"
          />
          <span>
            I agree to the{" "}
            <a href="#" className="font-semibold text-brand-red hover:underline">
              Terms
            </a>{" "}
            and{" "}
            <a href="#" className="font-semibold text-brand-red hover:underline">
              Privacy Policy
            </a>
            .
          </span>
        </label>
        {touched && !agreed && (
          <span className="-mt-2.5 text-[11px] font-medium text-red-500">
            You must accept the terms to continue
          </span>
        )}

        {submitError && (
          <span role="alert" className="-mt-2.5 text-[11px] font-medium text-red-500">
            {submitError}
          </span>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-1 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-brand-gold text-sm font-semibold text-neutral-900 shadow-[0_8px_20px_rgba(245,194,72,0.35)] transition-all enabled:hover:bg-brand-gold-hover enabled:hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting && <Loader2 size={15} className="animate-spin" />}
          {isSubmitting ? "Creating account…" : "Continue"}
        </button>
      </form>
    </div>
  );
}
