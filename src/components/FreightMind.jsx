import { useEffect, useRef } from "react";
import Seo from "./Seo";
import { SEO_ROUTES } from "../seoData";

export default function FreightMind({ setPage }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div className="fm-page">
      <Seo {...SEO_ROUTES.freightmind} />

      {/* ── BACK NAV ── */}
      <button className="ct-back" onClick={() => setPage && setPage("projects")}>
        ← All Projects
      </button>

      {/* ── HERO ── */}
      <section className="fm-hero">
        <div className="fm-hero-media">
          <video
            ref={videoRef}
            className="fm-hero-video"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/freightmind-bg.mp4" type="video/mp4" />
          </video>
          <div className="fm-hero-overlay" />
          <div className="fm-hero-scan" />
        </div>

        <div className="fm-hero-content">
          <div className="fm-hero-badge">Field Operations Command System &nbsp;·&nbsp; 2026</div>
          <h1 className="fm-hero-title">FREIGHTMIND</h1>
          <p className="fm-hero-sub">Jack Crawford. Will Graham. No margin for error.</p>
        </div>

        <div className="fm-hero-scroll">
          <span>scroll</span>
          <div className="fm-scroll-line" />
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="fm-stats">
        {[
          { num: "2",    label: "Field Agents" },
          { num: "339",  label: "Miles Logged" },
          { num: "24/7", label: "Shift Coverage" },
          { num: "1",    label: "Telegram Channel" },
          { num: "0",    label: "Autonomous Actions" },
        ].map((s) => (
          <div key={s.label} className="fm-stat">
            <div className="fm-stat-num">{s.num}</div>
            <div className="fm-stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* ── OPENER ── */}
      <section className="fm-section fm-opener">
        <div className="fm-container fm-opener-grid">
          <div className="fm-opener-pull">
            The road doesn't care about your<br />
            <span className="fm-gold">tech stack.</span>
          </div>
          <div className="fm-opener-body">
            <p>It cares whether your agent picks up when you need it, knows where you've been, and gets you home safe.</p>
            <p>FreightMind was built for exactly that. Deployed on a MacBook Pro M4 Max, codename <strong>Hannibal</strong>, running live at highway speeds, connected to the Continuum control plane over Tailscale, available every hour of every shift.</p>
            <p>This is not a logistics app. There are thousands of logistics apps. They sit in app stores and wait to be opened. They give generic answers to generic questions. They do not know you. They do not remember. They do not improve.</p>
            <p>FreightMind is different in the way that matters. It is not a product. It is a system built around one operator's real experience, on one operator's real machine, solving problems that operator lives with every single day.</p>
          </div>
        </div>
      </section>

      {/* ── TWO AGENTS ── */}
      <section className="fm-section fm-agents-section">
        <div className="fm-container">
          <div className="fm-section-label">// agent roster</div>
          <h2 className="fm-section-title">Two Agents.<br />One Machine.<br />No Margin for Error.</h2>

          <div className="fm-agents-grid">

            <div className="fm-agent-card">
              <div className="fm-agent-accent" />
              <div className="fm-agent-callsign">JACK CRAWFORD</div>
              <div className="fm-agent-role">Field Operations Commander</div>
              <p className="fm-agent-desc">
                Every message Faheem sends comes to Jack first. He reads the situation,
                decides what is needed, and either handles it himself or puts the right
                agent on it. Jack does not do the field work. He commands. He routes.
                He follows up.
              </p>
              <p className="fm-agent-desc">
                He knows Faheem is driving and writes accordingly: short, clear, actionable.
                One agent. One channel. One Telegram message. Jack handles the rest.
              </p>
              <div className="fm-agent-rules">
                <div className="fm-agent-rule">Does not send communications without explicit approval</div>
                <div className="fm-agent-rule">Does not claim authority over the Mac Studio control plane</div>
                <div className="fm-agent-rule">Single point of contact for all road operations</div>
              </div>
            </div>

            <div className="fm-agent-card">
              <div className="fm-agent-accent" />
              <div className="fm-agent-callsign">WILL GRAHAM</div>
              <div className="fm-agent-role">Field Operations Specialist</div>
              <p className="fm-agent-desc">
                Route intelligence. HOS planning. Break recommendations. Hazmat analysis.
                Dispatch communication. Preferred stop retrieval. Real operator knowledge
                from real OTR runs, stored and retrieved in real time.
              </p>
              <p className="fm-agent-desc">
                Will Graham does not guess. He knows the roads Faheem has driven. He knows
                the stops Faheem prefers. He knows the loads Faheem has carried. Every run
                adds to what he knows. Every session makes the next one sharper.
              </p>
              <div className="fm-agent-rules">
                <div className="fm-agent-rule">Does not make final legal or compliance determinations</div>
                <div className="fm-agent-rule">Does not self-authorize — every capability was defined first</div>
                <div className="fm-agent-rule">Operates within exactly the boundary set for him</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── BUILT FROM REAL EXPERIENCE ── */}
      <section className="fm-section fm-real-section">
        <div className="fm-road-watermark">ROAD</div>
        <div className="fm-container fm-real-grid">
          <div className="fm-real-body">
            <div className="fm-section-label">// origin</div>
            <h2 className="fm-section-title">Built From<br />Real Experience.</h2>
            <p>The hazmat pipeline was built because Faheem hauls hazmat. The HOS logic was built because Faheem runs HOS. The preferred stop memory was built because Faheem knows which truck stops are worth stopping at and which ones are not, and that knowledge should not have to be re-explained every single time.</p>
            <p>FreightMind does not replace the driver's judgment. It backs it up.</p>
            <p>When Faheem is twelve hours into a run and needs a break recommendation, Will Graham already knows his preferred corridors. When dispatch sends something unclear, Jack Crawford drafts the response and waits for approval before it goes anywhere.</p>
            <p className="fm-pull-quote">The system is live. The boundary is enforced. The agents know their lane.</p>
          </div>
          <div className="fm-real-stats">
            {[
              { num: "339",    label: "Real Miles in Memory" },
              { num: "HOS",    label: "Hours of Service Logic" },
              { num: "HAZMAT", label: "Hazmat Intelligence Pipeline" },
              { num: "OTR",    label: "Over the Road. Every Shift." },
            ].map((s) => (
              <div key={s.label} className="fm-road-stat">
                <div className="fm-road-stat-num">{s.num}</div>
                <div className="fm-road-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GOVERNANCE ── */}
      <section className="fm-section fm-gov-section">
        <div className="fm-container">
          <div className="fm-section-label">// governance</div>
          <h2 className="fm-section-title">Strict by Design.</h2>
          <div className="fm-gov-grid">
            <p>Jack Crawford operates inside a governed system. He is a field commander, not a system sovereign. He does not take autonomous action. He does not claim authority over Continuum. He operates inside the boundary that boundary was designed for.</p>
            <p>Will Graham does not make final legal or compliance determinations. Every capability he exercises was defined before he exercised it. He operates within exactly that definition. Not approximately. Exactly.</p>
            <p>FreightMind connects to the Continuum control plane over Tailscale. It receives governance from Mac Studio. It operates as an edge node, not as an independent system. The hierarchy is real and it is enforced.</p>
            <div className="fm-gov-callout">
              Jack Crawford is not an assistant.<br />He is a governed field agent with hard constraints<br />and a defined chain of command.
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="fm-cta-section">
        <div className="fm-container" style={{ textAlign: "center" }}>
          <h2 className="fm-cta-title">Read the Full Field Spec</h2>
          <p className="fm-cta-sub">Agent design, capability surface, governance model, and operational record</p>
          <a
            href="/FREIGHTMIND.pdf"
            className="fm-cta-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download the Document ↓
          </a>
        </div>
      </section>

      {/* ── CLOSING ── */}
      <section className="fm-closing-section">
        <div className="fm-container" style={{ textAlign: "center" }}>
          <p className="fm-closing-line">FreightMind is not finished either.</p>
          <p className="fm-closing-line">It is a field system. Field systems are never finished.</p>
          <p className="fm-closing-line">They evolve because the road evolves.</p>
          <div className="fm-closing-final">AND JACK CRAWFORD PICKS UP EVERY TIME.</div>
          <div className="fm-closing-credit">
            Built by Faheem Downs &nbsp;·&nbsp; Professor Bone Lab &nbsp;·&nbsp; 2026
          </div>
        </div>
      </section>

    </div>
  );
}
