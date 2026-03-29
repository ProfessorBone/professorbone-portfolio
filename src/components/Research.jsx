import { useState } from "react";
import AgentStateFramework from "./papers/AgentStateFramework";
import OrchestratorEpistemicCapture from "./papers/OrchestratorEpistemicCapture";
import CognitiveHorizon from "./papers/CognitiveHorizon";
import EpistemicGovernance from "./papers/EpistemicGovernance";
import GGIBPart1 from "./papers/GGIBPart1";
import GGIBPart2 from "./papers/GGIBPart2";
import "../paper.css";
import "../paper-ggib.css";

export default function Research() {
  const [ggibOpen, setGgibOpen] = useState(false);
  const [activePaper, setActivePaper] = useState(null);

  // ── Inline paper routing ──
  if (activePaper === "agent-state")    return <AgentStateFramework onBack={() => setActivePaper(null)} />;
  if (activePaper === "orchestrator")   return <OrchestratorEpistemicCapture onBack={() => setActivePaper(null)} />;
  if (activePaper === "cognitive")      return <CognitiveHorizon onBack={() => setActivePaper(null)} />;
  if (activePaper === "epistemic")      return <EpistemicGovernance onBack={() => setActivePaper(null)} />;
  if (activePaper === "ggib-1")         return <GGIBPart1 onBack={() => setActivePaper(null)} />;
  if (activePaper === "ggib-2")         return <GGIBPart2 onBack={() => setActivePaper(null)} />;

  return (
    <div className="inner-section">
      <div className="section-tag">03 — Research</div>
      <h2 className="section-heading">Papers &amp;<br />Frameworks</h2>
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

              {/* Part 1 — inline reader */}
              <div
                className="ggib-part"
                style={{ cursor: "pointer" }}
                onClick={() => setActivePaper("ggib-1")}
              >
                <span className="ggib-part-num">Part 1</span>
                <span className="ggib-part-title">Critical Analysis of the Metacognition Evaluation Design Space</span>
                <span className="ggib-dl" style={{ color: "var(--cyan)" }}>Read →</span>
              </div>

              {/* Parts 2–6 — PDF until inline readers are built */}
              {/* Part 2 — inline reader */}
              <div
                className="ggib-part"
                style={{ cursor: "pointer" }}
                onClick={() => setActivePaper("ggib-2")}
              >
                <span className="ggib-part-num">Part 2</span>
                <span className="ggib-part-title">Metacognition Task Family Design</span>
                <span className="ggib-dl" style={{ color: "var(--cyan)" }}>Read →</span>
              </div>

              <a
                href="/papers/GGIB_Part_3.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="ggib-part"
              >
                <span className="ggib-part-num">Part 3</span>
                <span className="ggib-part-title">Formal Scoring Framework</span>
                <span className="ggib-dl">↓ PDF</span>
              </a>

              <a
                href="/papers/GGIB_Part_4.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="ggib-part"
              >
                <span className="ggib-part-num">Part 4</span>
                <span className="ggib-part-title">Human Baseline Design</span>
                <span className="ggib-dl">↓ PDF</span>
              </a>

              <a
                href="/papers/GGIB_Part_5.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="ggib-part"
              >
                <span className="ggib-part-num">Part 5</span>
                <span className="ggib-part-title">Contamination Resistance and Gaming Defenses</span>
                <span className="ggib-dl">↓ PDF</span>
              </a>

              <a
                href="/papers/GGIB_Part_6.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="ggib-part"
              >
                <span className="ggib-part-num">Part 6</span>
                <span className="ggib-part-title">Kaggle-Ready Deliverables</span>
                <span className="ggib-dl">↓ PDF</span>
              </a>

            </div>
          )}
        </div>

        {/* ── CARD 02: Orchestrator Epistemic Capture ── */}
        <div
          className="research-card"
          style={{ cursor: "pointer" }}
          onClick={() => setActivePaper("orchestrator")}
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
        </div>

        {/* ── CARD 03: Cognitive Horizon ── */}
        <div
          className="research-card"
          style={{ cursor: "pointer" }}
          onClick={() => setActivePaper("cognitive")}
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
        </div>

        {/* ── CARD 04: Agent State Framework ── */}
        <div
          className="research-card"
          style={{ cursor: "pointer" }}
          onClick={() => setActivePaper("agent-state")}
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
        </div>

        {/* ── CARD 05: Epistemic Governance Deep Research ── */}
        <div
          className="research-card"
          style={{ cursor: "pointer" }}
          onClick={() => setActivePaper("epistemic")}
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
        </div>

      </div>
    </div>
  );
}
