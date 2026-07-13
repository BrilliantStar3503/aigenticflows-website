"use client";

import { motion } from "framer-motion";
import { FileText, Hash, Search } from "lucide-react";
import { AimpButton } from "@/components/ui/button";
import { ScreenshotFrame } from "@/components/features/screenshot-frame";
import { TabletScale } from "@/components/shared/tablet-scale";

const DOC_SIDEBAR = ["Getting Started", "Workflows", "Solution Packs", "Recruitment", "API Reference"];

interface ResourcesHeroProps {
  onStartTrialClick: () => void;
}

export function ResourcesHero({ onStartTrialClick }: ResourcesHeroProps) {
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
              Resources
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="mt-5 text-[42px] font-bold leading-[1.12] tracking-tight text-neutral-900 lg:text-[50px]"
            >
              Everything you need to succeed with AIGENTIC Flows.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.16 }}
              className="mt-6 max-w-[440px] text-[16px] leading-relaxed text-neutral-600"
            >
              Browse guides, documentation, case studies, videos, templates,
              and best practices to help your business grow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.24 }}
              className="mt-8 flex gap-3"
            >
              <AimpButton variant="secondary">Browse Documentation</AimpButton>
              <AimpButton variant="primary" onClick={onStartTrialClick}>
                Start Free Trial
              </AimpButton>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            <TabletScale>
              <ScreenshotFrame label="docs.aigenticflows.com/getting-started">
                <div className="flex gap-5">
                  <div className="hidden w-[140px] flex-shrink-0 flex-col gap-1 sm:flex">
                    {DOC_SIDEBAR.map((item, index) => (
                      <span
                        key={item}
                        className={
                          index === 0
                            ? "rounded-lg bg-brand-pink px-2.5 py-1.5 text-[11px] font-semibold text-brand-red"
                            : "px-2.5 py-1.5 text-[11px] text-neutral-500"
                        }
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                      <FileText size={12} />
                      Documentation
                    </div>
                    <h3 className="mt-2 text-[16px] font-bold text-neutral-900">Getting started with AIGENTIC Flows</h3>
                    <div className="mt-3 space-y-2">
                      <div className="h-2 w-full rounded bg-neutral-100" />
                      <div className="h-2 w-[92%] rounded bg-neutral-100" />
                      <div className="h-2 w-[76%] rounded bg-neutral-100" />
                    </div>
                    <div className="mt-4 rounded-lg bg-neutral-900 p-3">
                      <div className="flex items-center gap-1.5 text-[9px] text-white/40">
                        <Hash size={10} />
                        workflow.config
                      </div>
                      <div className="mt-1.5 h-2 w-3/4 rounded bg-white/10" />
                      <div className="mt-1.5 h-2 w-1/2 rounded bg-white/10" />
                    </div>
                  </div>
                </div>
              </ScreenshotFrame>
            </TabletScale>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mx-auto mt-10 flex max-w-[520px] items-center gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-3 shadow-[0_4px_20px_rgba(17,17,17,0.04)]"
        >
          <Search size={16} className="text-neutral-400" />
          <span className="text-[13px] text-neutral-400">
            Search documentation, guides, templates…
          </span>
        </motion.div>
      </div>
    </section>
  );
}
