import { Building2, Headset, Settings, TrendingUp, UserPlus } from "lucide-react";

const PATHS = [
  {
    icon: UserPlus,
    title: "New to AIMP",
    time: "45 min",
    modules: 6,
    progress: 0,
  },
  {
    icon: Settings,
    title: "Administrator",
    time: "1.5 hrs",
    modules: 9,
    progress: 20,
  },
  {
    icon: TrendingUp,
    title: "Sales Manager",
    time: "1 hr",
    modules: 7,
    progress: 0,
  },
  {
    icon: Building2,
    title: "Agency Owner",
    time: "2 hrs",
    modules: 11,
    progress: 45,
  },
  {
    icon: Headset,
    title: "Operations Team",
    time: "1.25 hrs",
    modules: 8,
    progress: 0,
  },
];

export function LearningPaths() {
  return (
    <section className="bg-neutral-50 py-20">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-14">
        <div className="mx-auto max-w-[560px] text-center">
          <h2 className="text-[32px] font-bold tracking-tight text-neutral-900">Learning paths</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-neutral-600">
            Guided tracks built for your role.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {PATHS.map((path) => (
            <div
              key={path.title}
              className="flex flex-col gap-4 rounded-2xl border border-neutral-100 bg-white p-6 shadow-[0_4px_24px_rgba(17,17,17,0.03)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_24px_48px_-8px_rgba(17,17,17,0.10)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900">
                <path.icon size={18} className="text-white" strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-[14px] font-bold text-neutral-900">{path.title}</h3>
                <p className="mt-1 text-[11.5px] text-neutral-500">
                  {path.time} · {path.modules} modules
                </p>
              </div>
              <div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-neutral-100">
                  <div
                    className="h-full rounded-full bg-brand-red"
                    style={{ width: `${path.progress}%` }}
                  />
                </div>
                <span className="mt-1.5 block text-[10.5px] text-neutral-400">
                  {path.progress > 0 ? `${path.progress}% complete` : "Not started"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
