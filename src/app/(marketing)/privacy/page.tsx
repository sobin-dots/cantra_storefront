import { constructMetadata, siteConfig } from "@/lib/seo-config";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export const metadata = constructMetadata({
  title: "Privacy Policy - Data Protection & Security",
  description:
    "Review Cantracare's privacy policy, data collection standards, GDPR/CCPA compliance, and how we protect customer and contractor information.",
  path: "/privacy",
  noIndex: false,
});

export default function PrivacyPolicyPage() {
  const breadcrumbItems = [{ name: "Privacy Policy", url: "/privacy" }];

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-400">
            Last Updated: January 1, 2026 • {siteConfig.legalName}
          </p>
        </div>

        <div className="space-y-6 text-sm text-slate-300 leading-relaxed pt-6 border-t border-slate-800">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">1. Overview & Commitment</h2>
            <p>
              {siteConfig.legalName} (&quot;Cantracare&quot;, &quot;we&quot;, &quot;our&quot;) is dedicated to safeguarding the privacy and confidential data of our homebuilder clients, trade contractors, and homeowners. This Privacy Policy details the types of information we collect, how it is processed, and your data rights.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">2. Information We Collect</h2>
            <p>
              We collect operational data required to coordinate warranty resolution and contractor dispatch:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-400">
              <li>Account information: Full name, business email address, phone number, and company credentials.</li>
              <li>Field service data: Work order descriptions, defect photos/videos, home address, and property warranty closing dates.</li>
              <li>Subcontractor credentials: Trade license numbers, Certificates of Insurance (COI), and performance telemetry.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">3. How We Use and Protect Data</h2>
            <p>
              Your data is encrypted using 256-bit TLS in transit and AES-256 at rest in SOC2 Type II certified data centers. We never sell customer or homeowner data to third-party advertisers. Data is solely utilized to process work orders, verify warranties, and power real-time SMS notifications.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">4. Contact Privacy Officer</h2>
            <p>
              If you have inquiries regarding your personal data or wish to exercise GDPR/CCPA deletion rights, contact our Data Protection Officer at:{" "}
              <a href={`mailto:${siteConfig.supportEmail}`} className="text-blue-400 hover:underline">
                {siteConfig.supportEmail}
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
