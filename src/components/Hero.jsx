export default function Hero({ setPage }) {
  return (
    <div className="hero-wrap">

      {/* ── LEFT: Text content ── */}
      <div className="hero-left">
        <div className="hero-badge" style={{opacity:1,animation:"slideDown 0.7s ease 0.1s both"}}>
          <div className="pulse-dot" />
          Open to AI Engineering Roles · 2025
        </div>

        <h1 className="hero-name" style={{animation:"slideUp 0.8s ease 0.25s both"}}>
          <span className="name-first">Professor</span>
          <span className="name-last">Bone</span>
        </h1>
        <div className="hero-realname" style={{animation:"slideUp 0.8s ease 0.38s both"}}>
          Clarence Downs
        </div>

        <p className="hero-tagline" style={{animation:"slideUp 0.8s ease 0.45s both"}}>
          <strong>AI Systems Architect · Logistics Technologist · Educator.</strong><br />
          From real-world logistics to agentic AI systems, I design{" "}
          <span className="hl">intelligent infrastructure built to operate under pressure.</span><br />
          Founder of <strong>Professor Bone Lab</strong>. Building <strong>Unc's AI Academy</strong>.
        </p>

        <div className="hero-actions" style={{animation:"slideUp 0.8s ease 0.65s both"}}>
          <button className="btn-primary" onClick={() => setPage("projects")}>View My Work</button>
          <button className="btn-glass"   onClick={() => setPage("research")}>Read My Papers</button>
        </div>

        <div className="hero-divider" style={{animation:"slideUp 0.8s ease 0.85s both"}} />
        <div className="hero-stack-label" style={{animation:"slideUp 0.8s ease 0.9s both"}}>Core Stack</div>
        <div className="hero-chips" style={{animation:"slideUp 0.8s ease 1s both"}}>
          {["Python","FastAPI","Claude API","Multi-Agent Systems","GraphHopper","React","Tailscale","OpenClaw","LangChain","Obsidian MCP"].map(c => (
            <span key={c} className="chip">{c}</span>
          ))}
        </div>
      </div>

      {/* ── CENTER: Avatar ── */}
      <div className="hero-avatar-wrap" style={{animation:"fadeIn 1s ease 0.5s both"}}>
        <div className="hero-avatar-glow" />
        <img
          src="/professor-bone-avatar.png"
          alt="Professor Bone"
          className="hero-avatar-img"
        />
      </div>

      {/* ── RIGHT: Glass cards ── */}
      <div className="hero-right" style={{animation:"slideLeft 0.9s ease 0.7s both"}}>
        <div className="glass-card">
          <div className="card-icon">🚛</div>
          <div className="card-label">Career Path</div>
          <div className="card-title">Operations → AI Engineering</div>
          <div className="card-desc">UPS Mgmt (2017) · LaM Logistics LLC (2022)<br />Walmart Private Fleet (2025) · AI Engineer (now)</div>
        </div>
        <div className="glass-card">
          <div className="card-icon">⚙️</div>
          <div className="card-label">Active Builds</div>
          <div className="card-title">TRIL · PACS · Continuum</div>
          <div className="card-desc">Governance-first multi-agent architecture<br />Mac Studio M3 Ultra · 512GB unified memory</div>
        </div>
        <div className="glass-card">
          <div className="card-icon">🎓</div>
          <div className="card-label">Education</div>
          <div className="card-title">JHU · Daytona State · Anthropic</div>
          <div className="card-desc">Agentic AI Certificate · B.S. Info Tech<br />Claude Certified Architect (in progress)</div>
        </div>
      </div>

      <div className="scroll-hint" style={{animation:"fadeIn 1s ease 1.4s both"}}>
        <div className="scroll-line" />
        <span className="scroll-text">EXPLORE THE WORK</span>
      </div>
    </div>
  );
}
