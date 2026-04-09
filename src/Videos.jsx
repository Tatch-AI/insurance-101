export default function Videos() {
  return (
    <section className="section" id="videos">
      <span className="section-num">TRAINING VIDEOS</span>
      <h2 className="section-title">Video Library</h2>
      <p className="section-desc">
        Watch training sessions to supplement the written modules. These recordings cover key concepts, workflows, and real-world examples.
      </p>

      <div className="video-grid">
        <div className="video-card">
          <div className="video-wrapper">
            <iframe
              src="https://drive.google.com/file/d/1heqi22KnVnPOzrdgoV1eTAJnXG-DmsyR/preview"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="New Hire Training Video"
            />
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
      </div>
    </section>
  )
}
