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

  if (activePaper === "agent-state")   return <AgentStateFramework onBack={() => setActivePaper(null)} />;
  if (activePaper === "orchestrator")  return <OrchestratorEpistemicCapture onBack={() => setActivePaper(null)} />;
  if (activePaper === "cognitive")     return <CognitiveHorizon onBack={() => setActivePaper(null)} />;
  if (activePaper === "epistemic")     return <EpistemicGovernance onBack={() => setActivePaper(null)} />;

  const readCard = (num, title, meta, abstract, key) => (
    <div className="research-card" style={{cursor:"pointer"}} onClick={() => setActivePaper(key)}>
      <div className="research-num">{num}</div>
      <div className="research-content">
        <div className="research-title">{title}</div>
        <div className="research-meta">{meta}</div>
        <div className="research-abstract">{abstract}</div>
      </div>
      <div className="research-arrow" style={{color:"var(--cyan)",fontSize:"0.75rem",letterSpacing:"0.06em"}}>Read →</div>
    </div>
  );

  return (
    <div className="inner-section">
      <div className="section-tag">03 — Research</div>
      <h2 className="section-heading">Papers &<br />Frameworks</h2>
      <p className="section-sub">
        Original research produced under the <strong>Professor Bone Lab</strong> identity at JHU.
        Writing voice: problem-statement-first, direct declarative, no hedging.
      </p>

      <div className="research-list">

        {/* GGIB Accordion */}
        <div className="research-card ggib-card" onClick={() => setGgibOpen(!ggibOpen)}>
          <div className="ggib-header">
            <div className="research-num">01</div>
            <div className="research-content">
              <div className="research-title">
                GGIB-M Benchmark Specification
                <span className="ggib-badge">6 PARTS</span>
              </div>
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

        {readCard("02","Orchestrator Epistemic Capture","Professor Bone Lab · JHU · Agentic AI Series · v1.2","Explores the failure mode in which an orchestrating agent's belief state becomes the primary constraint on downstream agent behavior, introducing systematic bias into multi-agent pipelines.","orchestrator")}
        {readCard("03","Cognitive Horizon: Context Management Theory","Professor Bone Lab · JHU · Foundational Paper · v6","Foundational theory examining how AI agents manage the boundaries of their operational context window — defining the cognitive horizon as the limit beyond which agents cannot accurately reason about prior state.","cognitive")}
        {readCard("04","Agent State Framework","Professor Bone Lab · JHU · Agentic AI Series · v3","A formal framework for classifying, tracking, and restoring the operational state of AI agents across session boundaries — with direct application to the PACS architecture's session resume and uncertainty handling protocols.","agent-state")}
        {readCard("05","Epistemic Governance: Deep Research","Professor Bone Lab · JHU · Governance Series","Independent deep research validating the architectural claims in Orchestrator Epistemic Capture and the Continuum governance architecture against established literature — with honest acknowledgment of the limits of that grounding.","epistemic")}

      </div>
    </div>
  );
}
