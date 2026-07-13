import { Bot, GitBranch, Network, Rocket, Sparkles, Users } from "lucide-react";
import { ResourceCard } from "@/components/resources/resource-card";

const FEATURED = [
  {
    icon: Rocket,
    category: "Guide",
    title: "Getting Started with AIGENTIC Flows",
    summary: "Set up your workspace, invite your team, and configure your first workflow.",
    readingTime: "6 min read",
  },
  {
    icon: GitBranch,
    category: "Guide",
    title: "Building Automated Workflows",
    summary: "Learn how to build triggers, conditions, and actions without writing code.",
    readingTime: "9 min read",
  },
  {
    icon: Users,
    category: "Best Practices",
    title: "CRM Best Practices",
    summary: "How high-performing teams organize leads, clients, and follow-ups in AIGENTIC Flows.",
    readingTime: "7 min read",
  },
  {
    icon: Sparkles,
    category: "Guide",
    title: "Setting Up Your Solution Pack",
    summary: "How industry Solution Packs like Insurance add capability on top of the Core Platform.",
    readingTime: "5 min read",
  },
  {
    icon: Network,
    category: "Case Study",
    title: "Scaling Multi-Branch Operations",
    summary: "How a growing agency used AIGENTIC Flows to manage hierarchy across branches.",
    readingTime: "8 min read",
  },
  {
    icon: Bot,
    category: "Guide",
    title: "Business Automation Guide",
    summary: "A practical framework for deciding what to automate first.",
    readingTime: "10 min read",
  },
];

export function FeaturedResources() {
  return (
    <section className="bg-neutral-50 py-20">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-14">
        <div className="mx-auto max-w-[560px] text-center">
          <h2 className="text-[32px] font-bold tracking-tight text-neutral-900">Featured resources</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED.map((resource) => (
            <ResourceCard key={resource.title} {...resource} />
          ))}
        </div>
      </div>
    </section>
  );
}
