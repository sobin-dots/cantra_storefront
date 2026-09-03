"use client";

import React, { useState } from "react";
import { Check, Sparkles, ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

export function PricingCards() {
  const [isAnnual, setIsAnnual] = useState(true);

  const tiers = [
    {
      name: "Starter",
      description: "Ideal for boutique builders & independent general contractors.",
      monthlyPrice: 49,
      annualPrice: 39,
      popular: false,
      features: [
        "Up to 15 Active Subcontractor accounts",
        "Homeowner intake web portal",
        "Basic warranty clause tracking",
        "Photo & video defect uploads",
        "Email notifications & work order PDFs",
        "Standard business hours support",
      ],
      ctaText: "Start 14-Day Free Trial",
      ctaVariant: "outline" as const,
    },
    {
      name: "Growth",
      badge: "Most Popular",
      description: "For expanding builders & fast-growing field service organizations.",
      monthlyPrice: 129,
      annualPrice: 99,
      popular: true,
      features: [
        "Unlimited Subcontractor accounts",
        "Autonomous AI Contractor Dispatch Engine",
        "Automated 1-2-10 Year Warranty Policy Engine",
        "Live Homeowner 2-Way SMS & Real-Time ETA",
        "Automated COI & License Verification",
        "Geotagged & Digital Sign-off Verification",
        "Multi-trade sequential scheduling",
        "Priority 24/7 SLA Technical Support",
      ],
      ctaText: "Get Started Free",
      ctaVariant: "glow" as const,
    },
    {
      name: "Enterprise",
      description: "For multi-state production homebuilders and national property portfolios.",
      monthlyPrice: 299,
      annualPrice: 239,
      popular: false,
      features: [
        "Everything in Growth tier",
        "Dedicated Enterprise Account Manager",
        "Two-way Procore, Buildertrend & Salesforce Sync",
        "Custom SLA Escalation Workflows & Webhooks",
        "Single Sign-On (SSO / SAML) & RBAC",
        "SOC2 Compliance audit reports & Legal Vault",
        "Custom developer API access & webhooks",
        "Custom tailored onboarding & staff training",
      ],
      ctaText: "Contact Enterprise Sales",
      ctaVariant: "secondary" as const,
    },
  ];

  return (
    <section id="pricing" className="py-24 relative" aria-labelledby="pricing-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <Badge variant="glow" size="md">
            Simple, Transparent Pricing
          </Badge>
          <h2 id="pricing-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Invest in Operational Precision,{" "}
            <span className="gradient-text-brand">Save Thousands in Hours</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            No surprise fees or hidden add-ons. Choose the plan that fits your current operational scale.
          </p>

          {/* Billing Switcher */}
          <div className="pt-6 flex items-center justify-center gap-3">
            <span className={`text-sm font-medium ${!isAnnual ? "text-white" : "text-slate-400"}`}>
              Monthly Billing
            </span>

            <button
              type="button"
              role="switch"
              aria-checked={isAnnual}
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-8 bg-slate-800 rounded-full p-1 transition-colors border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer relative"
            >
              <div
                className={`w-6 h-6 rounded-full bg-blue-500 transition-transform ${
                  isAnnual ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>

            <span className={`text-sm font-medium flex items-center gap-1.5 ${isAnnual ? "text-white" : "text-slate-400"}`}>
              <span>Annual Billing</span>
              <Badge variant="emerald" size="sm">
                Save 20%
              </Badge>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) => {
            const price = isAnnual ? tier.annualPrice : tier.monthlyPrice;

            return (
              <Card
                key={tier.name}
                variant={tier.popular ? "glow" : "glass"}
                className={`flex flex-col justify-between p-8 relative ${
                  tier.popular
                    ? "border-blue-500/50 bg-slate-900/80 shadow-2xl shadow-blue-500/10 lg:-translate-y-2"
                    : "border-slate-800 bg-slate-900/40"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <Badge variant="glow" size="sm" className="px-3 py-1 font-semibold uppercase tracking-wider">
                      <Sparkles className="w-3 h-3 mr-1 inline text-blue-400" />
                      {tier.badge}
                    </Badge>
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
                    <p className="text-xs text-slate-400 mt-2 min-h-[32px] leading-relaxed">
                      {tier.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 font-mono">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white">
                      ${price}
                    </span>
                    <span className="text-xs text-slate-400">
                      / month {isAnnual ? "(billed annually)" : ""}
                    </span>
                  </div>

                  {/* CTA */}
                  <Button
                    variant={tier.ctaVariant}
                    size="md"
                    href="/contact"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                    className="w-full justify-center"
                  >
                    {tier.ctaText}
                  </Button>

                  {/* Feature Checklist */}
                  <div className="pt-6 border-t border-slate-800 space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                      Included Capabilities:
                    </p>
                    <ul className="space-y-2.5 text-xs text-slate-300">
                      {tier.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/60 text-[11px] text-slate-400 text-center">
                  14-day risk-free trial • Cancel anytime
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
