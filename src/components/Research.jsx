import { useState } from "react";
import { ggibParts, papers } from "../data/research";
import AgentStateFramework from "./papers/AgentStateFramework";
import "../paper.css";

export default function Research() {
  const [ggibOpen, setGgibOpen] = useState(false);
  const [activePaper, setActivePaper] = useState(null);

  if (activePaper === "agent-state") return <AgentStateFramework onBack={() => setActivePaper(null)} />;

  return (
    <div className="inner-section">
      <div className="section-tag">03 — Research</div>
      <h2 className="section-heading">Papers &<br />Frameworks</h2>
      <p className="section-sub">
        Original research produced under the <strong>Professor Bone Lab</strong> identity at JHU.
        Writing voice: problem-statement-first, direct declarative, no hedging.
      </p>

      <div className="research-list">

        <div className="research-card ggib-card" onClick={() => setGgibOpen(!ggibOpen)}>
          <div className="ggib-header">
            <div className="research-num">01</div>
            <div className="research-content">
              <div className="research-title">
                GGIB-M Benchmark Specification
                <span className="ggib-badge">6 PARTS</span>
              </div>
              <div className="research-meta">Governed General Intelligence Benchmark · Metacognition Track · w/ Caroline Brooks · Kaggle</div>
              <div className="research-abstract">Full six-part benchmark specification targeting epistemic regulation in AI behavior.</div>
            </div>
            <div className={`research-arrow ${ggibOpen ? "open" : ""}`}>↓</div>
          </div>
          {ggibOpen && (
            <div className="ggib-parts" onClick={(e) => e.stopPropagation()}>
              <div className="ggib-divider" />
              {ggibParts.map((p) => (
                <a key={p.part} href={`/papers/${p.file}`} target="_blank" rel="noopener noreferrer" className="ggib-part">
                  <span className="ggib-part-num">{p.part}</span>
                  <span className="ggib-part-title">{p.title}</span>
                  <span className="ggib-dl">↓ PDF</span>
                </a>
              ))}
            </div>
          )}
        </div>

        <a href="/papers/Orchestrator_Epistemic_Capture_v2.pdf" target="_blank" rel="noopener noreferrer" className="research-card" style={{textDecoration:"none"}}>
          <div className="research-num">02</div>
          <div className="research-content">
            <div className="research-title">Orchestrator Epistemic Capture</div>
            <div className="research-meta">Professor Bone Lab · JHU · Agentic AI Series · v2</div>
            <div className="research-abstract">Explores the failure mode in which an orchestrating agent's belief state becomes the primary constraint on downstream agent behavior.</div>
          </div>
          <div className="research-arrow">↓ PDF</div>
        </a>

        <a href="/papers/Cognitive_Horizon_v6.pdf" target="_blank" rel="noopener noreferrer" className="research-card" style={{textDecoration:"none"}}>
          <div className="research-num">03</div>
          <div className="research-content">
            <div className="research-title">Cognitive Horizon: Context Management Theory</div>
            <div className="research-meta">Professor Bone Lab · JHU · Foundational Paper · v6</div>
            <div className="research-abstract">Foundational theory examining how AI agents manage the boundaries of their operational context window.</div>
          </div>
          <div className="research-arrow">↓ PDF</div>
        </a>

        <div className="research-card" style={{cursor:"pointer"}} onClick={() => setActivePaper("agent-state")}>
          <div className="research-num">04</div>
          <div className="research-content">
            <div className="research-title">Agent State Framework</div>
            <div className="research-meta">Professor Bone Lab · JHU · Agentic AI Series · v3</div>
            <div className="research-abstract">A formal framework for classifying, tracking, and restoring the operational state of AI agents across session boundaries.</div>
          </div>
          <div className="research-arrow" style={{color:"var(--cyan)",fontSize:"0.75rem",letterSpacing:"0.06em"}}>Read →</div>
        </div>

        <a href="/papers/Epistemic_Governance_Deep_Research.pdf" target="_blank" rel="noopener noreferrer" className="research-card" style={{textDecoration:"none"}}>
          <div className="research-num">05</div>
          <div className="research-content">
            <div className="research-title">Epistemic Governance: Deep Research</div>
            <div className="research-meta">Professor Bone Lab · JHU · Governance Series</div>
            <div className="research-abstract">How epistemic governance principles can be embedded into multi-agent AI architectures.</div>
          </div>
          <div className="research-arrow">↓ PDF</div>
        </a>

      </div>
    </div>
  );
}
