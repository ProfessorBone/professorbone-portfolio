export default function CognitiveHorizon({ onBack }) {
  return (
    <div className="paper-wrap">
      <button className="paper-back" onClick={onBack}>← Back to Research</button>

      <div className="paper-header">
        <div className="paper-lab-tag">Professor Bone Lab · Johns Hopkins University</div>
        <h1 className="paper-title">The Cognitive Horizon of an Agent</h1>
        <p className="paper-subtitle">A Structural Model of Operative Cognition in Agentic Systems</p>
        <div className="paper-meta-row">
          <span className="paper-meta-item"><span className="paper-meta-label">Author</span> Clarence "Professor Bone" Downs</span>
          <span className="paper-meta-item"><span className="paper-meta-label">Program</span> JHU Agentic AI Certificate</span>
          <span className="paper-meta-item"><span className="paper-meta-label">Version</span> Draft v6 · Revised</span>
          <span className="paper-meta-item"><span className="paper-meta-label">Classification</span> Working paper · peer review invited</span>
        </div>
      </div>

      <div className="paper-body">

        {/* Abstract */}
        <div className="paper-abstract">
          <div className="paper-abstract-label">Abstract</div>
          <p>This paper introduces the Cognitive Horizon as a structural framework for diagnosing a failure mode that is common in production agentic systems but rarely formalized: an agent fails to act on information that was technically available to it, not because retrieval failed, but because the information never became behaviorally operative.</p>
          <p>The central contribution is a distinction between latent state — information present in the agent's context — and operative state — information actively shaping behavior. This distinction reframes many apparent knowledge failures as gating failures: structural suppressions of information the agent already possessed.</p>
          <p>The paper develops a control model of operative cognition, presents a three-question diagnostic protocol for isolating the layer at which a gating failure occurred, illustrates the model through a concrete logistics scenario, examines temporal desynchronization as a source of instability across control layers, and connects the framework to second-order governance risks in multi-agent systems.</p>
          <div className="paper-formula" style={{margin:"20px 0 0"}}>
            <div className="paper-formula-label">Central Model</div>
            <div className="paper-formula-eq">Cognition ≈ State × Attention × Policy</div>
          </div>
          <div className="paper-keywords" style={{marginTop:"20px"}}>
            <span className="paper-kw-label">Keywords</span>
            {["cognitive horizon","latent state","operative state","gating failures","attention","policy layer","temporal desynchronization","multi-agent systems","agentic AI"].map(k => (
              <span key={k} className="paper-kw">{k}</span>
            ))}
          </div>
        </div>

        {/* Section 1 */}
        <div className="paper-section">
          <div className="paper-section-num">1</div>
          <h2 className="paper-section-title">Motivation: A Failure That Gets Misdiagnosed</h2>
          <p>Production agentic systems fail in a particular way that is both common and consistently misunderstood.</p>
          <p>An agent is tasked with a decision. The relevant information was retrieved. The retrieval logs confirm it entered the context window. The agent even surfaces it during intermediate reasoning. Yet when the decision point arrives, the agent acts as though the information was never there.</p>
          <p>The standard diagnosis attributes this to memory failure. The standard remediation is improved retrieval, expanded context windows, or additional memory indexing. These interventions address the wrong layer. The information was present. Retrieval was not the failure.</p>
          <div className="paper-definition">
            <div className="paper-definition-label">Core Claim</div>
            Such cases are better understood as gating failures: situations in which information was technically present but structurally prevented from becoming operative. The Cognitive Horizon framework provides the vocabulary and the diagnostic structure to investigate them precisely.
          </div>
        </div>

        {/* Section 2 */}
        <div className="paper-section">
          <div className="paper-section-num">2</div>
          <h2 className="paper-section-title">Framing: Latent vs. Operative State</h2>
          <div className="paper-list">
            <div className="paper-list-item">
              <span className="paper-list-key">Latent State</span>
              Information that is present in an agent's active context but not actively shaping its planning, tool selection, or decisions. The information is there. It is accessible in principle. It is not working.
            </div>
            <div className="paper-list-item">
              <span className="paper-list-key">Operative State</span>
              The subset of an agent's active context that is simultaneously salient to the attention mechanism and permitted by the policy layer to influence action. This is the information the agent is actually reasoning from.
            </div>
          </div>
          <div className="paper-principle">
            <div className="paper-principle-label">Foundational Observation</div>
            These two categories are not the same. The difference between them is where most production failures live.
          </div>
        </div>

        {/* Section 3 */}
        <div className="paper-section">
          <div className="paper-section-num">3</div>
          <h2 className="paper-section-title">The Boundary Condition</h2>
          <p>The foundational claim of the Cognitive Horizon model is straightforward.</p>
          <p>Let S(t) represent the active state of an agent at time t: everything in its context window, working memory, and immediately accessible buffers at that moment.</p>
          <div className="paper-formula">
            <div className="paper-formula-label">Boundary Condition</div>
            <div className="paper-formula-eq">x ∉ S(t) → x ∉ C(t)</div>
            <div className="paper-formula-terms">
              <div><strong>S(t)</strong> — Active state at time t</div>
              <div><strong>C(t)</strong> — Cognitive space: the set of information capable of shaping reasoning and action at time t</div>
            </div>
          </div>
          <p>This claim follows directly from the computational structure of language model inference. The model attends only to what is in its context. Long-term memory systems represent stored potential. Potential is not cognition. Information becomes cognitively relevant only when retrieved and injected into active state.</p>
          <p>State defines the outer boundary of the Cognitive Horizon. Nothing outside that boundary can influence behavior at time t. This boundary condition is necessary and well-established. It is not, however, sufficient to explain the failure pattern described in Section 1.</p>
        </div>

        {/* Section 4 */}
        <div className="paper-section">
          <div className="paper-section-num">4</div>
          <h2 className="paper-section-title">The Control Model: From Boundary to Operative Cognition</h2>
          <p>The boundary model explains failures at retrieval. It does not explain failures that occur after successful retrieval. Careful observation of production systems reveals a second class of failure: information enters state, is confirmed present, and remains behaviorally inert.</p>

          <div className="paper-formula">
            <div className="paper-formula-label">Control Model of Operative Cognition</div>
            <div className="paper-formula-eq">C(t) ≈ P(t)( A(t)( S(t) ) )</div>
            <div className="paper-formula-terms">
              <div><strong>S(t)</strong> — State: defines what information is feasible — the outer boundary</div>
              <div><strong>A(t)</strong> — Attention: determines what is salient — what the attention mechanism weights and surfaces</div>
              <div><strong>P(t)</strong> — Policy: determines what is permitted to influence action — the governance layer</div>
            </div>
          </div>

          <p>This formulation is not additive. It is nested. Attention operates on state. Policy operates on the output of attention. Each layer is a filter. Information that survives the first filter can still be blocked by the second.</p>

          <h3 className="paper-subsection-title">4.1 What Each Layer Does</h3>
          <div className="paper-list">
            <div className="paper-list-item"><span className="paper-list-key">State — The Container</span> Defines the maximum possible cognitive horizon at any given moment. Schema design, retrieval quality, and context window management all determine what enters this layer.</div>
            <div className="paper-list-item"><span className="paper-list-key">Attention — The Selector</span> Within state, not all information receives equal weight. Recency, relevance scoring, salience signals, and positional effects all influence which information rises to the surface of active reasoning. Information that is low-ranked may be present in state but functionally invisible during decision execution.</div>
            <div className="paper-list-item"><span className="paper-list-key">Policy — The Governor</span> Even information that is both present and salient can be blocked from influencing action by governance constraints, cost functions, behavioral guardrails, or role-specific restrictions that define what the agent is permitted to do with what it knows.</div>
          </div>
          <div className="paper-principle">
            <div className="paper-principle-label">Key Implication</div>
            The transition from latent to operative requires clearing all three layers. Failure at any one of them produces a gating failure.
          </div>

          <h3 className="paper-subsection-title">4.2 A Worked Example: Forward Logistics Resupply</h3>
          <p>Consider a forward logistics element operating an AI-assisted resupply planning agent in a contested environment. The agent has been tasked with generating a resupply route recommendation for an element that has reported critically low ammunition stocks.</p>
          <p>The agent's state contains:</p>
          <div className="paper-callout">
            <div className="paper-callout-row"><span className="paper-callout-key">Item 1</span> A current route database updated four hours ago</div>
            <div className="paper-callout-row"><span className="paper-callout-key">Item 2</span> An intelligence summary flagging Route BLUE as contested based on a report from six hours ago</div>
            <div className="paper-callout-row"><span className="paper-callout-key">Item 3</span> A real-time sensor feed showing Route BLUE has been clear for the past two hours</div>
            <div className="paper-callout-row"><span className="paper-callout-key">Item 4</span> A standard operating procedure (SOP) mandating avoidance of any route flagged as contested within the past twelve hours</div>
          </div>
          <p>The agent recommends Route GREEN — a longer and more exposed alternative. The commander asks why Route BLUE was not selected given the recent sensor data. The answer is a gating failure, and the model identifies exactly where it occurred.</p>
          <div className="paper-list">
            <div className="paper-list-item"><span className="paper-list-key">State Layer</span> All relevant information was present. The sensor feed showing Route BLUE clear entered state successfully. Retrieval did not fail.</div>
            <div className="paper-list-item"><span className="paper-list-key">Attention Layer</span> The sensor feed was salient. The agent surfaced it during intermediate reasoning and noted the discrepancy with the intelligence summary.</div>
            <div className="paper-list-item"><span className="paper-list-key">Policy Layer</span> The SOP governing route selection flagged Route BLUE as ineligible. The twelve-hour avoidance window was still active. The policy layer blocked the sensor data from influencing the final recommendation — not because the agent failed to see it, but because the governance constraint prevented it from acting on it.</div>
          </div>
          <div className="paper-definition">
            <div className="paper-definition-label">Diagnosis</div>
            This is a policy-layer gating failure. The fix is not improved retrieval. It is not better attention design. It is a policy review: whether the twelve-hour avoidance window is appropriately calibrated for the rate at which battlefield conditions evolve.
          </div>
        </div>

        {/* Section 5 */}
        <div className="paper-section">
          <div className="paper-section-num">5</div>
          <h2 className="paper-section-title">Gating Failures: A Structural Taxonomy</h2>
          <p>A gating failure occurs when an agent possesses relevant information but is structurally prevented from acting on it. The failure is architectural. The agent is not missing knowledge. It is suppressing knowledge through mechanisms that, from the agent's internal perspective, are operating correctly.</p>
          <div className="paper-list">
            <div className="paper-list-item"><span className="paper-list-key">Attention Suppression</span> A relevant signal is present in state but ranked below the salience threshold necessary to surface during decision execution. High-frequency, high-recency, or high-confidence signals crowd it out. The agent does not ignore the information deliberately — the attention mechanism simply never elevates it above competing content.</div>
            <div className="paper-list-item"><span className="paper-list-key">Policy Blocking</span> The information is salient but constrained by governance rules, cost functions, or behavioral guardrails. When policy is well-calibrated, this suppression is intentional and correct. When policy is outdated or miscalibrated, it silently suppresses valid reasoning with no visible error signal.</div>
            <div className="paper-list-item"><span className="paper-list-key">Spurious Signal Dominance</span> Attention is captured by noise — irrelevant but high-weighted information that crowds out the signal that matters. The agent is not reasoning poorly. It is reasoning well over the wrong subset of its state.</div>
            <div className="paper-list-item"><span className="paper-list-key">Policy-State Misalignment</span> The policy was calibrated for a prior state configuration. State has since evolved, but the policy has not been updated. The agent applies correct rules to an incorrect model of the current situation.</div>
          </div>
          <div className="paper-principle">
            <div className="paper-principle-label">In Every Case</div>
            The system possesses the knowledge. The failure is in the gating architecture that separates latent from operative. The remediation is not more data. It is better gating design.
          </div>
        </div>

        {/* Section 6 */}
        <div className="paper-section">
          <div className="paper-section-num">6</div>
          <h2 className="paper-section-title">Temporal Desynchronization</h2>
          <p>State, attention, and policy do not evolve at the same rate. This asymmetry is a structural property of any system with layered governance, and it produces a distinct class of instability.</p>
          <div className="paper-list">
            <div className="paper-list-item"><span className="paper-list-key">State</span> Highly reactive. Changes when new inputs arrive, when environmental signals shift, or when tools return unexpected output. In a dynamic operational environment, state can update continuously.</div>
            <div className="paper-list-item"><span className="paper-list-key">Attention</span> Reallocates fluidly in response to state changes. Fast relative to policy, though not instantaneous, and can be manipulated by salience-boosting inputs that may or may not reflect genuine operational priority.</div>
            <div className="paper-list-item"><span className="paper-list-key">Policy</span> Designed to be stable. Intentionally resistant to rapid change. Stability is a feature — it prevents overreaction to noise. But stability has a cost when the environment changes faster than the policy layer can track.</div>
          </div>

          <h3 className="paper-subsection-title">6.1 The Lagging Policy Scenario</h3>
          <p>Consider a sustained operation in which the ground situation evolves significantly over a twelve-hour period. State updates continuously. Attention reallocates appropriately. The policy layer, however, is based on a threat model from the operation's initial planning phase.</p>
          <p>By hour eight, the policy layer is governing decisions based on a threat picture that no longer reflects conditions on the ground. Novel signals are present in state and surfaced by attention. The policy layer suppresses them because they conflict with constraints derived from an outdated operational model. From outside the system, the agent appears to underreact. From inside the system, everything is consistent.</p>
          <div className="paper-definition">
            <div className="paper-definition-label">Temporal Desynchronization</div>
            The control layers are operating on different clocks, and the misalignment is producing systematically degraded output.
          </div>

          <h3 className="paper-subsection-title">6.2 The Overreactive Attention Scenario</h3>
          <p>The reverse failure is equally consequential. A high-salience signal arrives and the attention layer reallocates aggressively before the policy layer can apply appropriate constraints. The agent abandons prior reasoning in favor of the most recent high-priority input, even when that input is noise. The agent appears to overreact: inconsistent, volatile, easily distracted from its primary task.</p>

          <h3 className="paper-subsection-title">6.3 Diagnostic Implication</h3>
          <p>An agent that behaves inconsistently over time without any change in its underlying model may be experiencing temporal desynchronization rather than capability degradation. The distinction matters operationally.</p>
          <div className="paper-callout">
            <div className="paper-callout-row"><span className="paper-callout-key">Capability Degradation</span> Addressed through model updates, retraining, or replacement.</div>
            <div className="paper-callout-row"><span className="paper-callout-key">Temporal Desynchronization</span> Addressed through policy recalibration — updating the governance layer to reflect current operating conditions rather than the conditions that existed when the policy was originally designed.</div>
          </div>
        </div>

        {/* Section 7 */}
        <div className="paper-section">
          <div className="paper-section-num">7</div>
          <h2 className="paper-section-title">Diagnostic Protocol: Three Questions</h2>
          <p>The standard diagnostic question when an agent behaves unexpectedly is: did it remember? This question leads to retrieval investigations, context window audits, and memory system reviews. These are appropriate when the failure occurred at the retrieval layer. They are counterproductive when the failure occurred inside the Cognitive Horizon, after successful retrieval.</p>
          <p>The Cognitive Horizon framework replaces that single question with three, asked in sequence.</p>

          <div className="paper-callout">
            <div className="paper-callout-row">
              <span className="paper-callout-key">Question 1</span> Was the information retrieved into state?<br />
              <span style={{fontSize:"0.82rem",color:"var(--text-muted)"}}>If no → retrieval failure. Intervene in the retrieval mechanism: indexing, query formulation, or memory architecture.</span>
            </div>
            <div className="paper-callout-row">
              <span className="paper-callout-key">Question 2</span> Was the information made salient by the attention mechanism?<br />
              <span style={{fontSize:"0.82rem",color:"var(--text-muted)"}}>If yes to Q1 but no here → attention failure. Intervene in attention design: salience scoring, positional weighting, or retrieval re-ranking.</span>
            </div>
            <div className="paper-callout-row">
              <span className="paper-callout-key">Question 3</span> Was the information permitted by the policy layer to influence action?<br />
              <span style={{fontSize:"0.82rem",color:"var(--text-muted)"}}>If yes to Q1 and Q2 but no here → policy failure. Intervene in policy review: threshold calibration, conflict escalation, or human-in-the-loop routing.</span>
            </div>
          </div>

          <div className="paper-principle">
            <div className="paper-principle-label">Reframe</div>
            This protocol reframes agent evaluation from memory accuracy to structural operability. The question is not what the agent knew. It is what the agent was structurally capable of using. That distinction produces more targeted diagnoses and more effective interventions.
          </div>
        </div>

        {/* Section 8 */}
        <div className="paper-section">
          <div className="paper-section-num">8</div>
          <h2 className="paper-section-title">Multi-Agent Extension</h2>
          <p>In a single-agent system, the Cognitive Horizon is one agent's problem to manage. In a multi-agent system, each agent maintains its own State × Attention × Policy configuration. Those configurations interact across agent boundaries and produce failure modes that no individual agent's Cognitive Horizon can diagnose or prevent.</p>
          <p>The central risk in governed multi-agent systems is that an orchestrator — the policy engine sitting above all agents — introduces a higher-order policy layer that shapes the Operative State of every agent it governs. If the orchestrator's policy layer develops systematic biases, it begins to distort the Cognitive Horizon of every agent in the system simultaneously. Not by altering their state. Not by manipulating their attention. By reshaping their policy layer from above.</p>
          <div className="paper-principle">
            <div className="paper-principle-label">Structural Consequence</div>
            Each agent continues to function correctly within its individual Horizon. The Horizons themselves have been corrupted by the governance layer they depend on. This failure mode is Orchestrator Epistemic Capture — the multi-agent analog of the policy-layer gating failure described in Section 5.
          </div>

          <div className="paper-callout">
            <div className="paper-callout-row">
              <span className="paper-callout-key">PACS Implementation Note (2026-03-05)</span> The argument developed in this section directly governed a structural decision in the PACS architecture. The Meta-Evaluation Checkpoint — the component that governs the Managing Orchestrator's three protected injection points — was specified as one unified component rather than three separate validators. Policy is one function with one authority. P(t) is a single governance layer. Splitting the Checkpoint into three separate components would risk exactly the temporal desynchronization failure described in Section 6 of this paper, where independent validators diverge in calibration, threshold semantics, and enforcement strength until the governance model loses coherence from the outside. One Checkpoint. One epistemic frame. Three internal validation pathways differentiated by logic, not by authority.
            </div>
          </div>
        </div>

        {/* Section 9 */}
        <div className="paper-section">
          <div className="paper-section-num">9</div>
          <h2 className="paper-section-title">Connections to Related Work</h2>
          <div className="paper-list">
            <div className="paper-list-item"><span className="paper-list-key">SOAR and ACT-R</span> Classical cognitive architectures distinguished between working memory and long-term memory in ways that anticipate the Latent/Operative State distinction. SOAR's central claim — that working memory is not merely a buffer but the space in which reasoning occurs — aligns with the argument that presence in state does not guarantee operability.</div>
            <div className="paper-list-item"><span className="paper-list-key">CoALA (Sumers et al., 2024)</span> Established working memory as the organizing construct for language agent design. This paper accepts that foundation and extends it. Working memory defines the outer boundary of the Cognitive Horizon. Operative cognition requires the additional conditions of attention salience and policy permission, which CoALA does not fully theorize.</div>
            <div className="paper-list-item"><span className="paper-list-key">Reflexion (Shinn et al., 2023)</span> Reflexion's verbal reinforcement loop assumes that retrieved reflections will influence future agent behavior. The Cognitive Horizon model identifies an implicit vulnerability: reflections that enter state as latent — present but not operative — do not improve agent behavior. The framework predicts specific conditions under which Reflexion-style self-improvement will fail silently.</div>
            <div className="paper-list-item"><span className="paper-list-key">Generative Agents (Park et al., 2023)</span> The memory stream architecture distinguishes between comprehensive experience logging and selective memory activation through retrieval and reflection. This is the Latent/Operative distinction operating under a different name. Their retrieval mechanism — which weights memories by recency, importance, and relevance — is an attention mechanism: a system for moving information from latent to operative based on contextual priority.</div>
          </div>
        </div>

        {/* Section 10 */}
        <div className="paper-section">
          <div className="paper-section-num">10</div>
          <h2 className="paper-section-title">Limitations and Future Directions</h2>
          <div className="paper-list">
            <div className="paper-list-item"><span className="paper-list-key">Formalization</span> The formulation C(t) ≈ P(t)(A(t)(S(t))) is conceptual rather than mathematical. Future work should ground these in measurable constructs: attention weight distributions, policy constraint graphs, and state coverage metrics that can be instrumented in production systems.</div>
            <div className="paper-list-item"><span className="paper-list-key">Empirical Validation</span> The temporal desynchronization claim is theoretically coherent but empirically unvalidated in the agentic AI context. Designing studies that isolate this effect from other sources of instability is a meaningful near-term research direction.</div>
            <div className="paper-list-item"><span className="paper-list-key">Multi-Agent Formal Treatment</span> The interaction between individual agent Cognitive Horizons and orchestrator-level governance deserves formal treatment as a first-class research problem, particularly for high-stakes decision environments.</div>
            <div className="paper-list-item"><span className="paper-list-key">Diagnostic Protocol Validation</span> The three-question protocol is a practitioner framework, not a validated instrument. Its utility should be tested against documented production failure cases to determine whether it reliably distinguishes retrieval failures from attention failures from policy failures.</div>
          </div>
        </div>

        {/* Section 11 */}
        <div className="paper-section">
          <div className="paper-section-num">11</div>
          <h2 className="paper-section-title">Conclusion</h2>
          <p>Many agent failures that present as knowledge deficits are, on closer examination, gating failures: structural suppressions of information the system already possessed.</p>
          <p>The Cognitive Horizon framework provides the vocabulary to make this distinction, the formal model to locate the failure layer, and the diagnostic protocol to guide intervention.</p>
          <div className="paper-closing">
            <p>State defines what is possible. Attention shapes what is noticed. Policy determines what is permitted. Operative cognition requires alignment across all three. When that alignment breaks down, the failure is architectural, and the remediation must be architectural as well.</p>
            <p>This matters most in environments where the consequences of misdiagnosis are significant: where adding more memory to a system with a policy-layer failure wastes resources and leaves the underlying problem intact, and where recalibrating attention in a system with retrieval failure misses the problem entirely.</p>
            <p>The model is offered as a working tool for practitioners engaged in building, evaluating, and debugging complex agentic systems. It is intended to invite refinement, empirical testing, and extension into domains where the stakes of getting this right are high.</p>
          </div>
        </div>

        {/* References */}
        <div className="paper-section paper-references">
          <div className="paper-section-num">Ref</div>
          <h2 className="paper-section-title">References</h2>
          <div className="paper-ref-list">
            <div className="paper-ref">Anderson, J. R. (1996). ACT: A simple theory of complex cognition. <em>American Psychologist, 51</em>(4), 355–365.</div>
            <div className="paper-ref">Anderson, J. R., & Lebiere, C. (1998). <em>The atomic components of thought</em>. Lawrence Erlbaum Associates.</div>
            <div className="paper-ref">Kotseruba, I., & Tsotsos, J. K. (2020). 40 years of cognitive architectures. <em>Artificial Intelligence Review, 53</em>(1), 17–94.</div>
            <div className="paper-ref">Laird, J. E., Newell, A., & Rosenbloom, P. S. (1987). SOAR: An architecture for general intelligence. <em>Artificial Intelligence, 33</em>(1), 1–64.</div>
            <div className="paper-ref">Laird, J. E. (2022). <em>The Soar cognitive architecture</em>. MIT Press.</div>
            <div className="paper-ref">Park, J. S., et al. (2023). Generative agents: Interactive simulacra of human behavior. <em>UIST 2023</em>.</div>
            <div className="paper-ref">Shinn, N., et al. (2023). Reflexion: Language agents with verbal reinforcement learning. <em>NeurIPS 2023</em>. arXiv:2303.11366.</div>
            <div className="paper-ref">Sumers, T. R., Yao, S., Narasimhan, K., & Griffiths, T. L. (2024). Cognitive architectures for language agents. <em>Transactions on Machine Learning Research</em>.</div>
            <div className="paper-ref">Yao, S., et al. (2023). ReAct: Synergizing reasoning and acting in language models. <em>ICLR 2023</em>.</div>
          </div>
        </div>

        <div className="paper-footer-note">
          Professor Bone Lab · Draft v6 · Revised · Working paper — empirical validation and peer review invited
        </div>

      </div>
    </div>
  );
}
