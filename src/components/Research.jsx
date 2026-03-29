import { useState } from "react";
import { ggibParts } from "../data/research";
import AgentStateFramework from "./papers/AgentStateFramework";
import OrchestratorEpistemicCapture from "./papers/OrchestratorEpistemicCapture";
import CognitiveHorizon from "./papers/CognitiveHorizon";
import EpistemicGovernance from "./papers/EpistemicGovernance";
import "../paper.css";

export default function Research() {
  const [ggibOpen, setGgibOpen] = useState(false);
  const [activePaper, setActivePaper] = useState(null);

  if (activePaper === "agent-state")  return <AgentStateFramework onBack={() => setActivePaper(null)} />;
  if (activePaper === "orchestrator") return <OrchestratorEpistemicCapture onBack={() => setActivePaper(null)} />;
  if (activePaper === "cognitive")    return <CognitiveHorizon onBack={() => setActivePaper(null)} />;
  if (activePaper === "epistemic")    return <EpistemicGovernance onBack={() => setActivePaper(null)} />;

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
              <div className="research-title">GGIB-M Benchmark Specification <span className="ggib-badge">6 PARTS</span></div>
              <div className="research-meta">Governed General Intelligence Benchmark · Metacognition Track · w/ Caroline Brooks · Kaggle</div>
              <div className="research-abstract">Full six-part benchmark specification targeting epistemic regulation in AI behavior. Evaluates whether AI systems can accurately assess the boundaries of their own knowledge under adversarial and standard conditions.</div>
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

        <div className="research-card" style={{cursor:"pointer"}} onClick={() => setActivePaper("orchestrator")}>
          <div className="research-num">02</div>
          <div className="research-content">
            <div className="research-title">Orchestrator Epistemic Capture</div>
            <div className="research-meta">Professor Bone Lab · JHU · Agentic AI Series · v1.2</div>
            <div className="research-abstract">The control-plane governance failure mode in which an orchestrating agent's policy layer develops systematic biases, corrupting the evaluation signal feeding the entire multi-agent system.</div>
          </div>
          <div className="research-arrow" style={{color:"var(--cyan)",fontSize:"0.75rem",letterSpacing:"0.06em"}}>Read →</div>
        </div>

        <div className="research-card" style={{cursor:"pointer"}} onClick={() => setActivePaper("cognitive")}>
          <div className="research-num">03</div>
          <div className="research-content">
            <div className="research-title">Cognitive Horizon: Context Management Theory</div>
            <div className="research-meta">Professor Bone Lab · JHU · Foundational Paper · v6</div>
            <div className="research-abstract">A structural model of operative cognition. Defines the Cognitive Horizon as the boundary beyond which agents cannot reason, and distinguishes latent state from operative state to diagnose gating failures.</div>
          </div>
          <div className="research-arrow" style={{color:"var(--cyan)",fontSize:"0.75rem",letterSpacing:"0.06em"}}>Read →</div>
        </div>

        <div className="research-card" style={{cursor:"pointer"}} onClick={() => setActivePaper("agent-state")}>
          <div className="research-num">04</div>
          <div className="research-content">
            <div className="research-title">Agent State Framework</div>
            <div className="research-meta">Professor Bone Lab · JHU · Agentic AI Series · v3</div>
            <div className="research-abstract">A practitioner framework for working memory design, logging strategy, and multi-agent coordination. Introduces the four-category state update taxonomy and the latent vs. operative state distinction.</div>
          </div>
          <div className="research-arrow" style={{color:"var(--cyan)",fontSize:"0.75rem",letterSpacing:"0.06em"}}>Read →</div>
        </div>

        <div className="research-card" style={{cursor:"pointer"}} onClick={() => setActivePaper("epistemic")}>
          <div className="research-num">05</div>
          <div className="research-content">
            <div className="research-title">Epistemic Governance: Deep Research</div>
            <div className="research-meta">Professor Bone Lab · Continuum · Validation Companion · March 2026</div>
            <div className="research-abstract">Independent deep research validating the architectural claims in the Orchestrator Epistemic Capture paper and Continuum governance architecture against established literature — with honest documentation of its limits.</div>
          </div>
          <div className="research-arrow" style={{color:"var(--cyan)",fontSize:"0.75rem",letterSpacing:"0.06em"}}>Read →</div>
        </div>

      </div>
    </div>
  );
}
