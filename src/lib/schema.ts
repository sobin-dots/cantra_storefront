import { siteConfig } from "./seo-config";

export const defaultCantraFaqs = [
  {
    question: "What does Cantra Care include?",
    answer:
      "Cantra Care brings together care management, e-MAR, staff and rota management, compliance support and reporting in one platform.",
  },
  {
    question: "Which care settings is Cantra Care designed for?",
    answer:
      "It is purpose-built for residential care homes, nursing homes and mental health care homes.",
  },
  {
    question: "How does role-based access work?",
    answer:
      "Access can be aligned with team responsibilities, helping each person focus on the information and tools relevant to their role.",
  },
  {
    question: "Can Cantra Care support our compliance processes?",
    answer:
      "Cantra Care helps teams organise important records, improve visibility and produce clearer reports. It supports compliance processes but does not replace a provider's responsibility to meet applicable legal and regulatory requirements.",
  },
  {
    question: "How do we get started?",
    answer:
      "The journey follows four clear stages: set up your facility, build care plans, coordinate delivery, then monitor and improve. Book a demo to discuss the right approach for your home.",
  },
  {
    question: "Can we see the platform before deciding?",
    answer:
      "Yes. Request a tailored walkthrough to see the features and dashboard workflows most relevant to your team.",
  },
];

/**
 * Generates Schema.org Organization structured data
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/logo-primary.png`,
      caption: siteConfig.name,
    },
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.addressCountry,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phone,
        contactType: "customer support",
        email: siteConfig.supportEmail,
        availableLanguage: ["en"],
      },
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: siteConfig.salesEmail,
        availableLanguage: ["en"],
      },
    ],
  };
}

/**
 * Generates Schema.org WebSite structured data
 */
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };
}

/**
 * Generates Schema.org SoftwareApplication structured data
 */
export function generateSoftwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${siteConfig.url}/#software`,
    name: siteConfig.name,
    applicationCategory: "HealthCareApplication, BusinessApplication",
    operatingSystem: "Web Browser, iOS, Android, Cloud",
    description: siteConfig.description,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "128",
      bestRating: "5",
      worstRating: "1",
    },
    author: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };
}

/**
 * Generates Schema.org FAQPage structured data
 */
export function generateFaqSchema(items = defaultCantraFaqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/**
 * Generates Schema.org BreadcrumbList structured data
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${siteConfig.url}${item.url}`,
    })),
  };
}

/**
 * Generates Schema.org Article / BlogPosting structured data
 */
export function generateArticleSchema({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  authorName,
  authorUrl,
}: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  authorUrl?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    image,
    datePublished,
    dateModified: dateModified || datePublished,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    author: {
      "@type": "Person",
      name: authorName,
      url: authorUrl || `${siteConfig.url}`,
    },
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };
}
