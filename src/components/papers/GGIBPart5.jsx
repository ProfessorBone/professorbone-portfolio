import "../../paper.css";
import "../../paper-ggib.css";

export default function GGIBPart5({ onBack }) {
  return (
    <div className="paper-wrap">
      <button className="paper-back" onClick={onBack}>← Back to Research</button>

      {/* ── HEADER ── */}
      <div className="paper-header">
        <div className="paper-lab-tag">GGIB-M · Part 5 of 6 · Professor Bone Lab × Caroline Brooks · Kaggle Competition</div>
        <h1 className="paper-title">Contamination Resistance and Gaming Defenses</h1>
        <p className="paper-subtitle">
          No single defense is sufficient. The defenses are layered so that defeating one
          does not defeat the others.
        </p>
        <div className="paper-meta-row">
          <div className="paper-meta-item"><span className="paper-meta-label">AUTHORS</span>Clarence Downs, Caroline Brooks</div>
          <div className="paper-meta-item"><span className="paper-meta-label">STATUS</span>Draft 0.3 — CCED adversarial hardening per C. Brooks full review</div>
          <div className="paper-meta-item"><span className="paper-meta-label">CREATED</span>March 18, 2026</div>
          <div className="paper-meta-item"><span className="paper-meta-label">REVISED</span>March 30, 2026</div>
        </div>
      </div>

      {/* ── THREAT MODEL ── */}
      <div className="paper-abstract">
        <div className="paper-abstract-label">THE THREAT MODEL</div>
        <p>Three categories of gaming threat, each requiring distinct defenses:</p>
        <div className="paper-callout" style={{ marginTop: "16px" }}>
          <div className="paper-callout-item">
            <span className="paper-callout-num">1</span>
            <div>
              <strong>Contamination.</strong> Task instances leak into training data. The model memorizes correct
              responses rather than demonstrating evidence-sensitive behavior.
            </div>
          </div>
          <div className="paper-callout-item">
            <span className="paper-callout-num">2</span>
            <div>
              <strong>Strategy exploitation.</strong> The model learns a surface-level behavioral strategy (always
              hedge, always revise, match output format) that scores well without processing evidence.
            </div>
          </div>
          <div className="paper-callout-item">
            <span className="paper-callout-num">3</span>
            <div>
              <strong>Scoring exploitation.</strong> The model learns the scoring system's structure and optimizes
              for the score function directly rather than for the underlying epistemic behavior.
            </div>
          </div>
        </div>
        <p style={{ marginTop: "16px", fontStyle: "italic", color: "var(--text-secondary)" }}>
          Strategy exploitation is the most dangerous for this benchmark specifically. On a performance benchmark,
          a model cannot fake the right answer. On a metacognition benchmark, a model can fake the right behavior
          because the behaviors being measured (hedging, refusing, revising) are conversational acts the model has
          already been trained to produce via RLHF. The defenses must be designed primarily against strategy
          exploitation, with contamination and scoring exploitation as secondary concerns.
        </p>
      </div>

      {/* ── SECTION 1: NOVEL TASK INSTANCES ── */}
      <div className="paper-section">
        <div className="paper-section-num">01</div>
        <div>
          <div className="paper-section-title">Making Task Instances Novel</div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">1.1 Procedural Generation With Parameterized Templates</div>
            <div className="paper-body">
              <p>
                Each task family uses a generation schema that separates structure from content. The structure
                defines the evidence condition and expected behavior. The content fills in domain-specific details
                that can be varied without changing the underlying epistemic task.
              </p>
            </div>
            <div style={{ overflowX: "auto", marginTop: "14px" }}>
              <table className="paper-table">
                <thead>
                  <tr><th>Parameter</th><th>Variation Range</th><th>Purpose</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Domain</td>
                    <td>Chemistry, physics, economics, geography, logic, scheduling, engineering, medical, cybersecurity, environmental</td>
                    <td>Prevents domain-specific memorization</td>
                  </tr>
                  <tr>
                    <td>Numeric values</td>
                    <td>Procedurally generated within realistic ranges</td>
                    <td>Prevents specific-value memorization</td>
                  </tr>
                  <tr>
                    <td>Entity names</td>
                    <td>Randomized (substances, companies, locations, people)</td>
                    <td>Prevents entity-based pattern matching</td>
                  </tr>
                  <tr>
                    <td>Evidence body length</td>
                    <td>Short (3–4 facts) to long (8–12 facts)</td>
                    <td>Prevents length-based heuristics</td>
                  </tr>
                  <tr>
                    <td>Distractor count</td>
                    <td>0–4 irrelevant facts included</td>
                    <td>Prevents distractor-count heuristics</td>
                  </tr>
                  <tr>
                    <td>Question phrasing</td>
                    <td>3–5 phrasings per question type</td>
                    <td>Prevents prompt-template matching</td>
                  </tr>
                  <tr>
                    <td>Evidence order</td>
                    <td>Randomized within each instance</td>
                    <td>Prevents position-based heuristics</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">1.2 Private Seeds, Public Schemas</div>
            <div className="paper-body">
              <p>
                The generation schemas are disclosed in the submission documentation (transparency for reviewers).
                The random seeds used to generate the actual evaluation instances are held private. This means:
              </p>
              <ul className="paper-list">
                <li>Anyone can inspect the generation logic and verify it produces valid tasks.</li>
                <li>No one can reconstruct the specific instances used for scoring.</li>
                <li>New evaluation sets can be generated at any time by drawing new seeds.</li>
              </ul>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">1.3 Benchmark Refresh Cycles</div>
            <div className="paper-body">
              <p>
                The evaluation set should be regenerated on a regular cycle (recommended: every 3–6 months
                after initial deployment). Each refresh uses the same generation schemas with new seeds,
                producing structurally equivalent but content-distinct instances. This prevents long-term
                contamination even if specific instances leak.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── SECTION 2: CONTAMINATION ── */}
      <div className="paper-section">
        <div className="paper-section-num">02</div>
        <div>
          <div className="paper-section-title">Reducing Contamination Through Procedural Generation</div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">2.1 Why Static Benchmarks Fail</div>
            <div className="paper-body">
              <p>Static benchmarks (fixed question sets published once) are vulnerable to two contamination vectors:</p>
              <ul className="paper-list">
                <li><strong>Direct leakage:</strong> The questions appear in training data, either through web scraping of benchmark documentation or through user interactions that include benchmark questions.</li>
                <li><strong>Indirect leakage:</strong> Models are fine-tuned on benchmark-adjacent data that teaches the specific patterns the benchmark tests.</li>
              </ul>
              <p>
                Procedural generation addresses direct leakage: if each evaluation instance is generated fresh
                from a seed, no specific instance exists in any training corpus. It partially addresses indirect
                leakage: the generation schemas are public, but the specific parameter combinations are not.
              </p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">2.2 Canary Tasks for Leak Detection</div>
            <div className="paper-body">
              <p>
                Include 10–20 "canary" instances in each evaluation set. These are instances with deliberately
                unusual parameter combinations that would be extremely unlikely to appear in any training corpus
                (e.g., a chemistry problem involving a fictitious element with a made-up name, or an economics
                scenario set in a nonexistent country).
              </p>
              <p>
                If a model performs anomalously well on canary tasks relative to standard tasks, it suggests the
                model has been exposed to the evaluation set. This is a post-hoc detection method, not a
                prevention method, but it provides an audit trail.
              </p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">2.3 Version-Controlled Instance Families</div>
            <div className="paper-body">
              <p>
                Each task instance belongs to a "family" of structurally equivalent instances. Family membership
                is defined by the evidence condition, the expected behavior, and the key evidence elements —
                not by the specific content. Within a family, instances share the same scoring logic but differ in
                surface content.
              </p>
              <p>
                A model that memorizes one instance cannot transfer that memorization to a different instance
                in the same family, because the content differs. But the benchmark can verify that performance
                is consistent across instances within a family — which is a contamination signal: if a model
                performs dramatically better on one instance than on structurally equivalent instances, it may
                have memorized that specific instance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── SECTION 3: HEDGE LANGUAGE ── */}
      <div className="paper-section">
        <div className="paper-section-num">03</div>
        <div>
          <div className="paper-section-title">Resisting Models Trained to Output Hedge Language</div>
          <div className="paper-body" style={{ marginTop: "8px" }}>
            <p style={{ fontStyle: "italic", color: "var(--cyan)", fontFamily: "var(--font-mono)", fontSize: "0.82rem", letterSpacing: "0.04em" }}>
              Primary gaming threat. RLHF-trained models already hedge, refuse, and express uncertainty as default behavior.
              A benchmark that rewards hedging is trivially gamed by any safety-trained model.
            </p>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">3.1 Sufficient-Evidence Control Tasks</div>
            <div className="paper-body">
              <p>
                Approximately 40% of task instances have "confident commitment" as the correct epistemic response.
                A model that hedges on everything accumulates penalties on these control tasks:
              </p>
              <ul className="paper-list">
                <li>EJA = 0 (wrong epistemic judgment: said "unanswerable" when evidence was sufficient)</li>
                <li>CA = 0 (confidence too low for the appropriate range)</li>
                <li>MEI = 0 (listed missing evidence when nothing was actually missing)</li>
              </ul>
              <p>
                The aggregate ECS score for a blanket hedger is structurally capped at approximately <strong>0.35–0.45</strong> across the full benchmark. This is by design.
              </p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">3.2 Specificity Requirements — RS and MEI Dimensions</div>
            <div className="paper-body">
              <p>
                From Part 3 (Formal Scoring Framework v0.2), Dimension 2 (Reasoning Specificity) uses a
                dual-path architecture that requires the model to both reference AND functionally utilize specific
                evidence elements. Reference alone scores at most RS = 0.30.
              </p>
              <p>
                A model that outputs ANSWERABLE: no with "There may not be enough information to determine
                the answer" scores RS = 0 and MEI = 0. A model that lists evidence elements without using them
                to drive its epistemic judgment scores at most RS = 0.30. Only models that functionally utilize
                evidence elements can score above RS = 0.30. <strong>The ECS score for format-correct theater is
                capped at approximately 0.55 or lower.</strong>
              </p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">3.3 Label-Swapped Controls</div>
            <div className="paper-body">
              <p>For each task family, include instances where the surface features suggest one evidence condition but the actual condition is different:</p>
              <ul className="paper-list">
                <li><strong>Looks insufficient, is sufficient:</strong> Short evidence body, informal phrasing, but all required facts are present. A hedge-default model will incorrectly refuse.</li>
                <li><strong>Looks sufficient, is insufficient:</strong> Long evidence body, authoritative sources, formal phrasing, but one critical fact is missing. A commit-default model will incorrectly answer.</li>
                <li><strong>Looks contradictory, is consistent:</strong> Multiple sources with different wording but no actual factual conflict. A contradiction-flagging model will incorrectly flag.</li>
                <li><strong>Looks consistent, is contradictory:</strong> Sources that agree on surface but contain a subtle numerical or logical inconsistency.</li>
              </ul>
              <p style={{ fontStyle: "italic", color: "var(--text-secondary)", fontSize: "0.85rem", marginTop: "10px" }}>
                Detection method: Compute EJA separately for label-swapped instances and standard instances.
                If EJA drops significantly on label-swapped instances, the model is using surface heuristics
                rather than evidence processing.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── SECTION 4: INDISCRIMINATE REFUSAL ── */}
      <div className="paper-section">
        <div className="paper-section-num">04</div>
        <div>
          <div className="paper-section-title">Detecting Indiscriminate Refusal</div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">4.1 The Indiscriminate Hedging Penalty (IHP)</div>
            <div className="paper-body">
              <p>Compute the model's refusal/hedging rate on sufficient-evidence control tasks specifically:</p>
            </div>
            <div className="paper-code-block" style={{ marginTop: "14px" }}>
              <div className="paper-code-label">IHP FORMULA</div>
              <pre>{`HedgeRate_sufficient = (number of sufficient-evidence tasks where
                         model hedged or refused)
                       / (total number of sufficient-evidence tasks)

IHP = max(0, HedgeRate_sufficient - tau)

Where tau is calibrated from the human baseline:
  Set tau at the 75th percentile of human refusal rate on
  sufficient-evidence tasks.

This means the model is allowed to refuse at a rate up to the
upper quartile of human refusal behavior before penalties apply.`}</pre>
            </div>
            <div className="paper-body" style={{ marginTop: "12px" }}>
              <p>
                IHP is a model-level penalty reported alongside per-task ECS scores. It does not modify
                individual task scores but provides a diagnostic signal that the model's hedging behavior
                is evidence-insensitive.
              </p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">4.2 Cross-Condition Consistency Analysis</div>
            <div className="paper-body">
              <p>
                For each model, compute the distribution of epistemic judgments separately for each evidence
                condition: sufficient evidence, insufficient evidence, contradictory evidence, misleading abundance,
                non-diagnostic new evidence.
              </p>
              <p>
                An evidence-sensitive model should show different judgment distributions across conditions.
                An indiscriminate model shows the same distribution regardless of condition.
              </p>
              <p>
                <strong>Detection metric:</strong> Chi-squared test for independence between evidence condition
                and epistemic judgment distribution. A non-significant chi-squared indicates the model's judgments
                are not evidence-sensitive.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── SECTION 5: FORMAT COMPLIANCE ── */}
      <div className="paper-section">
        <div className="paper-section-num">05</div>
        <div>
          <div className="paper-section-title">Detecting Format Compliance Without Evidence Sensitivity</div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">5.1 The Core Problem</div>
            <div className="paper-body">
              <p>
                A model can learn the benchmark's output format and produce structurally correct responses
                without processing the evidence. This is the deepest form of epistemic theater: the model has
                learned that "when the format asks for ANSWERABLE, CONFIDENCE, REASONING, MISSING,
                the correct pattern is..."
              </p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">5.2 The Theater Detection Score (TDS)</div>
            <div className="paper-body">
              <p>
                From Part 3, the TDS = EJA − RS metric directly targets this. A model with high EJA (correct
                categorical judgments) but low RS (non-specific reasoning) is producing format-correct theater.
                TDS &gt; 0.2 flags this pattern.
              </p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">5.3 Evidence-Element Perturbation Tests</div>
            <div className="paper-body">
              <p>For a subset of task instances, create perturbation variants where:</p>
              <ul className="paper-list">
                <li>One key evidence element is changed (different number, different substance, different location) but the evidence condition remains the same.</li>
                <li>The expected behavior is identical, but the specific evidence elements that should appear in the reasoning are different.</li>
              </ul>
              <p>
                If the model's REASONING field is identical or near-identical across perturbation variants (because
                it is producing template reasoning rather than evidence-specific reasoning), the perturbation test
                detects this.
              </p>
              <p style={{ fontStyle: "italic", color: "var(--text-secondary)", fontSize: "0.85rem" }}>
                Detection method: Compute text similarity (ROUGE-L or cosine similarity of sentence embeddings)
                between REASONING responses on perturbation pairs. High similarity (&gt; 0.85) on pairs with
                different evidence content suggests template reasoning.
              </p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">5.4 Adversarial Baseline Battery</div>
            <div className="paper-body">
              <p>Before deployment, run the benchmark against seven adversarial baselines. Each baseline implements a single strategy and should score poorly in distinct, predictable ways:</p>
            </div>
            <div style={{ overflowX: "auto", marginTop: "14px" }}>
              <table className="paper-table">
                <thead>
                  <tr><th>Baseline</th><th>Strategy</th><th>Expected Failure Pattern</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>AlwaysAnswer</strong></td>
                    <td>Answers every task with high confidence</td>
                    <td>Fails on insufficient/contradictory tasks (EJA = 0, CA = 0, high IHP)</td>
                  </tr>
                  <tr>
                    <td><strong>AlwaysRefuse</strong></td>
                    <td>Refuses every task</td>
                    <td>Fails on sufficient-evidence controls (EJA = 0, high IHP)</td>
                  </tr>
                  <tr>
                    <td><strong>AlwaysConditional</strong></td>
                    <td>Gives conditional answers on everything</td>
                    <td>Fails on sufficient-evidence tasks and clear insufficient tasks</td>
                  </tr>
                  <tr>
                    <td><strong>AlwaysRevise</strong></td>
                    <td>Revises whenever new evidence appears</td>
                    <td>Fails on confirming and non-diagnostic evidence in SEI (RA low)</td>
                  </tr>
                  <tr>
                    <td><strong>NeverRevise</strong></td>
                    <td>Never revises regardless of new evidence</td>
                    <td>Fails on disconfirming evidence in SEI (RA low)</td>
                  </tr>
                  <tr>
                    <td><strong>KeywordHedge</strong></td>
                    <td>Outputs hedge language on every task</td>
                    <td>Fails on RS (no evidence utilization in reasoning), fails on sufficient controls</td>
                  </tr>
                  <tr>
                    <td><strong>RandomSupport</strong></td>
                    <td>Cites random evidence IDs in support fields</td>
                    <td>Fails on RS (wrong elements referenced, no functional utilization) and MEI (wrong missing elements)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="paper-body" style={{ marginTop: "12px" }}>
              <p>
                <strong>Validation criterion:</strong> Each adversarial baseline must score below 0.40 ECS overall.
                If any baseline scores above 0.40, the benchmark has a gaming vulnerability that must be
                addressed before deployment.
              </p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">5.5 Surface Feature Predictability Audit</div>
            <div className="paper-body">
              <p>Before deployment, run a logistic regression predicting the correct epistemic response from surface features only:</p>
              <ul className="paper-list">
                <li>Task text length</li>
                <li>Number of evidence elements</li>
                <li>Domain category</li>
                <li>Presence of authority cues (journal names, titles)</li>
                <li>Presence of numeric values</li>
                <li>Number of sources cited</li>
              </ul>
              <p>
                <strong>If the regression achieves accuracy above 60%</strong> (well above the ~40%/35%/25% base
                rate distribution), surface features are leaking the correct response and the generation schema
                needs revision.
              </p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">5.6 CCED Surface-Matched Adversarial Pairs</div>
            <div className="paper-body">
              <p style={{ fontSize: "0.82rem", color: "var(--cyan)", fontFamily: "var(--font-mono)", letterSpacing: "0.04em" }}>
                Added per C. Brooks full review — CCED is the most exposed family to mimicry.
              </p>
              <p style={{ marginTop: "12px" }}>
                At least 20% of CCED instances are surface-matched adversarial pairs (see Part 2 v0.3, CCED
                Section I for full specification). Three pair types:
              </p>
            </div>
            <div className="paper-callout" style={{ marginTop: "14px" }}>
              <div className="paper-callout-item">
                <span className="paper-callout-num">A</span>
                <div>
                  <strong>Identical surface features, different evidence quality.</strong> Tests whether confidence
                  tracks evidence or surface cues. Expected: large within-pair confidence delta.
                </div>
              </div>
              <div className="paper-callout-item">
                <span className="paper-callout-num">B</span>
                <div>
                  <strong>Opposite surface features, identical evidence quality.</strong> Tests whether confidence
                  tracks formality or evidence. Expected: near-zero within-pair delta.
                </div>
              </div>
              <div className="paper-callout-item">
                <span className="paper-callout-num">C</span>
                <div>
                  <strong>Identical evidence quality, different claim truth.</strong> Tests whether confidence tracks
                  claim truth or evidence. Expected: near-zero within-pair delta.
                </div>
              </div>
            </div>
            <div className="paper-body" style={{ marginTop: "12px" }}>
              <p style={{ fontStyle: "italic", color: "var(--text-secondary)", fontSize: "0.85rem" }}>
                Validation criterion: Compute within-pair confidence deltas. If deltas are large on Pair B or C
                (where evidence quality is constant), the model is using the wrong signal.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── SECTION 6: PRE-DEPLOYMENT CHECKLIST ── */}
      <div className="paper-section">
        <div className="paper-section-num">06</div>
        <div>
          <div className="paper-section-title">Pre-Deployment Adversarial Validation Checklist</div>
          <div className="paper-body">
            <p>Before the benchmark is used for any evaluation, all of the following must be confirmed:</p>
          </div>
          <div style={{ marginTop: "16px" }}>
            {[
              "All seven adversarial baselines score below 0.40 ECS",
              "Surface feature regression accuracy is below 60%",
              "Label-swapped controls show no significant EJA difference from standard instances for the ideal epistemic agent",
              "Canary tasks are included and their performance is logged for post-hoc leak detection",
              "Sufficient-evidence controls comprise at least 35% of all task instances",
              "The IHP threshold (tau) is calibrated from human baseline data",
              "Perturbation variants exist for at least 20% of task instances",
              "The TDS metric has been validated on worked examples (see GGIB Part 3 — Formal Scoring Framework)",
              "CCED surface-matched adversarial pairs comprise at least 20% of CCED instances",
              "Generation seeds for the evaluation set are stored securely and not included in any public documentation",
            ].map((item, i) => (
              <div key={i} style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "14px",
                padding: "12px 0",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
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
                  marginTop: "2px",
                }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.65" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SUMMARY: DEFENSE LAYERING ── */}
      <div className="paper-section">
        <div className="paper-section-num">↓</div>
        <div>
          <div className="paper-section-title">Summary: Defense Layering</div>
          <div style={{ overflowX: "auto", marginTop: "16px" }}>
            <table className="paper-table">
              <thead>
                <tr><th>Threat</th><th>Primary Defense</th><th>Secondary Defense</th><th>Detection Method</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Contamination (memorization)</strong></td>
                  <td>Procedural generation with private seeds</td>
                  <td>Canary tasks, benchmark refresh cycles</td>
                  <td>Cross-instance consistency within families</td>
                </tr>
                <tr>
                  <td><strong>Blanket hedging</strong></td>
                  <td>Sufficient-evidence controls (~40% of tasks)</td>
                  <td>IHP penalty</td>
                  <td>HedgeRate on control tasks</td>
                </tr>
                <tr>
                  <td><strong>Epistemic theater (format compliance)</strong></td>
                  <td>RS and MEI specificity requirements</td>
                  <td>TDS diagnostic</td>
                  <td>TDS &gt; 0.2 flags theater</td>
                </tr>
                <tr>
                  <td><strong>Surface heuristics</strong></td>
                  <td>Label-swapped controls</td>
                  <td>Surface feature predictability audit</td>
                  <td>EJA drop on label-swapped tasks</td>
                </tr>
                <tr>
                  <td><strong>Template reasoning</strong></td>
                  <td>Evidence-element perturbation tests</td>
                  <td>Cross-perturbation REASONING similarity</td>
                  <td>ROUGE-L &gt; 0.85 on perturbation pairs</td>
                </tr>
                <tr>
                  <td><strong>Indiscriminate refusal</strong></td>
                  <td>Sufficient-evidence controls</td>
                  <td>Cross-condition consistency analysis</td>
                  <td>Chi-squared test for evidence sensitivity</td>
                </tr>
                <tr>
                  <td><strong>Performative revision</strong></td>
                  <td>Non-diagnostic evidence conditions in SEI</td>
                  <td>Confirming evidence conditions</td>
                  <td>RA breakdown by evidence type</td>
                </tr>
                <tr>
                  <td><strong>Confidence mimicry (CCED)</strong></td>
                  <td>Surface-matched adversarial pairs</td>
                  <td>Prior knowledge contamination checks</td>
                  <td>Within-pair confidence delta analysis</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="paper-body" style={{ marginTop: "20px" }}>
            <blockquote className="paper-blockquote">
              No single defense is sufficient. The defenses are layered so that defeating one does not
              defeat the others. A model that passes all eight defense layers is demonstrating behavior that
              is, at minimum, very difficult to produce without evidence-sensitive processing.
            </blockquote>
          </div>
        </div>
      </div>

      {/* ── TAGS ── */}
      <div className="paper-section">
        <div className="paper-section-num">∅</div>
        <div>
          <div className="paper-section-title">Related Work</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "16px" }}>
            {["#AGI", "#benchmark", "#metacognition", "#adversarial-validation",
              "#contamination-resistance", "#gaming-defense", "#epistemic-theater",
              "#GGIB", "#Kaggle", "#competition"].map(tag => (
              <span key={tag} className="proj-tag">{tag}</span>
            ))}
          </div>
          <div className="paper-body" style={{ marginTop: "20px" }}>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
              Depends on: GGIB Parts 1–4<br />
              Related: Orchestrator_Epistemic_Capture_v2 · Metacognition-Benchmark-Critique<br />
              Next: GGIB Part 6 — Kaggle-Ready Deliverables
            </p>
          </div>
        </div>
      </div>

      <div className="paper-footer-note">
        Professor Bone Lab × Caroline Brooks · GGIB-M Part 5 of 6 · Draft 0.3 · March 2026 · Kaggle Competition: Measuring Progress Toward AGI
      </div>
    </div>
  );
}
