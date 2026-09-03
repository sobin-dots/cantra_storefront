export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatarUrl?: string;
  };
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "contractor-care-playbook",
    title: "The 2026 Contractor Care & Warranty Operations Playbook",
    excerpt:
      "A comprehensive guide for modern homebuilders and general contractors to eliminate phone tag, protect builder margins, and cut warranty resolution turnaround times by 60%.",
    date: "2026-08-15",
    readingTime: "6 min read",
    category: "Best Practices",
    author: {
      name: "Arthur Sterling",
      role: "CEO & Co-Founder, Cantracare",
    },
    content: [
      "In modern residential and commercial construction, the period following project handover is where builder reputations are forged—or destroyed. Traditional post-construction care is fraught with manual friction: lost work orders, unverified subcontractor insurance, and agonizing delays in scheduling simple repairs.",
      "The true cost of warranty mismanagement is staggering. Industry research shows that manual claim processing averages $85 per ticket in lost labor, administrative phone tag, and redundant contractor truck rolls. When scaled across hundreds of completed units, builder profit margins erode rapidly.",
      "By adopting an automated contractor care operating system, leading homebuilders are seeing transformative results: dispatch latency drops from days to seconds, warranty policy coverage is checked instantly, and homeowners receive Uber-style live ETA tracking directly on mobile.",
      "Key takeaways from our benchmark study include: standardizing digital photo intake, establishing automated 1-2-10 year warranty rules, requiring real-time subcontractor COI verification, and capturing geotagged completion proof.",
    ],
  },
  {
    slug: "sla-compliance-benchmark",
    title: "SLA Compliance Benchmark: How Top Builders Maintain 99%+ Resolution Rates",
    excerpt:
      "Data analysis of over 1.2 million contractor work orders. Learn how top-performing builders enforce subcontractor accountability and prevent costly homeowner disputes.",
    date: "2026-07-28",
    readingTime: "5 min read",
    category: "Data & Telemetry",
    author: {
      name: "Dr. Maya Lin",
      role: "CTO & Co-Founder, Cantracare",
    },
    content: [
      "Service Level Agreements (SLAs) in construction warranty operations are often treated as aspirational goals rather than strictly enforced guarantees. However, analyzing telemetry from 1.2 million completed work orders reveals a clear correlation: builders who enforce automated SLA escalation workflows reduce homeowner escalations by 84%.",
      "The primary bottleneck in field SLA adherence is not subcontractor willingness—it is dispatch latency. When trade contractors receive structured requests with exact defect photos, clear parts requirements, and pre-verified calendar slots, first-time fix rates climb above 92%.",
      "Cantracare's real-time telemetry tracks key metrics across all trade partners: mean time to acknowledge (MTTA), mean time to resolve (MTTR), repeat callback rates, and homeowner satisfaction ratings.",
    ],
  },
  {
    slug: "preventing-disputed-builder-warranties",
    title: "Preventing Disputed Builder Warranties with Timestamped Digital Proof",
    excerpt:
      "How cryptographic timestamps, geotagged before/after photos, and digital sign-offs protect builders from unjustified legal claims and liability disputes.",
    date: "2026-06-12",
    readingTime: "4 min read",
    category: "Risk & Compliance",
    author: {
      name: "Gregory Hayes",
      role: "Head of Customer Care, Cantracare",
    },
    content: [
      "Post-closing defect claims often devolve into a 'he said, she said' dilemma between builders, subcontractors, and property owners. Without timestamped proof of condition, builders frequently pay out of pocket for damage caused by homeowner neglect or post-closing alterations.",
      "By establishing an immutable digital audit trail with geotagged before/after photo evidence and digital homeowner signatures, builders insulate themselves against frivolous litigation while maintaining transparent trust.",
      "Cantracare provides automated proof-of-completion certificates for every closed ticket, archived securely in a tamper-proof cloud vault.",
    ],
  },
  {
    slug: "mastering-subcontractor-coi-verification",
    title: "Automating Subcontractor Insurance (COI) Verification in the Field",
    excerpt:
      "Why manual Certificate of Insurance tracking fails in fast-paced field operations and how autonomous risk gates stop uninsured contractors before they step on site.",
    date: "2026-05-04",
    readingTime: "5 min read",
    category: "Risk & Compliance",
    author: {
      name: "Arthur Sterling",
      role: "CEO & Co-Founder, Cantracare",
    },
    content: [
      "Dispatching a subcontractor with an expired General Liability or Workers' Compensation policy creates massive legal exposure for the general contractor. Yet in busy field environments, office administrators struggle to track hundreds of expiration dates across dozens of trade partners.",
      "Cantracare's automated COI gatekeeper continuously monitors insurance expiration dates, alerts subcontractors 30 days prior to renewal, and automatically halts dispatch if a policy lapses.",
    ],
  },
];
