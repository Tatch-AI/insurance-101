import { useState, useMemo, useCallback } from 'react'
import { useProgress } from './ProgressContext'
import { MODULES } from './modules'

const allQuestions = MODULES
  .filter(m => m.type === 'reading' && m.quiz)
  .flatMap(m => m.quiz)

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
  const questions = useMemo(() => shuffle(allQuestions).slice(0, EXAM_SIZE), [seed])

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
          {EXAM_SIZE} random questions from across all reading modules. You need {Math.round(PASS_THRESHOLD * 100)}% to pass and complete your Harper University training.
        </p>
        <div className="exam-start-card">
          <div className="exam-stats">
            <div className="exam-stat">
              <span className="exam-stat-num">{EXAM_SIZE}</span>
              <span className="exam-stat-label">Questions</span>
            </div>
            <div className="exam-stat">
              <span className="exam-stat-num">{allQuestions.length}</span>
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
