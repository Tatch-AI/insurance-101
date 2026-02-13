import { useState, useEffect, useRef, useCallback } from 'react'
import Module101 from './Module101'
import Module102 from './Module102'
import Module201 from './Module201'
import Module203 from './Module203'

/* ── Navigation Data ── */
const modules = [
  {
    id: '101', label: '101', sub: 'Fundamentals',
    sections: [
      { id: 'overview', title: 'Overview', icon: '🏠' },
      { id: 'how-harper-works', title: 'How Harper Makes Money', icon: '💰' },
      { id: 'customer-lifecycle', title: 'Customer Lifecycle', icon: '🔄' },
      { id: 'billing-types', title: 'Policy Types & Billing', icon: '📋' },
      { id: 'revenue-risk', title: 'Revenue & Risk', icon: '📊' },
      { id: 'sales-requirements', title: 'Sales Requirements', icon: '🎯' },
      { id: 'service-workflow-101', title: 'Service Workflow', icon: '⚙️' },
    ]
  },
  {
    id: '102', label: '102', sub: 'Coverage Types',
    sections: [
      { id: 'coi-fundamentals', title: 'COI Fundamentals', icon: '📄' },
      { id: 'additional-insured', title: 'Additional Insured', icon: '🛡️' },
      { id: 'core-liability', title: 'Core Liability Types', icon: '⚖️' },
      { id: 'workers-comp', title: "Workers' Comp & Property", icon: '🏗️' },
      { id: 'specialty-coverage', title: 'Specialty Coverage & Bonds', icon: '🔒' },
    ]
  },
  {
    id: '201', label: '201', sub: 'Carriers & Ops',
    sections: [
      { id: 'billing-routing', title: 'Billing & Routing', icon: '🔍' },
      { id: 'direct-carriers', title: 'Direct Carriers', icon: '🏢' },
      { id: 'mgas-es', title: 'MGAs & E&S', icon: '🔗' },
      { id: 'appetite-guide', title: 'Appetite Guide', icon: '🎯' },
      { id: 'service-ops', title: 'Service Operations', icon: '⚙️' },
      { id: 'service-standards', title: 'Service Standards', icon: '⭐' },
    ]
  },
  {
    id: '203', label: '203', sub: 'Sales & Account Mgmt',
    sections: [
      { id: 'sales-pitch', title: 'Sales Pitch Framework', icon: '🎤' },
      { id: 'cross-sell', title: 'Cross-Sell & Objections', icon: '🔀' },
      { id: 'post-sale-handoff', title: 'Post-Sale Handoff & QC', icon: '🤝' },
      { id: 'cancellation-process', title: 'Cancellation Process', icon: '🚫' },
      { id: 'reinstatements', title: 'Reinstatements & Grace', icon: '🔄' },
      { id: 'customer-relationships', title: 'Customer Relationships', icon: '❤️' },
    ]
  }
]

const allSections = modules.flatMap(m => m.sections.map(s => ({ ...s, moduleId: m.id })))

export default function App() {
  const [activeTab, setActiveTab] = useState('101')
  const [activeSection, setActiveSection] = useState('overview')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const isScrollingRef = useRef(false)

  /* ── Scroll tracking ── */
  const handleScroll = useCallback(() => {
    // Progress bar
    const h = document.documentElement.scrollHeight - window.innerHeight
    setScrollProgress(h > 0 ? (window.scrollY / h) * 100 : 0)

    // Active section + tab tracking
    if (isScrollingRef.current) return
    let current = allSections[0]
    for (const s of allSections) {
      const el = document.getElementById(s.id)
      if (el && el.offsetTop - 90 <= window.scrollY) current = s
    }
    if (current) {
      setActiveSection(current.id)
      setActiveTab(current.moduleId)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  /* ── Scroll animations ── */
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: .08 })
    document.querySelectorAll('.animate-in').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  /* ── Click handlers ── */
  const scrollToSection = (sectionId, moduleId) => {
    const el = document.getElementById(sectionId)
    if (!el) return
    isScrollingRef.current = true
    setActiveSection(sectionId)
    setActiveTab(moduleId)
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setSidebarOpen(false)
    setTimeout(() => { isScrollingRef.current = false }, 800)
  }

  const handleTabClick = (moduleId) => {
    setActiveTab(moduleId)
    const mod = modules.find(m => m.id === moduleId)
    if (mod && mod.sections[0]) {
      scrollToSection(mod.sections[0].id, moduleId)
    }
  }

  const currentModule = modules.find(m => m.id === activeTab)

  return (
    <>
      {/* ── Top Bar ── */}
      <header className="topbar">
        <button className="sidebar-toggle" onClick={() => setSidebarOpen(o => !o)} aria-label="Toggle sidebar">
          &#9776;
        </button>
        <div className="topbar-logo">Harper Training</div>
        <span className="topbar-badge">INSURANCE GUIDE</span>
        <div className="topbar-right">Harper Internal Training</div>
        <div className="topbar-progress" style={{ width: `${scrollProgress}%` }} />
      </header>

      {/* ── Layout ── */}
      <div className="layout">

        {/* ── Sidebar ── */}
        <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`} onClick={e => e.stopPropagation()}>
          {/* Tabs */}
          <div className="sidebar-tabs">
            {modules.map(m => (
              <button
                key={m.id}
                className={`sidebar-tab ${activeTab === m.id ? 'active' : ''}`}
                onClick={() => handleTabClick(m.id)}
              >
                {m.label}
                <span className="sidebar-tab-sub">{m.sub}</span>
              </button>
            ))}
          </div>

          {/* Section Links */}
          <div className="sidebar-sections">
            {currentModule && (
              <div className="sidebar-group">
                <span className="sidebar-group-label">{currentModule.sub}</span>
                {currentModule.sections.map(s => (
                  <a
                    key={s.id}
                    className={`sidebar-link ${activeSection === s.id ? 'active' : ''}`}
                    onClick={() => scrollToSection(s.id, currentModule.id)}
                  >
                    <span className="sidebar-link-icon">{s.icon}</span>
                    {s.title}
                  </a>
                ))}
              </div>
            )}
          </div>
        </aside>

        {/* ── Main Content ── */}
        <main className="main" onClick={() => sidebarOpen && setSidebarOpen(false)}>

          {/* Hero */}
          <section className="hero" id="overview">
            <div className="hero-inner">
              <div className="hero-label">Insurance 101 → 102 → 201 → 203</div>
              <h1>Harper Insurance Training Guide</h1>
              <p>
                From fundamentals to advanced operations — everything the Harper team needs to know about insurance placement, coverage types, carrier routing, sales, and service. Built from Ammar's training sessions.
              </p>
              <div className="hero-stats">
                <div className="hero-stat">
                  <div className="hero-stat-num">4</div>
                  <div className="hero-stat-label">Training Modules</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-num">17+</div>
                  <div className="hero-stat-label">Carrier Partners</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-num">&lt;5 min</div>
                  <div className="hero-stat-label">COI / Binder Target</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-num">Same-Day</div>
                  <div className="hero-stat-label">Completion Standard</div>
                </div>
              </div>
            </div>
          </section>

          <div className="module-divider" />

          {/* Module 101 */}
          <Module101 />
          <div className="module-divider" />

          {/* Module 102 */}
          <Module102 />
          <div className="module-divider" />

          {/* Module 201 */}
          <Module201 />
          <div className="module-divider" />

          {/* Module 203 */}
          <Module203 />

          {/* Footer */}
          <div className="footer">
            <p style={{ color: 'var(--navy)' }}>Harper Insurance Training Guide — 101 through 203</p>
            <p style={{ marginTop: '.3rem' }}>Built from Ammar's training sessions · Harper Internal Use Only</p>
          </div>
        </main>
      </div>
    </>
  )
}
