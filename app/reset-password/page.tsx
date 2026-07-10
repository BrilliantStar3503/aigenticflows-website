import type { Metadata } from "next";
import Link from "next/link";
import { ResetPasswordForm } from "@/components/reset-password/reset-password-form";

export const metadata: Metadata = {
  title: "Reset Password",
  robots: { index: false, follow: false },
};

export default function ResetPasswordPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-50 px-4 py-12">
      <div className="w-full max-w-[420px] rounded-[20px] border border-neutral-100 bg-white p-7 shadow-[0_24px_64px_rgba(17,17,17,0.08)]">
        <Link href="/" className="mb-6 flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-red">
            <div className="h-2.5 w-2.5 rounded-[2px] bg-white" />
          </div>
          <span className="text-sm font-bold text-neutral-900">AIMP</span>
        </Link>
        <ResetPasswordForm />
      </div>
    </main>
  );
}
