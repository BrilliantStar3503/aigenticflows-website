import { HeroSkeleton } from "@/components/shared/skeletons";

export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      <div className="h-[62px] bg-brand-navred" />
      <HeroSkeleton />
    </div>
  );
}
