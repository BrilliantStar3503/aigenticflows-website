import { Building2, Check } from "lucide-react";

const ENTERPRISE_POINTS = [
  "Dedicated onboarding specialist",
  "Custom workflow configuration",
  "Multi-branch and multi-region deployments",
  "Enterprise-grade security and compliance",
];

export function EnterpriseSection() {
  return (
    <section className="mx-auto max-w-[1600px] px-4 sm:px-6 py-20 lg:px-14">
      <div className="mx-auto grid max-w-[1000px] grid-cols-1 items-center gap-11 rounded-2xl border border-neutral-100 bg-white p-11 shadow-[0_4px_24px_rgba(17,17,17,0.03)] lg:grid-cols-[auto_1fr] lg:p-16">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-pink lg:h-16 lg:w-16">
          <Building2 size={24} className="text-brand-red" />
        </div>

        <div>
          <h2 className="text-[28px] font-bold tracking-tight text-neutral-900">
            Need something custom?
          </h2>
          <p className="mt-3.5 max-w-[560px] text-[15px] leading-relaxed text-neutral-600">
            Our enterprise plan includes hands-on implementation support,
            custom workflow configuration, dedicated onboarding, and
            scalable deployments built for multi-branch organizations.
          </p>

          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {ENTERPRISE_POINTS.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-[13px] text-neutral-700">
                <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-brand-pink">
                  <Check size={9} className="text-brand-red" strokeWidth={3} />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <button className="rounded-xl bg-brand-gold px-6 py-3 text-sm font-semibold text-neutral-900 shadow-[0_6px_16px_rgba(245,194,72,0.25)] transition-all hover:bg-brand-gold-hover hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/40 focus-visible:ring-offset-2">
              Contact Sales
            </button>
            <button className="rounded-xl border border-neutral-200 bg-white px-6 py-3 text-sm font-semibold text-neutral-700 transition-all hover:border-neutral-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/40 focus-visible:ring-offset-2">
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
