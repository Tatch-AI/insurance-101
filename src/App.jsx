import { useState, useCallback } from 'react'
import Dashboard from './Dashboard'
import ModuleDetail from './ModuleDetail'
import FinalExam from './FinalExam'
import { MODULES } from './modules'
import { useProgress } from './ProgressContext'

export default function App() {
  const [view, setView] = useState('dashboard')
  const [activeModuleId, setActiveModuleId] = useState(null)
  const [mode, setMode] = useState('learning')
  const { isComplete } = useProgress()

  const allDone = MODULES.every(m => isComplete(m.id))

  const openModule = useCallback((id) => {
    setActiveModuleId(id)
    setView('detail')
    window.scrollTo(0, 0)
  }, [])

  const goHome = useCallback(() => {
    setView('dashboard')
    setActiveModuleId(null)
    window.scrollTo(0, 0)
  }, [])

  const activeMod = MODULES.find(m => m.id === activeModuleId)

  return (
    <>
      {/* Topbar */}
      <header className="topbar">
        <button className="topbar-home" onClick={goHome}>Harper University</button>
        <div className="topbar-mode-toggle">
          <button
            className={`mode-btn ${mode === 'learning' ? 'active' : ''}`}
            onClick={() => setMode('learning')}
          >
            📖 Learning
          </button>
          <button
            className={`mode-btn ${mode === 'reference' ? 'active' : ''}`}
            onClick={() => setMode('reference')}
            disabled={!allDone && mode !== 'reference'}
            title={!allDone ? 'Complete all modules to unlock Reference Mode' : ''}
          >
            🔍 Reference {!allDone && '🔒'}
          </button>
        </div>
      </header>

      {/* Content */}
      <div className="page">
        {view === 'dashboard' && (
          <>
            {/* Hero */}
            <section className="hero">
              <div className="hero-inner">
                <div className="hero-label">Harper University</div>
                <h1>Insurance Training Platform</h1>
                <p>
                  From fundamentals to advanced operations — everything the Harper team needs to know about insurance placement, coverage, carrier routing, sales, and service.
                </p>
              </div>
            </section>

            <Dashboard onOpen={openModule} mode={mode} />

            <footer className="site-footer">
              <p className="footer-brand">Harper University</p>
              <p className="footer-credit">Created by Aarfan Hussain and Ammar Haque <span className="footer-tag">#HarperLegends</span></p>
            </footer>
          </>
        )}

        {view === 'detail' && activeMod && activeMod.type !== 'exam' && (
          <ModuleDetail mod={activeMod} onBack={goHome} referenceMode={mode === 'reference'} />
        )}

        {view === 'detail' && activeMod && activeMod.type === 'exam' && (
          <FinalExam onBack={goHome} />
        )}
      </div>
    </>
  )
}
