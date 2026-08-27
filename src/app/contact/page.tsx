import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import PageHero from "@/components/sections/shared/PageHero";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
import MotionReveal from "@/components/ui/MotionReveal";
import ContactForm from "@/components/sections/contact/ContactForm";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${brand.legalName} to discuss your next software, AI/ML, or SEO project.`,
};

const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? brand.email;

const infoItems: { icon: typeof Mail; label: string; value: string; href?: string }[] = [
  { icon: Mail, label: "Email", value: contactEmail, href: `mailto:${contactEmail}` },
  { icon: Phone, label: "Phone", value: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+1 (415) 555-0182" },
  { icon: MapPin, label: "Office", value: process.env.NEXT_PUBLIC_CONTACT_OFFICE ?? "540 Market Street, San Francisco, CA" },
  { icon: Clock, label: "Hours", value: "Mon – Fri, 9am – 6pm PT" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build something together"
        gradientWord="build something together"
        subtitle="Tell us about your project and we'll get back to you within one business day."
      />

      <SectionWrapper className="pt-0">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1fr]">
          <MotionReveal>
            <ContactForm />
          </MotionReveal>

          <MotionReveal delay={0.1}>
            <div className="flex flex-col gap-4">
              <Card hover={false}>
                <div className="flex flex-col gap-5">
                  {infoItems.map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-indigo/15">
                        <item.icon className="h-4 w-4 text-accent-blue" />
                      </span>
                      <div>
                        <div className="text-xs text-foreground-muted">{item.label}</div>
                        <div className="text-sm font-medium text-foreground">
                          {item.href ? (
                            <a href={item.href} className="hover:text-accent-blue">
                              {item.value}
                            </a>
                          ) : (
                            item.value
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <div className="glass-card grid-pattern relative flex h-48 items-center justify-center overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-indigo/10 via-transparent to-accent-violet/10" />
                <div className="relative text-center">
                  <MapPin className="mx-auto h-6 w-6 text-accent-blue" />
                  <p className="mt-2 text-xs text-foreground-muted">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </MotionReveal>
        </div>
      </SectionWrapper>
    </>
  );
}
