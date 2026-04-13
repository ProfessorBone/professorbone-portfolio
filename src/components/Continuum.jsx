import { useEffect, useRef } from "react";
import Seo from "./Seo";
import { SEO_ROUTES } from "../seoData";

export default function Continuum({ setPage }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const agents = [
    {
      name: "THE BRIDGE",
      role: "Managing Orchestrator",
      gold: true,
      desc:
        "The center. Every decision, every routing call, every memory commit flows through it. Nothing moves in Continuum without The Bridge knowing, and nothing moves without authorization.",
    },
    {
      name: "LOCUS",
      role: "Knowledge Infrastructure",
      desc:
        "A living graph of 54 entities, 46 relationships, sourced from real study sessions, governed by provenance chains, and now powered by a local 7-billion parameter language model running entirely offline on Apple Silicon.",
    },
    {
      name: "CRUCIBLE",
      role: "Epistemic Engine",
      desc:
        "It doesn't just answer questions. It evaluates comprehension, tracks mastery across five discipline domains, runs governed reflection cycles, and maintains memory across sessions, so every session builds on the last.",
    },
    {
      name: "VAULT",
      role: "Financial Intelligence",
      desc:
        "Governed by a six-actuator design, capital segregation enforcement, an Intelligence Quality Gate that every recommendation must pass before it reaches human eyes. Advisory by law. Never autonomous.",
    },
    {
      name: "SIGNAL",
      role: "Frontier Scout",
      desc:
        "Every week, it crosses the external boundary, the only agent permitted to, retrieves cutting-edge research from the field of agentic AI, and deposits it into a governed intake queue. What it cannot justify never enters the system.",
    },
    {
      name: "FOUNDRY",
      role: "Synthesis Engine",
      desc:
        "It converts validated knowledge into governed architecture. It detects conflicts. It never resolves them on its own.",
    },
    {
      name: "GAUGE",
      role: "System Observer",
      desc:
        "The observer that watches everything else. It measures. It never acts. An agent that cannot evaluate its own performance cannot drift quietly, and Gauge makes sure nothing does.",
    },
    {
      name: "MEC",
      role: "Meta-Evaluation Checkpoint",
      gold: true,
      desc:
        "The highest authority below the human. Every memory commit, every escalation, every summary emission passes through it. When MEC is unavailable, protected decisions do not proceed. The system fails closed. Always.",
    },
  ];

  const techStack = [
    { name: "Mac Studio M3 Ultra", detail: "Control plane. 192GB unified memory. All eight agents.", cyan: true },
    { name: "MacBook Pro M4 Max", detail: "Edge node. FreightMind field ops. Connected via Tailscale.", cyan: true },
    { name: "Ollama", detail: "Local inference substrate. Two models. Zero cloud dependency.", cyan: false },
    { name: "Qwen2.5 7B", detail: "Locus Tier 2 SLM. Entity extraction and classification. Q4_K_M.", cyan: false },
    { name: "Context-1 20B", detail: "Chroma retrieval model. Semantic reranking for graph queries.", cyan: true },
    { name: "Mistral-7B LoRA", detail: "Fine-tuned injection classifier. Six-family pre-filter. Priority 110.", cyan: false },
    { name: "OpenClaw Runtime", detail: "Agent execution. Plugin architecture. TAR enforcement.", cyan: true },
    { name: "Telegram", detail: "Two bots. Two machines. Two authority domains. Hard boundary.", cyan: true },
    { name: "Obsidian Vault", detail: "iCloud-synced. Authoritative docs. ADR log. Graph entries.", cyan: false },
    { name: "Tailscale", detail: "Road access. Remote SSH. Works from the cab of a truck.", cyan: false },
  ];

  return (
    <div className="ct-page">
      <Seo {...SEO_ROUTES.continuum} />

      {/* ── BACK NAV ── */}
      <button className="ct-back" onClick={() => setPage && setPage("projects")}>
        ← All Projects
      </button>

      {/* ── HERO ── */}
      <section className="ct-hero">
        <div className="ct-hero-media">
          <video
            ref={videoRef}
            className="ct-hero-video"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/continuum-bg.mp4" type="video/mp4" />
          </video>
          <div className="ct-hero-overlay" />
          <div className="ct-hero-scan" />
        </div>

        <div className="ct-hero-content">
          <div className="ct-hero-badge">Governed Multi-Agent AI System &nbsp;·&nbsp; 2026</div>
          <h1 className="ct-hero-title">CONTINUUM</h1>
          <p className="ct-hero-sub">Designed. Built. Deployed. By one person.</p>
        </div>

        <div className="ct-hero-scroll">
          <span>scroll</span>
          <div className="ct-scroll-line" />
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="ct-stats">
        {[
          { num: "8",   label: "Specialized Agents" },
          { num: "46",  label: "Architectural Decisions" },
          { num: "23",  label: "Failure Injection Tests" },
          { num: "100", label: "Knowledge Graph Entries" },
          { num: "0",   label: "Cloud Dependencies" },
        ].map((s) => (
          <div key={s.label} className="ct-stat">
            <div className="ct-stat-num">{s.num}</div>
            <div className="ct-stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* ── OPENER ── */}
      <section className="ct-section ct-opener">
        <div className="ct-container ct-opener-grid">
          <div className="ct-opener-pull">
            Most people<br />talk about AI.<br />
            <span className="ct-gold">Faheem<br />Downs<br />built one.</span>
          </div>
          <div className="ct-opener-body">
            <p>Not a chatbot. Not a wrapper around an API. A full production multi-agent control system, designed from first principles, governed by architectural law, running on real hardware, right now.</p>
            <p>At the center sits <strong>The Bridge</strong>, the managing orchestrator. Every decision, every routing call, every memory commit flows through it. Nothing moves in Continuum without The Bridge knowing, and nothing moves without authorization.</p>
            <p>Below it, a constellation of specialized agents, each with a formal event model, a defined capability surface, and hard constraints enforced at the identity level, not the instruction level.</p>
            <p>This is not a demo. It is not a side project. It is a governed production system, built by one long-haul truck driver, designed to grow with him for the rest of his career.</p>
          </div>
        </div>
      </section>

      {/* ── AGENTS ── */}
      <section className="ct-section ct-agents-section">
        <div className="ct-container">
          <div className="ct-section-label">// agent manifest</div>
          <h2 className="ct-section-title">Eight Agents.<br />One Sovereign.</h2>
          <p className="ct-agents-intro">Every agent has a defined role, a constrained capability surface, and a governed relationship with every other agent. Authority flows in one direction. Decisions are logged. Memory is append-only.</p>
          <div className="ct-agents-grid">
            {agents.map((a) => (
              <div key={a.name} className={`ct-agent-card${a.gold ? " ct-agent-gold" : ""}`}>
                <div className="ct-agent-accent" />
                <div className="ct-agent-name">{a.name}</div>
                <div className="ct-agent-role">{a.role}</div>
                <p className="ct-agent-desc">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GOVERNANCE ── */}
      <section className="ct-section ct-gov-section">
        <div className="ct-container ct-gov-grid">
          <div className="ct-gov-body">
            <div className="ct-section-label">// governance architecture</div>
            <h2 className="ct-section-title">Governance Isn't<br />a Feature.<br />It's the Foundation.</h2>
            <p>Continuum runs under 46 architectural decision records, every major design choice logged, reasoned, and locked. It has survived 23 failure injection tests across three levels: constitutional boundary failures, governance process failures, and analytical performance degradation.</p>
            <p>Every agent has a formal event model. Every tool call passes through a capability authorization registry. Every memory write is append-only, tamper-evident, and adjudicated.</p>
            <div className="ct-gov-callout">
              The system fails closed.<br />
              Protected decisions don't proceed when oversight is unavailable.
            </div>
            <p>A pre-filter built from six deterministic rule families guards every input across both machines, catching prompt injection before it reaches any agent, at priority 110, before any other enforcement fires.</p>
            <p>The knowledge graph is not a database. It is a governed epistemic record. Every entity has a provenance chain. Every relationship has a source. Nothing in it was written without authorization. All of it was written to last.</p>
          </div>
          <div className="ct-gov-rules">
            {[
              { title: "F1: System Internal Targeting", body: "Request verb + internal target detected. FLAG and hold for review." },
              { title: "F2: Authority Spoofing", body: "Identity claim + role keyword + directive. BLOCK immediately." },
              { title: "F4: Injection Frame Markers", body: "[SYSTEM], JAILBREAK, DAN mode, persona shift. BLOCK immediately." },
              { title: "Multi-Family Escalation", body: "Two or more families triggered simultaneously always produces BLOCK." },
              { title: "Fail-Closed Principle", body: "When MEC is unavailable, protected decisions do not proceed. The system halts." },
            ].map((r) => (
              <div key={r.title} className="ct-gov-rule">
                <strong>{r.title}</strong>
                {r.body}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="ct-section ct-tech-section">
        <div className="ct-container">
          <div className="ct-section-label">// technology stack</div>
          <h2 className="ct-section-title">Built on Real<br />Infrastructure.</h2>
          <div className="ct-tech-grid">
            {techStack.map((t) => (
              <div key={t.name} className={`ct-tech-card${t.cyan ? "" : " ct-tech-gold"}`}>
                <div className="ct-tech-dot" />
                <div className="ct-tech-name">{t.name}</div>
                <div className="ct-tech-detail">{t.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ROAD ── */}
      <section className="ct-section ct-road-section">
        <div className="ct-road-watermark">ROAD</div>
        <div className="ct-container ct-road-grid">
          <div className="ct-road-body">
            <div className="ct-section-label">// operational context</div>
            <h2 className="ct-section-title">This Runs<br />on the Road.</h2>
            <p>The man who built this is a <strong>long-haul commercial truck driver.</strong></p>
            <p>He built it on a Mac Studio in his home. He deployed parts of it on a MacBook Pro running inside a cab at highway speeds, connected over Tailscale, commanded through Telegram from a phone mounted on a dashboard.</p>
            <p>When he's twelve hours into a run and wants to study agentic systems, he messages <strong>@ContinuumBridge_bot</strong> and Crucible picks up the session exactly where it left off.</p>
            <p>When a routing order comes in for Will Graham, his field operations agent, it crosses a governed boundary, gets logged, and executes under the same rules whether he's home or in a truck stop in Pennsylvania at 2 AM.</p>
            <p>The data stays local. The governance stays local. The decisions stay local.</p>
          </div>
          <div className="ct-road-stats">
            {[
              { num: "339", label: "Miles Logged in FreightMind" },
              { num: "24/7", label: "Gateway Uptime. Both Machines." },
              { num: "0",   label: "Cloud Dependencies for Inference" },
            ].map((s) => (
              <div key={s.label} className="ct-road-stat">
                <div className="ct-road-stat-num">{s.num}</div>
                <div className="ct-road-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="ct-cta-section">
        <div className="ct-container" style={{ textAlign: "center" }}>
          <h2 className="ct-cta-title">Read the Full Architecture</h2>
          <p className="ct-cta-sub">Complete system documentation, governance spec, and agent design record</p>
          <a
            href="/CONTINUUM.pdf"
            className="ct-cta-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download the Document ↓
          </a>
        </div>
      </section>

      {/* ── CLOSING ── */}
      <section className="ct-closing-section">
        <div className="ct-container" style={{ textAlign: "center" }}>
          <p className="ct-closing-line">Continuum is not complete. It was never meant to be.</p>
          <p className="ct-closing-line">It is a system that grows with the person who runs it.</p>
          <div className="ct-closing-final">AND IT IS RUNNING.</div>
          <div className="ct-closing-credit">
            Built by Faheem Downs &nbsp;·&nbsp; Professor Bone Lab &nbsp;·&nbsp; 2026
          </div>
        </div>
      </section>

    </div>
  );
}
