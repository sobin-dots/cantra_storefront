# File Size Limit & Component Modularity Protocol

> **Mandatory Rule: Maximum 350–450 Lines per File via Component-Based Architecture**

---

## 1. Absolute Line Count Threshold

- **Hard Ceiling:** **No code, TypeScript, React component, or style file may exceed 350–450 lines.**
- **Target Ideal:** 50–200 lines per component file.
- **Rationale:** Prevents context degradation, eliminates AI hallucination in long files, enables targeted diff editing, and ensures maintainable component reuse.

---

## 2. Component-Based Architectural Standards

To ensure strict compliance with the file limit:

1. **Pages as Orchestrators (`page.tsx` < 100 lines):**
   - Page files (`src/app/**/page.tsx`) must only compose high-level section components and supply route metadata / JSON-LD schemas.
   - Do NOT write inline section layouts or giant markup blobs inside `page.tsx`.

2. **Section Components (`src/components/sections/`):**
   - Each landing page section belongs in its own dedicated, focused file:
     - `HeroZone.tsx`
     - `PlatformSection.tsx`
     - `FeatureSection.tsx`
     - `EmarSection.tsx`
     - `CareSettingsSection.tsx`
     - `WhyCantraSection.tsx`
     - `SupportSection.tsx`
     - `RolesSection.tsx`
     - `FaqSection.tsx`
     - `CtaSection.tsx`
     - `ContactSection.tsx`
     - `SiteFooter.tsx`

3. **Data & Schema Decoupling (`src/lib/`):**
   - Static copy arrays, mock data, and schema definitions must reside in `src/lib/` or feature data files rather than clogging component files.

4. **Refactoring Trigger:**
   - Whenever any file approaches 350 lines, immediately split it into child components or sub-modules before adding further code.
