"use client";

import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export function FAQItem({ id, question, answer, isOpen, onToggle }: FAQItemProps) {
  const panelId = `${id}-panel`;

  return (
    <div className="border-b border-neutral-100 last:border-b-0">
      <button
        type="button"
        id={id}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="-mx-2 flex w-[calc(100%+16px)] items-center justify-between gap-4 rounded-lg px-2 py-5 text-left transition-colors duration-150 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/40"
      >
        <span className="text-[14.5px] font-semibold text-neutral-900">{question}</span>
        <ChevronDown
          size={16}
          className={`flex-shrink-0 text-neutral-400 transition-transform duration-300 ease-out ${isOpen ? "rotate-180 text-brand-red" : ""}`}
        />
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={id}
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden px-2">
          <p className="text-[13.5px] leading-relaxed text-neutral-600">{answer}</p>
        </div>
      </div>
    </div>
  );
}
