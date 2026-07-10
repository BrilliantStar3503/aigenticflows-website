"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import type { TrialWorkspaceData } from "@/components/onboarding/types";
import { IndustrySelect } from "@/components/onboarding/industry-select";
import { INDUSTRY_OPTIONS } from "@/lib/config/industries";

const COUNTRIES = ["Philippines", "United States", "Singapore", "United Kingdom", "Australia", "Other"];

interface TrialStepWorkspaceProps {
  initialData: TrialWorkspaceData;
  onBack: () => void;
  onContinue: (data: TrialWorkspaceData) => void;
}

const selectClassName =
  "h-11 appearance-none rounded-xl border border-neutral-200 bg-white px-3.5 text-sm text-neutral-900 outline-none transition-colors focus:border-brand-red focus:ring-2 focus:ring-brand-red/15";

export function TrialStepWorkspace({ initialData, onBack, onContinue }: TrialStepWorkspaceProps) {
  const [workspaceName, setWorkspaceName] = useState(initialData.workspaceName);
  const [companyName, setCompanyName] = useState(initialData.companyName);
  const [country, setCountry] = useState(initialData.country || COUNTRIES[0]);
  const [industry, setIndustry] = useState(initialData.industry || INDUSTRY_OPTIONS[0].id);
  const [touched, setTouched] = useState(false);

  const isValid = workspaceName.trim().length > 0 && companyName.trim().length > 0;

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
        Workspace information
      </h2>
      <p className="mt-1 text-[12.5px] text-neutral-500">Tell us a bit about your business.</p>

      <form
        className="mt-6 flex flex-col gap-4"
        onSubmit={(event) => {
          event.preventDefault();
          setTouched(true);
          if (isValid) onContinue({ workspaceName, companyName, country, industry });
        }}
      >
        <div className="flex flex-col gap-1.5">
          <label htmlFor="trial-workspace-name" className="text-[12.5px] font-medium text-neutral-700">
            Workspace name
          </label>
          <input
            id="trial-workspace-name"
            autoFocus
            placeholder="e.g. Meridian Agency"
            value={workspaceName}
            onChange={(event) => setWorkspaceName(event.target.value)}
            className="h-11 rounded-xl border border-neutral-200 bg-white px-3.5 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-brand-red focus:ring-2 focus:ring-brand-red/15"
          />
          {touched && workspaceName.trim().length === 0 && (
            <span className="text-[11px] font-medium text-red-500">Required</span>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="trial-company-name" className="text-[12.5px] font-medium text-neutral-700">
            Company name
          </label>
          <input
            id="trial-company-name"
            value={companyName}
            onChange={(event) => setCompanyName(event.target.value)}
            className="h-11 rounded-xl border border-neutral-200 bg-white px-3.5 text-sm text-neutral-900 outline-none transition-colors focus:border-brand-red focus:ring-2 focus:ring-brand-red/15"
          />
          {touched && companyName.trim().length === 0 && (
            <span className="text-[11px] font-medium text-red-500">Required</span>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="trial-country" className="text-[12.5px] font-medium text-neutral-700">
            Country
          </label>
          <select
            id="trial-country"
            value={country}
            onChange={(event) => setCountry(event.target.value)}
            className={selectClassName}
          >
            {COUNTRIES.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="trial-industry" className="text-[12.5px] font-medium text-neutral-700">
            Industry
          </label>
          <p className="text-[12px] leading-snug text-neutral-500">
            <span className="font-semibold text-neutral-700">Select the industry that best matches your business.</span>{" "}
            Your selection personalizes your AIMP workspace and will be used for future industry-specific templates, automations, and recommendations.
          </p>
          <IndustrySelect id="trial-industry" value={industry} onChange={setIndustry} />
        </div>

        <button
          type="submit"
          className="mt-1 h-11 w-full rounded-xl bg-brand-gold text-sm font-semibold text-neutral-900 shadow-[0_8px_20px_rgba(245,194,72,0.35)] transition-all hover:bg-brand-gold-hover hover:-translate-y-0.5"
        >
          Continue
        </button>
      </form>
    </div>
  );
}
