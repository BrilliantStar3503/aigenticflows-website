"use client";

import { motion } from "framer-motion";
import { AimpButton } from "@/components/ui/button";

interface PricingHeroProps {
  onStartTrialClick: () => void;
}

export function PricingHero({ onStartTrialClick }: PricingHeroProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[820px] px-4 sm:px-6 pb-10 pt-14 text-center lg:px-14">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center rounded-full border border-[#FEE2E2] bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-brand-red"
        >
          Pricing
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="mt-5 text-[44px] font-bold leading-[1.1] tracking-tight text-neutral-900 lg:text-[52px]"
        >
          Simple pricing.
          <br />
          <span className="text-brand-red">Powerful</span> business operations.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.16 }}
          className="mx-auto mt-5 max-w-[480px] text-[16px] leading-relaxed text-neutral-600"
        >
          Choose the plan that fits your business today and scale as your organization grows.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.24 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <AimpButton variant="primary" onClick={onStartTrialClick}>
            Start Free Trial
          </AimpButton>
          <AimpButton variant="secondary">Talk to Sales</AimpButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.32 }}
          className="mt-8 flex flex-col items-center gap-2"
        >
          <div
            aria-disabled="true"
            className="flex cursor-not-allowed items-center gap-1 rounded-full border border-neutral-200 bg-neutral-50 p-1 opacity-60"
          >
            <span className="rounded-full bg-white px-4 py-1.5 text-[12.5px] font-semibold text-neutral-900 shadow-[0_1px_2px_rgba(17,17,17,0.06)]">
              Monthly
            </span>
            <span className="px-4 py-1.5 text-[12.5px] font-medium text-neutral-400">Annual</span>
          </div>
          <span className="text-[10.5px] font-medium uppercase tracking-wider text-neutral-400">
            Annual billing — coming soon
          </span>
        </motion.div>
      </div>
    </section>
  );
}
