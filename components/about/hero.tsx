"use client";

import { motion } from "framer-motion";
import { AimpButton } from "@/components/ui/button";
import { DashboardPreview } from "@/components/home/dashboard-preview";
import { TabletScale } from "@/components/shared/tablet-scale";

interface AboutHeroProps {
  onStartTrialClick: () => void;
}

export function AboutHero({ onStartTrialClick }: AboutHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-[1600px] px-4 pb-8 pt-12 sm:px-6 lg:px-14">
        <div className="grid grid-cols-1 items-start gap-8 xl:grid-cols-[0.46fr_1fr] xl:gap-8">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center rounded-full border border-[#FEE2E2] bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-brand-red"
            >
              About AIGENTIC Flows
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="mt-5 text-[42px] font-bold leading-[1.12] tracking-tight text-neutral-900 lg:text-[50px]"
            >
              Building the future operating system for{" "}
              <span className="text-brand-red">modern businesses.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.16 }}
              className="mt-6 max-w-[440px] text-[16px] leading-relaxed text-neutral-600"
            >
              AIGENTIC Flows was created to replace fragmented business software with
              one intelligent operating platform — built to unify how
              service-based organizations run, grow, and serve their clients.
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
              <AimpButton variant="secondary">Contact Sales</AimpButton>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            <TabletScale>
              <DashboardPreview />
            </TabletScale>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
