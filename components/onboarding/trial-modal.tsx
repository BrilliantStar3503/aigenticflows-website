"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Modal } from "@/components/ui/modal";
import { TrialStepAccount } from "@/components/onboarding/trial-step-account";
import { TrialStepWorkspace } from "@/components/onboarding/trial-step-workspace";
import { TrialStepTemplate } from "@/components/onboarding/trial-step-template";
import { TrialStepCheckEmail } from "@/components/onboarding/trial-step-check-email";
import { savePendingRegistration } from "@/lib/provisioning/pendingRegistration";
import type { TrialAccountData, TrialTemplate, TrialWorkspaceData } from "@/components/onboarding/types";

interface TrialModalProps {
  open: boolean;
  onClose: () => void;
}

const STEP_ORDER = ["account", "workspace", "template", "check-email"] as const;
type TrialStep = (typeof STEP_ORDER)[number];

const EMPTY_ACCOUNT: TrialAccountData = { firstName: "", lastName: "", email: "", password: "" };
const EMPTY_WORKSPACE: TrialWorkspaceData = { workspaceName: "", companyName: "", country: "", industry: "" };

const slideVariants = {
  enter: (direction: number) => ({ opacity: 0, x: direction > 0 ? 24 : -24 }),
  center: { opacity: 1, x: 0 },
  exit: (direction: number) => ({ opacity: 0, x: direction > 0 ? -24 : 24 }),
};

export function TrialModal({ open, onClose }: TrialModalProps) {
  const [step, setStep] = useState<TrialStep>("account");
  const [direction, setDirection] = useState(1);
  const [account, setAccount] = useState<TrialAccountData>(EMPTY_ACCOUNT);
  const [userId, setUserId] = useState("");
  const [workspace, setWorkspace] = useState<TrialWorkspaceData>(EMPTY_WORKSPACE);
  const [template, setTemplate] = useState<TrialTemplate | null>(null);

  useEffect(() => {
    if (!open) {
      const timer = setTimeout(() => {
        setStep("account");
        setAccount(EMPTY_ACCOUNT);
        setUserId("");
        setWorkspace(EMPTY_WORKSPACE);
        setTemplate(null);
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [open]);

  const goTo = (next: TrialStep) => {
    const nextIndex = STEP_ORDER.indexOf(next);
    const currentIndex = STEP_ORDER.indexOf(step);
    setDirection(nextIndex > currentIndex ? 1 : -1);
    setStep(next);
  };

  return (
    <Modal open={open} onClose={onClose} labelledBy="trial-modal-title" maxWidthClassName="max-w-[520px]">
      <button
        type="button"
        onClick={onClose}
        aria-label="Close onboarding dialog"
        className="absolute right-5 top-5 rounded-lg p-1.5 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600"
      >
        <X size={16} />
      </button>

      <AnimatePresence mode="wait" custom={direction} initial={false}>
        <motion.div
          key={step}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.22, ease: "easeOut" }}
        >
          {step === "account" && (
            <TrialStepAccount
              initialData={account}
              onContinue={(data, newUserId) => {
                setAccount(data);
                setUserId(newUserId);
                goTo("workspace");
              }}
            />
          )}

          {step === "workspace" && (
            <TrialStepWorkspace
              initialData={workspace}
              onBack={() => goTo("account")}
              onContinue={(data) => {
                setWorkspace(data);
                goTo("template");
              }}
            />
          )}

          {step === "template" && (
            <TrialStepTemplate
              initialSelected={template?.id ?? ""}
              onBack={() => goTo("workspace")}
              onContinue={async (selected) => {
                setTemplate(selected);
                const result = await savePendingRegistration(userId, account.email, {
                  companyName: workspace.companyName,
                  workspaceName: workspace.workspaceName,
                  industry: workspace.industry,
                  country: workspace.country,
                  industryTemplate: selected.id,
                });

                if (!result.success) {
                  throw new Error(result.error ?? "Something went wrong. Please try again.");
                }

                goTo("check-email");
              }}
            />
          )}

          {step === "check-email" && <TrialStepCheckEmail email={account.email} onReturnHome={onClose} />}
        </motion.div>
      </AnimatePresence>
    </Modal>
  );
}
