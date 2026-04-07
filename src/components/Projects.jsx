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
            <video
              className="continuum-card-video"
              autoPlay
              muted
              loop
              playsInline
            >
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
              <div className="continuum-stat-box">
                <div className="continuum-stat-num">8</div>
                <div className="continuum-stat-label">Agents</div>
              </div>
              <div className="continuum-stat-box">
                <div className="continuum-stat-num">46</div>
                <div className="continuum-stat-label">ADRs</div>
              </div>
              <div className="continuum-stat-box">
                <div className="continuum-stat-num">100</div>
                <div className="continuum-stat-label">Graph Entries</div>
              </div>
              <div className="continuum-stat-box">
                <div className="continuum-stat-num">0</div>
                <div className="continuum-stat-label">Cloud Deps</div>
              </div>
              <button className="continuum-cta">
                <span>Explore Project →</span>
              </button>
            </div>
          </div>
        </div>

        {/* ── COMING SOON CARDS ── */}
        {projects.map((p) => (
          <div key={p.id} className="project-card coming-soon-card">
            <div className="coming-soon-badge">Coming Soon</div>
            <div className="proj-id">{p.id}</div>
            <div className="proj-title">{p.title}</div>
            <p className="proj-desc">{p.description}</p>
            <div className="proj-tags">
              {p.tags.map((t) => (
                <span key={t} className="proj-tag">{t}</span>
              ))}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
