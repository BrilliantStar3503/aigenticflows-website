"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  labelledBy: string;
  maxWidthClassName?: string;
}

const FOCUSABLE_SELECTOR =
  'input, button:not([disabled]), [href], select, textarea, [tabindex]:not([tabindex="-1"])';

export function Modal({ open, onClose, children, labelledBy, maxWidthClassName = "max-w-[460px]" }: ModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key === "Tab" && panelRef.current) {
        const focusable = Array.from(panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR));
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const active = document.activeElement;

        if (event.shiftKey && active === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && active === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    const timer = setTimeout(() => {
      const focusable = panelRef.current?.querySelector<HTMLElement>(FOCUSABLE_SELECTOR);
      focusable?.focus();
    }, 50);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      clearTimeout(timer);
      previouslyFocused.current?.focus();
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="presentation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-900/50 px-4 backdrop-blur-sm"
        >
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={labelledBy}
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`relative w-full ${maxWidthClassName} rounded-[20px] border border-neutral-100 bg-white p-7 shadow-[0_24px_64px_rgba(17,17,17,0.16)]`}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
