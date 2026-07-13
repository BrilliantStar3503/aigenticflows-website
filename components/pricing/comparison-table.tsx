import { Check, Minus } from "lucide-react";

type Availability = boolean | string;

interface FeatureRow {
  label: string;
  starter: Availability;
  growth: Availability;
  business: Availability;
  enterprise: Availability;
}

const ROWS: FeatureRow[] = [
  { label: "Contacts, Companies, Deals & Pipeline", starter: true, growth: true, business: true, enterprise: true },
  { label: "Team directory, Tasks, Calendar", starter: true, growth: true, business: true, enterprise: true },
  { label: "Tags & activity history", starter: true, growth: true, business: true, enterprise: true },
  { label: "Custom branding", starter: true, growth: true, business: true, enterprise: true },
  { label: "Industry Solution Packs", starter: false, growth: "1 included", business: "up to 3", enterprise: "unlimited" },
  { label: "Marketing Automation", starter: false, growth: true, business: true, enterprise: true },
  { label: "Facebook Lead Ads Capture", starter: false, growth: true, business: true, enterprise: true },
  { label: "Advanced Reporting", starter: false, growth: false, business: true, enterprise: true },
  { label: "Multi-branch Hierarchy", starter: false, growth: false, business: false, enterprise: true },
  { label: "API Access", starter: false, growth: false, business: false, enterprise: true },
  { label: "Priority Support", starter: false, growth: false, business: true, enterprise: true },
  { label: "Dedicated Onboarding", starter: false, growth: false, business: false, enterprise: true },
];

function AvailabilityMark({ value }: { value: Availability }) {
  if (value === true) {
    return (
      <span className="mx-auto flex h-5 w-5 items-center justify-center rounded-full bg-brand-pink">
        <Check size={11} className="text-brand-red" strokeWidth={3} />
      </span>
    );
  }
  if (typeof value === "string") {
    return <span className="mx-auto block text-[11px] font-medium text-neutral-500">{value}</span>;
  }
  return <Minus size={13} className="mx-auto text-neutral-300" />;
}

const PLANS: { key: "starter" | "growth" | "business" | "enterprise"; label: string; highlight?: boolean }[] = [
  { key: "starter", label: "Starter" },
  { key: "growth", label: "Growth" },
  { key: "business", label: "Business", highlight: true },
  { key: "enterprise", label: "Enterprise" },
];

export function ComparisonTable() {
  return (
    <section className="bg-neutral-50 py-20">
      <div className="mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-14">
        <div className="mx-auto max-w-[560px] text-center">
          <h2 className="text-[32px] font-bold tracking-tight text-neutral-900">
            Compare plans in detail
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-neutral-600">
            See exactly what&apos;s included at every tier.
          </p>
        </div>

        <div className="mt-12 hidden overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-[0_4px_24px_rgba(17,17,17,0.03)] md:block">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-neutral-100">
                <th className="px-6 py-5 text-[11.5px] font-semibold uppercase tracking-wider text-neutral-400">
                  Feature
                </th>
                <th className="w-[120px] px-4 py-5 text-center text-[13px] font-bold text-neutral-900">
                  Starter
                </th>
                <th className="w-[120px] px-4 py-5 text-center text-[13px] font-bold text-neutral-900">
                  Growth
                </th>
                <th className="w-[120px] bg-brand-pink/50 px-4 py-5 text-center text-[13px] font-bold text-brand-red">
                  Business
                </th>
                <th className="w-[120px] px-4 py-5 text-center text-[13px] font-bold text-neutral-900">
                  Enterprise
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, index) => (
                <tr key={row.label} className={index < ROWS.length - 1 ? "border-b border-neutral-100" : ""}>
                  <td className="px-6 py-4 text-[13.5px] text-neutral-700">{row.label}</td>
                  <td className="px-4 py-4 text-center">
                    <AvailabilityMark value={row.starter} />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <AvailabilityMark value={row.growth} />
                  </td>
                  <td className="bg-brand-pink/20 px-4 py-4 text-center">
                    <AvailabilityMark value={row.business} />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <AvailabilityMark value={row.enterprise} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 flex flex-col gap-5 md:hidden">
          {PLANS.map((plan) => (
            <div
              key={plan.key}
              className={
                plan.highlight
                  ? "overflow-hidden rounded-2xl border border-brand-red/25 bg-white shadow-[0_4px_24px_rgba(17,17,17,0.03)]"
                  : "overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-[0_4px_24px_rgba(17,17,17,0.03)]"
              }
            >
              <div
                className={
                  plan.highlight
                    ? "bg-brand-pink px-5 py-3.5 text-[14px] font-bold text-brand-red"
                    : "bg-neutral-50 px-5 py-3.5 text-[14px] font-bold text-neutral-900"
                }
              >
                {plan.label}
              </div>
              <div className="divide-y divide-neutral-100">
                {ROWS.map((row) => (
                  <div key={row.label} className="flex items-center justify-between gap-3 px-5 py-3">
                    <span className="text-[13.5px] text-neutral-700">{row.label}</span>
                    <AvailabilityMark value={row[plan.key]} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
