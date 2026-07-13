"use client";

import { useState, type ReactNode } from "react";
import dynamic from "next/dynamic";
import { HeroNav } from "@/components/home/hero-nav";
import { Footer } from "@/components/shared/footer";

const LoginModal = dynamic(() => import("@/components/auth/login-modal").then((mod) => mod.LoginModal), { ssr: false });
const TrialModal = dynamic(() => import("@/components/onboarding/trial-modal").then((mod) => mod.TrialModal), { ssr: false });

/**
 * Shared shell for legal pages (Privacy Policy, Terms of Service, and any
 * future Cookie Policy / DPA) — same nav/modal/footer wiring every other
 * marketing page uses, with a plain-prose content column instead of a
 * marketing layout.
 */
export function LegalShell({
  title,
  effectiveDate,
  children,
}: {
  title: string;
  effectiveDate: string;
  children: ReactNode;
}) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isTrialOpen, setIsTrialOpen] = useState(false);

  return (
    <main className="bg-white">
      <HeroNav onLoginClick={() => setIsLoginOpen(true)} onStartTrialClick={() => setIsTrialOpen(true)} />
      <LoginModal open={isLoginOpen} onClose={() => setIsLoginOpen(false)} onStartTrialClick={() => { setIsLoginOpen(false); setIsTrialOpen(true); }} />
      <TrialModal open={isTrialOpen} onClose={() => setIsTrialOpen(false)} />

      <article className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900">{title}</h1>
        <p className="mt-2 text-sm text-neutral-500">Effective date: {effectiveDate}</p>

        <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-neutral-700 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-neutral-900 [&_h2]:first:mt-0 [&_h3]:mt-6 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-neutral-900 [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5 [&_li]:leading-relaxed [&_strong]:text-neutral-900 [&_a]:text-brand-red [&_a]:underline [&_a:hover]:no-underline">
          {children}
        </div>
      </article>

      <Footer />
    </main>
  );
}
