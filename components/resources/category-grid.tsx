import { BookOpen, FileText, Newspaper, PlayCircle, TrendingUp, Layout } from "lucide-react";
import { CategoryCard } from "@/components/resources/category-card";

const CATEGORIES = [
  {
    icon: FileText,
    title: "Documentation",
    description: "Step-by-step product documentation.",
    count: "Growing library",
  },
  {
    icon: BookOpen,
    title: "Guides",
    description: "Implementation guides and tutorials.",
    count: "New guides added regularly",
  },
  {
    icon: TrendingUp,
    title: "Case Studies",
    description: "Real customer success stories.",
    count: "Coming soon",
  },
  {
    icon: Layout,
    title: "Templates",
    description: "Downloadable business templates.",
    count: "Coming soon",
  },
  {
    icon: PlayCircle,
    title: "Videos",
    description: "Product walkthroughs and training.",
    count: "Coming soon",
  },
  {
    icon: Newspaper,
    title: "Blog",
    description: "Industry insights and updates.",
    count: "Coming soon",
  },
];

export function CategoryGrid() {
  return (
    <section className="mx-auto max-w-[1600px] px-4 sm:px-6 py-20 lg:px-14">
      <div className="mx-auto max-w-[560px] text-center">
        <h2 className="text-[32px] font-bold tracking-tight text-neutral-900">Browse by category</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-neutral-600">
          Everything you need, organized the way you actually look for it.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map((category) => (
          <CategoryCard key={category.title} {...category} />
        ))}
      </div>
    </section>
  );
}
