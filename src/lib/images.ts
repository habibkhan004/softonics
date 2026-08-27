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

export const projectImages: Record<string, string> = {
  "vantage-retail-headless-commerce": unsplash("1556742049-0cfed4f6a45d"),
  "helios-robotics-fleet-dashboard": unsplash("1558494949-ef010cbdcc31"),
  "northwind-analytics-loan-decisioning": unsplash("1620121692029-d088224ddc74"),
  "meridian-health-patient-portal": unsplash("1616469829581-73993eb86b02"),
  "brightpath-seo-programmatic": unsplash("1460925895917-afdab827c52f"),
  "cascade-logistics-cloud-migration": unsplash("1581091226825-a6a2a5aee158"),
};

export const projectGalleries: Record<string, { url: string; caption: string }[]> = {
  "vantage-retail-headless-commerce": [
    { url: unsplash("1483985988355-763728e1935b"), caption: "Mobile storefront after the headless replatform" },
    { url: unsplash("1556741533-6e6a62bdcc1f"), caption: "Semantic search results on a collection page" },
    { url: unsplash("1441986300917-64674bd600d8"), caption: "Peak-season merchandising dashboard" },
  ],
  "helios-robotics-fleet-dashboard": [
    { url: unsplash("1485827404703-89b55fcc595e"), caption: "Live fleet map with anomaly overlays" },
    { url: unsplash("1518770660439-4636190af475"), caption: "Telemetry playback for a regional incident" },
    { url: unsplash("1504384308090-c894fdcc538d"), caption: "Ops center rollout in the third region" },
  ],
  "northwind-analytics-loan-decisioning": [
    { url: unsplash("1551288049-bebda4e38f71"), caption: "Analyst workspace with model explanations" },
    { url: unsplash("1460925895917-afdab827c52f"), caption: "Audit trail linking decisions to policy docs" },
    { url: unsplash("1454165804606-c3d57bc86b40"), caption: "Hybrid rules + ML underwriting pipeline" },
  ],
  "meridian-health-patient-portal": [
    { url: unsplash("1576091160399-112ba8d25d1d"), caption: "Patient home with upcoming visits" },
    { url: unsplash("1516575538188-4d0e12bf61a6"), caption: "In-app telehealth session" },
    { url: unsplash("1584515933487-779824d29309"), caption: "Clinic staff console used during beta" },
  ],
  "brightpath-seo-programmatic": [
    { url: unsplash("1434030216411-0b7c2763d0c5"), caption: "Generated program landing pages" },
    { url: unsplash("1456513080800-7d1b2e31c0f4"), caption: "Internal linking and schema preview" },
    { url: unsplash("1501504905252-473c47e087f8"), caption: "Core Web Vitals monitoring board" },
  ],
  "cascade-logistics-cloud-migration": [
    { url: unsplash("1451187580459-43490279c0fa"), caption: "Kubernetes topology after cutover" },
    { url: unsplash("1517430816045-df4b7de11d1d"), caption: "CI/CD pipeline replacing manual deploys" },
    { url: unsplash("1494412574291-17d85f79c8bb"), caption: "Peak-season autoscaling during shipping week" },
  ],
};

export const blogImages: Record<string, string> = {
  "core-web-vitals-seo-2026": unsplash("1460925895917-afdab827c52f"),
  "rag-vs-fine-tuning": unsplash("1620712943543-bcc4688e7485"),
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
