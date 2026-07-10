"use client";

import { useState } from "react";
import { ArrowLeft, Box, Briefcase, Building2, LineChart, Loader2, Shield } from "lucide-react";
import { WorkspaceCard } from "@/components/onboarding/workspace-card";
import type { TrialTemplate } from "@/components/onboarding/types";

export const BLANK_TEMPLATE_ID = "blank";

const TEMPLATES = [
  {
    id: "insurance",
    title: "Insurance Agency",
    description: "CRM + Recruitment + AI",
    icon: Shield,
    recommended: true,
  },
  {
    id: "financial-advisory",
    title: "Financial Advisory",
    description: "Lead Management + Client Reviews",
    icon: LineChart,
  },
  {
    id: "real-estate",
    title: "Real Estate",
    description: "Listings + CRM",
    icon: Building2,
  },
  {
    id: "professional-services",
    title: "Professional Services",
    description: "Business Operations",
    icon: Briefcase,
  },
  {
    id: BLANK_TEMPLATE_ID,
    title: "Blank Workspace",
    description: "Start with a clean workspace. Enable only the modules you need.",
    icon: Box,
  },
];

interface TrialStepTemplateProps {
  initialSelected: string;
  onBack: () => void;
  onContinue: (template: TrialTemplate) => Promise<void>;
}

export function TrialStepTemplate({ initialSelected, onBack, onContinue }: TrialStepTemplateProps) {
  const [selectedId, setSelectedId] = useState(initialSelected);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const selected = TEMPLATES.find((template) => template.id === selectedId);

  return (
    <div>
      <button
        type="button"
        onClick={onBack}
        aria-label="Back"
        className="mb-4 flex h-8 w-8 items-center justify-center rounded-lg text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-700"
      >
        <ArrowLeft size={16} />
      </button>

      <h2 id="trial-modal-title" className="text-lg font-bold text-neutral-900">
        Choose your starting template
      </h2>
      <p className="mt-1 text-[12.5px] text-neutral-500">
        We&apos;ll pre-configure your workspace. You can change this anytime.
      </p>

      <div className="mt-6 grid grid-cols-2 gap-3">
        {TEMPLATES.map((template) => (
          <WorkspaceCard
            key={template.id}
            icon={template.icon}
            title={template.title}
            description={template.description}
            selected={selectedId === template.id}
            recommended={template.recommended}
            onClick={() => setSelectedId(template.id)}
          />
        ))}
      </div>

      {error && (
        <span role="alert" className="mt-4 block text-[11px] font-medium text-red-500">
          {error}
        </span>
      )}

      <button
        type="button"
        disabled={!selected || isSubmitting}
        onClick={async () => {
          if (!selected) return;
          setError(undefined);
          setIsSubmitting(true);
          try {
            await onContinue({ id: selected.id, title: selected.title, description: selected.description });
          } catch (err) {
            setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
          } finally {
            setIsSubmitting(false);
          }
        }}
        className="mt-6 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-brand-gold text-sm font-semibold text-neutral-900 shadow-[0_8px_20px_rgba(245,194,72,0.35)] transition-all enabled:hover:bg-brand-gold-hover enabled:hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none"
      >
        {isSubmitting && <Loader2 size={15} className="animate-spin" />}
        {isSubmitting ? "Saving…" : "Continue"}
      </button>
    </div>
  );
}
