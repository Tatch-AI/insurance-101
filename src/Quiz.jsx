import { useState, useCallback, useMemo } from 'react'

const questionBank = [
  // ── 101: Business Model ──
  { q: "What are Harper's two revenue channels?", options: ['Salary and tips', 'Commission and broker fees', 'Referral bonuses and advertising', 'Subscription fees and commission'], answer: 1 },
  { q: 'What happens if a policy cancels early?', options: ['Harper keeps the full commission', 'The customer gets a bonus', 'Harper must repay commission to the carrier (chargeback)', 'Nothing — commission is non-refundable'], answer: 2 },
  { q: 'What is the typical broker fee per policy at Harper?', options: ['$50', '$100', '$250', '$500'], answer: 1 },
  { q: 'How much does a typical lead cost Harper?', options: ['$10–$20', '$80–$500', '$1,000–$5,000', 'Leads are free'], answer: 1 },
  { q: 'What percentage of traditional agency leads come from referrals?', options: ['50%', '75%', '90%', '100%'], answer: 2 },

  // ── 101: Lifecycle ──
  { q: 'What percentage of leads are lost in mid funnel?', options: ['10%', '25%', '50%', '75%'], answer: 2 },
  { q: 'What is the ideal customer retention length at Harper?', options: ['1–2 years', '3–5 years', '7–9 years', '15+ years'], answer: 2 },
  { q: 'What is the correct customer lifecycle order?', options: ['Sales → Intake → Lead → Service', 'Lead → Intake → Mid Funnel → Sales → Service → Renewals', 'Lead → Sales → Service → Intake', 'Intake → Lead → Renewals → Sales'], answer: 1 },

  // ── 101: Billing ──
  { q: 'What should you always try before going to the E&S market?', options: ['Agency bill', 'Direct bill', 'Premium financing', 'Surplus lines'], answer: 1 },
  { q: 'What is the minimum earned premium on E&S policies?', options: ['10%', '15%', '25%', '50%'], answer: 2 },
  { q: 'How quickly does commission come in on direct bill?', options: ['2 months later', 'Instantly from down payment', '6 months later', 'At renewal'], answer: 1 },
  { q: 'How long does agency bill commission typically take?', options: ['Instantly', '~2 months', '6 months', '1 year'], answer: 1 },
  { q: 'What happens if a customer on agency bill does NOT pay in full?', options: ['Nothing — they get billed later', 'Policy cancels immediately', 'Must set up premium finance agreement through GoTo', 'Harper covers the difference'], answer: 2 },
  { q: 'What is the typical down payment for premium financing?', options: ['5%', '10%', '15%', '25%'], answer: 2 },
  { q: 'How many monthly payments does a premium finance plan typically have?', options: ['6', '8', '10', '12'], answer: 2 },

  // ── 101: Revenue & Risk ──
  { q: "What's the gap between the 25% MEP and 15% down payment?", options: ['5%', '10%', '15%', '25%'], answer: 1 },
  { q: 'What is the difference between earned and unearned broker fees?', options: ['Earned is collected upfront; unearned is spread over payments', 'Earned is for E&S only; unearned is for direct bill', 'There is no difference', 'Earned is refundable; unearned is not'], answer: 0 },

  // ── 101: Sales ──
  { q: 'What are subjectivities?', options: ['Customer complaints', 'Requirements from the carrier that must be met to issue the policy', 'Internal Harper documents', 'Cancellation requests'], answer: 1 },
  { q: 'Why is "Buyers Are Liars" an important concept?', options: ['Customers always pay on time', 'Customers may understate revenue/payroll to get cheaper prices — always verify with documentation', 'Customers never need insurance', 'Customers always buy the most expensive policy'], answer: 1 },
  { q: 'What differentiates Harper from the 14,000+ other agencies?', options: ['Lower prices', 'Speed and response time', 'More carriers', 'Bigger office'], answer: 1 },

  // ── 101: Service ──
  { q: 'What is the target time for getting bind documents out after a sale?', options: ['Within 24 hours', 'Within 2 hours', 'Within 1 week', 'Next business day'], answer: 1 },
  { q: 'What does the "green light" mean in the bind process?', options: ['Customer signed', 'Carrier issues a binder confirming coverage is in effect', 'Payment received', 'DocuSign sent'], answer: 1 },

  // ── 102: COI ──
  { q: 'A Certificate of Insurance (COI) does what?', options: ['Grants additional coverage to the holder', 'Replaces the actual insurance policy', 'Proves coverage exists — but does not grant coverage', 'Cancels the existing policy'], answer: 2 },
  { q: 'Where on a COI do additional insured, waiver of subrogation, and P&NC appear?', options: ['Coverage limits section', 'Certificate holder section', 'Description of Operations section', 'Policy number section'], answer: 2 },
  { q: 'What can happen if a COI lists the wrong coverage limits?', options: ['Nothing — COIs are informational only', 'Massive E&O liability for Harper', 'The carrier automatically fixes it', 'The customer gets extra coverage for free'], answer: 1 },

  // ── 102: Additional Insured ──
  { q: 'What is the difference between blanket and specifically listed additional insured?', options: ['No difference', 'Blanket auto-extends AI to anyone with a written contract; specific requires exact entity name', 'Blanket costs more', 'Specific is only for E&S policies'], answer: 1 },
  { q: 'What is a Waiver of Subrogation?', options: ['A discount on the policy premium', 'The carrier agrees not to sue a specific party after paying a claim', 'A type of additional insured endorsement', 'A method to cancel coverage'], answer: 1 },
  { q: 'What does Primary & Non-Contributory (P&NC) mean?', options: ['Your policy pays last', "Your policy pays first; the other party's policy pays second", 'Both policies split the claim equally', 'Neither policy pays'], answer: 1 },

  // ── 102: Coverage Types ──
  { q: 'What does General Liability (GL) cover?', options: ['Employee injuries on the job', 'Third-party bodily injury and property damage', 'Data breaches and hacking', 'Professional service errors'], answer: 1 },
  { q: 'What does Professional Liability (E&O) cover?', options: ['Slip-and-fall accidents', 'Employee injuries', 'Financial harm from professional work errors', 'Property damage from storms'], answer: 2 },
  { q: 'Who needs Cyber Liability coverage?', options: ['Only tech companies', 'Only large corporations', 'Anyone who stores customer data digitally', 'Only government agencies'], answer: 2 },
  { q: 'What is the standard GL limit?', options: ['$500K/$1M', '$1M/$2M', '$2M/$5M', '$5M/$10M'], answer: 1 },

  // ── 102: Workers' Comp ──
  { q: "Why are Workers' Comp payroll audits dangerous?", options: ['They reduce coverage limits', 'They cancel the policy automatically', 'Understating payroll triggers adjustment bills and can block future coverage nationally', 'They increase broker fees'], answer: 2 },
  { q: "Workers' Comp is required by law in almost every state. True or false?", options: ['True', 'False', 'Only in California', 'Only for companies over 50 employees'], answer: 0 },
  { q: 'What happens if a WC audit goes unpaid?', options: ['Nothing', 'It gets reported nationally and every carrier will decline coverage', 'The state pays it', 'Harper covers it'], answer: 1 },

  // ── 102: Property ──
  { q: 'What is the difference between Replacement Cost and Actual Cash Value?', options: ['No difference', 'Replacement cost pays for a brand new item; ACV pays depreciated value', 'ACV is always better for the customer', 'Replacement cost is only for commercial property'], answer: 1 },
  { q: 'What does Business Personal Property (BPP) cover?', options: ['The building structure', 'Contents and inventory inside the building', 'Employee salaries', 'Liability claims'], answer: 1 },

  // ── 102: Specialty ──
  { q: 'When should you push liquor liability?', options: ['Only for bars', 'For every restaurant serving ANY alcohol', 'Only if the customer asks', "Never — it's too expensive"], answer: 1 },
  { q: 'What does HNOA (Hired & Non-Owned Auto) cover?', options: ['Company vehicles only', 'Employees driving personal cars for business', 'Rental cars only', 'Delivery trucks'], answer: 1 },
  { q: 'What does EPLI protect against?', options: ['Property damage', 'Wrongful termination, discrimination, harassment claims from employees', 'Cyber attacks', 'Vehicle accidents'], answer: 1 },
  { q: 'What is a surety bond?', options: ['A type of insurance policy', 'A guarantee that someone will fulfill their obligations', 'A refund mechanism', 'A type of bank loan'], answer: 1 },

  // ── 201: Routing ──
  { q: 'What is the correct routing order for new business?', options: ['E&S first, then direct', 'Direct bill first, E&S as last resort', 'Agency bill always', 'Whatever is cheapest'], answer: 1 },
  { q: 'Which carriers are considered "quick market"?', options: ['RT Specialty, RPS, AmWINS', 'Next, Coterie, Hiscox, Progressive, Thimble', 'Kinsale, Atlantic Casualty', 'Chubb only'], answer: 1 },
  { q: "What carrier writes Workers' Comp exclusively?", options: ['Next', 'Coterie', 'Employers', 'Chubb'], answer: 2 },
  { q: 'Which carrier is the #1 cyber writer nationally?', options: ['Next', 'Chubb', 'Progressive', 'Thimble'], answer: 1 },
  { q: 'Why is Kinsale considered a "last resort"?', options: ['They have the best prices', 'Expensive quotes, heavy exclusions, never returns money, painful changes', "They only write in one state", "They're not a real carrier"], answer: 1 },
  { q: 'Which carrier specializes in daycares for Harper?', options: ['Next', 'Coterie', 'Markel', 'Progressive'], answer: 2 },
  { q: 'What does Coterie require for additional insured?', options: ['Add anytime after binding', 'Must add BEFORE binding or face a 3–5 day endorsement', 'Cannot add AI at all', 'Free to add anytime'], answer: 1 },

  // ── 201: MGA & E&S ──
  { q: 'What is the chain in E&S placement?', options: ['Customer → Carrier directly', 'Customer → Harper → Wholesale Broker → E&S Carrier', 'Customer → State → Carrier', 'Harper → Customer → Broker'], answer: 1 },
  { q: 'Which wholesale broker specializes in restaurants, bars, and security for Harper?', options: ['AmWINS', 'CRC Group', 'RT Specialty', 'First Connect'], answer: 2 },
  { q: 'Which wholesale broker specializes in garages for Harper?', options: ['RT Specialty', 'RPS', 'AmWINS', 'First Connect'], answer: 1 },

  // ── 201: Service Ops ──
  { q: 'What is the COI issuance target time?', options: ['Same day', '5 minutes', '1 hour', '24 hours'], answer: 1 },
  { q: 'How many contact attempts are required per pending cancellation customer?', options: ['3', '5', '10', '15+'], answer: 3 },
  { q: 'Why must you contact ALL pending cancellations equally?', options: ["It's a nice thing to do", 'The one you missed can sue Harper for not being notified', 'It improves NPS scores', 'Carriers require it'], answer: 1 },

  // ── 201: Service Standards ──
  { q: 'What is the same-day completion standard?', options: ['All requests started same day', 'All requests completed same day — nothing sits overnight unless blocked', 'Respond within 24 hours', 'Acknowledge within same day'], answer: 1 },
  { q: 'What CRM does Harper use for auto-documentation?', options: ['Salesforce', 'HubSpot', 'Big Brother', 'Zendesk'], answer: 2 },

  // ── 203: Sales Pitch ──
  { q: 'What must you legally disclose to the customer during a sale?', options: ['Your commission amount', 'The $100 broker fee', "The carrier's profit margin", 'Your personal opinion on the coverage'], answer: 1 },
  { q: 'For E&S quotes, what timeline must you set with the customer?', options: ['Coverage is instant', 'Confirmation takes 24–48 hours after DocuSign', 'Coverage starts next month', '1 week for confirmation'], answer: 1 },
  { q: 'How should you handle "it\'s too expensive" objection?', options: ['Lower the price immediately', 'Name the 5 carriers you already shopped to show due diligence', 'Tell them to go elsewhere', 'Ignore it'], answer: 1 },

  // ── 203: Cross-sell ──
  { q: 'Customer says "my employees drive for work." What do you pitch?', options: ["Workers' Comp", 'Hired & Non-Owned Auto (HNOA)', 'Cyber Coverage', 'Umbrella'], answer: 1 },
  { q: 'Customer says "I store customer data." What do you pitch?', options: ['GL', "Workers' Comp", 'Cyber Coverage', 'EPLI'], answer: 2 },
  { q: 'What is the difference between occurrence-based and claims-made GL?', options: ['No difference', 'Occurrence covers incidents regardless of when claim is filed; claims-made requires filing during active policy', 'Claims-made is always better', 'Occurrence is only for E&S'], answer: 1 },

  // ── 203: Handoff ──
  { q: 'What is the most common intake error that breaks the process?', options: ['Wrong phone number', 'Incorrect business name (DBA vs legal entity confusion)', 'Missing email address', 'Wrong zip code'], answer: 1 },
  { q: 'What should sales warn E&S customers about regarding their down payment?', options: ["It's fully refundable", 'Consider it gone — 25% MEP is non-refundable', "They'll get it back in 30 days", "It goes toward next year's premium"], answer: 1 },

  // ── 203: Cancellations ──
  { q: 'How long does an agency bill cancellation take?', options: ['Same day', '1 week', '60–90 days', '6 months'], answer: 2 },
  { q: 'What must you do FIRST when processing an agency bill cancellation?', options: ['Send to underwriter', 'Remove autopay from premium finance (GoTo)', 'Call the customer', 'Issue a refund'], answer: 1 },
  { q: 'Do WC audits still apply after policy cancellation?', options: ['No — cancellation voids audits', 'Yes — all WC policies get audited even if canceled', 'Only if the policy was active for 6+ months', 'Only for agency bill policies'], answer: 1 },

  // ── 203: Reinstatements ──
  { q: 'How many days is the initial grace period for missed payments?', options: ['3 days', '5 days', '10 days', '30 days'], answer: 1 },
  { q: 'What document is needed for reinstatement after day 10?', options: ['New application', 'No-loss statement', 'Court order', 'Bank statement'], answer: 1 },
  { q: 'After how many days is reinstatement very unlikely?', options: ['10 days', '15 days', '30 days', '60 days'], answer: 2 },

  // ── 203: Customer Relationships ──
  { q: 'What is the same-day response rule?', options: ['Respond within 24 hours', 'Every customer who reaches out must be touched the same day', 'Only respond to urgent requests same day', 'Respond within the work week'], answer: 1 },
  { q: 'How should you handle an angry customer calling multiple times?', options: ['Prioritize them over others', 'Deescalate and keep them in the queue like everyone else — consistency is key', 'Ignore them until they calm down', 'Transfer to a manager'], answer: 1 },
]

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const QUIZ_SIZE = 10

export default function Quiz() {
  const [seed, setSeed] = useState(0)
  const questions = useMemo(() => shuffle(questionBank).slice(0, QUIZ_SIZE), [seed])

  const [started, setStarted] = useState(false)
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [confirmed, setConfirmed] = useState(false)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const [answers, setAnswers] = useState([])
  const [reviewing, setReviewing] = useState(false)

  const resetSame = useCallback(() => {
    setCurrent(0)
    setSelected(null)
    setConfirmed(false)
    setScore(0)
    setFinished(false)
    setAnswers([])
    setReviewing(false)
  }, [])

  const resetNew = useCallback(() => {
    setSeed(s => s + 1)
    setCurrent(0)
    setSelected(null)
    setConfirmed(false)
    setScore(0)
    setFinished(false)
    setStarted(true)
    setAnswers([])
    setReviewing(false)
  }, [])

  const handleConfirm = () => {
    if (selected === null) return
    const correct = selected === questions[current].answer
    if (correct) setScore(s => s + 1)
    setAnswers(prev => [...prev, { idx: current, picked: selected, correct }])
    setConfirmed(true)
  }

  const handleNext = () => {
    if (current + 1 >= QUIZ_SIZE) {
      setFinished(true)
    } else {
      setCurrent(c => c + 1)
      setSelected(null)
      setConfirmed(false)
    }
  }

  if (!started) {
    return (
      <section className="section" id="quiz">
        <span className="section-num">KNOWLEDGE CHECK</span>
        <h2 className="section-title">Training Quiz</h2>
        <p className="section-desc">
          Test your knowledge across all training modules. {QUIZ_SIZE} random questions from a pool of {questionBank.length} — different every time you take it.
        </p>
        <div className="quiz-start-card">
          <div className="quiz-start-stats">
            <div className="quiz-start-stat">
              <div className="quiz-start-stat-num">{QUIZ_SIZE}</div>
              <div className="quiz-start-stat-label">Questions</div>
            </div>
            <div className="quiz-start-stat">
              <div className="quiz-start-stat-num">{questionBank.length}</div>
              <div className="quiz-start-stat-label">Question Pool</div>
            </div>
            <div className="quiz-start-stat">
              <div className="quiz-start-stat-num">~5 min</div>
              <div className="quiz-start-stat-label">Duration</div>
            </div>
            <div className="quiz-start-stat">
              <div className="quiz-start-stat-num">80%</div>
              <div className="quiz-start-stat-label">Passing Score</div>
            </div>
          </div>
          <button className="quiz-btn primary" onClick={() => { setSeed(s => s + 1); setStarted(true) }}>
            Start Quiz
          </button>
        </div>
      </section>
    )
  }

  if (finished) {
    const pct = Math.round((score / QUIZ_SIZE) * 100)
    const passed = pct >= 80
    const wrongs = answers.filter(a => !a.correct)

    if (reviewing) {
      return (
        <section className="section" id="quiz">
          <span className="section-num">KNOWLEDGE CHECK</span>
          <h2 className="section-title">Review — Questions You Missed</h2>
          <div className="quiz-review-list">
            {wrongs.map((a, i) => {
              const q = questions[a.idx]
              return (
                <div className="quiz-review-card" key={i}>
                  <div className="quiz-review-num">Missed #{i + 1}</div>
                  <div className="quiz-question">{q.q}</div>
                  <div className="quiz-options" style={{ pointerEvents: 'none' }}>
                    {q.options.map((opt, oi) => {
                      let cls = 'quiz-option'
                      if (oi === q.answer) cls += ' correct'
                      else if (oi === a.picked) cls += ' wrong'
                      return (
                        <div key={oi} className={cls}>
                          <span className="quiz-option-letter">{'ABCD'[oi]}</span>
                          {opt}
                        </div>
                      )
                    })}
                  </div>
                  <div className="quiz-review-explanation">
                    You picked <strong>{q.options[a.picked]}</strong> — correct answer is <strong>{q.options[q.answer]}</strong>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="quiz-actions-row">
            <button className="quiz-btn secondary" onClick={() => setReviewing(false)}>Back to Results</button>
            <button className="quiz-btn primary" onClick={resetSame}>Retake Same Quiz</button>
            <button className="quiz-btn primary" onClick={resetNew}>New Quiz</button>
          </div>
        </section>
      )
    }

    return (
      <section className="section" id="quiz">
        <span className="section-num">KNOWLEDGE CHECK</span>
        <h2 className="section-title">Quiz Results</h2>
        <div className="quiz-results-card">
          <div className={`quiz-results-score ${passed ? 'pass' : 'fail'}`}>
            {pct}%
          </div>
          <div className="quiz-results-detail">
            {score} out of {QUIZ_SIZE} correct
          </div>
          <div className={`quiz-results-verdict ${passed ? 'pass' : 'fail'}`}>
            {passed ? 'Passed — great job!' : 'Not quite — review the material and try again.'}
          </div>
          <div className="quiz-actions-row">
            {wrongs.length > 0 && (
              <button className="quiz-btn secondary" onClick={() => setReviewing(true)}>
                Review {wrongs.length} Wrong Answer{wrongs.length > 1 ? 's' : ''}
              </button>
            )}
            <button className="quiz-btn primary" onClick={resetSame}>Retake Same Quiz</button>
            <button className="quiz-btn primary" onClick={resetNew}>New Quiz</button>
          </div>
        </div>
      </section>
    )
  }

  const q = questions[current]

  return (
    <section className="section" id="quiz">
      <span className="section-num">KNOWLEDGE CHECK</span>
      <h2 className="section-title">Training Quiz</h2>

      <div className="quiz-progress">
        <div className="quiz-progress-bar" style={{ width: `${((current + 1) / QUIZ_SIZE) * 100}%` }} />
      </div>
      <div className="quiz-progress-label">
        Question {current + 1} of {QUIZ_SIZE}
      </div>

      <div className="quiz-question-card">
        <div className="quiz-question">{q.q}</div>
        <div className="quiz-options">
          {q.options.map((opt, i) => {
            let cls = 'quiz-option'
            if (confirmed) {
              if (i === q.answer) cls += ' correct'
              else if (i === selected && i !== q.answer) cls += ' wrong'
            } else if (i === selected) {
              cls += ' selected'
            }
            return (
              <button
                key={i}
                className={cls}
                onClick={() => !confirmed && setSelected(i)}
                disabled={confirmed}
              >
                <span className="quiz-option-letter">{'ABCD'[i]}</span>
                {opt}
              </button>
            )
          })}
        </div>
        <div className="quiz-actions">
          {!confirmed ? (
            <button
              className="quiz-btn primary"
              onClick={handleConfirm}
              disabled={selected === null}
            >
              Submit Answer
            </button>
          ) : (
            <button className="quiz-btn primary" onClick={handleNext}>
              {current + 1 >= QUIZ_SIZE ? 'See Results' : 'Next Question'}
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
