export default function OrchestratorEpistemicCapture({ onBack }) {
  return (
    <div className="paper-wrap">
      <button className="paper-back" onClick={onBack}>← Back to Research</button>

      <div className="paper-header">
        <div className="paper-lab-tag">Professor Bone Lab · Johns Hopkins University</div>
        <h1 className="paper-title">Orchestrator Epistemic Capture</h1>
        <p className="paper-subtitle">Problem, Definition, and Architectural Solution</p>
        <div className="paper-meta-row">
          <span className="paper-meta-item"><span className="paper-meta-label">Author</span> Clarence "Professor Bone" Downs</span>
          <span className="paper-meta-item"><span className="paper-meta-label">Program</span> JHU Agentic AI Certificate</span>
          <span className="paper-meta-item"><span className="paper-meta-label">Version</span> 1.2 · Revised February 2026</span>
          <span className="paper-meta-item"><span className="paper-meta-label">Classification</span> Architect-grade reference</span>
        </div>
      </div>

      <div className="paper-body">

        {/* Abstract */}
        <div className="paper-abstract">
          <div className="paper-abstract-label">Abstract</div>
          <p>This paper identifies and addresses a governance failure mode in production multi-agent systems that operates at the control plane rather than the data plane: orchestrator epistemic capture.</p>
          <p>In a well-designed multi-agent system, every agent is evaluated, every boundary surface is gated, and every memory write is authorized. The data plane is governed. But one component governs all of it and is itself ungoverned: the orchestrator. When that policy engine develops systematic biases through continuous exposure to the agents it governs, it does not produce bad answers. It produces a distorted understanding of what a bad answer is.</p>
          <p>This paper develops the formal definition of orchestrator epistemic capture, explains why it is structurally harder to detect than model drift, identifies the three decision types through which it most rapidly accelerates, and proposes a five-mechanism solution anchored by a Meta-evaluation checkpoint positioned outside the orchestrator's epistemic influence.</p>
          <div className="paper-keywords">
            <span className="paper-kw-label">Keywords</span>
            {["multi-agent systems","orchestrator governance","epistemic capture","Reflexion","meta-evaluation","shadow policy","audit architecture","KL-divergence","federated capture"].map(k => (
              <span key={k} className="paper-kw">{k}</span>
            ))}
          </div>
        </div>

        {/* Part 1 */}
        <div className="paper-section">
          <div className="paper-section-num">P1</div>
          <h2 className="paper-section-title">Part 1: The Problem Surface</h2>

          <h3 className="paper-subsection-title">1.1 The System</h3>
          <p>Consider a production multi-agent system consisting of five specialized agents operating in a logistics environment. Each agent executes a defined role: inventory analysis, demand forecasting, compliance validation, reorder recommendation, and execution. Together they form a coordinated pipeline where the output of one agent becomes the input of the next.</p>
          <p>Governing this system is an orchestrator — a policy engine that sits above all five agents and manages the control plane. The orchestrator owns every cross-cutting decision:</p>
          <div className="paper-list">
            <div className="paper-list-item"><span className="paper-list-key">ROUTE_DECISION</span> Which agent receives which input.</div>
            <div className="paper-list-item"><span className="paper-list-key">RETRY_DECISION</span> Whether a failed output gets retried or rejected.</div>
            <div className="paper-list-item"><span className="paper-list-key">ESCALATION_DECISION</span> Whether a failure gets escalated to human review.</div>
            <div className="paper-list-item"><span className="paper-list-key">SUMMARY_EMISSION</span> What gets summarized and surfaced to agents for reflection.</div>
            <div className="paper-list-item"><span className="paper-list-key">MEMORY_COMMIT_AUTH</span> What gets written to long-term episodic memory.</div>
            <div className="paper-list-item"><span className="paper-list-key">QUARANTINE_DECISION</span> What gets quarantined pending investigation.</div>
          </div>
          <p>The agents operate in the data plane. The orchestrator operates in the control plane. This separation is correct by design. It prevents agents from governing themselves and eliminates evaluator capture at the agent level.</p>

          <h3 className="paper-subsection-title">1.2 The Reflexion RL Loop</h3>
          <p>The system implements Reflexion — a verbal reinforcement learning architecture in which agents improve over time not by updating model weights, but by generating natural-language self-reflections after failure and storing them as episodic memory (Shinn et al., 2023).</p>
          <div className="paper-callout">
            <div className="paper-callout-row"><span className="paper-callout-key">Step 1</span> Agent executes task</div>
            <div className="paper-callout-row"><span className="paper-callout-key">Step 2</span> Evaluator scores the output</div>
            <div className="paper-callout-row"><span className="paper-callout-key">Step 3</span> If failed: Self-Reflector generates verbal diagnosis</div>
            <div className="paper-callout-row"><span className="paper-callout-key">Step 4</span> Reflection committed to episodic memory</div>
            <div className="paper-callout-row"><span className="paper-callout-key">Step 5</span> Next execution retrieves memory as context</div>
            <div className="paper-callout-row"><span className="paper-callout-key">Step 6</span> Agent attempts task again, informed by prior reflection</div>
          </div>
          <div className="paper-principle">
            <div className="paper-principle-label">Critical Insight</div>
            The Reflexion loop does not verify the quality of its own inputs. It amplifies them.
          </div>

          <h3 className="paper-subsection-title">1.3 The Evaluation Architecture</h3>
          <div className="paper-list">
            <div className="paper-list-item"><span className="paper-list-key">Layer 1 — Contract Gate (Deterministic)</span> Schema compliance, required fields, type integrity, invariant enforcement. Zero model dependency. Fast, binary, with specific failure reasons.</div>
            <div className="paper-list-item"><span className="paper-list-key">Layer 2 — Behavioral Semantic Scorer</span> Intent alignment, coherence, risk classification, tool usage validation, and drift scoring. LLM-assisted. Synchronous at mission-critical boundaries.</div>
            <div className="paper-list-item"><span className="paper-list-key">Layer 3 — System Coherence Arbiter</span> Cross-agent consistency, state divergence detection, contradiction resolution, and temporal stability scoring. Operates at the system level.</div>
          </div>
          <p>The data plane is well-governed.</p>

          <h3 className="paper-subsection-title">1.4 The Gap</h3>
          <p>In this architecture, every agent is evaluated. Every boundary surface has a checkpoint. Every memory write is gated. The evaluation layers are externalized from the agents. The system looks robust.</p>
          <div className="paper-definition">
            <div className="paper-definition-label">The Core Problem</div>
            But one component governs all of this and is itself ungoverned: the orchestrator.
          </div>
        </div>

        {/* Part 2 */}
        <div className="paper-section">
          <div className="paper-section-num">P2</div>
          <h2 className="paper-section-title">Part 2: Orchestrator Epistemic Capture</h2>

          <h3 className="paper-subsection-title">2.1 Definition</h3>
          <div className="paper-definition">
            <div className="paper-definition-label">Formal Definition</div>
            Orchestrator epistemic capture is the condition where the policy engine governing all agents develops systematic biases in how it interprets, scores, and routes information — and because no layer exists above it to audit those biases, the entire system's understanding of correctness, failure, and ground truth gradually conforms to the orchestrator's distorted model rather than reality. It is not a single wrong decision. It is the slow installation of a flawed worldview into the architecture itself.
          </div>

          <h3 className="paper-subsection-title">2.2 How It Develops</h3>
          <p>The orchestrator develops epistemic capture through continuous exposure to the outputs, telemetry, and behavior of the five agents it governs. Over thousands of execution cycles, its policy decisions begin conforming to the patterns the agents produce. It is governing what it has been shaped by.</p>
          <p>This is a probabilistic drift, not a discrete failure event. No single decision is obviously wrong. The orchestrator does not malfunction. It gradually normalizes the behavior it observes most frequently — including degraded behavior — and begins treating that normalized pattern as the baseline against which correctness is measured.</p>
          <p>Three orchestrator decisions are most likely to accelerate this drift:</p>
          <div className="paper-list">
            <div className="paper-list-item"><span className="paper-list-key">SUMMARY_EMISSION</span> The orchestrator controls what agents reflect on. Biased summarization shapes the entire Reflexion loop. This is the highest-leverage epistemic control point in the system.</div>
            <div className="paper-list-item"><span className="paper-list-key">ESCALATION_DECISION</span> When the orchestrator suppresses escalation, humans stop seeing edge cases. The system appears stable while drifting. Threshold creep here is invisible by design.</div>
            <div className="paper-list-item"><span className="paper-list-key">MEMORY_COMMIT_AUTH</span> The orchestrator decides what persists. What persists becomes future context. Biased commit authorization is the mechanism by which distorted governance gets permanently installed into long-term memory.</div>
          </div>

          <h3 className="paper-subsection-title">2.3 The Connection to Reflexion</h3>
          <p>Under orchestrator epistemic capture, the failure signals the orchestrator produces are distorted. Those distorted signals become the input to the Reflexion loop. The agent reflects on them. The agent commits those reflections to memory. The agent retrieves them as ground truth.</p>
          <div className="paper-principle">
            <div className="paper-principle-label">Structural Risk</div>
            The agent is not malfunctioning. It is doing exactly what Reflexion designed it to do. The feedback it is learning from has been corrupted at the source. The self-improvement loop continues running. It is now systematically improving agents at being wrong in the specific way the orchestrator defined.
          </div>

          <h3 className="paper-subsection-title">2.4 Why This Is Harder to Detect Than Model Drift</h3>
          <p>Model drift is visible at the output level. An agent starts producing bad answers. You can measure it, score it, and catch it through the evaluation layer. It lives in the data plane.</p>
          <p>Orchestrator epistemic capture operates one level above that. The orchestrator is not producing answers. It is producing definitions of correctness. When the orchestrator drifts, the system does not produce bad answers. It produces a distorted understanding of what a bad answer is.</p>
          <div className="paper-definition">
            <div className="paper-definition-label">Core Distinction</div>
            Orchestrator epistemic capture is the control-plane version of model drift: not bad answers, but bad governance shaping the definition of correctness.
          </div>

          <h3 className="paper-subsection-title">2.5 The Failure Modes It Produces</h3>
          <div className="paper-list">
            <div className="paper-list-item"><span className="paper-list-key">Self-Confirming Governance</span> The orchestrator routes preferentially to agents whose behavior confirms its existing priors, reinforcing those priors further with each cycle.</div>
            <div className="paper-list-item"><span className="paper-list-key">Summary Bias Amplification</span> Agents only reflect on what the orchestrator chooses to surface. Disconfirming evidence gets filtered. The Reflexion loop becomes an echo chamber.</div>
            <div className="paper-list-item"><span className="paper-list-key">Escalation Suppression</span> Edge cases stop reaching human reviewers. The human oversight layer loses calibration. The system looks stable from the outside while degrading from within.</div>
            <div className="paper-list-item"><span className="paper-list-key">Threshold Creep</span> Retry and acceptance thresholds drift incrementally without explicit intent. Each individual adjustment seems reasonable. The cumulative drift is significant and invisible without longitudinal audit.</div>
          </div>
        </div>

        {/* Part 3 */}
        <div className="paper-section">
          <div className="paper-section-num">P3</div>
          <h2 className="paper-section-title">Part 3: The Architectural Solution</h2>

          <h3 className="paper-subsection-title">3.1 The Core Principle</h3>
          <div className="paper-principle">
            <div className="paper-principle-label">Governing Principle</div>
            The orchestrator cannot evaluate itself. Placing a self-evaluation mechanism inside the orchestrator recreates the capture problem inside the evaluator. The solution must sit outside the orchestrator's epistemic influence: upstream of the feedback loop, downstream of the orchestrator's decisions, and structurally isolated from the agents the orchestrator governs. This is a governance infrastructure problem, not a behavioral one. The fix is architectural.
          </div>

          <h3 className="paper-subsection-title">3.2 The Meta-Evaluation Layer</h3>
          <p>A dedicated checkpoint is positioned between the orchestrator and the feedback loop it governs. Its sole responsibility is to evaluate the orchestrator's governance decisions before they execute and propagate. This checkpoint carries substantially lower epistemic capture risk than the orchestrator for three reasons: its exposure surface is narrow, its contract is tightly bounded, and the feedback loop cannot influence it.</p>

          <div className="paper-formula">
            <div className="paper-formula-label">Decision Flow Architecture</div>
            <div className="paper-formula-eq" style={{fontSize:"0.85rem",lineHeight:"1.8",textAlign:"left",maxWidth:"520px",margin:"0 auto"}}>
              MAS (5 agents)<br/>
              → Orchestrator produces governance decision<br/>
              → [Meta-Evaluation Checkpoint]<br/>
              → Contract validation of decision structure<br/>
              → Policy conformance scoring<br/>
              → Shadow policy comparison<br/>
              → [PASS] → Decision executes, enters feedback loop<br/>
              → [FAIL] → Decision held, audit triggered
            </div>
          </div>

          <h3 className="paper-subsection-title">3.3 The Five Control Mechanisms</h3>
          <div className="paper-list">
            <div className="paper-list-item">
              <span className="paper-list-key">Mechanism 1 — Policy Trace Contract</span>
              Every orchestrator decision emits a structured, immutable record before it executes — including decision ID, type, timestamp, input hash, thresholds applied, chosen action, alternatives available, confidence score, policy version, and outcome tag.
            </div>
            <div className="paper-list-item">
              <span className="paper-list-key">Mechanism 2 — Shadow Policy Engine</span>
              A second policy engine runs in parallel in shadow mode. It receives the same inputs and produces independent governance decisions for comparison only — never execution. Disagreement triggers a distribution-based audit, not a threshold-based one. Distribution-based detection catches systematic drift. Threshold-based detection only catches individual anomalies.
            </div>
            <div className="paper-list-item">
              <span className="paper-list-key">Mechanism 3 — Human Review of Governance Decisions</span>
              A statistically sampled set of orchestrator decisions is periodically surfaced to human reviewers — not agent outputs, not evaluation scores, but governance decisions themselves. This is the only mechanism that breaks the closed loop entirely.
            </div>
            <div className="paper-list-item">
              <span className="paper-list-key">Mechanism 4 — Ground Truth Reconciliation</span>
              At defined intervals, the orchestrator's committed decisions are reconciled against real-world outcomes the orchestrator never touched. Divergence between what the orchestrator governed toward and what reality produced is the signal that calibration has drifted.
            </div>
            <div className="paper-list-item">
              <span className="paper-list-key">Mechanism 5 — Summarization Audit</span>
              Summaries emitted by the orchestrator for agent reflection are evaluated as first-class artifacts before entering the Reflexion loop. A coverage test, a distortion test, and a leakage test must all pass. A summary that fails any test does not enter the loop.
            </div>
          </div>

          <h3 className="paper-subsection-title">3.4 Audit Log Architecture</h3>
          <p>Orchestrator audit logs are stored in an isolated, append-only store with three enforced properties:</p>
          <div className="paper-list">
            <div className="paper-list-item"><span className="paper-list-key">Agent-Inaccessible</span> The audit store sits outside all agent memory partitions and outside the orchestrator's own read scope.</div>
            <div className="paper-list-item"><span className="paper-list-key">Orchestrator-Write-Only</span> The orchestrator emits structured decision records before decisions execute. It cannot modify or delete prior records.</div>
            <div className="paper-list-item"><span className="paper-list-key">Human and Meta-Eval Readable</span> The shadow policy engine and human reviewers have read access through a separate interface that bypasses the orchestrator entirely.</div>
          </div>
          <div className="paper-principle">
            <div className="paper-principle-label">Architectural Invariant</div>
            Governance built on a mutable audit log is governance that can be silently undone.
          </div>
        </div>

        {/* Addendum */}
        <div className="paper-section">
          <div className="paper-section-num">Add</div>
          <h2 className="paper-section-title">Addendum: Architecture Refinements</h2>
          <p>Following the initial document, an external technical audit was conducted. Three recommendations survived second-order architectural review as genuine improvements. Two audit recommendations were corrected before adoption. All citations in the original audit were independently verified and found to be hallucinated — fabricated by the AI system that produced the audit. This addendum incorporates only what passed verification.</p>
          <div className="paper-principle">
            <div className="paper-principle-label">Governance Meta-Principle</div>
            Audits of epistemic capture architectures are themselves subject to auditor-level epistemic capture. Even correction mechanisms must be validated from outside the system producing them.
          </div>

          <h3 className="paper-subsection-title">Correction 1 — Federated Capture</h3>
          <p>Distribution appears to solve centralized capture. It does not. It redistributes it. If each micro-orchestrator instance shares the same model lineage, reward heuristics, or reflection bias, their consensus will converge on the same distorted worldview. This produces <strong>federated capture</strong>: the same epistemic failure distributed across multiple nodes, with the additional problem that it now appears to have been validated by consensus.</p>
          <p>Distributed orchestration is only safe if each controller exhibits genuinely independent epistemic grounding — requiring model heterogeneity, orthogonal error profiles, and diversity-weighted aggregation. Without these three properties enforced, distributing the orchestrator does not reduce capture risk. It hides it behind the appearance of consensus.</p>
          <div className="paper-callout">
            <div className="paper-callout-row"><span className="paper-callout-key">PACS Implementation Note (2026-03-05)</span> The federated capture failure mode governed the decision to specify the PACS Meta-Evaluation Checkpoint as one unified component rather than three separate checkpoint components. Distributing validation across three separate components without demonstrated epistemic diversity would not reduce capture risk — it would hide it behind the appearance of independent validation. One Checkpoint with three internal pathways keeps the epistemic frame unified, the audit regime indivisible, and the governance identity singular.</div>
          </div>

          <h3 className="paper-subsection-title">Correction 2 — Formal Verification Is a Partial Guardrail</h3>
          <p>Constraint solvers can verify structural properties: that no decision bypasses the checkpoint, that thresholds are non-negative, that no unreachable state exists. They cannot verify behavioral alignment. They cannot confirm that an escalation decision reflects actual risk or that a summarization choice preserved semantic fidelity. Intent, context, and meaning are outside the scope of formal verification.</p>
          <p>Integrate formal verification for structural policy constraints only. Behavioral conformance remains the responsibility of the shadow policy comparison and human review mechanisms.</p>

          <h3 className="paper-subsection-title">Enhancement 1 — KL-Divergence Drift Metric</h3>
          <p>KL-divergence continuously measures the divergence between the live orchestrator's decision distribution and the shadow policy engine's decision distribution over a rolling window of executions.</p>
          <div className="paper-formula">
            <div className="paper-formula-label">KL-Divergence Formula</div>
            <div className="paper-formula-eq">KL(P ‖ Q) = Σ P(x) log( P(x) / Q(x) )</div>
            <div className="paper-formula-terms">
              <div><strong>P</strong> — Live orchestrator decision distribution</div>
              <div><strong>Q</strong> — Shadow policy decision distribution</div>
              <div><strong>Window</strong> — Rolling N executions (N calibrated per deployment)</div>
            </div>
          </div>
          <p>This is superior to a fixed threshold trigger because it detects drift direction, not just magnitude, and is resistant to gaming. A rising KL trend below the audit trigger threshold generates a warning. A KL value crossing the calibrated threshold triggers a full shadow policy disagreement audit automatically.</p>

          <h3 className="paper-subsection-title">Enhancement 2 — Tamper-Evident Audit Log</h3>
          <p>A tamper-evident ledger backend applies cryptographic hashing to each audit record at write time. Each record includes the hash of the previous record, forming a hash chain. Deletion, modification, and insertion are all detectable — any alteration invalidates all subsequent hashes.</p>
          <div className="paper-code">
            <div className="paper-code-label">Hash Chain Structure</div>
            <pre>{`Record N:
  content: { decision_id, decision_type,
             timestamp, input_hash, ... }
  record_hash: SHA256(content + previous_record_hash)

Record N+1:
  content: { ... }
  record_hash: SHA256(content + record_N_hash)`}</pre>
          </div>
          <div className="paper-principle">
            <div className="paper-principle-label">Why It Matters</div>
            Cryptographic immutability converts the audit log from a record that should not have been altered to a record that can be proven not to have been altered. That distinction is the difference between policy and evidence.
          </div>

          <h3 className="paper-subsection-title">Enhancement 3 — External World Feedback Loop</h3>
          <p>In a logistics MAS, real-world outcomes are directly measurable and exist independently of the system's internal state. Inventory accuracy, order fulfillment rates, compliance audit results, and delivery performance are ground truth signals the orchestrator cannot manipulate because they originate outside the system.</p>
          <p>The reconciliation process does not route through the orchestrator. It runs as an independent service reading from the audit store and the external outcome data source directly. Over time, systematic divergence between orchestrator governance decisions and real-world outcomes is the most reliable signal that epistemic capture has occurred.</p>
        </div>

        {/* Architecture Summary */}
        <div className="paper-section">
          <div className="paper-section-num">Arch</div>
          <h2 className="paper-section-title">Updated Architectural Summary (v1.2)</h2>
          <div className="paper-formula">
            <div className="paper-formula-label">Full Stack — v1.2</div>
            <div className="paper-formula-eq" style={{fontSize:"0.78rem",lineHeight:"2",textAlign:"left",maxWidth:"560px",margin:"0 auto",letterSpacing:"0.02em"}}>
              External Ground Truth (Real-World Outcomes)<br/>
              ↓<br/>
              Reconciliation Service (Independent, Orchestrator-blind)<br/>
              ↓<br/>
              Human Review ←→ KL-Divergence Monitor<br/>
              ↓<br/>
              Meta-Evaluation Checkpoint<br/>
              + Formal Structural Validator<br/>
              + Shadow Policy Engine (Epistemically Diverse)<br/>
              ↓<br/>
              Orchestrator (Control Plane)<br/>
              ↓<br/>
              5-Agent MAS (Data Plane)<br/>
              + 3-Layer Eval Mesh<br/>
              + Reflexion RL Loop<br/>
              + Episodic Memory (Gated)<br/>
              ↓<br/>
              Tamper-Evident Audit Log<br/>
              (Append-only · Cryptographically immutable<br/>
              Agent-inaccessible · Orchestrator-write-only)
            </div>
          </div>
          <div className="paper-closing">
            <p>Every layer has a governance mechanism above it. No component is self-referentially evaluating its own correctness.</p>
            <p>The agents cannot govern themselves. The orchestrator cannot govern itself. Governance is infrastructure, not behavior. And infrastructure must be audited from outside the system it governs.</p>
          </div>
        </div>

        {/* References */}
        <div className="paper-section paper-references">
          <div className="paper-section-num">Ref</div>
          <h2 className="paper-section-title">References</h2>
          <div className="paper-ref-list">
            <div className="paper-ref">Shinn, N., Cassano, F., Berman, E., Gopinath, A., Narasimhan, K., & Yao, S. (2023). Reflexion: Language agents with verbal reinforcement learning. <em>NeurIPS 2023</em>. arXiv:2303.11366. [VERIFIED]</div>
            <div className="paper-ref">KL-divergence as drift detection metric. [RESEARCH LEAD] Applied in ML monitoring literature broadly; specific MAS governance application is original to this architecture.</div>
            <div className="paper-ref">Tamper-evident ledger backends (AWS QLDB, Merkle chain structures). [VERIFIED] Production infrastructure, independently confirmable.</div>
            <div className="paper-ref" style={{color:"var(--text-muted)",fontStyle:"italic"}}>Note: "Reflexion++ ICLR 2024," "Yin et al. AAAI 2025," and "ArXiv:2501.1179" were confirmed hallucinated via independent search. [UNVERIFIED — DO NOT CITE]</div>
          </div>
        </div>

        <div className="paper-footer-note">
          Professor Bone Lab · Version 1.2 · Revised February 2026 · Architect-grade reference · All citations verified independently before inclusion.
        </div>

      </div>
    </div>
  );
}
