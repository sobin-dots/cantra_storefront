# Context Optimization, Anti-Hallucination & Token Reduction Protocol

> **Engineering Rules for High Signal-to-Noise Ratio and Efficient Agent Operations**

---

## 1. Token Reduction & Context Hygiene

To prevent context rot and reduce token consumption:

1. **Avoid Knowledge Dumps:**
   - Never dump entire files or multi-page documentation into conversational responses.
   - Use progressive disclosure: reference specific files using clickable links (`[filename](file:///path)`).
2. **Minimal & Targeted Edits:**
   - Use `replace_file_content` with narrow, contiguous snippets instead of re-writing whole files whenever possible.
   - Do not re-output entire existing code blocks in assistant messages; reference diffs or summaries.
3. **Never Re-Summarize Artifacts in Chat:**
   - After creating/updating `implementation_plan.md` or `walkthrough.md`, point the user directly to the artifact rather than pasting a duplicate markdown summary.

---

## 2. Preventing Context Degradation ("Context Rot")

Context rot occurs when context fills with stale, conflicting, or conversational noise:

- **Plan → Execute → Verify Cycle:**
  - Break tasks into self-contained units.
  - Test and verify each step immediately.
- **Ground Truth Verification:**
  - Before making assumptions about project structure, APIs, or installed packages, inspect `package.json` or run `view_file` / `list_dir`.
  - Never guess file paths or exported function signatures.

---

## 3. Eliminating Hallucinations

1. **Explicit Grounding:**
   - Every code modification must map to an existing, verified file in the workspace.
   - Do not fabricate npm dependencies, non-existent Tailwind utility classes, or hallucinated third-party SDKs.
2. **Strict Abstention:**
   - If user requirements are ambiguous or missing key specifications, do not guess or fabricate business logic—ask or document open questions in the implementation plan.
3. **Type Safety & Build Verification:**
   - Always verify changes via `npx tsc --noEmit` and Next.js build before declaring completion.
