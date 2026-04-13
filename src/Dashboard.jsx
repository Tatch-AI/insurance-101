import { MODULES } from './modules'
import { useProgress } from './ProgressContext'

export default function Dashboard({ onOpen, mode }) {
  const { isComplete, completed, resetProgress } = useProgress()
  const referenceMode = mode === 'reference'

  const totalModules = MODULES.length
  const completedCount = completed.length
  const pct = Math.round((completedCount / totalModules) * 100)

  const videoModules = MODULES.filter(m => m.type === 'video' && !m.group)
  const intakeModules = MODULES.filter(m => m.group === 'intake-training')
  const readingModules = MODULES.filter(m => m.type === 'reading')
  const examModule = MODULES.find(m => m.type === 'exam')

  const isUnlocked = (mod) => {
    if (referenceMode) return true
    const idx = MODULES.findIndex(m => m.id === mod.id)
    if (idx === 0) return true
    return isComplete(MODULES[idx - 1].id)
  }

  const allPreExamDone = MODULES.filter(m => m.type !== 'exam').every(m => isComplete(m.id))

  return (
    <div className="dash">
      {/* Progress Header */}
      <div className="dash-header">
        <div className="dash-header-left">
          <h1 className="dash-title">
            {referenceMode ? 'Reference Library' : 'Your Training Path'}
          </h1>
          <p className="dash-subtitle">
            {referenceMode
              ? 'Browse all modules freely — videos, readings, and quizzes.'
              : 'Complete each module in order to finish your Harper University training.'}
          </p>
        </div>
        {!referenceMode && (
          <div className="dash-progress-ring">
            <svg viewBox="0 0 80 80" className="progress-svg">
              <circle cx="40" cy="40" r="34" className="progress-track" />
              <circle cx="40" cy="40" r="34" className="progress-fill"
                style={{ strokeDasharray: `${2 * Math.PI * 34}`, strokeDashoffset: `${2 * Math.PI * 34 * (1 - pct / 100)}` }} />
            </svg>
            <div className="progress-pct">{pct}%</div>
          </div>
        )}
      </div>

      {!referenceMode && (
        <div className="dash-stats">
          <div className="dash-stat">
            <span className="dash-stat-num">{completedCount}</span>
            <span className="dash-stat-label">Completed</span>
          </div>
          <div className="dash-stat">
            <span className="dash-stat-num">{totalModules - completedCount}</span>
            <span className="dash-stat-label">Remaining</span>
          </div>
          <div className="dash-stat">
            <span className="dash-stat-num">{videoModules.length}</span>
            <span className="dash-stat-label">Videos</span>
          </div>
          <div className="dash-stat">
            <span className="dash-stat-num">{readingModules.length}</span>
            <span className="dash-stat-label">Readings</span>
          </div>
        </div>
      )}

      {/* Video Modules */}
      <div className="dash-section">
        <h2 className="dash-section-title">
          <span className="dash-section-icon">🎬</span> Video Modules
        </h2>
        <p className="dash-section-desc">
          {referenceMode
            ? 'All video modules available for reference.'
            : 'Watch each video, then mark it complete to unlock the next.'}
        </p>
        <div className="module-grid">
          {videoModules.map(mod => {
            const done = isComplete(mod.id)
            const unlocked = isUnlocked(mod)
            return (
              <button
                key={mod.id}
                className={`module-card ${done ? 'done' : ''} ${!unlocked ? 'locked' : ''}`}
                onClick={() => unlocked && onOpen(mod.id)}
                disabled={!unlocked}
              >
                <div className="module-card-top">
                  <span className={`badge ${mod.badge.cls}`}>{mod.badge.label}</span>
                  {done && <span className="module-check">✓</span>}
                  {!unlocked && <span className="module-lock">🔒</span>}
                </div>
                <div className="module-card-icon">{mod.icon}</div>
                <h3 className="module-card-title">{mod.title}</h3>
                <p className="module-card-desc">{mod.desc}</p>
                <div className="module-card-type">
                  <span className="type-dot video" />Video
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Intake Training Videos */}
      <div className="dash-section">
        <h2 className="dash-section-title">
          <span className="dash-section-icon">📋</span> Intake Training Videos
        </h2>
        <p className="dash-section-desc">
          {referenceMode
            ? 'Industry-specific intake walkthroughs.'
            : 'Watch each intake walkthrough, then mark it complete to unlock the next.'}
        </p>
        <div className="module-grid">
          {intakeModules.map(mod => {
            const done = isComplete(mod.id)
            const unlocked = isUnlocked(mod)
            return (
              <button
                key={mod.id}
                className={`module-card ${done ? 'done' : ''} ${!unlocked ? 'locked' : ''}`}
                onClick={() => unlocked && onOpen(mod.id)}
                disabled={!unlocked}
              >
                <div className="module-card-top">
                  <span className={`badge ${mod.badge.cls}`}>{mod.badge.label}</span>
                  {done && <span className="module-check">✓</span>}
                  {!unlocked && <span className="module-lock">🔒</span>}
                </div>
                <div className="module-card-icon">{mod.icon}</div>
                <h3 className="module-card-title">{mod.title}</h3>
                <p className="module-card-desc">{mod.desc}</p>
                <div className="module-card-type">
                  <span className="type-dot video" />Video
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Reading Modules */}
      <div className="dash-section">
        <h2 className="dash-section-title">
          <span className="dash-section-icon">📚</span> Reading Modules
        </h2>
        <p className="dash-section-desc">
          {referenceMode
            ? 'All reading materials available for reference.'
            : 'Read the material, then pass the quiz (5 questions, 80%) to move on.'}
        </p>
        <div className="module-grid">
          {readingModules.map(mod => {
            const done = isComplete(mod.id)
            const unlocked = isUnlocked(mod)
            return (
              <button
                key={mod.id}
                className={`module-card ${done ? 'done' : ''} ${!unlocked ? 'locked' : ''}`}
                onClick={() => unlocked && onOpen(mod.id)}
                disabled={!unlocked}
              >
                <div className="module-card-top">
                  <span className={`badge ${mod.badge.cls}`}>{mod.badge.label}</span>
                  {done && <span className="module-check">✓</span>}
                  {!unlocked && <span className="module-lock">🔒</span>}
                </div>
                <div className="module-card-icon">{mod.icon}</div>
                <h3 className="module-card-title">{mod.title}</h3>
                <p className="module-card-desc">{mod.desc}</p>
                <div className="module-card-type">
                  <span className="type-dot reading" />Reading + Quiz
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Final Exam */}
      {examModule && (
        <div className="dash-section">
          <h2 className="dash-section-title">
            <span className="dash-section-icon">🎓</span> Final Exam
          </h2>
          <p className="dash-section-desc">
            {referenceMode
              ? 'Practice the final exam anytime.'
              : 'Complete all modules above to unlock the final exam.'}
          </p>
          <div className="module-grid">
            <button
              className={`module-card exam-card ${isComplete(examModule.id) ? 'done' : ''} ${!referenceMode && !allPreExamDone ? 'locked' : ''}`}
              onClick={() => (referenceMode || allPreExamDone) && onOpen(examModule.id)}
              disabled={!referenceMode && !allPreExamDone}
            >
              <div className="module-card-top">
                <span className={`badge ${examModule.badge.cls}`}>{examModule.badge.label}</span>
                {isComplete(examModule.id) && <span className="module-check">✓</span>}
                {!referenceMode && !allPreExamDone && <span className="module-lock">🔒</span>}
              </div>
              <div className="module-card-icon">{examModule.icon}</div>
              <h3 className="module-card-title">{examModule.title}</h3>
              <p className="module-card-desc">{examModule.desc}</p>
            </button>
          </div>
        </div>
      )}

      {!referenceMode && completedCount > 0 && (
        <div className="dash-reset">
          <button className="dash-reset-btn" onClick={resetProgress}>Reset All Progress</button>
        </div>
      )}
    </div>
  )
}
