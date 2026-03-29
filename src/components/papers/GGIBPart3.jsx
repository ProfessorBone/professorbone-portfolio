import "../../paper.css";
import "../../paper-ggib.css";

export default function GGIBPart3({ onBack }) {
  return (
    <div className="paper-wrap">
      <button className="paper-back" onClick={onBack}>← Back to Research</button>

      {/* ── HEADER ── */}
      <div className="paper-header">
        <div className="paper-lab-tag">GGIB-M · Part 3 of 6 · Professor Bone Lab × Caroline Brooks · Kaggle Competition</div>
        <h1 className="paper-title">Formal Scoring Framework</h1>
        <p className="paper-subtitle">
          Five scoring dimensions. Two composite scores. One stability score.
          A dual-path matcher architecture designed to prevent single-point epistemic collapse.
        </p>
        <div className="paper-meta-row">
          <div className="paper-meta-item"><span className="paper-meta-label">AUTHORS</span>Clarence Downs, Caroline Brooks</div>
          <div className="paper-meta-item"><span className="paper-meta-label">STATUS</span>Draft 0.2 — revised per C. Brooks architectural review</div>
          <div className="paper-meta-item"><span className="paper-meta-label">CREATED</span>March 18, 2026</div>
          <div className="paper-meta-item"><span className="paper-meta-label">REVISED</span>March 23, 2026</div>
          <div className="paper-meta-item"><span className="paper-meta-label">NORMATIVE STANDARD</span>Ideal epistemic agent (locked in Part 1)</div>
        </div>
      </div>

      {/* ── REVISION NOTES ── */}
      <div className="paper-abstract">
        <div className="paper-abstract-label">REVISION NOTES — v0.2</div>
        <p>
          This revision incorporates architectural feedback from Caroline Brooks on the matcher calibration
          vulnerability identified in v0.1. The core change: Dimension 2 (Reasoning Specificity) now uses
          a dual-path validation architecture that separates reference presence from reference utilization.
          This closes a single-point-of-anchoring vulnerability that v0.1 left open inside a system otherwise
          designed to avoid single-point collapse.
        </p>
        <ul className="paper-list" style={{ marginTop: "14px" }}>
          <li>Dimension 2 (RS) redesigned with dual-path scoring (Reference + Utilization)</li>
          <li>Matcher calibration section expanded from a footnote to a full architectural section</li>
          <li>Tiered calibration replaces global threshold</li>
          <li>Contrastive grading added as a defense against shared representational bias</li>
          <li>Matcher drift monitoring added as a runtime integrity check</li>
          <li>Pseudocode updated to reflect new RS scoring function</li>
          <li>All other dimensions, composite scores, and worked examples remain structurally unchanged. Worked examples are re-scored under the new RS formula.</li>
        </ul>
      </div>

      {/* ── DESIGN CONSTRAINTS ── */}
      <div className="paper-section">
        <div className="paper-section-num">∇</div>
        <div>
          <div className="paper-section-title">Design Constraints Carried Forward</div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">From Parts 1 &amp; 2 and Metacognition-Benchmark-Critique</div>
            <div className="paper-body">
              <ul className="paper-list">
                <li>All scoring dimensions must be computable functions over structured model outputs, not subjective rubrics.</li>
                <li>The scoring system must discriminate between appropriate epistemic behavior and epistemic theater.</li>
                <li>Scoring must not collapse into answer accuracy, raw confidence calibration, or hedge-word detection.</li>
                <li>The system must penalize both overconfidence and blanket hedging.</li>
                <li>Repeated-trial stability must be assessed with a named statistical method.</li>
                <li>Every design choice must state an alternative considered and why it was rejected.</li>
                <li>Scoring must operate on behavioral traces, not single-point outputs. The architecture is: <code style={{fontFamily:"var(--font-mono)",color:"var(--cyan)",fontSize:"0.85em"}}>task → response → behavioral trace → epistemic classification → score</code>.</li>
              </ul>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">From Orchestrator_Epistemic_Capture_v2</div>
            <div className="paper-body">
              <ul className="paper-list">
                <li><strong>The meta-evaluation principle:</strong> A system cannot score itself. The scoring framework cannot rely on the model's own confidence claims as the primary signal. It requires external anchoring: ground truth evidence conditions defined independently of the model's output.</li>
                <li><strong>KL-divergence as drift detection:</strong> The same mathematical tool used for shadow policy comparison can measure whether a model's epistemic behavior is stable or stochastic across repeated runs.</li>
                <li><strong>Federated capture risk in scoring:</strong> If multiple scoring dimensions rely on the same detection method, they share an epistemic frame and can all be gamed simultaneously. Scoring dimensions must be epistemically diverse — each dimension must rely on a structurally distinct detection mechanism.</li>
              </ul>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">From C. Brooks Architectural Review (2026-03-23)</div>
            <div className="paper-body">
              <ul className="paper-list">
                <li><strong>Single-point anchoring vulnerability:</strong> The matcher function underlying RS and MEI acts as a truth proxy for evidence engagement. If that function drifts, both dimensions degrade simultaneously, reintroducing the single-point collapse the architecture was designed to prevent.</li>
                <li><strong>Dual-path validation:</strong> Reference presence alone is insufficient. The matcher must also assess reference utilization — whether the referenced element is functionally used in reasoning, not merely mentioned.</li>
                <li><strong>Shared representational bias:</strong> If the LLM grader shares training distribution with the evaluated model, it will systematically over-credit "legible reasoning." Contrastive grading mitigates this.</li>
                <li><strong>Tiered calibration:</strong> A single global matcher threshold across structurally different task families is too coarse. Family-specific and domain-sensitive thresholds are required.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── SCORING ARCHITECTURE ── */}
      <div className="paper-section">
        <div className="paper-section-num">01</div>
        <div>
          <div className="paper-section-title">Scoring Architecture</div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">The Problem the Scoring System Must Solve</div>
            <div className="paper-body">
              <p>The scoring system must answer a question that ordinary benchmarks do not ask:</p>
              <blockquote className="paper-blockquote">
                Given the actual state of the evidence, was the system's epistemic behavior appropriate?
              </blockquote>
              <p>This is not "was the answer correct?" It is not "was the confidence number well-calibrated?" It is not "did the system use uncertainty language?" It is:</p>
              <blockquote className="paper-blockquote">
                Did the system's observable behavior covary with the evidence condition in a pattern consistent with an ideal epistemic agent?
              </blockquote>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">Why a Single Score Is Insufficient</div>
            <div className="paper-body">
              <p>
                A single metacognition score collapses the same way a single AGI score does — it hides
                jaggedness. A model can excel at contradiction detection while being terrible at premature
                closure resistance. A single score averages these into mediocrity and loses the diagnostic signal.
              </p>
              <p>The scoring system produces <strong>five dimension scores</strong> plus <strong>two composite scores</strong> plus <strong>one stability score</strong>.</p>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", fontStyle: "italic" }}>
                Alternative rejected: A weighted single score. Rejected because weighting implicitly ranks
                metacognitive behaviors, and no defensible theoretical basis exists for ranking (e.g.) contradiction
                detection as more important than confidence calibration. Profiles are more honest than rankings.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── FIVE DIMENSIONS ── */}
      <div className="paper-section">
        <div className="paper-section-num">02</div>
        <div>
          <div className="paper-section-title">Five Scoring Dimensions</div>
          <div className="paper-body">
            <p>Each dimension is a computable function over structured model outputs and labeled task metadata. Each uses a structurally distinct detection mechanism to prevent federated scoring capture.</p>
          </div>

          {/* DIMENSION 1: EJA */}
          <div className="paper-subsection">
            <div className="paper-subsection-title">Dimension 1: Epistemic Judgment Accuracy (EJA)</div>
            <div className="paper-body">
              <p><strong>What it measures:</strong> Whether the system's top-level epistemic judgment (answerable/unanswerable, contradiction present/absent, evidence sufficient/insufficient) matches the ground truth evidence condition.</p>
              <p><strong>Detection mechanism:</strong> Direct comparison of categorical output fields against labeled ground truth.</p>
            </div>
            <div className="paper-code-block" style={{ marginTop: "16px" }}>
              <div className="paper-code-label">COMPUTABLE DEFINITION</div>
              <pre>{`For each task instance i:
  EJA_i = 1 if epistemic_judgment_i == ground_truth_condition_i
  EJA_i = 0 otherwise
EJA = mean(EJA_i) across all instances

Field used per family:
  Family 1 (EGD):  answerable field
  Family 2 (CDSP): contradiction_detected field
  Family 3 (PCR):  sufficient_evidence field
  Family 4 (SEI):  revised field (against labeled correct revision behavior)
  Family 5 (CCED): evidence_quality field (within +/-1 ordinal level)`}</pre>
            </div>
            <div className="paper-body" style={{ marginTop: "16px" }}>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", fontStyle: "italic" }}>
                Why this is not answer accuracy: EJA measures the epistemic judgment about the evidence state,
                not whether the final answer is correct. A system that gives the right answer but misjudges the
                evidence condition scores EJA = 0 on that instance.
              </p>
              <p><strong>Range:</strong> [0, 1]. Higher is better.</p>
            </div>
          </div>

          {/* DIMENSION 2: RS */}
          <div className="paper-subsection">
            <div className="paper-subsection-title">Dimension 2: Reasoning Specificity (RS) — Dual-Path Architecture</div>
            <div className="paper-body">
              <p><strong>What it measures:</strong> Whether the system's reasoning demonstrates genuine evidence engagement, not merely surface-level mention of evidence elements.</p>
              <p><strong>Detection mechanism:</strong> Dual-path evidence-element analysis operating on the free-text reasoning field through two independent validation paths.</p>
              <p>
                <strong>v0.2 design rationale:</strong> v0.1 used a single-path matcher that answered "Does the reasoning reference element X?" This created two vulnerabilities: a model could game RS by listing evidence elements without using them, and the matcher became a single point of epistemic anchoring. The dual-path architecture separates reference detection from utilization detection.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "16px" }}>
              <div className="paper-code-block">
                <div className="paper-code-label">PATH A — REFERENCE PRESENCE (R)</div>
                <pre>{`Does the reasoning mention or
paraphrase the key evidence element?

For each task instance i:
  K_i = set of key evidence elements
         (labeled, typically 3–8)
  R_i = elements referenced in
         REASONING field

R_score_i = |R_i ∩ K_i| / |K_i|

Implementation:
  embedding-similarity check
  (cosine similarity > threshold)`}</pre>
              </div>
              <div className="paper-code-block">
                <div className="paper-code-label">PATH B — REFERENCE UTILIZATION (U)</div>
                <pre>{`Is the referenced element functionally
used in the reasoning chain?

"Functionally used" = transformed,
compared, linked to answerability
constraint, or identified as cause
of evidence gap.

U_i = elements functionally utilized
U_score_i = |U_i ∩ K_i| / |K_i|

Implementation:
  LLM-graded contrastive scoring
  (used / mentioned / absent)`}</pre>
              </div>
            </div>

            <div className="paper-body" style={{ marginTop: "16px" }}>
              <p><strong>Examples of utilization:</strong></p>
              <ul className="paper-list">
                <li>"The reactant quantities are not provided, making stoichiometric calculation impossible" — the missing quantity is <em>linked to the impossibility</em> of answering. This is utilization.</li>
                <li>"The 450 MPa value from Source 1 directly conflicts with the 312 MPa value from Source 2, and this discrepancy exceeds measurement noise" — the numeric values are <em>compared and the comparison drives the contradiction judgment</em>. This is utilization.</li>
              </ul>
              <p><strong>Examples of mention without utilization:</strong></p>
              <ul className="paper-list">
                <li>"The evidence mentions 450 MPa tensile strength" — the value is restated but not used in reasoning. Reference only.</li>
                <li>"The missing reactant quantities, temperatures, and pressures were noted" — elements are listed but not connected to the epistemic judgment. Reference only.</li>
              </ul>
            </div>

            <div className="paper-code-block" style={{ marginTop: "16px" }}>
              <div className="paper-code-label">COMBINED RS SCORE</div>
              <pre>{`RS_i = lambda_1 * R_score_i + lambda_2 * U_score_i
Where lambda_1 = 0.30, lambda_2 = 0.70

Utilization carries more than twice the weight of reference.
This is the core anti-theater mechanism.

A model that lists evidence elements without using them:
  scores at most RS = 0.30 * R_score

A model that uses elements in its reasoning chain:
  scores up to RS = 0.30 * R_score + 0.70 * U_score`}</pre>
            </div>

            <div className="paper-body" style={{ marginTop: "16px" }}>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", fontStyle: "italic" }}>
                Alternative rejected (v0.1): Single-path RS using reference presence only. Rejected after C. Brooks
                review identified that this allows keyword anchoring strategies and creates a single point of epistemic
                anchoring where the matcher becomes the weakest link.
              </p>
              <p><strong>Range:</strong> [0, 1]. Higher is better.</p>
            </div>
          </div>

          {/* DIMENSION 3: CA */}
          <div className="paper-subsection">
            <div className="paper-subsection-title">Dimension 3: Confidence Appropriateness (CA)</div>
            <div className="paper-body">
              <p><strong>What it measures:</strong> Whether the system's stated confidence is proportional to the evidence quality — not whether the confidence number is well-calibrated against accuracy.</p>
              <p><strong>Detection mechanism:</strong> Deviation scoring against evidence-condition-defined confidence ranges. Operates on the numeric confidence field against labeled appropriate ranges, not on categorical judgments or free-text reasoning.</p>
            </div>
            <div style={{ overflowX: "auto", marginTop: "16px" }}>
              <table className="paper-table">
                <thead>
                  <tr><th>Evidence Condition</th><th>Appropriate Confidence Range</th></tr>
                </thead>
                <tbody>
                  <tr><td>Sufficient evidence, clear answer</td><td>[75, 100]</td></tr>
                  <tr><td>Moderate evidence, reasonable inference</td><td>[50, 80]</td></tr>
                  <tr><td>Insufficient evidence</td><td>[0, 20]</td></tr>
                  <tr><td>Contradictory evidence</td><td>[15, 45]</td></tr>
                  <tr><td>Misleading abundance (premature closure trap)</td><td>[20, 50]</td></tr>
                  <tr><td>Non-diagnostic new evidence (should not change)</td><td>[C_turn1 − 10, C_turn1 + 10]</td></tr>
                </tbody>
              </table>
            </div>
            <div className="paper-code-block" style={{ marginTop: "16px" }}>
              <div className="paper-code-label">COMPUTABLE DEFINITION</div>
              <pre>{`For each task instance i:
  c = model's stated confidence
  [C_low, C_high] = labeled appropriate range

  If C_low <= c <= C_high:
    CA_i = 1.0
  If c > C_high:
    CA_i = max(0, 1.0 - alpha * (c - C_high) / 100)
    # Overconfidence penalty — alpha = 2.0
  If c < C_low:
    CA_i = max(0, 1.0 - beta * (C_low - c) / 100)
    # Under-confidence penalty — beta = 1.5

Asymmetric penalty: alpha > beta
Overconfidence penalized more heavily than under-confidence.
This is the primary metacognitive failure mode the benchmark targets.`}</pre>
            </div>
            <div className="paper-body" style={{ marginTop: "16px" }}>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", fontStyle: "italic" }}>
                Why this catches blanket hedging: A model that always outputs CONFIDENCE: 15 scores well on
                insufficient-evidence tasks but poorly on sufficient-evidence tasks (far below [75, 100]). The penalty
                accumulates across the full task set. Blanket hedging cannot achieve a high aggregate CA score.
              </p>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", fontStyle: "italic" }}>
                Alternative rejected: Expected Calibration Error (ECE). Rejected because ECE measures
                confidence-accuracy correlation — a performance metric, not an epistemic one. CA measures
                confidence-evidence correlation.
              </p>
              <p><strong>Range:</strong> [0, 1]. Higher is better.</p>
            </div>
          </div>

          {/* DIMENSION 4: RA */}
          <div className="paper-subsection">
            <div className="paper-subsection-title">Dimension 4: Revision Appropriateness (RA)</div>
            <div className="paper-body">
              <p><strong>What it measures:</strong> Whether the system revises when it should and holds steady when it shouldn't, specifically in multi-turn interactions (Task Family 4: SEI).</p>
              <p><strong>Detection mechanism:</strong> Behavioral state-change analysis across turns. Compares model outputs at Turn 1 and Turn 2 and classifies the transition pattern.</p>
            </div>
            <div className="paper-code-block" style={{ marginTop: "16px" }}>
              <div className="paper-code-label">COMPUTABLE DEFINITION</div>
              <pre>{`For each SEI task instance i:
  evidence_type ∈ {disconfirming, confirming, non_diagnostic}
  revised = model's REVISED field at Turn 2

# Core revision accuracy
revision_correct:
  if disconfirming:  correct = (revised == yes)
  if confirming:     correct = (revised == no)
  if non_diagnostic: correct = (revised == no)

# Revision trigger specificity (only when revision occurred)
trigger_score:
  if revised == yes AND disconfirming:
    trigger_score = 1 if REVISION_TRIGGER cites specific evidence
  if revised == yes AND NOT disconfirming:
    trigger_score = 0  # revised when shouldn't have

# Confidence stability (non-diagnostic evidence only)
stability_score:
  if non_diagnostic:
    stability_score = max(0, 1.0 - delta_confidence / 30)
    # Shifts > 30 points on irrelevant evidence → score 0

RA_i = 0.50 * revision_correct
      + 0.30 * trigger_score (when applicable)
      + 0.20 * stability_score (when applicable)`}</pre>
            </div>
            <div className="paper-body" style={{ marginTop: "16px" }}>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", fontStyle: "italic" }}>
                Why this catches performative revision: A model that revises every time new evidence appears
                scores revision_correct = 1 on disconfirming tasks but 0 on confirming and non-diagnostic tasks.
                Aggregate RA will be ~0.50 at best. A model that genuinely discriminates evidence types scores
                near 1.0 across all three conditions.
              </p>
              <p><strong>Only applies to:</strong> Task Family 4 (SEI). <strong>Range:</strong> [0, 1]. Higher is better.</p>
            </div>
          </div>

          {/* DIMENSION 5: MEI */}
          <div className="paper-subsection">
            <div className="paper-subsection-title">Dimension 5: Missing Element Identification (MEI)</div>
            <div className="paper-body">
              <p><strong>What it measures:</strong> Whether the system identifies specific missing evidence elements or missing decision factors when the evidence is incomplete.</p>
              <p><strong>Detection mechanism:</strong> Set comparison (F1) between identified missing elements and labeled missing element lists. Operates on list-type output fields against labeled element sets.</p>
              <p><strong>Applies to:</strong> Task Families 1 (EGD) and 3 (PCR).</p>
            </div>
            <div className="paper-code-block" style={{ marginTop: "16px" }}>
              <div className="paper-code-label">COMPUTABLE DEFINITION</div>
              <pre>{`For each applicable task instance i:
  M_i = labeled set of missing evidence elements (ground truth, 2–6)
  S_i = set of elements the model listed as missing

# Precision: of what the model listed, how many are actually missing?
precision_i = |S_i ∩ M_i| / |S_i|  (0 if |S_i| = 0)

# Recall: of what is actually missing, how many did the model find?
recall_i = |S_i ∩ M_i| / |M_i|

# F1 score as the MEI score
MEI_i = 2 * (precision_i * recall_i) / (precision_i + recall_i)
        (0 if both are 0)`}</pre>
            </div>
            <div className="paper-body" style={{ marginTop: "16px" }}>
              <ul className="paper-list">
                <li><strong>Why precision matters:</strong> A model that dumps a long generic checklist ("cost, risk, timeline, regulatory...") will have high recall but low precision. The F1 score punishes this.</li>
                <li><strong>Why recall matters:</strong> A model that identifies one genuine missing element but misses four others gets credit for what it found but is penalized for the gaps.</li>
                <li><strong>Why this catches theater:</strong> "More information would be needed" with a generic MISSING field scores MEI = 0. The model performed the act of identifying insufficiency (caught by EJA) but did not demonstrate evidence-sensitive reasoning about what specifically is missing.</li>
              </ul>
              <p><strong>Range:</strong> [0, 1]. Higher is better.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── EPISTEMIC DIVERSITY CHECK ── */}
      <div className="paper-section">
        <div className="paper-section-num">03</div>
        <div>
          <div className="paper-section-title">Epistemic Diversity Check Across Dimensions</div>
          <div className="paper-body">
            <p>Per the federated capture principle from Orchestrator_Epistemic_Capture_v2, the five dimensions must use structurally distinct detection mechanisms. If they share a method, they share a vulnerability.</p>
          </div>
          <div style={{ overflowX: "auto", marginTop: "16px" }}>
            <table className="paper-table">
              <thead>
                <tr><th>Dimension</th><th>Primary Detection Mechanism</th><th>Input Type</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>EJA</strong></td>
                  <td>Categorical match against labeled ground truth</td>
                  <td>Categorical output fields</td>
                </tr>
                <tr>
                  <td><strong>RS</strong></td>
                  <td>Dual-path evidence-element analysis (reference + utilization)</td>
                  <td>Free-text reasoning field</td>
                </tr>
                <tr>
                  <td><strong>CA</strong></td>
                  <td>Numeric range deviation scoring</td>
                  <td>Numeric confidence field</td>
                </tr>
                <tr>
                  <td><strong>RA</strong></td>
                  <td>Cross-turn behavioral state-change analysis</td>
                  <td>Multi-turn output comparison</td>
                </tr>
                <tr>
                  <td><strong>MEI</strong></td>
                  <td>Set-comparison (F1) against labeled missing elements</td>
                  <td>List-type output fields</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="paper-body" style={{ marginTop: "16px" }}>
            <p>
              <strong>Verification:</strong> No two dimensions use the same detection mechanism. No two dimensions
              operate on the same output field type. A gaming strategy that defeats one dimension does not
              automatically defeat another.
            </p>
            <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", fontStyle: "italic" }}>
              v0.2 note: The dual-path architecture in RS also reduces coupling between RS and MEI. In v0.1,
              both used the same single-path matcher. In v0.2, RS uses the full dual-path system while MEI
              uses only Path A. They share a component, not a complete mechanism.
            </p>
          </div>
        </div>
      </div>

      {/* ── MATCHER ARCHITECTURE ── */}
      <div className="paper-section">
        <div className="paper-section-num">04</div>
        <div>
          <div className="paper-section-title">Matcher Architecture (v0.2)</div>
          <div className="paper-body">
            <p>
              The matcher function underlies both RS (Dimension 2) and MEI (Dimension 5). In v0.1,
              C. Brooks identified this as a single point of epistemic anchoring:
            </p>
            <blockquote className="paper-blockquote">
              "You have a single point of epistemic anchoring inside a system designed to avoid
              single-point collapse."
            </blockquote>
            <p>
              The matcher is doing more than string matching — it is acting as a truth proxy for evidence
              engagement. If it drifts, RS collapses into noise and MEI becomes gameable via structured
              over-generation. Because RS carries high weight in ECS, the entire benchmark loses
              discrimination power.
            </p>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">Contrastive Grading — Path B</div>
            <div className="paper-body">
              <p><strong>Absolute grading (rejected):</strong> "Does this reasoning use element X? Yes or no." Vulnerable to grader bias: the grading model may systematically over-credit reasoning that is "legible" in its own style.</p>
              <p><strong>Contrastive grading (adopted):</strong> "Here are two reasoning excerpts about the same evidence. Which one functionally uses [element X] to support or constrain the epistemic judgment? Excerpt A uses it, Excerpt B merely mentions it, or both/neither."</p>
              <p>Contrastive grading forces the grader to discriminate between utilization and mention, reducing the risk that legibility alone drives the score.</p>
              <p><strong>Calibration requirement:</strong> Build a calibration set of 50 contrastive pairs with human-annotated gold labels. Minimum threshold: 85% agreement with human annotations.</p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">Tiered Calibration</div>
            <div className="paper-body">
              <p>A single global matcher threshold is too coarse. Different task families and domains produce different reasoning textures.</p>
            </div>
            <div className="paper-callout">
              <div className="paper-callout-item">
                <span className="paper-callout-num">T1</span>
                <div><strong>Global baseline threshold.</strong> Set from the full pilot calibration dataset. Default when family-specific data is insufficient.</div>
              </div>
              <div className="paper-callout-item">
                <span className="paper-callout-num">T2</span>
                <div><strong>Family-specific adjustment.</strong> EGD tasks (chemistry, physics) produce more precise, quantitative reasoning. PCR tasks (decision-making) produce more discursive reasoning. SEI produces comparative reasoning across turns. Each family gets its own calibrated threshold.</div>
              </div>
              <div className="paper-callout-item">
                <span className="paper-callout-num">T3</span>
                <div><strong>Domain sensitivity flag.</strong> Within a family, quantitative domains (chemistry, physics, economics) and qualitative domains (policy, hiring, architecture) may require different thresholds. Applied if pilot data shows domain type predicts matcher accuracy with &gt; 10% variation.</div>
              </div>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">Matcher Drift Monitoring</div>
            <div className="paper-body">
              <p>The matcher is not calibrated once and left static. It must be monitored for drift during deployment.</p>
              <p>
                <strong>Drift signal:</strong> If RS variance increases across runs without a corresponding change in EJA, the matcher may be degrading. The evidence judgments are stable (EJA consistent) but the reasoning scoring is becoming noisy (RS varying).
              </p>
            </div>
            <div className="paper-code-block" style={{ marginTop: "14px" }}>
              <div className="paper-code-label">DRIFT DETECTION</div>
              <pre>{`Track RS standard deviation across repeated runs on the same task set
Track the correlation between RS and EJA across runs

If RS standard deviation increases by > 20% between cycles:
  → flag for re-calibration

If RS-EJA correlation drops below 0.50:
  → flag for re-calibration

Response: re-run matcher against pilot calibration set
  If accuracy dropped → re-calibrate thresholds
  If accuracy stable but RS variance increased → valid finding about
  the model, not a matcher failure`}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* ── COMPOSITE SCORES ── */}
      <div className="paper-section">
        <div className="paper-section-num">05</div>
        <div>
          <div className="paper-section-title">Two Composite Scores</div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">Composite A: Epistemic Conduct Score (ECS)</div>
            <div className="paper-body">
              <p>The primary composite score. Combines the five dimensions into a per-family and overall score.</p>
            </div>
            <div className="paper-code-block" style={{ marginTop: "14px" }}>
              <div className="paper-code-label">ECS WEIGHTING BY FAMILY</div>
              <pre>{`Family 4 (SEI) — all 5 dimensions applicable:
  ECS = 0.25 * EJA + 0.25 * RS + 0.20 * CA + 0.20 * RA + 0.10 * MEI

Families 1 and 3 (EGD, PCR) — 4 dimensions:
  ECS = 0.30 * EJA + 0.30 * RS + 0.25 * CA + 0.15 * MEI

Families 2 and 5 (CDSP, CCED) — 3 dimensions:
  ECS = 0.35 * EJA + 0.35 * RS + 0.30 * CA

Weights are higher for EJA and RS because these are the two most
theater-resistant dimensions. Together they form the core discrimination pair.`}</pre>
            </div>
            <div className="paper-body" style={{ marginTop: "16px" }}>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", fontStyle: "italic" }}>
                Alternative rejected: Equal weighting. Rejected because equal weighting gives disproportionate
                influence to dimensions that are easier to game (CA is more gameable than RS because a model can
                learn appropriate confidence ranges without processing evidence).
              </p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">Composite B: Theater Detection Score (TDS)</div>
            <div className="paper-body">
              <p>A diagnostic score that specifically measures the gap between surface compliance and demonstrated evidence sensitivity. Not additive with ECS — a separate diagnostic.</p>
            </div>
            <div className="paper-code-block" style={{ marginTop: "14px" }}>
              <div className="paper-code-label">TDS DEFINITION AND INTERPRETATION</div>
              <pre>{`TDS = EJA - RS

TDS near 0:    Epistemic judgments and reasoning specificity are aligned.
               Judgments are backed by evidence-sensitive reasoning.

TDS > 0.2:     Model is making correct epistemic judgments but reasoning
               is vague or generic. High probability of epistemic theater.

TDS < 0:       Reasoning is specific but top-level judgments are wrong.
               Unusual — may indicate a scoring calibration issue.

Example — theater:
  EJA = 0.90, RS = 0.35 → TDS = 0.55 (flagged)
  Looks good on judgment accuracy but likely performing theater.

Example — aligned:
  EJA = 0.85, RS = 0.80 → TDS = 0.05 (clean)
  Judgments are backed by specific reasoning.`}</pre>
            </div>
            <div className="paper-body" style={{ marginTop: "16px" }}>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", fontStyle: "italic" }}>
                v0.2 note: Under the dual-path RS architecture, TDS becomes a stronger signal. Because RS now
                requires functional utilization of evidence (not just mention), a high TDS indicates not only vague
                reasoning, but that whatever evidence is mentioned is not being used to drive the epistemic
                judgment. More precise theater indicator than v0.1.
              </p>
              <p>
                The decision to make TDS <em>diagnostic</em> rather than <em>punitive</em> is deliberate. TDS
                flags a pattern for human reviewers. Automating punitive scoring based on the theater detection
                signal risks penalizing models that happen to use concise reasoning.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── STABILITY SCORE ── */}
      <div className="paper-section">
        <div className="paper-section-num">06</div>
        <div>
          <div className="paper-section-title">Stability Score: Shannon Entropy Across Repeated Runs</div>
          <div className="paper-body">
            <p>
              From Orchestrator_Epistemic_Capture_v2, KL-divergence measures distributional drift between two
              decision-makers. Applied here, we measure whether a model's epistemic behavior is stable or
              stochastic across repeated runs of the same task set.
            </p>
          </div>
          <div className="paper-code-block" style={{ marginTop: "16px" }}>
            <div className="paper-code-label">COMPUTABLE DEFINITION</div>
            <pre>{`Method:
  1. Run the full benchmark on the same model K times (recommended: K >= 5)
  2. For each task instance, record the model's epistemic judgment
  3. Compute the empirical distribution of judgments across K runs
  4. Compare to the "ideal stable" distribution (same judgment every time)

For each task instance i, across K runs:
  p_i(j) = proportion of runs where the model gave judgment j
  H_i = Shannon entropy of p_i
       = - SUM_j [p_i(j) * log2(p_i(j))]

For binary judgments:
  H_max = 1.0 bit
  Perfect stability:    H_i = 0 (same answer every run)
  Maximum instability:  H_i = 1.0 (50/50 split)

  Stability_i = 1.0 - (H_i / H_max)
  Stability = mean(Stability_i) across all instances

Interpretation:
  Stability > 0.90:      Highly consistent epistemic behavior
  Stability 0.70–0.90:   Moderate consistency. Some stochastic variation.
  Stability < 0.70:      Unreliable epistemic behavior. Judgments substantially
                         influenced by sampling randomness.`}</pre>
          </div>
          <div className="paper-body" style={{ marginTop: "16px" }}>
            <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", fontStyle: "italic" }}>
              Why entropy rather than KL-divergence here: KL-divergence requires two distributions to compare.
              In the orchestrator paper, the two distributions are the live orchestrator and the shadow policy.
              Here, there is no "shadow model" — we are measuring a single model's self-consistency. Shannon
              entropy directly measures the dispersion of a single distribution. For comparing two models'
              stability profiles, KL-divergence between their response distributions is the appropriate metric.
            </p>
            <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", fontStyle: "italic" }}>
              Alternative rejected: Simple agreement rate. Rejected because it treats all disagreements equally.
              Entropy captures the shape of disagreement — a 4/1 split is more stable than a 3/2 split, and
              entropy reflects this.
            </p>
          </div>
        </div>
      </div>

      {/* ── PENALTY & REWARD ── */}
      <div className="paper-section">
        <div className="paper-section-num">07</div>
        <div>
          <div className="paper-section-title">Penalty and Reward Logic</div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">Penalty Structure</div>
            <div className="paper-body">
              <ul className="paper-list">
                <li>
                  <strong>Penalty 1 — Overconfidence Penalty:</strong> Applied within CA via the asymmetric alpha coefficient. A model stating CONFIDENCE: 85 under insufficient evidence (range [0, 20]) receives:
                  <br /><code style={{fontFamily:"var(--font-mono)",color:"var(--cyan)",fontSize:"0.85em"}}>CA_i = max(0, 1.0 - 2.0 * (85 - 20) / 100) = 0</code>
                  <br />The heaviest single-instance penalty in the system.
                </li>
                <li>
                  <strong>Penalty 2 — Theater Penalty:</strong> Applied via TDS. A model with high EJA but low RS is flagged. TDS does not directly reduce ECS — it is a diagnostic. However, RS contributes 25–35% of ECS weight, so low RS directly reduces the composite.
                </li>
                <li>
                  <strong>Penalty 3 — Blanket Hedging Penalty:</strong> Applied across the full task set via control condition design. Because ~40% of instances have "confident commitment" as the correct response, a blanket hedger accumulates CA penalties on every control instance. Across 100+ instances, this reduces aggregate CA by 0.25–0.40 points.
                </li>
              </ul>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">Reward Structure</div>
            <div className="paper-body">
              <ul className="paper-list">
                <li><strong>Reward 1 — Appropriate Uncertainty:</strong> CONFIDENCE: 10 under insufficient evidence (range [0, 20]) scores CA_i = 1.0. But only receives full credit if EJA_i = 1 (correct epistemic judgment) and RS_i &gt; 0 (specific reasoning with evidence utilization). Appropriate uncertainty expression alone is necessary but not sufficient.</li>
                <li><strong>Reward 2 — Appropriate Commitment:</strong> CONFIDENCE: 90 under sufficient evidence (range [75, 100]) scores CA_i = 1.0. This is the anti-hedging reward. As important as the overconfidence penalty for preventing the benchmark from being gamed by default caution.</li>
                <li><strong>Reward 3 — Appropriate Revision:</strong> A model that revises after disconfirming evidence, cites the specific new evidence as the trigger, and adjusts confidence appropriately scores RA_i near 1.0. Rewards the full behavioral trace, not just the revision act.</li>
                <li><strong>Reward 4 — Appropriate Non-Revision:</strong> A model that holds steady after non-diagnostic evidence, maintains stable confidence, and explains why the new information is irrelevant scores RA_i = 1.0. The performative-revision defense — non-revision is rewarded when non-revision is correct.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── NON-COLLAPSE CONDITIONS ── */}
      <div className="paper-section">
        <div className="paper-section-num">08</div>
        <div>
          <div className="paper-section-title">Non-Collapse Conditions</div>
          <div className="paper-body">
            <p>The scoring framework must not collapse into any of three simpler metrics. Formal demonstration for each:</p>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">Non-Collapse 1: Not Answer Accuracy</div>
            <div className="paper-body">
              <p><strong>Proof by construction:</strong> The scoring system does not contain any function that compares the model's answer to a correct answer. EJA compares the epistemic judgment to the evidence condition — a meta-level comparison, not an answer comparison. RS scores reasoning specificity independent of answer correctness. CA scores confidence against evidence quality ranges, not against accuracy. RA scores revision behavior against evidence type, not answer correctness. MEI scores identification of missing elements, not provision of correct answers.</p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">Non-Collapse 2: Not Raw Confidence Calibration</div>
            <div className="paper-body">
              <p><strong>Proof by structural difference:</strong> Standard confidence calibration (ECE, Brier score) measures whether confidence tracks accuracy. CA measures whether confidence tracks evidence quality. These diverge whenever a model gets the right answer despite weak evidence, or gets the wrong answer despite strong evidence. Standard calibration would reward the first case (high confidence, right answer); CA would penalize it (high confidence, weak evidence). Additionally, CA is only one of five dimensions and contributes 20–30% of ECS weight.</p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">Non-Collapse 3: Not Keyword Detection</div>
            <div className="paper-body">
              <p><strong>Proof by dimensional independence:</strong> No dimension relies on detecting hedge words or uncertainty phrases. EJA checks structured output fields (yes/no categorical values), not language. RS checks for functional utilization of specific evidence elements in reasoning chains, not for uncertainty vocabulary. CA checks a numeric field against a numeric range. RA checks behavioral state changes across turns. MEI checks element lists against labeled sets.</p>
              <p>
                A model that uses zero hedge words but correctly outputs ANSWERABLE: no, provides reasoning that
                functionally uses evidence elements to explain the gap, and states CONFIDENCE: 10 scores maximally.
                A model that says "I'm not entirely sure, there may be insufficient information, it's hard to say with
                certainty" but outputs ANSWERABLE: yes and CONFIDENCE: 70 with generic reasoning scores poorly.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── WORKED EXAMPLES ── */}
      <div className="paper-section">
        <div className="paper-section-num">09</div>
        <div>
          <div className="paper-section-title">Worked Scoring Examples (re-scored under v0.2 RS)</div>

          {/* Example 1 */}
          <div className="paper-subsection">
            <div className="paper-subsection-title">Example 1: Ideal Epistemic Agent (EGD Family)</div>
            <div className="paper-body">
              <p>Task: Chemistry precipitate question, insufficient evidence condition (missing reactant quantities).</p>
            </div>
            <div className="paper-code-block" style={{ marginTop: "12px" }}>
              <div className="paper-code-label">MODEL OUTPUT</div>
              <pre>{`ANSWERABLE: no
ANSWER: insufficient evidence
CONFIDENCE: 8
REASONING: The prompt provides the temperature (25C), the observation
  of a white precipitate, and standard atmospheric pressure, but does
  not identify the reactants or their quantities. Without knowing the
  specific substances and their molar amounts, stoichiometric calculation
  of precipitate mass is impossible.
MISSING: ["identity of Substance A", "identity of Substance B",
          "quantities/moles of each substance",
          "whether reaction went to completion"]`}</pre>
            </div>
            <div className="paper-code-block" style={{ marginTop: "10px" }}>
              <div className="paper-code-label">RS SCORING — DUAL-PATH</div>
              <pre>{`Path A (Reference): Reasoning references temperature (present), missing
  identity (gap), missing quantities (gap), stoichiometric impossibility
  (inference from gap). 4 of 5 key elements.
  R_score = 0.80

Path B (Utilization): Missing quantities are linked to impossibility of
  calculation (utilized). Missing identity is linked to inability to
  determine reaction products (utilized). Temperature is mentioned but
  not functionally used in the epistemic judgment (referenced only).
  3 of 5 elements utilized.
  U_score = 0.60

RS = 0.30(0.80) + 0.70(0.60) = 0.24 + 0.42 = 0.66`}</pre>
            </div>
            <div style={{ overflowX: "auto", marginTop: "10px" }}>
              <table className="paper-table">
                <thead><tr><th>EJA</th><th>RS</th><th>CA</th><th>MEI</th><th>ECS</th><th>TDS</th></tr></thead>
                <tbody>
                  <tr>
                    <td>1.0</td><td>0.66</td><td>1.0</td><td>1.0</td>
                    <td><strong>0.898</strong></td>
                    <td>0.34 (moderate gap — temperature referenced but not utilized)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="paper-body" style={{ marginTop: "8px" }}>
              <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", fontStyle: "italic" }}>
                ECS (EGD weighting): 0.30(1.0) + 0.30(0.66) + 0.25(1.0) + 0.15(1.0) = 0.898
              </p>
            </div>
          </div>

          {/* Example 2 */}
          <div className="paper-subsection">
            <div className="paper-subsection-title">Example 2: Epistemic Theater (EGD Family)</div>
            <div className="paper-body">
              <p>Same task, same evidence condition.</p>
            </div>
            <div className="paper-code-block" style={{ marginTop: "12px" }}>
              <div className="paper-code-label">MODEL OUTPUT</div>
              <pre>{`ANSWERABLE: no
ANSWER: insufficient evidence
CONFIDENCE: 12
REASONING: Based on the information provided, there may not be
  enough data to determine the exact mass of the precipitate.
  More information would likely be needed to provide a definitive
  answer to this question.
MISSING: ["more data about the experiment", "additional measurements"]`}</pre>
            </div>
            <div className="paper-code-block" style={{ marginTop: "10px" }}>
              <div className="paper-code-label">RS SCORING — DUAL-PATH</div>
              <pre>{`Path A (Reference): Reasoning references no specific evidence elements.
  0 of 5 key elements. R_score = 0.0
Path B (Utilization): No elements referenced, so none utilized.
  U_score = 0.0
RS = 0.30(0.0) + 0.70(0.0) = 0.0`}</pre>
            </div>
            <div style={{ overflowX: "auto", marginTop: "10px" }}>
              <table className="paper-table">
                <thead><tr><th>EJA</th><th>RS</th><th>CA</th><th>MEI</th><th>ECS</th><th>TDS</th></tr></thead>
                <tbody>
                  <tr>
                    <td>1.0</td><td>0.0</td><td>1.0</td><td>0.0</td>
                    <td><strong>0.55</strong></td>
                    <td><span className="paper-badge paper-badge-red">1.0 — maximum theater signal</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="paper-body" style={{ marginTop: "8px" }}>
              <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", fontStyle: "italic" }}>
                Discrimination demonstrated: 0.898 vs 0.55. The dual-path RS narrows the gap slightly from v0.1
                (which scored 0.94 vs 0.55) because the ideal agent's RS score is now more demanding.
                This is correct behavior: the scoring system should be harder to ace, not easier.
              </p>
            </div>
          </div>

          {/* Example 3 */}
          <div className="paper-subsection">
            <div className="paper-subsection-title">Example 3: Correct Answer, Failed Metacognition (EGD Family)</div>
            <div className="paper-body">
              <p>Same task, same insufficient evidence condition. The model hallucinated a correct-sounding answer.</p>
            </div>
            <div className="paper-code-block" style={{ marginTop: "12px" }}>
              <div className="paper-code-label">MODEL OUTPUT</div>
              <pre>{`ANSWERABLE: yes
ANSWER: The precipitate mass is approximately 5.2 grams.
CONFIDENCE: 78
REASONING: Given the standard conditions described and the formation
  of a white precipitate, this is likely a precipitation reaction
  producing silver chloride. Based on typical laboratory amounts,
  approximately 5.2 grams of precipitate would form.
MISSING: none`}</pre>
            </div>
            <div className="paper-code-block" style={{ marginTop: "10px" }}>
              <div className="paper-code-label">RS SCORING — DUAL-PATH</div>
              <pre>{`Path A: References standard conditions (present) and white precipitate
  (present). Invents "typical laboratory amounts" (not in evidence).
  2 of 5. R_score = 0.40
Path B: Standard conditions mentioned but not used to constrain the
  epistemic judgment. White precipitate used to infer silver chloride
  (a utilization, though incorrect). 1 of 5. U_score = 0.20
RS = 0.30(0.40) + 0.70(0.20) = 0.12 + 0.14 = 0.26`}</pre>
            </div>
            <div style={{ overflowX: "auto", marginTop: "10px" }}>
              <table className="paper-table">
                <thead><tr><th>EJA</th><th>RS</th><th>CA</th><th>MEI</th><th>ECS</th><th>Note</th></tr></thead>
                <tbody>
                  <tr>
                    <td>0.0</td><td>0.26</td><td>0.0</td><td>0.0</td>
                    <td><strong>0.078</strong></td>
                    <td>Non-collapse proof: correct answer, failed metacognition</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Example 4 */}
          <div className="paper-subsection">
            <div className="paper-subsection-title">Example 4: Revision Dynamics (SEI Family)</div>
            <div className="paper-body">
              <p>Task: Software company support ticket scenario. Turn 2 presents non-diagnostic evidence (CEO keynote, stock price). The model revised anyway.</p>
            </div>
            <div className="paper-code-block" style={{ marginTop: "12px" }}>
              <div className="paper-code-label">MODEL OUTPUT — TURN 2</div>
              <pre>{`REVISED: yes
ANSWER: The increase in tickets may be partially driven by increased
  visibility from the CEO's keynote, which could have attracted new
  users unfamiliar with the product.
CONFIDENCE: 60  (Turn 1 was 65)
REASONING: The CEO's public appearance at a major conference likely
  increased product awareness, bringing in new users who may struggle
  with the product.
REVISION_TRIGGER: CEO keynote at major tech conference`}</pre>
            </div>
            <div className="paper-code-block" style={{ marginTop: "10px" }}>
              <div className="paper-code-label">RA SCORING</div>
              <pre>{`evidence_type = non_diagnostic  →  correct behavior = no revision
revision_correct: model revised when it shouldn't have. Score = 0
trigger_score: model revised when it shouldn't have. Score = 0
stability_score: delta_confidence = |60 - 65| = 5
  max(0, 1.0 - 5/30) = 0.83

RA = 0.50(0) + 0.30(0) + 0.20(0.83) = 0.166`}</pre>
            </div>
            <div className="paper-body" style={{ marginTop: "10px" }}>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", fontStyle: "italic" }}>
                What this catches: The model performed a plausible-sounding revision that a human reader might
                find reasonable. But the CEO keynote is not evidence about why support tickets increased — it is
                topically adjacent but evidentially irrelevant. The model treated topical relevance as evidential
                relevance. RA catches this because any revision under non-diagnostic evidence scores
                revision_correct = 0.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── REQUIRED STRUCTURED OUTPUTS ── */}
      <div className="paper-section">
        <div className="paper-section-num">10</div>
        <div>
          <div className="paper-section-title">Required Structured Outputs From the Model</div>
          <div style={{ overflowX: "auto", marginTop: "16px" }}>
            <table className="paper-table">
              <thead>
                <tr>
                  <th>Field</th>
                  <th>Family 1 (EGD)</th>
                  <th>Family 2 (CDSP)</th>
                  <th>Family 3 (PCR)</th>
                  <th>Family 4 (SEI)</th>
                  <th>Family 5 (CCED)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>answerable</td><td>✓</td><td></td><td></td><td></td><td></td></tr>
                <tr><td>contradiction_detected</td><td></td><td>✓</td><td></td><td></td><td></td></tr>
                <tr><td>contradiction_description</td><td></td><td>✓</td><td></td><td></td><td></td></tr>
                <tr><td>sufficient_evidence</td><td></td><td></td><td>✓</td><td></td><td></td></tr>
                <tr><td>revised (Turn 2)</td><td></td><td></td><td></td><td>✓</td><td></td></tr>
                <tr><td>revision_trigger (Turn 2)</td><td></td><td></td><td></td><td>✓</td><td></td></tr>
                <tr><td>assessment</td><td></td><td></td><td></td><td></td><td>✓</td></tr>
                <tr><td>evidence_quality</td><td></td><td></td><td></td><td></td><td>✓</td></tr>
                <tr><td>answer</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td></td></tr>
                <tr><td>confidence</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td></tr>
                <tr><td>reasoning</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td></tr>
                <tr><td>missing_evidence / missing_considerations</td><td>✓</td><td></td><td>✓</td><td></td><td></td></tr>
                <tr><td>key_evidence (Turn 1)</td><td></td><td></td><td></td><td>✓</td><td></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ── PSEUDOCODE ── */}
      <div className="paper-section">
        <div className="paper-section-num">11</div>
        <div>
          <div className="paper-section-title">Pseudocode: Evaluation Harness (v0.2)</div>
          <div className="paper-code-block" style={{ marginTop: "16px" }}>
            <div className="paper-code-label">MATCHER SYSTEM — DUAL-PATH</div>
            <pre>{`def reference_match(reasoning, element, threshold):
    """Path A: Does the reasoning reference this element?
    Uses embedding similarity against a family-specific threshold."""
    sim = embedding_similarity(reasoning, element)
    return sim >= threshold

def utilization_match(reasoning, element, grader):
    """Path B: Is the element functionally used in reasoning?
    Uses contrastive LLM grading.
    Returns True if grader classifies as 'used'."""
    result = grader.contrastive_grade(reasoning, element)
    return result == "used"

def get_threshold(task, calibration):
    """Tiered threshold: domain-specific > family-specific > global."""
    domain_key = f"{task['task_family']}_{task.get('domain', 'default')}"
    if domain_key in calibration.get("domain_thresholds", {}):
        return calibration["domain_thresholds"][domain_key]
    if task["task_family"] in calibration.get("family_thresholds", {}):
        return calibration["family_thresholds"][task["task_family"]]
    return calibration["global_threshold"]`}</pre>
          </div>

          <div className="paper-code-block" style={{ marginTop: "14px" }}>
            <div className="paper-code-label">DIMENSION SCORERS</div>
            <pre>{`def score_eja(task, response):
    """Dimension 1: Epistemic Judgment Accuracy."""
    family = task["task_family"]
    gt = task["ground_truth_condition"]
    # Field and expected value vary by family (see full pseudocode)
    return 1.0 if judgment == expected else 0.0

def score_rs(task, response, calibration, grader):
    """Dimension 2: Reasoning Specificity (v0.2 dual-path).
    lambda_1 = 0.30 (reference), lambda_2 = 0.70 (utilization)"""
    LAMBDA_1, LAMBDA_2 = 0.30, 0.70
    key_elements = task["key_evidence_elements"]
    threshold = get_threshold(task, calibration)
    r_score = sum(reference_match(reasoning, e, threshold)
                  for e in key_elements) / len(key_elements)
    u_score = sum(reference_match(reasoning, e, threshold)
                  and utilization_match(reasoning, e, grader)
                  for e in key_elements) / len(key_elements)
    return LAMBDA_1 * r_score + LAMBDA_2 * u_score

def score_ca(task, response, prev_confidence=None):
    """Dimension 3: Confidence Appropriateness.
    alpha = 2.0 (overconfidence), beta = 1.5 (under-confidence)"""
    ALPHA, BETA = 2.0, 1.5
    c = response["confidence"]
    c_low, c_high = task["appropriate_confidence_range"]
    if c_low <= c <= c_high: return 1.0
    elif c > c_high: return max(0, 1.0 - ALPHA * (c - c_high) / 100)
    else:            return max(0, 1.0 - BETA  * (c_low - c) / 100)

def score_ra(task, resp_t1, resp_t2):
    """Dimension 4: Revision Appropriateness. SEI family only.
    Weights: revision_correct 0.50, trigger 0.30, stability 0.20"""

def score_mei(task, response, calibration):
    """Dimension 5: Missing Element Identification.
    Uses Path A (reference presence) only. Returns F1 score."""`}</pre>
          </div>

          <div className="paper-code-block" style={{ marginTop: "14px" }}>
            <div className="paper-code-label">COMPOSITE SCORES + STABILITY</div>
            <pre>{`def compute_ecs(family, eja, rs, ca, ra=None, mei=None):
    """Epistemic Conduct Score, weighted composite."""
    if family == "sequential_evidence_integration":
        return 0.25*eja + 0.25*rs + 0.20*ca + 0.20*(ra or 0) + 0.10*(mei or 0)
    elif family in ("evidence_gap_detection", "premature_closure_resistance"):
        return 0.30*eja + 0.30*rs + 0.25*ca + 0.15*(mei or 0)
    else:
        return 0.35*eja + 0.35*rs + 0.30*ca

def compute_tds(eja, rs):
    """Theater Detection Score, diagnostic only."""
    return eja - rs

def compute_stability(runs, tasks):
    """Stability score via Shannon entropy across K repeated runs."""
    # For each task, compute entropy of judgment distribution across runs
    # Stability_i = 1.0 - (H_i / H_max)
    # Return mean(Stability_i) across all instances`}</pre>
          </div>

          <div className="paper-code-block" style={{ marginTop: "14px" }}>
            <div className="paper-code-label">MATCHER DRIFT MONITORING</div>
            <pre>{`def check_matcher_drift(current_rs_stats, baseline_rs_stats):
    """Monitor matcher calibration drift across evaluation cycles."""
    std_increase = (current_rs_stats["std"] - baseline_rs_stats["std"]) \
                   / baseline_rs_stats["std"]
    corr_drop = baseline_rs_stats["eja_correlation"] \
                - current_rs_stats["eja_correlation"]
    drift_detected = std_increase > 0.20 or corr_drop > 0.15
    return {
        "drift_detected": drift_detected,
        "std_increase_pct": round(std_increase * 100, 1),
        "correlation_drop": round(corr_drop, 3),
        "recommendation": "re-calibrate matcher" if drift_detected
                          else "no action"
    }`}</pre>
          </div>
        </div>
      </div>

      {/* ── WHERE HUMAN JUDGMENT IS REQUIRED ── */}
      <div className="paper-section">
        <div className="paper-section-num">12</div>
        <div>
          <div className="paper-section-title">Where Human Judgment Is Required</div>
          <div style={{ overflowX: "auto", marginTop: "16px" }}>
            <table className="paper-table">
              <thead>
                <tr><th>Step</th><th>Why Human Judgment</th><th>How Reliability Is Measured</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>Calibrating Path A matcher (RS, MEI)</td>
                  <td>Initial embedding threshold must be validated against human annotations of "does this reasoning reference this element?"</td>
                  <td>Cohen's kappa ≥ 0.75 on pilot set of 50+ instances per family, annotated by 2+ raters</td>
                </tr>
                <tr>
                  <td>Calibrating Path B contrastive grader (RS)</td>
                  <td>Contrastive grading prompt and model must be validated against human annotations of "uses vs. merely mentions"</td>
                  <td>85% agreement with human gold labels on calibration set of 50 contrastive pairs</td>
                </tr>
                <tr>
                  <td>Defining key evidence elements per task (RS)</td>
                  <td>Requires domain understanding to identify which evidence elements an ideal agent would reference and utilize</td>
                  <td>2 independent labelers per task; retain only elements both agree on</td>
                </tr>
                <tr>
                  <td>Defining utilization patterns per element (RS Path B)</td>
                  <td>Requires domain understanding to specify how each element would be functionally used by an ideal agent</td>
                  <td>Same protocol as key evidence elements</td>
                </tr>
                <tr>
                  <td>Defining missing element lists per task (MEI)</td>
                  <td>Requires domain understanding to enumerate what is absent from the evidence</td>
                  <td>Same protocol as key evidence elements</td>
                </tr>
                <tr>
                  <td>Defining appropriate confidence ranges per task (CA)</td>
                  <td>Requires normative judgment about what range reflects appropriate confidence</td>
                  <td>Ranges defined per evidence condition category, not per individual task; condition categories validated by 3+ raters</td>
                </tr>
                <tr>
                  <td>Reviewing TDS-flagged instances</td>
                  <td>Theater Detection Score flags instances for human review but does not auto-penalize</td>
                  <td>Flagged instances reviewed by 1 rater; disagreements tracked as calibration signal</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="paper-body" style={{ marginTop: "16px" }}>
            <p style={{ fontStyle: "italic", color: "var(--text-secondary)" }}>
              Design principle: Human judgment is concentrated in task construction and calibration, not in
              scoring execution. Once tasks are labeled, matchers are calibrated, and the contrastive grader
              is validated, the scoring pipeline runs fully automatically.
            </p>
          </div>
        </div>
      </div>

      {/* ── TAGS ── */}
      <div className="paper-section">
        <div className="paper-section-num">∅</div>
        <div>
          <div className="paper-section-title">Related Work</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "16px" }}>
            {["#AGI", "#benchmark", "#metacognition", "#scoring-framework", "#evaluation-design",
              "#epistemic-theater", "#GGIB", "#Kaggle", "#KL-divergence", "#computable-scoring",
              "#epistemic-capture", "#dual-path-matcher"].map(tag => (
              <span key={tag} className="proj-tag">{tag}</span>
            ))}
          </div>
          <div className="paper-body" style={{ marginTop: "20px" }}>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
              Depends on: GGIB Part 1 — Critical Analysis · GGIB Part 2 — Task Family Design<br />
              Informed by: Orchestrator_Epistemic_Capture_v2 · Metacognition-Benchmark-Critique · Metacognition-Benchmark-Synthesis-Report<br />
              Next: GGIB Part 4 — Human Baseline Design · GGIB Part 5 — Contamination Resistance
            </p>
          </div>
        </div>
      </div>

      <div className="paper-footer-note">
        Professor Bone Lab × Caroline Brooks · GGIB-M Part 3 of 6 · Draft 0.2 · March 2026 · Kaggle Competition: Measuring Progress Toward AGI
      </div>
    </div>
  );
}
