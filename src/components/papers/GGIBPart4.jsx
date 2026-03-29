import "../../paper.css";
import "../../paper-ggib.css";

export default function GGIBPart4({ onBack }) {
  return (
    <div className="paper-wrap">
      <button className="paper-back" onClick={onBack}>← Back to Research</button>

      {/* ── HEADER ── */}
      <div className="paper-header">
        <div className="paper-lab-tag">GGIB-M · Part 4 of 6 · Professor Bone Lab × Caroline Brooks · Kaggle Competition</div>
        <h1 className="paper-title">Human Baseline Design</h1>
        <p className="paper-subtitle">
          The human baseline is descriptive, not normative. It characterizes how humans actually perform
          on these tasks — a reference distribution, not a target to match.
        </p>
        <div className="paper-meta-row">
          <div className="paper-meta-item"><span className="paper-meta-label">AUTHORS</span>Clarence Downs, Caroline Brooks</div>
          <div className="paper-meta-item"><span className="paper-meta-label">STATUS</span>Draft 0.2 — updated for Part 3 v0.2 dual-path matcher</div>
          <div className="paper-meta-item"><span className="paper-meta-label">CREATED</span>March 18, 2026</div>
          <div className="paper-meta-item"><span className="paper-meta-label">REVISED</span>March 23, 2026</div>
          <div className="paper-meta-item"><span className="paper-meta-label">NORMATIVE STANDARD</span>Ideal epistemic agent (locked in Part 1)</div>
        </div>
      </div>

      {/* ── WHY THE BASELINE MATTERS ── */}
      <div className="paper-abstract">
        <div className="paper-abstract-label">WHY THE HUMAN BASELINE MATTERS</div>
        <p>
          From GGIB Part 1, Section 5.6: <em>Humans are bad at metacognition. Dunning-Kruger effects,
          overconfidence bias, anchoring, sunk-cost reasoning, and motivated reasoning are all
          well-documented metacognitive failures in humans.</em> The benchmark must decide whether it is
          measuring "does the AI behave like a human?" or "does the AI behave like an idealized epistemic agent?"
        </p>
        <p style={{ marginTop: "12px" }}>
          <strong>The decision is locked: the normative standard is the ideal epistemic agent.</strong> The human
          baseline is descriptive, not normative. If the human baseline becomes the normative target, the benchmark
          rewards AI systems that replicate human metacognitive biases — overconfidence, anchoring, social
          desirability. That is the wrong goal.
        </p>
        <p style={{ marginTop: "12px", fontStyle: "italic", color: "var(--text-secondary)", fontSize: "0.9rem" }}>
          From Metacognition-Benchmark-Critique: Human epistemic expression varies enormously by culture,
          education, personality, domain expertise, and communication style. This part treats normalization
          across communication styles as a central design challenge, not a sub-bullet.
        </p>
      </div>

      {/* ── SECTION 1: PARTICIPANT SELECTION ── */}
      <div className="paper-section">
        <div className="paper-section-num">01</div>
        <div>
          <div className="paper-section-title">Participant Selection</div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">1.1 Sample Definition — Three Participant Groups</div>
            <div style={{ overflowX: "auto", marginTop: "14px" }}>
              <table className="paper-table">
                <thead>
                  <tr><th>Group</th><th>Label</th><th>Definition</th><th>Purpose</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span className="paper-badge paper-badge-green">A</span></td>
                    <td>General Adult</td>
                    <td>Adults 18–65, no domain-specific expertise required, basic literacy in the task language</td>
                    <td>Establishes floor-level human metacognitive behavior</td>
                  </tr>
                  <tr>
                    <td><span className="paper-badge paper-badge-yellow">B</span></td>
                    <td>Educated Adult</td>
                    <td>Bachelor's degree or equivalent, comfortable with structured reasoning tasks</td>
                    <td><strong>Primary comparison group for AI systems</strong></td>
                  </tr>
                  <tr>
                    <td><span className="paper-badge paper-badge-yellow">C</span></td>
                    <td>Tool-Assisted Adult</td>
                    <td>Same as Group B, but permitted to use calculator, search engine, notes, and documentation during the task</td>
                    <td>Controls for the fact that AI systems have tool access; comparing tool-using AI to unassisted humans distorts conclusions</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">1.2 Inclusion Criteria</div>
            <div className="paper-body">
              <p><strong>All groups:</strong></p>
              <ul className="paper-list">
                <li>Age 18–65</li>
                <li>Fluent in the task administration language (English for V1)</li>
                <li>No diagnosed cognitive impairments affecting reasoning or reading comprehension</li>
                <li>Able to complete a 60–90 minute task session</li>
                <li>No prior exposure to the specific benchmark tasks</li>
              </ul>
              <p style={{ marginTop: "12px" }}><strong>Groups B and C additionally:</strong></p>
              <ul className="paper-list">
                <li>Completed undergraduate degree or equivalent professional experience (4+ years in a knowledge-work field)</li>
                <li>Self-reported comfort with structured analytical tasks</li>
              </ul>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">1.3 Exclusion Criteria</div>
            <div className="paper-body">
              <ul className="paper-list">
                <li>Professional AI researchers or ML engineers — to prevent pattern recognition of benchmark structure</li>
                <li>Professional psychometricians or assessment designers — same concern</li>
                <li>Anyone who has seen the benchmark tasks in any form</li>
              </ul>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">1.4 Minimum Sample Size</div>
            <div className="paper-body">
              <p>
                <strong>Per group: N = 50 minimum. Target: N = 80.</strong>
              </p>
              <p>
                The primary analysis is distributional, not point-estimate. With N = 50, we can estimate the 25th,
                50th, and 75th percentiles of each scoring dimension with reasonable precision. With N = 80, we
                can also estimate the 10th and 90th percentiles. Smaller samples produce distributions too noisy
                to serve as meaningful reference points.
              </p>
              <p>
                <strong>Power analysis basis:</strong> For detecting a medium effect size (Cohen's d = 0.5) between
                Group A and Group B on any scoring dimension at alpha = 0.05 with power = 0.80, the minimum
                per-group N is approximately 64. N = 80 provides a buffer for attrition and data quality exclusions.
              </p>
              <p style={{ fontStyle: "italic", color: "var(--text-secondary)", fontSize: "0.85rem" }}>
                Alternative rejected: N = 20 per group. Rejected because distributional estimation with N = 20 is
                unstable, and the benchmark's comparison method is distributional. Point-estimate comparison
                would tolerate smaller samples but is inappropriate for this design.
              </p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">1.5 Recruitment</div>
            <div className="paper-body">
              <ul className="paper-list">
                <li><strong>Group A:</strong> Online platforms (Prolific, MTurk) with demographic screening. Payment at or above platform median for task duration.</li>
                <li><strong>Group B:</strong> University alumni networks and professional organizations. Incentive: payment plus optional summary report of results.</li>
                <li><strong>Group C:</strong> Same recruitment as Group B. Participants randomly assigned to B or C to control for selection effects.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── SECTION 2: TASK ADMINISTRATION ── */}
      <div className="paper-section">
        <div className="paper-section-num">02</div>
        <div>
          <div className="paper-section-title">Task Administration</div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">2.1 Modality</div>
            <div className="paper-body">
              <p>
                Text-based, self-paced, browser-administered. Participants complete tasks through a web interface
                that presents each task prompt and collects structured responses in the same format required of
                AI systems. The interface enforces the required output fields (ANSWERABLE, CONFIDENCE,
                REASONING, MISSING, etc.) through form elements.
              </p>
              <p style={{ fontStyle: "italic", color: "var(--text-secondary)", fontSize: "0.85rem" }}>
                Alternative rejected: Think-aloud protocol with audio recording. Rejected for V1 because
                think-aloud adds substantial coding burden, introduces social desirability effects (participants
                perform for the recorder), and is incompatible with the scale needed for N = 80 per group.
              </p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">2.2 Task Presentation</div>
            <div className="paper-body">
              <ul className="paper-list">
                <li>Tasks are presented in randomized order within each family to prevent sequence effects.</li>
                <li>Task families are presented in blocks (all EGD tasks together, then all CDSP tasks, etc.) with short breaks between blocks to reduce cognitive switching costs.</li>
                <li>Block order is counterbalanced across participants using a Latin square design.</li>
                <li>Each participant completes a subset of the full task inventory — target: 30 tasks per participant (6 per family), selected via stratified random sampling to ensure coverage of all evidence conditions.</li>
              </ul>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">2.3 Timing</div>
            <div className="paper-body">
              <p>
                <strong>No per-task time limit. Self-paced.</strong> Total session time: estimated 60–90 minutes
                including breaks. Session can be paused and resumed within a 48-hour window.
              </p>
              <p>
                <strong>Rationale:</strong> Time pressure introduces a confound. Under time pressure, humans hedge
                more (or less, depending on personality), and the effect of time pressure on epistemic behavior is a
                separate variable from metacognitive capacity. Since the AI systems being evaluated are not
                time-pressured on individual tasks, adding time pressure to the human baseline would distort
                the comparison.
              </p>
              <p style={{ fontStyle: "italic", color: "var(--text-secondary)", fontSize: "0.85rem" }}>
                Alternative rejected: 3-minute per-task limit. Rejected because it confounds processing speed
                with metacognitive quality. Fast participants would be advantaged in ways unrelated to metacognition.
              </p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">2.4 Instructions</div>
            <div className="paper-body">
              <p>Participants receive four components:</p>
            </div>
            <div className="paper-callout">
              <div className="paper-callout-item">
                <span className="paper-callout-num">1</span>
                <div><strong>General framing:</strong> "This study examines how people evaluate evidence and express confidence in their assessments. There are no trick questions, but some tasks have more evidence than others. Your job is to assess the evidence honestly, not to get the 'right' answer."</div>
              </div>
              <div className="paper-callout-item">
                <span className="paper-callout-num">2</span>
                <div><strong>Format training:</strong> A walkthrough of the structured response format with two practice tasks that are not scored. Practice tasks include one sufficient-evidence and one insufficient-evidence example with feedback.</div>
              </div>
              <div className="paper-callout-item">
                <span className="paper-callout-num">3</span>
                <div><strong>Confidence scale anchoring:</strong> "CONFIDENCE means how confident you are that your assessment is appropriate given the evidence. 0 = no confidence at all; 100 = completely certain. There is no penalty for low confidence when evidence is weak. There is also no penalty for high confidence when evidence is strong."</div>
              </div>
              <div className="paper-callout-item">
                <span className="paper-callout-num">4</span>
                <div><strong>No deception:</strong> Participants are told that some tasks will have incomplete or contradictory evidence, and that recognizing this is a valid and valued response.</div>
              </div>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">2.5 Revision Capability</div>
            <div className="paper-body">
              <p>For Task Family 4 (SEI), the multi-turn structure is preserved: Turn 1 response is submitted and locked before new evidence is presented. Participants cannot go back and edit Turn 1 after seeing Turn 2 evidence. For all other families, participants can revise answers before final submission of each task.</p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">2.6 Tool Access — Group C Only</div>
            <div className="paper-body">
              <p>Group C participants are provided a web browser tab for search, a calculator application, and a notepad for scratch work. Instructions: "You may use these tools however you like. Use them as you normally would when trying to assess a complex question."</p>
              <p>Tool usage is logged (search queries, calculator entries, time spent with tools) but not scored. The purpose is to characterize how tool access changes human epistemic behavior, not to evaluate tool usage quality.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── SECTION 3: CODING HUMAN EPISTEMIC BEHAVIOR ── */}
      <div className="paper-section">
        <div className="paper-section-num">03</div>
        <div>
          <div className="paper-section-title">Coding Human Epistemic Behavior</div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">3.1 Structured Fields — Automated Scoring</div>
            <div className="paper-body">
              <p>
                Because human participants use the same structured output format as the AI systems, the primary
                scoring dimensions from Part 3 can be applied directly — without modification.
              </p>
              <ul className="paper-list">
                <li><strong>EJA</strong> (Epistemic Judgment Accuracy): Categorical match, same computation as for AI.</li>
                <li><strong>CA</strong> (Confidence Appropriateness): Same range-deviation scoring.</li>
                <li><strong>MEI</strong> (Missing Element Identification): Same F1 set-comparison.</li>
                <li><strong>RA</strong> (Revision Appropriateness): Same cross-turn analysis.</li>
              </ul>
              <p style={{ fontStyle: "italic", color: "var(--text-secondary)", fontSize: "0.85rem", marginTop: "12px" }}>
                This is a major design advantage of using structured output: the same scoring pipeline runs on both
                human and AI responses without modification.
              </p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">3.2 Reasoning Field — Calibrated Scoring</div>
            <div className="paper-body">
              <p>
                The RS (Reasoning Specificity) dimension uses the dual-path matcher architecture from Part 3.
                For human responses, the same dual-path matcher is applied, but human writing varies more in
                style, length, and directness.
              </p>
              <ul className="paper-list">
                <li><strong>Path A (reference presence):</strong> Pilot set of 50 human reasoning responses per family annotated by 2 independent raters. Target: Cohen's kappa ≥ 0.75.</li>
                <li><strong>Path B (reference utilization):</strong> Same pilot set annotated for whether each referenced element is functionally used or merely mentioned. Contrastive grader calibrated against these annotations. Target: 85% agreement with human gold labels on 50 contrastive pairs.</li>
              </ul>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">3.3 Uncertainty Expression Coding</div>
            <div className="paper-body">
              <p>Humans use uncertainty expression forms that AI structured outputs do not: explicit hedging ("I'm not sure"), conditional language ("If X is true, then Y"), question-asking ("I'd want to know whether..."), emotional hedging ("I feel like maybe..."), silence or omission.</p>
              <p>The structured format constrains most of this variation. For supplementary analysis, a subset of 100 REASONING responses (stratified by evidence condition and participant group) are coded by 2 raters on a 4-point scale:</p>
            </div>
            <div style={{ overflowX: "auto", marginTop: "14px" }}>
              <table className="paper-table">
                <thead>
                  <tr><th>Code</th><th>Label</th><th>Definition</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td>0</td>
                    <td>No evidence engagement</td>
                    <td>Reasoning contains no reference to specific evidence elements</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Reference without utilization</td>
                    <td>Reasoning mentions evidence elements but does not use them to drive the epistemic judgment</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Partial utilization</td>
                    <td>Reasoning functionally uses some key evidence elements but misses others</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Full utilization</td>
                    <td>Reasoning functionally uses the key evidence elements to support or constrain the epistemic judgment</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="paper-body" style={{ marginTop: "12px" }}>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", fontStyle: "italic" }}>
                The 0/1 boundary validates Path A (reference presence). The 1/2 and 2/3 boundaries validate
                Path B (reference utilization). Not required for primary baseline computation — supplementary only.
              </p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">3.4 Handling Missing or Invalid Responses</div>
            <div className="paper-body">
              <ul className="paper-list">
                <li>Blank structured field: task instance excluded from that dimension's scoring but not from others.</li>
                <li>CONFIDENCE value outside [0, 100]: capped at the nearest boundary.</li>
                <li>Contradictory signals ("I don't know" in ANSWER field but ANSWERABLE: yes): both signals recorded; ANSWERABLE field takes precedence for EJA scoring.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── SECTION 4: NORMALIZING COMMUNICATION STYLE ── */}
      <div className="paper-section">
        <div className="paper-section-num">04</div>
        <div>
          <div className="paper-section-title">Normalizing Across Communication Style</div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">4.1 The Problem</div>
            <div className="paper-body">
              <p>Humans vary dramatically in how they express the same epistemic state:</p>
              <ul className="paper-list">
                <li><strong>Verbose vs. concise:</strong> One person writes three paragraphs; another writes one sentence. Both may reference the same evidence elements.</li>
                <li><strong>Direct vs. hedged:</strong> "There's not enough data" vs. "It seems like there might potentially be some gaps in the information provided."</li>
                <li><strong>Confident vs. cautious personality:</strong> Some people habitually express high confidence; others habitually express low confidence regardless of evidence quality.</li>
                <li><strong>Cultural variation:</strong> Directness norms differ across cultures. What reads as "appropriate confidence" in one context reads as "arrogance" in another.</li>
              </ul>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">4.2 Design Mitigation</div>
            <div className="paper-body">
              <p>
                The structured output format is the primary mitigation. By requiring participants to provide explicit
                ANSWERABLE, CONFIDENCE, REASONING, and MISSING fields, the protocol converts natural
                variation into structured data that can be scored uniformly. This does not eliminate style variation
                in the REASONING field, but it constrains scoring-relevant output to structured fields that are
                less sensitive to communication style.
              </p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">4.3 Statistical Normalization</div>
            <div className="paper-body">
              <p><strong>Within-participant z-scoring for confidence:</strong> Each participant's CONFIDENCE values are z-scored within their own distribution before cross-participant comparison. This removes the "habitually high/low confidence" confound.</p>
            </div>
            <div className="paper-code-block" style={{ marginTop: "14px" }}>
              <div className="paper-code-label">Z-SCORE FORMULA</div>
              <pre>{`For participant p:
z_confidence_p_i = (confidence_p_i - mean(confidence_p)) / std(confidence_p)

The z-scored confidence is used for distributional comparison.
The raw confidence is used for CA scoring (because CA scores against
absolute ranges defined by the ideal epistemic agent standard).`}</pre>
            </div>
            <div className="paper-body" style={{ marginTop: "14px" }}>
              <p>
                <strong>Why both raw and z-scored:</strong> Raw scoring answers "Did this participant behave like an ideal epistemic agent?" Z-scored analysis answers "Did this participant's confidence track evidence quality, regardless of their personal calibration baseline?" Both are informative.
              </p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">4.4 What Cannot Be Normalized</div>
            <div className="paper-body">
              <p>
                Genuine differences in metacognitive ability cannot and should not be normalized away. If some
                participants consistently fail to detect contradictions while others catch them, that is signal, not
                noise. The normalization applies only to communication-style variation (how judgments are expressed),
                not to judgment quality itself.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── SECTION 5: KNOWN HUMAN BIASES ── */}
      <div className="paper-section">
        <div className="paper-section-num">05</div>
        <div>
          <div className="paper-section-title">Known Human Biases — Mitigation Strategies</div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">5.1 Overconfidence Bias</div>
            <div className="paper-body">
              <p><strong>The bias:</strong> Humans systematically overestimate the accuracy of their judgments, particularly in domains where they have moderate knowledge. One of the most robust findings in judgment and decision-making research.</p>
              <p><strong>Expected effect:</strong> Human confidence scores will skew high relative to the ideal epistemic agent standard. Humans will express CONFIDENCE: 60–80 where the ideal epistemic agent would express CONFIDENCE: 10–30 on insufficient- and contradictory-evidence tasks.</p>
              <p><strong>Mitigation:</strong> Confidence anchoring instructions explicitly state that low confidence is not penalized. Within-participant z-scoring further separates evidence-sensitivity from absolute calibration level.</p>
              <p style={{ fontStyle: "italic", color: "var(--text-secondary)", fontSize: "0.85rem" }}>
                Design note: Overconfidence in the human baseline is not a problem to solve. It is a datum to capture.
                Documenting human overconfidence makes the baseline more useful, not less.
              </p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">5.2 Anchoring</div>
            <div className="paper-body">
              <p><strong>The bias:</strong> Initial information disproportionately influences subsequent judgments. In this benchmark, participants may anchor on the first piece of evidence and insufficiently adjust when encountering contradicting information.</p>
              <p><strong>Expected effect:</strong> In SEI (Family 4), participants will under-revise after disconfirming evidence, anchoring to their Turn 1 response. In CDSP (Family 2), participants may anchor on the first source and discount contradicting sources listed later.</p>
              <p><strong>Mitigation:</strong> Evidence source order is randomized across CDSP instances. In SEI tasks, the multi-turn structure inherently tests anchoring resistance — no further mitigation needed because anchoring behavior is part of what the baseline should capture.</p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">5.3 Social Desirability</div>
            <div className="paper-body">
              <p><strong>The bias:</strong> Participants adjust behavior to appear more competent, rational, or careful than they would naturally be. Could manifest as over-hedging or over-thoroughness (listing more missing evidence elements than naturally considered).</p>
              <p><strong>Mitigation:</strong> Instructions frame honesty as the goal, not thoroughness. No feedback during the task session. Participants identified by code only — anonymity guaranteed.</p>
              <p><strong>Residual risk:</strong> Social desirability cannot be fully eliminated. The baseline should be interpreted with this bias acknowledged. Supplementary analysis could compare early-session vs. late-session responses to check whether participants become more strategic as they learn the task structure.</p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">5.4 Fatigue and Task Learning Effects</div>
            <div className="paper-body">
              <p><strong>The bias:</strong> Performance changes over the session due to fatigue (degradation) or practice (improvement). Both effects are expected.</p>
              <p><strong>Mitigation:</strong> Counterbalanced block order (Latin square) ensures no task family is systematically positioned early or late. Breaks between blocks reduce fatigue. First 2 tasks in each block can be analyzed separately as "warm-up" items and optionally excluded.</p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">5.5 Dunning-Kruger Effects</div>
            <div className="paper-body">
              <p><strong>The bias:</strong> Individuals with lower competence in a domain tend to overestimate their performance; highly competent individuals tend to slightly underestimate theirs.</p>
              <p><strong>Expected effect:</strong> Group A may show higher CONFIDENCE on difficult tasks than Group B, not because they perform better, but because they are less aware of task difficulty. Group B may show slightly lower CONFIDENCE than their actual performance warrants.</p>
              <p><strong>Mitigation:</strong> This is captured in the distributional comparison, not normalized away. The three-group structure allows the analysis to characterize how metacognitive calibration varies with baseline competence. This is valuable data, not noise.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── SECTION 6: COMPARISON METHOD ── */}
      <div className="paper-section">
        <div className="paper-section-num">06</div>
        <div>
          <div className="paper-section-title">Comparison Method: AI vs. Human Baseline</div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">6.1 Distributional Comparison — Primary Method</div>
            <div className="paper-body">
              <p>The comparison is not "Is the AI better or worse than humans?" It is <strong>"Where does the AI's epistemic behavior fall within the human distribution?"</strong></p>
              <p>For each scoring dimension (EJA, RS, CA, RA, MEI, ECS): compute the human distribution from Group B, compute percentile values (10th, 25th, 50th, 75th, 90th), then place the AI system's score within this distribution.</p>
            </div>
            <div className="paper-code-block" style={{ marginTop: "14px" }}>
              <div className="paper-code-label">EXAMPLE OUTPUT FORMAT</div>
              <pre>{`Dimension: EJA
Human baseline (Group B, N=80):
  10th percentile: 0.52
  25th percentile: 0.61
  Median:          0.72
  75th percentile: 0.81
  90th percentile: 0.88
AI system score:   0.84
Percentile rank:   78th (above median, below 90th)`}</pre>
            </div>
            <div className="paper-body" style={{ marginTop: "12px" }}>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", fontStyle: "italic" }}>
                This is more informative than a single "beats human / does not beat human" comparison because it
                shows where the AI falls in the human distribution and how much variation exists among humans.
              </p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">6.2 Profile Similarity — Secondary Method</div>
            <div className="paper-body">
              <p>
                Across the five task families, the AI system and the human baseline each produce a profile of
                scores. Profile similarity measures whether the AI system's pattern of strengths and weaknesses
                resembles the human pattern.
              </p>
              <p><strong>Method:</strong> Compute the Spearman rank correlation between the AI system's per-family ECS scores and the median human ECS scores per family.</p>
              <ul className="paper-list">
                <li><strong>High correlation (rho &gt; 0.7):</strong> The AI system's metacognitive profile is shaped like the human profile — strong where humans are strong, weak where humans are weak.</li>
                <li><strong>Low correlation (rho &lt; 0.3):</strong> The AI system's metacognitive profile is differently shaped from the human profile.</li>
              </ul>
              <p>This captures jaggedness. An AI system that scores well overall but has a very different profile shape than humans is exhibiting a qualitatively different kind of metacognitive behavior.</p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">6.3 Calibration Comparison — Tertiary Method</div>
            <div className="paper-body">
              <p>For Dimension 3 (CA), compare the AI system's confidence-evidence correlation against the human distribution of confidence-evidence correlations.</p>
              <p><strong>Method:</strong> For each human participant, compute Spearman's rho between their stated CONFIDENCE values and the labeled evidence quality levels across all tasks. This produces a distribution of human calibration coefficients. Compute the same coefficient for the AI system. Place the AI system's calibration coefficient within the human distribution.</p>
              <p>This specifically tests whether the AI system is better or worse calibrated than typical humans — relevant because humans are known to be poorly calibrated, and an AI system that is better calibrated than humans is potentially more valuable than one that merely matches human calibration.</p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">6.4 What the Comparison Does Not Do</div>
            <div className="paper-body">
              <ul className="paper-list">
                <li>Does not declare the AI system "has metacognition" or "lacks metacognition" based on human comparison</li>
                <li>Does not use the human median as a pass/fail threshold</li>
                <li>Does not average across scoring dimensions into a single comparison number</li>
                <li>Does not assume that matching human performance is the goal — it is not; the ideal epistemic agent standard governs scoring</li>
              </ul>
              <p style={{ fontStyle: "italic", color: "var(--text-secondary)", fontSize: "0.85rem", marginTop: "12px" }}>
                The human baseline is a reference frame, not a success criterion.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── SECTION 7: RELIABILITY ── */}
      <div className="paper-section">
        <div className="paper-section-num">07</div>
        <div>
          <div className="paper-section-title">Reliability Requirements</div>
          <div style={{ overflowX: "auto", marginTop: "16px" }}>
            <table className="paper-table">
              <thead>
                <tr><th>Requirement</th><th>Method</th><th>Target</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>7.1 — Supplementary coding (REASONING)</strong></td>
                  <td>2 independent raters, 20 joint training responses, 100 independent test responses</td>
                  <td>Cohen's kappa ≥ 0.75</td>
                </tr>
                <tr>
                  <td><strong>7.2 — Matcher calibration (Path A)</strong></td>
                  <td>2 raters annotating 50 human reasoning responses per family for element presence/absence</td>
                  <td>Cohen's kappa ≥ 0.75 per evidence element</td>
                </tr>
                <tr>
                  <td><strong>7.2 — Matcher calibration (Path B)</strong></td>
                  <td>Contrastive grader validated against 50 human-annotated pairs</td>
                  <td>85% agreement with human gold labels</td>
                </tr>
                <tr>
                  <td><strong>7.3 — Test-retest reliability</strong></td>
                  <td>N=20 Group B participants, repeated session 2–4 weeks later with different task subset</td>
                  <td>Pearson r ≥ 0.60 for ECS across sessions</td>
                </tr>
                <tr>
                  <td><strong>7.4 — Internal consistency</strong></td>
                  <td>Cronbach's alpha across 6 task instances per family, computed per participant</td>
                  <td>Alpha ≥ 0.70 per family</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ── SECTION 8: PRACTICAL EXECUTION ── */}
      <div className="paper-section">
        <div className="paper-section-num">08</div>
        <div>
          <div className="paper-section-title">Practical Execution Plan</div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">8.1 Timeline — 4-Week Build Window</div>
            <div style={{ overflowX: "auto", marginTop: "14px" }}>
              <table className="paper-table">
                <thead>
                  <tr><th>Week</th><th>Activity</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span className="paper-badge paper-badge-green">1</span></td>
                    <td>Build web-based task administration interface. Finalize task subset selection (30 tasks per participant). Write participant instructions and consent form.</td>
                  </tr>
                  <tr>
                    <td><span className="paper-badge paper-badge-yellow">2</span></td>
                    <td>Recruit 10 pilot participants (Group B only). Run pilot. Check for task comprehension issues, interface bugs, timing estimates.</td>
                  </tr>
                  <tr>
                    <td><span className="paper-badge paper-badge-yellow">3</span></td>
                    <td>Analyze pilot data. Calibrate dual-path matcher (Path A reference thresholds + Path B contrastive grader) against pilot REASONING responses. Revise tasks or interface as needed. Begin full recruitment.</td>
                  </tr>
                  <tr>
                    <td><span className="paper-badge paper-badge-green">4</span></td>
                    <td>Complete data collection for Group B (N = 80). Run automated scoring pipeline. Compute distributional baselines.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="paper-body" style={{ marginTop: "12px" }}>
              <p style={{ fontStyle: "italic", color: "var(--text-secondary)", fontSize: "0.85rem" }}>
                Scoping note: If the 4-week timeline does not permit full execution of all three groups, prioritize
                Group B (the primary comparison group). Groups A and C can be collected in a subsequent phase
                without invalidating the initial baseline.
              </p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">8.2 Cost Estimate</div>
            <div className="paper-body">
              <ul className="paper-list">
                <li><strong>Pilot</strong> (10 participants, ~90 min each): ~$300 at $20/hr</li>
                <li><strong>Group A</strong> (50–80 participants, ~90 min): ~$1,500–2,400</li>
                <li><strong>Group B</strong> (50–80 participants, ~90 min): ~$1,500–2,400</li>
                <li><strong>Group C</strong> (50–80 participants, ~90 min): ~$1,500–2,400</li>
                <li><strong>Web platform</strong> hosting and development: ~$200–500</li>
                <li><strong>Supplementary coding labor</strong> (2 raters, ~20 hrs each): ~$800</li>
              </ul>
              <p style={{ marginTop: "12px" }}>
                <strong>Total estimated range:</strong> $5,800–8,700 for the full three-group design. <strong>$2,000–3,200 for Group B only</strong> (minimum viable baseline).
              </p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">8.3 IRB Considerations</div>
            <div className="paper-body">
              <ul className="paper-list">
                <li><strong>University-affiliated researchers:</strong> IRB approval required before recruitment.</li>
                <li><strong>Independent researchers:</strong> Consider a commercial IRB service (e.g., WCG IRB) or ensure the study qualifies as exempt (minimal risk, anonymous data, no deception).</li>
              </ul>
              <p>The study involves no deception, no sensitive personal data collection, and minimal risk. It is likely to qualify for expedited or exempt review.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── SECTION 9: LIMITATIONS ── */}
      <div className="paper-section">
        <div className="paper-section-num">09</div>
        <div>
          <div className="paper-section-title">Limitations of the Human Baseline</div>
          <div className="paper-body">
            <p>These should be stated explicitly in any submission or publication:</p>
          </div>
          <div className="paper-body">
            <ul className="paper-list">
              <li><strong>Ecological validity:</strong> Participants complete structured tasks in a study setting. This does not fully reflect how humans handle uncertainty in natural decision-making contexts, where stakes, time pressure, and social dynamics are different.</li>
              <li><strong>Format constraint:</strong> The structured output format constrains natural expression. Some humans may express metacognitive awareness in ways the format does not capture (facial expressions, tone, spontaneous questions).</li>
              <li><strong>Sample bias:</strong> Online recruitment skews toward younger, more educated, more tech-comfortable individuals. The baseline may not represent the full range of adult metacognitive behavior.</li>
              <li><strong>Social desirability:</strong> Study participation increases self-monitoring, potentially inflating metacognitive scores relative to natural behavior.</li>
              <li><strong>Single session:</strong> A one-session baseline does not capture within-person variation across contexts, fatigue levels, or emotional states. The test-retest subset partially addresses this but does not fully resolve it.</li>
              <li><strong>Language constraint:</strong> V1 is English-only. Metacognitive expression varies across languages and cultures.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── TAGS ── */}
      <div className="paper-section">
        <div className="paper-section-num">∅</div>
        <div>
          <div className="paper-section-title">Related Work</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "16px" }}>
            {["#AGI", "#benchmark", "#metacognition", "#human-baseline", "#psychometrics",
              "#evaluation-design", "#GGIB", "#Kaggle", "#competition", "#methodology"].map(tag => (
              <span key={tag} className="proj-tag">{tag}</span>
            ))}
          </div>
          <div className="paper-body" style={{ marginTop: "20px" }}>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
              Depends on: GGIB Part 1 · Part 2 · Part 3<br />
              Related: Orchestrator_Epistemic_Capture_v2 · Agent_State_Framework_v3 · Metacognition-Benchmark-Critique<br />
              Next: GGIB Part 5 — Contamination Resistance and Gaming Defenses
            </p>
          </div>
        </div>
      </div>

      <div className="paper-footer-note">
        Professor Bone Lab × Caroline Brooks · GGIB-M Part 4 of 6 · Draft 0.2 · March 2026 · Kaggle Competition: Measuring Progress Toward AGI
      </div>
    </div>
  );
}
