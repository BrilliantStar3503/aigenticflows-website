import type { ReactNode } from "react";

interface ScreenshotFrameProps {
  label: string;
  children: ReactNode;
}

export function ScreenshotFrame({ label, children }: ScreenshotFrameProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-[0_40px_80px_-28px_rgba(17,17,17,0.18)]">
      <div className="flex items-center gap-2 border-b border-neutral-100 bg-neutral-50 px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-neutral-200" />
          <span className="h-2 w-2 rounded-full bg-neutral-200" />
          <span className="h-2 w-2 rounded-full bg-neutral-200" />
        </div>
        <span className="ml-2 text-[10px] text-neutral-400">{label}</span>
      </div>
      <div className="flex min-h-[260px] flex-col justify-center p-6">{children}</div>
    </div>
  );
}
