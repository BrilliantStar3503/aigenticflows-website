"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Loader2, KeyRound } from "lucide-react";
import { PasswordStrength } from "@/components/onboarding/password-strength";
import { updatePassword } from "@/lib/auth/actions";

export function ResetPasswordForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [touched, setTouched] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [success, setSuccess] = useState(false);

  const passwordValid = password.length >= 8;
  const confirmValid = confirmPassword.length > 0 && confirmPassword === password;
  const isValid = passwordValid && confirmValid;

  if (success) {
    return (
      <div className="flex flex-col items-center text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-pink">
          <KeyRound size={26} className="text-brand-red" />
        </div>
        <h1 className="mt-4 text-lg font-bold text-neutral-900">Password updated</h1>
        <p className="mt-1.5 max-w-[340px] text-[12.5px] leading-relaxed text-neutral-500">
          Your password has been reset. Redirecting you to your workspace…
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1 id="reset-password-title" className="text-lg font-bold text-neutral-900">
        Set a new password
      </h1>
      <p className="mt-1 text-[12.5px] leading-relaxed text-neutral-500">
        Choose a new password for your AIGENTIC Flows account.
      </p>

      <form
        className="mt-6 flex flex-col gap-4"
        onSubmit={async (event) => {
          event.preventDefault();
          setTouched(true);
          if (!isValid) return;

          setError(undefined);
          setIsSubmitting(true);
          const result = await updatePassword(password);
          setIsSubmitting(false);

          if (!result.success) {
            setError(result.error);
            return;
          }

          setSuccess(true);
          setTimeout(() => router.push("/dashboard"), 1500);
        }}
      >
        <div className="flex flex-col gap-1.5">
          <label htmlFor="reset-password" className="text-[12.5px] font-medium text-neutral-700">
            New password
          </label>
          <div className="relative">
            <input
              id="reset-password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoFocus
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
          <label htmlFor="reset-confirm-password" className="text-[12.5px] font-medium text-neutral-700">
            Confirm new password
          </label>
          <div className="relative">
            <input
              id="reset-confirm-password"
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

        {error && (
          <span role="alert" className="text-[11.5px] font-medium text-red-500">
            {error}
          </span>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-1 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-brand-gold text-sm font-semibold text-neutral-900 shadow-[0_8px_20px_rgba(245,194,72,0.35)] transition-all enabled:hover:bg-brand-gold-hover enabled:hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting && <Loader2 size={15} className="animate-spin" />}
          {isSubmitting ? "Updating…" : "Reset password"}
        </button>
      </form>
    </div>
  );
}
