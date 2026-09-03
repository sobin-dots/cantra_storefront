import { constructMetadata, siteConfig } from "@/lib/seo-config";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export const metadata = constructMetadata({
  title: "Terms of Service - Cantracare Platform Agreement",
  description:
    "Read the terms, service level agreements (SLA), and acceptable use policies governing the Cantracare contractor care and warranty software platform.",
  path: "/terms",
  noIndex: false,
});

export default function TermsOfServicePage() {
  const breadcrumbItems = [{ name: "Terms of Service", url: "/terms" }];

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Terms of Service
          </h1>
          <p className="text-xs text-slate-400">
            Effective Date: January 1, 2026 • {siteConfig.legalName}
          </p>
        </div>

        <div className="space-y-6 text-sm text-slate-300 leading-relaxed pt-6 border-t border-slate-800">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Cantracare software platform, mobile web portals, and API integrations, you agree to be legally bound by these Terms of Service. If subscribing on behalf of an enterprise or homebuilder organization, you represent that you possess authority to bind said entity.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">2. SaaS Subscription & SLA Commitments</h2>
            <p>
              Cantracare provides high-availability cloud infrastructure with a guaranteed 99.99% monthly service uptime SLA for Growth and Enterprise subscriptions. Service credits are provided in accordance with our Enterprise SLA Schedule in the event of unscheduled downtime.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">3. Contractor & Insurance Verification</h2>
            <p>
              While Cantracare provides automated tooling to verify Certificates of Insurance (COI) and trade licensing status, general contractors remain responsible for final subcontractor credential sign-offs and trade agreement terms.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">4. Intellectual Property & Customer Data Ownership</h2>
            <p>
              All customer work order records, uploaded defect photos, and homeowner communications remain the exclusive intellectual property of the subscribing client. Cantracare claims zero ownership over your proprietary business records.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
