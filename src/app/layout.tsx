import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif, Syne } from "next/font/google";
import "./globals.css";
import MotionProvider from "@/components/layout/MotionProvider";
import SiteChrome from "@/components/layout/SiteChrome";
import { brand } from "@/lib/brand";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

export const metadata: Metadata = {
  metadataBase: new URL(brand.siteUrl),
  title: {
    default: `${brand.legalName} — Custom Software, Web, AI/ML & SEO Engineering`,
    template: `%s | ${brand.legalName}`,
  },
  description:
    "Desynt Digital Solutions is a full-service software company building custom software, web & mobile apps, AI/ML solutions, and SEO-driven digital growth for ambitious teams.",
  openGraph: {
    title: `${brand.legalName} — Custom Software, Web, AI/ML & SEO Engineering`,
    description:
      "Custom software, web & mobile apps, AI/ML solutions, and SEO-driven digital growth for ambitious teams.",
    siteName: brand.legalName,
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-full flex-col bg-background font-sans text-foreground">
        <div className="grain-overlay" aria-hidden="true" />
        <MotionProvider>
          <SiteChrome>{children}</SiteChrome>
        </MotionProvider>
      </body>
    </html>
  );
}
