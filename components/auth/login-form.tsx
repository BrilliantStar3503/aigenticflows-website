"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { ForgotPassword } from "@/components/auth/forgot-password";
import { signInWithPassword } from "@/lib/auth/actions";

interface LoginFormProps {
  onForgotPasswordClick: () => void;
  onSuccess: () => void;
}

export function LoginForm({ onForgotPasswordClick, onSuccess }: LoginFormProps) {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={async (event) => {
        event.preventDefault();
        setError(undefined);
        setIsSubmitting(true);

        const result = await signInWithPassword(email, password);

        setIsSubmitting(false);

        if (!result.success) {
          setError(result.error);
          return;
        }

        const redirectTarget = new URLSearchParams(window.location.search).get("authRedirect");
        onSuccess();
        router.push(redirectTarget || "/dashboard");
      }}
    >
      <div className="flex flex-col gap-1.5">
        <label htmlFor="login-email" className="text-[12.5px] font-medium text-neutral-700">
          Email address
        </label>
        <input
          id="login-email"
          type="email"
          autoComplete="email"
          placeholder="you@company.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          className="h-11 rounded-xl border border-neutral-200 bg-white px-3.5 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-brand-red focus:ring-2 focus:ring-brand-red/15"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="login-password" className="text-[12.5px] font-medium text-neutral-700">
          Password
        </label>
        <div className="relative">
          <input
            id="login-password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            className="h-11 w-full rounded-xl border border-neutral-200 bg-white px-3.5 pr-10 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-brand-red focus:ring-2 focus:ring-brand-red/15"
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
      </div>

      {error && (
        <span role="alert" className="-mt-1 text-[11.5px] font-medium text-red-500">
          {error}
        </span>
      )}

      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 text-[12.5px] text-neutral-600">
          <input
            type="checkbox"
            className="h-3.5 w-3.5 rounded border-neutral-300 text-brand-red focus:ring-brand-red/30"
          />
          Remember me
        </label>
        <ForgotPassword onClick={onForgotPasswordClick} />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-1 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-brand-gold text-sm font-semibold text-neutral-900 shadow-[0_8px_20px_rgba(245,194,72,0.35)] transition-all enabled:hover:bg-brand-gold-hover enabled:hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting && <Loader2 size={15} className="animate-spin" />}
        {isSubmitting ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
