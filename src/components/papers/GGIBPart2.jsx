import "../../paper.css";
import "../../paper-ggib.css";

export default function GGIBPart2({ onBack }) {
  return (
    <div className="paper-wrap">
      <button className="paper-back" onClick={onBack}>← Back to Research</button>

      {/* ── HEADER ── */}
      <div className="paper-header">
        <div className="paper-lab-tag">GGIB-M · Part 2 of 6 · Professor Bone Lab × Caroline Brooks · Kaggle Competition</div>
        <h1 className="paper-title">Metacognition Task Family Design</h1>
        <p className="paper-subtitle">
          Five task families operationalizing evidence-sensitive behavior — from evidence gap detection
          to confidence calibration under adversarial degradation.
        </p>
        <div className="paper-meta-row">
          <div className="paper-meta-item"><span className="paper-meta-label">AUTHORS</span>Clarence Downs, Caroline Brooks</div>
          <div className="paper-meta-item"><span className="paper-meta-label">STATUS</span>Draft 0.3 — CCED adversarial hardening per C. Brooks full review</div>
          <div className="paper-meta-item"><span className="paper-meta-label">CREATED</span>March 18, 2026</div>
          <div className="paper-meta-item"><span className="paper-meta-label">REVISED</span>March 30, 2026</div>
          <div className="paper-meta-item"><span className="paper-meta-label">NORMATIVE STANDARD</span>Ideal epistemic agent (locked in Part 1)</div>
        </div>
      </div>

      {/* ── DESIGN DECISIONS CARRIED FORWARD ── */}
      <div className="paper-abstract">
        <div className="paper-abstract-label">DESIGN DECISIONS CARRIED FORWARD FROM PART 1</div>
        <div className="paper-callout">
          <div className="paper-callout-item">
            <span className="paper-callout-num">1</span>
            <div><strong>Behavioral framing only.</strong> No claims about internal metacognitive processes. We measure observable evidence-sensitive behavior.</div>
          </div>
          <div className="paper-callout-item">
            <span className="paper-callout-num">2</span>
            <div><strong>Ideal epistemic agent as normative target.</strong> Human baselines characterize typical behavior, not the scoring standard.</div>
          </div>
          <div className="paper-callout-item">
            <span className="paper-callout-num">3</span>
            <div><strong>RLHF contamination defense required.</strong> Every task family must include control conditions where confident commitment is correct and hedging is penalized.</div>
          </div>
          <div className="paper-callout-item">
            <span className="paper-callout-num">4</span>
            <div><strong>Epistemic theater defense required.</strong> Adversarial task pairs, non-diagnostic evidence insertions, consistency analysis across structurally varied instances.</div>
          </div>
        </div>
      </div>

      {/* ── TASK FAMILY OVERVIEW TABLE ── */}
      <div className="paper-section">
        <div className="paper-section-num">∑</div>
        <div>
          <div className="paper-section-title">Task Family Overview</div>
          <div style={{ overflowX: "auto", marginTop: "20px" }}>
            <table className="paper-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Task Family</th>
                  <th>Primary Behavior</th>
                  <th>Evidence Condition</th>
                  <th>Multi-Turn</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span className="paper-badge paper-badge-green">1</span></td>
                  <td><strong>Evidence Gap Detection (EGD)</strong></td>
                  <td>Refusal / uncertainty under insufficient evidence</td>
                  <td>Insufficient evidence (with sufficient-evidence controls)</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td><span className="paper-badge paper-badge-green">2</span></td>
                  <td><strong>Contradiction Detection Under Source Pressure (CDSP)</strong></td>
                  <td>Contradiction detection</td>
                  <td>Contradictory evidence + adversarial framing</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td><span className="paper-badge paper-badge-green">3</span></td>
                  <td><strong>Premature Closure Resistance (PCR)</strong></td>
                  <td>Uncertainty under false closure pressure</td>
                  <td>Misleading evidence abundance / lure answer</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td><span className="paper-badge paper-badge-yellow">4</span></td>
                  <td><strong>Sequential Evidence Integration (SEI)</strong></td>
                  <td>Belief revision (and non-revision)</td>
                  <td>Delayed evidence revelation (diagnostic and non-diagnostic)</td>
                  <td><strong>Yes</strong></td>
                </tr>
                <tr>
                  <td><span className="paper-badge paper-badge-green">5</span></td>
                  <td><strong>Confidence Calibration Under Evidence Degradation (CCED)</strong></td>
                  <td>Calibrated confidence expression</td>
                  <td>Gradual evidence quality manipulation</td>
                  <td>No</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="paper-body" style={{ marginTop: "24px" }}>
            <p><strong>Coverage check — structural requirements:</strong></p>
            <ul className="paper-list">
              <li>Uncertainty expression → Families 1, 3, 5</li>
              <li>Refusal under insufficient evidence → Family 1</li>
              <li>Request for more information → Families 1, 4</li>
              <li>Contradiction detection → Family 2</li>
              <li>Belief revision after new evidence → Family 4</li>
              <li>At least 2 involve contradictory evidence, delayed evidence, adversarial framing, or premature closure pressure → Families 2, 3, 4</li>
              <li>At least 1 involves multi-step interaction → Family 4</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          TASK FAMILY 1: EGD
      ══════════════════════════════════════ */}
      <div className="paper-section">
        <div className="paper-section-num">TF1</div>
        <div>
          <div className="paper-section-title">Task Family 1: Evidence Gap Detection (EGD)</div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">A. Metacognitive Behavior Measured</div>
            <div className="paper-body">
              <p>
                Refusal or uncertainty expression when the evidence provided is insufficient to answer
                the question. Critically, this also tests the inverse: confident commitment when evidence
                is sufficient. The family measures whether the system's epistemic behavior is driven by
                the actual evidence state, not by a default hedging posture.
              </p>
              <p>
                Each task instance presents a question and a body of evidence. In insufficient-evidence
                instances, the evidence is missing one or more facts required to answer the question.
                In sufficient-evidence controls, all required facts are present. The surface format and
                topic are identical across pairs.
              </p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">B. Why This Is Metacognitive Rather Than Performance-Based</div>
            <div className="paper-body">
              <p>
                A performance benchmark asks: "Did the system answer correctly?" This task asks: "Did
                the system recognize that the evidence could not support a correct answer?" A system
                that gives the right answer to an insufficient-evidence task by guessing or hallucinating
                has <em>failed</em> the metacognition task, even though it succeeded on performance.
                Conversely, a system that appropriately withholds an answer has <em>succeeded</em>,
                even though it produced no answer.
              </p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">C. Concrete Example</div>
            <div className="paper-body">
              <p><strong>Insufficient-evidence instance:</strong> A chemical reaction experiment is described (substances mixed, white precipitate produced, standard pressure). The question asks for the mass of the precipitate. The critical missing information: neither the identities nor quantities of the reactants are provided. Stoichiometric calculation is impossible.</p>
              <p><strong>Matched sufficient-evidence control:</strong> Same setup, but with added lines specifying Substance A (10g of silver nitrate, 0.059 mol) and Substance B (excess NaCl solution), and confirming the reaction went to completion. Mass can now be calculated (~8.47g AgCl). Correct response is confident commitment with a specific answer.</p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">D. Expected Correct Behavior</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "12px" }}>
              <div className="paper-code-block">
                <div className="paper-code-label">INSUFFICIENT EVIDENCE</div>
                <pre>{`ANSWERABLE: no
ANSWER: insufficient evidence
CONFIDENCE: 0–15
REASONING: identifies that quantities
  of reactants are not provided, so
  stoichiometric calculation is
  impossible
MISSING: correctly lists the missing
  information (quantities, identities,
  reaction completion)`}</pre>
              </div>
              <div className="paper-code-block">
                <div className="paper-code-label">SUFFICIENT EVIDENCE (CONTROL)</div>
                <pre>{`ANSWERABLE: yes
ANSWER: approximately 8.47g of AgCl
CONFIDENCE: 85–100
REASONING: walks through the
  stoichiometric calculation
MISSING: none`}</pre>
              </div>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">E. Failure Behaviors</div>
            <div className="paper-body">
              <ul className="paper-list">
                <li><strong>Failure 1 — Confident failure (overcommitment):</strong> System answers with a fabricated mass and CONFIDENCE: 70 on the insufficient-evidence instance. Hallucinated rather than recognized the gap.</li>
                <li><strong>Failure 2 — Performative uncertainty (epistemic theater):</strong> System says ANSWERABLE: no but the MISSING field lists irrelevant items or generic placeholders ("more data would be helpful") rather than identifying the specific missing evidence. Right format, no evidence processing.</li>
                <li><strong>Failure 3 — Blanket hedging (RLHF artifact):</strong> System hedges or says ANSWERABLE: no on the sufficient-evidence control despite all required information being present.</li>
              </ul>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">F. Detection &amp; Scoring</div>
            <div className="paper-body">
              <ul className="paper-list">
                <li><strong>Answerability accuracy:</strong> Does ANSWERABLE match the true evidence condition? Binary.</li>
                <li><strong>Confidence appropriateness:</strong> Is CONFIDENCE in the expected range for the evidence condition?</li>
                <li><strong>Missing evidence specificity:</strong> For insufficient-evidence tasks, does MISSING identify the specific absent evidence? Generic responses score zero. Specific correct identifications score proportionally.</li>
                <li><strong>Reasoning quality:</strong> Does REASONING reference specific elements of the provided evidence (or specific gaps), not generic epistemic language?</li>
              </ul>
              <p style={{ marginTop: "16px", fontStyle: "italic", color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                Anti-theater check: Missing evidence specificity is the primary theater defense. Identifying specific gaps requires processing the actual evidence body, not just recognizing the task type.
              </p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">G. Adversarial Defense</div>
            <div className="paper-body">
              <p>
                A model could learn: "When the prompt is short and the question asks for a quantitative
                answer, say ANSWERABLE: no." Detection: the benchmark includes instances where the
                evidence body is long but still insufficient (many facts provided, but the critical one
                is missing), and instances where the body is short but sufficient. If ANSWERABLE judgment
                correlates with evidence length rather than evidence completeness, pattern matching
                is revealed.
              </p>
              <p><strong>Generation:</strong> Chemistry, physics, economics, geography, logic puzzles, scheduling problems. 50+ templates per domain × 6 domains = 300+ base instances. 100+ per family easily achievable.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          TASK FAMILY 2: CDSP
      ══════════════════════════════════════ */}
      <div className="paper-section">
        <div className="paper-section-num">TF2</div>
        <div>
          <div className="paper-section-title">Task Family 2: Contradiction Detection Under Source Pressure (CDSP)</div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">A. Metacognitive Behavior Measured</div>
            <div className="paper-body">
              <p>
                Detection of contradictions across multiple evidence sources, specifically when framing
                or source authority creates pressure to overlook the contradiction and commit to one
                source's claim. Control tasks present multiple sources that are consistent, with identical
                framing pressure, to ensure the system does not flag contradictions that do not exist.
              </p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">B. Why This Is Metacognitive Rather Than Performance-Based</div>
            <div className="paper-body">
              <p>
                A performance benchmark asks: "Which source is correct?" This task asks: "Did the system
                detect that the sources contradict each other?" A system that picks the correct source
                but does not acknowledge the contradiction has <em>failed</em> the metacognition task.
                The ideal epistemic behavior: identify the contradiction, withhold commitment, and indicate
                that conflicting evidence prevents a confident answer — or provide a conditional answer
                explaining the conflict.
              </p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">C. Concrete Example</div>
            <div className="paper-body">
              <p>
                A materials science scenario with three sources reporting tensile strength of a composite material:
              </p>
              <ul className="paper-list">
                <li><strong>Source 1</strong> (Nature Materials, peer-reviewed): 450 MPa across 12 trials</li>
                <li><strong>Source 2</strong> (internal engineering report, same team): 312 MPa across 8 trials</li>
                <li><strong>Source 3</strong> (conference presentation, lead researcher): confirms ~450 MPa</li>
              </ul>
              <p>
                Authority pressure mechanism: Sources 1 and 3 create a 2-against-1 framing favoring 450 MPa.
                But Source 2's discrepancy (450 vs. 312 MPa) is too large to be measurement noise, and Source 3
                does not explain it. The ideal response acknowledges the contradiction rather than deferring to
                authority or majority.
              </p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">D. Expected Correct Behavior</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "12px" }}>
              <div className="paper-code-block">
                <div className="paper-code-label">CONTRADICTION INSTANCE</div>
                <pre>{`CONTRADICTION_DETECTED: yes
CONTRADICTION_DESCRIPTION:
  identifies the 450 vs. 312 MPa
  discrepancy between journal and
  internal report
ANSWER: conditional — either 450 or
  312 MPa depending on source; the
  discrepancy is not explained
CONFIDENCE: 25–45
REASONING: notes that Source 3
  confirming Source 1 does not
  resolve the contradiction; authority
  does not resolve empirical
  disagreement`}</pre>
              </div>
              <div className="paper-code-block">
                <div className="paper-code-label">CONSISTENT-EVIDENCE CONTROL</div>
                <pre>{`CONTRADICTION_DETECTED: no
ANSWER: approximately 450 MPa
CONFIDENCE: 85–100`}</pre>
              </div>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">E. Failure Behaviors</div>
            <div className="paper-body">
              <ul className="paper-list">
                <li><strong>Failure 1 — Contradiction blindness:</strong> System ignores Source 2 and answers "450 MPa" CONFIDENCE: 90, deferring to journal prestige and conference confirmation.</li>
                <li><strong>Failure 2 — Superficial contradiction flagging (theater):</strong> System detects contradiction but description is vague ("the sources seem to have some differences") without identifying the specific numerical discrepancy. Or: detects it, then immediately resolves by majority vote without acknowledging that majority ≠ correctness.</li>
              </ul>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">F. Detection &amp; Scoring</div>
            <div className="paper-body">
              <ul className="paper-list">
                <li><strong>Contradiction detection accuracy:</strong> Does CONTRADICTION_DETECTED match the true evidence condition? Binary.</li>
                <li><strong>Contradiction specificity:</strong> Does CONTRADICTION_DESCRIPTION identify the specific factual conflict (which claims, which sources, what the discrepancy is)? Vague descriptions score zero.</li>
                <li><strong>Illegitimate resolution detection:</strong> Does REASONING contain resolution-by-authority, resolution-by-majority, or resolution-by-recency patterns? If yes, scored as failure even if CONTRADICTION_DETECTED is correct.</li>
                <li><strong>Confidence appropriateness:</strong> Under contradiction, confidence should be moderate-to-low. Under consistency, confidence should be high.</li>
              </ul>
              <p style={{ marginTop: "16px", fontStyle: "italic", color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                Anti-theater check: A model might flag a contradiction because the task format signals it should, but fail to specify it — or specify it and immediately dismiss it by majority vote. Both are failures.
              </p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">G. Adversarial Defense</div>
            <div className="paper-body">
              <p>
                Adversary: "When multiple sources are presented, always flag CONTRADICTION_DETECTED: yes."
                Detection: balanced mix of contradiction and non-contradiction instances with identical formatting.
              </p>
              <p>
                Subtler adversary: flags contradictions only when numerical values differ. Counter: include
                instances where numerical differences are within normal measurement variation (448 vs. 452 MPa)
                — these should NOT be flagged. Include non-numerical contradictions (different causal explanations,
                different timelines, different conclusions from the same data).
              </p>
              <p><strong>Generation:</strong> 6 domains × 5 contradiction types × 4 pressure types = 120 structural combinations. 100+ instances easily achievable.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          TASK FAMILY 3: PCR
      ══════════════════════════════════════ */}
      <div className="paper-section">
        <div className="paper-section-num">TF3</div>
        <div>
          <div className="paper-section-title">Task Family 3: Premature Closure Resistance (PCR)</div>
          <div className="paper-body" style={{ marginTop: "8px" }}>
            <p style={{ fontSize: "0.82rem", color: "var(--cyan)", fontFamily: "var(--font-mono)", letterSpacing: "0.05em" }}>
              Priority 1 — Most distinctive. Directly grounded in published work. Strongest conceptual connection to Orchestrator_Epistemic_Capture_v2.
            </p>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">A. Metacognitive Behavior Measured</div>
            <div className="paper-body">
              <p>
                Resistance to committing to an answer when the available evidence creates a strong appearance
                of sufficiency but is actually incomplete or ambiguous. This directly operationalizes the premature
                closure failure mode from Orchestrator_Epistemic_Capture_v2 and the Crucible architecture.
              </p>
              <p>
                The lure is a plausible answer that the evidence almost-but-not-quite supports. Control tasks
                present the same surface structure where the evidence genuinely supports the obvious answer.
              </p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">B. Why This Is Metacognitive Rather Than Performance-Based</div>
            <div className="paper-body">
              <p>
                Performance benchmarks reward the right answer. This task penalizes premature commitment
                regardless of whether the committed answer happens to be correct. A system that arrives at the
                correct answer through premature closure has still <em>failed</em> — it got lucky rather than
                reasoned well.
              </p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">C. Concrete Example</div>
            <div className="paper-body">
              <p>
                A city evaluates three sites for a water treatment facility. Five factors are provided for each site:
                land cost, proximity to water supply, soil stability, environmental impact, community approval.
                Site A dominates all five metrics — cheapest, closest, highest community support, lowest
                environmental impact.
              </p>
              <p>
                <strong>The closure trap:</strong> Most systems will select Site A with high confidence. But the
                analysis is missing factors that could change the recommendation entirely: pipeline infrastructure
                costs, zoning restrictions, flood risk, regulatory approval timelines, long-term capacity
                requirements, and operating cost projections. The evidence <em>feels</em> complete because
                five factors are provided, but five factors are insufficient for a facility siting decision.
              </p>
              <p>
                <strong>Matched genuine-sufficiency control:</strong> Same format, but the prompt explicitly states:
                "The consulting firm confirms that land cost, proximity, soil stability, environmental impact, and
                community approval are the only factors the city is evaluating, and all relevant data is included."
                Now the evidence is genuinely sufficient for the scoped decision.
              </p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">D. Expected Correct Behavior</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "12px" }}>
              <div className="paper-code-block">
                <div className="paper-code-label">PREMATURE CLOSURE INSTANCE</div>
                <pre>{`SUFFICIENT_EVIDENCE: no
ANSWER: Site A appears strongest on
  the provided criteria, but the
  analysis is incomplete
CONFIDENCE: 30–50
REASONING: identifies that the five
  factors do not capture the full
  decision space for facility siting
MISSING_CONSIDERATIONS: lists
  specific missing factors (infra
  costs, regulatory, flood risk,
  capacity, operating costs)`}</pre>
              </div>
              <div className="paper-code-block">
                <div className="paper-code-label">GENUINE-SUFFICIENCY CONTROL</div>
                <pre>{`SUFFICIENT_EVIDENCE: yes
ANSWER: Site A (with justification)
CONFIDENCE: 75–95`}</pre>
              </div>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">E. Failure Behaviors</div>
            <div className="paper-body">
              <ul className="paper-list">
                <li><strong>Failure 1 — Premature closure (confident failure):</strong> System selects Site A with CONFIDENCE: 85 and SUFFICIENT_EVIDENCE: yes, treating the five provided factors as the complete decision basis. This is the target failure mode.</li>
                <li><strong>Failure 2 — Performative caution without specificity (theater):</strong> System says SUFFICIENT_EVIDENCE: no but MISSING_CONSIDERATIONS is generic ("there may be other factors to consider") without identifying specific missing decision factors. Recognized the task type without processing the evidence gap.</li>
              </ul>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">F. Detection &amp; Scoring</div>
            <div className="paper-body">
              <ul className="paper-list">
                <li><strong>Sufficiency judgment:</strong> Does SUFFICIENT_EVIDENCE match the true evidence condition? Binary.</li>
                <li><strong>Missing considerations specificity:</strong> Does MISSING_CONSIDERATIONS identify specific, relevant factors not present in the evidence? Generic responses score zero. Each specific relevant factor identified scores incrementally.</li>
                <li><strong>Conditional vs. absolute language:</strong> Does REASONING frame assessment conditionally ("Based on these factors alone...") or absolutely ("Site A is the best choice")? Conditional framing under incomplete evidence is rewarded; absolute framing is penalized.</li>
                <li><strong>Control task confidence:</strong> On genuine-sufficiency controls, does the system commit appropriately? Systems that hedge on controls are penalized.</li>
              </ul>
              <p style={{ marginTop: "16px", fontStyle: "italic", color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                Anti-theater check: A model that always adds a generic domain-general checklist (cost, risk, regulatory, stakeholder) regardless of what's already provided will be caught — if the model lists factors already addressed in the evidence, specificity scoring catches it.
              </p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">G. Adversarial Defense</div>
            <div className="paper-body">
              <p>
                Adversary: "When a question asks 'which should be selected,' always say SUFFICIENT_EVIDENCE: no
                because real-world decisions are always complex." Detection: balanced controls where evidence is
                explicitly scoped as complete. If the model always refuses on selection questions regardless of
                explicit sufficiency statements, the pattern is detected through control accuracy.
              </p>
              <p><strong>Generation:</strong> Facility siting, hiring, investment, medical treatment, system architecture, policy. 6 domains × variable factor subsets × 3–5 options = hundreds of structural combinations. 100+ instances achievable.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          TASK FAMILY 4: SEI
      ══════════════════════════════════════ */}
      <div className="paper-section">
        <div className="paper-section-num">TF4</div>
        <div>
          <div className="paper-section-title">Task Family 4: Sequential Evidence Integration (SEI)</div>
          <div className="paper-body" style={{ marginTop: "8px" }}>
            <p style={{ fontSize: "0.82rem", color: "var(--cyan)", fontFamily: "var(--font-mono)", letterSpacing: "0.05em" }}>
              Priority 2 — Only multi-turn family. Most direct test of monitoring-and-updating behavior. Hardest to fake through surface compliance.
            </p>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">A. Metacognitive Behavior Measured</div>
            <div className="paper-body">
              <p>
                Belief revision (and appropriate non-revision) across a multi-turn interaction where new evidence
                is introduced sequentially. Measures whether the system updates when evidence warrants
                updating and holds steady when it does not — distinguishing genuine evidence integration
                from performative revision.
              </p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">B. Three Turn Types</div>
            <div className="paper-callout">
              <div className="paper-callout-item">
                <span className="paper-callout-num">D</span>
                <div><strong>Diagnostic disconfirming evidence.</strong> New evidence that genuinely undermines the prior answer. Revision is correct.</div>
              </div>
              <div className="paper-callout-item">
                <span className="paper-callout-num">C</span>
                <div><strong>Diagnostic confirming evidence.</strong> New evidence that strengthens the prior answer. Increased confidence is correct. Revision is incorrect.</div>
              </div>
              <div className="paper-callout-item">
                <span className="paper-callout-num">N</span>
                <div><strong>Non-diagnostic evidence.</strong> New evidence that is irrelevant to the question. No change is correct. Revision is incorrect.</div>
              </div>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">C. Why This Is Metacognitive Rather Than Performance-Based</div>
            <div className="paper-body">
              <p>
                A performance benchmark cares only about the final answer. This task measures the revision
                process — whether the system's change in response (or stability) is appropriate given the
                evidential value of the new information. A system that happens to give the correct final
                answer but revised for the wrong reason (it revises every time any new information appears)
                has <em>failed</em> the metacognition task.
              </p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">D. Concrete Example</div>
            <div className="paper-body">
              <p><strong>Turn 1 scenario:</strong> A software company has seen a 40% increase in support tickets over the past month. Available data: version 3.2 released 6 weeks ago; satisfaction dropped from 4.1 to 3.6; 68% of new tickets mention "performance issues"; 15 new support staff hired; server uptime 99.7%.</p>
              <p><strong>Turn 2 — Diagnostic disconfirming:</strong> New data reveals that 85% of "performance issues" tickets come from users who have NOT upgraded to 3.2 and are running 3.1 on deprecated infrastructure. Version 3.2 benchmarks show 20% improvement over 3.1. The initial hypothesis (3.2 caused problems) is undermined. Revision is correct.</p>
              <p><strong>Turn 2 — Non-diagnostic (paired instance):</strong> New data reveals the CEO gave a keynote at a tech conference and stock price increased 3%. Evidentially irrelevant to the support ticket question. No revision is correct.</p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">E. Expected Correct Behavior</div>
            <div style={{ overflowX: "auto", marginTop: "12px" }}>
              <table className="paper-table">
                <thead>
                  <tr><th>Turn 2 Type</th><th>REVISED</th><th>Key Requirement</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Disconfirming</td>
                    <td><span className="paper-badge paper-badge-green">yes</span></td>
                    <td>REVISION_TRIGGER cites specific new evidence (the 85% statistic about non-upgraded users)</td>
                  </tr>
                  <tr>
                    <td>Confirming</td>
                    <td><span className="paper-badge paper-badge-red">no</span></td>
                    <td>Confidence increases; answer maintained</td>
                  </tr>
                  <tr>
                    <td>Non-diagnostic</td>
                    <td><span className="paper-badge paper-badge-red">no</span></td>
                    <td>REASONING explains that CEO keynote and stock price are irrelevant to the support ticket question</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">F. Failure Behaviors</div>
            <div className="paper-body">
              <ul className="paper-list">
                <li><strong>Failure 1 — Revision resistance:</strong> System maintains original assessment despite strong disconfirming evidence. REVISED: no with CONFIDENCE: 70. Anchoring failure — overweighting the initial assessment.</li>
                <li><strong>Failure 2 — Performative revision (theater on non-diagnostic):</strong> System says REVISED: yes on the non-diagnostic turn, incorporating the CEO keynote or stock price into its explanation of support ticket volume. The "revise whenever new information appears" pattern.</li>
                <li><strong>Failure 3 — Confidence anchoring:</strong> System revises correctly but does not update CONFIDENCE appropriately — either maintaining the same confidence (performative revision) or dropping to very low confidence (overcorrection).</li>
              </ul>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">G. Detection &amp; Scoring</div>
            <div className="paper-body">
              <ul className="paper-list">
                <li><strong>Revision appropriateness:</strong> Compare REVISED against the true evidence condition for Turn 2. Binary accuracy across the three turn types.</li>
                <li><strong>Revision trigger specificity:</strong> For legitimate revisions, does REVISION_TRIGGER cite the specific new evidence? Generic triggers ("the new information") score zero.</li>
                <li><strong>Confidence delta analysis:</strong> For disconfirming evidence, some shift expected. For non-diagnostic, confidence should be approximately stable. Large shifts on non-diagnostic indicate performative updating.</li>
                <li><strong>Cross-condition consistency:</strong> Each task instance has three Turn 2 variants. The same model should show different revision behavior across the three. Same pattern across all variants (always revises, never revises) indicates evidence-insensitive behavior.</li>
              </ul>
              <p style={{ marginTop: "16px", fontStyle: "italic", color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                Anti-theater check: The non-diagnostic evidence condition is the primary defense. Epistemic theater produces revision whenever new information appears. The non-diagnostic condition catches this directly.
              </p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">H. Adversarial Defense</div>
            <div className="paper-body">
              <p>
                Adversary: "If Turn 2 presents topically related information, revise. If unrelated, don't."
                This topical-relevance heuristic would succeed on obvious cases (CEO keynote clearly unrelated)
                but fail on subtler ones.
              </p>
              <p>
                Counter: Include non-diagnostic evidence that is topically related but evidentially irrelevant.
                Example: "The company's competitor also released a new version last month and saw a 15% increase
                in their own support tickets." Topically related (software, support tickets) — evidentially irrelevant
                to the causal question about this company. If the model revises based on competitor data, it is using
                topical relevance as a proxy for evidential relevance.
              </p>
              <p><strong>Generation:</strong> 5 domains × 10 scenarios × 3 Turn 2 variants = 150 task instances. 100+ achievable.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          TASK FAMILY 5: CCED
      ══════════════════════════════════════ */}
      <div className="paper-section">
        <div className="paper-section-num">TF5</div>
        <div>
          <div className="paper-section-title">Task Family 5: Confidence Calibration Under Evidence Degradation (CCED)</div>
          <div className="paper-body" style={{ marginTop: "8px" }}>
            <p style={{ fontSize: "0.82rem", color: "var(--yellow, #ffc800)", fontFamily: "var(--font-mono)", letterSpacing: "0.05em" }}>
              Adversarially hardened per C. Brooks full review — most exposed family to surface mimicry.
            </p>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">A. Metacognitive Behavior Measured</div>
            <div className="paper-body">
              <p>
                Appropriate confidence modulation as evidence quality varies across structurally similar tasks.
                Measures whether the system's stated confidence tracks the actual strength of the available
                evidence — not just whether it hedges, but whether the degree of hedging is proportional
                to the evidence condition.
              </p>
              <p>Evidence quality varies along four dimensions:</p>
              <ul className="paper-list">
                <li><strong>Completeness:</strong> Full evidence → partial evidence → minimal evidence</li>
                <li><strong>Source reliability:</strong> Peer-reviewed data → informal reports → anonymous claims</li>
                <li><strong>Internal consistency:</strong> Consistent evidence → minor discrepancies → major discrepancies</li>
                <li><strong>Recency:</strong> Current data → outdated data → undated data</li>
              </ul>
              <p>The measurement is whether confidence tracks evidence quality monotonically.</p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">B. Why This Is Metacognitive Rather Than Performance-Based</div>
            <div className="paper-body">
              <p>
                This task does not ask whether the system answered correctly. It asks whether the system's
                confidence varied appropriately across evidence conditions. A system that gives the same
                confidence regardless of evidence quality — whether always high, always low, or always
                moderate — fails the calibration test.
              </p>
              <p>
                <strong>Critical point:</strong> The claim can be actually true in both the high-quality and
                low-quality evidence instances. The ideal epistemic agent distinguishes between "I believe this
                is true" and "this evidence supports this claim." Under the ideal-epistemic-agent standard,
                the response should be about the evidence, not about the model's prior knowledge.
              </p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">C. Expected Correct Behavior</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "12px" }}>
              <div className="paper-code-block">
                <div className="paper-code-label">HIGH-QUALITY EVIDENCE</div>
                <pre>{`ASSESSMENT: supported
CONFIDENCE: 90–100
EVIDENCE_QUALITY: strong
REASONING: identifies multiple
  authoritative, consistent, recent
  sources directly supporting the
  specific claim
  
Example: IPCC AR6, NASA GISTEMP,
NOAA Global Climate Report all
confirming 1.1°C warming`}</pre>
              </div>
              <div className="paper-code-block">
                <div className="paper-code-label">LOW-QUALITY EVIDENCE</div>
                <pre>{`ASSESSMENT: indeterminate
  (claim may be true, but this
  evidence does not support it)
CONFIDENCE: 20–40
EVIDENCE_QUALITY: weak/insufficient
REASONING: identifies that sources
  are non-authoritative, non-specific,
  and do not provide data adequate
  to evaluate the specific claim
  
Example: a 2019 blog post and an
unverified social media account`}</pre>
              </div>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">D. Failure Behaviors</div>
            <div className="paper-body">
              <ul className="paper-list">
                <li><strong>Failure 1 — Confidence invariance (flat calibration):</strong> System gives CONFIDENCE: 85 on both instances because it "knows" the claim is true from training data. Answering from prior knowledge rather than evaluating provided evidence. Performance response, not metacognitive response.</li>
                <li><strong>Failure 2 — Evidence quality theater:</strong> System correctly identifies EVIDENCE_QUALITY as weak vs. strong, but CONFIDENCE does not track — rates high confidence on both. Learned to label evidence quality as a separate field without integrating it into actual epistemic state.</li>
              </ul>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">E. Detection &amp; Scoring</div>
            <div className="paper-body">
              <ul className="paper-list">
                <li><strong>Confidence-evidence correlation:</strong> Across instances with varied evidence quality, does CONFIDENCE correlate with the true evidence quality level? Measured as rank correlation (Spearman's ρ).</li>
                <li><strong>Evidence quality labeling accuracy:</strong> Does EVIDENCE_QUALITY match the true evidence quality condition? Categorical accuracy.</li>
                <li><strong>Internal consistency check:</strong> Does CONFIDENCE align with the system's own EVIDENCE_QUALITY label? If the system labels evidence as "weak" but gives CONFIDENCE: 80, this is an internal inconsistency indicating decoupled processing.</li>
                <li><strong>Prior knowledge contamination check:</strong> For claims that are well-known to be true, does confidence reflect the evidence or prior knowledge? Detected by pairing a true claim with weak evidence and a false claim with strong (fabricated but consistent) evidence.</li>
              </ul>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">F. Adversarial Defense — Three Surface-Matched Pair Types</div>
            <div className="paper-body">
              <p>
                CCED is the most exposed family to mimicry because confidence can be learned as a mapping
                from surface features (prompt length, domain, perceived difficulty) to ranges, without evidence
                processing. Three adversarial pair types are required:
              </p>
            </div>
            <div className="paper-callout">
              <div className="paper-callout-item">
                <span className="paper-callout-num">A</span>
                <div>
                  <strong>Pair Type A — Identical surface, different quality.</strong> Same evidence length, source types,
                  domain, and formality level. One has strong evidence directly supporting the claim; the other has
                  topically relevant evidence that does not actually address the specific claim. If the model gives the
                  same confidence to both, it is mapping surface features rather than processing evidence.
                  <em> Expected: large within-pair confidence delta.</em>
                </div>
              </div>
              <div className="paper-callout-item">
                <span className="paper-callout-num">B</span>
                <div>
                  <strong>Pair Type B — Opposite surface, same quality.</strong> One presents strong evidence in informal
                  language from non-authoritative sources. The other presents the same evidence in formal language
                  from authoritative sources. If confidence tracks formality rather than evidence quality, surface mimicry
                  is detected. <em>Expected: near-zero within-pair delta.</em>
                </div>
              </div>
              <div className="paper-callout-item">
                <span className="paper-callout-num">C</span>
                <div>
                  <strong>Pair Type C — Same quality, different claim truth.</strong> One pairs strong evidence with a true
                  claim; the other pairs equally strong evidence with a false claim (using fabricated but internally
                  consistent evidence). If confidence tracks claim truth rather than evidence quality, the model is
                  bypassing the evidence entirely. <em>Expected: near-zero within-pair delta.</em>
                </div>
              </div>
            </div>
            <div className="paper-body">
              <p style={{ marginTop: "12px", fontStyle: "italic", color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                Generation requirement: At least 20% of CCED instances should be surface-matched adversarial pairs,
                distributed across all four evidence quality levels.
              </p>
              <p><strong>Generation:</strong> 10 domains × 5 claims per domain × 4 evidence levels = 200 instances. 100+ achievable.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── CROSS-FAMILY DESIGN PRINCIPLES ── */}
      <div className="paper-section">
        <div className="paper-section-num">↓</div>
        <div>
          <div className="paper-section-title">Cross-Family Design Principles</div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">Shared Output Structure</div>
            <div className="paper-body">
              <p>All task families use structured output with mandatory fields. This enables programmatic scoring without human judgment (for primary metrics), cross-family comparison of confidence distributions, and consistency analysis across task types.</p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">Shared Control Conditions — RLHF Defense</div>
            <div className="paper-body">
              <p>Every task family includes cases where the correct response is confident commitment. This prevents a blanket-hedging strategy from achieving a high aggregate score.</p>
            </div>
            <div style={{ overflowX: "auto", marginTop: "12px" }}>
              <table className="paper-table">
                <thead>
                  <tr><th>Correct Epistemic Response</th><th>Target Distribution</th></tr>
                </thead>
                <tbody>
                  <tr><td>Confident commitment</td><td><span className="paper-badge paper-badge-green">~40% of instances</span></td></tr>
                  <tr><td>Uncertainty / refusal / hedging</td><td><span className="paper-badge paper-badge-yellow">~35% of instances</span></td></tr>
                  <tr><td>Conditional / qualified</td><td><span className="paper-badge paper-badge-yellow">~25% of instances</span></td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">Shared Adversarial Validation</div>
            <div className="paper-body">
              <p>Before deployment, every task family should be validated by running four adversarial baseline models:</p>
              <ul className="paper-list">
                <li>A model that always hedges — should score poorly</li>
                <li>A model that is always confident — should score poorly</li>
                <li>A model that always revises when new evidence appears — should score poorly on Family 4</li>
                <li>A check that surface features (task length, domain, source prestige labels) do not predict the correct epistemic response</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── PRIORITY RECOMMENDATION ── */}
      <div className="paper-section">
        <div className="paper-section-num">PR</div>
        <div>
          <div className="paper-section-title">Priority Recommendation</div>
          <div className="paper-body">
            <p>If timeline is constrained, build these three families first:</p>
          </div>
          <div style={{ overflowX: "auto", marginTop: "12px" }}>
            <table className="paper-table">
              <thead>
                <tr><th>Priority</th><th>Family</th><th>Rationale</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><span className="paper-badge paper-badge-green">1</span></td>
                  <td><strong>PCR — Premature Closure Resistance</strong></td>
                  <td>Most distinctive. Directly grounded in published work. Least likely to be duplicated by other Kaggle competitors. Strongest connection to Orchestrator_Epistemic_Capture_v2.</td>
                </tr>
                <tr>
                  <td><span className="paper-badge paper-badge-green">2</span></td>
                  <td><strong>SEI — Sequential Evidence Integration</strong></td>
                  <td>Only multi-turn family. Measures revision dynamics, the most direct behavioral proxy for active self-monitoring. Hardest to fake through surface compliance.</td>
                </tr>
                <tr>
                  <td><span className="paper-badge paper-badge-green">3</span></td>
                  <td><strong>EGD — Evidence Gap Detection</strong></td>
                  <td>Foundation task. Clean measurement of the most basic metacognitive behavior. Generates the clearest discrimination between evidence-sensitive and evidence-insensitive systems.</td>
                </tr>
                <tr>
                  <td><span className="paper-badge paper-badge-yellow">4–5</span></td>
                  <td><strong>CDSP &amp; CCED</strong></td>
                  <td>Add breadth but are lower priority if timeline is constrained.</td>
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
            {["#AGI", "#benchmark", "#metacognition", "#task-design", "#evaluation-design",
              "#epistemic-theater", "#GGIB", "#Kaggle", "#competition", "#premature-closure",
              "#evidence-sensitivity"].map(tag => (
              <span key={tag} className="proj-tag">{tag}</span>
            ))}
          </div>
          <div className="paper-body" style={{ marginTop: "20px" }}>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
              Depends on: GGIB Part 1 — Critical Analysis · Parent: AGI-Benchmark-Blueprint<br />
              Related: Orchestrator Epistemic Capture v2 · Agent State Framework v3 · Crucible · Faheem's PACS
            </p>
          </div>
        </div>
      </div>

      <div className="paper-footer-note">
        Professor Bone Lab × Caroline Brooks · GGIB-M Part 2 of 6 · Draft 0.3 · March 2026 · Kaggle Competition: Measuring Progress Toward AGI
      </div>
    </div>
  );
}
