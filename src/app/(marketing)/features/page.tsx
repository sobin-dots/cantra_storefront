import { constructMetadata } from "@/lib/seo-config";
import { generateBreadcrumbSchema, generateSoftwareApplicationSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CtaBanner } from "@/components/sections/CtaBanner";
import {
  Zap,
  ShieldCheck,
  Smartphone,
  BarChart3,
  CheckCircle2,
  Cpu,
  ArrowRight,
  Sparkles,
  Lock,
  Layers,
  Repeat,
  FileCheck,
} from "lucide-react";

export const metadata = constructMetadata({
  title: "Features & Capabilities - Autonomous Contractor Care Platform",
  description:
    "Explore Cantracare's full suite of enterprise features: AI contractor dispatch, 1-2-10 year warranty engine, live homeowner ETA tracking, automated COI verification, and Procore/Salesforce ERP sync.",
  path: "/features",
  keywords: [
    "contractor dispatch automation",
    "warranty tracking software",
    "homeowner portal SaaS",
    "SLA compliance dashboard",
    "COI certificate tracking",
    "construction field software",
  ],
});

export default function FeaturesPage() {
  const breadcrumbItems = [{ name: "Features", url: "/features" }];
  const softwareSchema = generateSoftwareApplicationSchema();

  const featureDeepDives = [
    {
      id: "dispatch",
      badge: "Autonomous Dispatch",
      title: "Intelligent Subcontractor Matching & Geo-Routing",
      description:
        "Instantly assign work orders without picking up the phone. Cantracare's dispatch algorithm considers trade specialty, verified insurance, geographic radius, real-time availability, and past customer quality ratings.",
      bullets: [
        "Sub-30-second automated claim-to-contractor dispatch",
        "Configurable trade rules & preferred subcontractor hierarchy",
        "Automated backup routing if primary contractor fails SLA response window",
        "SMS job notification links requiring zero subcontractor app downloads",
      ],
      icon: Zap,
      accentColor: "blue",
    },
    {
      id: "warranty",
      badge: "Policy Engine",
      title: "1-2-10 Year Builder Warranty Automation",
      description:
        "Protect your profit margins by catching unauthorized claims before they incur costs. Our policy engine verifies home closing dates, trade contractor warranties, and builder obligations automatically.",
      bullets: [
        "Automated coverage determination for Workmanship, Systems, & Structural",
        "Direct liability assignment to responsible trade subcontractors",
        "Historical dispute mitigation with timestamped photos & specs",
        "Manufacturer component warranty limit tracking (HVAC, roofs, appliances)",
      ],
      icon: ShieldCheck,
      accentColor: "emerald",
    },
    {
      id: "portal",
      badge: "Client Care",
      title: "Frictionless Homeowner & Client Care Experience",
      description:
        "Provide homeowners with a modern self-service portal that elevates your brand reputation and eliminates angry escalations.",
      bullets: [
        "Mobile-optimized intake with photo defect capture and guided prompts",
        "Live 2-way SMS updates with contractor arrival ETA tracking",
        "Convenient self-service appointment scheduling and calendar sync",
        "Digital signature capture upon satisfactory work completion",
      ],
      icon: Smartphone,
      accentColor: "purple",
    },
    {
      id: "sla",
      badge: "Telemetry & Governance",
      title: "Real-Time SLA Tracking & Vendor Scorecards",
      description:
        "Gain executive visibility into field operations. Benchmark trade subcontractor velocity, repeat callbacks, customer satisfaction scores, and warranty resolution costs.",
      bullets: [
        "Real-time SLA health dashboard with automated risk escalations",
        "Granular subcontractor performance scorecards and rankings",
        "Exportable audit logs for executive review and insurance underwriters",
        "Automated recurring reports delivered directly to management",
      ],
      icon: BarChart3,
      accentColor: "amber",
    },
  ];

  return (
    <div className="pt-28 pb-20">
      <JsonLd data={softwareSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs items={breadcrumbItems} />

        {/* Page Hero */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <Badge variant="glow" size="md">
            <Sparkles className="w-3.5 h-3.5 mr-1 text-blue-400 inline" />
            Enterprise Feature Suite
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            Engineered to Make Contractor Care{" "}
            <span className="gradient-text-brand">Effortless & Auditable</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Discover the powerful automation engine that eliminates warranty bottlenecks, enforces vendor accountability, and delivers 5-star customer experiences.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button variant="glow" size="lg" href="/contact" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Schedule 1-on-1 Feature Tour
            </Button>
            <Button variant="outline" size="lg" href="/pricing">
              View Pricing & Plans
            </Button>
          </div>
        </div>

        {/* Deep Dive Feature Sections */}
        <div className="space-y-16 pt-8">
          {featureDeepDives.map((feature, idx) => {
            const Icon = feature.icon;
            const isReversed = idx % 2 === 1;

            return (
              <section
                key={feature.id}
                id={feature.id}
                className="scroll-mt-28"
                aria-labelledby={`heading-${feature.id}`}
              >
                <Card
                  variant="glass"
                  className={`p-8 sm:p-12 border-slate-800/80 bg-slate-900/40 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={`lg:col-span-7 space-y-6 ${isReversed ? "lg:order-2" : ""}`}>
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center">
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <Badge variant="brand" size="sm">{feature.badge}</Badge>
                    </div>

                    <h2 id={`heading-${feature.id}`} className="text-2xl sm:text-3xl font-extrabold text-white">
                      {feature.title}
                    </h2>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      {feature.description}
                    </p>

                    <ul className="space-y-2.5 pt-2">
                      {feature.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual Capability Card */}
                  <div className={`lg:col-span-5 ${isReversed ? "lg:order-1" : ""}`}>
                    <div className="p-6 rounded-2xl bg-slate-950/90 border border-slate-800 font-mono text-xs text-slate-300 space-y-4 shadow-2xl">
                      <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-slate-400 text-[11px]">
                        <span className="text-blue-400 font-bold uppercase">System Metric</span>
                        <span className="text-emerald-400">Live Active</span>
                      </div>
                      <div className="p-3 bg-slate-900/90 rounded-lg space-y-2">
                        <div className="flex justify-between text-slate-400">
                          <span>Throughput Efficiency</span>
                          <span className="text-emerald-400 font-bold">+74%</span>
                        </div>
                        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-gradient-to-r from-blue-500 to-emerald-400 h-full w-[88%]" />
                        </div>
                      </div>
                      <p className="text-[11px] text-slate-400">
                        ✓ Fully audited with cryptographic timestamps for risk compliance.
                      </p>
                    </div>
                  </div>
                </Card>
              </section>
            );
          })}
        </div>

        {/* Global CTA */}
        <CtaBanner />
      </div>
    </div>
  );
}
