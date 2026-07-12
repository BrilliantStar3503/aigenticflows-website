const INDUSTRIES = [
  "Insurance",
  "Financial Advisory",
  "Real Estate",
  "Healthcare",
  "Accounting",
  "Consulting",
  "Professional Services",
];

export function Vision() {
  return (
    <section className="bg-neutral-50 py-20">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-14">
        <div className="mx-auto max-w-[600px] text-center">
          <h2 className="text-[32px] font-bold tracking-tight text-neutral-900">Platform vision</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-neutral-600">
            One configurable core, serving every kind of service-based business.
          </p>
        </div>

        <div className="mx-auto mt-14 flex max-w-[760px] flex-col items-center">
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
            {INDUSTRIES.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-center text-[12px] font-medium text-neutral-600"
              >
                {industry}
              </span>
            ))}
          </div>

          <svg width="2" height="48" viewBox="0 0 2 48" className="my-2 text-neutral-300" aria-hidden="true">
            <line x1="1" y1="0" x2="1" y2="48" stroke="currentColor" strokeWidth="1" strokeDasharray="3 4" />
          </svg>

          <div className="animate-core-pulse rounded-2xl bg-brand-red px-10 py-5 text-center">
            <span className="text-[16px] font-bold text-white">AIGENTIC Flows Core</span>
          </div>

          <span className="mt-6 max-w-[420px] text-center text-[13px] leading-relaxed text-neutral-500">
            Every industry runs on the same core platform — configured around
            its own workflows, not a rebuilt product.
          </span>
        </div>
      </div>
    </section>
  );
}
