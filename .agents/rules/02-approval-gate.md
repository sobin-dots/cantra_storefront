# User Approval Gate & Change Control Protocol

> **CRITICAL RULE: Zero Unapproved Implementations**

---

## 1. Mandatory Pre-Execution Approval

The agent **MUST NOT** implement, create, redesign, or alter:
- New page routes (e.g. creating a new `/case-studies`, `/solutions`, etc.)
- Major visual overhauls, layout changes, or component restyling
- New conceptual models or feature changes
...**WITHOUT FIRST OBTAINING EXPLICIT USER ACCEPTANCE.**

---

## 2. Planning Protocol Workflow

Before touching any code or making UI changes:

1. **Step 1 - Research & Formulate Plan**:
   - Inspect existing files and user instructions.
   - Draft a clear, actionable `implementation_plan.md` artifact detailing:
     - Exact routes/components affected.
     - Layout wireframe & typography/color alignment.
     - SEO impacts and JSON-LD schema additions.
2. **Step 2 - Request Feedback**:
   - Set `request_feedback: true` in the plan metadata.
   - Highlight any open design questions or alternative approaches.
3. **Step 3 - Hard Stop & Wait**:
   - **DO NOT** proceed to code edits or file creation.
   - Wait for the user to explicitly approve or provide revisions.
4. **Step 4 - Execute with Strict Scope Adherence**:
   - Once approved, implement *only* what was approved in the plan.
   - Any scope deviation requires updating the plan and requesting re-approval.

---

## 3. Forbidden Behaviors

- ❌ Speculatively creating extra pages or routes because "it might be useful".
- ❌ Changing colors, font families, or layout structure without prior approval.
- ❌ Bypassing the plan stage for complex UI or structural tasks.
