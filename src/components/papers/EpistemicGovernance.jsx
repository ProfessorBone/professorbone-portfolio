export default function EpistemicGovernance({ onBack }) {
  return (
    <div className="paper-wrap">
      <button className="paper-back" onClick={onBack}>← Back to Research</button>

      <div className="paper-header">
        <div className="paper-lab-tag">Professor Bone Lab · Independent Deep Research Validation</div>
        <h1 className="paper-title">Epistemic Governance in Multi-Agent Systems</h1>
        <p className="paper-subtitle">Deep Research Validation of Architectural Claims</p>
        <div className="paper-meta-row">
          <span className="paper-meta-item"><span className="paper-meta-label">Author</span> Clarence Downs (Faheem)</span>
          <span className="paper-meta-item"><span className="paper-meta-label">Research Type</span> Independent deep research validation</span>
          <span className="paper-meta-item"><span className="paper-meta-label">Date</span> March 15, 2026</span>
        </div>
      </div>

      <div className="paper-body">

        <div className="paper-abstract">
          <div className="paper-abstract-label">Purpose</div>
          <p>This document records independent deep research conducted to validate the architectural claims made in the Orchestrator Epistemic Capture paper and the Continuum governance architecture. It is not a standalone paper. It is a companion validation document that grounds the informal claims in established literature and surfaces the limits of that grounding honestly.</p>
          <div className="paper-keywords">
            <span className="paper-kw-label">Validates</span>
            {["Orchestrator Epistemic Capture","Cognitive Horizon","Agent State Framework","Continuum Architecture","Reflexion Governance"].map(k => (
              <span key={k} className="paper-kw">{k}</span>
            ))}
          </div>
        </div>

        <div className="paper-section">
          <div className="paper-section-num">1</div>
          <h2 className="paper-section-title">What the Research Validates</h2>

          <h3 className="paper-subsection-title">The "Miscalibrated Ruler" Principle</h3>
          <p>The core claim from Orchestrator Epistemic Capture is confirmed as sound.</p>
          <div className="paper-principle">
            <div className="paper-principle-label">Validated Claim</div>
            No component can reliably observe its own behavioral drift using criteria that are themselves subject to the same drift.
          </div>
          <p>This principle appears independently across multiple engineering disciplines:</p>
          <div className="paper-list">
            <div className="paper-list-item"><span className="paper-list-key">Control Theory</span> A sensor near its own failure mode cannot self-calibrate without an external reference signal.</div>
            <div className="paper-list-item"><span className="paper-list-key">Distributed Systems</span> A node cannot detect its own partition from inside the partition.</div>
            <div className="paper-list-item"><span className="paper-list-key">Safety Engineering</span> Independent monitoring exists precisely because primary components cannot self-certify correct operation under fault models.</div>
            <div className="paper-list-item"><span className="paper-list-key">Epistemology</span> A biased evaluator cannot detect its own bias using the biased evaluation criteria.</div>
          </div>
          <p>The research validates that external evaluation layers positioned above drifting components is the standard pattern in mature safety-critical systems. The Carnegie Mellon runtime monitoring literature describes an "external, isolated monitor" designed to detect violations regardless of cause — structurally identical to the Meta-Evaluation Checkpoint's role in Continuum.</p>

          <h3 className="paper-subsection-title">LLM Self-Evaluation Is Measurably Unreliable</h3>
          <div className="paper-list">
            <div className="paper-list-item"><span className="paper-list-key">Self-Preference Bias</span> LLM-as-a-judge studies consistently identify that LLM evaluators systematically prefer outputs resembling their own generation style.</div>
            <div className="paper-list-item"><span className="paper-list-key">Unsolved Problem</span> Self-evaluation reliability — consistency, robustness, bias — is a central unsolved problem, not a solved default.</div>
            <div className="paper-list-item"><span className="paper-list-key">Panel Judging</span> Panel-based judging approaches improve consistency but do not eliminate the problem.</div>
          </div>
          <p>This supports the architecture's insistence that no agent in Continuum self-certifies its own correctness, and that Gauge must have its own reliability controls rather than being treated as inherently trustworthy by virtue of its architectural position alone.</p>

          <h3 className="paper-subsection-title">Independent Observability Is the Correct Architectural Solution</h3>
          <p>The Continuum governance stack maps directly to patterns used in safety-critical infrastructure:</p>
          <div className="paper-list">
            <div className="paper-list-item"><span className="paper-list-key">Flight Envelope Protection above Flight Computer</span> → Meta-Evaluation Checkpoint above The Bridge</div>
            <div className="paper-list-item"><span className="paper-list-key">Independent Monitoring Channel</span> → Gauge as independent measurement layer</div>
            <div className="paper-list-item"><span className="paper-list-key">Watchdog Timer</span> → Evaluation Harness detecting non-compliance</div>
            <div className="paper-list-item"><span className="paper-list-key">Risk Engine kill switch above Strategy Engine</span> → Bridge governance over all domain agents</div>
          </div>
          <div className="paper-principle">
            <div className="paper-principle-label">Validation Finding</div>
            The hierarchical epistemic governance stack — Execution → Control → Governance → Observability → Audit — is confirmed as an architecturally mature pattern, not an idiosyncratic design choice.
          </div>

          <h3 className="paper-subsection-title">Withholding Rejection Rationale from Locus Is a Defensible Choice</h3>
          <div className="paper-list">
            <div className="paper-list-item"><span className="paper-list-key">Separation of Duties</span> Giving Locus detailed rationale would make it simultaneously an executor and an optimizer, blurring the governance boundary between doers and auditors. The control-plane doctrine in Continuum explicitly separates these roles.</div>
            <div className="paper-list-item"><span className="paper-list-key">Goodhart-Style Evaluator Gaming</span> Rich feedback causes systems to learn the evaluator rather than the underlying truth. This is empirically documented in LLM self-refinement research, where closed-loop critic-update-memory pipelines amplify self-bias. Coarse rejection codes reduce this risk while still providing signal.</div>
          </div>

          <h3 className="paper-subsection-title">System-Level Learning Is Stronger Than Component-Level Learning</h3>
          <div className="paper-principle">
            <div className="paper-principle-label">Validated Pattern</div>
            Locus stays predictable. The system learns via evaluation harness + schema tightening + instruction updates. This matches how production organizations manage drift: monitor quality at the system level, detect systematic error patterns, correct through controlled updates, and treat individual runtime components as stable execution units.
          </div>
        </div>

        <div className="paper-section">
          <div className="paper-section-num">2</div>
          <h2 className="paper-section-title">What the Research Adds Beyond Current Documentation</h2>

          <h3 className="paper-subsection-title">Bounded Rejection Codes as a Middle-Ground Option</h3>
          <p>A concrete mechanism not currently specified in Continuum: typed rejection metadata that provides minimal signal without creating a rich self-modification channel.</p>
          <div className="paper-code">
            <div className="paper-code-label">Example Rejection Code Categories</div>
            <pre>{`SCHEMA_VIOLATION
INSUFFICIENT_EVIDENCE
AMBIGUOUS_ENTITY
CONFLICT_WITH_GRAPH_CONSTRAINT`}</pre>
          </div>
          <p>This mirrors production system patterns: expose coarse failure classes while keeping detailed policy logic in the control plane. A Phase 2 implementation option for the Bridge-to-Locus rejection signal design.</p>

          <h3 className="paper-subsection-title">Gauge Reliability as a First-Class Measurement Problem</h3>
          <div className="paper-list">
            <div className="paper-list-item"><span className="paper-list-key">Judge Consistency and Transitivity</span> Must be measured, not assumed.</div>
            <div className="paper-list-item"><span className="paper-list-key">Panel-Based Approaches</span> Improve consistency but do not eliminate the problem.</div>
            <div className="paper-list-item"><span className="paper-list-key">Calibration</span> Against a trusted ground-truth subset is recommended where possible.</div>
          </div>
          <p>Open item for Stage 2 Gauge scaffolding.</p>

          <h3 className="paper-subsection-title">A Governed "Learning Proposal" Channel for Locus</h3>
          <div className="paper-callout">
            <div className="paper-callout-row"><span className="paper-callout-key">Step 1</span> Keep Locus non-learning in its execution behavior.</div>
            <div className="paper-callout-row"><span className="paper-callout-key">Step 2</span> Add a governed "learning proposal" channel where Locus can suggest extraction rule improvements.</div>
            <div className="paper-callout-row"><span className="paper-callout-key">Step 3</span> Route proposals to Crucible or MEC for adjudication.</div>
            <div className="paper-callout-row"><span className="paper-callout-key">Step 4</span> Apply only after external validation and decision log entry.</div>
          </div>
          <p>Not Phase 1 or Phase 2 scope. Documented here as an architecturally coherent future upgrade path that preserves the key invariant: agents do not self-certify drift correction.</p>
        </div>

        <div className="paper-section">
          <div className="paper-section-num">3</div>
          <h2 className="paper-section-title">Honest Limits of the Grounding</h2>

          <h3 className="paper-subsection-title">"Orchestrator Epistemic Capture" Is Not Yet an Established Academic Term</h3>
          <p>The research did not find a peer-reviewed publication with this title. The term originates from a LinkedIn articulation by Clarence Downs. The mechanism it describes — feedback-loop corruption in orchestrator decision-making causing self-reinforcing drift — is real and aligns with well-documented dynamics in feedback control, metric gaming, and reward-driven learning systems. The specific term does not yet have stable academic definitions or peer-reviewed citation chains.</p>
          <div className="paper-definition">
            <div className="paper-definition-label">Recommended Citing Position</div>
            Attribute Orchestrator Epistemic Capture to Clarence Downs as the originating thinker, note that the mechanism aligns with established control theory and MLOps literature, and acknowledge it as an emerging framework rather than a canonized academic term. That is an honest and strong position.
          </div>

          <h3 className="paper-subsection-title">Distribution-Based Drift Monitoring Is a Proxy, Not a Proof</h3>
          <p>Distribution-shift monitoring can suggest drift risk but cannot directly prove semantic correctness. Locus's S5 Graph Consistency Signal is a structural proxy of this type — it can flag that something has changed; it cannot confirm that extractions remain semantically correct. This reinforces the architecture's reliance on the Evaluation Harness as the primary correctness validation mechanism rather than runtime monitoring alone.</p>
        </div>

        <div className="paper-section">
          <div className="paper-section-num">4</div>
          <h2 className="paper-section-title">Connection to Continuum Architecture Decisions</h2>
          <div className="paper-list">
            <div className="paper-list-item"><span className="paper-list-key">External monitors required for drift detection</span> → MEC above The Bridge; Gauge independent of agents</div>
            <div className="paper-list-item"><span className="paper-list-key">LLM self-evaluation is biased and unreliable</span> → No agent self-certifies; all governed pathways external</div>
            <div className="paper-list-item"><span className="paper-list-key">Withholding rationale prevents evaluator gaming</span> → Locus receives rejection codes, not reasoning</div>
            <div className="paper-list-item"><span className="paper-list-key">System-level learning is stronger</span> → Evaluation Harness + schema updates + AGENTS.md revisions</div>
            <div className="paper-list-item"><span className="paper-list-key">Goodhart collapse under rich feedback</span> → Coarse rejection codes preferred over detailed rationales</div>
            <div className="paper-list-item"><span className="paper-list-key">Gauge reliability is a measurable concern</span> → Stage 2 open item: Gauge reliability controls</div>
            <div className="paper-list-item"><span className="paper-list-key">Governed learning proposal channel is viable</span> → Future option; not Phase 1 or 2 scope</div>
          </div>
        </div>

        <div className="paper-section">
          <div className="paper-section-num">5</div>
          <h2 className="paper-section-title">Status of Related Papers</h2>
          <div className="paper-list">
            <div className="paper-list-item"><span className="paper-list-key">Orchestrator Epistemic Capture</span> Emerging informal term (Clarence Downs) · Mechanism validated against established literature</div>
            <div className="paper-list-item"><span className="paper-list-key">Cognitive Horizon</span> Original framework · Supported by CoALA working memory research</div>
            <div className="paper-list-item"><span className="paper-list-key">Agent State Framework</span> Original framework · Aligned with State Primacy principle and MLOps practice</div>
            <div className="paper-list-item"><span className="paper-list-key">Reflexion (Shinn et al.)</span> Established technique · Governance risks documented; Continuum gates Reflexion outputs externally</div>
          </div>
        </div>

        <div className="paper-footer-note">
          Professor Bone Lab · Continuum Research Companion · March 15, 2026 · Companion to Orchestrator Epistemic Capture v2
        </div>

      </div>
    </div>
  );
}
