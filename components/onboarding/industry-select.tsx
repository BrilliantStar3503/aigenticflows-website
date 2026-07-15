"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { INDUSTRY_OPTIONS } from "@/lib/config/industries";

interface IndustrySelectProps {
  id: string;
  value: string;
  onChange: (value: string) => void;
}

export function IndustrySelect({ id, value, onChange }: IndustrySelectProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const selected = INDUSTRY_OPTIONS.find((option) => option.id === value);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        id={id}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex h-11 w-full items-center justify-between rounded-xl border border-neutral-200 bg-white px-3.5 text-left text-sm text-neutral-900 outline-none transition-colors focus:border-brand-red focus:ring-2 focus:ring-brand-red/15"
      >
        <span className="flex items-center gap-1.5 truncate">
          {selected ? (
            <>
              <span aria-hidden="true">{selected.emoji}</span>
              <span className="truncate">{selected.label}</span>
            </>
          ) : (
            <span className="text-neutral-400">Select an industry</span>
          )}
        </span>
        <ChevronDown size={15} className={`shrink-0 text-neutral-400 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute z-20 mt-1.5 max-h-72 w-full overflow-y-auto rounded-xl border border-neutral-200 bg-white p-1.5 shadow-[0_12px_32px_rgba(17,17,17,0.12)]"
        >
          {INDUSTRY_OPTIONS.map((option) => {
            const isSelected = option.id === value;
            return (
              <li key={option.id}>
                <button
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => {
                    onChange(option.id);
                    setOpen(false);
                  }}
                  className={`flex w-full flex-col gap-0.5 rounded-lg px-3 py-2 text-left transition-colors ${
                    isSelected ? "bg-brand-pink" : "hover:bg-neutral-50"
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <span aria-hidden="true">{option.emoji}</span>
                    <span className="text-[13px] font-semibold text-neutral-900">{option.label}</span>
                  </span>
                  <span className="text-[11.5px] leading-snug text-neutral-500">{option.subcategories}</span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
