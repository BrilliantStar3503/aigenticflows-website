import { ArrowRight, BookOpen, Calendar, MessageCircle, Video } from "lucide-react";

const ACTIONS = [
  { icon: BookOpen, label: "Browse documentation" },
  { icon: MessageCircle, label: "Contact support" },
  { icon: Calendar, label: "Book a demo" },
  { icon: Video, label: "Join webinars" },
];

export function CommunitySection() {
  return (
    <section className="mx-auto max-w-[1600px] px-4 sm:px-6 py-20 lg:px-14">
      <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-10 rounded-2xl border border-neutral-100 bg-white p-11 shadow-[0_4px_24px_rgba(17,17,17,0.03)] lg:grid-cols-2 lg:p-16">
        <div>
          <h2 className="text-[28px] font-bold tracking-tight text-neutral-900">Need help?</h2>
          <p className="mt-3.5 max-w-[380px] text-[15px] leading-relaxed text-neutral-600">
            Our documentation and support team are here to help you get the
            most out of AIGENTIC Flows — whether you&apos;re just getting started or
            scaling across branches.
          </p>
        </div>

        <div className="flex flex-col gap-2.5">
          {ACTIONS.map((action) => (
            <a
              key={action.label}
              href="#"
              className="group flex items-center gap-3 rounded-xl border border-neutral-100 bg-white px-4 py-3.5 transition-all duration-150 hover:-translate-y-0.5 hover:border-neutral-200 hover:shadow-[0_8px_24px_rgba(17,17,17,0.06)]"
            >
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-brand-pink">
                <action.icon size={16} className="text-brand-red" />
              </div>
              <span className="flex-1 text-[13.5px] font-semibold text-neutral-900">{action.label}</span>
              <ArrowRight size={14} className="text-neutral-300 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-brand-red" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
