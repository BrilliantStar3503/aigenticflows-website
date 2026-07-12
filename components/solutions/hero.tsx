"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Calculator,
  HeartPulse,
  LineChart,
  Briefcase,
  Shield,
} from "lucide-react";
import { AimpButton } from "@/components/ui/button";
import { DashboardPreview } from "@/components/home/dashboard-preview";
import { TabletScale } from "@/components/shared/tablet-scale";

const INDUSTRY_CHIPS = [
  { label: "Insurance", icon: Shield, className: "-left-4 top-4", floatDelay: "0s" },
  { label: "Real Estate", icon: Building2, className: "-right-5 top-16", floatDelay: "0.4s" },
  { label: "Financial Advisory", icon: LineChart, className: "-left-8 top-1/2", floatDelay: "0.8s" },
  { label: "Healthcare", icon: HeartPulse, className: "-right-6 bottom-20", floatDelay: "1.2s" },
  { label: "Accounting", icon: Calculator, className: "-left-4 bottom-6", floatDelay: "1.6s" },
  { label: "Professional Services", icon: Briefcase, className: "-right-4 -bottom-4", floatDelay: "2s" },
];

interface SolutionsHeroProps {
  onStartTrialClick: () => void;
}

export function SolutionsHero({ onStartTrialClick }: SolutionsHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-[1600px] px-4 pb-10 pt-14 sm:px-6 lg:px-14">
        <div className="grid grid-cols-1 items-start gap-10 xl:grid-cols-[0.49fr_1fr] xl:gap-8">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center rounded-full border border-[#FEE2E2] bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-brand-red"
            >
              Solutions
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="mt-5 text-[46px] font-bold leading-[1.08] tracking-tight text-neutral-900 lg:text-[56px]"
            >
              One platform.
              <br />
              <span className="text-brand-red">Every</span> service business.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.16 }}
              className="mt-6 max-w-[440px] text-[16px] leading-relaxed text-neutral-600"
            >
              AIGENTIC Flows is a configurable business operating platform built for
              service-based organizations. Insurance was our first
              implementation — the platform itself adapts to how your
              business actually operates.
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
              <AimpButton variant="secondary">Book a Demo</AimpButton>
            </motion.div>
          </div>

          <div className="relative">
            {INDUSTRY_CHIPS.map((chip, index) => (
              <motion.div
                key={chip.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: 0.4 + index * 0.08 }}
                className={`absolute z-20 ${chip.className}`}
              >
                <div
                  style={{ animationDelay: chip.floatDelay }}
                  className="animate-idle-float flex items-center gap-1.5 rounded-lg border border-neutral-100 bg-white px-2.5 py-1.5 text-[10.5px] font-semibold text-neutral-700 shadow-[0_10px_24px_rgba(17,17,17,0.08)]"
                >
                  <chip.icon size={12} className="text-brand-red" />
                  {chip.label}
                </div>
              </motion.div>
            ))}
            <TabletScale>
              <DashboardPreview />
            </TabletScale>
          </div>
        </div>
      </div>
    </section>
  );
}
