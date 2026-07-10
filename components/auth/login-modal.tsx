"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Modal } from "@/components/ui/modal";
import { LoginForm } from "@/components/auth/login-form";
import { SocialButtons } from "@/components/auth/social-buttons";
import { ForgotPasswordModal } from "@/components/auth/forgot-password-modal";
import { ForgotPasswordSuccess } from "@/components/auth/forgot-password-success";

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

type AuthView = "login" | "forgot" | "success";

const viewVariants = {
  initial: { opacity: 0, scale: 0.98 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.98 },
};

function LoginView({
  onForgotPasswordClick,
  onSuccess,
}: {
  onForgotPasswordClick: () => void;
  onSuccess: () => void;
}) {
  return (
    <div>
      <div className="flex items-center gap-2.5">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-red">
          <div className="h-2.5 w-2.5 rounded-[2px] bg-white" />
        </div>
        <div>
          <h2 id="login-modal-title" className="text-lg font-bold text-neutral-900">
            Welcome back
          </h2>
          <p className="text-[12.5px] text-neutral-500">Sign in to your AIMP workspace.</p>
        </div>
      </div>

      <div className="mt-6">
        <LoginForm onForgotPasswordClick={onForgotPasswordClick} onSuccess={onSuccess} />
      </div>

      <div className="my-5 flex items-center gap-3">
        <div className="h-px flex-1 bg-neutral-100" />
        <span className="text-[10.5px] font-semibold uppercase tracking-wider text-neutral-400">Or</span>
        <div className="h-px flex-1 bg-neutral-100" />
      </div>

      <SocialButtons />

      <p className="mt-6 text-center text-[12.5px] text-neutral-500">
        Don&apos;t have an account?{" "}
        <a href="#" className="font-semibold text-brand-red hover:underline">
          Start free trial
        </a>
      </p>
    </div>
  );
}

export function LoginModal({ open, onClose }: LoginModalProps) {
  const [view, setView] = useState<AuthView>("login");
  const [resetEmail, setResetEmail] = useState("");

  useEffect(() => {
    if (!open) {
      const timer = setTimeout(() => {
        setView("login");
        setResetEmail("");
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [open]);

  return (
    <Modal open={open} onClose={onClose} labelledBy="login-modal-title">
      <button
        type="button"
        onClick={onClose}
        aria-label="Close login dialog"
        className="absolute right-5 top-5 rounded-lg p-1.5 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600"
      >
        <X size={16} />
      </button>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={view}
          variants={viewVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.18, ease: "easeOut" }}
        >
          {view === "login" && (
            <LoginView onForgotPasswordClick={() => setView("forgot")} onSuccess={onClose} />
          )}
          {view === "forgot" && (
            <ForgotPasswordModal
              onBack={() => setView("login")}
              onSubmitted={(email) => {
                setResetEmail(email);
                setView("success");
              }}
            />
          )}
          {view === "success" && (
            <ForgotPasswordSuccess email={resetEmail} onBackToSignIn={() => setView("login")} />
          )}
        </motion.div>
      </AnimatePresence>
    </Modal>
  );
}
