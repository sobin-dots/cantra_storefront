import React from "react";
import { constructMetadata } from "@/lib/seo-config";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ContactSection } from "@/components/sections/ContactSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateOrganizationSchema } from "@/lib/schema";
import { HeroHeader } from "@/components/sections/hero/HeroHeader";
import { SiteFooter } from "@/components/sections/SiteFooter";

export const metadata = constructMetadata({
  title: "Contact Us & Request a Demo | Cantra Care",
  description:
    "Get in touch with Cantra Care. Schedule a live demonstration of our care management, e-MAR, and rota scheduling platform.",
  path: "/contact",
});

export default function ContactPage() {
  const breadcrumbItems = [{ name: "Contact & Demo", url: "/contact" }];
  const orgSchema = generateOrganizationSchema();

  return (
    <div className="bg-[#EFF3F3] text-[#465C59] min-h-screen selection:bg-[#0B4F43] selection:text-[#EFF3F3]">
      <JsonLd data={orgSchema} />

      <HeroHeader />

      <div className="pt-28 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      <ContactSection />

      <SiteFooter />
    </div>
  );
}
