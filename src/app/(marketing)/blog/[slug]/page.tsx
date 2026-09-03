import { notFound } from "next/navigation";
import Link from "next/link";
import { constructMetadata, siteConfig } from "@/lib/seo-config";
import { generateArticleSchema } from "@/lib/schema";
import { blogPosts } from "@/lib/blog-data";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Calendar, Clock, ArrowLeft, ArrowRight, UserCheck, Share2, Sparkles } from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return constructMetadata({ title: "Article Not Found", noIndex: true });
  }

  return constructMetadata({
    title: `${post.title} - Cantracare Insights`,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const breadcrumbItems = [
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${post.slug}` },
  ];

  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.excerpt,
    url: `${siteConfig.url}/blog/${post.slug}`,
    image: `${siteConfig.url}/og-image.png`,
    datePublished: post.date,
    authorName: post.author.name,
    authorUrl: `${siteConfig.url}/about`,
  });

  return (
    <article className="pt-28 pb-20">
      {/* Article Schema.org structured data */}
      <JsonLd data={articleSchema} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Breadcrumb Hierarchy */}
        <Breadcrumbs items={breadcrumbItems} />

        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to all insights</span>
        </Link>

        {/* Article Header */}
        <header className="space-y-4">
          <div className="flex items-center gap-2">
            <Badge variant="brand" size="sm">{post.category}</Badge>
            <span className="text-xs text-slate-500">•</span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
            <span className="text-xs text-slate-500">•</span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readingTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed italic border-l-2 border-blue-500 pl-4">
            {post.excerpt}
          </p>

          {/* Author Byline (E-E-A-T signal) */}
          <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center font-bold text-white text-sm">
              {post.author.name.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-bold text-white flex items-center gap-1">
                {post.author.name}
                <UserCheck className="w-3.5 h-3.5 text-blue-400" />
              </p>
              <p className="text-xs text-slate-400">{post.author.role}</p>
            </div>
          </div>
        </header>

        {/* Article Body */}
        <div className="space-y-6 text-slate-200 text-base sm:text-lg leading-relaxed pt-6 border-t border-slate-800">
          {post.content.map((paragraph, index) => (
            <p key={index} className="text-slate-300">
              {paragraph}
            </p>
          ))}
        </div>

        {/* In-Article Action Box */}
        <Card variant="glow" className="p-8 my-10 bg-slate-900/80 border-blue-500/30 text-center space-y-4">
          <Badge variant="glow" size="sm">
            <Sparkles className="w-3.5 h-3.5 mr-1 inline text-blue-400" />
            Put These Principles Into Practice
          </Badge>
          <h2 className="text-2xl font-bold text-white">
            See How Cantracare Automates This Entire Workflow
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Book a personalized 15-minute demo to see live AI dispatch, automated 1-2-10 warranty validation, and instant homeowner tracking.
          </p>
          <div className="pt-2">
            <Button variant="glow" size="md" href="/contact" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Request Live Demo
            </Button>
          </div>
        </Card>
      </div>
    </article>
  );
}
