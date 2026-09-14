import type { Testimonial } from "@/lib/types";

/**
 * DRAFTS — written from the delivered scope of each case study, not supplied by the clients.
 * Get each client's written approval (and a real name/role if they want one) before deploying.
 * Attributed to the company rather than an invented person; with no `photo`, the avatar shows initials.
 */
export const testimonials: Testimonial[] = [
  {
    id: "tst-0001-0000-4000-8000-000000000001",
    quote:
      "Every tour we run is now bookable online, with prices visitors can see in their own currency. Enquiries that used to live in WhatsApp threads come through checkout, and the articles bring travellers to us before they land in Dubai.",
    name: "Sunspire Tourism",
    role: "Desert safari & tour operator, Dubai",
    company: "Sunspire Tourism",
    published: true,
    sortOrder: 1,
  },
  {
    id: "tst-0002-0000-4000-8000-000000000002",
    quote:
      "Riders can now pick the exact buggy or quad they want and book a time slot themselves, even late at night. The phone calls and weekend double-bookings have stopped.",
    name: "Al Tahady Bike Rental",
    role: "Quad bike & buggy rentals, Dubai",
    company: "Al Tahady Bike Rental",
    published: true,
    sortOrder: 2,
  },
  {
    id: "tst-0003-0000-4000-8000-000000000003",
    quote:
      "Students, instructors and our admin team each have their own space in one platform — and every certificate we issue can be verified online by an employer in seconds.",
    name: "Excelia Academy",
    role: "AI & IT skills training",
    company: "Excelia Academy",
    published: true,
    sortOrder: 3,
  },
  {
    id: "tst-0004-0000-4000-8000-000000000004",
    quote:
      "All four branches now run on one system. Staff can check stock by code, size and colour in seconds, invoices are no longer handwritten, and profit figures stay visible to the owner only.",
    name: "Zaman Tiles & Sanitary",
    role: "Tiles & sanitary wholesale, four branches",
    company: "Zaman Tiles & Sanitary",
    published: true,
    sortOrder: 4,
  },
  {
    id: "tst-0005-0000-4000-8000-000000000005",
    quote:
      "Five very different divisions finally sit on one website without competing with each other, and buyers from every market we trade in reach the right desk.",
    name: "Gulf Routes",
    role: "International trade & manufacturing group",
    company: "Gulf Routes Private Limited",
    published: true,
    sortOrder: 5,
  },
];
