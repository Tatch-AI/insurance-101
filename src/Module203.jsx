export default function Module203() {
  return (
    <>
      {/* ══════════════════ 202 / SALES PITCH FRAMEWORK ══════════════════ */}
      <section className="section" id="sales-pitch">
        <span className="section-num">202 / SALES PITCH</span>
        <h2 className="section-title">Sales Process &amp; Pitch Framework</h2>
        <p className="section-desc">The reality class — what happens during the sale, after the sale, the breaks, the edge cases, and the operational gaps. This is how you pitch, close, and hand off.</p>

        <h3 className="sub-title">Pre-Pitch Preparation</h3>
        <div className="steps" style={{ marginTop: '.8rem' }}>
          <div className="step">
            <div className="step-num">1</div>
            <div className="step-content">
              <div className="step-title">Verify the Operational Risk</div>
              <div className="step-desc">You're probably the 2nd or 3rd person to talk to this customer. Go through Big Brother and make sure you fully understand the risk. Ask: "Do you have a landlord? What type of business is this? Do you have any other insurance requirements you didn't mention?"</div>
            </div>
          </div>
          <div className="step">
            <div className="step-num blue-n">2</div>
            <div className="step-content">
              <div className="step-title">Confirm Landlord & Contract Requirements</div>
              <div className="step-desc">Check if they have a landlord requiring additional insured. Check for contract requirements — some require &gt;$1M limits, P&NC, waiver of subrogation. If you don't catch it now, service catches it later and the customer gets hit with unexpected charges.</div>
            </div>
          </div>
          <div className="step">
            <div className="step-num green-n">3</div>
            <div className="step-content">
              <div className="step-title">Double-Check Coverage Needs</div>
              <div className="step-desc">"Do you have any other insurance requirements I should include?" Get everything documented before quoting. It's more important to get them what they <em>need</em> vs what they <em>want</em> — and get it right the first time.</div>
            </div>
          </div>
        </div>

        <h3 className="sub-title">Quote Presentation Structure</h3>
        <div className="rule-block">
          <div className="rule-item"><span className="rule-num">1</span><span className="rule-text"><strong>Break it down in plain English.</strong> "This GL covers you if someone gets hurt on your property. It's a $1M/$2M limit — covers you up to $2M aggregate." Teach them — most customers know nothing about insurance.</span></div>
          <div className="rule-item"><span className="rule-num">2</span><span className="rule-text"><strong>State premium clearly.</strong> "Your premium is $2,400. Down payment of $360. Monthly payments of $204." No ambiguity.</span></div>
          <div className="rule-item"><span className="rule-num">3</span><span className="rule-text"><strong>Always mention the $100 broker fee.</strong> Legally required to disclose. Include it in the breakdown.</span></div>
          <div className="rule-item"><span className="rule-num">4</span><span className="rule-text"><strong>Flag surprises upfront.</strong> For E&S: "Even if you pay today, confirmation of coverage takes 24–48 hours after you sign the DocuSign." Don't let them be surprised after the sale.</span></div>
          <div className="rule-item"><span className="rule-num">5</span><span className="rule-text"><strong>Always ask for the sale.</strong> "Does that work for you? Can I get this started right now?" If they don't have insurance — "If one kid falls and breaks his tooth, you're getting sued. It's my fiduciary responsibility to tell you your business is very liable right now."</span></div>
        </div>

        <h3 className="sub-title">Objection Handling</h3>
        <div className="card-grid cg3" style={{ marginTop: '.8rem' }}>
          <div className="card" style={{ borderLeft: '3px solid var(--accent)' }}>
            <div className="card-t">"It's too expensive"</div>
            <div className="card-d">"I shopped you with Kinsale, Next, Coterie, AmTrust, and Employers — five different insurance companies." They hear five names and think: this person already did their due diligence. I don't need to shop around.</div>
          </div>
          <div className="card" style={{ borderLeft: '3px solid var(--blue)' }}>
            <div className="card-t">"I need to think about it"</div>
            <div className="card-d">Find out the <em>real</em> reason. Is it price? Coverage they don't understand? Something their partner needs to approve? Same thing with endorsements — if it's $3,000, you need to know why they're hesitating.</div>
          </div>
          <div className="card" style={{ borderLeft: '3px solid var(--orange)' }}>
            <div className="card-t">"Just email me the quote"</div>
            <div className="card-d">"Sure, but it'll take 30 seconds — let me walk you through the quote so you fully understand everything. Then I'm happy to email it and we can look at it together." Don't let the quote die in an inbox forever.</div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ══════════════════ 202 / CROSS-SELL & OBJECTIONS ══════════════════ */}
      <section className="section" id="cross-sell">
        <span className="section-num">202 / CROSS-SELL</span>
        <h2 className="section-title">Cross-Sell Triggers</h2>
        <p className="section-desc">Every phone call is a cross-sell opportunity. These triggers tell you exactly which additional coverage to pitch based on what the customer reveals.</p>

        <div className="table-wrap" style={{ marginTop: '1.2rem' }}>
          <table>
            <thead>
              <tr><th>Customer Says...</th><th>You Pitch...</th><th>Why</th></tr>
            </thead>
            <tbody>
              <tr><td className="hl">"I have extra employees"</td><td><span className="badge b-green">Workers' Comp</span></td><td>Required by law in almost every state. Easy upsell.</td></tr>
              <tr><td className="hl">"My employees drive for work"</td><td><span className="badge b-blue">Hired & Non-Owned Auto</span></td><td>If employees drive personal cars for business, this covers accidents.</td></tr>
              <tr><td className="hl">"My contract requires &gt;$1M"</td><td><span className="badge b-violet">Umbrella Coverage</span></td><td>Excess above primary limits. Required by many GC contracts.</td></tr>
              <tr><td className="hl">"I store customer data"</td><td><span className="badge b-orange">Cyber Coverage</span></td><td>Data breach protection. Most businesses don't know they need it.</td></tr>
              <tr><td className="hl">"Worried about firing employees"</td><td><span className="badge b-coral">EPLI</span></td><td>Wrongful termination, discrimination, harassment claims.</td></tr>
              <tr><td className="hl">"What if I make a mistake?"</td><td><span className="badge b-blue">E&O / Professional Liability</span></td><td>Covers financial harm from professional work errors.</td></tr>
            </tbody>
          </table>
        </div>

        <div className="deep ok">
          <div className="deep-title">Educate to Sell</div>
          <div className="deep-body">
            People don't know what EPLI, E&O, or cyber coverage is. You have to teach them. "Are you scared that you're gonna fire an employee and he's gonna come back and sue you? Get EPLI coverage." People buy when they understand the risk — not when you read policy terms.
          </div>
        </div>

        <h3 className="sub-title">Key Insurance Concepts for Sales</h3>
        <div className="card-grid cg2">
          <div className="card" style={{ borderLeft: '3px solid var(--green)' }}>
            <div className="card-t">Occurrence-Based GL</div>
            <div className="card-d">You can file a claim <span className="hl-green">years later</span> and it's still covered under the old policy. Coverage applies to when the incident <em>occurred</em>, not when the claim was filed.</div>
          </div>
          <div className="card" style={{ borderLeft: '3px solid var(--red)' }}>
            <div className="card-t">Claims-Made GL</div>
            <div className="card-d">You must file the claim <span className="hl-coral">within the active policy period</span>. If you don't file within that timeframe, it gets denied. Know which type you're selling.</div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ══════════════════ 202 / POST-SALE HANDOFF ══════════════════ */}
      <section className="section" id="post-sale-handoff">
        <span className="section-num">202 / HANDOFF &amp; QC</span>
        <h2 className="section-title">Post-Sale Handoff &amp; Quality Control</h2>
        <p className="section-desc">A clean handoff from sales to service prevents 90% of downstream problems. Nobody monitors this except the service team — so service has to flag it every time.</p>

        <h3 className="sub-title">Required Post-Sale Communication</h3>
        <div className="steps">
          <div className="step">
            <div className="step-num">1</div>
            <div className="step-content">
              <div className="step-title">Explain Subjectivities</div>
              <div className="step-desc">Tell them: "We need your license, resume, [specific documents]. We can help you with some of these." Escalate the urgency, then deescalate immediately — "We're always here to help."</div>
            </div>
          </div>
          <div className="step">
            <div className="step-num">2</div>
            <div className="step-content">
              <div className="step-title">Provide Service Team Contact</div>
              <div className="step-desc">"We have a service team. Call this number anytime you need a COI, an endorsement, or anything." If it's E&S: "They'll send you a DocuSign. You have to sign it. After that, 24–48 hours for confirmation."</div>
            </div>
          </div>
          <div className="step">
            <div className="step-num orange-n">3</div>
            <div className="step-content">
              <div className="step-title">Warn About Minimum Earned Premium</div>
              <div className="step-desc">For E&S/Kinsale: "That down payment? Consider it gone. Don't ask for a refund tomorrow." Customers who don't understand MEP create cancellation disputes, chargebacks, and collections — all of which blow back on service.</div>
            </div>
          </div>
          <div className="step">
            <div className="step-num green-n">4</div>
            <div className="step-content">
              <div className="step-title">Set Timeline Expectations</div>
              <div className="step-desc">"Your bind documents will come within 2 hours. Confirmation of coverage: 24–48 hours. You must complete your subjectivities or your policy could cancel."</div>
            </div>
          </div>
        </div>

        <h3 className="sub-title">Common Intake Errors That Break Everything</h3>
        <div className="card-grid cg2">
          <div className="card" style={{ borderLeft: '3px solid var(--red)' }}>
            <div className="card-t">🚫 Incorrect Business Names</div>
            <div className="card-d">
              <strong>DBA vs Legal Entity confusion.</strong> "DBA Intimacy Space" is not a business name. The actual name was "ND Special [Something] LLC." Now accords are wrong, quotes are wrong, binds are wrong. Service has to correct the 125, 126, application, and bind request. <span className="hl-coral">All intake has to do is click "edit" in Big Brother and change the name.</span>
            </div>
          </div>
          <div className="card" style={{ borderLeft: '3px solid var(--red)' }}>
            <div className="card-t">🚫 Mismatched Addresses</div>
            <div className="card-d">
              Mailing address and business address are different — but someone enters them as the same. Customer won't sign documents with the wrong address. This happened with Eastern Shore — pulled down the wrong quote, sent it, customer refused to sign. <strong>If addresses differ, post in Slack immediately.</strong>
            </div>
          </div>
          <div className="card" style={{ borderLeft: '3px solid var(--orange)' }}>
            <div className="card-t">⚠️ Missing Insurance Requirements</div>
            <div className="card-d">
              Customer has contract requirements (P&NC, additional insured, specific limits) that weren't captured. They buy a policy, then discover they need $100 for P&NC and $250 for AI endorsement — $400 unexpected bill. Get requirements right the first time.
            </div>
          </div>
          <div className="card" style={{ borderLeft: '3px solid var(--orange)' }}>
            <div className="card-t">⚠️ Used Car Dealer Gaps</div>
            <div className="card-d">
              Larger lots need <span className="hl">dealer's physical damage</span> coverage for inventory. GL doesn't include building or BPP coverage. Upsell inventory coverage during the initial sale — don't let it fall to service as an endorsement request.
            </div>
          </div>
        </div>

      </section>

      <div className="divider" />

      {/* ══════════════════ 202 / CANCELLATION PROCESS ══════════════════ */}
      <section className="section" id="cancellation-process">
        <span className="section-num">202 / CANCELLATIONS</span>
        <h2 className="section-title">Cancellation Process Deep Dive</h2>
        <p className="section-desc">Two completely different processes depending on the billing type. Direct bill is fast. Agency bill is a 60–90 day pain.</p>

        <div className="card-grid cg2" style={{ marginTop: '1.2rem' }}>
          <div className="card" style={{ borderTop: '3px solid var(--green)' }}>
            <div className="card-t">✅ Direct Bill Cancellation</div>
            <div className="card-d">
              <ol style={{ margin: '.3rem 0 0 1rem', fontSize: '.82rem', color: 'var(--text2)' }}>
                <li>Customer signs accord cancellation form</li>
                <li>Upload form to carrier portal — <span className="hl-green">cancels instantly</span></li>
                <li>Refund within 5–10 business days</li>
                <li>Customer can also call carrier directly to cancel</li>
              </ol>
              <br />
              Everything on direct bill is fast — instant quote, instant bind, instant cancel. That's the pattern.
            </div>
          </div>
          <div className="card" style={{ borderTop: '3px solid var(--red)' }}>
            <div className="card-t">🚫 Agency Bill Cancellation (60–90 Days)</div>
            <div className="card-d">
              <ol style={{ margin: '.3rem 0 0 1rem', fontSize: '.82rem', color: 'var(--text2)' }}>
                <li>Customer signs accord cancellation form</li>
                <li><span className="hl-coral">Remove autopay</span> from premium finance (GoTo) — proactively, or customer gets charged for 60 more days</li>
                <li>Send cancellation to underwriter</li>
                <li>Verify underwriter acknowledges and processes it</li>
                <li>Insurance company processes → sends funds to broker</li>
                <li>Broker sends funds to finance company (~30 days each)</li>
                <li>Finance company settles account</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="arch" style={{ marginTop: '1rem' }}>
          <div style={{ fontSize: '.72rem', color: 'var(--text3)', marginBottom: '.3rem', fontFamily: 'var(--font-mono)' }}>AGENCY BILL CANCELLATION FLOW</div>
          <div className="arch-row"><div className="arch-box primary">Signed Accord Form</div></div>
          <div className="arch-arrow">↓</div>
          <div className="arch-row">
            <div className="arch-box warn">Remove Autopay</div>
            <div className="arch-box warn">Send to Underwriter</div>
          </div>
          <div className="arch-arrow">↓</div>
          <div className="arch-row"><div className="arch-box ext">Insurance Company Processes (30 days)</div></div>
          <div className="arch-arrow">↓</div>
          <div className="arch-row"><div className="arch-box">Broker Returns Funds (30 days)</div></div>
          <div className="arch-arrow">↓</div>
          <div className="arch-row"><div className="arch-box data">Finance Company Settles</div></div>
        </div>

        <div className="deep danger" style={{ marginTop: '1rem' }}>
          <div className="deep-title">The 25% vs 15% Collections Trap</div>
          <div className="deep-body">
            <ul>
              <li>Minimum earned premium: <span className="hl-coral">25%</span> of the policy</li>
              <li>Customer's down payment: only <strong>15%</strong></li>
              <li>Gap: <strong>10%</strong> the customer still owes</li>
              <li>If they don't make first payment, finance company sends them to <span className="hl-coral">collections</span></li>
              <li>Customer thinks: "I paid a down payment, why do I still owe money?" — because 25% MEP</li>
            </ul>
          </div>
        </div>

        <h3 className="sub-title">Workers' Comp Audit Requirements</h3>
        <div className="deep danger">
          <div className="deep-title">WC Audits Apply Even After Cancellation</div>
          <div className="deep-body">
            <ul>
              <li>All workers' comp policies get audited — <span className="hl-coral">even if canceled</span></li>
              <li>Unpaid audits are reported to a <strong>national workers' comp board</strong></li>
              <li>Every WC carrier — and even the state fund — will see it and <strong>decline coverage</strong></li>
              <li>The customer cannot get WC anywhere until they pay the outstanding audit</li>
              <li>Example: customer's policy canceled with Byberg. Tried to requote with Byberg — <strong>declined</strong> because of unpaid audit from last year</li>
            </ul>
            <strong>Do not requote a customer with the same carrier if they have an outstanding audit.</strong>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ══════════════════ 202 / REINSTATEMENTS ══════════════════ */}
      <section className="section" id="reinstatements">
        <span className="section-num">202 / REINSTATEMENTS</span>
        <h2 className="section-title">Reinstatements &amp; Grace Periods</h2>
        <p className="section-desc">When a customer misses payments, there's a structured timeline before the policy is gone for good. Knowing the grace periods and process saves accounts.</p>

        <div className="flow" style={{ marginTop: '1.2rem' }}>
          <div className="flow-n green">Payment Due</div>
          <div className="flow-a">→</div>
          <div className="flow-n blue">5-Day Grace (No Late Fee)</div>
          <div className="flow-a">→</div>
          <div className="flow-n orange">+5 Days (Pending Cancel Notice)</div>
          <div className="flow-a">→</div>
          <div className="flow-n red">30 Days (Cancellation Final)</div>
        </div>

        <div className="steps" style={{ marginTop: '1.2rem' }}>
          <div className="step">
            <div className="step-num green-n">1</div>
            <div className="step-content">
              <div className="step-title">Days 1–5: Grace Period</div>
              <div className="step-desc">Payment is due on the 1st. Customer has 5 days — <span className="hl-green">no late fee charged</span>. Policy remains fully active. This is the easiest window to resolve.</div>
            </div>
          </div>
          <div className="step">
            <div className="step-num orange-n">2</div>
            <div className="step-content">
              <div className="step-title">Days 6–10: Pending Cancellation</div>
              <div className="step-desc">5 additional days before the carrier sends a pending cancellation notice. Late fees may apply. Contact the customer immediately — this is the warning window.</div>
            </div>
          </div>
          <div className="step">
            <div className="step-num">3</div>
            <div className="step-content">
              <div className="step-title">Day 11+: Payment Made → Reinstatement Process</div>
              <div className="step-desc">If they pay on day 11, we must send a <span className="hl">"no loss" statement</span> certifying no claims occurred during the gap period (from cancellation date to payment date). Carrier reviews and decides whether to reinstate. <span className="hl-coral">It's the carrier's choice — they don't have to reinstate.</span></div>
            </div>
          </div>
          <div className="step">
            <div className="step-num" style={{ background: 'var(--red)' }}>4</div>
            <div className="step-content">
              <div className="step-title">After 30 Days: Cancellation Final</div>
              <div className="step-desc">Reinstatement is <span className="hl-coral">very unlikely</span> after 30 days. Policy must be re-quoted, re-bound, and re-sold from scratch. Whole cycle starts over — new subjectivities, new documents, new payments.</div>
            </div>
          </div>
        </div>

        <div className="deep info">
          <div className="deep-title">Edge Cases to Know</div>
          <div className="deep-body">
            <ul>
              <li><strong>Ownership changes:</strong> Must cancel policy and rewrite a new one. Set the expectation when this happens.</li>
              <li><strong>Ticket overflows:</strong> 70% of tickets get caught, 30% don't. Create missing tickets manually, make sure they get assigned, and handle them end to end.</li>
              <li><strong>Claims handling:</strong> Harper doesn't handle claims directly. Facilitate: "Here's the phone number for the carrier. Call and report as soon as possible."</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ══════════════════ 202 / CUSTOMER RELATIONSHIPS ══════════════════ */}
      <section className="section" id="customer-relationships">
        <span className="section-num">202 / CUSTOMER</span>
        <h2 className="section-title">Customer Relationships &amp; Communication</h2>
        <p className="section-desc">Everything connects back to one thing: the account lifecycle. How do we keep customers happy and satisfy their requirements? It's only as strong as its weakest handoff.</p>

        <div className="card-grid cg2" style={{ marginTop: '1.2rem' }}>
          <div className="card" style={{ borderTop: '3px solid var(--accent)' }}>
            <div className="card-t">🎤 Sales: Build the Relationship</div>
            <div className="card-d">
              It takes <span className="hl-green">3–5 minutes</span> on the phone to know their story, ask about their business, tell them a joke, give them something to remember you by. Make the customer feel like they'll call <em>you</em> before they call anyone else. A $500 policy today can turn into a $50,000 customer. Don't undershoot anybody.
            </div>
          </div>
          <div className="card" style={{ borderTop: '3px solid var(--green)' }}>
            <div className="card-t">🤝 Service: Every Interaction Counts</div>
            <div className="card-d">
              Every service interaction is either <span className="hl">building trust or destroying it</span>. When you pick up a call: "Hey, Mr. Smith! How's your business going?" Know their business name. Deescalate before they even get hot. Even if they come in angry — they'll come colder when you show you know who they are.
            </div>
          </div>
        </div>

        <h3 className="sub-title">Communication Rules</h3>
        <div className="rule-block">
          <div className="rule-item"><span className="rule-num">1</span><span className="rule-text"><strong>Same-day response to every OpenPhone contact.</strong> Sales or service — every customer who reaches out must be touched the same day, at minimum with a text or callback.</span></div>
          <div className="rule-item"><span className="rule-num">2</span><span className="rule-text"><strong>Proactive over reactive.</strong> "We think you're going to need these changes." "We sent the COI to the underwriter, here's the timeline." Don't let them follow up because you've been silent for 48 hours.</span></div>
          <div className="rule-item"><span className="rule-num">3</span><span className="rule-text"><strong>Email every customer back.</strong> They must know what's going on. Simple phone call, simple text, simple email. This isn't rocket science — it's basic communication.</span></div>
          <div className="rule-item"><span className="rule-num">4</span><span className="rule-text"><strong>Don't wait for the underwriter.</strong> If you haven't heard back in 48 hours, follow up with the broker. The customer should never have to ask "what's going on?" — you tell them first.</span></div>
        </div>

        <div className="deep ok" style={{ marginTop: '1rem' }}>
          <div className="deep-title">The Bottom Line</div>
          <div className="deep-body">
            Everything breaks down when communication breaks down. All customers want to know is: <strong>what's going on?</strong> They want updates. We should be able to give them updates. This isn't trying to take something to the moon — it's simple communication. One-zero-one. Keep it in mind for every interaction. Make it the best.
          </div>
        </div>
      </section>
    </>
  )
}
