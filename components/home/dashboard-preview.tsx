"use client";

import { motion } from "framer-motion";
import { DashboardSidebar } from "@/components/home/dashboard-sidebar";
import { DashboardTopbar } from "@/components/home/dashboard-topbar";
import { MetricCard } from "@/components/home/metric-card";
import { RevenueChartCard } from "@/components/home/revenue-chart-card";
import { SalesPipelineCard } from "@/components/home/sales-pipeline-card";
import { WorkflowProgressCard } from "@/components/home/workflow-progress-card";
import { LeadSourcesCard } from "@/components/home/lead-sources-card";
import { AIExecutiveBriefing } from "@/components/home/ai-executive-briefing";
import { ActivityFeed } from "@/components/home/activity-feed";

const METRICS = [
  { label: "Revenue", value: "₱12.45M", trend: "↑ 24%", sublabel: "vs last 30 days" },
  { label: "Pipeline", value: "₱8.32M", trend: "↑ 18%", sublabel: "vs last 30 days" },
  { label: "Tasks due", value: "28", trend: "↑ 5", sublabel: "due today" },
  { label: "Appointments", value: "15", trend: "↑ 3", sublabel: "today" },
];

export function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
      className="overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-[0_36px_64px_-24px_rgba(17,17,17,0.14)]"
    >
      <DashboardTopbar />

      <div className="flex">
        <DashboardSidebar />

        <div className="flex-1 p-5">
          <div>
            <h2 className="text-[19px] font-bold text-neutral-900">Good morning, Alex 👋</h2>
            <p className="mt-0.5 text-[11.5px] text-neutral-500">
              Here&apos;s what&apos;s happening in your business today.
            </p>
          </div>

          <div className="mt-4 grid grid-cols-4 gap-3">
            {METRICS.map((metric) => (
              <MetricCard key={metric.label} {...metric} />
            ))}
          </div>

          <div className="mt-3 grid grid-cols-[1.6fr_1fr_0.85fr] gap-3">
            <div className="space-y-3">
              <RevenueChartCard />
              <WorkflowProgressCard />
            </div>
            <div className="space-y-3">
              <SalesPipelineCard />
              <LeadSourcesCard />
            </div>
            <div className="space-y-3">
              <ActivityFeed />
              <AIExecutiveBriefing />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
