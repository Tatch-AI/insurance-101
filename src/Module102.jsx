export default function Module102() {
  return (
    <>
      {/* ══════════════════ 102 / COI FUNDAMENTALS ══════════════════ */}
      <section className="section" id="coi-fundamentals">
        <span className="section-num">102 / COI BASICS</span>
        <h2 className="section-title">Certificate of Insurance (COI) Fundamentals</h2>
        <p className="section-desc">A one-page document that condenses a 120-page policy into a summary. It proves coverage exists — but it does not grant coverage.</p>

        <div className="card-grid cg2" style={{ marginTop: '1.2rem' }}>
          <div className="card" style={{ borderTop: '3px solid var(--blue)' }}>
            <div className="card-t">What Is a COI?</div>
            <div className="card-d">
              A Certificate of Insurance is a <span className="hl">one-page summary</span> of the insured's policy. It lists coverage types, limits, effective dates, certificate holders, and additional insureds. Required by landlords, general contractors, clients, government agencies (like the DMV for DLIMP plates). It functions as an insurance ID card — proof of purchase.
            </div>
          </div>
          <div className="card" style={{ borderTop: '3px solid var(--orange)' }}>
            <div className="card-t">What a COI Does NOT Do</div>
            <div className="card-d">
              <span className="hl-coral">A COI does not grant coverage.</span> It's information only. But what's listed on it determines what the certificate holder knows and relies on. If the wrong limits or wrong coverage appears on a COI, it can create massive E&O liability. One wrong letter can mean thousands of dollars in claims exposure.
            </div>
          </div>
        </div>

        <div className="deep danger" style={{ marginTop: '1rem' }}>
          <div className="deep-title">COI Accuracy = Legal Protection</div>
          <div className="deep-body">
            Example: You sell a $1M/$2M GL policy. A COI gets sent showing $1M/<span className="hl-coral">$3M</span>. The customer gives it to the state and gets approved. Two months later, a kid breaks his tooth — parents sue for $2.5M. The carrier says "we only issued $2M." But you sent proof showing $3M. A lawyer will take Harper to school for that extra million. <strong>Every single COI must be perfect.</strong>
          </div>
        </div>

        <h3 className="sub-title">Key COI Components</h3>
        <div className="card-grid cg3">
          <div className="card">
            <div className="card-t">Certificate Holder</div>
            <div className="card-d">The entity receiving the COI as proof. Must be specifically named — e.g., the exact DMV location, the landlord's legal entity name, the GC's full company name.</div>
          </div>
          <div className="card">
            <div className="card-t">Description of Operations</div>
            <div className="card-d">Critical section where special coverages, endorsements, and modifications are listed. Certificate holders look here for proof of additional insured, waiver of subrogation, and P&NC status.</div>
          </div>
          <div className="card">
            <div className="card-t">Coverage & Limits</div>
            <div className="card-d">Must match the policy exactly. GL limits, professional liability limits, auto liability, umbrella — every number must be verified against the actual policy.</div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ══════════════════ 102 / ADDITIONAL INSURED ══════════════════ */}
      <section className="section" id="additional-insured">
        <span className="section-num">102 / ADDITIONAL INSURED</span>
        <h2 className="section-title">Additional Insured &amp; Policy Modifications</h2>
        <p className="section-desc">Understanding the modifications that appear on policies and COIs — and why getting them wrong can lead to lawsuits.</p>

        <h3 className="sub-title">Additional Insured (AI) Types</h3>
        <div className="card-grid cg2">
          <div className="card" style={{ borderLeft: '3px solid var(--green)' }}>
            <div className="card-t">Blanket Additional Insured</div>
            <div className="card-d">
              The policy <span className="hl-green">automatically extends AI status</span> to anyone who has a written contract with the insured. No need to specifically list each entity. Convenient — but the coverage form may differ from a specifically listed AI.
            </div>
          </div>
          <div className="card" style={{ borderLeft: '3px solid var(--blue)' }}>
            <div className="card-t">Specifically Listed AI</div>
            <div className="card-d">
              Must list the <span className="hl-blue">exact entity name and full address</span>. The relationship between the parties must be documented and justified (landlord, business partner, GC, etc.). The carrier must be notified and approve the addition.
            </div>
          </div>
        </div>

        <div className="deep danger" style={{ marginTop: '1rem' }}>
          <div className="deep-title">Blanket vs Specific — Lawsuits Happen Here</div>
          <div className="deep-body">
            If someone requests to be <strong>specifically listed</strong> and you put them as <strong>blanket</strong>, the coverage form may be different. This has resulted in actual lawsuits. Always confirm what the certificate holder requires and match it exactly. When in doubt, specifically list them.
          </div>
        </div>

        <h3 className="sub-title">Other Key Policy Modifications</h3>
        <div className="steps">
          <div className="step">
            <div className="step-num">1</div>
            <div className="step-content">
              <div className="step-title">Waiver of Subrogation</div>
              <div className="step-desc">The insurance carrier agrees <span className="hl">not to sue a specific party</span> after paying a claim. Example: landlord requires WOS — if a claim happens, the carrier won't pursue the landlord for recovery. This protects the certificate holder from being dragged into litigation.</div>
            </div>
          </div>
          <div className="step">
            <div className="step-num blue-n">2</div>
            <div className="step-content">
              <div className="step-title">Primary & Non-Contributory (P&NC)</div>
              <div className="step-desc">Your policy pays first; the other party's policy pays second. Example: if there's a claim on a job site, the contractor's policy (with P&NC) will respond before the GC's policy kicks in. Common contract requirement.</div>
            </div>
          </div>
        </div>

        <div className="deep info">
          <div className="deep-title">Where to Find These on a COI</div>
          <div className="deep-body">
            All modifications — additional insured, waiver of subrogation, primary & non-contributory — appear in the <strong>"Description of Operations"</strong> section of the COI. This is the section everyone reads. Certificate holders will reject a COI if these are missing.
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ══════════════════ 102 / CORE LIABILITY TYPES ══════════════════ */}
      <section className="section" id="core-liability">
        <span className="section-num">102 / COVERAGE TYPES</span>
        <h2 className="section-title">Core Liability Coverage Types</h2>
        <p className="section-desc">The liability coverages you'll encounter most often. Know what they cover, who needs them, and how to explain them in plain English.</p>

        <div className="card-grid cg3" style={{ marginTop: '1.2rem' }}>
          <div className="card" style={{ borderTop: '3px solid var(--accent)' }}>
            <span className="badge b-coral">MOST COMMON</span>
            <div className="card-t" style={{ marginTop: '.5rem' }}>General Liability (GL)</div>
            <div className="card-d">
              Covers <span className="hl">third-party bodily injury and property damage</span>. Restaurant slip-and-fall? GL. Broke a client's property? GL. Standard limits: $1M/$2M. Does NOT cover employee injuries (that's workers' comp) or your own property.
              <br /><br />
              <strong>Sales pitch:</strong> "Hot soup drops on a customer's face. Someone slips on your wet floor. This covers you."
            </div>
          </div>
          <div className="card" style={{ borderTop: '3px solid var(--blue)' }}>
            <span className="badge b-blue">PROFESSIONAL</span>
            <div className="card-t" style={{ marginTop: '.5rem' }}>Professional Liability (E&O)</div>
            <div className="card-d">
              Protects against <span className="hl-blue">financial harm from professional work errors</span>. Accountant files taxes wrong? E&O. Med spa botches a procedure? E&O. Standard limit: $1M.
              <br /><br />
              <strong>Who needs it:</strong> Accountants, consultants, IT firms, insurance agents, med spas, anyone who gives professional advice or performs professional services.
            </div>
          </div>
          <div className="card" style={{ borderTop: '3px solid var(--violet)' }}>
            <span className="badge b-violet">DATA</span>
            <div className="card-t" style={{ marginTop: '.5rem' }}>Cyber Liability</div>
            <div className="card-d">
              Protects against <span className="hl">data breaches and hacking</span>. Stolen credit card info from POS systems, leaked social security numbers, ransomware attacks.
              <br /><br />
              <strong>Who needs it:</strong> Literally anyone who stores customer data digitally. Easy upsell — most business owners don't know they need it until you tell them.
            </div>
          </div>
        </div>

        <h3 className="sub-title">Other Core Liability Coverages</h3>
        <div className="card-grid cg2">
          <div className="card" style={{ borderTop: '3px solid var(--orange)' }}>
            <span className="badge b-orange">LEADERSHIP</span>
            <div className="card-t" style={{ marginTop: '.5rem' }}>Directors & Officers (D&O)</div>
            <div className="card-d">
              Protects <span className="hl-orange">company directors and officers from personal liability</span> for decisions made while managing the company. If a board decision leads to a financial loss and shareholders sue, D&O covers the legal defense and damages. Applies to both for-profit and nonprofit organizations.
              <br /><br />
              <strong>Who needs it:</strong> Any business with a board, advisory committee, or formal leadership structure. Investors and lenders often require it.
            </div>
          </div>
          <div className="card" style={{ borderTop: '3px solid var(--accent)' }}>
            <span className="badge b-coral">EMPLOYMENT</span>
            <div className="card-t" style={{ marginTop: '.5rem' }}>EPLI (Employment Practices Liability)</div>
            <div className="card-d">
              Protects against <span className="hl-coral">wrongful termination, discrimination, harassment, and retaliation</span> claims from employees. If you fire someone and they claim it was discriminatory — EPLI covers the legal defense and damages.
              <br /><br />
              <strong>Who needs it:</strong> Any business with employees. Risk increases with headcount. One wrongful termination lawsuit can cost $100K+ in legal fees alone.
            </div>
          </div>
          <div className="card" style={{ borderTop: '3px solid var(--red)' }}>
            <span className="badge b-coral">ALCOHOL</span>
            <div className="card-t" style={{ marginTop: '.5rem' }}>Liquor Liability</div>
            <div className="card-d">
              Covers incidents related to <span className="hl-coral">serving, selling, or distributing alcohol</span>. A customer gets over-served, gets behind the wheel, kills someone — the establishment is liable. Separate from GL because alcohol-related claims are excluded from standard GL policies.
              <br /><br />
              <strong>Who needs it:</strong> <span className="hl">Every restaurant serving ANY alcohol</span> — even if it's just beer and wine. Bars, nightclubs, event venues, liquor stores. A ~$10K–15K policy that prevents catastrophic lawsuits.
            </div>
          </div>
          <div className="card" style={{ borderTop: '3px solid var(--blue)' }}>
            <span className="badge b-blue">PROPERTY</span>
            <div className="card-t" style={{ marginTop: '.5rem' }}>Building & Property Coverage</div>
            <div className="card-d">
              Covers the <span className="hl-blue">physical building structure and business personal property (BPP)</span> — equipment, inventory, furniture, and fixtures inside. If the building burns down or floods, this pays for repairs. If equipment is destroyed, BPP replaces it.
              <br /><br />
              <strong>Key distinction:</strong> Building coverage protects the structure; BPP protects what's inside. Both are separate from GL, which only covers liability to other people.
            </div>
          </div>
        </div>

        <div className="deep ok">
          <div className="deep-title">Know It to Sell It</div>
          <div className="deep-body">
            If a customer calls and asks about GL and you don't know the answer, they're not buying from you. You have to understand the coverage to pitch it, to create accurate COIs, and to handle endorsements. Every coverage type has a story — use it. Scare them a little. "If one kid falls and breaks his tooth at your daycare, you're getting sued. Do you have insurance right now?"
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ══════════════════ 102 / WORKERS COMP & PROPERTY ══════════════════ */}
      <section className="section" id="workers-comp">
        <span className="section-num">102 / WC &amp; PROPERTY</span>
        <h2 className="section-title">Workers' Comp &amp; Property Coverage</h2>
        <p className="section-desc">Workers' compensation and commercial property — two coverages with strict requirements and major financial consequences if handled incorrectly.</p>

        <h3 className="sub-title">Workers' Compensation</h3>
        <div className="card-grid cg2">
          <div className="card" style={{ borderLeft: '3px solid var(--accent)' }}>
            <div className="card-t">What It Covers</div>
            <div className="card-d">
              Employee injuries on the job. <span className="hl-coral">Required by law in almost every state.</span> Standard limit: $1M. Easy upsell since it's legally required. Key question: does the owner want to be included or excluded? Most say no, but they should say yes.
            </div>
          </div>
          <div className="card" style={{ borderLeft: '3px solid var(--red)' }}>
            <div className="card-t">Annual Audits — The Trap</div>
            <div className="card-d">
              <span className="hl-coral">Every WC policy gets audited annually.</span> Audits verify payroll accuracy. If the customer understated payroll ($60K reported vs $200K actual), they get a massive adjustment bill. Unpaid audits get reported to a <strong>national workers' comp board</strong> — blocking future coverage with ALL carriers. Even the state fund.
            </div>
          </div>
        </div>

        <div className="deep danger">
          <div className="deep-title">Workers' Comp Payroll Accuracy Is Non-Negotiable</div>
          <div className="deep-body">
            <ul>
              <li>Audits happen every year — no exceptions, even if the policy cancels</li>
              <li>Understating payroll triggers adjustment bills the customer cannot avoid</li>
              <li>Unpaid audits are reported nationally — <span className="hl-coral">every carrier and state fund will decline</span></li>
              <li>The customer must pay the audit before any carrier will issue new coverage</li>
              <li>Off by a few thousand? Fine. Off by $140K? They're in serious trouble.</li>
            </ul>
          </div>
        </div>

        <h3 className="sub-title">Commercial Property & BPP</h3>
        <div className="card-grid cg2">
          <div className="card" style={{ borderTop: '3px solid var(--blue)' }}>
            <div className="card-t">🏢 Commercial Property</div>
            <div className="card-d">Covers the <span className="hl">building structure itself</span>. If the building burns down, floods, or is damaged by a storm, this pays for repairs or rebuilding. Separate from GL — GL covers people, property covers the building.</div>
          </div>
          <div className="card" style={{ borderTop: '3px solid var(--green)' }}>
            <div className="card-t">📦 Business Personal Property (BPP)</div>
            <div className="card-d">Covers <span className="hl-green">contents and inventory inside the building</span>. Desks, computers, equipment, stock. Think of it as inventory coverage. If someone knocks over every monitor and they cost $50K, BPP pays.</div>
          </div>
        </div>

        <div className="deep warn">
          <div className="deep-title">Replacement Cost vs Actual Cash Value (ACV)</div>
          <div className="deep-body">
            <ul>
              <li><strong>Replacement Cost:</strong> Carrier pays to buy a brand new replacement item</li>
              <li><strong>Actual Cash Value:</strong> Carrier pays only what the item is <em>currently worth</em> (depreciated)</li>
            </ul>
            On certificates, this one letter difference is <span className="hl-coral">thousands of dollars</span>. A 5-year-old laptop replaced at $1,500 (replacement cost) vs $300 (ACV). Always verify which valuation method the policy uses.
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ══════════════════ 102 / SPECIALTY COVERAGE ══════════════════ */}
      <section className="section" id="specialty-coverage">
        <span className="section-num">102 / SPECIALTY</span>
        <h2 className="section-title">Specialty Coverage &amp; Bonds</h2>
        <p className="section-desc">Beyond the core coverages — the specialized products that come up in endorsements, upsells, and specific industry requirements.</p>

        <div className="card-grid cg2" style={{ marginTop: '1.2rem' }}>
          <div className="card" style={{ borderTop: '3px solid var(--violet)' }}>
            <div className="card-t">☂️ Umbrella Liability</div>
            <div className="card-d">
              Excess coverage above primary limits. GL is $1M/$2M — umbrella adds another $1M+ on top. Kicks in when a really bad claim exceeds primary limits. Many businesses carry it to prevent a single lawsuit from shutting them down. Personal policies too — protects your house.
            </div>
          </div>
          <div className="card" style={{ borderTop: '3px solid var(--accent)' }}>
            <div className="card-t">🍸 Liquor Liability</div>
            <div className="card-d">
              Covers over-serving alcohol incidents. Customer gets over-served, gets behind the wheel, kills someone — the bar is liable. <span className="hl-coral">Push for every restaurant serving ANY alcohol.</span> Even $1,000/month in alcohol sales. It's a ~$10K–15K policy that prevents catastrophic lawsuits.
            </div>
          </div>
          <div className="card" style={{ borderTop: '3px solid var(--blue)' }}>
            <div className="card-t">🚗 Hired & Non-Owned Auto (HNOA)</div>
            <div className="card-d">
              Covers employees driving <span className="hl">personal cars for business</span>. If an employee drives to a client meeting in their own car and causes an accident, this covers it. Often a contract requirement. <strong>Hard to add post-issue</strong> — carriers see it as increased exposure. Get it on before binding.
            </div>
          </div>
          <div className="card" style={{ borderTop: '3px solid var(--orange)' }}>
            <div className="card-t">🛡️ EPLI</div>
            <div className="card-d">
              Employment Practices Liability Insurance. Protects against <span className="hl-orange">wrongful termination, discrimination, harassment</span> claims from employees. Big companies need it. If you fire someone and they claim retaliation — EPLI covers the legal defense and damages.
            </div>
          </div>
        </div>

        <h3 className="sub-title">Garage Coverage (Used Car Dealers)</h3>
        <div className="card-grid cg3">
          <div className="card">
            <span className="badge b-coral">LIABILITY</span>
            <div className="card-t" style={{ marginTop: '.5rem' }}>Garage Liability</div>
            <div className="card-d">Covers third parties — if a customer gets hurt on the lot or a test drive goes wrong. Remember: "liability" always means it covers <em>the other person</em>.</div>
          </div>
          <div className="card">
            <span className="badge b-blue">REPAIR SHOPS</span>
            <div className="card-t" style={{ marginTop: '.5rem' }}>Garagekeepers</div>
            <div className="card-d">Covers customer vehicles in your care, custody, and control. If a car gets stolen off your repair shop lot, garagekeepers pays the customer.</div>
          </div>
          <div className="card">
            <span className="badge b-green">DEALERS</span>
            <div className="card-t" style={{ marginTop: '.5rem' }}>Dealer's Physical Damage</div>
            <div className="card-d">Covers inventory on the lot. $100K of cars on the lot floods tomorrow? This pays. <span className="hl-green">Big upsell opportunity</span> — dealers always forget about it until they need it.</div>
          </div>
        </div>

        <h3 className="sub-title">Surety Bonds</h3>
        <div className="deep info">
          <div className="deep-title">Bonds = "I Guarantee I'll Do What I Promised"</div>
          <div className="deep-body">
            <ul>
              <li><strong>Bid Bonds:</strong> Guarantee that a contractor who wins a bid will actually perform the work. If they back out, the bond pays the project owner for their wasted time and money.</li>
              <li><strong>Dealer Bonds:</strong> Required for used car dealers. If the dealer sells a defective car or fails to pay at auction, the bond covers the claim.</li>
              <li><strong>Lottery Bonds:</strong> Required for gas stations selling lottery tickets. If the station's account goes negative, the state lottery files a claim on the bond to recover the money.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
