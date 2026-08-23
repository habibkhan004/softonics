import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MotionProvider from "@/components/layout/MotionProvider";
import BackToTop from "@/components/layout/BackToTop";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://softonics.dev"),
  title: {
    default: "Softonics — Custom Software, Web, AI/ML & SEO Engineering",
    template: "%s | Softonics",
  },
  description:
    "Softonics is a full-service software company building custom software, web & mobile apps, AI/ML solutions, and SEO-driven digital growth for ambitious teams.",
  openGraph: {
    title: "Softonics — Custom Software, Web, AI/ML & SEO Engineering",
    description:
      "Custom software, web & mobile apps, AI/ML solutions, and SEO-driven digital growth for ambitious teams.",
    siteName: "Softonics",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <MotionProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <BackToTop />
          <WhatsAppButton />
        </MotionProvider>
      </body>
    </html>
  );
}
