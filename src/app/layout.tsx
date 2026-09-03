import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/globals.css";
import { constructMetadata } from "@/lib/seo-config";
import { generateOrganizationSchema, generateWebSiteSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["500", "600", "700", "800", "900"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#0B4F43",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();
  const webSiteSchema = generateWebSiteSchema();

  return (
    <html lang="en" className={`${playfairDisplay.variable} ${plusJakartaSans.variable}`}>
      <head>
        {/* Organization & WebSite Structured Data */}
        <JsonLd data={organizationSchema} />
        <JsonLd data={webSiteSchema} />
      </head>
      <body className="bg-[#EFF3F3] text-[#465C59] min-h-screen flex flex-col antialiased selection:bg-[#0B4F43] selection:text-[#EFF3F3]">
        {/* Skip Navigation Link for Accessibility & SEO */}
        <a href="#main-content" className="skip-nav">
          Skip to main content
        </a>

        {/* Main Content Landmark */}
        <main id="main-content" className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
