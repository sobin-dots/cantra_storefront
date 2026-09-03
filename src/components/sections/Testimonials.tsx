import React from "react";
import { Star, Quote, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Before Cantracare, managing 400+ warranty requests across 12 active residential subdivisions was a nightmare of lost paperwork. Cantracare automated our entire subcontractor dispatch and cut our warranty response times by 68%.",
      author: "Marcus Vance",
      role: "VP of Operations",
      company: "Cascade Heritage Homes",
      rating: 5,
      impact: "68% faster resolution",
      tradeVolume: "450 homes / year",
    },
    {
      quote:
        "The automated COI verification and geotagged sign-offs saved us from a $250k bogus structural warranty claim. Everything was logged with timestamped photo proof and verified contractor sign-off. Essential software for any serious homebuilder.",
      author: "Elena Rostova",
      role: "Director of Customer Care",
      company: "Apex Urban Communities",
      rating: 5,
      impact: "$250k liability averted",
      tradeVolume: "800+ units managed",
    },
    {
      quote:
        "Our subcontractors love the mobile portal because they receive instant clear job specs with photos without phone tag. Our homeowner CSAT jumped from 3.6 to 4.9 stars in less than six months.",
      author: "David Chen",
      role: "Managing Partner",
      company: "Vanguard Field Services",
      rating: 5,
      impact: "4.9/5 Homeowner CSAT",
      tradeVolume: "60 active trade crews",
    },
  ];

  return (
    <section className="py-24 relative" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="emerald" size="md">
            Customer Success Stories
          </Badge>
          <h2 id="testimonials-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Loved by Field Operations Leaders &{" "}
            <span className="gradient-text-emerald">Subcontractors Alike</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            See how top homebuilders, general contractors, and care managers transform customer satisfaction with Cantracare.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <Card
              key={item.author}
              variant="glass"
              className="p-7 flex flex-col justify-between border-slate-800 bg-slate-900/40 relative"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" aria-hidden="true" />
                    ))}
                  </div>
                  <Badge variant="emerald" size="sm">
                    {item.impact}
                  </Badge>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 space-y-1">
                <div className="flex items-center gap-1.5">
                  <p className="font-bold text-white text-sm">{item.author}</p>
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" aria-label="Verified Customer" />
                </div>
                <p className="text-xs text-slate-400">
                  {item.role}, <span className="text-slate-300 font-medium">{item.company}</span>
                </p>
                <p className="text-[11px] text-slate-500 font-mono pt-1">
                  Scale: {item.tradeVolume}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
