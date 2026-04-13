export default function Module101() {
  return (
    <>
      {/* ══════════════════ 101 / HOW HARPER MAKES MONEY ══════════════════ */}
      <section className="section" id="how-harper-works">
        <span className="section-num">101 / BUSINESS MODEL</span>
        <h2 className="section-title">How Harper Makes Money</h2>
        <p className="section-desc">Harper generates revenue through exactly two channels. Understanding this is the foundation for everything else.</p>

        <div className="card-grid cg2" style={{ marginTop: '1.2rem' }}>
          <div className="card" style={{ borderTop: '3px solid var(--green)' }}>
            <div className="card-t">💰 Commission</div>
            <div className="card-d">
              A percentage of the premium paid by the insurance carrier to Harper for placing the business. Typically <span className="hl-green">~10% of premium</span>. Commission timing depends on whether the policy is direct bill (~1 month after issuance) or agency bill (instant — everything upfront).
            </div>
          </div>
          <div className="card" style={{ borderTop: '3px solid var(--accent)' }}>
            <div className="card-t">🏷️ Broker Fees</div>
            <div className="card-d">
              A fee charged directly to the customer at purchase — <span className="hl-coral">subject to the quote and risk</span>. This is immediate revenue. Broker fees can be structured as <strong>earned</strong> (collected upfront) or <strong>unearned</strong> (spread over monthly payments). Legally required to disclose.
            </div>
          </div>
        </div>

        <div className="deep warn" style={{ marginTop: '1.2rem' }}>
          <div className="deep-title">Chargeback Risk</div>
          <div className="deep-body">
            If a policy cancels early, Harper must <span className="hl-coral">repay the commission</span> to the carrier. Example: customer buys a $1,000 policy on Jan 1 (10% = $100 commission). Policy cancels Jul 1 — Harper owes back $50 for the remaining 6 months. This is why retention matters as much as new sales.
          </div>
        </div>

        <h3 className="sub-title">Lead Acquisition</h3>
        <div className="card-grid cg2">
          <div className="card">
            <div className="card-t">$80–$500</div>
            <div className="card-d">Cost per lead. Must also factor in employee time across intake, mid funnel, sales, and service who touch each lead.</div>
          </div>
          <div className="card">
            <div className="card-t">100% Referral-Based (Traditional)</div>
            <div className="card-d">Traditional agencies get <span className="hl-green">all</span> of their leads from referrals. Harper is venture-backed and pays for lead acquisition at scale — that's why every lead matters and accuracy at every stage is critical.</div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ══════════════════ 101 / CUSTOMER LIFECYCLE ══════════════════ */}
      <section className="section" id="customer-lifecycle">
        <span className="section-num">101 / LIFECYCLE</span>
        <h2 className="section-title">Customer Lifecycle</h2>
        <p className="section-desc">Every account at Harper follows this path. The goal is to get them through cleanly and keep them for 7–9 years.</p>

        <div className="flow" style={{ marginTop: '1.2rem' }}>
          <div className="flow-n coral">Lead</div>
          <div className="flow-a">→</div>
          <div className="flow-n orange">Intake</div>
          <div className="flow-a">→</div>
          <div className="flow-n">Mid Funnel</div>
          <div className="flow-a">→</div>
          <div className="flow-n blue">Sales</div>
          <div className="flow-a">→</div>
          <div className="flow-n green">Service</div>
          <div className="flow-a">→</div>
          <div className="flow-n violet">Renewals</div>
        </div>

        <div className="steps" style={{ marginTop: '1.2rem' }}>
          <div className="step">
            <div className="step-num">1</div>
            <div className="step-content">
              <div className="step-title">Lead → Intake</div>
              <div className="step-desc">Customer comes in. Intake collects all basic information — business name, contact info, what type of coverage they need, landlord requirements. Their only job: get the information and move it forward.</div>
            </div>
          </div>
          <div className="step">
            <div className="step-num orange-n">2</div>
            <div className="step-content">
              <div className="step-title">Mid Funnel → Quoting</div>
              <div className="step-desc">Get the quote — either instant (through direct carrier portals) or submitted to the E&S market. If instant, the IQ team in Pakistan cranks it out. <span className="hl-coral">50% of leads die here</span> due to poor follow-up. This stage must be airtight.</div>
            </div>
          </div>
          <div className="step">
            <div className="step-num blue-n">3</div>
            <div className="step-content">
              <div className="step-title">Sales → Close</div>
              <div className="step-desc">Pitch the quote, handle objections, close the deal. Always try direct bill first before E&S. If customer pays, create bind documents and send to signing.</div>
            </div>
          </div>
          <div className="step">
            <div className="step-num green-n">4</div>
            <div className="step-content">
              <div className="step-title">Service → Maintain</div>
              <div className="step-desc">Handle COIs, endorsements, reinstatements, cancellations, and everything the customer needs. Service is the last line of defense — if it fails, the customer leaves.</div>
            </div>
          </div>
          <div className="step">
            <div className="step-num violet-n">5</div>
            <div className="step-content">
              <div className="step-title">Renewals → Retain</div>
              <div className="step-desc">Ideal retention is <span className="hl-green">7–9 years</span>. At renewal, shop the market, find competitive rates, and keep the customer on the books. Renewals is where profit lives. Lose them in year 1–2, and all acquisition cost was wasted.</div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ══════════════════ 101 / BILLING TYPES ══════════════════ */}
      <section className="section" id="billing-types">
        <span className="section-num">101 / BILLING</span>
        <h2 className="section-title">Policy Types &amp; Billing Structure</h2>
        <p className="section-desc">Every policy is either Direct Bill or Agency Bill. This single distinction affects speed, cost, complexity, and the entire customer experience.</p>

        <div className="table-wrap" style={{ marginTop: '1.2rem' }}>
          <table>
            <thead>
              <tr><th>Attribute</th><th>Direct Bill (DB)</th><th>Agency Bill (AB / E&S)</th></tr>
            </thead>
            <tbody>
              <tr><td className="hl">Payment Flow</td><td>Customer → Carrier directly</td><td>Customer → Harper → Broker → Carrier</td></tr>
              <tr><td className="hl">Quote Speed</td><td>Instant or same-day</td><td>24–48+ hours (broker adds latency)</td></tr>
              <tr><td className="hl">Policy Issuance</td><td>Immediate on bind</td><td>24–48 hours after payment</td></tr>
              <tr><td className="hl">Coverage Quality</td><td>Standard forms, fewer exclusions</td><td>More exclusions, tighter terms</td></tr>
              <tr><td className="hl">Taxes & Fees</td><td>None</td><td>Surplus lines taxes always apply</td></tr>
              <tr><td className="hl">Cancellation</td><td>Easy — $10–20 in fees, quick refund</td><td>Most policies have a 25% minimum earned premium — non-refundable</td></tr>
              <tr><td className="hl">Premium Financing</td><td>Not needed</td><td><strong>Required if not paid in full.</strong> Collect 15% down + set up premium finance agreement (GoTo) for 10 monthly payments</td></tr>
              <tr><td className="hl">Commission</td><td>Broker fees instant; remaining commission ~1 month after issuance</td><td>Instant — everything upfront including commission on the policy</td></tr>
              <tr><td className="hl">Typical Businesses</td><td>Restaurants, UPS stores, accountants</td><td>Bars, security firms, group homes, adult care</td></tr>
            </tbody>
          </table>
        </div>

        <div className="deep danger">
          <div className="deep-title">Agency Bill = Premium Finance Required (Unless Paid in Full)</div>
          <div className="deep-body">
            If the customer is on an agency bill policy and does <strong>not</strong> pay in full, you <strong>must</strong> collect a down payment (typically 15%) and set up a premium finance agreement through GoTo. There is no "bill me later" option — the premium finance company funds the carrier upfront, and the customer repays in 10 monthly installments. <span className="hl-coral">If you skip this step, the policy will not be funded and will not stay active.</span>
          </div>
        </div>

        <div className="deep ok">
          <div className="deep-title">Rule: Always Try Direct Bill First</div>
          <div className="deep-body">
            Direct bill = better product, faster service, happier customer, simpler operations. Only go to E&S (agency bill) when the admitted market cannot accommodate the risk. Main Street America businesses — restaurants, retail, accountants — almost always fit direct bill.
          </div>
        </div>

        <h3 className="sub-title">E&S: When Direct Bill Won't Work</h3>
        <div className="card-grid cg2">
          <div className="card" style={{ borderLeft: '3px solid var(--green)' }}>
            <div className="card-t">Direct Bill — Main Street</div>
            <div className="card-d">
              Standard insurance carriers (Next, Coterie, Progressive, etc.) cover the risk directly. Walking down the road — restaurant, UPS store, Staples, Publix — these all fit here. Standard forms, predictable pricing, no broker layer.
            </div>
          </div>
          <div className="card" style={{ borderLeft: '3px solid var(--red)' }}>
            <div className="card-t">Agency Bill — Complex Risks</div>
            <div className="card-d">
              Group homes, adult care facilities, security companies, bars with heavy liquor — standard carriers won't touch these. Must go through wholesale brokers (RT Specialty, RPS, AmWINS) to access E&S carriers. <span className="hl-coral">Most have a 25% minimum earned premium</span> — even if the customer cancels the next day, that premium is non-refundable. If the customer doesn't pay in full, <strong>you must collect a down payment and set up a premium finance agreement</strong> — this is not optional on agency bill.
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ══════════════════ 101 / REVENUE & RISK ══════════════════ */}
      <section className="section" id="revenue-risk">
        <span className="section-num">101 / REVENUE</span>
        <h2 className="section-title">Revenue Recognition &amp; Risks</h2>
        <p className="section-desc">Understanding when money comes in, when it can be lost, and how premium financing works.</p>

        <h3 className="sub-title">Commission Timing</h3>
        <div className="card-grid cg2">
          <div className="card" style={{ borderTop: '3px solid var(--green)' }}>
            <div className="card-t">Direct Bill Commission</div>
            <div className="card-d">
              <span className="hl-green">Broker fees are instant.</span> The remaining commission is collected but unpaid to us — it takes about <span className="hl-orange">~1 month after the policy is issued</span> for the carrier to pay out.
            </div>
          </div>
          <div className="card" style={{ borderTop: '3px solid var(--orange)' }}>
            <div className="card-t">Agency Bill Commission</div>
            <div className="card-d">
              <span className="hl-green">Instant.</span> We get everything upfront — including the commission on the policy. The only exception: if the broker fee is financed, those broker fees are collected on a monthly basis instead of upfront.
            </div>
          </div>
        </div>

        <h3 className="sub-title">Broker Fee Structure</h3>
        <div className="deep info">
          <div className="deep-title">Earned vs Unearned Broker Fees</div>
          <div className="deep-body">
            <ul>
              <li><strong>Earned Fees:</strong> Collected 100% upfront — immediate revenue. If customer cancels, we keep the broker fee.</li>
              <li><strong>Unearned Fees:</strong> The broker fees are paid to us on a monthly basis. If customer misses payments, we don't get the remaining broker fee.</li>
              <li><strong>Why it matters:</strong> This choice affects cash flow. Earned fees mean more revenue upfront; unearned fees can lower the customer's down payment (making it easier to close the sale) but spread out your revenue over time.</li>
            </ul>
          </div>
        </div>

        <h3 className="sub-title">Premium Financing (Agency Bill Only)</h3>
        <div className="arch">
          <div className="arch-row">
            <div className="arch-box ext">Customer pays 15% down</div>
          </div>
          <div className="arch-arrow">↓</div>
          <div className="arch-row">
            <div className="arch-box primary">Premium finance company pays the broker</div>
          </div>
          <div className="arch-arrow">↓</div>
          <div className="arch-row">
            <div className="arch-box warn">Broker pays the insurance carrier</div>
          </div>
          <div className="arch-arrow">↓</div>
          <div className="arch-row">
            <div className="arch-box data">Customer makes 10 monthly payments to the finance company</div>
          </div>
          <div className="arch-arrow">↓</div>
          <div className="arch-row">
            <div className="arch-box ext">Policy remains active as long as payments continue</div>
          </div>
        </div>

        <div className="deep warn">
          <div className="deep-title">Minimum Earned Premium (MEP) — What It Means</div>
          <div className="deep-body">
            Not all agency-billed policies have a 25% minimum earned premium, but the <span className="hl-coral">majority of them do</span>. MEP means that even if the insured cancels their policy the very next day, they <strong>will not get that premium back</strong>. This is not a trap — it's how E&S carriers protect themselves on risks they've agreed to underwrite. The customer's down payment is typically 15%, which means there's a <strong>10% gap</strong> between the down payment and the MEP. If the customer doesn't make their first monthly payment, the finance company sends them to collections for that difference. <strong>Sales must explain MEP upfront — before the bind, not after.</strong>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ══════════════════ 101 / SALES REQUIREMENTS ══════════════════ */}
      <section className="section" id="sales-requirements">
        <span className="section-num">101 / SALES</span>
        <h2 className="section-title">Sales Process &amp; Requirements</h2>
        <p className="section-desc">What you need to know, collect, and verify before and during every sale.</p>

        <h3 className="sub-title">Subjectivities — Collect Upfront</h3>
        <p style={{ fontSize: '.84rem', color: 'var(--text2)', marginBottom: '.8rem' }}>Subjectivities are requirements from the carrier that must be met to issue the policy. On E&S business, these are critical:</p>

        <div className="card-grid cg3">
          <div className="card"><div className="card-t">📋 Loss Runs</div><div className="card-d">Claims history for the past 3–5 years. If claims exist and mid funnel didn't catch it, the entire quote can change — restarting the process.</div></div>
          <div className="card"><div className="card-t">📜 State Licenses</div><div className="card-d">Required for many industries (security, daycare, auto dealers). Without it, the carrier won't issue.</div></div>
          <div className="card"><div className="card-t">👤 Owner Resumes</div><div className="card-d">Required for professional liability and some specialty classes. Shows experience and qualifications.</div></div>
          <div className="card"><div className="card-t">📝 Due Diligence Forms</div><div className="card-d">State-specific forms required by law. Must be completed accurately and signed.</div></div>
          <div className="card"><div className="card-t">📊 P&L / Financials</div><div className="card-d">Revenue and payroll numbers must be accurate. Underreporting triggers audit bills and collections.</div></div>
          <div className="card"><div className="card-t">🏗️ Surplus Lines Affidavit</div><div className="card-d">For E&S: legal proof that 3+ admitted carriers declined the risk before going to the surplus market.</div></div>
        </div>

        <div className="deep danger" style={{ marginTop: '1.2rem' }}>
          <div className="deep-title">⚠️ Get It Right the First Time</div>
          <div className="deep-body">
            <p>Getting accurate information on the first pass is critical. <span className="hl-coral">Do not let customers understate their revenue.</span> When they underreport, they knock themselves out of quotes they could have qualified for — and the quotes they do get back will be incorrect. This creates rework, delays, and lost deals.</p>
            <p style={{ marginTop: '.5rem' }}>Example: a gas station owner says 15,000 gallons/month — but their Exxon contract requires 40,000 minimum. They went from 15,000 to 42,000 when pressed. <strong>Always verify information with documentation.</strong> If you present incorrect information to the carrier, it's Harper's liability — not the customer's.</p>
          </div>
        </div>

        <div className="deep ok">
          <div className="deep-title">Response Time Is the Differentiator</div>
          <div className="deep-body">
            There are 14,000+ insurance agencies in the US. The difference between Harper and everyone else is speed. Nobody wants to give attention to a $500 policy — but if you do, when that business grows to $20,000+, they're staying with you. A $3,000 limo policy turned into a $1,000,000+ premium customer because of relationship and response time.
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ══════════════════ 101 / SERVICE WORKFLOW ══════════════════ */}
      <section className="section" id="service-workflow-101">
        <span className="section-num">101 / SERVICE</span>
        <h2 className="section-title">Service Workflow</h2>
        <p className="section-desc">What happens after the sale closes — the bind process, document flow, and ongoing service.</p>

        <h3 className="sub-title">The Bind Process (E&S / Agency Bill)</h3>
        <div className="steps">
          <div className="step">
            <div className="step-num">1</div>
            <div className="step-content">
              <div className="step-title">Create Bind Documents</div>
              <div className="step-desc">Applications, finance agreement, quote documents, and all subjectivity items compiled into a package. <span className="hl-green">Target: out within 2 hours</span> of closing the sale. RT Connector auto-creates some documents, but the finance agreement is always manual.</div>
            </div>
          </div>
          <div className="step">
            <div className="step-num">2</div>
            <div className="step-content">
              <div className="step-title">Customer Signs</div>
              <div className="step-desc">Customer receives DocuSign with all documents. They review, sign, and return. This is where delays happen — follow up immediately if not signed same-day.</div>
            </div>
          </div>
          <div className="step">
            <div className="step-num green-n">3</div>
            <div className="step-content">
              <div className="step-title">Harper Signs & Sends Bind Request with Subjectivities</div>
              <div className="step-desc">After customer signs, Harper co-signs and sends the "request to bind" to the broker. <span className="hl-green">Include all subjectivities with the bind request</span> so that it comes back correctly and doesn't create back-and-forth. Three critical checks: <strong>correct effective date</strong>, <strong>all subjectivity documents included</strong>, and <strong>subjectivities attached to the request</strong>.</div>
            </div>
          </div>
          <div className="step">
            <div className="step-num blue-n">4</div>
            <div className="step-content">
              <div className="step-title">Binder Confirmation</div>
              <div className="step-desc">Broker confirms with the insurance carrier. Carrier issues a binder — official confirmation that coverage is in effect. This is the "green light."</div>
            </div>
          </div>
          <div className="step">
            <div className="step-num orange-n">5</div>
            <div className="step-content">
              <div className="step-title">COI Issued & Finance Uploaded</div>
              <div className="step-desc">Certificate of Insurance sent to the customer. Finance agreement uploaded so the premium finance company funds the carrier. Policy is now fully active.</div>
            </div>
          </div>
        </div>

        <h3 className="sub-title">Ongoing Service</h3>
        <div className="card-grid cg2">
          <div className="card">
            <div className="card-t">📄 Certificates of Insurance</div>
            <div className="card-d">Proof of coverage requested by landlords, contractors, and clients. Must be accurate — wrong limits or coverage types create E&O liability. All COIs are double-checked by onshore staff.</div>
          </div>
          <div className="card">
            <div className="card-t">📝 Endorsements</div>
            <div className="card-d">Any change to the policy after issuance: adding coverage, changing names, updating addresses. Every carrier handles endorsements differently. Next: 60 seconds. Coterie: cancel/rewrite. E&S: days through broker.</div>
          </div>
        </div>

        <div className="deep info" style={{ marginTop: '1rem' }}>
          <div className="deep-title">Additional Insured — Know the Difference</div>
          <div className="deep-body">
            <ul>
              <li><strong>Next:</strong> Add after binding — free, instant</li>
              <li><strong>Coterie:</strong> Must add <span className="hl-coral">before binding</span> or face a $250 endorsement fee and 3–5 day wait</li>
              <li><strong>E&S carriers:</strong> Don't always cost money — some include it, but when charged, expect $150–$250+. Processed through broker</li>
            </ul>
            Getting this wrong creates furious customers who thought they had coverage. This is where service catches sales mistakes.
          </div>
        </div>
      </section>
    </>
  )
}
