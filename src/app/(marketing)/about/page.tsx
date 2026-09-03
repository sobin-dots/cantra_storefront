import { constructMetadata, siteConfig } from "@/lib/seo-config";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CtaBanner } from "@/components/sections/CtaBanner";
import {
  Shield,
  Target,
  HeartHandshake,
  Users,
  Award,
  ArrowRight,
  Sparkles,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

export const metadata = constructMetadata({
  title: "About Us - Our Mission to Modernize Contractor Care",
  description:
    "Learn about Cantracare's mission, leadership team, and our commitment to building the most reliable operating system for contractor care, post-construction warranty, and field operations.",
  path: "/about",
});

export default function AboutPage() {
  const breadcrumbItems = [{ name: "About", url: "/about" }];

  const leadershipTeam = [
    {
      name: "Arthur Sterling",
      role: "Chief Executive Officer & Co-Founder",
      bio: "Former VP of Construction Operations with 18+ years leading multi-state residential homebuilding and warranty risk mitigation.",
      experience: "Ex-Cascade Homes, Stanford MSCE",
    },
    {
      name: "Dr. Maya Lin",
      role: "Chief Technology Officer & Co-Founder",
      bio: "Pioneered distributed scheduling algorithms and predictive field dispatch systems. Former Lead AI Architect at ScaleCloud.",
      experience: "Ph.D. Computer Science (MIT)",
    },
    {
      name: "Gregory Hayes",
      role: "Head of Customer Care & Product",
      bio: "12+ years optimizing subcontractor relationships and homeowner customer satisfaction across 50,000+ completed builds.",
      experience: "Ex-Procore Field Solutions",
    },
  ];

  const values = [
    {
      title: "Field-First Practicality",
      description: "We design software that tradespeople actually want to use in the field on real job sites, not just in air-conditioned offices.",
      icon: Target,
    },
    {
      title: "Radical Accountability",
      description: "Every ticket, timestamp, and warranty policy check is cryptographically verified to eliminate finger-pointing and disputes.",
      icon: Shield,
    },
    {
      title: "Customer Empathy",
      description: "A home is often a client's largest life investment. We treat every warranty request with urgency, care, and transparency.",
      icon: HeartHandshake,
    },
  ];

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Breadcrumbs */}
        <Breadcrumbs items={breadcrumbItems} />

        {/* Page Hero */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <Badge variant="glow" size="md">
            <Sparkles className="w-3.5 h-3.5 mr-1 text-blue-400 inline" />
            Our Mission & E-E-A-T Foundation
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            Bridging the Gap Between Builders, Subcontractors, &{" "}
            <span className="gradient-text-brand">Happy Homeowners</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Cantracare was founded by construction veterans and distributed systems engineers frustrated by manual spreadsheets, angry callbacks, and millions wasted in preventable warranty overhead.
          </p>
        </div>

        {/* Core Values */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <Badge variant="brand" size="sm">Core Principles</Badge>
            <h2 className="text-3xl font-extrabold text-white">What Sets Us Apart</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <Card key={v.title} variant="glass" className="p-8 border-slate-800 bg-slate-900/40 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-400 border border-blue-500/20 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{v.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{v.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Leadership Team (E-E-A-T) */}
        <div className="space-y-8 pt-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <Badge variant="purple" size="sm">Expert Leadership</Badge>
            <h2 className="text-3xl font-extrabold text-white">Built by Industry Veterans</h2>
            <p className="text-sm text-slate-400">
              Decades of combined field experience in residential construction, warranty management, and distributed AI systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leadershipTeam.map((leader) => (
              <Card key={leader.name} variant="subtle" className="p-7 space-y-4 border-slate-800 bg-slate-900/60">
                <div>
                  <h3 className="text-lg font-bold text-white">{leader.name}</h3>
                  <p className="text-xs font-medium text-blue-400 mt-0.5">{leader.role}</p>
                  <p className="text-[11px] text-slate-500 font-mono mt-1">{leader.experience}</p>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{leader.bio}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Corporate Address & Contact Information */}
        <Card variant="glass" className="p-8 border-slate-800 bg-slate-900/50 space-y-6">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-blue-400" />
            <h2 className="text-xl font-bold text-white">Headquarters & Global Reach</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-300">
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">San Francisco HQ</p>
              <p className="mt-1">{siteConfig.address.streetAddress}</p>
              <p>{siteConfig.address.addressLocality}, {siteConfig.address.addressRegion} {siteConfig.address.postalCode}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Direct Contacts</p>
              <p className="mt-1">Support: <a href={`mailto:${siteConfig.supportEmail}`} className="text-blue-400 hover:underline">{siteConfig.supportEmail}</a></p>
              <p>Sales: <a href={`mailto:${siteConfig.salesEmail}`} className="text-blue-400 hover:underline">{siteConfig.salesEmail}</a></p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Telephone</p>
              <p className="mt-1"><a href={`tel:${siteConfig.phone}`} className="text-blue-400 hover:underline">{siteConfig.phone}</a></p>
              <p className="text-xs text-slate-500">Mon-Fri 7am - 7pm PST</p>
            </div>
          </div>
        </Card>

        {/* Global CTA */}
        <CtaBanner />
      </div>
    </div>
  );
}
