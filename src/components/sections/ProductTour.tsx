"use client";

import React, { useState } from "react";
import {
  FileText,
  ShieldCheck,
  Send,
  CheckCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

export function ProductTour() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      stepNumber: "01",
      title: "Intake & Visual Documentation",
      icon: FileText,
      tag: "Client Portal",
      description:
        "Homeowners or property managers submit claims via web or mobile app in under 60 seconds, uploading photos and describing issues with guided prompts.",
      metrics: "Instant intake receipt sent via SMS & email",
      previewData: {
        header: "Work Order #CC-9012 Created",
        status: "Pending AI Classification",
        details: "Master Bath Plumbing - Minor Slow Drain & Seal Inspection",
        meta: "Submitted by Sarah Jenkins (Cascade Ridge Lot 42)",
      },
    },
    {
      stepNumber: "02",
      title: "Automated Warranty & Liability Check",
      icon: ShieldCheck,
      tag: "Rule Engine",
      description:
        "Cantracare's policy engine analyzes builder 1-2-10 year warranty guidelines, identifying whether the claim falls under builder warranty or homeowner maintenance.",
      metrics: "Eliminates disputed warranty claims by 94%",
      previewData: {
        header: "Warranty Status: Covered (Year 1 Builder Finish)",
        status: "Liability Assigned: Subcontractor",
        details: "Original Installer: Cascade Plumbing LLC (Warranty valid thru Nov 2027)",
        meta: "Zero builder out-of-pocket required",
      },
    },
    {
      stepNumber: "03",
      title: "Autonomous Contractor Dispatch",
      icon: Send,
      tag: "Geo-Engine",
      description:
        "The system notifies the original installer with full job details, required parts, and schedule options. If unavailable within SLA limits, a backup certified contractor is queued.",
      metrics: "Average dispatch latency: 28 seconds",
      previewData: {
        header: "Contractor Dispatched: Cascade Plumbing",
        status: "Confirmed Window: Tomorrow, 9:00 AM - 11:00 AM",
        details: "Assigned Tech: Mike Ramirez (Badge #812, 5.0 Star)",
        meta: "Calendar invite and client SMS notification dispatched",
      },
    },
    {
      stepNumber: "04",
      title: "Geotagged Verification & Sign-Off",
      icon: CheckCircle,
      tag: "Closure & SLA",
      description:
        "The contractor completes the repair, captures geotagged completion photos, and collects a digital signature. Invoices and warranty logs are finalized automatically.",
      metrics: "100% auditable documentation for risk management",
      previewData: {
        header: "Job Completed & Signed Off",
        status: "Verified Closed • SLA Met (1.8h resolution)",
        details: "Before/After Photos Uploaded • Client Rating: 5/5 Stars",
        meta: "Certificate of Completion generated & archived",
      },
    },
  ];

  return (
    <section className="py-24 relative bg-slate-900/30 border-y border-slate-800/60" aria-labelledby="workflow-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="glow" size="md">
            <Sparkles className="w-3.5 h-3.5 mr-1 text-blue-400 inline" />
            End-to-End Lifecycle
          </Badge>
          <h2 id="workflow-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            How Cantracare Powers Your Entire{" "}
            <span className="gradient-text-brand">Care Workflow</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            From first notification to verified sign-off, every step is automated, auditable, and tracked in real time.
          </p>
        </div>

        {/* Step Navigation Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = activeStep === idx;
            return (
              <button
                type="button"
                key={step.stepNumber}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-blue-600/15 border-blue-500/50 shadow-lg shadow-blue-500/10"
                    : "bg-slate-900/40 border-slate-800/80 hover:bg-slate-800/50 hover:border-slate-700"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-mono font-bold ${isSelected ? "text-blue-400" : "text-slate-500"}`}>
                    STEP {step.stepNumber}
                  </span>
                  <div className={`p-1.5 rounded-lg ${isSelected ? "bg-blue-500/20 text-blue-400" : "bg-slate-800 text-slate-400"}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <h3 className={`text-sm font-bold ${isSelected ? "text-white" : "text-slate-300"}`}>
                  {step.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Active Step Showcase Card */}
        <Card variant="glow" className="p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Description */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-sm text-blue-400 font-bold">
                  STEP {steps[activeStep].stepNumber} OF 04
                </span>
                <Badge variant="brand" size="sm">
                  {steps[activeStep].tag}
                </Badge>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {steps[activeStep].title}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {steps[activeStep].description}
              </p>

              <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-xs text-emerald-300 font-medium flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{steps[activeStep].metrics}</span>
              </div>
            </div>

            {/* Simulated Live UI Preview */}
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-3 font-mono text-xs shadow-inner">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 text-slate-400">
                <span className="text-slate-300 font-semibold">{steps[activeStep].previewData.header}</span>
                <span className="text-[11px] text-blue-400">{steps[activeStep].previewData.status}</span>
              </div>

              <div className="p-3 bg-slate-900/80 rounded-lg text-slate-200 text-xs">
                {steps[activeStep].previewData.details}
              </div>

              <div className="text-[11px] text-slate-400 pt-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                {steps[activeStep].previewData.meta}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
