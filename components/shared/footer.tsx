"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Facebook, Linkedin, Youtube } from "lucide-react";

const PRODUCT_LINKS = [
  { label: "Features", href: "/features" },
  { label: "Solutions", href: "/solutions" },
  { label: "Pricing", href: "/pricing" },
];

const RESOURCE_LINKS = [
  { label: "Documentation", href: "/resources" },
  { label: "Guides", href: "/resources" },
  { label: "Blog", href: "/resources" },
  { label: "Case Studies", href: "/resources" },
];

const COMPANY_LINKS = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "#" },
];

const SOCIAL_LINKS = [
  { label: "LinkedIn", icon: Linkedin, href: "#" },
  { label: "Facebook", icon: Facebook, href: "#" },
  { label: "YouTube", icon: Youtube, href: "#" },
];

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">{title}</span>
      <div className="mt-4 flex flex-col gap-2.5">{children}</div>
    </div>
  );
}

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (event: FormEvent) => {
    event.preventDefault();
    if (email.trim().length > 0) setSubscribed(true);
  };

  return (
    <footer className="border-t border-neutral-100 bg-white">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 py-16 lg:px-14">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-md bg-brand-red" />
              <span className="text-[15px] font-bold tracking-tight text-neutral-900">AIGENTIC Flows</span>
            </div>
            <p className="mt-3 max-w-[240px] text-[12.5px] leading-relaxed text-neutral-500">
              The business operating platform for service-based organizations.
            </p>

            <form onSubmit={handleSubscribe} className="mt-6 max-w-[260px]">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
                Newsletter
              </span>
              {subscribed ? (
                <p className="mt-2.5 text-[12.5px] font-medium text-brand-red">
                  You&apos;re subscribed. Thanks!
                </p>
              ) : (
                <div className="mt-2.5 flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-white p-1 focus-within:border-brand-red">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@company.com"
                    className="w-full bg-transparent px-2.5 py-1.5 text-[12.5px] text-neutral-900 outline-none placeholder:text-neutral-400"
                  />
                  <button
                    type="submit"
                    className="flex-shrink-0 rounded-md bg-neutral-900 px-3 py-1.5 text-[11.5px] font-semibold text-white transition-colors hover:bg-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/40"
                  >
                    Subscribe
                  </button>
                </div>
              )}
            </form>
          </div>

          <FooterColumn title="Product">
            {PRODUCT_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[13px] text-neutral-600 transition-colors hover:text-brand-red"
              >
                {link.label}
              </Link>
            ))}
          </FooterColumn>

          <FooterColumn title="Resources">
            {RESOURCE_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[13px] text-neutral-600 transition-colors hover:text-brand-red"
              >
                {link.label}
              </Link>
            ))}
          </FooterColumn>

          <FooterColumn title="Company">
            {COMPANY_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[13px] text-neutral-600 transition-colors hover:text-brand-red"
              >
                {link.label}
              </Link>
            ))}
            <span className="flex items-center gap-1.5 text-[13px] text-neutral-400">
              Careers
              <span className="rounded-full bg-neutral-100 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-neutral-400">
                Soon
              </span>
            </span>
          </FooterColumn>

          <FooterColumn title="Legal">
            {LEGAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] text-neutral-600 transition-colors hover:text-brand-red"
              >
                {link.label}
              </a>
            ))}
          </FooterColumn>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-neutral-100 pt-8 sm:flex-row">
          <span className="text-[12px] text-neutral-400">© 2026 AIGENTIC Flows. All rights reserved.</span>
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-100 text-neutral-400 transition-colors hover:border-neutral-200 hover:text-brand-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/40"
              >
                <social.icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
