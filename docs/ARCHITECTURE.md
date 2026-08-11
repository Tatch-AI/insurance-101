# Architecture — insurance-101

> Evidence-based technical map for the Harper University training SPA. Business context in
> [BUSINESS_CONTEXT.md](./BUSINESS_CONTEXT.md). Estate map: `npx chorograph render . --no-open`.

## Stack and deploy

| Piece | Detail |
|---|---|
| Runtime | Browser-only React 19 SPA |
| Build | Vite 6 (`vite build` → `dist/`) |
| Serve | `serve dist -s -l $PORT` (SPA fallback) — static host (Railway-style `PORT` env) |
| Auth | `@clerk/clerk-react` — `VITE_CLERK_PUBLISHABLE_KEY` required at build/runtime |
| Dev server | `vite` on port 3030 (`vite.config.js`) |

No server-side code, no API routes, no background jobs, no Terraform in repo.

## Entrypoints

| Entry | File | Role |
|---|---|---|
| HTML shell | `index.html` | Mounts `#root` |
| Bootstrap | `src/main.jsx` | `ClerkProvider` → `AuthGate` |
| Auth gate | `src/AuthGate.jsx` | Clerk load/sign-in; `@harperinsure.com` email check |
| Sign-in UI | `src/SignInPage.jsx` | Clerk `<SignIn>` component |
| App shell | `src/App.jsx` | Topbar (learning/reference toggle), routes between dashboard / module / exam |
| Dashboard | `src/Dashboard.jsx` | Module grid, progress ring, sequential unlock |
| Module viewer | `src/ModuleDetail.jsx` | Video iframes, lazy reading components, inline `ModuleQuiz` |
| Final exam | `src/FinalExam.jsx` | Randomized exam from `EXAM_POOL` |
| Progress | `src/ProgressContext.jsx` | Clerk `unsafeMetadata.harper_progress` |
| Module registry | `src/modules.js` | All 22 modules — metadata, Drive IDs, quiz arrays |
| Reading content | `src/Module101.jsx`, `Module102.jsx`, `Module201.jsx`, `Module203.jsx` | Static JSX curriculum |
| Styles | `src/App.css` | Full UI |

**Unused legacy:** `src/Videos.jsx`, `src/Quiz.jsx` — not imported by current app tree.

## Client-side "routes" (view state, not HTTP)

`App.jsx` uses `view` state (`dashboard` | `detail`) + `activeModuleId`. No React Router —
all navigation is in-component.

| View | Trigger |
|---|---|
| Dashboard | Default; `goHome()` |
| Module detail | `openModule(id)` — video, reading, or exam |
| Reading quiz | `ModuleDetail` `showQuiz` sub-view |
| Reference mode | `mode === 'reference'` — unlocks all modules, quizzes don't mark complete |

## Data stores

| Store | What | Schema / keys |
|---|---|---|
| Clerk user `unsafeMetadata` | Module completion list | `harper_progress`: `string[]` of module ids (e.g. `r-101`, `v-intro`, `final-exam`) |
| Browser memory | React state | `completed` array mirrored from Clerk on load |
| Google Drive | Video assets | External; referenced by `driveId` in `modules.js` |

No Harper Postgres, no Redis, no S3 in this repo.

## External services

| External | Usage |
|---|---|
| **Clerk** | Authentication, user profile email, metadata persistence via `user.update({ unsafeMetadata })` |
| **Google Drive** | Embedded video playback — `https://drive.google.com/file/d/{driveId}/preview` in sandboxed iframes |

## Events

None emitted or consumed. No Relay/Kafka integration.

## Key flows

### 1. Sign-in and access control

```
main.jsx → ClerkProvider → AuthGate
  → !isSignedIn → SignInPage (Clerk hosted sign-in)
  → isSignedIn && !email.endsWith('@harperinsure.com') → blocked UI
  → ok → ProgressProvider → App
```

### 2. Learning mode progression

```
Dashboard.isUnlocked(mod) → prior module in MODULES order must be complete
  → video: Mark as Watched → markComplete(id) → persist to Clerk
  → reading: Take Quiz → ModuleQuiz 80% pass → markComplete(id)
  → all non-exam modules done → final exam unlocked
  → FinalExam 80% pass → markComplete('final-exam')
```

### 3. Reference mode

User toggles Reference in topbar → `referenceMode` true → all modules unlocked; quizzes
practice-only (no `markComplete` on pass).

### 4. Progress persistence

```
markComplete → setCompleted → persist(next)
  → user.update({ unsafeMetadata: { ...user.unsafeMetadata, harper_progress: next } })
  → errors swallowed (local state still updates)
```

## Config / env

| Variable | Required | Purpose |
|---|---|---|
| `VITE_CLERK_PUBLISHABLE_KEY` | Yes | Clerk frontend key; missing key throws at startup |
| `PORT` | Deploy | `serve` listen port |

See `.env.example`.

## Module ID reference

| ID | Type | Notes |
|---|---|---|
| `v-intro` | video | New hire training |
| `v-1` … `v-13` | video | Coverage and intake topics |
| `it-1` … `it-4` | video | Intake walkthroughs (`group: intake-training`) |
| `r-101`, `r-102`, `r-201`, `r-202` | reading + quiz | Components Module101/102/201/203 |
| `final-exam` | exam | Separate question pool in `FinalExam.jsx` |

## Chorograph map

Owned nodes declared in `chorograph/architecture.ts`. Shared externals in `chorograph/anchor.ts`.
