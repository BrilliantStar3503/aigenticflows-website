import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

interface AimpButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/40 focus-visible:ring-offset-2";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-gold text-neutral-900 shadow-[0_8px_20px_rgba(245,194,72,0.35)] hover:bg-brand-gold-hover hover:-translate-y-0.5",
  secondary:
    "border border-neutral-200 bg-white text-neutral-900 hover:border-neutral-300 hover:-translate-y-0.5",
};

export function AimpButton({
  variant = "primary",
  className,
  children,
  ...props
}: AimpButtonProps) {
  return (
    <button
      className={[baseClasses, variantClasses[variant], className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
