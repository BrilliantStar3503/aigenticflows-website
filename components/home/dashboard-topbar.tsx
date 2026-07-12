import { Bell, Calendar, Search } from "lucide-react";

export function DashboardTopbar() {
  return (
    <div className="flex items-center gap-4 border-b border-neutral-100 px-5 py-3">
      <div className="flex h-6 w-6 items-center justify-center rounded-md bg-brand-red">
        <div className="h-2 w-2 rounded-[2px] bg-white" />
      </div>
      <span className="text-[13px] font-bold text-neutral-900">AIGENTIC Flows</span>

      <div className="flex flex-1 items-center gap-2 rounded-lg border border-neutral-100 bg-neutral-50 px-3 py-1.5">
        <Search size={13} className="text-neutral-400" />
        <span className="flex-1 text-[11px] text-neutral-400">Search leads, clients, tasks…</span>
        <span className="rounded border border-neutral-200 bg-white px-1.5 py-0.5 text-[9px] font-medium text-neutral-400">
          ⌘K
        </span>
      </div>

      <div className="flex items-center gap-3.5 text-neutral-400">
        <span className="relative">
          <Bell size={16} />
          <span className="absolute -right-1.5 -top-1.5 flex h-3.5 min-w-[14px] items-center justify-center rounded-full bg-brand-red px-0.5 text-[8px] font-bold text-white">
            3
          </span>
        </span>
        <Calendar size={16} />
        <div className="h-6 w-6 rounded-full bg-gradient-to-br from-brand-red to-brand-navred" />
      </div>
    </div>
  );
}
