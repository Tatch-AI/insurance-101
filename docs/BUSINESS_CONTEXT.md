# Business Context — insurance-101

> Part of the Harper estate documentation pass (2026-08). Written for the platform rewrite:
> what this app means to the brokerage, not just how it works. Technical detail lives in
> [ARCHITECTURE.md](./ARCHITECTURE.md); the live map renders with `npx chorograph render .`.

## Where this sits in the brokerage

Harper is a commercial insurance brokerage: revenue is **commission on placed premium**, and
speed-to-quote and placement quality depend on humans knowing coverage, intake, carrier routing,
and service standards. **insurance-101** (branded **Harper University** in the UI) is the
internal training portal for that human knowledge — it does not touch leads, quotes, binds, or
payments.

It serves **every funnel stage indirectly** by training the people who run them:

| Funnel stage | What Harper University teaches |
|---|---|
| Intake | Intake walkthrough videos (security guard, garage, restaurant, workers' comp), Module 13 video, reading on intake mistakes |
| Quoting / placement | Coverage types (GL, E&O, EPLI, D&O, cyber, property), carrier routing logic, quick-market vs E&S appetite |
| Sales | Sales pitch framework, cross-selling, quote presentation on the phone |
| Post-bind service | COI fundamentals, endorsements, cancellations, reinstatements, service SLAs |
| Money | Commission timing (direct vs agency bill), broker fees, chargebacks, premium financing flow |

The primary human workflow is **new-hire onboarding** (sequential learning mode) and **ongoing
reference** (reference mode — browse any module without progress gating). Agents on calls,
intake reps, and service reps use it to learn Harper-specific operations, not generic insurance
101 from a textbook.

## Who and what depends on it

- **Harper employees with `@harperinsure.com` Clerk accounts** — sole audience; external
  sign-ins are blocked in `AuthGate.jsx`.
- **No production services call this app** — it has no HTTP API, no Kafka topics, no shared
  database. Progress is stored in Clerk `unsafeMetadata` (`harper_progress` array of module ids).
- **Google Drive** hosts all training videos (embedded via `drive.google.com/file/d/.../preview`
  iframes); content updates require editing Drive files or `src/modules.js` drive IDs.
- **Ops / L&D** — whoever maintains onboarding curriculum; creators credited in the footer
  (Aarfan Hussain, Ammar Haque).

## Domain concepts taught (not owned by this repo)

This repo **documents** brokerage concepts in JSX reading modules; it does not own submission,
quote, or policy records. Key terms a rewrite engineer sees in the content:

| Term | Meaning in insurance / Harper terms |
|---|---|
| Commission | ~10% of premium paid by carrier to Harper for placing the policy |
| Direct bill vs agency bill | Direct bill: commission ~1 month after issuance; agency bill: commission upfront when customer pays full premium to Harper |
| Broker fee | Fee charged to customer at purchase — earned (upfront) or unearned (monthly) |
| Chargeback | Harper repays commission to carrier when policy cancels early |
| COI | Certificate of Insurance — proof of coverage for landlords/contractors |
| Additional insured (AI) | Extends coverage to a third party — blanket vs specifically listed |
| MEP | Minimum earned premium — non-refundable portion even on early cancel |
| Premium financing | Finance company pays broker → broker pays carrier; customer pays installments |
| Quick market vs E&S | Instant-quote admitted carriers first; surplus lines when appetite exhausted |
| Coterie / Chubb / etc. | Direct carrier partners with Harper-specific routing and endorsement rules |

## Content inventory

22 modules in `src/modules.js`:

- **17 video modules** — intro new-hire training, 12 coverage/intake topics, 4 industry-specific intake walkthroughs
- **4 reading modules** — 101 (fundamentals), 102 (coverage types), 201 (carriers & ops), 202 (sales & account mgmt; JSX in `Module203.jsx` after rename)
- **1 final exam** — 10 random questions from a ~30-question pool, 80% to pass

Legacy unused files: `src/Videos.jsx` (old single-page layout), `src/Quiz.jsx` (standalone quiz page).

## Operational status (2026-07 estate forensics)

**Stale** (matches inventory). Active development through April 2026 (quiz overhaul, intake
videos, reference mode); no commits since 2026-04-13 as of this documentation pass. Still a
usable internal tool if deployed with Clerk keys and static hosting — not load-bearing for
production brokerage flows. Safe to sunset only after confirming another onboarding path exists;
content itself remains valuable reference material.

## Rewrite notes

**Behavior worth preserving if rebuilt:**

- `@harperinsure.com` domain gate on Clerk auth
- Sequential unlock in learning mode vs free reference mode
- Module completion persisted per user (today: Clerk metadata; could move to HRIS/LMS)
- Video + reading + quiz + final exam structure aligned to Harper ops curriculum
- 80% quiz pass threshold and final-exam randomization

**Known debt:**

- Progress in `unsafeMetadata` — no admin reporting, no integration with HR onboarding checklist
- Video hosting on personal/org Google Drive — fragile embed IDs, no Harper CDN
- `Videos.jsx` and `Quiz.jsx` dead code from earlier single-page design
- Module 202 display title vs `Module203.jsx` component name mismatch from rename commit

**Overlap:** Content overlaps informally with internal Notion/docs and call scripts; no sibling
repo duplicates this as a deployable service. `harper-100` is an unrelated empty org marker.
