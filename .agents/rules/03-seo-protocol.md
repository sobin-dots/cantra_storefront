# High-Standard Technical & On-Page SEO Protocol

> **Non-Compromising Rules for Search Engine Crawlability, Rich Snippets, and Core Web Vitals**

---

## 1. Page-Level Metadata & Canonical Enforcement

Every route in the Next.js App Router must export a complete `Metadata` object:
- **Title Tag:** Optimized with primary intent (`%s | Cantracare - Contractor & Care Management SaaS`).
- **Meta Description:** 140–160 characters describing unique page value.
- **Canonical URLs:** Absolute self-referencing canonical URL (`alternates.canonical`) to eliminate duplicate content indexing.
- **OpenGraph & Twitter Cards:** Full metadata (`og:title`, `og:description`, `og:image`, `twitter:card="summary_large_image"`).
- **Robots Directives:** Explicit `index: true, follow: true, max-image-preview: "large"`.

---

## 2. Structured Data (Schema.org JSON-LD) Standards

All JSON-LD must be server-rendered, strictly typed, and match visible on-page content:

| Page / Route | Mandatory Schema.org Types |
| :--- | :--- |
| **Global Layout** | `Organization`, `WebSite` (+ `SearchAction`) |
| **Home / Features** | `SoftwareApplication` (+ `OperatingSystem`, `offers`, `aggregateRating`) |
| **Pricing** | `Product`, `OfferCatalog`, `AggregateOffer` |
| **Blog Listing** | `CollectionPage`, `BreadcrumbList` |
| **Blog Article** | `BlogPosting` / `Article` (+ `author`, `publisher`, `datePublished`, `dateModified`) |
| **FAQs (any page)** | `FAQPage` (strictly matching visible question & answer accordion items) |
| **All Subpages** | `BreadcrumbList` matching visual breadcrumbs |

---

## 3. Semantic HTML & Accessibility Hierarchy

1. **Heading Structure:** Strictly **one single `<h1>`** per route representing the primary search intent.
2. **Heading Nesting:** `<h2>` for major sections, `<h3>` for cards/features. Never skip levels (`h1` -> `h3`).
3. **Semantic Tags:** Wrap content in `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`.
4. **Accessible Landmarks:**
   - Hidden skip-to-content link: `<a href="#main-content" className="skip-nav">Skip to main content</a>`.
   - Descriptive `aria-label` or `aria-labelledby` attributes on `<nav>`, `<section>`, and `<dialog>`.
5. **Image Optimization:** Always specify explicit `width`, `height`, `alt` tags, and AVIF/WebP formats.

---

## 4. Technical Crawl & Indexing Infrastructure

- **Dynamic Sitemap:** `src/app/sitemap.ts` listing all canonical URLs with `lastModified`, `changeFrequency`, and `priority`.
- **Dynamic Robots:** `src/app/robots.ts` allowing standard bots (Googlebot, Bingbot, GPTBot) with proper disallow rules.
- **Web App Manifest:** `src/app/manifest.ts` providing PWA metadata signals.
- **Core Web Vitals:**
  - LCP < 2.5s (Preconnect Google Fonts, zero heavy unoptimized assets).
  - CLS < 0.1 (Stable element sizing, font-display: swap).
  - INP < 200ms (Lightweight client JS, zero main-thread blocking).
