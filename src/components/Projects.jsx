import { projects } from "../data/projects";

export default function Projects({ setPage }) {
  return (
    <div className="inner-section">
      <div className="section-tag">02 — Projects</div>
      <h2 className="section-heading">Intelligent<br />Systems Built</h2>
      <p className="section-sub">
        Production-grade AI infrastructure built on real logistics context.
        Every project solves a problem I've lived — from the cab to the command line.
      </p>

      <div className="projects-grid">

        {/* ── CONTINUUM FEATURED CARD ── */}
        <div
          className="continuum-card"
          onClick={() => setPage && setPage("continuum")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && setPage && setPage("continuum")}
        >
          <div className="continuum-card-media">
            <video className="continuum-card-video" autoPlay muted loop playsInline>
              <source src="/continuum-bg.mp4" type="video/mp4" />
            </video>
            <div className="continuum-card-vignette" />
          </div>
          <div className="continuum-card-body">
            <div className="continuum-card-left">
              <div className="continuum-card-id">PACS-ARCH-001 &nbsp;/&nbsp; 2026</div>
              <h3 className="continuum-card-title">CONTINUUM</h3>
              <p className="continuum-card-sub">A Governed Multi-Agent AI Control System</p>
              <p className="continuum-card-desc">
                Eight specialized agents. 46 architectural decision records.
                23 failure injection tests. A knowledge graph of 54 entities and
                46 relationships. Running on two Apple Silicon machines with zero
                cloud dependency — commanded from the cab of a truck.
              </p>
              <div className="continuum-card-tags">
                {["Multi-Agent", "Governance", "Local AI", "Ollama", "Tailscale", "OpenClaw"].map((t) => (
                  <span key={t} className="proj-tag">{t}</span>
                ))}
              </div>
            </div>
            <div className="continuum-card-right">
              <div className="continuum-stat-box"><div className="continuum-stat-num">8</div><div className="continuum-stat-label">Agents</div></div>
              <div className="continuum-stat-box"><div className="continuum-stat-num">46</div><div className="continuum-stat-label">ADRs</div></div>
              <div className="continuum-stat-box"><div className="continuum-stat-num">100</div><div className="continuum-stat-label">Graph Entries</div></div>
              <div className="continuum-stat-box"><div className="continuum-stat-num">0</div><div className="continuum-stat-label">Cloud Deps</div></div>
              <button className="continuum-cta"><span>Explore Project →</span></button>
            </div>
          </div>
        </div>

        {/* ── FREIGHTMIND CARD ── */}
        <div
          className="project-card fm-card"
          onClick={() => setPage && setPage("freightmind")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && setPage && setPage("freightmind")}
        >
          <div className="fm-card-media">
            <video className="fm-card-video" autoPlay muted loop playsInline>
              <source src="/freightmind-bg.mp4" type="video/mp4" />
            </video>
            <div className="fm-card-vignette" />
          </div>
          <div className="fm-card-body">
            <div className="fm-card-id">PACS-FREIGHTMIND-001 &nbsp;/&nbsp; 2026</div>
            <div className="fm-card-title">FREIGHTMIND</div>
            <p className="fm-card-desc">Field operations command system. Jack Crawford commands. Will Graham executes. Running live at highway speeds on a MacBook Pro M4 Max.</p>
            <div className="proj-tags">
              {["Multi-Agent", "Trucking Ops", "Telegram", "OpenClaw"].map((t) => (
                <span key={t} className="proj-tag">{t}</span>
              ))}
            </div>
            <div className="fm-card-footer">
              <span className="fm-card-year">2026</span>
              <span className="fm-card-arrow">→</span>
            </div>
          </div>
        </div>

        {/* ── FINANCIAL INTELLIGENCE RAG — COMING SOON ── */}
        <div className="project-card coming-soon-card">
          <div className="coming-soon-badge">Coming Soon</div>
          <div className="proj-id">PACS-VAULT-001</div>
          <div className="proj-title">Financial Intelligence RAG</div>
          <p className="proj-desc">
            A governed retrieval-augmented financial intelligence system. Six-actuator design
            with capital segregation enforcement and an Intelligence Quality Gate. Every
            recommendation is adjudicated before it reaches human eyes. Advisory by law. Never autonomous.
          </p>
          <div className="proj-tags">
            {["RAG", "Financial AI", "Governance", "Local Inference"].map((t) => (
              <span key={t} className="proj-tag">{t}</span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
