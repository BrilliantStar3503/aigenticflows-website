"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Compass } from "lucide-react";

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-8 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-pink">
        <Compass size={28} className="text-brand-red" />
      </div>

      <span className="mt-6 text-[10.5px] font-bold uppercase tracking-wider text-brand-red">404</span>
      <h1 className="mt-2 text-[32px] font-bold tracking-tight text-neutral-900">Page not found</h1>
      <p className="mt-3 max-w-[380px] text-[15px] leading-relaxed text-neutral-600">
        The page you&apos;re looking for doesn&apos;t exist or may have been moved.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-xl bg-brand-gold px-6 py-3 text-sm font-semibold text-neutral-900 shadow-[0_8px_20px_rgba(245,194,72,0.35)] transition-all hover:bg-brand-gold-hover hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/40 focus-visible:ring-offset-2"
        >
          Go Home
        </Link>
        <button
          type="button"
          onClick={() => router.back()}
          className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition-all hover:border-neutral-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/40 focus-visible:ring-offset-2"
        >
          Back
        </button>
      </div>
    </main>
  );
}
