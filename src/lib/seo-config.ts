import type { Metadata } from "next";

export const siteConfig = {
  name: "Cantra Care",
  legalName: "Cantra Care Ltd.",
  tagline: "Purpose-Built Care Management Software",
  description:
    "Cantra Care helps residential, nursing and mental health care homes manage daily care, medication records (e-MAR), staffing and reporting in one easy-to-use platform.",
  url: "https://cantracare.com",
  ogImage: "https://cantracare.com/og-image.png",
  twitterHandle: "@cantracare",
  supportEmail: "hello@cantra.com",
  salesEmail: "sales@cantra.com",
  partnersEmail: "partners@cantra.com",
  phone: "+44 20 7346 0250",
  address: {
    streetAddress: "Cantra Care Ltd.",
    addressLocality: "London",
    addressRegion: "England",
    postalCode: "WC2N 5DU",
    addressCountry: "GB",
  },
  keywords: [
    "care management software",
    "residential care home software",
    "nursing home e-MAR",
    "mental health care records",
    "care home rota management",
    "care compliance reports",
    "person-centred care software",
    "digital care records UK",
    "care home administration",
  ],
  authors: [
    {
      name: "Cantra Care Clinical & Operations Team",
      url: "https://cantracare.com",
    },
  ],
};

/**
 * Helper to generate page-specific Metadata objects with consistent defaults, canonical URLs, and OpenGraph tags.
 */
export function constructMetadata({
  title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  path = "",
  noIndex = false,
  keywords = siteConfig.keywords,
}: {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
  noIndex?: boolean;
  keywords?: string[];
} = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} - ${siteConfig.tagline}`;
  const canonicalUrl = `${siteConfig.url}${path ? (path.startsWith("/") ? path : `/${path}`) : ""}`;

  return {
    title: fullTitle,
    description,
    keywords,
    authors: siteConfig.authors,
    creator: siteConfig.name,
    publisher: siteConfig.legalName,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${fullTitle} social preview`,
        },
      ],
      locale: "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
      creator: siteConfig.twitterHandle,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
