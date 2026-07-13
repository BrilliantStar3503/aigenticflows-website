"use client";

import { motion } from "framer-motion";
import { AimpButton } from "@/components/ui/button";
import { ProductivityPanel } from "@/components/features/productivity-panel";
import { TabletScale } from "@/components/shared/tablet-scale";

interface FeaturesHeroProps {
  onStartTrialClick: () => void;
}

export function FeaturesHero({ onStartTrialClick }: FeaturesHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-[1600px] px-4 pb-8 pt-12 sm:px-6 lg:px-14">
        <div className="grid grid-cols-1 items-start gap-8 xl:grid-cols-[0.42fr_1fr] xl:gap-8">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center rounded-full border border-[#FEE2E2] bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-brand-red"
            >
              Features
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="mt-5 text-[46px] font-bold leading-[1.08] tracking-tight text-neutral-900 lg:text-[56px]"
            >
              Everything your business needs.
              <br />
              <span className="text-brand-red">One</span> connected platform.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.16 }}
              className="mt-6 max-w-[440px] text-[16px] leading-relaxed text-neutral-600"
            >
              AIGENTIC Flows combines CRM, automation, analytics, communication,
              workflows, and operations into one unified platform — so your
              team stops switching tools and starts getting work done.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.24 }}
              className="mt-8 flex gap-3"
            >
              <AimpButton variant="primary" onClick={onStartTrialClick}>
                Start Free Trial
              </AimpButton>
              <AimpButton variant="secondary">View Pricing</AimpButton>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            <TabletScale>
              <ProductivityPanel />
            </TabletScale>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
