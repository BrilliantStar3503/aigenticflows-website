"use client";

import { useState } from "react";
import { FAQItem } from "@/components/pricing/faq-item";
import { CONTACT_FAQ_ITEMS } from "@/lib/data/contact-faq";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-[1600px] px-4 sm:px-6 py-20 lg:px-14">
      <div className="mx-auto max-w-[560px] text-center">
        <h2 className="text-[32px] font-bold tracking-tight text-neutral-900">
          Frequently asked questions
        </h2>
      </div>

      <div className="mx-auto mt-12 max-w-[680px] rounded-2xl border border-neutral-100 bg-white px-6 shadow-[0_4px_24px_rgba(17,17,17,0.03)]">
        {CONTACT_FAQ_ITEMS.map((item, index) => (
          <FAQItem
            key={item.question}
            id={`contact-faq-${index}`}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </section>
  );
}
