import { useState, useCallback } from 'react'

const questions = [
  {
    q: 'What are Harper\'s two revenue channels?',
    options: [
      'Salary and tips',
      'Commission and broker fees',
      'Referral bonuses and advertising',
      'Subscription fees and commission',
    ],
    answer: 1,
  },
  {
    q: 'What happens if a policy cancels early?',
    options: [
      'Harper keeps the full commission',
      'The customer gets a bonus',
      'Harper must repay commission to the carrier (chargeback)',
      'Nothing — commission is non-refundable',
    ],
    answer: 2,
  },
  {
    q: 'What percentage of leads are typically lost in mid funnel?',
    options: ['10%', '25%', '50%', '75%'],
    answer: 2,
  },
  {
    q: 'What should you always try before going to the E&S market?',
    options: [
      'Agency bill',
      'Direct bill',
      'Premium financing',
      'Surplus lines',
    ],
    answer: 1,
  },
  {
    q: 'What is the minimum earned premium on E&S policies?',
    options: ['10%', '15%', '25%', '50%'],
    answer: 2,
  },
  {
    q: 'A Certificate of Insurance (COI) does what?',
    options: [
      'Grants additional coverage to the holder',
      'Replaces the actual insurance policy',
      'Proves coverage exists — but does not grant coverage',
      'Cancels the existing policy',
    ],
    answer: 2,
  },
  {
    q: 'What does General Liability (GL) cover?',
    options: [
      'Employee injuries on the job',
      'Third-party bodily injury and property damage',
      'Data breaches and hacking',
      'Professional service errors',
    ],
    answer: 1,
  },
  {
    q: 'Why are Workers\' Comp payroll audits dangerous for customers?',
    options: [
      'They reduce coverage limits',
      'They cancel the policy automatically',
      'Understating payroll triggers adjustment bills and can block future coverage nationally',
      'They increase broker fees',
    ],
    answer: 2,
  },
  {
    q: 'When must premium financing be set up on agency bill policies?',
    options: [
      'Only if the customer requests it',
      'After the first claim',
      'When the customer does not pay in full',
      'At renewal only',
    ],
    answer: 2,
  },
  {
    q: 'What is a Waiver of Subrogation?',
    options: [
      'A discount on the policy premium',
      'The carrier agrees not to sue a specific party after paying a claim',
      'A type of additional insured endorsement',
      'A method to cancel coverage',
    ],
    answer: 1,
  },
]

export default function Quiz() {
  const [started, setStarted] = useState(false)
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [confirmed, setConfirmed] = useState(false)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const reset = useCallback(() => {
    setStarted(false)
    setCurrent(0)
    setSelected(null)
    setConfirmed(false)
    setScore(0)
    setFinished(false)
  }, [])

  const handleConfirm = () => {
    if (selected === null) return
    const correct = selected === questions[current].answer
    if (correct) setScore(s => s + 1)
    setConfirmed(true)
  }

  const handleNext = () => {
    if (current + 1 >= questions.length) {
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
          Test your knowledge of the insurance training material. 10 questions, takes about 3–5 minutes.
        </p>
        <div className="quiz-start-card">
          <div className="quiz-start-stats">
            <div className="quiz-start-stat">
              <div className="quiz-start-stat-num">10</div>
              <div className="quiz-start-stat-label">Questions</div>
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
          <button className="quiz-btn primary" onClick={() => setStarted(true)}>
            Start Quiz
          </button>
        </div>
      </section>
    )
  }

  if (finished) {
    const pct = Math.round((score / questions.length) * 100)
    const passed = pct >= 80
    return (
      <section className="section" id="quiz">
        <span className="section-num">KNOWLEDGE CHECK</span>
        <h2 className="section-title">Quiz Results</h2>
        <div className="quiz-results-card">
          <div className={`quiz-results-score ${passed ? 'pass' : 'fail'}`}>
            {pct}%
          </div>
          <div className="quiz-results-detail">
            {score} out of {questions.length} correct
          </div>
          <div className={`quiz-results-verdict ${passed ? 'pass' : 'fail'}`}>
            {passed ? 'Passed — great job!' : 'Not quite — review the material and try again.'}
          </div>
          <button className="quiz-btn primary" onClick={reset}>
            {passed ? 'Retake Quiz' : 'Try Again'}
          </button>
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
        <div className="quiz-progress-bar" style={{ width: `${((current + 1) / questions.length) * 100}%` }} />
      </div>
      <div className="quiz-progress-label">
        Question {current + 1} of {questions.length}
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
              {current + 1 >= questions.length ? 'See Results' : 'Next Question'}
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
