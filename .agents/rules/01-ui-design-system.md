# UI & Human-Centric Design System

> **Mandatory Visual & Aesthetic Contract for Cantracare**

---

## 1. Exact Color Palette (Strict Enforcement)

Never invent or pull colors from screenshots. ONLY use the following calibrated color tokens:

| Token Name | Hex Code | Role & Usage |
| :--- | :--- | :--- |
| **`bg-light`** | `#EFF3F3` | Primary Light Background, soft ambient canvases, clean cards |
| **`bg-dark`** | `#0B4F43` | Primary Dark Background, deep forest hero panels, contrast cards |
| **`body-text`** | `#465C59` | Primary Body Text, secondary labels, muted readable descriptions |
| **`surface-white`** | `#FFFFFF` | Crisp elevated floating card surfaces |
| **`surface-dark`** | `#083B32` | Nested dark surfaces & elevated containers |
| **`border-light`** | `rgba(70, 92, 89, 0.15)` | Subtle borders for light mode panels |
| **`border-dark`** | `rgba(239, 243, 243, 0.12)` | Subtle borders for dark mode glassmorphism |
| **`accent-active`**| `#107565` | Active interactive states, links, hover fills |

---

## 2. Typography Hierarchy

- **Headings & Hero Serif:** Google Font **`Playfair Display`** (`serif`, font-weight `600`, `700`, `800`, `900`).
  - Imparts editorial elegance, craftsmanship, and human warmth.
  - Used for `h1`, `h2`, `h3`, hero value statements, and key metric callouts.
- **Body & Functional UI:** **`Plus Jakarta Sans`** or **`Inter`** (`sans-serif`, font-weight `400`, `500`, `600`).
  - High-legibility micro-copy, badges, data tables, and interactive inputs.

---

## 3. Human-Centric UI & Composition Patterns

Inspired by the reference layout structures (`signal-2026-09-01-12-32-44-245_002.png` and `signal-2026-09-01-12-29-38-018_002.png`):

1. **Floating Interactive Preview Cards**:
   - Elevated cards with soft, multi-layered shadows (`0 20px 40px -15px rgba(11, 79, 67, 0.12)`).
   - Conversational snippets, collaborator avatars, status indicators (`Active`, `Verified`), and live work order feeds.
2. **Editorial Asymmetrical Layouts**:
   - Left: Bold `Playfair Display` typography + human value proposition + pill badges + dual CTAs.
   - Right: Overlapping multi-card product mockups displaying real humans, trade crews, and chat/dispatch threads.
3. **Micro-Interactions & Tactile Controls**:
   - Rounded pill buttons (`rounded-full` or `rounded-2xl`).
   - Smooth accordion transitions with active step highlighting and progress bars.
   - Subtle glassmorphic cards with `backdrop-blur-md` and calibrated borders.

---

## 4. CSS-First Design Token Definitions (Tailwind v4)

```css
@theme {
  --font-serif: "Playfair Display", Georgia, serif;
  --font-sans: "Plus Jakarta Sans", var(--font-sans), system-ui, sans-serif;

  --color-bg-light: #EFF3F3;
  --color-bg-dark: #0B4F43;
  --color-text-body: #465C59;
  --color-forest-900: #083B32;
  --color-forest-800: #0B4F43;
  --color-forest-700: #107565;
  --color-forest-600: #17937F;
  --color-forest-100: #E2ECEB;
  --color-forest-50: #EFF3F3;
}
```
