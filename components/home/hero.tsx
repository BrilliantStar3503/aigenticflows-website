"use client";

import { useState } from "react";
import { useAuthRedirectPrompt } from "@/lib/auth/hooks/use-auth-redirect-prompt";
import { motion } from "framer-motion";
import { Play, Sparkles } from "lucide-react";
import { AimpButton } from "@/components/ui/button";
import { HeroNav } from "@/components/home/hero-nav";
import { DashboardPreview } from "@/components/home/dashboard-preview";
import { TrustedLogos } from "@/components/home/trusted-logos";
import { TabletScale } from "@/components/shared/tablet-scale";
import dynamic from "next/dynamic";

const LoginModal = dynamic(() => import("@/components/auth/login-modal").then((mod) => mod.LoginModal), { ssr: false });
const TrialModal = dynamic(() => import("@/components/onboarding/trial-modal").then((mod) => mod.TrialModal), { ssr: false });

const textVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: "easeOut" as const },
  }),
};

export function Hero() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  useAuthRedirectPrompt(() => setIsLoginOpen(true));
  const [isTrialOpen, setIsTrialOpen] = useState(false);

  return (
    <section className="relative bg-white">
      <HeroNav onLoginClick={() => setIsLoginOpen(true)} onStartTrialClick={() => setIsTrialOpen(true)} />
      <LoginModal open={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <TrialModal open={isTrialOpen} onClose={() => setIsTrialOpen(false)} />

      <div className="mx-auto max-w-[1600px] px-4 pb-8 pt-9 sm:px-6 lg:px-14">
        <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-[0.5fr_1fr] xl:gap-8">
          <div>
            <motion.span
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={0.05}
              className="inline-flex items-center gap-1.5 rounded-full border border-[#FEE2E2] bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-brand-red"
            >
              <Sparkles size={11} />
              AI business operating platform
            </motion.span>

            <motion.h1
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={0.15}
              className="mt-5 text-[52px] font-bold leading-[1.05] tracking-tight text-neutral-900 lg:text-[64px]"
            >
              Run your business.
              <br />
              <span className="text-brand-red">Smarter.</span>
              <br />
              <span className="text-brand-gold">Faster.</span>
            </motion.h1>

            <motion.p
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={0.28}
              className="mt-6 max-w-[420px] text-[17px] leading-relaxed text-neutral-500"
            >
              AIMP is the AI-powered operating platform that automates
              operations, engages clients, and drives growth — all from one
              intelligent workspace.
            </motion.p>

            <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={0.4}
              className="mt-8 flex gap-3"
            >
              <AimpButton variant="primary" onClick={() => setIsTrialOpen(true)}>
                Start Free Trial
              </AimpButton>
              <AimpButton variant="secondary">
                <Play size={14} className="text-brand-red" />
                See AIMP in Action
              </AimpButton>
            </motion.div>

            <motion.div variants={textVariants} initial="hidden" animate="visible" custom={0.5}>
              <TrustedLogos />
            </motion.div>
          </div>

          <TabletScale>
            <DashboardPreview />
          </TabletScale>
        </div>
      </div>
    </section>
  );
}
