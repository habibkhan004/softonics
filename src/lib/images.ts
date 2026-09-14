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

function sunspire(file: string) {
  return `https://sunspiretourism.com/wp-content/uploads/${file}`;
}

function altahady(file: string) {
  return `https://altahadybikerent.com/wp-content/uploads/${file}`;
}

function spicemaster(file: string) {
  return `https://spicemastersa.com/assets/img/${file}`;
}

function gulfroutes(file: string) {
  return `https://gulfroutes.com/wp-content/uploads/${file}`;
}

export const projectImages: Record<string, string> = {
  "sunspire-tourism-booking-platform": sunspire("2025/08/desert-safari-main-pic.jpg"),
  "altahady-bike-rental-booking": altahady("2026/02/Quad_Bike1-scaled.webp"),
  "excelia-academy-lms": unsplash("1522202176988-66273c2fd55f"),
  "spicemaster-riyadh-restaurant": spicemaster("about-2.jpg"),
  "zaman-tiles-inventory-invoicing": unsplash("1581091226825-a6a2a5aee158"),
  "saudi-ai-sales-assistant": unsplash("1620712943543-bcc4688e7485"),
  "gulf-supply-corporate-site": unsplash("1504328345606-18bbc8c9d7d1"),
  "gulf-routes-trade-divisions": gulfroutes("2025/10/Ocean-Transport-150-1.jpg"),
  "huria-collections-storefront": unsplash("1596462502278-27bfdc403348"),
};

export const projectGalleries: Record<string, { url: string; caption: string }[]> = {
  "sunspire-tourism-booking-platform": [
    { url: sunspire("2025/08/dune-bashing.jpg"), caption: "Dune bashing on the evening desert safari trip page" },
    { url: sunspire("2025/08/morning-desert-safari.jpg"), caption: "Morning safari listing with itinerary and inclusions" },
    { url: sunspire("2025/08/special-bugy-tour.jpg"), caption: "Buggy and quad-bike add-ons sold as standalone trips" },
    { url: sunspire("2025/08/burji-khalifa-dubai.jpg"), caption: "Dubai city tour hub linking full-day and half-day options" },
    { url: sunspire("2025/08/sheikh-zayed-mosque-6686295-scaled.jpg"), caption: "Abu Dhabi destination page with theme-park bundles" },
  ],
  "altahady-bike-rental-booking": [
    { url: altahady("2026/02/Funco-2-scaled.webp"), caption: "Funco 2-seater buggy on the fleet grid" },
    { url: altahady("2026/02/Funco-4-scaled.webp"), caption: "Funco 4-seater listing for group bookings" },
    { url: altahady("2026/02/Polaris-2-scaled.webp"), caption: "Polaris buggy detail page with booking calendar" },
    { url: altahady("2026/03/sunset--scaled.jpg"), caption: "Sunset ride package landing page" },
    { url: altahady("2026/03/kids.jpeg"), caption: "Kids quad bike listed as its own bookable unit" },
  ],
  "excelia-academy-lms": [
    { url: unsplash("1516321318423-f06f85e504b3"), caption: "Course catalogue with category filtering" },
    { url: unsplash("1517245386807-bb43f82c33c4"), caption: "Lesson player inside an enrolled course" },
    { url: unsplash("1454165804606-c3d57bc86b40"), caption: "Instructor portal for building and managing courses" },
    { url: unsplash("1551288049-bebda4e38f71"), caption: "Admin console for users, payments and applications" },
  ],
  "spicemaster-riyadh-restaurant": [
    { url: spicemaster("menu/mutton-biryani.jpg"), caption: "Menu card for the house mutton biryani" },
    { url: spicemaster("menu/butter-chicken.jpg"), caption: "Main course section with per-dish photography" },
    { url: spicemaster("menu/bbq.png"), caption: "BBQ mix platter on the grill menu" },
    { url: spicemaster("gallery/gallery-image-1.jpeg"), caption: "Dining room gallery carousel" },
    { url: spicemaster("gallery/gallery-image-5.jpeg"), caption: "Interior shots used across the gallery lightbox" },
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
    { url: gulfroutes("2026/06/DayMar-and-gulf-routes-rice.webp"), caption: "DAYMAR rice and agro-export division" },
    { url: gulfroutes("2026/06/Gulf-Routes-and-DayMar-Transport.webp"), caption: "Transport and freight across the trade network" },
    { url: gulfroutes("2026/06/2.webp"), caption: "Minerals division — limestone and Himalayan pink salt" },
    { url: gulfroutes("2026/06/5.webp"), caption: "BOULDER premium tire manufacturing" },
  ],
  "huria-collections-storefront": [
    { url: unsplash("1512436991641-6745cdb1723f"), caption: "Cosmetics collection with search and filters" },
    { url: unsplash("1519415943484-9fa1873496d4"), caption: "Shoes category and product detail pages" },
    { url: unsplash("1522335789203-aabd1fc54bc9"), caption: "Cart and cash-on-delivery checkout" },
    { url: unsplash("1570172619644-dfd03ed5d881"), caption: "Admin order management with PDF export" },
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
