import type { Metadata } from "next";
import { OG_IMAGE, SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/seo/site";

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
}

export function buildPageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}

export const PAGE_METADATA = {
  home: {
    title: "AIGENTIC Flows — AI Business Operating Platform",
    description:
      "AIGENTIC Flows combines CRM, AI, automation, analytics, and communication into one intelligent platform for service-based organizations.",
    path: "/",
  },
  solutions: {
    title: "Solutions — One Platform for Every Service Business",
    description:
      "AIGENTIC Flows is a configurable business operating platform built for service-based organizations, from insurance agencies to professional services firms.",
    path: "/solutions",
  },
  features: {
    title: "Features — Everything Your Business Needs",
    description:
      "CRM, workflow automation, analytics, recruitment, marketing, and communication — unified in one connected platform.",
    path: "/features",
  },
  pricing: {
    title: "Pricing — Simple Plans That Scale With You",
    description:
      "Choose the AIGENTIC Flows plan that fits your business today and scale as your organization grows. Start with a free 14-day trial.",
    path: "/pricing",
  },
  about: {
    title: "About AIGENTIC Flows — Building the Future Operating System",
    description:
      "AIGENTIC Flows was created to replace fragmented business software with one intelligent operating platform for modern service-based businesses.",
    path: "/about",
  },
  resources: {
    title: "Resources — Guides, Docs, and Best Practices",
    description:
      "Browse guides, documentation, case studies, videos, templates, and best practices to help your business succeed with AIGENTIC Flows.",
    path: "/resources",
  },
  contact: {
    title: "Contact Sales — Let's Build Your Business Operating Platform",
    description:
      "Talk to our team, book a demo, or start your free trial. We're here to help you modernize your business with AIGENTIC Flows.",
    path: "/contact",
  },
  privacy: {
    title: "Privacy Policy — AIGENTIC Flows",
    description:
      "How AIGENTIC Flows collects, uses, and protects information across our website and business operating platform.",
    path: "/privacy",
  },
  terms: {
    title: "Terms of Service — AIGENTIC Flows",
    description:
      "The terms governing your access to and use of the AIGENTIC Flows website and business operating platform.",
    path: "/terms",
  },
} as const satisfies Record<string, PageMetadataInput>;

export { SITE_URL };
