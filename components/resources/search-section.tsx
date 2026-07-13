import { ArrowRight, Search } from "lucide-react";

const RECENT_SEARCHES = ["workflow automation", "solution packs", "recruitment pipeline"];
const POPULAR_TOPICS = ["Getting started", "CRM setup", "Automations", "Analytics", "API access", "Security"];
const QUICK_LINKS = ["Documentation home", "API reference", "Release notes", "Status page"];

export function SearchSection() {
  return (
    <section className="mx-auto max-w-[1600px] px-4 sm:px-6 py-20 lg:px-14">
      <div className="mx-auto max-w-[680px] text-center">
        <h2 className="text-[32px] font-bold tracking-tight text-neutral-900">
          Find what you&apos;re looking for
        </h2>

        <div className="mt-8 flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-5 py-4 shadow-[0_8px_32px_rgba(17,17,17,0.06)] focus-within:border-brand-red">
          <Search size={18} className="text-neutral-400" />
          <input
            type="text"
            placeholder="Search documentation, guides, templates…"
            className="w-full bg-transparent text-[14px] text-neutral-900 outline-none placeholder:text-neutral-400"
          />
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          <span className="text-[11.5px] font-medium text-neutral-400">Recent:</span>
          {RECENT_SEARCHES.map((term) => (
            <span
              key={term}
              className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-[11.5px] text-neutral-600"
            >
              {term}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-14 grid max-w-[900px] grid-cols-1 gap-10 lg:grid-cols-2">
        <div>
          <span className="text-[10.5px] font-bold uppercase tracking-wider text-neutral-400">
            Popular topics
          </span>
          <div className="mt-3 flex flex-wrap gap-2">
            {POPULAR_TOPICS.map((topic) => (
              <span
                key={topic}
                className="rounded-lg bg-brand-pink px-3 py-2 text-[12.5px] font-medium text-brand-red"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        <div>
          <span className="text-[10.5px] font-bold uppercase tracking-wider text-neutral-400">
            Quick links
          </span>
          <div className="mt-3 flex flex-col gap-2.5">
            {QUICK_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="group flex items-center justify-between text-[13.5px] text-neutral-700 hover:text-brand-red"
              >
                {link}
                <ArrowRight size={13} className="text-neutral-300 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-brand-red" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
