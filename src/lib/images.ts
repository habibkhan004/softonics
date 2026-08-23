function unsplash(id: string, width = 1200) {
  return `https://images.unsplash.com/photo-${id}?q=80&w=${width}&auto=format&fit=crop`;
}

export const serviceImages: Record<string, string> = {
  "custom-software-development": unsplash("1454165804606-c3d57bc86b40"),
  "web-application-development": unsplash("1522071820081-009f0129c71c"),
  "mobile-app-development": unsplash("1512428813834-c702c7702b78"),
  "ai-machine-learning": unsplash("1620712943543-bcc4688e7485"),
  "seo-digital-growth": unsplash("1551288049-bebda4e38f71"),
  "cloud-devops": unsplash("1544197150-b99a580bb7a8"),
  "ui-ux-design": unsplash("1519389950473-47ba0277781c"),
  "consulting-support": unsplash("1531482615713-2afd69097998"),
};

export const projectImages: Record<string, string> = {
  "vantage-retail-headless-commerce": unsplash("1556742049-0cfed4f6a45d"),
  "helios-robotics-fleet-dashboard": unsplash("1558494949-ef010cbdcc31"),
  "northwind-analytics-loan-decisioning": unsplash("1620121692029-d088224ddc74"),
  "meridian-health-patient-portal": unsplash("1616469829581-73993eb86b02"),
  "brightpath-seo-programmatic": unsplash("1460925895917-afdab827c52f"),
  "cascade-logistics-cloud-migration": unsplash("1581091226825-a6a2a5aee158"),
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
