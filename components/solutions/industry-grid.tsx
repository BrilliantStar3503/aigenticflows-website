import {
  Briefcase,
  Building2,
  Calculator,
  GraduationCap,
  HeartPulse,
  LineChart,
  Shield,
  Users,
} from "lucide-react";
import { IndustryCard, type Industry } from "@/components/solutions/industry-card";

const INDUSTRIES: Industry[] = [
  {
    icon: Shield,
    name: "Insurance Agencies",
    description: "Recruit advisors, manage policies, and track commissions in one place.",
    primaryWorkflow: "Lead → Advisor → Policy → Renewal",
    exampleKpi: "Policies renewed on time",
    exampleAi: "Flags policies at risk of lapsing",
    modules: ["CRM", "Recruitment", "Analytics", "AI Assistant"],
  },
  {
    icon: LineChart,
    name: "Financial Advisory Firms",
    description: "Manage client portfolios, reviews, and compliance touchpoints.",
    primaryWorkflow: "Prospect → Onboard → Review → Retain",
    exampleKpi: "Client review completion rate",
    exampleAi: "Drafts portfolio review summaries",
    modules: ["CRM", "Calendar", "Reports", "AI Assistant"],
  },
  {
    icon: Building2,
    name: "Real Estate Brokerages",
    description: "Track listings, buyer leads, and closings from one pipeline.",
    primaryWorkflow: "Listing → Lead → Showing → Close",
    exampleKpi: "Average days on market",
    exampleAi: "Matches leads to new listings automatically",
    modules: ["CRM", "Automation", "Messaging", "Analytics"],
  },
  {
    icon: HeartPulse,
    name: "Healthcare Clinics",
    description: "Coordinate patient intake, scheduling, and follow-up care.",
    primaryWorkflow: "Intake → Schedule → Visit → Follow-up",
    exampleKpi: "No-show rate",
    exampleAi: "Sends automated appointment reminders",
    modules: ["Calendar", "Messaging", "Tasks", "Automation"],
  },
  {
    icon: Calculator,
    name: "Accounting Firms",
    description: "Manage client engagements, deadlines, and document requests.",
    primaryWorkflow: "Engagement → Collect → File → Close",
    exampleKpi: "On-time filing rate",
    exampleAi: "Chases missing client documents automatically",
    modules: ["Tasks", "Automation", "Reports", "Messaging"],
  },
  {
    icon: Briefcase,
    name: "Consulting Firms",
    description: "Run engagements, track deliverables, and manage utilization.",
    primaryWorkflow: "Proposal → Engagement → Delivery → Renewal",
    exampleKpi: "Team utilization rate",
    exampleAi: "Surfaces at-risk project timelines",
    modules: ["CRM", "Tasks", "Analytics", "Reports"],
  },
  {
    icon: GraduationCap,
    name: "Training Organizations",
    description: "Manage enrollments, cohorts, and certification tracking.",
    primaryWorkflow: "Inquiry → Enroll → Deliver → Certify",
    exampleKpi: "Course completion rate",
    exampleAi: "Nudges learners who fall behind",
    modules: ["CRM", "Automation", "Calendar", "Analytics"],
  },
  {
    icon: Users,
    name: "Professional Services",
    description: "Run client work, billing, and operations from one system.",
    primaryWorkflow: "Inquiry → Proposal → Delivery → Invoice",
    exampleKpi: "Billable utilization",
    exampleAi: "Drafts client status updates automatically",
    modules: ["CRM", "Tasks", "Reports", "AI Assistant"],
  },
];

export function IndustryGrid() {
  return (
    <section className="mx-auto max-w-[1600px] px-4 sm:px-6 py-20 lg:px-14">
      <div className="mx-auto max-w-[560px] text-center">
        <h2 className="text-[32px] font-bold tracking-tight text-neutral-900">
          Built for how your business actually works
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-neutral-600">
          Every industry gets the same core platform, configured around its own workflows.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {INDUSTRIES.map((industry) => (
          <IndustryCard key={industry.name} {...industry} />
        ))}
      </div>
    </section>
  );
}
