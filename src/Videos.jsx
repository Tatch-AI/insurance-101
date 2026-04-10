import { useState } from 'react'

const videoModules = [
  {
    id: 'module-1',
    title: 'Module 1 — General Liability Insurance',
    desc: 'Introduction to general liability coverage, what it protects, and why every business needs it.',
    driveId: '1D0LBjQuMMUDSoTsVsfMEnjAjRJKE7ioC',
    badges: [{ label: 'MODULE 1', cls: 'b-green' }],
  },
  {
    id: 'module-2',
    title: 'Module 2 — Professional Liability & E&O',
    desc: 'Errors & omissions coverage, who needs it, and how it differs from general liability.',
    driveId: '19jUhZs79_kYU7M4tMgNQgOmWo0BoBr7L',
    badges: [{ label: 'MODULE 2', cls: 'b-green' }],
  },
  {
    id: 'module-3',
    title: 'Module 3 — EPLI',
    desc: 'Employment Practices Liability Insurance — protecting businesses from employee-related claims.',
    driveId: '10fik_h9AiCXRt31aB3o0hLnAL8PFSLf_',
    badges: [{ label: 'MODULE 3', cls: 'b-green' }],
  },
  {
    id: 'module-4',
    title: 'Module 4 — Directors & Officers Insurance',
    desc: 'D&O coverage for company leaders, what it covers, and when it applies.',
    driveId: '1mT7nzY7Qfp11Vr4sviuMLDzol-uvLyOL',
    badges: [{ label: 'MODULE 4', cls: 'b-green' }],
  },
  {
    id: 'module-5',
    title: 'Module 5 — Liquor Liability',
    desc: 'Liquor liability essentials for businesses that serve, sell, or distribute alcohol.',
    driveId: '1k1nYQYAuf0bEeDeUnDsGbzrci0eTu38a',
    badges: [{ label: 'MODULE 5', cls: 'b-green' }],
  },
  {
    id: 'module-6',
    title: 'Module 6 — Claims-Made Policies',
    desc: 'Understanding claims-made vs. occurrence policies and how coverage triggers work.',
    driveId: '1nPW-BmIgl0jvHAhBnLUnGrSRKz72XwL5',
    badges: [{ label: 'MODULE 6', cls: 'b-green' }],
  },
  {
    id: 'module-7',
    title: 'Module 7 — Business Income',
    desc: 'Business income and extra expense coverage — protecting revenue when operations are disrupted.',
    driveId: '1irh5YwlKsLQHGyx9OnITRoPydT-y_YPz',
    badges: [{ label: 'MODULE 7', cls: 'b-green' }],
  },
  {
    id: 'module-8',
    title: 'Module 8 — Cyber Liability',
    desc: 'Cyber liability coverage for data breaches, ransomware, and digital risks.',
    driveId: '1kyDvwGPYnA6VeAxjYM0Fx-GDmU-SwnZp',
    badges: [{ label: 'MODULE 8', cls: 'b-green' }],
  },
  {
    id: 'module-9',
    title: 'Module 9 — Inland Marine',
    desc: 'Inland marine insurance — covering equipment, tools, and property in transit.',
    driveId: '1tg90UV9kG4FTwtkttgrSiLM8Rc6UEoOE',
    badges: [{ label: 'MODULE 9', cls: 'b-green' }],
  },
  {
    id: 'module-10',
    title: 'Module 10 — Building & BPP Coverage',
    desc: 'Building and business personal property coverage — protecting physical assets.',
    driveId: '1tnz_ug1y-_st_Cyrd_UvR2RnBmV9pI0o',
    badges: [{ label: 'MODULE 10', cls: 'b-green' }],
  },
  {
    id: 'module-11',
    title: 'Module 11 — Common Intake Mistakes',
    desc: 'Common mistakes during intake and how to avoid them for better accuracy and service.',
    driveId: '1oCHd2RXgo9oRxk9ITWTpU9R3f6msWeQt',
    badges: [{ label: 'MODULE 11', cls: 'b-orange' }],
  },
]

function IntroPoster({ onPlay }) {
  return (
    <div className="video-card" id="intro-video">
      <div className="video-poster" onClick={onPlay}>
        <div className="poster-bg" />
        <div className="poster-content">
          <div className="poster-badge">HARPER UNIVERSITY</div>
          <h2 className="poster-title">New Hire Training</h2>
          <p className="poster-sub">Introduction to insurance fundamentals, Harper workflows, carrier routing, and service standards.</p>
          <div className="poster-play">
            <svg viewBox="0 0 48 48" width="64" height="64" fill="none">
              <circle cx="24" cy="24" r="23" stroke="#fff" strokeWidth="2" opacity=".85" />
              <path d="M19 15l14 9-14 9V15z" fill="#fff" opacity=".9" />
            </svg>
          </div>
        </div>
      </div>
      <div className="video-info">
        <div className="video-badge-row">
          <span className="badge b-coral">REQUIRED</span>
          <span className="badge b-blue">NEW HIRE</span>
        </div>
        <h3 className="video-title">New Hire Training</h3>
        <p className="video-desc">
          Comprehensive onboarding session covering insurance fundamentals, Harper workflows, carrier routing, and service standards. Required viewing for all new team members.
        </p>
      </div>
    </div>
  )
}

export default function Videos() {
  const [introPlaying, setIntroPlaying] = useState(false)

  return (
    <section className="section" id="videos">
      <span className="section-num">TRAINING VIDEOS</span>
      <h2 className="section-title">Video Library</h2>
      <p className="section-desc">
        Start with the intro video, then work through each module in order.
      </p>

      <div className="video-grid">
        {introPlaying ? (
          <div className="video-card" id="intro-video">
            <div className="video-wrapper">
              <iframe
                src="https://drive.google.com/file/d/1heqi22KnVnPOzrdgoV1eTAJnXG-DmsyR/preview"
                sandbox="allow-scripts allow-same-origin"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="New Hire Training"
              />
              <div className="video-block-newtab" />
            </div>
            <div className="video-info">
              <div className="video-badge-row">
                <span className="badge b-coral">REQUIRED</span>
                <span className="badge b-blue">NEW HIRE</span>
              </div>
              <h3 className="video-title">New Hire Training</h3>
              <p className="video-desc">
                Comprehensive onboarding session covering insurance fundamentals, Harper workflows, carrier routing, and service standards. Required viewing for all new team members.
              </p>
            </div>
          </div>
        ) : (
          <IntroPoster onPlay={() => setIntroPlaying(true)} />
        )}

        {videoModules.map((m) => (
          <div className="video-card" key={m.id} id={m.id}>
            <div className="video-wrapper">
              <iframe
                src={`https://drive.google.com/file/d/${m.driveId}/preview`}
                sandbox="allow-scripts allow-same-origin"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title={m.title}
              />
              <div className="video-block-newtab" />
            </div>
            <div className="video-info">
              <div className="video-badge-row">
                {m.badges.map((b) => (
                  <span className={`badge ${b.cls}`} key={b.label}>
                    {b.label}
                  </span>
                ))}
              </div>
              <h3 className="video-title">{m.title}</h3>
              <p className="video-desc">{m.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
