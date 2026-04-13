import { useState, useEffect } from "react";
import Seo from "./Seo";
import { SEO_ROUTES } from "../seoData";
import AgentStateFramework from "./papers/AgentStateFramework";
import OrchestratorEpistemicCapture from "./papers/OrchestratorEpistemicCapture";
import CognitiveHorizon from "./papers/CognitiveHorizon";
import EpistemicGovernance from "./papers/EpistemicGovernance";
import GGIBPart1 from "./papers/GGIBPart1";
import GGIBPart2 from "./papers/GGIBPart2";
import GGIBPart3 from "./papers/GGIBPart3";
import GGIBPart4 from "./papers/GGIBPart4";
import GGIBPart5 from "./papers/GGIBPart5";
import GGIBPart6 from "./papers/GGIBPart6";
import "../paper.css";
import "../paper-ggib.css";

const PAPER_COMPONENTS = {
  "agent-state":  AgentStateFramework,
  "orchestrator": OrchestratorEpistemicCapture,
  "cognitive":    CognitiveHorizon,
  "epistemic":    EpistemicGovernance,
  "ggib-1":       GGIBPart1,
  "ggib-2":       GGIBPart2,
  "ggib-3":       GGIBPart3,
  "ggib-4":       GGIBPart4,
  "ggib-5":       GGIBPart5,
  "ggib-6":       GGIBPart6,
};

export default function Research({ initialPaper = null, setPage }) {
  const [ggibOpen, setGgibOpen] = useState(false);
  const [activePaper, setActivePaper] = useState(initialPaper);

  // Sync active paper when navigating via browser back/forward
  useEffect(() => {
    setActivePaper(initialPaper);
  }, [initialPaper]);

  function openPaper(id) {
    setActivePaper(id);
    if (setPage) setPage(`research/${id}`);
  }

  function closePaper() {
    setActivePaper(null);
    if (setPage) setPage("research");
  }

  // ── Individual paper view ──
  if (activePaper && PAPER_COMPONENTS[activePaper]) {
    const PaperComponent = PAPER_COMPONENTS[activePaper];
    const paperSeo = SEO_ROUTES[`research/${activePaper}`];
    return (
      <>
        {paperSeo && <Seo {...paperSeo} />}
        <PaperComponent onBack={closePaper} />
      </>
    );
  }

  // ── Research listing ──
  return (
    <div className="inner-section">
      <Seo {...SEO_ROUTES.research} />
      <div className="section-tag">03 — Research</div>
      <h1 className="section-heading">Papers &amp;<br />Frameworks</h1>
      <p className="section-sub">
        Original research produced under the <strong>Professor Bone Lab</strong> identity at JHU.
        Writing voice: problem-statement-first, direct declarative, no hedging.
      </p>

      <div className="research-list">

        {/* ── CARD 01: GGIB-M Benchmark ── */}
        <div
          className="research-card ggib-card"
          onClick={() => setGgibOpen(!ggibOpen)}
          style={{ cursor: "pointer" }}
        >
          <div className="ggib-header">
            <div className="research-num">01</div>
            <div className="research-content">
              <div className="research-title">
                GGIB-M Benchmark Specification
                <span className="ggib-badge">6 PARTS</span>
              </div>
              <div className="research-meta">
                Governed General Intelligence Benchmark · Metacognition Track · w/ Caroline Brooks · Kaggle
              </div>
              <div className="research-abstract">
                Full six-part benchmark specification targeting epistemic regulation in AI behavior.
                Evaluates whether AI systems can accurately assess the boundaries of their own knowledge
                under adversarial and standard conditions.
              </div>
            </div>
            <div className={`research-arrow ${ggibOpen ? "open" : ""}`}>↓</div>
          </div>

          {ggibOpen && (
            <div className="ggib-parts" onClick={(e) => e.stopPropagation()}>
              <div className="ggib-divider" />

              {[
                { id: "ggib-1", label: "Part 1", title: "Critical Analysis of the Metacognition Evaluation Design Space" },
                { id: "ggib-2", label: "Part 2", title: "Metacognition Task Family Design" },
                { id: "ggib-3", label: "Part 3", title: "Formal Scoring Framework" },
                { id: "ggib-4", label: "Part 4", title: "Human Baseline Design" },
                { id: "ggib-5", label: "Part 5", title: "Contamination Resistance and Gaming Defenses" },
                { id: "ggib-6", label: "Part 6", title: "Kaggle-Ready Deliverables" },
              ].map(({ id, label, title }) => (
                <a
                  key={id}
                  className="ggib-part"
                  href={`/research/${id}`}
                  onClick={(e) => { e.preventDefault(); openPaper(id); }}
                >
                  <span className="ggib-part-num">{label}</span>
                  <span className="ggib-part-title">{title}</span>
                  <span className="ggib-dl" style={{ color: "var(--cyan)" }}>Read →</span>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* ── CARD 02: Orchestrator Epistemic Capture ── */}
        <a
          className="research-card"
          href="/research/orchestrator"
          onClick={(e) => { e.preventDefault(); openPaper("orchestrator"); }}
        >
          <div className="research-num">02</div>
          <div className="research-content">
            <div className="research-title">Orchestrator Epistemic Capture</div>
            <div className="research-meta">Professor Bone Lab · JHU · Agentic AI Series · v1.2</div>
            <div className="research-abstract">
              Explores the failure mode in which an orchestrating agent's belief state becomes the
              primary constraint on downstream agent behavior, limiting system adaptability and
              introducing systematic bias into multi-agent pipelines.
            </div>
          </div>
          <div className="research-arrow" style={{ color: "var(--cyan)", fontSize: "0.75rem", letterSpacing: "0.06em" }}>
            Read →
          </div>
        </a>

        {/* ── CARD 03: Cognitive Horizon ── */}
        <a
          className="research-card"
          href="/research/cognitive"
          onClick={(e) => { e.preventDefault(); openPaper("cognitive"); }}
        >
          <div className="research-num">03</div>
          <div className="research-content">
            <div className="research-title">Cognitive Horizon</div>
            <div className="research-meta">Professor Bone Lab · JHU · Context Theory · v6</div>
            <div className="research-abstract">
              A formal framework for understanding the temporal and contextual limits of AI agent
              reasoning — where knowledge degrades, where attention saturates, and how systems
              should behave at the edge of their cognitive horizon.
            </div>
          </div>
          <div className="research-arrow" style={{ color: "var(--cyan)", fontSize: "0.75rem", letterSpacing: "0.06em" }}>
            Read →
          </div>
        </a>

        {/* ── CARD 04: Agent State Framework ── */}
        <a
          className="research-card"
          href="/research/agent-state"
          onClick={(e) => { e.preventDefault(); openPaper("agent-state"); }}
        >
          <div className="research-num">04</div>
          <div className="research-content">
            <div className="research-title">Agent State Framework</div>
            <div className="research-meta">Professor Bone Lab · JHU · Architecture Series · v3</div>
            <div className="research-abstract">
              Defines a formal state model for autonomous AI agents — covering belief states, goal
              hierarchies, action affordances, and the transitions between operational modes in
              governed multi-agent systems.
            </div>
          </div>
          <div className="research-arrow" style={{ color: "var(--cyan)", fontSize: "0.75rem", letterSpacing: "0.06em" }}>
            Read →
          </div>
        </a>

        {/* ── CARD 05: Epistemic Governance Deep Research ── */}
        <a
          className="research-card"
          href="/research/epistemic"
          onClick={(e) => { e.preventDefault(); openPaper("epistemic"); }}
        >
          <div className="research-num">05</div>
          <div className="research-content">
            <div className="research-title">Epistemic Governance: Deep Research</div>
            <div className="research-meta">Professor Bone Lab · JHU · Governance Series</div>
            <div className="research-abstract">
              A deep research document examining how epistemic governance principles can be embedded
              into multi-agent AI architectures — addressing how systems maintain accurate, bounded,
              and auditable belief states under uncertainty.
            </div>
          </div>
          <div className="research-arrow" style={{ color: "var(--cyan)", fontSize: "0.75rem", letterSpacing: "0.06em" }}>
            Read →
          </div>
        </a>

      </div>
    </div>
  );
}
