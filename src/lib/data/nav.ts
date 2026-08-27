import type { NavLink, FooterLinkColumn } from "@/lib/types";

export const primaryNavLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
];

export const footerColumns: FooterLinkColumn[] = [
  {
    title: "Services",
    links: [
      { label: "Custom Software", href: "/services/custom-software-development" },
      { label: "Web Applications", href: "/services/web-application-development" },
      { label: "Mobile Apps", href: "/services/mobile-app-development" },
      { label: "AI & Machine Learning", href: "/services/ai-machine-learning" },
      { label: "WordPress Development", href: "/services/wordpress-development" },
      { label: "SEO & Digital Growth", href: "/services/seo-digital-growth" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "X", href: "https://x.com" },
];
