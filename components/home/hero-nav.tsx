"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu } from "lucide-react";
import { MobileMenu } from "@/components/home/mobile-menu";

const NAV_LINKS = [
  { label: "Solutions", href: "/solutions", dropdown: true },
  { label: "Features", href: "/features", dropdown: false },
  { label: "Pricing", href: "/pricing", dropdown: false },
  { label: "Resources", href: "/resources", dropdown: true },
  { label: "About", href: "/about", dropdown: false },
];

interface HeroNavProps {
  onLoginClick: () => void;
  onStartTrialClick: () => void;
}

export function HeroNav({ onLoginClick, onStartTrialClick }: HeroNavProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="sticky top-0 z-30 flex h-[62px] items-center justify-between gap-3 bg-brand-navred px-4 md:px-6 lg:px-14"
      >
        <Link href="/" className="flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-white/15">
            <div className="h-3 w-3 rounded-[3px] bg-white" />
          </div>
          <span className="text-base font-bold tracking-tight text-white">AIGENTIC Flows</span>
        </Link>

        <nav className="hidden items-center gap-3.5 md:flex lg:gap-9">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.label}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`flex flex-shrink-0 items-center gap-1 whitespace-nowrap border-b-2 py-1 text-[13px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 lg:text-sm ${
                  isActive
                    ? "border-white text-white"
                    : "border-transparent text-white/90 hover:text-white"
                }`}
              >
                {link.label}
                {link.dropdown && <ChevronDown size={14} className="text-white/60" />}
              </Link>
            );
          })}
        </nav>

        <div className="hidden flex-shrink-0 items-center gap-2.5 md:flex md:gap-3 lg:gap-5">
          <button
            type="button"
            onClick={onLoginClick}
            className="whitespace-nowrap rounded-md text-[13px] font-medium text-white/90 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 lg:text-sm"
          >
            Login
          </button>
          <button
            type="button"
            onClick={onStartTrialClick}
            className="flex items-center gap-1.5 whitespace-nowrap rounded-lg bg-brand-gold px-3 py-2.5 text-[13px] font-semibold text-neutral-900 transition-colors hover:bg-brand-gold-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navred lg:px-4 lg:text-sm"
          >
            Start Free Trial
            <ArrowRight size={14} />
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={isMobileMenuOpen}
          className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 md:hidden"
        >
          <Menu size={22} />
        </button>
      </motion.header>

      <MobileMenu
        open={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onLoginClick={onLoginClick}
        onStartTrialClick={onStartTrialClick}
      />
    </>
  );
}
