import React from "react";
import { Cpu, Camera, Bell, ShieldCheck, Database, Check } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export function BentoGrid() {
  return (
    <section className="py-20 relative bg-slate-950/40" aria-labelledby="bento-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="purple" size="md">
            Next-Gen Architecture
          </Badge>
          <h2 id="bento-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Built from the Ground Up for{" "}
            <span className="gradient-text-brand">Autonomous Operations</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A cohesive platform combining deep field mechanics with intelligent software algorithms.
          </p>
        </div>

        {/* Bento Box Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Bento Item 1 - Large Span */}
          <Card
            variant="glow"
            className="md:col-span-2 lg:col-span-2 p-8 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="space-y-4 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <Badge variant="brand" size="sm">Autonomous AI Core</Badge>
              <h3 className="text-2xl font-bold text-white">
                Predictive Work Order Triage
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-md">
                Cantracare scans intake descriptions, parses issue severity, and classifies emergency vs cosmetic requests within 2.4 seconds, auto-routing high-risk structural or MEP defects to emergency contractors.
              </p>
            </div>

            <div className="mt-8 p-4 rounded-xl bg-slate-950/80 border border-slate-800 font-mono text-xs text-slate-300 space-y-2 relative z-10">
              <div className="flex items-center justify-between text-slate-500">
                <span>AI Confidence Score</span>
                <span className="text-emerald-400 font-bold">99.2%</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-400 h-full w-[99.2%]" />
              </div>
              <div className="text-[11px] text-slate-400 flex items-center gap-1.5 pt-1">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                Emergency bypass triggered: Master Plumber dispatched
              </div>
            </div>
          </Card>

          {/* Bento Item 2 - AI Vision / Photo Diagnosis */}
          <Card
            variant="glass"
            className="p-8 flex flex-col justify-between border-slate-800/80 bg-slate-900/40"
          >
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
                <Camera className="w-5 h-5" />
              </div>
              <Badge variant="purple" size="sm">Computer Vision</Badge>
              <h3 className="text-xl font-bold text-white">
                Photo & Video Diagnosis
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Homeowners snap photos of defects; Cantracare auto-detects drywall stress cracks, flashing leaks, and finish flaws.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/60 text-xs text-purple-300 font-medium">
              Zero manual triage overhead
            </div>
          </Card>

          {/* Bento Item 3 - Automated Insurance & Compliance */}
          <Card
            variant="glass"
            className="p-8 flex flex-col justify-between border-slate-800/80 bg-slate-900/40"
          >
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <Badge variant="emerald" size="sm">Risk Guard</Badge>
              <h3 className="text-xl font-bold text-white">
                Automated COI Verification
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Blocks dispatch to any subcontractor with lapsed general liability, workers comp, or trade license.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/60 text-xs text-emerald-400 font-medium">
              100% vendor liability compliance
            </div>
          </Card>

          {/* Bento Item 4 - Client SMS & Live Tracking */}
          <Card
            variant="glass"
            className="p-8 flex flex-col justify-between border-slate-800/80 bg-slate-900/40"
          >
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <Bell className="w-5 h-5" />
              </div>
              <Badge variant="amber" size="sm">Instant Updates</Badge>
              <h3 className="text-xl font-bold text-white">
                2-Way Client SMS & ETA
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Keep homeowners informed with automated SMS notifications, live Uber-style contractor ETA maps, and instant rescheduling.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/60 text-xs text-amber-300 font-medium">
              Reduces inbound support calls by 70%
            </div>
          </Card>

          {/* Bento Item 5 - Enterprise ERP / API Sync */}
          <Card
            variant="glass"
            className="md:col-span-2 lg:col-span-3 p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-slate-800/80 bg-slate-900/40"
          >
            <div className="space-y-2 max-w-xl">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                  <Database className="w-4 h-4" />
                </div>
                <Badge variant="brand" size="sm">Enterprise Connectors</Badge>
              </div>
              <h3 className="text-xl font-bold text-white">
                Seamless Two-Way Sync with Procore, Buildertrend & Salesforce
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Bi-directional REST API and Webhooks keep your accounting, enterprise ERP, and CRM systems synchronized in real time with zero duplicate data entry.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:shrink-0">
              {["Procore", "Buildertrend", "Salesforce", "Zapier", "QuickBooks"].map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 rounded-lg bg-slate-950/80 border border-slate-800 text-xs font-semibold text-slate-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
