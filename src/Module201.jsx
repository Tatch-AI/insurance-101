export default function Module201() {
  return (
    <>
      {/* ══════════════════ 201 / BILLING & ROUTING ══════════════════ */}
      <section className="section" id="billing-routing">
        <span className="section-num">201 / BILLING &amp; ROUTING</span>
        <h2 className="section-title">Billing Paths &amp; Routing Logic</h2>
        <p className="section-desc">Every policy follows one of two billing paths. The routing decision determines speed, cost, complexity, and the customer experience.</p>

        <h3 className="sub-title">Routing Decision Framework</h3>
        <p style={{ fontSize: '.84rem', color: 'var(--text2)', marginBottom: '.8rem' }}>Every account follows this routing sequence. The goal is to resolve at the earliest possible step.</p>

        <div className="flow">
          <div className="flow-n coral">Industry Type</div>
          <div className="flow-a">→</div>
          <div className="flow-n blue">Carrier Specialty</div>
          <div className="flow-a">→</div>
          <div className="flow-n violet">State Requirements</div>
          <div className="flow-a">→</div>
          <div className="flow-n green">Quick Market</div>
          <div className="flow-a">→</div>
          <div className="flow-n orange">E&amp;S (Last Resort)</div>
        </div>

        <div className="deep info">
          <div className="deep-title">Routing Rule: Quick Markets First</div>
          <div className="deep-body">
            Always exhaust quick-market carriers (Next, Coterie, Hiscox, Progressive, Thimble) before routing to E&amp;S. Quick markets deliver instant or same-day quotes with better coverage and no surplus line taxes. E&amp;S is the <span className="hl-coral">last resort</span> — used only when the admitted market cannot accommodate the risk.
          </div>
        </div>

        <h3 className="sub-title">Quick Market vs E&amp;S Comparison</h3>
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>Factor</th><th>Quick Market (Admitted)</th><th>E&amp;S (Non-Admitted)</th></tr>
            </thead>
            <tbody>
              <tr><td className="hl">Quote Speed</td><td>Instant to same-day</td><td>24–48+ hours</td></tr>
              <tr><td className="hl">Taxes &amp; Fees</td><td>None</td><td>Surplus lines taxes always apply</td></tr>
              <tr><td className="hl">Cancellation</td><td>Minimal cost</td><td>25% MEP, non-refundable</td></tr>
              <tr><td className="hl">Endorsement Speed</td><td>Minutes to hours</td><td>Days through wholesale broker</td></tr>
              <tr><td className="hl">Broker Layer</td><td>None — direct to carrier</td><td>Wholesale broker required</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="divider" />

      {/* ══════════════════ 201 / DIRECT CARRIERS ══════════════════ */}
      <section className="section" id="direct-carriers">
        <span className="section-num">201 / DIRECT CARRIERS</span>
        <h2 className="section-title">Direct Carriers</h2>
        <p className="section-desc">Direct carriers accept business directly from Harper — no wholesale broker intermediary. Policies are direct bill, coverage is admitted, and turnaround is fast.</p>

        <div className="card-grid cg2" style={{ marginTop: '1.2rem' }}>
          <div className="card" style={{ borderTop: '3px solid var(--green)' }}>
            <span className="badge b-green">QUICK MARKET</span>
            <div className="card-t" style={{ marginTop: '.5rem' }}>Next Insurance</div>
            <div className="card-d">
              GL, BOP, professional liability, cyber, liquor liability, EPLI. <span className="hl-green">Sweet spot: food/beverage, retail, contractors, auto service, daycares.</span> Revenue limit: &lt;$5M. Instant quoting. Endorsements take 60 seconds. Primary quick-market carrier.
            </div>
          </div>
          <div className="card" style={{ borderTop: '3px solid var(--green)' }}>
            <span className="badge b-green">QUICK MARKET</span>
            <div className="card-t" style={{ marginTop: '.5rem' }}>Coterie</div>
            <div className="card-d">
              Writes <span className="hl-green">everything under the sun</span> — gyms, restaurants, salons, you name it. Instant quotes for GL, BOP, WC. <span className="hl-coral">Warning:</span> Name changes require cancel/rewrite. Additional insured must be added before binding or it's a 3–5 day endorsement.
            </div>
          </div>
          <div className="card" style={{ borderTop: '3px solid var(--blue)' }}>
            <span className="badge b-blue">SPECIALTY</span>
            <div className="card-t" style={{ marginTop: '.5rem' }}>AmTrust</div>
            <div className="card-d">
              Strong WC and GL appetite. Handles restaurants and broad range of class codes including hospitality and light manufacturing. Now with 50-state access — underutilized by Harper. Need to use them more.
            </div>
          </div>
          <div className="card" style={{ borderTop: '3px solid var(--orange)' }}>
            <span className="badge b-orange">WC ONLY</span>
            <div className="card-t" style={{ marginTop: '.5rem' }}>Employers</div>
            <div className="card-d">
              <span className="hl-orange">Workers' comp exclusively.</span> No GL, no other lines. Talk to them about anything else and "they'll tell you to go fly a kite." National WC leader. First call for WC-only needs.
            </div>
          </div>
          <div className="card" style={{ borderTop: '3px solid var(--violet)' }}>
            <span className="badge b-violet">PREMIUM</span>
            <div className="card-t" style={{ marginTop: '.5rem' }}>Chubb</div>
            <div className="card-d">
              <span className="hl-blue">Top cyber writer in the nation.</span> Also writes management liability, professional liability, packages. Currently marketplace access only (not full direct appointment). Need $50K premium volume for full appointment. They handle servicing, signing, COIs, billing.
            </div>
          </div>
          <div className="card" style={{ borderTop: '3px solid var(--green)' }}>
            <span className="badge b-green">COMMERCIAL AUTO</span>
            <div className="card-t" style={{ marginTop: '.5rem' }}>Progressive</div>
            <div className="card-d">
              Primary commercial auto carrier. <span className="hl-orange">Georgia only for direct.</span> Other states through CoverForce integration. Fast quoting. Familiar brand for customers.
            </div>
          </div>
          <div className="card" style={{ borderTop: '3px solid var(--green)' }}>
            <span className="badge b-green">ALL 50 STATES</span>
            <div className="card-t" style={{ marginTop: '.5rem' }}>Thimble</div>
            <div className="card-d">
              GL/BOP, professional liability, cyber — <span className="hl-green">all 50 states</span>. Instant quoting. On-demand and short-term coverage. Good for freelancers, events, seasonal businesses. Daily or monthly terms available.
            </div>
          </div>
          <div className="card" style={{ borderTop: '3px solid var(--blue)' }}>
            <span className="badge b-blue">SPECIALTY</span>
            <div className="card-t" style={{ marginTop: '.5rem' }}>USLI</div>
            <div className="card-d">
              Admitted AND non-admitted depending on state. Some states: direct bill. Other states: routed through First Connect (Shannon/Kathy) because they're non-admitted and must file taxes/fees. Cross-checks revenue across brokers — <span className="hl-coral">flags discrepancies</span>.
            </div>
          </div>
          <div className="card" style={{ borderTop: '3px solid var(--violet)' }}>
            <span className="badge b-violet">DAYCARE SPECIALIST</span>
            <div className="card-t" style={{ marginTop: '.5rem' }}>Markel</div>
            <div className="card-d">
              <span className="hl-green">Primarily daycares for Harper.</span> Has broader appetite but not built into Big Brother's routing yet. Also strong in camps, fitness, social services. Acts as carrier and MGA with delegated authority programs.
            </div>
          </div>
        </div>

        <div className="deep warn" style={{ marginTop: '1.2rem' }}>
          <div className="deep-title">Appetites Change Daily</div>
          <div className="deep-body">
            Carrier appetites are constantly evolving. Example: "Blitz emailed us — they're now writing car detailers and windshield repair shops. We can quote in 5–10 minutes." When a new appetite opens, the rates are at their best early. Hammer it, build the book, then move on. Always stay current on what each carrier will write.
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ══════════════════ 201 / MGAs & E&S ══════════════════ */}
      <section className="section" id="mgas-es">
        <span className="section-num">201 / MGAs &amp; E&amp;S</span>
        <h2 className="section-title">MGAs, Wholesale Brokers &amp; E&amp;S</h2>
        <p className="section-desc">When the admitted market can't accommodate a risk, Harper routes through managing general agents and wholesale brokers to access the E&amp;S market. These are billion-dollar premium brokers.</p>

        <div className="arch" style={{ marginTop: '1.2rem' }}>
          <div className="arch-row"><div className="arch-box ext">Customer</div></div>
          <div className="arch-arrow">↓</div>
          <div className="arch-row"><div className="arch-box primary">Harper (Retail Agent)</div></div>
          <div className="arch-arrow">↓</div>
          <div className="arch-row"><div className="arch-box warn">Wholesale Broker / MGA<small>RT Specialty, RPS, AmWINS, etc.</small></div></div>
          <div className="arch-arrow">↓</div>
          <div className="arch-row"><div className="arch-box data">E&amp;S Carrier<small>Kinsale, Atlantic Casualty, etc.</small></div></div>
        </div>

        <h3 className="sub-title">MGA &amp; Wholesale Broker Partners</h3>
        <div className="card-grid cg3">
          <div className="card">
            <span className="badge b-orange">WHOLESALE</span>
            <div className="card-t" style={{ marginTop: '.5rem' }}>RT Specialty</div>
            <div className="card-d">Specializes in <span className="hl">restaurants, bars, security guards</span>. RT Connector division auto-creates binder documents. Primary E&amp;S submission partner for Harper.</div>
          </div>
          <div className="card">
            <span className="badge b-orange">WHOLESALE</span>
            <div className="card-t" style={{ marginTop: '.5rem' }}>RPS</div>
            <div className="card-d"><span className="hl">Garage specialization</span> for Harper. Full-service wholesale brokerage. Property, casualty, and professional lines. Goes to Atlantic Casualty, Kinsale for placements.</div>
          </div>
          <div className="card">
            <span className="badge b-orange">WHOLESALE</span>
            <div className="card-t" style={{ marginTop: '.5rem' }}>AmWINS</div>
            <div className="card-d">One of the largest nationally. <span className="hl-coral">Stopped GL with Harper</span> due to poor turnaround times. Still used for other lines. Deep carrier relationships.</div>
          </div>
          <div className="card">
            <span className="badge b-violet">PORTAL</span>
            <div className="card-t" style={{ marginTop: '.5rem' }}>First Connect</div>
            <div className="card-d">Portal access to <span className="hl-green">Next, Coterie, Hiscox</span>. Also handles USLI in states where they're non-admitted (Shannon/Kathy). MGA with binding authority for certain classes.</div>
          </div>
          <div className="card">
            <span className="badge b-orange">WHOLESALE</span>
            <div className="card-t" style={{ marginTop: '.5rem' }}>CRC Group</div>
            <div className="card-d">Major brokerage option for complex placements. Excess liability, environmental, construction. Use for hard-to-place risks that others have declined.</div>
          </div>
        </div>

        <div className="deep danger" style={{ marginTop: '1.2rem' }}>
          <div className="deep-title">Kinsale — Option of Last Resort</div>
          <div className="deep-body">
            Kinsale writes anything and everything, but: they slap on <span className="hl-coral">$20K quotes</span> with heavy exclusions and minimum earned premiums. Making changes is "an absolute pain." They <strong>never return money</strong> — policy cancels? Bye. Missed an audit? Bye. Messed up a renewal audit from last year? Big trouble. Pitch Integrity, Atlantic Casualty, anything else before Kinsale. Literally last resort.
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ══════════════════ 201 / APPETITE GUIDE ══════════════════ */}
      <section className="section" id="appetite-guide">
        <span className="section-num">201 / APPETITE GUIDE</span>
        <h2 className="section-title">Carrier Appetite &amp; Specialty Map</h2>
        <p className="section-desc">Knowing which carrier to route to — and why — is the difference between a same-day bind and a 3-day wait. Sales must know this like clockwork.</p>

        <div className="table-wrap" style={{ marginTop: '1.2rem' }}>
          <table>
            <thead>
              <tr><th>Carrier</th><th>Type</th><th>Primary Lines</th><th>Appetite Highlights</th></tr>
            </thead>
            <tbody>
              <tr><td className="hl">Next</td><td><span className="badge b-green">Direct</span></td><td>GL, BOP, PL, Cyber, EPLI</td><td>Small business &lt;$5M. Food/bev, retail, contractors, daycares. Instant quoting.</td></tr>
              <tr><td className="hl">Coterie</td><td><span className="badge b-green">Direct</span></td><td>GL, BOP, WC</td><td>Writes everything — gyms, restaurants, salons. Add AI before bind.</td></tr>
              <tr><td className="hl">AmTrust</td><td><span className="badge b-blue">Direct</span></td><td>WC, GL</td><td>Restaurants, hospitality, light manufacturing. 50-state access.</td></tr>
              <tr><td className="hl">Employers</td><td><span className="badge b-orange">Direct</span></td><td>WC only</td><td>Workers' comp exclusively. National leader. No other lines.</td></tr>
              <tr><td className="hl">Chubb</td><td><span className="badge b-violet">Direct</span></td><td>Cyber, PL, Package</td><td>#1 cyber writer nationally. Marketplace access, need $50K for full appointment.</td></tr>
              <tr><td className="hl">Progressive</td><td><span className="badge b-green">Direct</span></td><td>Comm. Auto</td><td>Commercial auto. GA direct, CoverForce for other states.</td></tr>
              <tr><td className="hl">Thimble</td><td><span className="badge b-green">Direct</span></td><td>GL, PL, Cyber</td><td>All 50 states. On-demand, short-term. Freelancers, events.</td></tr>
              <tr><td className="hl">Markel</td><td><span className="badge b-violet">MGA</span></td><td>GL, PL, Specialty</td><td>Daycares, camps, fitness, social services.</td></tr>
              <tr><td className="hl">USLI</td><td><span className="badge b-blue">Carrier</span></td><td>GL, PL, Specialty</td><td>Admitted/non-admitted by state. Cross-checks revenue across brokers.</td></tr>
              <tr><td className="hl">RT Specialty</td><td><span className="badge b-orange">Wholesale</span></td><td>All E&amp;S</td><td>Restaurants, bars, security. RT Connector for binders.</td></tr>
              <tr><td className="hl">RPS</td><td><span className="badge b-orange">Wholesale</span></td><td>Garages, Casualty</td><td>Garage specialization for Harper. Atlantic Casualty, Kinsale.</td></tr>
              <tr><td className="hl">First Connect</td><td><span className="badge b-violet">Portal</span></td><td>Varies</td><td>Portal access to Next, Coterie, Hiscox. USLI non-admitted states.</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="sub-title">Routing Quick-Reference</h3>
        <div className="rule-block">
          <div className="rule-item"><span className="rule-num">1</span><span className="rule-text"><strong>Identify the industry</strong> — Main street (restaurant, retail, professional) or specialty (security, bars, group homes)?</span></div>
          <div className="rule-item"><span className="rule-num">2</span><span className="rule-text"><strong>Match to carrier specialty</strong> — WC only? Employers/Guard. Daycare? Markel. Pro services? Hiscox. Small biz &lt;$5M? Next.</span></div>
          <div className="rule-item"><span className="rule-num">3</span><span className="rule-text"><strong>Confirm state eligibility</strong> — Is the carrier admitted in the customer's state? Monopolistic WC states? USLI admitted or non-admitted?</span></div>
          <div className="rule-item"><span className="rule-num">4</span><span className="rule-text"><strong>Try quick market first</strong> — Run instant quotes through Next, Coterie, Hiscox, Progressive, Thimble. If a quote comes back, pitch same-day.</span></div>
          <div className="rule-item"><span className="rule-num">5</span><span className="rule-text"><strong>E&amp;S only if all else fails</strong> — Document declinations. Submit through RT Specialty, RPS, or AmWINS. Set customer expectations.</span></div>
        </div>
      </section>

      <div className="divider" />

      {/* ══════════════════ 201 / SERVICE OPERATIONS ══════════════════ */}
      <section className="section" id="service-ops">
        <span className="section-num">201 / SERVICE OPS</span>
        <h2 className="section-title">Service Operations</h2>
        <p className="section-desc">The five major service request types, each with distinct workflows depending on direct bill vs agency bill.</p>

        <div className="steps" style={{ marginTop: '1.2rem' }}>
          <div className="step">
            <div className="step-num">1</div>
            <div className="step-content">
              <div className="step-title">Certificates of Insurance (COIs)</div>
              <div className="step-desc">Must be accurate — limits, details, certificate holders. Team processes 30+ collectively per day. <span className="hl-green">Target: issued within 5 minutes.</span> Direct carriers: generate from portal. E&amp;S: coordinate with broker.</div>
            </div>
          </div>
          <div className="step">
            <div className="step-num">2</div>
            <div className="step-content">
              <div className="step-title">Endorsements</div>
              <div className="step-desc">Name changes, address updates, adding/removing coverage. <span className="hl">Direct carriers: &lt;24 hours.</span> Next: 60 seconds. Coterie: cancel/rewrite for name changes. <span className="hl-coral">MGAs: days through multiple layers.</span> Every carrier has different endorsement guidelines.</div>
            </div>
          </div>
          <div className="step">
            <div className="step-num green-n">3</div>
            <div className="step-content">
              <div className="step-title">Reinstatements</div>
              <div className="step-desc">Direct carriers: significantly easier. MGAs: complex process — 1–2 payments required, no-loss document, carrier approval. <span className="hl-coral">Not guaranteed</span> — carrier can decline.</div>
            </div>
          </div>
          <div className="step">
            <div className="step-num orange-n">4</div>
            <div className="step-content">
              <div className="step-title">Cancellation Contact Consistency</div>
              <div className="step-desc"><span className="hl-coral">15+ contact attempts</span> per customer (calls, texts, emails). Must contact ALL pending cancellations equally. If you call 3 out of 4, the one you missed can sue Harper for not being notified. Consistency = legal protection.</div>
            </div>
          </div>
          <div className="step">
            <div className="step-num blue-n">5</div>
            <div className="step-content">
              <div className="step-title">Upstream Error Correction</div>
              <div className="step-desc">Fixing mistakes from intake, mid funnel, or sales — wrong class codes, incorrect revenue, missing coverage, wrong effective dates. Service catches it all and works backwards through the chain.</div>
            </div>
          </div>
        </div>

        <h3 className="sub-title">Turnaround: Direct Carrier vs MGA/E&amp;S</h3>
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>Request Type</th><th>Direct Carrier</th><th>MGA / E&amp;S</th></tr>
            </thead>
            <tbody>
              <tr><td className="hl">COI Issuance</td><td>5 minutes</td><td>Same day to 1–2 business days</td></tr>
              <tr><td className="hl">Simple Endorsement</td><td>Minutes to hours</td><td>3–5 business days</td></tr>
              <tr><td className="hl">Complex Endorsement</td><td>Same day</td><td>5–10 business days</td></tr>
              <tr><td className="hl">Reinstatement</td><td>Same day</td><td>3–7 business days</td></tr>
              <tr><td className="hl">Cancellation</td><td>Same day</td><td>2–5 business days</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="divider" />

      {/* ══════════════════ 201 / SERVICE STANDARDS ══════════════════ */}
      <section className="section" id="service-standards">
        <span className="section-num">201 / STANDARDS</span>
        <h2 className="section-title">Service Mindset &amp; Standards</h2>
        <p className="section-desc">Non-negotiable standards for service operations at Harper. Speed, documentation, and consistency define everything.</p>

        <div className="steps" style={{ marginTop: '1.2rem' }}>
          <div className="step">
            <div className="step-num">1</div>
            <div className="step-content">
              <div className="step-title">Speed Wins</div>
              <div className="step-desc">COIs and binders: <span className="hl-green">5 minutes or less</span>. If you're on the phone and send the DocuSign within 5 minutes, they're signing while still talking to you. Speed is the single biggest differentiator.</div>
            </div>
          </div>
          <div className="step">
            <div className="step-num">2</div>
            <div className="step-content">
              <div className="step-title">Same-Day Completion</div>
              <div className="step-desc">Every request received during business hours: <span className="hl-green">completed the same day</span>. Nothing sits overnight unless blocked by external carrier/broker action. By EOD, everything is either blocked or completed — never "in progress."</div>
            </div>
          </div>
          <div className="step">
            <div className="step-num green-n">3</div>
            <div className="step-content">
              <div className="step-title">Big Brother Auto-Documentation</div>
              <div className="step-desc">Every email, text, phone call is <span className="hl">automatically documented in Big Brother CRM</span>. Typical agencies manually drag-and-drop every email into files. Harper doesn't have to. Use that time advantage to be more efficient.</div>
            </div>
          </div>
          <div className="step">
            <div className="step-num orange-n">4</div>
            <div className="step-content">
              <div className="step-title">No Priority Jumping</div>
              <div className="step-desc">Customer calls 10 times stomping their feet? They wait in the queue like everyone else. Deescalate: "Thank you, I'll put a rush on it." Pick up the ticket yourself since you have the contact. <span className="hl-coral">Consistency protects the team and the company.</span></div>
            </div>
          </div>
          <div className="step">
            <div className="step-num blue-n">5</div>
            <div className="step-content">
              <div className="step-title">Escalate System Issues Immediately</div>
              <div className="step-desc">Tickets not generating? Revenue tab broken? Emails not flowing? <span className="hl-blue">Flag it to engineering immediately.</span> Don't work around it silently. A system problem that affects one agent affects all agents.</div>
            </div>
          </div>
        </div>

        <div className="card-grid cg3" style={{ marginTop: '1.2rem' }}>
          <div className="card" style={{ borderTop: '3px solid var(--accent)', textAlign: 'center' }}>
            <div style={{ fontSize: '1.4rem', marginBottom: '.4rem' }}>⚡</div>
            <div className="card-t">Speed Over Perfection</div>
            <div className="card-d">A 95% correct COI in 5 minutes beats a 100% perfect one tomorrow. Get it out, then refine.</div>
          </div>
          <div className="card" style={{ borderTop: '3px solid var(--green)', textAlign: 'center' }}>
            <div style={{ fontSize: '1.4rem', marginBottom: '.4rem' }}>📋</div>
            <div className="card-t">Document Everything</div>
            <div className="card-d">If it's not in Big Brother, it didn't happen. CRM notes are your best defense.</div>
          </div>
          <div className="card" style={{ borderTop: '3px solid var(--blue)', textAlign: 'center' }}>
            <div style={{ fontSize: '1.4rem', marginBottom: '.4rem' }}>⚖️</div>
            <div className="card-t">Process Is Protection</div>
            <div className="card-d">Same process for every customer — regardless of policy size or attitude — keeps Harper compliant.</div>
          </div>
        </div>
      </section>
    </>
  )
}
