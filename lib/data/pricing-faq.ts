import { REQUEST_ACCESS_EMAIL } from "@/lib/request-access";

export const PRICING_FAQ_ITEMS = [
  {
    question: "Can I change plans later?",
    answer:
      "Yes. As your business grows, your account team will move you to a new plan without disrupting your workspace.",
  },
  {
    question: "How do I get started?",
    answer:
      `Workspaces are set up by our team. Email ${REQUEST_ACCESS_EMAIL} to request access and we'll help you choose the right plan.`,
  },
  {
    question: "Do you charge per user?",
    answer: "Pricing is based on your organization's size and needs. Talk to our team for a tailored recommendation.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes. There are no long-term contracts required — reach out to your account team to cancel whenever you need to.",
  },
  {
    question: "Can I migrate my existing CRM?",
    answer: "Yes. Our onboarding team helps you migrate contacts, clients, and historical data from your existing tools.",
  },
  {
    question: "Do you support multiple branches?",
    answer: "Yes. AIGENTIC Flows is built for multi-level organizations, with role-based access across branches and teams.",
  },
  {
    question: "How secure is AIGENTIC Flows?",
    answer: "AIGENTIC Flows uses role-based access control and enterprise-grade infrastructure to keep your business data secure.",
  },
  {
    question: "Do you offer onboarding?",
    answer: "Yes. Every plan includes guided onboarding, and Enterprise plans include a dedicated onboarding specialist.",
  },
  {
    question: "Can I request a trial or evaluation?",
    answer: `Self-service trials are not currently available. You may request access at ${REQUEST_ACCESS_EMAIL}. Any trial or evaluation offered is subject to individually agreed terms.`,
  },
];
