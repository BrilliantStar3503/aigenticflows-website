interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className = "" }: SkeletonProps) {
  return <div className={`animate-shimmer rounded-md ${className}`} />;
}

export function HeroSkeleton() {
  return (
    <div className="mx-auto max-w-[1600px] px-4 sm:px-6 pb-8 pt-12 lg:px-14">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.46fr_1fr]">
        <div className="flex flex-col gap-4">
          <Skeleton className="h-6 w-32 rounded-full" />
          <Skeleton className="h-11 w-full" />
          <Skeleton className="h-11 w-4/5" />
          <Skeleton className="mt-2 h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <div className="mt-4 flex gap-3">
            <Skeleton className="h-11 w-36 rounded-xl" />
            <Skeleton className="h-11 w-36 rounded-xl" />
          </div>
        </div>
        <Skeleton className="h-[420px] w-full rounded-2xl" />
      </div>
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-neutral-100 p-6">
      <Skeleton className="h-9 w-9 rounded-xl" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-3 w-full" />
      <Skeleton className="h-3 w-2/3" />
    </div>
  );
}

export function DashboardSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-100">
      <Skeleton className="h-12 w-full rounded-none" />
      <div className="flex">
        <Skeleton className="h-72 w-28 flex-shrink-0 rounded-none" />
        <div className="flex-1 space-y-3 p-5">
          <Skeleton className="h-24 w-full" />
          <div className="grid grid-cols-3 gap-3">
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-16 w-full" />
          </div>
          <Skeleton className="h-24 w-full" />
        </div>
      </div>
    </div>
  );
}

export function TableSkeleton({ rows = 6 }: { rows?: number }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-100">
      <Skeleton className="h-12 w-full rounded-none" />
      <div className="divide-y divide-neutral-100">
        {Array.from({ length: rows }).map((_, index) => (
          <div key={index} className="flex items-center gap-4 px-6 py-4">
            <Skeleton className="h-3.5 w-1/3" />
            <Skeleton className="ml-auto h-3.5 w-10" />
            <Skeleton className="h-3.5 w-10" />
            <Skeleton className="h-3.5 w-10" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ListSkeleton({ rows = 4 }: { rows?: number }) {
  return (
    <div className="flex flex-col gap-3">
      {Array.from({ length: rows }).map((_, index) => (
        <div key={index} className="flex items-center gap-3 rounded-xl border border-neutral-100 p-4">
          <Skeleton className="h-9 w-9 flex-shrink-0 rounded-lg" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-3.5 w-1/2" />
            <Skeleton className="h-3 w-3/4" />
          </div>
        </div>
      ))}
    </div>
  );
}
