const STATS = [
  { value: "1,200+", label: "Businesses onboarded" },
  { value: "48,000+", label: "Hours automated" },
  { value: "310,000+", label: "AI recommendations generated" },
  { value: "34%", label: "Average operational efficiency gained" },
];

export function Stats() {
  return (
    <section className="mx-auto max-w-[1600px] px-4 sm:px-6 py-20 lg:px-14">
      <div className="mx-auto max-w-[560px] text-center">
        <h2 className="text-[32px] font-bold tracking-tight text-neutral-900">
          Why customers choose AIGENTIC Flows
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-[36px] font-bold tracking-tight text-brand-red lg:text-[42px]">
              {stat.value}
            </div>
            <div className="mt-2 text-[13px] leading-snug text-neutral-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
