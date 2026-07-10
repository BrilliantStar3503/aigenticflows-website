import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/shared/json-ld";
import { AnalyticsScripts } from "@/components/shared/analytics-scripts";
import { AuthProvider } from "@/lib/auth/context";
import { organizationJsonLd } from "@/lib/seo/structured-data";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE_DEFAULT, SITE_URL, OG_IMAGE } from "@/lib/seo/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE_DEFAULT,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE_DEFAULT,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE_DEFAULT,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
  verification: {
    // TODO: add Google Search Console verification token when available
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white font-sans antialiased">
        <JsonLd data={organizationJsonLd()} />
        <AnalyticsScripts />
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
