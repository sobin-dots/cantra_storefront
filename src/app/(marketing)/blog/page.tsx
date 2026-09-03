import Link from "next/link";
import { constructMetadata } from "@/lib/seo-config";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { blogPosts } from "@/lib/blog-data";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Clock, Calendar, ArrowRight, BookOpen, Sparkles } from "lucide-react";

export const metadata = constructMetadata({
  title: "Insights & Guides - Contractor Care & Warranty Excellence",
  description:
    "Explore the latest industry benchmarks, best practices, and expert guides on automating contractor dispatch, warranty policy compliance, and homeowner customer care.",
  path: "/blog",
  keywords: [
    "contractor care insights",
    "builder warranty best practices",
    "subcontractor dispatch articles",
    "SLA compliance guides",
  ],
});

export default function BlogHubPage() {
  const breadcrumbItems = [{ name: "Blog", url: "/blog" }];

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="glow" size="md">
            <BookOpen className="w-3.5 h-3.5 mr-1 text-blue-400 inline" />
            Knowledge & Resources Hub
          </Badge>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Field Insights, Benchmarks &{" "}
            <span className="gradient-text-brand">Care Playbooks</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg">
            Proven strategies and data-driven analyses to help homebuilders and contractors elevate operational efficiency.
          </p>
        </div>

        {/* Featured Post Card (First Post) */}
        {blogPosts.length > 0 && (
          <Link href={`/blog/${blogPosts[0].slug}`} className="block group">
            <Card variant="glow" className="p-8 sm:p-12 border-blue-500/30 bg-slate-900/60 hover:bg-slate-900/80 transition-all">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="emerald" size="sm">Featured Article</Badge>
                <Badge variant="brand" size="sm">{blogPosts[0].category}</Badge>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-blue-300 transition-colors">
                {blogPosts[0].title}
              </h2>

              <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed max-w-3xl">
                {blogPosts[0].excerpt}
              </p>

              <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-800 text-xs text-slate-400">
                <div className="flex items-center gap-4">
                  <span className="text-white font-medium">{blogPosts[0].author.name}</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {blogPosts[0].date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {blogPosts[0].readingTime}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-blue-400 font-semibold group-hover:translate-x-1 transition-transform">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Card>
          </Link>
        )}

        {/* Remaining Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {blogPosts.slice(1).map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <Card variant="glass" className="h-full p-7 flex flex-col justify-between border-slate-800 bg-slate-900/40 hover:bg-slate-900/70">
                <div className="space-y-3">
                  <Badge variant="brand" size="sm">{post.category}</Badge>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-slate-300 font-medium">{post.author.name}</p>
                    <div className="flex items-center gap-3 text-[11px] text-slate-500">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readingTime}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform shrink-0" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
