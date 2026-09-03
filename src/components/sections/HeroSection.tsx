"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Clock,
  TrendingUp,
  Users,
  Activity,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function HeroSection() {
  const [activeTab, setActiveTab] = useState<"overview" | "dispatch" | "sla">("overview");

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden" aria-label="Hero Section">
      {/* Ambient background glow */}
      <div className="ambient-glow-top" />
      <div className="absolute inset-0 ambient-grid pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Release Badge */}
          <div className="inline-flex items-center">
            <Badge variant="glow" size="md" className="py-1 px-4 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 mr-1 text-blue-400 inline" />
              <span>Cantracare 3.0 Live: Autonomous Contractor Dispatch & Warranty AI</span>
            </Badge>
          </div>

          {/* Primary Page Heading (H1) for SEO */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
            Scale Your Contractor Care &{" "}
            <span className="gradient-text-brand">Warranty Resolution</span> with Zero Friction
          </h1>

          {/* Subtitle / Value Proposition */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Eliminate phone tag, missed SLAs, and spreadsheet chaos. Cantracare unifies work orders, contractor verifications, and homeowner care into one intelligent, automated operating system.
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button
              variant="glow"
              size="lg"
              href="/contact"
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto shadow-xl shadow-blue-500/25"
            >
              Start Free 14-Day Pilot
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href="/features"
              leftIcon={<Zap className="w-4 h-4 text-blue-400" />}
              className="w-full sm:w-auto"
            >
              Explore Interactive Tour
            </Button>
          </div>

          {/* Micro-Trust Signals */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              SOC2 Type II Certified
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              No Credit Card Required
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-emerald-400" />
              Under 10-Minute Onboarding
            </span>
          </div>
        </div>

        {/* Live Interactive Product Preview Widget */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="relative rounded-2xl p-2 sm:p-3 bg-gradient-to-b from-slate-700/50 via-slate-800/30 to-slate-900/60 border border-slate-700/60 shadow-2xl backdrop-blur-xl">
            {/* Window Chrome */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800 text-xs text-slate-400">
              <div className="flex items-center space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-3 font-mono text-[11px] text-slate-500 hidden sm:inline">
                  app.cantracare.com/live-telemetry
                </span>
              </div>

              {/* View Switcher */}
              <div className="flex items-center bg-slate-900 rounded-lg p-1 border border-slate-800">
                <button
                  type="button"
                  onClick={() => setActiveTab("overview")}
                  className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                    activeTab === "overview"
                      ? "bg-blue-600 text-white"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Dashboard
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("dispatch")}
                  className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                    activeTab === "dispatch"
                      ? "bg-blue-600 text-white"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Live Dispatch
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("sla")}
                  className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                    activeTab === "sla"
                      ? "bg-blue-600 text-white"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  SLA Health
                </button>
              </div>
            </div>

            {/* Dashboard Content Display */}
            <div className="p-4 sm:p-6 bg-slate-950/90 rounded-xl space-y-6">
              {/* Stat Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Active Work Orders</span>
                    <Activity className="w-4 h-4 text-blue-400" />
                  </div>
                  <div className="text-2xl font-bold text-white mt-1">128</div>
                  <div className="text-[11px] text-emerald-400 flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3" /> +18% resolution velocity
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>SLA Compliance</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-2xl font-bold text-emerald-400 mt-1">99.4%</div>
                  <div className="text-[11px] text-slate-400 mt-1">Target: &gt;98.0%</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Active Contractors</span>
                    <Users className="w-4 h-4 text-purple-400" />
                  </div>
                  <div className="text-2xl font-bold text-white mt-1">42 Teams</div>
                  <div className="text-[11px] text-blue-400 mt-1">100% Certified</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Avg Resolution Time</span>
                    <Clock className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="text-2xl font-bold text-white mt-1">3.2 hrs</div>
                  <div className="text-[11px] text-emerald-400 mt-1">-64% vs Industry Avg</div>
                </div>
              </div>

              {/* Dynamic Mock View */}
              {activeTab === "overview" && (
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                      Recent Automated Care Tickets
                    </span>
                    <span className="text-xs text-emerald-400 flex items-center gap-1 font-mono">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      Live Feed
                    </span>
                  </div>

                  <div className="space-y-2">
                    {[
                      { id: "CC-8942", title: "HVAC Post-Closing Calibration", contractor: "Apex Climate Systems", status: "In Transit", sla: "1 hr remaining", color: "text-blue-400" },
                      { id: "CC-8941", title: "Drywall Touchup & Paint Verification", contractor: "Premier Drywall Pro", status: "Client Signed", sla: "Resolved in 45m", color: "text-emerald-400" },
                      { id: "CC-8940", title: "Plumbing Pressure Test & Warranty Cert", contractor: "Metro Flow Works", status: "Verified Completed", sla: "Resolved in 1.2h", color: "text-emerald-400" },
                    ].map((row) => (
                      <div key={row.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/60 text-xs gap-2">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-slate-500 font-semibold">{row.id}</span>
                          <span className="text-slate-200 font-medium">{row.title}</span>
                        </div>
                        <div className="flex items-center gap-4 text-slate-400 w-full sm:w-auto justify-between sm:justify-start">
                          <span>{row.contractor}</span>
                          <span className={`font-semibold ${row.color}`}>{row.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "dispatch" && (
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-300 font-semibold">
                    <span>Autonomous Geo-Routing & Contractor Matching</span>
                    <Badge variant="brand" size="sm">Smart AI Algorithm</Badge>
                  </div>
                  <p className="text-xs text-slate-400">
                    Matches highest-rated available contractor within a 15-mile radius with trade certifications.
                  </p>
                  <div className="p-3 bg-slate-950/80 rounded-lg border border-blue-500/20 text-xs text-slate-300 font-mono">
                    ✓ Match Found: Vertex Electrical Corp (Score: 98.4%, Distance: 4.2 miles, Insurance Verified: Valid thru 2027)
                  </div>
                </div>
              )}

              {activeTab === "sla" && (
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-300 font-semibold">
                    <span>Real-Time SLA Guarantee & Automated Escalation</span>
                    <Badge variant="emerald" size="sm">Zero Missed Deadlines</Badge>
                  </div>
                  <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-emerald-500 to-blue-500 h-full w-[94%]" />
                  </div>
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Target Resolution: Under 4 Hours</span>
                    <span className="text-emerald-400 font-semibold">Current Avg: 2.1 Hours</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
