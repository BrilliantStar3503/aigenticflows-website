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
    description: "Recruit advisors, manage policies, and track production in one place.",
    primaryWorkflow: "Lead → Advisor → Policy → Renewal",
    exampleKpi: "Policies renewed on time",
    status: "Live today",
    modules: ["CRM", "Recruitment", "Policies", "Production"],
  },
  {
    icon: LineChart,
    name: "Financial Advisory Firms",
    description: "Manage client portfolios, reviews, and compliance touchpoints.",
    primaryWorkflow: "Prospect → Onboard → Review → Retain",
    exampleKpi: "Client review completion rate",
    status: "On the roadmap",
    modules: ["CRM", "Calendar", "Reports"],
  },
  {
    icon: Building2,
    name: "Real Estate Brokerages",
    description: "Track listings, buyer leads, and closings from one pipeline.",
    primaryWorkflow: "Listing → Lead → Showing → Close",
    exampleKpi: "Average days on market",
    status: "On the roadmap",
    modules: ["CRM", "Automation", "Analytics"],
  },
  {
    icon: HeartPulse,
    name: "Healthcare Clinics",
    description: "Coordinate patient intake, scheduling, and follow-up care.",
    primaryWorkflow: "Intake → Schedule → Visit → Follow-up",
    exampleKpi: "No-show rate",
    status: "On the roadmap",
    modules: ["Calendar", "Tasks", "Automation"],
  },
  {
    icon: Calculator,
    name: "Accounting Firms",
    description: "Manage client engagements, deadlines, and document requests.",
    primaryWorkflow: "Engagement → Collect → File → Close",
    exampleKpi: "On-time filing rate",
    status: "On the roadmap",
    modules: ["Tasks", "Automation", "Reports"],
  },
  {
    icon: Briefcase,
    name: "Consulting Firms",
    description: "Run engagements, track deliverables, and manage utilization.",
    primaryWorkflow: "Proposal → Engagement → Delivery → Renewal",
    exampleKpi: "Team utilization rate",
    status: "On the roadmap",
    modules: ["CRM", "Tasks", "Analytics"],
  },
  {
    icon: GraduationCap,
    name: "Training Organizations",
    description: "Manage enrollments, cohorts, and certification tracking.",
    primaryWorkflow: "Inquiry → Enroll → Deliver → Certify",
    exampleKpi: "Course completion rate",
    status: "On the roadmap",
    modules: ["CRM", "Automation", "Calendar"],
  },
  {
    icon: Users,
    name: "Professional Services",
    description: "Run client work, billing, and operations from one system.",
    primaryWorkflow: "Inquiry → Proposal → Delivery → Invoice",
    exampleKpi: "Billable utilization",
    status: "On the roadmap",
    modules: ["CRM", "Tasks", "Reports"],
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
          The Core Platform works for any service business today. Insurance has a dedicated Solution Pack —
          more industries are on the roadmap.
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
