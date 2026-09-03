import React from "react";
import Link from "next/link";
import {
  Zap,
  ShieldCheck,
  Smartphone,
  BarChart3,
  CalendarCheck,
  FileCheck2,
  Workflow,
  ArrowRight,
  Clock,
  Sparkles,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export function FeatureGrid() {
  const features = [
    {
      icon: Zap,
      badge: "Automation",
      badgeVariant: "brand" as const,
      title: "Intelligent Contractor Dispatch",
      description:
        "Automatically assign the right subcontractor based on geolocation, trade certifications, historical quality score, and insurance validity.",
      highlight: "Reduces dispatch lag from hours to under 30 seconds.",
      href: "/features#dispatch",
    },
    {
      icon: ShieldCheck,
      badge: "Compliance",
      badgeVariant: "emerald" as const,
      title: "Automated Warranty Verification",
      description:
        "Instantly parse builder warranty clauses and manufacturer limits to eliminate out-of-pocket costs and determine liability in real time.",
      highlight: "Stops 100% of expired or unauthorized warranty claims.",
      href: "/features#warranty",
    },
    {
      icon: Smartphone,
      badge: "Client Experience",
      badgeVariant: "purple" as const,
      title: "Self-Service Homeowner Portal",
      description:
        "Empower clients to submit photo-documented tickets, schedule convenient service windows, track contractor ETA, and digitally sign off.",
      highlight: "Boosts homeowner CSAT scores by up to 45%.",
      href: "/features#portal",
    },
    {
      icon: BarChart3,
      badge: "Intelligence",
      badgeVariant: "brand" as const,
      title: "Real-Time SLA & Quality Telemetry",
      description:
        "Live heatmaps of contractor performance, resolution turnaround times, warranty repeat rates, and real-time vendor scorecard benchmarks.",
      highlight: "Full auditability for executive and risk stakeholders.",
      href: "/features#sla",
    },
    {
      icon: CalendarCheck,
      badge: "Scheduling",
      badgeVariant: "amber" as const,
      title: "Smart Calendar & Multi-Trade Sync",
      description:
        "Coordinate multi-step repairs requiring sequential trades (e.g., plumbing inspection followed by drywall and paint) with zero overlap.",
      highlight: "Eliminates contractor scheduling collisions.",
      href: "/features#scheduling",
    },
    {
      icon: FileCheck2,
      badge: "Audit Ready",
      badgeVariant: "emerald" as const,
      title: "Digital Proof of Completion",
      description:
        "Capture geotagged before/after photos, subcontractor signoffs, and digital client signatures timestamped for complete legal protection.",
      highlight: "Bank-grade audit trail stored securely in cloud.",
      href: "/features#audit",
    },
  ];

  return (
    <section id="features" className="py-24 relative" aria-labelledby="features-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="glow" size="md">
            <Sparkles className="w-3.5 h-3.5 mr-1 text-blue-400 inline" />
            Engineered For Modern Field Operations
          </Badge>

          <h2 id="features-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Everything You Need to Run High-Precision{" "}
            <span className="gradient-text-brand">Contractor Care</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Say goodbye to disjointed email threads, disconnected phone calls, and manual work logs. Cantracare brings complete automation from initial claim to final homeowner sign-off.
          </p>
        </div>

        {/* 6-Card Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                variant="glass"
                className="flex flex-col justify-between p-7 border-slate-800/80 bg-slate-900/40 hover:bg-slate-900/70 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-600/20 transition-all">
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <Badge variant={feature.badgeVariant} size="sm">
                      {feature.badge}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/60 space-y-3">
                  <p className="text-xs font-medium text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                    {feature.highlight}
                  </p>

                  <Link
                    href={feature.href}
                    className="text-xs font-semibold text-blue-400 group-hover:text-blue-300 flex items-center gap-1 hover:underline pt-1"
                  >
                    <span>Learn technical specs</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
