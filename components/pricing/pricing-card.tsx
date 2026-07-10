"use client";

import { Check, Star } from "lucide-react";
import { AimpButton } from "@/components/ui/button";

export interface PricingTier {
  name: string;
  description: string;
  price: string;
  billingLabel: string;
  ctaLabel: string;
  features: string[];
  recommended?: boolean;
}

interface PricingCardProps extends PricingTier {
  onCtaClick?: () => void;
}

export function PricingCard({
  name,
  description,
  price,
  billingLabel,
  ctaLabel,
  features,
  recommended,
  onCtaClick,
}: PricingCardProps) {
  return (
    <div
      className={
        recommended
          ? "relative flex flex-col rounded-2xl border border-brand-red/30 bg-white p-9 shadow-[0_36px_72px_-20px_rgba(230,0,18,0.18)] transition-transform duration-200 hover:-translate-y-1 lg:scale-[1.03]"
          : "relative flex flex-col rounded-2xl border border-neutral-100 bg-white p-9 shadow-[0_4px_24px_rgba(17,17,17,0.03)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_24px_48px_-8px_rgba(17,17,17,0.10)]"
      }
    >
      {recommended && (
        <span className="absolute -top-3.5 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-brand-red px-3.5 py-1.5 text-[10.5px] font-bold uppercase tracking-wider text-white shadow-[0_10px_24px_-4px_rgba(230,0,18,0.4)]">
          <Star size={11} className="fill-white" />
          Recommended
        </span>
      )}

      <h3 className="text-lg font-bold text-neutral-900">{name}</h3>
      <p className="mt-2 text-[13px] leading-relaxed text-neutral-600">{description}</p>

      <div className="mt-7">
        <span className="text-[34px] font-bold tracking-tight text-neutral-900">{price}</span>
        <div className="mt-1.5 text-[12px] text-neutral-500">{billingLabel}</div>
      </div>

      <div className="mt-7">
        <AimpButton
          variant={recommended ? "primary" : "secondary"}
          onClick={onCtaClick}
          className="w-full"
        >
          {ctaLabel}
        </AimpButton>
      </div>

      <ul className="mt-8 space-y-3.5 border-t border-neutral-100 pt-7">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-[13px] text-neutral-700">
            <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-brand-pink">
              <Check size={9} className="text-brand-red" strokeWidth={3} />
            </span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
