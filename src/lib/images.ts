function unsplash(id: string, width = 1200) {
  return `https://images.unsplash.com/photo-${id}?q=80&w=${width}&auto=format&fit=crop`;
}

export const serviceImages: Record<string, string> = {
  "custom-software-development": unsplash("1454165804606-c3d57bc86b40"),
  "web-application-development": unsplash("1522071820081-009f0129c71c"),
  "mobile-app-development": unsplash("1512428813834-c702c7702b78"),
  "ai-machine-learning": unsplash("1620712943543-bcc4688e7485"),
  "seo-digital-growth": unsplash("1551288049-bebda4e38f71"),
  "wordpress-development": unsplash("1486312338219-ce68d2c6f44d"),
  "ui-ux-design": unsplash("1519389950473-47ba0277781c"),
};

/**
 * Client photography, copied into public/projects/ from each client's live site.
 * Served locally because the client hosts are slow enough to time out the image optimizer.
 */
function clientPhoto(client: string, file: string) {
  return `/projects/${client}/${file}.webp`;
}

export const projectImages: Record<string, string> = {
  "sunspire-tourism-booking-platform": clientPhoto("sunspire", "2025-08-desert-safari-main-pic"),
  "altahady-bike-rental-booking": clientPhoto("altahady", "2026-02-Quad_Bike1-scaled"),
  "excelia-academy-lms": unsplash("1522202176988-66273c2fd55f"),
  "spicemaster-riyadh-restaurant": clientPhoto("spicemaster", "about-2"),
  "zaman-tiles-inventory-invoicing": unsplash("1581091226825-a6a2a5aee158"),
  "saudi-ai-sales-assistant": unsplash("1620712943543-bcc4688e7485"),
  "gulf-supply-corporate-site": unsplash("1504328345606-18bbc8c9d7d1"),
  "gulf-routes-trade-divisions": clientPhoto("gulfroutes", "2026-06-DayMar-and-gulf-routes-rice"),
  "huria-collections-storefront": unsplash("1596462502278-27bfdc403348"),
  "synergy-mall-storefront": clientPhoto("synergymall", "hero-shirts"),
};

export const projectGalleries: Record<string, { url: string; caption: string }[]> = {
  "sunspire-tourism-booking-platform": [
    { url: clientPhoto("sunspire", "2025-08-dune-bashing"), caption: "Dune bashing — the headline evening safari trip" },
    { url: clientPhoto("sunspire", "2025-08-morning-desert-safari"), caption: "Morning desert safari, one of 24 bookable trips" },
    { url: clientPhoto("sunspire", "2025-08-special-bugy-tour"), caption: "Buggy tours sold as standalone trips" },
    { url: clientPhoto("sunspire", "2025-08-burji-khalifa-dubai"), caption: "Dubai city tours hub" },
    { url: clientPhoto("sunspire", "2025-08-sheikh-zayed-mosque-6686295-scaled"), caption: "Abu Dhabi destination tours" },
  ],
  "altahady-bike-rental-booking": [
    { url: clientPhoto("altahady", "2026-02-Funco-2-scaled"), caption: "Funco 2-seater buggy from the fleet catalogue" },
    { url: clientPhoto("altahady", "2026-02-Funco-4-scaled"), caption: "Funco 4-seater for group bookings" },
    { url: clientPhoto("altahady", "2026-02-Polaris-2-scaled"), caption: "Polaris buggy, bookable by date and time slot" },
    { url: clientPhoto("altahady", "2026-03-sunset--scaled"), caption: "Sunset ride package" },
    { url: clientPhoto("altahady", "2026-03-kids"), caption: "Kids quad bike, listed as its own unit" },
  ],
  "excelia-academy-lms": [
    { url: unsplash("1516321318423-f06f85e504b3"), caption: "Course catalogue with category filtering" },
    { url: unsplash("1517245386807-bb43f82c33c4"), caption: "Lesson player inside an enrolled course" },
    { url: unsplash("1454165804606-c3d57bc86b40"), caption: "Instructor portal for building and managing courses" },
    { url: unsplash("1551288049-bebda4e38f71"), caption: "Admin console for users, payments and applications" },
  ],
  "spicemaster-riyadh-restaurant": [
    { url: clientPhoto("spicemaster", "menu-mutton-biryani"), caption: "Mutton biryani from the digital menu" },
    { url: clientPhoto("spicemaster", "menu-butter-chicken"), caption: "Butter chicken — per-dish photography on the menu" },
    { url: clientPhoto("spicemaster", "menu-bbq"), caption: "BBQ mix platter" },
    { url: clientPhoto("spicemaster", "gallery-gallery-image-1"), caption: "From the restaurant gallery" },
    { url: clientPhoto("spicemaster", "gallery-gallery-image-5"), caption: "From the restaurant gallery" },
  ],
  "zaman-tiles-inventory-invoicing": [
    { url: unsplash("1504328345606-18bbc8c9d7d1"), caption: "Stock search across tile codes, sizes and colours" },
    { url: unsplash("1454165804606-c3d57bc86b40"), caption: "Invoice register with paid and pending states" },
    { url: unsplash("1543286386-713bdd548da4"), caption: "Owner-only profit reporting across branches" },
    { url: unsplash("1507925921958-8a62f3d1a50d"), caption: "Branch switcher covering all four locations" },
  ],
  "saudi-ai-sales-assistant": [
    { url: unsplash("1611746872915-64382b5c76da"), caption: "WhatsApp inbox with AI-drafted replies" },
    { url: unsplash("1551288049-bebda4e38f71"), caption: "Dashboard tracking messages, voice notes and video ads" },
    { url: unsplash("1492691527719-9d1e07e534b4"), caption: "Video ad builder generating an Instagram-ready MP4" },
    { url: unsplash("1556742049-0cfed4f6a45d"), caption: "Product catalogue feeding both AI replies and ads" },
  ],
  "gulf-supply-corporate-site": [
    { url: unsplash("1521791136064-7986c2920216"), caption: "Manpower supply across eleven skill categories" },
    { url: unsplash("1566576912321-d58ddd7a6088"), caption: "SFDA-compliant cold-chain and last-mile logistics" },
    { url: unsplash("1581091226825-a6a2a5aee158"), caption: "Preventive and corrective MEP maintenance" },
    { url: unsplash("1487958449943-2429e8be8625"), caption: "Portable cabins and modular site infrastructure" },
  ],
  "gulf-routes-trade-divisions": [
    { url: clientPhoto("gulfroutes", "2026-06-DayMar-and-gulf-routes-rice"), caption: "DAYMAR basmati rice — the agro-export division" },
    { url: clientPhoto("gulfroutes", "2026-06-Gulf-Routes-and-DayMar-Transport"), caption: "Gulf Routes and DAYMAR freight transport" },
  ],
  "huria-collections-storefront": [
    { url: unsplash("1512436991641-6745cdb1723f"), caption: "Cosmetics collection with search and filters" },
    { url: unsplash("1519415943484-9fa1873496d4"), caption: "Shoes category and product detail pages" },
    { url: unsplash("1522335789203-aabd1fc54bc9"), caption: "Cart and cash-on-delivery checkout" },
    { url: unsplash("1570172619644-dfd03ed5d881"), caption: "Admin order management with PDF export" },
  ],
  "synergy-mall-storefront": [
    { url: clientPhoto("synergymall", "hero-shirts"), caption: "Hero treatment for the Synergy Mall collection" },
    { url: unsplash("1441984904996-e0b6ba687e04"), caption: "Collection page with category, price and sort filters" },
    { url: unsplash("1490481651871-ab68de25d43d"), caption: "AI fit flow capturing height, weight, chest and waist" },
    { url: unsplash("1483985988355-763728e1935b"), caption: "Editorial journal layout for brand storytelling" },
  ],
};

export const blogImages: Record<string, string> = {
  "core-web-vitals-seo-2026": unsplash("1460925895917-afdab827c52f"),
  "legacy-php-migration-guide": unsplash("1517694712202-14dd9538aa97"),
  "react-native-vs-native-2026": unsplash("1512428813834-c702c7702b78"),
  "soc2-for-startups": unsplash("1573164713988-8665fc963095"),
  "reducing-infra-cost-without-downtime": unsplash("1544197150-b99a580bb7a8"),
};

export const aboutImages = {
  hero: unsplash("1522202176988-66273c2fd55f"),
  culture: unsplash("1600880292203-757bb62b4baf"),
  office: unsplash("1504384308090-c894fdcc538d"),
};

export const heroFallback = unsplash("1498050108023-c5249f4df085");
