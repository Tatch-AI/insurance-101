import { useState, useMemo, useCallback } from 'react'
import { useProgress } from './ProgressContext'

const EXAM_POOL = [
  // 101 - Business Model & Revenue
  { q: 'How does Harper generate revenue differently from traditional insurance agencies?', options: ['Harper charges higher premiums', 'Harper earns commission from carriers plus broker fees from customers, while paying for lead acquisition at scale', 'Harper only earns broker fees', 'Harper collects subscription fees from customers'], answer: 1 },
  { q: 'A customer buys a $5,000 agency bill policy. When does Harper receive the commission?', options: ['About one month after issuance', 'After the customer makes all 10 payments', 'Instantly — agency bill commission is paid upfront', 'Only at policy renewal'], answer: 2 },
  { q: 'What does it mean when a broker fee is structured as "earned"?', options: ['It is spread over monthly payments', 'It is collected 100% upfront and kept even if the customer cancels', 'It is deducted from the commission', 'It is refundable within 30 days'], answer: 1 },
  { q: 'Why does the minimum earned premium (MEP) matter to the customer?', options: ['It reduces their monthly payments', 'Even if they cancel the next day, they cannot get that portion of the premium back', 'It guarantees them a lower rate at renewal', 'It only applies to direct bill policies'], answer: 1 },

  // 101 - Billing & Process
  { q: 'What is the correct flow for premium financing?', options: ['Customer pays carrier, carrier pays broker', 'Finance company pays the broker, broker pays the carrier, customer makes monthly payments to finance company', 'Customer pays Harper, Harper pays everyone', 'Carrier funds the finance company directly'], answer: 1 },
  { q: 'What must be included with the bind request to avoid back-and-forth with the broker?', options: ['Only the signed application', 'The premium payment receipt', 'All subjectivities attached to the request', 'A copy of the customer\'s ID'], answer: 2 },
  { q: 'What is the gap between a typical down payment (15%) and the minimum earned premium (25%) on E&S policies?', options: ['5%', '10%', '15%', '20%'], answer: 1 },

  // 102 - Coverage Knowledge
  { q: 'A restaurant customer slips on a wet floor and breaks their arm. Which coverage responds?', options: ['Professional liability', 'Workers\' compensation', 'General liability', 'Property coverage'], answer: 2 },
  { q: 'What section of a COI do certificate holders look at to verify additional insured, waiver of subrogation, and P&NC?', options: ['Coverage & Limits section', 'Certificate Holder section', 'Description of Operations section', 'Policy Number section'], answer: 2 },
  { q: 'What does Primary & Non-Contributory (P&NC) mean on a policy?', options: ['The policy has no deductible', 'Your policy pays first before the other party\'s policy kicks in', 'The policy cannot be cancelled', 'Coverage applies in all 50 states'], answer: 1 },
  { q: 'Which coverage protects a business if an employee files a wrongful termination lawsuit?', options: ['General liability', 'Cyber liability', 'EPLI', 'D&O'], answer: 2 },
  { q: 'Why is liquor liability separate from general liability?', options: ['It costs less', 'Alcohol-related claims are excluded from standard GL policies', 'It is only required for bars', 'GL already covers alcohol incidents'], answer: 1 },

  // 201 - Carriers & Operations
  { q: 'Why should you always add additional insured on Coterie BEFORE binding?', options: ['It is free before binding', 'After binding, it requires a $250 endorsement fee and 3-5 day wait', 'Coterie does not allow AI after binding', 'It changes the premium amount'], answer: 1 },
  { q: 'What is the target turnaround time for issuing a COI?', options: ['Same business day', '5 minutes', '1 hour', '24 hours'], answer: 1 },
  { q: 'When a system issue is affecting tickets or workflows, what should you do?', options: ['Work around it quietly', 'Wait for someone else to report it', 'Flag it to engineering immediately — a problem for one agent affects all agents', 'Note it in your personal log'], answer: 2 },

  // 202 - Sales & Account Management
  { q: 'What is the most effective way to handle the objection "it\'s too expensive"?', options: ['Offer a discount immediately', 'Name the specific carriers you shopped to demonstrate thorough due diligence', 'Tell them insurance is required by law', 'Suggest they go without coverage'], answer: 1 },
  { q: 'During the grace period for missed payments, how many days does the customer have before any late fee?', options: ['3 days', '5 days', '10 days', '15 days'], answer: 1 },
  { q: 'What document must be submitted when reinstating a policy after the cancellation window?', options: ['A new application', 'A no-loss statement certifying no claims occurred during the coverage gap', 'A letter from the customer\'s attorney', 'An updated financial statement'], answer: 1 },
  { q: 'Why must ownership changes result in a policy cancel and rewrite rather than an endorsement?', options: ['Endorsements are too expensive', 'The policy is a contract with the original owner — a new entity requires a new policy', 'Carriers do not allow endorsements', 'It is faster to cancel and rewrite'], answer: 1 },
  { q: 'A customer calls angry about a delayed endorsement. What is the correct approach?', options: ['Escalate them above the queue', 'Deescalate, pick up the ticket yourself since you have the contact, and process in order', 'Transfer them to the carrier', 'Tell them to call back tomorrow'], answer: 1 },
]

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const EXAM_SIZE = 10
const PASS_THRESHOLD = 0.8

export default function FinalExam({ onBack }) {
  const { isComplete, markComplete } = useProgress()
  const done = isComplete('final-exam')

  const [seed, setSeed] = useState(0)
  const questions = useMemo(() => shuffle(EXAM_POOL).slice(0, EXAM_SIZE), [seed])

  const [started, setStarted] = useState(false)
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [confirmed, setConfirmed] = useState(false)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const [answers, setAnswers] = useState([])

  const reset = useCallback(() => {
    setSeed(s => s + 1)
    setCurrent(0)
    setSelected(null)
    setConfirmed(false)
    setScore(0)
    setFinished(false)
    setStarted(true)
    setAnswers([])
  }, [])

  const handleConfirm = () => {
    if (selected === null) return
    const correct = selected === questions[current].answer
    if (correct) setScore(s => s + 1)
    setAnswers(prev => [...prev, { idx: current, picked: selected, correct }])
    setConfirmed(true)
  }

  const handleNext = () => {
    if (current + 1 >= EXAM_SIZE) {
      setFinished(true)
    } else {
      setCurrent(c => c + 1)
      setSelected(null)
      setConfirmed(false)
    }
  }

  if (done && !started) {
    return (
      <div className="detail">
        <button className="detail-back" onClick={onBack}>← Back to Dashboard</button>
        <div className="exam-complete-banner">
          <div className="exam-complete-icon">🎓</div>
          <h1>Training Complete!</h1>
          <p>You've passed the Harper University Final Exam. You now have full access to all materials in Reference Mode.</p>
          <button className="btn-secondary" onClick={reset}>Retake Exam</button>
        </div>
      </div>
    )
  }

  if (!started) {
    return (
      <div className="detail">
        <button className="detail-back" onClick={onBack}>← Back to Dashboard</button>
        <div className="detail-header">
          <span className="badge b-coral">FINAL EXAM</span>
        </div>
        <h1 className="detail-title">Final Exam</h1>
        <p className="detail-desc">
          {EXAM_SIZE} random questions from a dedicated exam pool — different from module quizzes. You need {Math.round(PASS_THRESHOLD * 100)}% to pass and complete your Harper University training.
        </p>
        <div className="exam-start-card">
          <div className="exam-stats">
            <div className="exam-stat">
              <span className="exam-stat-num">{EXAM_SIZE}</span>
              <span className="exam-stat-label">Questions</span>
            </div>
            <div className="exam-stat">
              <span className="exam-stat-num">{EXAM_POOL.length}</span>
              <span className="exam-stat-label">Question Pool</span>
            </div>
            <div className="exam-stat">
              <span className="exam-stat-num">{Math.round(PASS_THRESHOLD * 100)}%</span>
              <span className="exam-stat-label">To Pass</span>
            </div>
          </div>
          <button className="btn-primary" onClick={() => { setSeed(s => s + 1); setStarted(true) }}>
            Start Exam
          </button>
        </div>
      </div>
    )
  }

  if (finished) {
    const pct = Math.round((score / EXAM_SIZE) * 100)
    const passed = pct / 100 >= PASS_THRESHOLD
    const wrongs = answers.filter(a => !a.correct)

    if (passed && !done) markComplete('final-exam')

    return (
      <div className="detail">
        <button className="detail-back" onClick={onBack}>← Back to Dashboard</button>
        <div className="mq-results">
          <div className={`mq-score ${passed ? 'pass' : 'fail'}`}>{pct}%</div>
          <div className="mq-detail">{score} of {EXAM_SIZE} correct</div>
          <div className={`mq-verdict ${passed ? 'pass' : 'fail'}`}>
            {passed ? 'Congratulations — you passed the Final Exam! 🎉' : 'Not quite — review and try again.'}
          </div>
          {wrongs.length > 0 && (
            <div className="mq-wrong-list">
              {wrongs.map((a, i) => (
                <div className="mq-wrong-item" key={i}>
                  <div className="mq-wrong-q">{questions[a.idx].q}</div>
                  <div className="mq-wrong-ans">
                    Your answer: <strong>{questions[a.idx].options[a.picked]}</strong><br />
                    Correct: <strong>{questions[a.idx].options[questions[a.idx].answer]}</strong>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="mq-actions">
            {passed ? (
              <button className="btn-primary" onClick={onBack}>Back to Dashboard →</button>
            ) : (
              <button className="btn-primary" onClick={reset}>Try Again</button>
            )}
          </div>
        </div>
      </div>
    )
  }

  const q = questions[current]

  return (
    <div className="detail">
      <button className="detail-back" onClick={onBack}>← Back to Dashboard</button>
      <div className="detail-header">
        <span className="badge b-coral">FINAL EXAM</span>
      </div>
      <h1 className="detail-title">Final Exam</h1>

      <div className="mq-card">
        <div className="mq-progress">
          <div className="mq-progress-bar" style={{ width: `${((current + 1) / EXAM_SIZE) * 100}%` }} />
        </div>
        <div className="mq-progress-label">Question {current + 1} of {EXAM_SIZE}</div>
        <div className="mq-question">{q.q}</div>
        <div className="mq-options">
          {q.options.map((opt, i) => {
            let cls = 'mq-option'
            if (confirmed) {
              if (i === q.answer) cls += ' correct'
              else if (i === selected && i !== q.answer) cls += ' wrong'
            } else if (i === selected) cls += ' selected'
            return (
              <button key={i} className={cls} onClick={() => !confirmed && setSelected(i)} disabled={confirmed}>
                <span className="mq-option-letter">{'ABCD'[i]}</span>{opt}
              </button>
            )
          })}
        </div>
        <div className="mq-actions">
          {!confirmed ? (
            <button className="btn-primary" onClick={handleConfirm} disabled={selected === null}>Submit Answer</button>
          ) : (
            <button className="btn-primary" onClick={handleNext}>
              {current + 1 >= EXAM_SIZE ? 'See Results' : 'Next →'}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
