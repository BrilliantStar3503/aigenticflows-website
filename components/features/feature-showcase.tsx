"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface FeatureShowcaseProps {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  visual: ReactNode;
  reverse?: boolean;
  tinted?: boolean;
}

export function FeatureShowcase({ eyebrow, title, description, bullets, visual, reverse, tinted }: FeatureShowcaseProps) {
  return (
    <section className={tinted ? "bg-neutral-50" : "bg-white"}>
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 py-20 lg:px-14">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className={reverse ? "lg:order-2" : ""}
          >
            {visual}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className={reverse ? "lg:order-1" : ""}
          >
            <span className="text-[10.5px] font-bold uppercase tracking-wider text-brand-red">
              {eyebrow}
            </span>
            <h2 className="mt-3 text-[30px] font-bold leading-[1.15] tracking-tight text-neutral-900">
              {title}
            </h2>
            <p className="mt-3.5 text-[15px] leading-relaxed text-neutral-600">{description}</p>

            <ul className="mt-6 space-y-3">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-2.5 text-[13.5px] text-neutral-700">
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-pink">
                    <Check size={11} className="text-brand-red" strokeWidth={3} />
                  </span>
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
