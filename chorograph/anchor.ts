// CHOROGRAPH-ANCHOR: shared/stub declarations only. Merged estate-wide by chorograph --anchors.
//
// This file lets `npx chorograph render .` pass inside this repo alone. When the whole
// Tatch-AI estate is rendered as one map, every repo's anchor.ts is deleted and replaced by a
// single master anchor, so nothing here may declare a node this repo actually owns — owned
// nodes live in chorograph/architecture.ts.

/**
 * Harper is an AI-forward commercial insurance brokerage. Revenue is commission on placed
 * premium; the platform runs the funnel from lead acquisition through intake, quoting and
 * placement, binding, payment, post-bind servicing, and renewal.
 * @system Harper
 */

/**
 * Internal operations tooling: megabro, product board, dashboards, data labellers, admin/ops
 * UIs, and employee-facing internal apps like training portals.
 * @domain InternalOps
 */

/**
 * Employee authentication — sign-in, session, and per-user metadata for Harper staff.
 * @external Clerk in:Platform
 */

/**
 * Training video hosting — Harper University embeds Drive preview URLs for all video modules.
 * @external Google-Drive in:Quoting
 */

/**
 * Cloud infrastructure, Terraform, SRE, and deployment tooling.
 * @domain Platform
 */

/**
 * Quote generation, submission packets, rules, SKU routing, and placement tooling.
 * @domain Quoting
 */
