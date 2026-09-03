# Cantracare Agent Directives & Operational Rules

> **Primary Operating Contract for AI Agents working on the Cantracare Storefront Codebase**

---

## 1. Project & Tech Stack Identity

- **Product:** **Cantracare** — Intelligent Care Management & Operations SaaS.
- **Framework:** Next.js 15+ (App Router, Server Components by default, SSR/SSG ready).
- **Styling:** Tailwind CSS v4 (`@tailwindcss/postcss`, CSS-first `@theme` in `src/styles/globals.css`).
- **Icons & Helpers:** `lucide-react`, `clsx`, `tailwind-merge`.

---

## 2. Mandatory Core Directives (Non-Negotiable)

### 🔴 Directive 1: User Approval Gate (Zero Speculative Creation)
- **Rule:** **Never implement new pages, layout redesigns, or new conceptual features without prior explicit user acceptance.**
- **Workflow:** For any structural or visual change:
  1. Formulate an `implementation_plan.md` artifact.
  2. Request review (`request_feedback: true`).
  3. **STOP** and wait for explicit user approval before writing code.
- *Detailed spec:* See [`.agents/rules/02-approval-gate.md`](file:///d:/workspace/3Dots/final-website/.agents/rules/02-approval-gate.md).

### 📏 Directive 2: Strict File Size Limit & Component Modularity
- **Hard Limit:** **No single code or style file may exceed 350–450 lines of code.**
- **Enforcement:**
  - Break monolithic pages down into isolated, single-responsibility components under `src/components/sections/` or `src/components/ui/`.
  - Extract reusable types, schemas, and static data arrays into `src/lib/`.
  - Keep page files (`page.tsx`) lean orchestration shells (<100 lines).
- *Detailed spec:* See [`.agents/rules/05-file-size-and-modularity.md`](file:///d:/workspace/3Dots/final-website/.agents/rules/05-file-size-and-modularity.md).

### 🎨 Directive 3: Human-Centric UI & Exact Color System
- **Strict Color Tokens (DO NOT USE OTHER COLORS):**
  - **Light Background:** `#EFF3F3`
  - **Dark Background:** `#0B4F43`
  - **Body Text:** `#465C59`
  - **Surface & Glass Accents:** Derived exclusively from this green/sage/mint palette.
- **Typography:**
  - **Headings & Hero Serif:** Google Font **`Playfair Display`** (`serif`, font-weight `600–900`).
  - **Body & Controls:** **`Plus Jakarta Sans`** or **`Inter`** (`sans-serif`).
- **Human-Centric UI Patterns:**
  - Floating elevated cards with real team avatars, conversational threads, and status indicators.
  - Asymmetrical editorial layouts, soft ambient shadows, and smooth micro-interactions.
  - *Layout references:* [signal-2026-09-01-12-32-44-245_002.png](file:///d:/workspace/3Dots/final-website/src/public/signal-2026-09-01-12-32-44-245_002.png) and [signal-2026-09-01-12-29-38-018_002.png](file:///d:/workspace/3Dots/final-website/src/public/signal-2026-09-01-12-29-38-018_002.png) (Use composition structure only; do NOT copy colors).
- *Detailed spec:* See [`.agents/rules/01-ui-design-system.md`](file:///d:/workspace/3Dots/final-website/.agents/rules/01-ui-design-system.md).

### 🚀 Directive 4: High-Standard On-Page & Technical SEO
- **Single H1 per route** matching targeted search intent.
- **Metadata API:** Export unique title templates, descriptions, canonical URLs, and OpenGraph/Twitter cards on every route.
- **JSON-LD Schema.org:** Server-rendered structured data (`Organization`, `WebSite`, `SoftwareApplication`, `FAQPage`, `BreadcrumbList`, `Article`).
- **Crawlability:** Dynamic `sitemap.ts` and `robots.ts` configured for major web and AI search bots.
- **Core Web Vitals:** Zero layout shift (CLS < 0.1), LCP < 2.5s, font optimization via `next/font/google`.
- *Detailed spec:* See [`.agents/rules/03-seo-protocol.md`](file:///d:/workspace/3Dots/final-website/.agents/rules/03-seo-protocol.md).

### ⚡ Directive 5: Token Reduction, Context Preservation & Zero Hallucinations
- **Keep it Lean:** Treat instructions as machine directives. Avoid verbose boilerplate and knowledge dumps.
- **Prevent Context Rot:** Plan → Execute → Verify in atomic steps. Do not re-output entire files in chat.
- **Ground Truth:** Verify actual files with `view_file` or `list_dir` before modifying code. Never guess imports or dependencies.
- **Explicit Abstention:** If requirements are ambiguous, clarify or document in the plan rather than speculating.
- *Detailed spec:* See [`.agents/rules/04-token-and-context-management.md`](file:///d:/workspace/3Dots/final-website/.agents/rules/04-token-and-context-management.md).

---

## 3. Modular Supporting Rules Index

| Rule Document | Scope |
| :--- | :--- |
| [`.agents/rules/01-ui-design-system.md`](file:///d:/workspace/3Dots/final-website/.agents/rules/01-ui-design-system.md) | Colors (`#EFF3F3`, `#0B4F43`, `#465C59`), `Playfair Display`, human-centric UI |
| [`.agents/rules/02-approval-gate.md`](file:///d:/workspace/3Dots/final-website/.agents/rules/02-approval-gate.md) | Mandatory pre-execution user acceptance gate |
| [`.agents/rules/03-seo-protocol.md`](file:///d:/workspace/3Dots/final-website/.agents/rules/03-seo-protocol.md) | Next.js Metadata, JSON-LD Schema, Semantic HTML, Sitemap/Robots |
| [`.agents/rules/04-token-and-context-management.md`](file:///d:/workspace/3Dots/final-website/.agents/rules/04-token-and-context-management.md) | Token efficiency, anti-hallucination, context rot mitigation |
| [`.agents/rules/05-file-size-and-modularity.md`](file:///d:/workspace/3Dots/final-website/.agents/rules/05-file-size-and-modularity.md) | Strict 350–450 line file cap & component-based architecture |
