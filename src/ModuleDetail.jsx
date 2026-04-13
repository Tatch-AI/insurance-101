import { useState, useCallback, lazy, Suspense } from 'react'
import { useProgress } from './ProgressContext'

const Module101 = lazy(() => import('./Module101'))
const Module102 = lazy(() => import('./Module102'))
const Module201 = lazy(() => import('./Module201'))
const Module203 = lazy(() => import('./Module203'))

const COMPONENTS = { Module101, Module102, Module201, Module203 }

function ModuleQuiz({ quiz, onPass }) {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [confirmed, setConfirmed] = useState(false)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const [answers, setAnswers] = useState([])
  const PASS_THRESHOLD = 0.8

  const q = quiz[current]

  const handleConfirm = () => {
    if (selected === null) return
    const correct = selected === q.answer
    if (correct) setScore(s => s + 1)
    setAnswers(prev => [...prev, { idx: current, picked: selected, correct }])
    setConfirmed(true)
  }

  const handleNext = () => {
    if (current + 1 >= quiz.length) {
      setFinished(true)
    } else {
      setCurrent(c => c + 1)
      setSelected(null)
      setConfirmed(false)
    }
  }

  const retry = useCallback(() => {
    setCurrent(0)
    setSelected(null)
    setConfirmed(false)
    setScore(0)
    setFinished(false)
    setAnswers([])
  }, [])

  if (finished) {
    const pct = Math.round((score / quiz.length) * 100)
    const passed = pct / 100 >= PASS_THRESHOLD

    return (
      <div className="mq-results">
        <div className={`mq-score ${passed ? 'pass' : 'fail'}`}>{pct}%</div>
        <div className="mq-detail">{score} of {quiz.length} correct</div>
        <div className={`mq-verdict ${passed ? 'pass' : 'fail'}`}>
          {passed ? 'Passed — module complete!' : 'Not quite — review and try again.'}
        </div>
        {!passed && (
          <div className="mq-wrong-list">
            {answers.filter(a => !a.correct).map((a, i) => (
              <div className="mq-wrong-item" key={i}>
                <div className="mq-wrong-q">{quiz[a.idx].q}</div>
                <div className="mq-wrong-ans">
                  Your answer: <strong>{quiz[a.idx].options[a.picked]}</strong><br />
                  Correct: <strong>{quiz[a.idx].options[quiz[a.idx].answer]}</strong>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="mq-actions">
          {passed ? (
            <button className="btn-primary" onClick={onPass}>Continue →</button>
          ) : (
            <button className="btn-primary" onClick={retry}>Try Again</button>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="mq-card">
      <div className="mq-progress">
        <div className="mq-progress-bar" style={{ width: `${((current + 1) / quiz.length) * 100}%` }} />
      </div>
      <div className="mq-progress-label">Question {current + 1} of {quiz.length}</div>
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
            {current + 1 >= quiz.length ? 'See Results' : 'Next →'}
          </button>
        )}
      </div>
    </div>
  )
}

export default function ModuleDetail({ mod, onBack, referenceMode }) {
  const { isComplete, markComplete } = useProgress()
  const [showQuiz, setShowQuiz] = useState(false)
  const done = isComplete(mod.id)

  const handleMarkWatched = () => {
    markComplete(mod.id)
    onBack()
  }

  const handleQuizPass = () => {
    markComplete(mod.id)
    onBack()
  }

  if (mod.type === 'video') {
    const isFolderVideo = !mod.driveId && mod.folderDriveId

    return (
      <div className="detail">
        <button className="detail-back" onClick={onBack}>← Back to Dashboard</button>
        <div className="detail-header">
          <span className={`badge ${mod.badge.cls}`}>{mod.badge.label}</span>
          {done && <span className="badge b-green">COMPLETED ✓</span>}
        </div>
        <h1 className="detail-title">{mod.title}</h1>
        <p className="detail-desc">{mod.desc}</p>
        <div className="detail-video">
          {isFolderVideo ? (
            <a
              href={`https://drive.google.com/drive/folders/${mod.folderDriveId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="detail-folder-link"
            >
              <div className="poster-bg" />
              <div className="poster-content">
                <p className="poster-sub" style={{ fontSize: '.85rem', opacity: .75, marginBottom: '.5rem' }}>{mod.fileName}</p>
                <div className="poster-play">
                  <svg viewBox="0 0 48 48" width="64" height="64" fill="none">
                    <circle cx="24" cy="24" r="23" stroke="#fff" strokeWidth="2" opacity=".85" />
                    <path d="M19 15l14 9-14 9V15z" fill="#fff" opacity=".9" />
                  </svg>
                </div>
                <p className="poster-sub" style={{ fontSize: '.78rem', marginTop: '.5rem' }}>Click to open in Google Drive</p>
              </div>
            </a>
          ) : (
            <div className="video-wrapper">
              <iframe
                src={`https://drive.google.com/file/d/${mod.driveId}/preview`}
                sandbox="allow-scripts allow-same-origin"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title={mod.title}
              />
              <div className="video-block-newtab" />
            </div>
          )}
        </div>
        {!done && !referenceMode && (
          <div className="detail-actions">
            <button className="btn-primary" onClick={handleMarkWatched}>Mark as Watched ✓</button>
          </div>
        )}
      </div>
    )
  }

  if (mod.type === 'reading') {
    const Comp = COMPONENTS[mod.component]

    if (showQuiz) {
      return (
        <div className="detail">
          <button className="detail-back" onClick={() => setShowQuiz(false)}>← Back to Reading</button>
          <div className="detail-header">
            <span className={`badge ${mod.badge.cls}`}>QUIZ</span>
          </div>
          <h1 className="detail-title">{mod.title} — Quiz</h1>
          <p className="detail-desc">{referenceMode ? 'Practice quiz — results won\'t affect your progress.' : 'Answer all questions. 80% to pass and complete this module.'}</p>
          <ModuleQuiz quiz={mod.quiz} onPass={referenceMode ? () => setShowQuiz(false) : handleQuizPass} />
        </div>
      )
    }

    return (
      <div className="detail">
        <button className="detail-back" onClick={onBack}>← Back to Dashboard</button>
        <div className="detail-header">
          <span className={`badge ${mod.badge.cls}`}>{mod.badge.label}</span>
          {done && <span className="badge b-green">COMPLETED ✓</span>}
        </div>
        <h1 className="detail-title">{mod.title}</h1>
        <p className="detail-desc">{mod.desc}</p>
        <div className="detail-reading">
          <Suspense fallback={<div className="detail-loading">Loading…</div>}>
            <Comp />
          </Suspense>
        </div>
        <div className="detail-actions">
          {!done && !referenceMode ? (
            <button className="btn-primary" onClick={() => setShowQuiz(true)}>Take Quiz to Complete →</button>
          ) : (
            <button className="btn-secondary" onClick={() => setShowQuiz(true)}>Practice Quiz</button>
          )}
        </div>
      </div>
    )
  }

  return null
}
