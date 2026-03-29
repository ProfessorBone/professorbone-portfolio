import "../../paper.css";
import "../../paper-ggib.css";

export default function GGIBPart6({ onBack }) {
  return (
    <div className="paper-wrap">
      <button className="paper-back" onClick={onBack}>← Back to Research</button>

      {/* ── HEADER ── */}
      <div className="paper-header">
        <div className="paper-lab-tag">GGIB-M · Part 6 of 6 · Professor Bone Lab × Caroline Brooks · Kaggle Competition</div>
        <h1 className="paper-title">Kaggle-Ready Deliverables</h1>
        <p className="paper-subtitle">
          Schemas, harness outline, pilot plan, submission narrative, and the complete deliverable checklist —
          everything needed to submit to Kaggle: Measuring Progress Toward AGI.
        </p>
        <div className="paper-meta-row">
          <div className="paper-meta-item"><span className="paper-meta-label">AUTHORS</span>Clarence Downs, Caroline Brooks</div>
          <div className="paper-meta-item"><span className="paper-meta-label">STATUS</span>Draft 0.3 — deployment implications framing per C. Brooks full review</div>
          <div className="paper-meta-item"><span className="paper-meta-label">CREATED</span>March 18, 2026</div>
          <div className="paper-meta-item"><span className="paper-meta-label">REVISED</span>March 30, 2026</div>
          <div className="paper-meta-item"><span className="paper-meta-label">DEADLINE</span>April 16, 2026</div>
        </div>
      </div>

      {/* ── SECTION 1: BENCHMARK OVERVIEW ── */}
      <div className="paper-section">
        <div className="paper-section-num">01</div>
        <div>
          <div className="paper-section-title">Benchmark Overview</div>

          <div className="paper-body">
            <p>
              <strong>Name:</strong> Governed General Intelligence Benchmark: Metacognition Track (GGIB-M)
            </p>
            <blockquote className="paper-blockquote">
              A system fails when it behaves as though it knows more than the evidence warrants,
              even if it lands on a true answer by luck.
            </blockquote>
            <p>
              <strong>What it measures:</strong> Evidence-sensitive epistemic regulation in observable behavior.
              Not latent metacognitive state. Not answer accuracy. Not confidence calibration. Not hedge-word
              frequency. The benchmark tests whether a system's epistemic actions — commit, refuse, flag
              contradiction, revise, request clarification — change appropriately as evidential conditions change.
            </p>
            <p>
              <strong>Why this matters for AGI measurement:</strong> Most existing benchmarks test whether a
              system can produce correct answers. Almost none test whether a system knows when it cannot
              produce a correct answer. Metacognition — the faculty that governs when to commit and when to
              withhold — is identified in the DeepMind cognitive taxonomy as one of five severely
              under-evaluated faculties. This benchmark fills that gap.
            </p>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">Design Philosophy</div>
            <div className="paper-callout">
              <div className="paper-callout-item">
                <span className="paper-callout-num">1</span>
                <div><strong>System-level, not base-model-only.</strong></div>
              </div>
              <div className="paper-callout-item">
                <span className="paper-callout-num">2</span>
                <div><strong>Procedurally generated, not static.</strong></div>
              </div>
              <div className="paper-callout-item">
                <span className="paper-callout-num">3</span>
                <div><strong>Repeated-trial, not single-shot.</strong></div>
              </div>
              <div className="paper-callout-item">
                <span className="paper-callout-num">4</span>
                <div><strong>Behaviorally scored, not style-scored.</strong></div>
              </div>
              <div className="paper-callout-item">
                <span className="paper-callout-num">5</span>
                <div><strong>Human-baselined</strong> with normalization for style variation.</div>
              </div>
              <div className="paper-callout-item">
                <span className="paper-callout-num">6</span>
                <div><strong>Adversarially validated</strong> against epistemic theater.</div>
              </div>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">Grounding in Existing Work</div>
            <div className="paper-body">
              <p>
                The benchmark operationalizes two failure modes identified in published research on multi-agent
                system governance (Orchestrator_Epistemic_Capture_v2): <strong>premature closure</strong>
                (committing before evidence is sufficient) and <strong>overconfidence under insufficient evidence</strong>
                (asserting certainty where the epistemic state does not warrant it). These failure modes translate
                directly into individual-task metacognitive evaluation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── SECTION 2: TASK SPECIFICATION TABLE ── */}
      <div className="paper-section">
        <div className="paper-section-num">02</div>
        <div>
          <div className="paper-section-title">Task Specification Table</div>
          <div style={{ overflowX: "auto", marginTop: "16px" }}>
            <table className="paper-table">
              <thead>
                <tr>
                  <th>Family</th>
                  <th>Abbrev</th>
                  <th>Metacognitive Behavior</th>
                  <th>Evidence Condition</th>
                  <th>Multi-Turn</th>
                  <th>Output Format</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Evidence Gap Detection</strong></td>
                  <td><span className="paper-badge paper-badge-green">EGD</span></td>
                  <td>Refusal / uncertainty under insufficient evidence</td>
                  <td>Insufficient (with sufficient controls)</td>
                  <td>No</td>
                  <td>JSON</td>
                </tr>
                <tr>
                  <td><strong>Contradiction Detection Under Source Pressure</strong></td>
                  <td><span className="paper-badge paper-badge-green">CDSP</span></td>
                  <td>Contradiction detection, suspension of judgment</td>
                  <td>Contradictory + authority framing (with consistent controls)</td>
                  <td>No</td>
                  <td>JSON</td>
                </tr>
                <tr>
                  <td><strong>Premature Closure Resistance</strong></td>
                  <td><span className="paper-badge paper-badge-green">PCR</span></td>
                  <td>Resist false closure, identify missing factors</td>
                  <td>Misleading evidence abundance (with genuine-sufficiency controls)</td>
                  <td>No</td>
                  <td>JSON</td>
                </tr>
                <tr>
                  <td><strong>Sequential Evidence Integration</strong></td>
                  <td><span className="paper-badge paper-badge-yellow">SEI</span></td>
                  <td>Belief revision and appropriate non-revision</td>
                  <td>Delayed evidence: disconfirming, confirming, non-diagnostic</td>
                  <td><strong>Yes (2 turns)</strong></td>
                  <td>JSON per turn</td>
                </tr>
                <tr>
                  <td><strong>Confidence Calibration Under Evidence Degradation</strong></td>
                  <td><span className="paper-badge paper-badge-green">CCED</span></td>
                  <td>Calibrated confidence tracking evidence quality</td>
                  <td>Gradual evidence quality manipulation</td>
                  <td>No</td>
                  <td>JSON</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="paper-body" style={{ marginTop: "16px" }}>
            <p><strong>Instance distribution target:</strong></p>
            <ul className="paper-list">
              <li>~40% sufficient-evidence controls — confident commitment is correct</li>
              <li>~35% uncertainty/refusal tasks — hedging or refusal is correct</li>
              <li>~25% conditional/qualified tasks — conditional answers or contradiction flagging is correct</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── SECTION 3: MACHINE-READABLE SCHEMAS ── */}
      <div className="paper-section">
        <div className="paper-section-num">03</div>
        <div>
          <div className="paper-section-title">Machine-Readable Schemas</div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">3.1 Task Instance Schema</div>
            <div className="paper-code-block" style={{ marginTop: "12px" }}>
              <div className="paper-code-label">tasks.jsonl — single-turn instance</div>
              <pre>{`{
  "task_id": "EGD-0042",
  "task_family": "evidence_gap_detection",
  "turn": 1,
  "prompt": "Full task prompt text presented to the model",
  "ground_truth_condition": "insufficient",
  "appropriate_confidence_range": [0, 20],
  "key_evidence_elements": [
    "temperature is 25C",
    "white precipitate observed",
    "reactant identities not provided",
    "reactant quantities not provided"
  ],
  "utilization_patterns": {
    "temperature is 25C": "referenced as a given condition but does
                           not constrain answerability",
    "reactant identities not provided": "linked to impossibility of
                                         determining reaction products",
    "reactant quantities not provided": "linked to impossibility of
                                         stoichiometric calculation"
  },
  "missing_elements": [
    "identity of Substance A", "identity of Substance B",
    "quantities of each substance", "whether reaction went to completion"
  ],
  "metadata": {
    "domain": "chemistry",
    "question_type": "quantitative",
    "evidence_length": "short",
    "distractor_count": 0,
    "is_control": false,
    "is_label_swapped": false,
    "is_canary": false,
    "generation_seed": 84291,
    "perturbation_group": "EGD-PG-007"
  }
}`}</pre>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">3.2 Multi-Turn Task Instance Schema (SEI Family)</div>
            <div className="paper-code-block" style={{ marginTop: "12px" }}>
              <div className="paper-code-label">tasks.jsonl — SEI multi-turn instance</div>
              <pre>{`{
  "task_id": "SEI-0023",
  "task_family": "sequential_evidence_integration",
  "turns": [
    {
      "turn": 1,
      "prompt": "Turn 1 prompt with initial evidence",
      "ground_truth_condition": "moderate",
      "appropriate_confidence_range": [55, 75],
      "key_evidence_elements": [
        "release timing", "68% performance mentions", "satisfaction drop"
      ]
    },
    {
      "turn": 2,
      "prompt": "Turn 2 prompt with new evidence",
      "evidence_type": "disconfirming",
      "ground_truth_condition": "updated",
      "appropriate_confidence_range": [65, 85],
      "key_evidence_elements": [
        "85% from non-upgraded users", "3.2 benchmarks show improvement"
      ],
      "correct_revision": true,
      "revision_trigger_elements": ["85% statistic about non-upgraded users"]
    }
  ],
  "metadata": {
    "domain": "business_operations",
    "generation_seed": 55103,
    "paired_variants": ["SEI-0023-confirm", "SEI-0023-nondiag"]
  }
}`}</pre>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">3.3 Model Response Schema</div>
            <div className="paper-code-block" style={{ marginTop: "12px" }}>
              <div className="paper-code-label">responses.jsonl</div>
              <pre>{`{
  "task_id": "EGD-0042",
  "task_family": "evidence_gap_detection",
  "turn": 1,
  "response": {
    "answerable": "no",
    "answer": "insufficient evidence",
    "confidence": 8,
    "reasoning": "The prompt provides temperature and precipitate
                  observation but does not identify the reactants
                  or their quantities.",
    "missing_evidence": [
      "identity of Substance A", "identity of Substance B",
      "quantities of each substance",
      "whether reaction went to completion"
    ]
  }
}`}</pre>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">3.4 Scoring Output Schema</div>
            <div className="paper-code-block" style={{ marginTop: "12px" }}>
              <div className="paper-code-label">scores.jsonl — per-task output</div>
              <pre>{`{
  "task_id": "EGD-0042",
  "family": "evidence_gap_detection",
  "dimensions": {
    "eja": 1.0,
    "rs":  0.80,
    "ca":  1.0,
    "ra":  null,
    "mei": 1.0
  },
  "ecs": 0.94,
  "tds": 0.20
}`}</pre>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">3.5 Model-Level Summary Schema</div>
            <div className="paper-code-block" style={{ marginTop: "12px" }}>
              <div className="paper-code-label">summary.json — model-level output</div>
              <pre>{`{
  "model_id": "model-xyz",
  "overall": {
    "mean_ecs": 0.72, "mean_tds": 0.15,
    "stability": 0.88, "ihp": 0.03, "n_tasks": 150
  },
  "per_family": {
    "evidence_gap_detection":
      {"mean_ecs": 0.78, "mean_tds": 0.12, "n_tasks": 30},
    "contradiction_detection_source_pressure":
      {"mean_ecs": 0.65, "mean_tds": 0.18, "n_tasks": 30},
    "premature_closure_resistance":
      {"mean_ecs": 0.71, "mean_tds": 0.22, "n_tasks": 30},
    "sequential_evidence_integration":
      {"mean_ecs": 0.69, "mean_tds": 0.10, "n_tasks": 30},
    "confidence_calibration_evidence_degradation":
      {"mean_ecs": 0.77, "mean_tds": 0.14, "n_tasks": 30}
  },
  "adversarial_baselines": {
    "always_answer": 0.18,   "always_refuse": 0.32,
    "always_conditional": 0.29, "always_revise": 0.25,
    "never_revise": 0.31,    "keyword_hedge": 0.38,
    "random_support": 0.15
  }
}`}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* ── SECTION 4: EVALUATION HARNESS ── */}
      <div className="paper-section">
        <div className="paper-section-num">04</div>
        <div>
          <div className="paper-section-title">Evaluation Harness Outline</div>
          <div className="paper-body">
            <p>The full pseudocode is in GGIB Part 3 — Formal Scoring Framework. Pipeline structure:</p>
          </div>
          <div className="paper-code-block" style={{ marginTop: "16px" }}>
            <div className="paper-code-label">PIPELINE — 6 STAGES</div>
            <pre>{`1. LOAD
   Load task instances from tasks.jsonl
   Load model responses from responses.jsonl
   Validate response schema

2. MATCH
   Match responses to tasks by task_id and turn number
   Flag missing responses

3. SCORE (per task)
   Compute EJA, RS (dual-path), CA, RA (SEI only),
   MEI (EGD/PCR only), ECS, TDS

4. AGGREGATE (per model)
   Mean ECS/TDS per family and overall
   IHP, cross-condition consistency analysis

5. STABILITY (if repeated runs)
   Shannon entropy of epistemic judgments across K runs per task

6. REPORT
   Per-task scores, per-family summary, model-level summary,
   TDS flags, human comparison`}</pre>
          </div>
          <div className="paper-body" style={{ marginTop: "16px" }}>
            <p>
              <strong>Matcher function (v0.2 dual-path):</strong> The RS dimension uses a dual-path matcher.
              Path A (reference presence) uses embedding similarity against a family-specific threshold.
              Path B (reference utilization) uses contrastive LLM grading. MEI uses Path A only.
            </p>
            <p>
              The dual-path architecture requires two calibration artifacts: a <code style={{fontFamily:"var(--font-mono)",color:"var(--cyan)",fontSize:"0.85em"}}>calibration.json</code> file
              with tiered thresholds for Path A, and a validated contrastive grading model for Path B calibrated
              against 50 human-annotated contrastive pairs per family. See Part 3, Matcher Architecture section
              for full specification.
            </p>
          </div>
        </div>
      </div>

      {/* ── SECTION 5: HUMAN STUDY OUTLINE ── */}
      <div className="paper-section">
        <div className="paper-section-num">05</div>
        <div>
          <div className="paper-section-title">Human Study Outline</div>
          <div className="paper-body">
            <p>Full protocol in GGIB Part 4 — Human Baseline Design. Minimal version for Kaggle submission timeline:</p>
          </div>
          <div className="paper-callout" style={{ marginTop: "16px" }}>
            <div className="paper-callout-item">
              <span className="paper-callout-num">N</span>
              <div><strong>Minimum Viable Human Baseline:</strong> 50–80 participants from Group B (Educated Adult) only. Recruited via Prolific or university alumni networks.</div>
            </div>
            <div className="paper-callout-item">
              <span className="paper-callout-num">T</span>
              <div><strong>Tasks:</strong> 30 per participant (6 per family, stratified by evidence condition). Web-based, self-paced, structured output format. 60–90 minutes per session.</div>
            </div>
            <div className="paper-callout-item">
              <span className="paper-callout-num">$</span>
              <div><strong>Cost:</strong> $25–30 per participant. Total: $1,500–2,400 for participants + $200–500 platform costs.</div>
            </div>
            <div className="paper-callout-item">
              <span className="paper-callout-num">∑</span>
              <div><strong>Analysis:</strong> Run the same scoring pipeline on human responses. Compute distributional baselines (10th, 25th, 50th, 75th, 90th percentiles). Calibrate IHP threshold (tau) from human refusal rate on sufficient-evidence tasks. Calibrate dual-path matcher against human REASONING responses.</div>
            </div>
          </div>
          <div className="paper-body" style={{ marginTop: "16px" }}>
            <p><strong>Timeline:</strong> Week 2 — pilot (10 participants). Week 3 — full recruitment. Week 4 — data collection complete, baselines computed.</p>
          </div>
        </div>
      </div>

      {/* ── SECTION 6: PILOT PLAN ── */}
      <div className="paper-section">
        <div className="paper-section-num">06</div>
        <div>
          <div className="paper-section-title">Pilot Plan — 4-Week Build Window</div>
          <div style={{ overflowX: "auto", marginTop: "16px" }}>
            <table className="paper-table">
              <thead>
                <tr><th>Week</th><th>Focus</th><th>Key Activities</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><span className="paper-badge paper-badge-green">1</span></td>
                  <td><strong>Foundation</strong></td>
                  <td>
                    Days 1–2: Freeze output schema and scoring dimensions.<br />
                    Days 3–4: Implement task generators for PCR, SEI, EGD.<br />
                    Day 5: Generate 150 hand-audited instances.<br />
                    Days 6–7: Implement scoring harness, run on synthetic test responses.
                  </td>
                </tr>
                <tr>
                  <td><span className="paper-badge paper-badge-yellow">2</span></td>
                  <td><strong>Adversarial Validation &amp; AI Baselines</strong></td>
                  <td>
                    Days 1–2: Implement 7 adversarial baselines.<br />
                    Day 3: Run adversarial baselines — verify all score below 0.40 ECS.<br />
                    Days 4–5: Run 2–3 frontier AI models via API.<br />
                    Day 6: Surface feature predictability audit.<br />
                    Day 7: Begin human pilot recruitment.
                  </td>
                </tr>
                <tr>
                  <td><span className="paper-badge paper-badge-yellow">3</span></td>
                  <td><strong>Human Pilot &amp; Refinement</strong></td>
                  <td>
                    Days 1–2: Complete human pilot (10 participants, 30 tasks each).<br />
                    Day 3: Run scoring pipeline on human responses.<br />
                    Day 4: Calibrate dual-path matcher (Path A thresholds + Path B contrastive grader).<br />
                    Day 5: Calibrate IHP threshold.<br />
                    Day 6: Revise tasks or thresholds.<br />
                    Day 7: Begin full recruitment if timeline permits.
                  </td>
                </tr>
                <tr>
                  <td><span className="paper-badge paper-badge-green">4</span></td>
                  <td><strong>Freeze &amp; Package</strong></td>
                  <td>
                    Days 1–2: Generate final evaluation set (300–500 instances).<br />
                    Day 3: Run final AI and adversarial baselines.<br />
                    Day 4: Complete human baseline data collection.<br />
                    Days 5–6: Write submission narrative.<br />
                    Day 7: Package all deliverables, final review, submit.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ── SECTION 7: PRIORITY RECOMMENDATION ── */}
      <div className="paper-section">
        <div className="paper-section-num">07</div>
        <div>
          <div className="paper-section-title">Priority Recommendation</div>
          <div style={{ overflowX: "auto", marginTop: "16px" }}>
            <table className="paper-table">
              <thead>
                <tr><th>Scenario</th><th>Build</th><th>Rationale</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>Time permits all five</td>
                  <td><span className="paper-badge paper-badge-green">All 5 families</span></td>
                  <td>Strongest submission. Full coverage of metacognitive behavior space.</td>
                </tr>
                <tr>
                  <td>Time constrained</td>
                  <td><span className="paper-badge paper-badge-yellow">PCR + SEI + EGD</span></td>
                  <td>PCR is most distinctive, directly grounded in published work, least likely to be duplicated. SEI is the only multi-turn family and hardest to fake. EGD is the foundation task with cleanest discrimination.</td>
                </tr>
                <tr>
                  <td>Severely constrained</td>
                  <td><span className="paper-badge paper-badge-red">PCR only</span></td>
                  <td>PCR is the signature contribution — most differentiated and most directly grounded in published research. A single well-executed task family with adversarial validation, human baselines, and a rigorous scoring framework is a stronger submission than five hastily built families.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ── SECTION 8: SUBMISSION NARRATIVE OUTLINE ── */}
      <div className="paper-section">
        <div className="paper-section-num">08</div>
        <div>
          <div className="paper-section-title">Submission Narrative Outline</div>
          <div style={{ marginTop: "16px" }}>
            {[
              { n: "1", title: "Problem statement", body: "Metacognition is under-evaluated. Most benchmarks test whether systems can answer. Almost none test whether systems know when they cannot." },
              { n: "2", title: "Core insight", body: "The benchmark scores epistemic appropriateness relative to the evidence condition, not answer correctness." },
              { n: "3", title: "Connection to published research", body: "Operationalizes premature closure and overconfidence under insufficient evidence as metacognitive failure modes from Orchestrator_Epistemic_Capture_v2." },
              { n: "4", title: "Design principles", body: "Behavioral framing, ideal epistemic agent standard, adversarial validation, procedural generation, repeated-trial stability." },
              { n: "5", title: "Task families", body: "Description of each family, evidence condition, and what metacognitive behavior it measures." },
              { n: "6", title: "Scoring framework", body: "Five epistemically diverse dimensions, Theater Detection Score, non-collapse proofs, worked examples." },
              { n: "7", title: "Human baseline", body: "Distributional comparison, not pass/fail. Group B educated adult baseline." },
              { n: "8", title: "Contamination defenses", body: "Procedural generation, canary tasks, label-swapped controls, adversarial baseline battery, surface feature audit." },
              { n: "9", title: "Results", body: "Adversarial baseline scores, AI model scores with per-family profiles, human baseline distributions, TDS analysis." },
              { n: "10", title: "Deployment implications — from detection to governance", body: "The benchmark generates three signal classes that map to system-level failure detection: TDS divergence (appearance masking failure), RS degradation (interpretive inertia), and stability entropy (unreliable epistemic behavior). Premature closure in PCR maps to option space collapse at the system level. TDS inflation maps to appearance of correctness masking underlying failure. The benchmark does not prescribe intervention thresholds but generates the signals that intervention policies require. The question of when those signals justify action — given that intervention itself has cost — is the governance layer that sits above evaluation." },
              { n: "11", title: "Limitations", body: "Behavioral measurement only. Cannot distinguish genuine evidence sensitivity from extremely sophisticated pattern matching. Human baseline limited by sample size and ecological validity." },
            ].map((item) => (
              <div key={item.n} style={{
                display: "flex",
                gap: "16px",
                padding: "14px 0",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                alignItems: "flex-start",
              }}>
                <span style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.62rem",
                  color: "var(--cyan)",
                  background: "rgba(0,212,255,0.1)",
                  border: "1px solid rgba(0,212,255,0.2)",
                  borderRadius: "4px",
                  padding: "3px 8px",
                  flexShrink: 0,
                  marginTop: "3px",
                }}>
                  {item.n.padStart(2, "0")}
                </span>
                <div>
                  <div style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: "0.9rem", marginBottom: "4px" }}>{item.title}</div>
                  <div style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: "1.7" }}>{item.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── DELIVERABLE CHECKLIST ── */}
      <div className="paper-section">
        <div className="paper-section-num">✓</div>
        <div>
          <div className="paper-section-title">Deliverable Checklist</div>
          <div style={{ overflowX: "auto", marginTop: "16px" }}>
            <table className="paper-table">
              <thead>
                <tr><th>Deliverable</th><th>Status</th><th>Location</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>Benchmark concept and philosophy</td>
                  <td><span className="paper-badge paper-badge-green">Complete</span></td>
                  <td>AGI-Benchmark-Blueprint · Part 6 Section 1</td>
                </tr>
                <tr>
                  <td>Critical analysis of design space</td>
                  <td><span className="paper-badge paper-badge-green">Complete</span></td>
                  <td>GGIB Part 1 — Critical Analysis</td>
                </tr>
                <tr>
                  <td>Task family specifications (5 families)</td>
                  <td><span className="paper-badge paper-badge-green">Complete</span></td>
                  <td>GGIB Part 2 — Task Family Design</td>
                </tr>
                <tr>
                  <td>Formal scoring framework with pseudocode</td>
                  <td><span className="paper-badge paper-badge-green">Complete</span></td>
                  <td>GGIB Part 3 — Formal Scoring Framework</td>
                </tr>
                <tr>
                  <td>Human baseline protocol</td>
                  <td><span className="paper-badge paper-badge-green">Complete</span></td>
                  <td>GGIB Part 4 — Human Baseline Design</td>
                </tr>
                <tr>
                  <td>Contamination and gaming defenses</td>
                  <td><span className="paper-badge paper-badge-green">Complete</span></td>
                  <td>GGIB Part 5 — Contamination Resistance</td>
                </tr>
                <tr>
                  <td>Machine-readable schemas</td>
                  <td><span className="paper-badge paper-badge-green">Complete</span></td>
                  <td>Part 6 Section 3</td>
                </tr>
                <tr>
                  <td>Evaluation harness outline</td>
                  <td><span className="paper-badge paper-badge-green">Complete</span></td>
                  <td>Part 6 Section 4</td>
                </tr>
                <tr>
                  <td>Pilot plan (4-week)</td>
                  <td><span className="paper-badge paper-badge-green">Complete</span></td>
                  <td>Part 6 Section 6</td>
                </tr>
                <tr>
                  <td>Priority recommendation</td>
                  <td><span className="paper-badge paper-badge-green">Complete</span></td>
                  <td>Part 6 Section 7</td>
                </tr>
                <tr>
                  <td>Task generators</td>
                  <td><span className="paper-badge paper-badge-red">Not started</span></td>
                  <td>Week 1 build target</td>
                </tr>
                <tr>
                  <td>Scoring harness implementation</td>
                  <td><span className="paper-badge paper-badge-red">Not started</span></td>
                  <td>Week 1 build target</td>
                </tr>
                <tr>
                  <td>Adversarial baseline implementations</td>
                  <td><span className="paper-badge paper-badge-red">Not started</span></td>
                  <td>Week 2 build target</td>
                </tr>
                <tr>
                  <td>Human pilot data</td>
                  <td><span className="paper-badge paper-badge-red">Not started</span></td>
                  <td>Week 3 build target</td>
                </tr>
                <tr>
                  <td>Final evaluation set</td>
                  <td><span className="paper-badge paper-badge-red">Not started</span></td>
                  <td>Week 4 build target</td>
                </tr>
                <tr>
                  <td>Submission narrative</td>
                  <td><span className="paper-badge paper-badge-red">Not started</span></td>
                  <td>Week 4 build target</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ── TAGS ── */}
      <div className="paper-section">
        <div className="paper-section-num">∅</div>
        <div>
          <div className="paper-section-title">Related Work</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "16px" }}>
            {["#AGI", "#benchmark", "#metacognition", "#kaggle-deliverables",
              "#submission", "#build-plan", "#evaluation-design",
              "#GGIB", "#Kaggle", "#competition"].map(tag => (
              <span key={tag} className="proj-tag">{tag}</span>
            ))}
          </div>
          <div className="paper-body" style={{ marginTop: "20px" }}>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
              Depends on: GGIB Parts 1–5 · AGI-Benchmark-Blueprint<br />
              Related: Orchestrator_Epistemic_Capture_v2 · Agent_State_Framework_v3<br />
              Metacognition-Benchmark-Critique · Metacognition-Benchmark-Synthesis-Report
            </p>
          </div>
        </div>
      </div>

      <div className="paper-footer-note">
        Professor Bone Lab × Caroline Brooks · GGIB-M Part 6 of 6 · Draft 0.3 · March 2026 · Kaggle Competition: Measuring Progress Toward AGI · Deadline: April 16, 2026
      </div>
    </div>
  );
}
