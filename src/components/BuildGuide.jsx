import "../buildguide.css";
import { useState, useRef } from "react";
import Seo from "./Seo";
import { SEO_ROUTES } from "../seoData";

const pages = [
  {
    label: "00 — Context",
    title: "The Field Manual\nAgentic AI Needed",
    body: `Most people learning AI in 2026 fall into two camps: those following tutorial courses that produce toy systems, and those trying to read academic papers they can barely understand.\n\nThis guide sits in neither camp.\n\nIt was written at the exact inflection point when "I can prompt an AI" stopped being enough and "I can architect an agentic system" became the differentiated skill. It treats AI agents as engineered products — with the same rigor you'd apply to a distributed database or a real-time control system.\n\nThe field now has frameworks everywhere. Frameworks are not architecture. This guide teaches architecture.`,
    accent: "cyan",
  },
  {
    label: "01 — Foundation",
    title: "Start With\nPEAS",
    body: `Before a single line of code is written, the guide demands you define your agent's world.\n\nPerformance. Environment. Actuators. Sensors.\n\nThis is not academic ceremony. It is the discipline that separates agents built to last from agents built to demo. The PEAS model forces you to answer the question most engineers skip: what world is this agent actually operating in?\n\nThe guide maps PEAS directly to the build workflow — data layer, logic layer, orchestration, execution. Each phase exists because PEAS said it had to.`,
    accent: "cyan",
  },
  {
    label: "02 — Structure",
    title: "Four Tiers.\nNo Shortcuts.",
    body: `Tier 0 — Prerequisites and principles. One tool. Structured I/O. Logs.\n\nTier 1 — A working MVP that handles real input and produces validated output.\n\nTier 2 — RAG, episodic memory, multi-tool usage. An agent that knows things.\n\nTier 3 — Multi-agent orchestration. Planner, Researcher, Critic. Observability, traces, dashboards.\n\nTier 4 — Enterprise-grade. Constitutional reasoning. Self-improving. Cost-governed. Production.\n\nEach tier is a completion criterion, not a chapter. You do not advance without proof.`,
    accent: "purple",
  },
  {
    label: "03 — Memory",
    title: "State Is Not\na Database",
    body: `One of the most damaging misconceptions in AI engineering is treating agent state like a log file — appending everything to it, never pruning, assuming more is better.\n\nThe guide defines three scopes: node scratch, agent-local working state, and shared coordination state. Each has a lifetime. Each has an owner. Nothing crosses a boundary without justification.\n\nThe rule is simple: if only the current node needs it, it is a local variable. If the next two or three nodes need it, it goes in state. If all agents need it, it becomes coordination state. Everything else is waste.`,
    accent: "cyan",
  },
  {
    label: "04 — Observability",
    title: "If You Cannot\nMeasure It,\nYou Cannot\nGovern It",
    body: `The guide defines the Four-Layer Observability Stack: Performance Intent, Computability Proof, Telemetry Architecture, Evaluation Execution.\n\nThe critical insight is Layer 2 — Computability Proof. Before any telemetry is designed, every metric must be proven computable from the architecture that exists. If the required data is never emitted, the metric is not a metric. It is a slogan.\n\nSeven universal event classes cover every agentic architecture: Perception, Analysis, Emission, Lifecycle, Governance, Evaluation, Integrity. Defined at the system level before any agent writes a single event.`,
    accent: "purple",
  },
  {
    label: "05 — Multi-Agent",
    title: "Drift Scales\nFaster Than\nYou Think",
    body: `Small inconsistencies at agent boundaries compound into systemic drift.\n\nIn a multi-agent system with n agents and moderate connectivity, directed boundaries scale roughly with n times n minus one. Each boundary hosts multiple drift modes. Adding agents increases drift surfaces faster than it increases coordination benefit — unless validation scales with it.\n\nThe guide introduces the Integrity Monitor, pre-scale checklists, contract enforcement, edge guards, and decision lineage logging. These are not optional refinements. They are the price of a system that can grow without collapsing.`,
    accent: "cyan",
  },
  {
    label: "06 — Position",
    title: "Where This\nGuide Fits\nRight Now",
    body: `The agentic AI field is in its framework phase — tools everywhere, architecture nowhere.\n\nThis guide is the architecture layer. It does not tell you which framework to use. It tells you what any framework must do to be used correctly — and what your system must have before any framework will save it.\n\nIt is the book someone would have needed before Continuum was possible. The principles in its pages are in every event model, every governance gate, every agent boundary in a running production system.\n\nThis is not an introduction to AI. It is an introduction to building AI systems that survive contact with the real world.`,
    accent: "purple",
  },
];

const spreadData = [
  { type: "cover" },
  { left: pages[0], right: pages[1] },
  { left: pages[2], right: pages[3] },
  { left: pages[4], right: pages[5] },
  { left: pages[6], right: null, type: "closing" },
];

function PageContent({ data, side }) {
  if (!data) return null;
  return (
    <div className="bg-sp-inner">
      <div className={`bg-sp-accent-bar bg-sp-accent-${data.accent}`} />
      <div className="bg-sp-meta">
        <span className="bg-sp-label">{data.label}</span>
      </div>
      <h3 className="bg-sp-title">{data.title}</h3>
      <div className="bg-sp-rule" />
      <p className="bg-sp-body">{data.body}</p>
    </div>
  );
}

export default function BuildGuide({ setPage }) {
  const [spreadIdx, setSpreadIdx] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipFrontData, setFlipFrontData] = useState(null);
  const [flipBackData, setFlipBackData] = useState(null);
  const [flipperVisible, setFlipperVisible] = useState(false);
  const [leftDisplayIdx, setLeftDisplayIdx] = useState(0);
  const [flipDir, setFlipDir] = useState("next");
  const flipperRef = useRef(null);

  const TOTAL = spreadData.length;

  function animateFlip(dir, nextIdx) {
    if (isFlipping) return;
    setIsFlipping(true);
    setFlipDir(dir);

    const cur = spreadData[spreadIdx];
    const nxt = spreadData[nextIdx];

    if (dir === "next") {
      setFlipFrontData(cur.right);
      setFlipBackData(nxt.left);
    } else {
      setFlipFrontData(nxt.right);
      setFlipBackData(cur.left);
    }

    setFlipperVisible(true);

    requestAnimationFrame(() => {
      const el = flipperRef.current;
      if (!el) return;
      el.style.transition = "none";
      el.style.transform = dir === "next" ? "rotateY(0deg)" : "rotateY(0deg)";
      el.style.left = dir === "next" ? "50%" : "auto";
      el.style.right = dir === "next" ? "auto" : "50%";
      el.style.transformOrigin = dir === "next" ? "left center" : "right center";

      requestAnimationFrame(() => {
        el.style.transition = "transform 0.72s cubic-bezier(0.645,0.045,0.355,1.000)";
        el.style.transform = dir === "next" ? "rotateY(-180deg)" : "rotateY(180deg)";
      });
    });

    setTimeout(() => {
      setLeftDisplayIdx(nextIdx);
    }, 360);

    setTimeout(() => {
      setSpreadIdx(nextIdx);
      setFlipperVisible(false);
      setLeftDisplayIdx(nextIdx);
      const el = flipperRef.current;
      if (el) {
        el.style.transition = "none";
        el.style.transform = "rotateY(0deg)";
      }
      setIsFlipping(false);
    }, 740);
  }

  function next() {
    if (spreadIdx < TOTAL - 1) animateFlip("next", spreadIdx + 1);
  }
  function prev() {
    if (spreadIdx > 0) animateFlip("prev", spreadIdx - 1);
  }
  function goTo(idx) {
    if (!isFlipping && idx !== spreadIdx) {
      const dir = idx > spreadIdx ? "next" : "prev";
      animateFlip(dir, idx);
    }
  }

  const displaySpread = spreadData[spreadIdx];
  const leftData = displaySpread.type === "cover" ? null : displaySpread.left;
  const rightData = displaySpread.type === "cover" ? null : displaySpread.right;
  const isCover = displaySpread.type === "cover";
  const isClosing = displaySpread.type === "closing";

  return (
    <div className="bg-page">
      <Seo {...SEO_ROUTES.buildguide} />
      <button className="ct-back" onClick={() => setPage && setPage("home")}>
        ← Home
      </button>

      {/* ── HERO ── */}
      <section className="bg-hero">
        <div className="bg-hero-inner">
          <div className="bg-hero-left">
            <div className="bg-hero-badge">Field Manual &nbsp;·&nbsp; Agentic AI &nbsp;·&nbsp; 2026</div>
            <h1 className="bg-hero-title">AI Agent<br />Build Guide</h1>
            <p className="bg-hero-tagline">Basic &rarr; Kick-Ass</p>
            <p className="bg-hero-sub">
              A step-by-step playbook for building AI agents in four tiers of increasing power.
              Written when production systems needed architectural discipline and the field had none.
            </p>
            <div className="bg-hero-stats">
              {[
                { n: "172", l: "Pages" },
                { n: "4",   l: "Build Tiers" },
                { n: "9",   l: "AGI Phases" },
                { n: "7",   l: "Event Classes" },
              ].map(s => (
                <div key={s.l} className="bg-stat">
                  <div className="bg-stat-num">{s.n}</div>
                  <div className="bg-stat-label">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-hero-right">
            <div className="bg-book-cover">
              <img src="/buildguide-cover.png" alt="AI Agent Build Guide" className="bg-cover-img" />
              <div className="bg-book-spine" />
              <div className="bg-book-shadow" />
            </div>
          </div>
        </div>
      </section>

      {/* ── ORIGIN STORY ── */}
      <section className="bg-origin-section">
        <div className="bg-origin-inner">
          <div className="bg-origin-left">
            <div className="bg-origin-eyebrow">how this started</div>
            <h2 className="bg-origin-title">Written at 65 MPH</h2>
            <div className="bg-origin-rule" />
            <p className="bg-origin-body">It started with notes.</p>
            <p className="bg-origin-body">
              Research papers, read slowly, with a notebook open beside them. The papers were dense
              in the right places and silent in the wrong ones. They showed one step and assumed
              you'd figure out the rest. So that became the work — filling in what came before each
              concept and reasoning through what had to come after.
            </p>
            <p className="bg-origin-body">
              The field was moving too fast for any book to stay relevant. A guide built around a
              specific framework would be obsolete before it finished printing. That recognition
              changed the goal entirely. Not <em>"how to use LangChain."</em> Not <em>"how to configure
              CrewAI."</em> Something underneath those things — the principles that would survive the
              next framework wave, and the one after that.
            </p>
            <p className="bg-origin-body">Most of the actual thinking happened in a truck cab.</p>
            <p className="bg-origin-body">
              Load after load. Highway after highway. Podcasts about distributed systems playing
              through a headset at 65 miles per hour. YouTube videos on transformer architecture
              queued up at truck stops. Notes written in parking lots after long hauls, when the
              ideas had finally settled enough to put on paper.
            </p>
            <p className="bg-origin-body">
              There were long stretches where none of it made sense. Papers that wouldn't click on
              the first read, or the fifth. Concepts that only landed six months later — when
              building something revealed exactly why the concept had to exist.
            </p>
            <p className="bg-origin-body">
              That is also in the guide. The understanding that confusion is not the opposite of
              learning. It is the beginning of it.
            </p>
            <div className="bg-origin-quote">
              "Not a tutorial. A field manual for people willing to think through what they're
              building — written by someone who learned most of it while moving."
            </div>
          </div>
          <div className="bg-origin-right">
            <div className="bg-origin-card">
              <div className="bg-origin-card-label">The Work Behind It</div>
              <div className="bg-origin-card-divider" />
              {[
                { label: "Starting point", val: "Research papers & raw notes" },
                { label: "Method", val: "Reasoning forward from first principles" },
                { label: "Duration", val: "Over one year of active building" },
                { label: "Primary workspace", val: "The cab of an 18-wheeler" },
                { label: "Study material", val: "Podcasts, videos, papers on the road" },
                { label: "Proof of concept", val: "Continuum — a live production system" },
              ].map(i => (
                <div key={i.label} className="bg-origin-item">
                  <div>
                    <div className="bg-origin-item-label">{i.label}</div>
                    <div className="bg-origin-item-val">{i.val}</div>
                  </div>
                </div>
              ))}
              <div className="bg-origin-card-footer">
                The guide is the residue of everything that didn't make sense until it did.
              </div>
            </div>
            <div className="bg-origin-principle">
              <div className="bg-origin-principle-label">Core design decision</div>
              <p>Build around principles that survive technological change — not frameworks that won't.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTEXT STRIP ── */}
      <div className="bg-context-strip">
        <p>
          The field has frameworks. What it lacked was architecture.
          This guide is the architecture layer — the principles that make any framework usable and any system governable.
        </p>
      </div>

      {/* ── SPREAD BOOK VIEWER ── */}
      <section className="bg-spread-section">
        <div className="bg-spread-eyebrow">// read the guide</div>
        <h2 className="bg-spread-heading">What Is Inside</h2>

        <div className="bg-spread-stage">
          <button
            className={`bg-spread-arrow bg-spread-prev ${spreadIdx === 0 || isFlipping ? "bg-spread-disabled" : ""}`}
            onClick={prev}
            disabled={spreadIdx === 0 || isFlipping}
            aria-label="Previous spread"
          >‹</button>

          <div className="bg-spread-book">
            {/* Left page */}
            <div className={`bg-sp-page bg-sp-left ${isCover ? "bg-sp-endpaper" : ""}`}>
              {isCover ? (
                <div className="bg-sp-endpaper-content">
                  <div className="bg-sp-ornament">✦</div>
                </div>
              ) : isClosing ? (
                <div className="bg-sp-inner bg-sp-closing">
                  <div className="bg-sp-close-ornament">Ag.</div>
                  <h3 className="bg-sp-close-title">Build. Observe.<br />Correct. Repeat.</h3>
                  <div className="bg-sp-rule" />
                  <p className="bg-sp-close-body">
                    Every expert has made these mistakes. The goal is not perfection.
                    The goal is learning to recognize and fix issues quickly.
                  </p>
                  <p className="bg-sp-close-body">
                    Keep a personal Agentic Journal. Log lessons, improvements, and the gaps
                    between what you expected and what the system did. That gap is where growth lives.
                  </p>
                  <div className="bg-sp-close-credit">Professor Bone Lab · professorbone.com</div>
                </div>
              ) : (
                <PageContent data={leftData} side="left" />
              )}
              {!isCover && !isClosing && <span className="bg-sp-pagenum bg-sp-pagenum-left">{spreadIdx * 2}</span>}
            </div>

            {/* Right page */}
            <div className={`bg-sp-page bg-sp-right ${isCover ? "bg-sp-cover-page" : ""}`}>
              {isCover ? (
                <div className="bg-sp-cover-content">
                  <div className="bg-sp-cover-ornament">Ag.</div>
                  <h2 className="bg-sp-cover-title">AI Agent<br />Build Guide</h2>
                  <div className="bg-sp-cover-sub">Basic → Kick-Ass</div>
                  <p className="bg-sp-cover-tagline">
                    A step-by-step playbook for building production-grade AI agents
                    in four tiers of increasing power. Engineering rigor. No hype.
                  </p>
                  <div className="bg-sp-cover-author">Faheem Downs</div>
                </div>
              ) : rightData ? (
                <PageContent data={rightData} side="right" />
              ) : null}
              {!isCover && rightData && <span className="bg-sp-pagenum bg-sp-pagenum-right">{spreadIdx * 2 + 1}</span>}
            </div>

            {/* Flipper overlay */}
            <div
              ref={flipperRef}
              className="bg-sp-flipper"
              style={{ opacity: flipperVisible ? 1 : 0, pointerEvents: "none" }}
            >
              <div className={`bg-sp-face bg-sp-face-front ${flipDir === "next" ? "bg-sp-right-page" : "bg-sp-left-page"}`}>
                <PageContent data={flipFrontData} side={flipDir === "next" ? "right" : "left"} />
              </div>
              <div className={`bg-sp-face bg-sp-face-back ${flipDir === "next" ? "bg-sp-left-page" : "bg-sp-right-page"}`}>
                <PageContent data={flipBackData} side={flipDir === "next" ? "left" : "right"} />
              </div>
            </div>

            <div className="bg-sp-spine-shadow" />
          </div>

          <button
            className={`bg-spread-arrow bg-spread-next ${spreadIdx === TOTAL - 1 || isFlipping ? "bg-spread-disabled" : ""}`}
            onClick={next}
            disabled={spreadIdx === TOTAL - 1 || isFlipping}
            aria-label="Next spread"
          >›</button>
        </div>

        <div className="bg-spread-dots">
          {spreadData.map((_, i) => (
            <button
              key={i}
              className={`bg-sp-dot ${i === spreadIdx ? "bg-sp-dot-active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Go to spread ${i + 1}`}
            />
          ))}
        </div>
        <div className="bg-spread-count">{spreadIdx + 1} / {TOTAL}</div>
      </section>

      {/* ── WHO IT IS FOR ── */}
      <section className="bg-for-section">
        <div className="bg-container">
          <div className="ct-section-label">who this is for</div>
          <h2 className="bg-for-title">Built for Engineers<br />Ready to Build Real Systems</h2>
          <div className="bg-for-grid">
            {[
              { who: "Working engineers", desc: "Comfortable with Python, FastAPI, basic async. Ready to go beyond prompt engineering into system design." },
              { who: "Enterprise builders", desc: "Designing multi-agent infrastructure that needs to survive production — governance, compliance, cost control included." },
              { who: "AGI researchers", desc: "Grounding theoretical architecture in concrete implementation. The guide maps directly to the cognitive blueprint AGI labs use." },
              { who: "Non-traditional engineers", desc: "People who came to AI from operations, logistics, or other fields. No ML math required — this is system design." },
            ].map(f => (
              <div key={f.who} className="bg-for-card">
                <div className="bg-for-who">{f.who}</div>
                <p className="bg-for-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING ── */}
      <section className="bg-close-section">
        <div className="bg-container" style={{ textAlign: "center" }}>
          <p className="bg-close-line">Not an introduction to AI.</p>
          <p className="bg-close-line">An introduction to building AI systems that survive contact with the real world.</p>
          <div className="bg-close-final">READ IT. BUILD IT. SHIP IT.</div>
          <div className="bg-close-credit">Professor Bone Lab &nbsp;·&nbsp; 2026</div>
        </div>
      </section>
    </div>
  );
}
