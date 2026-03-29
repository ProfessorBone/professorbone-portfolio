export default function Education() {
  return (
    <div className="inner-section">
      <div className="section-tag">04 — Education</div>
      <h2 className="section-heading">Credentials &<br />Certifications</h2>
      <p className="section-sub">
        A non-traditional path built on real systems and serious study.
        Every credential earned while logging miles across the Northeast.
      </p>

      <div className="edu-section-label">Degrees</div>
      <div className="edu-grid" style={{marginBottom:"48px"}}>
        <div className="edu-card featured">
          <div>
            <div className="edu-badge"><span style={{color:"var(--cyan)"}}>★</span> Bachelor of Science</div>
            <div className="edu-institution">Daytona State College</div>
            <div className="edu-program">B.S. — Information Technology</div>
            <div className="edu-details">
              <div className="edu-detail">Applied computing systems and IT infrastructure</div>
              <div className="edu-detail">Foundation for AI engineering and systems architecture</div>
            </div>
            <br />
            <span className="cert-status complete">✓ Conferred</span>
          </div>
          <div className="edu-icon">🎓</div>
        </div>

        <div className="edu-card featured">
          <div>
            <div className="edu-badge">Associate of Science</div>
            <div className="edu-institution">Daytona State College</div>
            <div className="edu-program">A.S. — Networking Systems Technology</div>
            <div className="edu-details">
              <div className="edu-detail">Network architecture, protocols, and systems administration</div>
              <div className="edu-detail">Underpins Tailscale mesh and edge node infrastructure work</div>
            </div>
            <br />
            <span className="cert-status complete">✓ Conferred</span>
          </div>
          <div className="edu-icon">🌐</div>
        </div>
      </div>

      <div className="edu-section-label">Certifications</div>
      <div className="edu-grid">
        <div className="edu-card">
          <div className="edu-badge"><span style={{color:"var(--cyan)"}}>★</span> Graduate Certificate</div>
          <div className="edu-institution">Johns Hopkins University</div>
          <div className="edu-program">Agentic AI Certificate Program</div>
          <div className="edu-details" style={{marginBottom:"18px"}}>
            <div className="edu-detail">Agentic AI system design and multi-agent architecture</div>
            <div className="edu-detail">Original research — Professor Bone Lab</div>
          </div>
          <span className="cert-status complete">●Completd</span>
        </div>

        <div className="edu-card">
          <div className="edu-badge">Certification</div>
          <div className="edu-institution">Anthropic Academy</div>
          <div className="edu-program">Claude Certified Architect (CCA)</div>
          <div className="edu-details" style={{marginBottom:"18px"}}>
            <div className="edu-detail">Claude 101 — Completed</div>
            <div className="edu-detail">Building with the Claude API — Completed</div>
            <div className="edu-detail">47 study notes in Obsidian vault</div>
          </div>
          <span className="cert-status in-progress">● In Progress</span>
        </div>

        <div className="edu-card">
          <div className="edu-badge">🎓 Great Learning</div>
          <div className="edu-institution">Advanced Python: From Analytics to AI</div>
          <div className="edu-program">Certificate Program · August 2025</div>
          <div className="edu-details" style={{marginBottom:"18px"}}>
            <div className="edu-detail">Python for data analytics, machine learning, and AI pipelines</div>
            <div className="edu-detail">
              Verified —{" "}
              <a href="https://www.mygreatlearning.com/certificate/TWETDYEI" target="_blank" rel="noopener noreferrer" style={{fontFamily:"var(--font-mono)",fontSize:"0.68rem",color:"var(--text-muted)"}}>
                mygreatlearning.com/certificate/TWETDYEI
              </a>
            </div>
          </div>
          <span className="cert-status complete">✓ Completed Aug 2025</span>
        </div>

        <div className="edu-card">
          <div className="edu-badge">⊞ Great Learning × Microsoft</div>
          <div className="edu-institution">Generative AI For Business</div>
          <div className="edu-program">MSFT Azure OpenAI Program · July 2024</div>
          <div className="edu-details" style={{marginBottom:"18px"}}>
            <div className="edu-detail">Generative AI applications on Azure OpenAI Service</div>
            <div className="edu-detail">
              Verified —{" "}
              <a href="https://www.mygreatlearning.com/certificate/RTIBYCIF" target="_blank" rel="noopener noreferrer" style={{fontFamily:"var(--font-mono)",fontSize:"0.68rem",color:"var(--text-muted)"}}>
                mygreatlearning.com/certificate/RTIBYCIF
              </a>
            </div>
          </div>
          <span className="cert-status complete">✓ Completed Jul 2024</span>
        </div>
      </div>
    </div>
  );
}
