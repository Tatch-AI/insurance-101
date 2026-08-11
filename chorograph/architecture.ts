// CHOROGRAPH-ARCHITECTURE: this repo's own nodes and edges. React SPA — map declared here as
// free-standing doc comments; each node's prose names the implementing file. Included in both
// the per-repo render and the estate-wide render (unlike anchor.ts).

/**
 * Harper University's internal insurance training SPA — video modules (Google Drive embeds),
 * reading courses 101/102/201/202 with quizzes, final exam, and Clerk-gated @harperinsure.com
 * access. Progress stored in Clerk user unsafeMetadata. Static Vite build served with `serve`.
 * @service insurance-101 in:InternalOps tech:"React 19, Vite 6, static SPA" tags:stale
 */

/**
 * Clerk sign-in gate — only @harperinsure.com emails proceed to training content.
 * src/AuthGate.jsx.
 * @fn auth-gate of:insurance-101
 * @calls Clerk authenticates employees and exposes primary email for domain check
 */

/**
 * Module completion list persisted in Clerk unsafeMetadata key harper_progress.
 * src/ProgressContext.jsx.
 * @fn progress-tracker of:insurance-101
 * @calls Clerk stores completed module ids on the user record for cross-session progress
 */

/**
 * Video modules embed Google Drive preview iframes; reading modules lazy-load JSX curriculum
 * and gate completion behind an 80% quiz pass. src/ModuleDetail.jsx.
 * @fn module-viewer of:insurance-101
 * @calls Google-Drive embedded training video playback via drive preview URLs
 */

/**
 * Training dashboard — sequential unlock in learning mode, free browse in reference mode.
 * src/Dashboard.jsx.
 * @fn dashboard of:insurance-101
 */

/**
 * Final exam — 10 random questions from a ~30-question pool, 80% pass to complete training.
 * src/FinalExam.jsx.
 * @fn final-exam of:insurance-101
 */
