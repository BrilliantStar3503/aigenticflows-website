"use client";

import { ArrowRight } from "lucide-react";
import { AimpButton } from "@/components/ui/button";

interface CTASectionProps {
  headline: string;
  subtitle: string;
  onPrimaryClick: () => void;
  secondaryLabel: string;
  secondaryHref?: string;
}

export function CTASection({ headline, subtitle, onPrimaryClick, secondaryLabel, secondaryHref }: CTASectionProps) {
  const secondaryClassName =
    "flex items-center gap-1.5 rounded-xl border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#B8283A]";

  return (
    <section className="bg-[#B8283A]">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 py-20 text-center lg:px-14">
        <h2 className="text-[32px] font-bold tracking-tight text-white lg:text-[38px]">{headline}</h2>
        <p className="mx-auto mt-4 max-w-[440px] text-[15px] leading-relaxed text-white/70">{subtitle}</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <AimpButton variant="primary" onClick={onPrimaryClick}>
            Start Free Trial
            <ArrowRight size={14} />
          </AimpButton>
          {secondaryHref ? (
            <a href={secondaryHref} className={secondaryClassName}>
              {secondaryLabel}
            </a>
          ) : (
            <button type="button" className={secondaryClassName}>
              {secondaryLabel}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
