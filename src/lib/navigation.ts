export interface NavItem {
  name: string;
  href: string;
  description?: string;
  isExternal?: boolean;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export const mainNavItems: NavItem[] = [
  { name: "Features", href: "/features", description: "Explore the core automation and care capabilities" },
  { name: "Pricing", href: "/pricing", description: "Flexible tiers for teams of all sizes" },
  { name: "About", href: "/about", description: "Our mission to revolutionize contractor care" },
  { name: "Blog", href: "/blog", description: "Insights, industry standards, and guides" },
  { name: "Contact", href: "/contact", description: "Get in touch or book a live product demo" },
];

export const footerNavGroups: NavGroup[] = [
  {
    title: "Product",
    items: [
      { name: "Contractor Dispatch", href: "/features#dispatch" },
      { name: "Warranty Tracking", href: "/features#warranty" },
      { name: "Client Care Portal", href: "/features#portal" },
      { name: "SLA Telemetry", href: "/features#sla" },
      { name: "Pricing & Plans", href: "/pricing" },
    ],
  },
  {
    title: "Solutions",
    items: [
      { name: "Homebuilders & Developers", href: "/features#homebuilders" },
      { name: "General Contractors", href: "/features#contractors" },
      { name: "Property Managers", href: "/features#property" },
      { name: "Enterprise Portfolios", href: "/pricing#enterprise" },
    ],
  },
  {
    title: "Resources & SEO Hub",
    items: [
      { name: "Contractor Care Playbook", href: "/blog/contractor-care-playbook" },
      { name: "SLA Compliance Benchmark", href: "/blog/sla-compliance-benchmark" },
      { name: "ROI Calculator", href: "/pricing#roi-calculator" },
      { name: "All Articles", href: "/blog" },
    ],
  },
  {
    title: "Company",
    items: [
      { name: "About Cantracare", href: "/about" },
      { name: "Careers", href: "/about#careers" },
      { name: "Contact & Demo", href: "/contact" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  },
];
