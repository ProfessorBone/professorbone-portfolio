import "../../paper.css";
import "../../paper-ggib.css";

export default function GGIBPart1({ onBack }) {
  return (
    <div className="paper-wrap">
      <button className="paper-back" onClick={onBack}>← Back to Research</button>

      {/* ── HEADER ── */}
      <div className="paper-header">
        <div className="paper-lab-tag">GGIB-M · Part 1 of 6 · Professor Bone Lab × Caroline Brooks · Kaggle Competition</div>
        <h1 className="paper-title">Critical Analysis of the Metacognition Evaluation Design Space</h1>
        <p className="paper-subtitle">
          "Be skeptical and precise. Do not be polite. Do not flatter the premise."
        </p>
        <div className="paper-meta-row">
          <div className="paper-meta-item"><span className="paper-meta-label">AUTHORS</span>Clarence Downs, Caroline Brooks</div>
          <div className="paper-meta-item"><span className="paper-meta-label">STATUS</span>Draft 0.1</div>
          <div className="paper-meta-item"><span className="paper-meta-label">CREATED</span>March 18, 2026</div>
          <div className="paper-meta-item"><span className="paper-meta-label">TRACK</span>Metacognition</div>
          <div className="paper-meta-item"><span className="paper-meta-label">DEADLINE</span>April 16, 2026</div>
        </div>
      </div>

      {/* ── ABSTRACT / FRAMING ── */}
      <div className="paper-abstract">
        <div className="paper-abstract-label">FRAMING</div>
        <p>
          When we claim to measure metacognition behaviorally in an AI system, we are not measuring
          whether the system monitors its own reasoning. We are measuring whether the system's outputs
          covary with evidence conditions in a pattern that resembles normatively appropriate epistemic behavior.
          This distinction matters. The risk of surface-level mimicry without underlying process is far higher
          with LLMs than with human subjects. This paper provides the critical analysis that must precede
          any serious benchmark design.
        </p>
      </div>

      {/* ── SECTION 1 ── */}
      <div className="paper-section">
        <div className="paper-section-num">01</div>
        <div>
          <div className="paper-section-title">What Is Actually Being Measured?</div>
          <div className="paper-body">
            <p>
              We cannot observe anyone's internal states directly — human or AI. We infer metacognitive
              capacity from behavior: calibration, hedging, revision patterns. The difference with LLMs is
              that the generator of those behaviors is fundamentally unlike a human cognitive architecture,
              and the mimicry risk is the default, not the exception.
            </p>
            <p>
              A well-designed benchmark targets three defensible measurement objects:
            </p>
          </div>

          <div className="paper-callout">
            <div className="paper-callout-item">
              <span className="paper-callout-num">1</span>
              <div>
                <strong>Evidence Sensitivity.</strong> Does the system's output change appropriately when the evidence
                condition changes? If given sufficient evidence, does it commit? If given contradictory evidence,
                does it flag the contradiction? If evidence is withheld, does it express uncertainty?
                This is the most defensible measurement target.
              </div>
            </div>
            <div className="paper-callout-item">
              <span className="paper-callout-num">2</span>
              <div>
                <strong>Behavioral Calibration.</strong> Does the system's stated confidence track its actual accuracy
                across tasks? Measurable, but with a known failure mode: a model can be statistically
                well-calibrated without any metacognitive process, simply by learning base-rate difficulty
                cues in the task format.
              </div>
            </div>
            <div className="paper-callout-item">
              <span className="paper-callout-num">3</span>
              <div>
                <strong>Revision Dynamics.</strong> Does the system update when new information arrives? The closest
                behavioral proxy to active self-monitoring, because it requires treating prior output as
                revisable. But even this can be mimicked by a model that has learned: "when the human
                presents contradicting information, change your answer."
              </div>
            </div>
          </div>

          <div className="paper-body">
            <p>
              The honest framing: we are measuring behavioral compliance with epistemic norms, not
              metacognition itself. This is not a fatal flaw — it is the same epistemic limitation cognitive
              psychology faces with human subjects. But it must be stated plainly, not hidden behind
              ambitious terminology.
            </p>
          </div>
        </div>
      </div>

      {/* ── SECTION 2 ── */}
      <div className="paper-section">
        <div className="paper-section-num">02</div>
        <div>
          <div className="paper-section-title">Strongest Arguments Against the Proposed Approach</div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">2.1 The Category Error Objection</div>
            <div className="paper-body">
              <p>
                LLMs do not have beliefs. They do not hold propositions as true or false in any representational
                sense that maps onto human belief. When we ask whether a model can "revise its beliefs," we
                are applying a folk-psychological category to a system that generates text by computing
                probability distributions over tokens. Belief revision is a category error.
              </p>
              <p>
                <strong>Counterargument:</strong> The benchmark does not need to make claims about internal belief states.
                It can define metacognition operationally: does the system's behavior systematically vary with
                evidence conditions in ways that match appropriate epistemic responses? Behavioral standard,
                not cognitive one.
              </p>
              <p>
                <strong>Residual risk:</strong> Even with operational definitions, the framing will inevitably imply cognitive
                claims. Reviewers, journalists, and competitors will read "metacognition benchmark" as "this
                measures whether the system thinks about its own thinking." The disconnect is a reputational
                and scientific risk that must be managed at the language level.
              </p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">2.2 The Training Distribution Objection</div>
            <div className="paper-body">
              <p>
                LLMs are trained on billions of tokens of human text that includes epistemic hedging,
                uncertainty expression, and revision language. Academic papers hedge. Medical reports express
                uncertainty. Legal documents qualify. The training distribution contains massive amounts of text
                modeling what "appropriate epistemic behavior" looks like.
              </p>
              <p>
                A model could produce well-calibrated epistemic behavior not because it monitors its reasoning,
                but because it has learned the statistical regularities of epistemic language in context. The model
                doesn't know it's uncertain — it has learned that in contexts that look like this, humans write
                sentences that look like that. This is not a speculative risk. It is the expected default behavior
                of any well-trained LLM.
              </p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">2.3 The RLHF Contamination Objection</div>
            <div className="paper-body">
              <p>
                Modern LLMs are trained via RLHF to hedge, refuse, and express uncertainty. This is not a
                side effect — it is a primary training objective. Safety training explicitly rewards models for
                saying "I'm not sure" and "I don't have enough information."
              </p>
              <p>
                The benchmark may not be measuring metacognitive capability at all. It may be measuring
                the strength of RLHF-induced hedging behavior. A model that hedges on everything — because
                it was trained to — would score well on many uncertainty-related tasks without any evidence
                sensitivity whatsoever.
              </p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">2.4 The Pattern Recognition Objection</div>
            <div className="paper-body">
              <p>
                A sufficiently capable model can recognize that a task is designed to test metacognition.
                The task structure itself leaks information: if the evidence is obviously incomplete, the model
                can infer "this is a test where I should say I'm uncertain" without engaging in any metacognitive
                process. The model is reading the test, not monitoring itself.
              </p>
              <p>
                This is the deepest version of the gaming problem. It suggests that any benchmark with a
                legible structure can be solved by pattern recognition rather than by the target capability.
                The only defense is to make the task structure illegible — which conflicts directly with the
                need for procedural generation and programmatic scoring.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── SECTION 3 ── */}
      <div className="paper-section">
        <div className="paper-section-num">03</div>
        <div>
          <div className="paper-section-title">Collapse Risks — Where Metacognition Evaluation Degrades</div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">3.1 Collapse into Answer Accuracy</div>
            <div className="paper-body">
              <p>
                If appropriate epistemic behavior correlates strongly with getting the right answer — which it
                often does, since appropriate uncertainty reduces overcommitment errors — then the benchmark
                is just measuring performance with an extra wrapper. The scoring framework must explicitly
                decouple epistemic appropriateness from answer correctness. This means the benchmark
                must contain both:
              </p>
              <ul className="paper-list">
                <li>Cases where the correct answer is given, but the epistemic behavior is wrong (confident assertion under insufficient evidence that happened to be right).</li>
                <li>Cases where correct epistemic behavior is demonstrated, but the answer is wrong or withheld (appropriate refusal when evidence was genuinely insufficient).</li>
              </ul>
              <p>If the benchmark does not contain both classes, it has collapsed.</p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">3.2 Collapse into Confidence Calibration</div>
            <div className="paper-body">
              <p>
                Confidence calibration (ECE, Brier scores) is well-studied. It measures whether stated
                confidence tracks accuracy. Useful — but not metacognition. A model can be perfectly calibrated
                by learning the base rate of difficulty features in a task format without monitoring its own reasoning.
                If the scoring framework reduces to "was the confidence number well-calibrated," the benchmark
                has collapsed into a statistics problem.
              </p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">3.3 Collapse into Keyword Detection</div>
            <div className="paper-body">
              <p>
                If scoring relies on detecting hedge phrases ("I'm not sure," "there isn't enough evidence"),
                the benchmark is measuring vocabulary, not cognition. Models that use hedge language across
                the board will score well. Models that express uncertainty through structural choices — multiple
                interpretations, clarifying questions, conditional answers — might score poorly if the detection
                method is lexical.
              </p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">3.4 Collapse into Stylistic Politeness</div>
            <div className="paper-body">
              <p>
                RLHF-trained models are tuned to be polite, cautious, and deferential. This produces outputs
                that resemble epistemic humility: "That's a great question, and there are multiple perspectives..."
                This is not metacognition. It is conversational style. If the benchmark cannot distinguish
                between a model that expresses uncertainty because the evidence warrants it and a model that
                expresses uncertainty because it was trained to be agreeable, the benchmark has collapsed
                into a style evaluation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── SECTION 4 ── */}
      <div className="paper-section">
        <div className="paper-section-num">04</div>
        <div>
          <div className="paper-section-title">Epistemic Theater — Expected Forms</div>
          <div className="paper-body">
            <p>
              Epistemic theater is the production of outputs that resemble metacognitive behavior without
              evidence-sensitive reasoning. This is the primary threat to the benchmark's validity.
            </p>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">4.1 Blanket Hedging</div>
            <div className="paper-body">
              <p>
                The model adds uncertainty language to all outputs, including cases where evidence is sufficient
                and confidence is warranted. The most common RLHF artifact and the easiest form of theater
                to detect — if the benchmark includes sufficient-evidence control tasks where confident assertion
                is the correct response.
              </p>
              <p><strong>Detection requirement:</strong> The benchmark must include clear-evidence tasks where hedging is scored as a failure.</p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">4.2 Reflexive Refusal</div>
            <div className="paper-body">
              <p>
                The model refuses to answer or says "I don't have enough information" in cases where the
                evidence is actually sufficient. The mirror image of overconfidence and equally inappropriate.
                A model that maximizes its refusal rate can game any benchmark that only penalizes overconfidence.
              </p>
              <p><strong>Detection requirement:</strong> The scoring framework must penalize underconfidence and over-refusal, not just overconfidence.</p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">4.3 Performative Revision</div>
            <div className="paper-body">
              <p>
                When new evidence is presented in a multi-turn interaction, the model changes its answer not
                because it has evaluated the new evidence against its prior state, but because the conversational
                structure signals "you should update now." The pattern "new information → model changes answer"
                can be learned as a dialogue act without genuine evidence integration.
              </p>
              <p>
                <strong>Detection requirement:</strong> The benchmark must include cases where new evidence is presented
                but does not actually warrant revision — confirming evidence, irrelevant evidence, weak evidence.
                If the model revises every time new evidence is presented regardless of content, the revision
                behavior is performative.
              </p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">4.4 Calibration Mimicry</div>
            <div className="paper-body">
              <p>
                The model produces well-calibrated confidence scores by pattern-matching surface features of
                the task — question length, topic, presence of hedged language in the prompt — rather than by
                monitoring the quality of its own reasoning. Statistically indistinguishable from genuine
                calibration on any single task, but detectable through adversarial variants that hold surface
                features constant while varying actual evidence quality.
              </p>
              <p>
                <strong>Detection requirement:</strong> Adversarial task pairs where surface difficulty cues are identical
                but evidence conditions differ. If confidence tracks surface cues rather than evidence,
                calibration is mimicry.
              </p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">4.5 Format Compliance Without Evidence Sensitivity</div>
            <div className="paper-body">
              <p>
                The model learns the expected output format for the benchmark — structured confidence ratings,
                explicit uncertainty statements, specific revision language — and produces format-compliant
                outputs regardless of the actual evidence condition. The most dangerous form of theater because
                it is invisible to any scoring system that relies on output structure.
              </p>
              <p>
                <strong>Detection requirement:</strong> The scoring system must evaluate the relationship between evidence
                conditions and outputs, not just the outputs themselves. Format compliance is necessary
                but not sufficient.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── SECTION 5 ── */}
      <div className="paper-section">
        <div className="paper-section-num">05</div>
        <div>
          <div className="paper-section-title">Hidden Assumptions That Must Be Made Explicit</div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">5.1 Uncertainty Is Always the Appropriate Response to Insufficient Evidence</div>
            <div className="paper-body">
              <p>
                In many real-world contexts, acting under uncertainty is required. A system that always refuses
                when evidence is incomplete may be epistemically appropriate in a philosophical sense but
                useless in deployment. The benchmark must decide: is it measuring epistemic purity or practical
                epistemic behavior? These are different standards and they produce different scoring outcomes.
              </p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">5.2 Clarification-Seeking Is Metacognitive</div>
            <div className="paper-body">
              <p>
                Asking for clarification could reflect genuine recognition of ambiguity, or it could be a trained
                avoidance behavior. Models are reinforced for asking clarifying questions rather than guessing.
                The benchmark should not treat clarification-seeking as automatically metacognitive without
                evaluating whether the clarification request targets the actual ambiguity.
              </p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">5.3 There Is a Single Correct Epistemic Response per Evidence Condition</div>
            <div className="paper-body">
              <p>
                In practice, reasonable epistemic agents can disagree about the appropriate response to
                ambiguous evidence. One competent human might express uncertainty; another might commit
                with a caveat. The benchmark must define its normative standard clearly and acknowledge
                that it is choosing one reasonable standard among several, or allow a range of acceptable
                responses and score within that range.
              </p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">5.4 Refusal Indicates Epistemic Awareness Rather Than Safety Training</div>
            <div className="paper-body">
              <p>
                RLHF-trained models refuse for many reasons: safety, uncertainty, policy compliance,
                conversational norms. The benchmark must distinguish epistemic refusal from policy refusal.
                The only reliable method: ensure that task content is unambiguously safe and non-controversial,
                so that any refusal must be epistemic rather than policy-driven.
              </p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">5.5 Belief Revision After New Evidence Reflects Monitoring Rather Than Context-Window Updating</div>
            <div className="paper-body">
              <p>
                When a model receives new evidence in a later turn and changes its answer, this might reflect
                genuine evidence integration — or it might reflect the trivial fact that the new evidence is now
                in the context window and influences generation. These are not the same process, but they
                produce the same observable behavior. The benchmark cannot distinguish them from outputs alone.
                This is a fundamental limitation that must be acknowledged, not buried.
              </p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">5.6 Human Metacognitive Behavior Is the Normative Standard</div>
            <div className="paper-body">
              <p>
                Humans are bad at metacognition. Dunning-Kruger effects, overconfidence bias, anchoring,
                sunk-cost reasoning, and motivated reasoning are all well-documented metacognitive failures.
                If the benchmark uses human baselines, it must decide whether it is measuring "does the AI
                behave like a human?" or "does the AI behave like an idealized epistemic agent?" These diverge.
                Most humans are overconfident. Calibrating AI to match human overconfidence is the wrong target.
              </p>
              <p>
                <strong>Design implication:</strong> The human baseline should characterize typical human metacognitive
                behavior, not define the normative target. The normative target must be defined independently.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── SECTION 6 ── */}
      <div className="paper-section">
        <div className="paper-section-num">06</div>
        <div>
          <div className="paper-section-title">Conditions Under Which the Benchmark Fails Entirely</div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">6.1 All Models Score Similarly</div>
            <div className="paper-body">
              <p>
                If RLHF training already produces sufficient hedging and revision behavior to pass most tasks,
                the benchmark will fail to discriminate between systems — the ceiling-effect-via-safety-training
                scenario. Current frontier models already produce well-calibrated uncertainty language in many
                contexts. Tasks must be designed to specifically defeat RLHF-induced hedging: include cases
                where hedging is wrong, where confident commitment is required, where the evidence condition
                is subtle enough that generic hedging language scores as inappropriate.
              </p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">6.2 The Task Structure Is Legible</div>
            <div className="paper-body">
              <p>
                If models can recognize "this is a metacognition test" from the task format, they can generate
                appropriate-looking outputs without metacognitive processing. The task format itself becomes
                a solved pattern. Every task family needs adversarial variants with the same surface structure
                but different evidence conditions, so that recognizing the format does not provide the
                correct response.
              </p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">6.3 Scoring Cannot Distinguish Evidence Sensitivity from Pattern Matching</div>
            <div className="paper-body">
              <p>
                If the scoring system relies on checking output properties — contains uncertainty language,
                confidence is below threshold, answer changes after new evidence — a pattern-matching model
                and a genuinely evidence-sensitive model produce the same scores. The only defense: adversarial
                task pairs and consistency checks across structurally varied instances of the same
                evidence condition.
              </p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">6.4 The Human Baseline Is Too Noisy</div>
            <div className="paper-body">
              <p>
                If human participants show high variance in metacognitive behavior — which they will, because
                humans are bad at metacognition — the baseline becomes uninformative. A wide human
                distribution means almost any AI behavior falls "within human range." The baseline must capture
                the distribution, not just the mean, and the comparison method must be distributional rather
                than point-estimate based.
              </p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">6.5 Procedural Generation Produces Patterned Tasks</div>
            <div className="paper-body">
              <p>
                If the generation schema produces tasks with detectable structural regularities, models can learn
                the generation pattern rather than developing evidence sensitivity. The contamination-from-within
                problem: the benchmark contaminates itself through its own generation process. Mitigation:
                generation schemas must be validated by checking that surface features do not predict the
                correct epistemic response. If they do, the schema needs restructuring.
              </p>
            </div>
          </div>

          <div className="paper-subsection">
            <div className="paper-subsection-title">6.6 The Benchmark Rewards a Narrow Concept of Metacognition</div>
            <div className="paper-body">
              <p>
                Metacognition is broader than uncertainty calibration. It includes monitoring of strategy
                selection, detecting when a problem-solving approach is failing, recognizing when a task is
                outside one's competence, and knowing when to stop. If the benchmark focuses exclusively
                on uncertainty expression and confidence calibration, it measures one slice of metacognition
                and calls it the whole.
              </p>
              <p>
                <strong>Design implication:</strong> At least one task family should measure strategic monitoring —
                does the system recognize when its approach is failing and switch strategies?
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── SUMMARY ASSESSMENT ── */}
      <div className="paper-section">
        <div className="paper-section-num">↓</div>
        <div>
          <div className="paper-section-title">Summary Assessment</div>
          <div className="paper-body">
            <p>
              The proposed approach is defensible but fragile. Its core strength is the focus on
              evidence-sensitive behavior rather than answer accuracy, and the grounding in existing
              published work on epistemic capture and premature closure. Its core weakness is the gap
              between behavioral measurement and cognitive claims, and the high risk that RLHF-trained
              models will produce surface-compliant outputs that pass scoring without genuine evidence sensitivity.
            </p>
            <p>The benchmark will succeed or fail based on three design decisions:</p>
            <ul className="paper-list">
              <li>
                <strong>Whether the scoring framework can detect epistemic theater.</strong> This requires adversarial
                task pairs, consistency analysis across variants, and penalization of both overconfidence
                and blanket hedging. If scoring reduces to keyword detection or confidence thresholds,
                the benchmark is worthless.
              </li>
              <li>
                <strong>Whether sufficient-evidence control tasks are included.</strong> A benchmark that only tests
                uncertainty behavior is trivially gamed by a model that always hedges. The benchmark
                must include cases where confident commitment is the correct response, and where
                hedging is penalized.
              </li>
              <li>
                <strong>Whether the task instances are adversarial enough to defeat pattern matching.</strong> If a model
                can solve the metacognition tasks by recognizing the test format rather than by processing
                evidence, the benchmark measures reading comprehension, not metacognition.
              </li>
            </ul>
            <p style={{ fontStyle: "italic", marginTop: "24px", color: "var(--text-secondary)" }}>
              These are engineering problems, not conceptual problems. The concept is sound. The execution
              will determine whether it measures anything real.
            </p>
          </div>
        </div>
      </div>

      {/* ── DECISION LOG ── */}
      <div className="paper-section">
        <div className="paper-section-num">DL</div>
        <div>
          <div className="paper-section-title">Decision Log</div>
          <div style={{ overflowX: "auto", marginTop: "20px" }}>
            <table className="paper-table">
              <thead>
                <tr>
                  <th>Decision</th>
                  <th>Status</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Behavioral vs. cognitive framing</td>
                  <td><span className="paper-badge paper-badge-green">Behavioral</span></td>
                  <td>Do not claim to measure internal metacognitive processes. Measure observable evidence-sensitive behavior.</td>
                </tr>
                <tr>
                  <td>Normative standard</td>
                  <td><span className="paper-badge paper-badge-yellow">Open</span></td>
                  <td>Must decide between ideal epistemic agent and competent decision-maker under uncertainty. Recommend: ideal epistemic agent, with human baselines characterizing typical (not normative) behavior.</td>
                </tr>
                <tr>
                  <td>RLHF contamination strategy</td>
                  <td><span className="paper-badge paper-badge-red">Required</span></td>
                  <td>Must include confident-assertion control tasks. Blanket hedging must be penalized.</td>
                </tr>
                <tr>
                  <td>Epistemic theater defense</td>
                  <td><span className="paper-badge paper-badge-red">Required</span></td>
                  <td>Adversarial task pairs, non-diagnostic new evidence, consistency analysis across runs.</td>
                </tr>
                <tr>
                  <td>Scope of metacognition</td>
                  <td><span className="paper-badge paper-badge-yellow">Open</span></td>
                  <td>Current focus is calibration and revision. Should at least one task family measure strategic monitoring? Recommend yes.</td>
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
            {["#AGI", "#benchmark", "#metacognition", "#critical-analysis", "#evaluation-design",
              "#epistemic-theater", "#GGIB", "#Kaggle", "#competition"].map(tag => (
              <span key={tag} className="proj-tag">{tag}</span>
            ))}
          </div>
          <div className="paper-body" style={{ marginTop: "20px" }}>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
              Part of series: GGIB-M · 6-Part Benchmark Specification.<br />
              Related: Orchestrator Epistemic Capture v2 · Agent State Framework v3 · Cognitive Horizon v6
            </p>
          </div>
        </div>
      </div>

      <div className="paper-footer-note">
        Professor Bone Lab × Caroline Brooks · GGIB-M Part 1 of 6 · Draft 0.1 · March 2026 · Kaggle Competition: Measuring Progress Toward AGI
      </div>
    </div>
  );
}
