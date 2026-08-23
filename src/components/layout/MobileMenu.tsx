"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import Button from "@/components/ui/Button";
import { primaryNavLinks } from "@/lib/data/nav";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const links = [
    ...primaryNavLinks.slice(0, 1),
    { label: "Services", href: "/services" },
    ...primaryNavLinks.slice(1),
    { label: "Contact", href: "/contact" },
  ];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="fixed inset-x-0 top-16 z-40 overflow-hidden border-t border-border bg-background shadow-2xl lg:hidden"
        >
          <div className="flex flex-col gap-1 px-6 py-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="rounded-xl px-4 py-3 text-base font-medium text-foreground-muted transition-colors hover:bg-surface-hover hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3">
              <Button href="/contact" size="lg" className="w-full">
                Get a Quote
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
