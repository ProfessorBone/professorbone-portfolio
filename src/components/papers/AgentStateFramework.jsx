export default function AgentStateFramework({ onBack }) {
  return (
    <div className="paper-wrap">
      <button className="paper-back" onClick={onBack}>← Back to Research</button>

      <div className="paper-header">
        <div className="paper-lab-tag">Professor Bone Lab · Johns Hopkins University</div>
        <h1 className="paper-title">Agent State in Agentic AI Systems</h1>
        <p className="paper-subtitle">A Practitioner's Framework for Working Memory Design, Logging Strategy, and Multi-Agent Coordination</p>
        <div className="paper-meta-row">
          <span className="paper-meta-item"><span className="paper-meta-label">Author</span> Clarence "Professor Bone" Downs</span>
          <span className="paper-meta-item"><span className="paper-meta-label">Program</span> JHU Agentic AI Certificate</span>
          <span className="paper-meta-item"><span className="paper-meta-label">Published</span> December 2025 · Revised February 2026</span>
          <span className="paper-meta-item"><span className="paper-meta-label">Version</span> Draft v3</span>
        </div>
      </div>

      <div className="paper-body">

        {/* Abstract */}
        <div className="paper-abstract">
          <div className="paper-abstract-label">Abstract</div>
          <p>This paper develops a practitioner-oriented framework for agent state management in large language model (LLM)-based agentic systems. The theoretical foundation is the Cognitive Architectures for Language Agents (CoALA) framework (Sumers et al., 2024). This work extends that foundation with actionable engineering guidance for state schema design, logging strategy, and production deployment.</p>
          <p>There is a failure mode that motivates the most significant contribution of this edition. An agent fails to act on information that was technically present in its context. The retrieval succeeded. The data was available. The agent behaved as though it had seen none of it. This is not a retrieval failure. It is a gating failure, and the standard remediation of adding more memory addresses the wrong layer entirely.</p>
          <p>The paper's primary contributions are: (1) an operational interpretation of CoALA's working memory concept for software engineering contexts; (2) a novel taxonomy of four state update classes with corresponding logging policies; (3) practical design patterns for single-agent and multi-agent state coordination; and (4) a structural model distinguishing between information that is present in state and information that is actively shaping behavior.</p>
          <div className="paper-keywords">
            <span className="paper-kw-label">Keywords</span>
            {["agent state","working memory","agentic AI","CoALA","multi-agent systems","LangGraph","observability","state management","cognitive horizon","operative state","gating failures"].map(k => (
              <span key={k} className="paper-kw">{k}</span>
            ))}
          </div>
        </div>

        {/* Section 1 */}
        <div className="paper-section">
          <div className="paper-section-num">1</div>
          <h2 className="paper-section-title">Introduction</h2>
          <p>Agent state management is not an implementation detail. It is an architectural decision that determines what a system can reason about, how it can be debugged, and whether it behaves reliably under operational conditions.</p>
          <p>This paper addresses the gap between the theoretical frameworks that define what agent state should be and the engineering decisions practitioners face when building production systems. CoALA (Sumers et al., 2024) provides the strongest theoretical foundation available, drawing on decades of cognitive architecture research to establish working memory, long-term memory taxonomies, and decision-making cycles as central constructs. What CoALA does not fully address is the engineering layer: how to design schemas before implementation begins, what to log and what to discard, how to validate state across multi-step workflows, and how to coordinate state across multiple agents without introducing fragility.</p>
          <p>It also addresses a fifth question that the original edition did not anticipate: why an agent sometimes fails to act on information that was clearly available to it. The answer is not always retrieval failure. Often, the information was retrieved. It was present. Something in the architecture kept it from becoming operative.</p>

          <h3 className="paper-subsection-title">1.1 Scope and Positioning</h3>
          <p>This work is positioned as applied research bridging theory and practice. It interprets and extends existing theory, primarily CoALA, for engineering contexts. Novel contributions — including the logging taxonomy and the latent/operative state distinction — are proposed practitioner frameworks requiring empirical validation rather than established scientific results.</p>
          <p>The companion paper, <em>The Cognitive Horizon of an Agent</em> (Downs, 2026), develops the formal model of operative cognition applied in Section 3.5. Practitioners seeking deeper theoretical grounding are encouraged to read both documents together.</p>
        </div>

        {/* Section 2 */}
        <div className="paper-section">
          <div className="paper-section-num">2</div>
          <h2 className="paper-section-title">Theoretical Foundations</h2>

          <h3 className="paper-subsection-title">2.1 Classical Cognitive Architectures</h3>
          <p>The challenge of managing state in intelligent systems predates LLMs by decades. The cognitive architecture literature offers foundational insights that remain directly applicable to contemporary agent design.</p>
          <p>SOAR (State, Operator, And Result), developed by Laird, Newell, and Rosenbloom (1987), models cognition through a production system operating over working memory. Critically, in SOAR, working memory is not a buffer. It is the space where reasoning occurs. All interactions with the environment flow through structures attached to the top state.</p>
          <p>ACT-R (Adaptive Control of Thought, Rational), developed by Anderson and colleagues, presents a complementary modular architecture. ACT-R's buffer-mediated approach carries a key implication for LLM agent design: state should be structured, explicitly defined, and serve as the sole interface through which reasoning proceeds.</p>
          <p>A systematic review of 84 cognitive architectures over 40 years (Kotseruba & Tsotsos, 2020) finds that successful architectures share common principles: state must be explicit rather than implicit, structured rather than amorphous, and designed to support both current task execution and meta-level reasoning about the task itself.</p>

          <h3 className="paper-subsection-title">2.2 The CoALA Framework</h3>
          <p>The Cognitive Architectures for Language Agents framework (Sumers et al., 2024) provides the theoretical foundation for this paper. CoALA proposes that a language agent can be understood through three primary components.</p>
          <div className="paper-callout">
            <div className="paper-callout-row"><span className="paper-callout-key">Memory System</span> Working memory provides short-term storage for information relevant to the current decision cycle. Long-term memory provides persistent storage across semantic, episodic, and procedural dimensions.</div>
            <div className="paper-callout-row"><span className="paper-callout-key">Action Space</span> External actions interact with the environment through tool use and API calls. Internal actions operate on the agent's own memory through reasoning, retrieval, and learning.</div>
            <div className="paper-callout-row"><span className="paper-callout-key">Decision-Making Cycle</span> A structured loop alternating between planning and execution governs agent behavior.</div>
          </div>
          <p>CoALA's central insight is that LLMs function analogously to production systems in classical architectures. This paper adopts CoALA's conceptual framework and develops operational guidance for implementing it in software systems.</p>

          <h3 className="paper-subsection-title">2.3 The ReAct Paradigm</h3>
          <p>The ReAct paradigm (Yao et al., 2023) demonstrates the practical value of interleaving reasoning and action in LLM agents. Agents generating both reasoning traces and task-specific actions outperform those doing either in isolation. ReAct illustrates a principle that CoALA theorizes explicitly: state representation is necessary to carry forward results across thought-action-observation cycles.</p>

          <h3 className="paper-subsection-title">2.4 LangGraph and Contemporary Orchestration</h3>
          <p>LangGraph (LangChain, 2024) operationalizes these theoretical insights through a graph-based orchestration framework that treats state as a first-class architectural component. Applications are represented as directed graphs where nodes are processing steps and edges define transitions, with explicit state flowing through the graph.</p>

          <h3 className="paper-subsection-title">2.5 Memory in Generative Agents</h3>
          <p>Park et al. (2023) demonstrated sophisticated memory management in simulated social agents through a memory stream architecture that logs experiences continuously in natural language and retrieves relevant memories based on recency, importance, and relevance. This work illustrates a distinction this paper extends formally: the difference between logging everything and using information effectively.</p>
        </div>

        {/* Section 3 */}
        <div className="paper-section">
          <div className="paper-section-num">3</div>
          <h2 className="paper-section-title">Defining Agent State: An Operational Interpretation</h2>

          <h3 className="paper-subsection-title">3.1 From Theory to Implementation</h3>
          <p>CoALA defines working memory as information "relevant to the current decision cycle" that "persists across LLM calls." This paper operationalizes that definition:</p>
          <div className="paper-definition">
            <div className="paper-definition-label">Operational Definition</div>
            Agent state is a structured, typed data object representing the information an agent currently has access to for completing its task. It is explicitly defined by a schema, mutable across reasoning steps, and serves as the sole interface through which the LLM reasons about the task.
          </div>

          <h3 className="paper-subsection-title">3.2 What Agent State Contains</h3>
          <p>Drawing from CoALA's working memory concept, agent state typically includes five categories of information.</p>
          <div className="paper-list">
            <div className="paper-list-item"><span className="paper-list-key">Task Context</span> The goal or objective for the current task, constraints, and user preferences relevant to task execution.</div>
            <div className="paper-list-item"><span className="paper-list-key">Progress Tracking</span> Steps completed with their outcomes, current phase of execution, and remaining steps or open questions.</div>
            <div className="paper-list-item"><span className="paper-list-key">Retrieved Information</span> Documents, data, or facts gathered during execution, tool outputs, and relevant context from long-term memory.</div>
            <div className="paper-list-item"><span className="paper-list-key">Decision History</span> Key decisions and their rationale, branch points taken in conditional logic, and errors encountered with recovery actions.</div>
            <div className="paper-list-item"><span className="paper-list-key">Intermediate Results</span> Partial outputs under construction, drafts and analyses in progress, and hypotheses under consideration.</div>
          </div>

          <h3 className="paper-subsection-title">3.3 What Agent State Is Not</h3>
          <p>Agent state is not conversation history. Agent state is not the schema definition. Agent state is not LLM internal representation — LLMs have no persistent internal state across API calls. Agent state is not long-term memory. Agent state is not logging. Logs observe state. They do not define it.</p>

          <h3 className="paper-subsection-title">3.4 The Primacy of State in Agent Reasoning</h3>
          <div className="paper-principle">
            <div className="paper-principle-label">Design Principle — State Primacy</div>
            Information not represented in agent state is not available for agent reasoning. The state schema defines the agent's cognitive horizon for the current task.
          </div>
          <p>The practical implications are direct. If retrieved documents are not stored in state, the agent cannot reference them. If previous decisions are not tracked, the agent cannot explain its reasoning. State schema design is an architectural decision, not an implementation detail.</p>

          <h3 className="paper-subsection-title">3.5 From State Presence to Operative Cognition</h3>
          <p>Section 3.4 establishes a foundational principle: information not in state cannot influence reasoning. That claim is correct. Production experience reveals that it is not sufficient.</p>
          <p>Consider a concrete failure. An agent retrieves a relevant document. The retrieval logs confirm success. The document enters the context window. The agent surfaces it during intermediate reasoning. When the decision point arrives, the agent acts as though it had never seen the document. Engineers reach for the obvious remediation: better retrieval, larger context windows, more memory. These interventions sometimes help. More often they do not, because the failure was not at retrieval. The information was present. Something in the architecture kept it from becoming operative.</p>

          <div className="paper-formula">
            <div className="paper-formula-label">Refined Cognition Model</div>
            <div className="paper-formula-eq">C(t) ≈ P(t)( A(t)( S(t) ) )</div>
            <div className="paper-formula-terms">
              <div><strong>S(t)</strong> — State: defines what information is feasible, the outer boundary</div>
              <div><strong>A(t)</strong> — Attention: determines what is salient, what the agent actually weights</div>
              <div><strong>P(t)</strong> — Policy: determines what is permitted to influence action, the governance layer</div>
            </div>
          </div>

          <h3 className="paper-subsection-title">3.5.2 Latent vs. Operative State</h3>
          <div className="paper-list">
            <div className="paper-list-item"><span className="paper-list-key">Latent State</span> Information present in the context but not actively shaping planning, tool selection, or decisions. The information has been retrieved. It is in the context window. It is not working.</div>
            <div className="paper-list-item"><span className="paper-list-key">Operative State</span> The subset of state that is simultaneously salient to the attention mechanism and permitted by the policy layer to influence action. This is what the agent is actually reasoning from.</div>
          </div>
          <p>The transition from latent to operative is where most production failures live.</p>

          <h3 className="paper-subsection-title">3.5.3 Gating Failures: A Structural Taxonomy</h3>
          <p>Four structural causes appear most frequently in production systems.</p>
          <div className="paper-list">
            <div className="paper-list-item"><span className="paper-list-key">Attention Suppression</span> A relevant signal is present in state but ranked too low by the attention mechanism to influence output. High-frequency or high-recency signals crowd it out.</div>
            <div className="paper-list-item"><span className="paper-list-key">Policy Blocking</span> The information is salient but constrained by governance rules, cost functions, or behavioral guardrails that prevent the agent from acting on what it knows.</div>
            <div className="paper-list-item"><span className="paper-list-key">Spurious Signal Dominance</span> Attention is captured by noise. Irrelevant but high-weighted signals crowd out what matters.</div>
            <div className="paper-list-item"><span className="paper-list-key">Policy-State Misalignment</span> The policy was designed for a prior state configuration. State has since evolved, but policy has not been updated.</div>
          </div>
          <p>In every case, the system possesses the knowledge. The failure is in the gating. The fix is not more data. It is better gating design.</p>

          <h3 className="paper-subsection-title">3.5.4 The Three-Question Diagnostic Protocol</h3>
          <div className="paper-callout">
            <div className="paper-callout-row"><span className="paper-callout-key">Question 1</span> Was the information retrieved into state? If no → retrieval failure. Fix the retrieval mechanism.</div>
            <div className="paper-callout-row"><span className="paper-callout-key">Question 2</span> Was the information made salient? If no → attention failure. Fix the salience signals or attention weighting.</div>
            <div className="paper-callout-row"><span className="paper-callout-key">Question 3</span> Was the information permitted by policy to influence action? If no → policy failure. Fix the policy calibration.</div>
          </div>
          <p>This protocol reframes agent evaluation from memory accuracy to structural operability. The diagnostic question is not "what did the agent know?" but "what was the agent structurally capable of using?"</p>
        </div>

        {/* Section 4 */}
        <div className="paper-section">
          <div className="paper-section-num">4</div>
          <h2 className="paper-section-title">State and Observability</h2>

          <h3 className="paper-subsection-title">4.1 The Logging Question</h3>
          <p>A common question in agent development: if state updates at every step, should every update be logged? The question reveals a conceptual confusion between two distinct concerns. State management enables the agent to reason effectively. Observability enables humans to understand, debug, and evaluate agent behavior. These concerns have different optimization targets.</p>

          <h3 className="paper-subsection-title">4.2 Reconciling State and Observability</h3>
          <p>State is the agent's working memory. It should be lean, containing only task-relevant information. Observability is the human operator's window into agent behavior — infrastructure should capture comprehensive telemetry, then filter and analyze as needed. Operative-state monitoring is the layer between them: it tracks the latent-to-operative transition, confirming not just that information entered state, but that it influenced downstream decisions.</p>

          <h3 className="paper-subsection-title">4.3 Practical Recommendation</h3>
          <p>For production systems, the recommended approach proceeds in five steps: design state for reasoning; instrument comprehensively using OpenTelemetry; add decision-reference tracking by logging which state fields were referenced at each decision point; apply intelligent sampling strategies; and build dashboards focused on decision-relevant events including gating failure indicators.</p>
        </div>

        {/* Section 5 */}
        <div className="paper-section">
          <div className="paper-section-num">5</div>
          <h2 className="paper-section-title">A Taxonomy of State Updates</h2>
          <p>This section presents a novel taxonomy classifying state updates by their observability requirements.</p>

          <h3 className="paper-subsection-title">5.1 The Four Categories</h3>
          <div className="paper-list">
            <div className="paper-list-item">
              <span className="paper-list-key">Category 1 — Ephemeral Reasoning</span>
              Internal, high-frequency state changes that exist only to reach the next reasoning step. Examples: intermediate calculations, draft thoughts, temporary variables. Observability policy: do not persist to logs.
            </div>
            <div className="paper-list-item">
              <span className="paper-list-key">Category 2 — Decision-Relevant Updates</span>
              State changes that affect which action the agent takes next. Examples: plan modifications, branch selection, retry decisions, tool selection. Observability policy: log as structured events capturing the decision, its rationale, and the resulting action.
            </div>
            <div className="paper-list-item">
              <span className="paper-list-key">Category 3 — External Interaction Updates</span>
              State changes resulting from interaction with systems outside the agent. Examples: tool calls, API requests, database queries, user inputs. Observability policy: always log with full request/response details.
            </div>
            <div className="paper-list-item">
              <span className="paper-list-key">Category 4 — Memory-Qualifying Updates</span>
              State changes that should persist beyond the current task — candidates for long-term memory. Examples: user preferences discovered, successful strategies worth preserving, error patterns. Observability policy: log the event and write to long-term memory storage.
            </div>
          </div>

          <div className="paper-code">
            <div className="paper-code-label">Example — Decision Event Structure</div>
            <pre>{`{
  "event_type": "decision",
  "decision_id": "d-12345",
  "category": "plan_revision",
  "reason": "Initial search returned no results",
  "action_selected": "broaden_query",
  "state_fields_referenced": [
    "search_results",
    "research_question"
  ],
  "timestamp": "2025-12-23T10:15:30Z"
}`}</pre>
          </div>
        </div>

        {/* Section 6 */}
        <div className="paper-section">
          <div className="paper-section-num">6</div>
          <h2 className="paper-section-title">Multi-Agent State Coordination</h2>

          <h3 className="paper-subsection-title">6.1 The Coordination Challenge</h3>
          <p>When multiple agents collaborate, state management complexity increases in ways that individual agent design patterns do not anticipate. The fundamental question is how agents share information while maintaining coherent individual reasoning.</p>

          <h3 className="paper-subsection-title">6.2 State Contracts</h3>
          <p>For reliable multi-agent coordination, this paper proposes the concept of state contracts: explicit specifications of what each agent reads and writes, along with the preconditions required before an agent can execute and the postconditions it must satisfy when complete. State contracts enable static validation before runtime, clear debugging when handoffs fail, executable documentation, and isolated agent testing.</p>

          <h3 className="paper-subsection-title">6.3 Coordination Patterns</h3>
          <div className="paper-list">
            <div className="paper-list-item"><span className="paper-list-key">Supervisor Pattern</span> A central supervisor agent holds global state and dispatches tasks to worker agents. Workers return results to the supervisor, which updates shared state and determines next steps.</div>
            <div className="paper-list-item"><span className="paper-list-key">Pipeline Pattern</span> Agents execute in sequence, each consuming predecessor output. State flows linearly with clear handoff points.</div>
            <div className="paper-list-item"><span className="paper-list-key">Collaborative Pattern</span> Multiple agents operate on a shared workspace simultaneously. Requires conflict resolution strategies: last-write-wins, merge functions, or locking.</div>
          </div>

          <h3 className="paper-subsection-title">6.4 The Orchestrator Epistemic Capture Risk</h3>
          <p>In multi-agent systems, the orchestrator's policy is the most powerful single variable. It shapes what every agent is permitted to act on. This creates a second-order gating risk: the orchestrator's policy layer can develop systematic biases through continuous exposure to the agents it governs. When that happens, every agent's operative state is shaped by a distorted governance frame. This failure mode — Orchestrator Epistemic Capture — is developed in full in a companion architectural document.</p>
        </div>

        {/* Section 7 */}
        <div className="paper-section">
          <div className="paper-section-num">7</div>
          <h2 className="paper-section-title">Production Deployment Guidelines</h2>

          <h3 className="paper-subsection-title">7.1 State Schema Design Process</h3>
          <div className="paper-list">
            <div className="paper-list-item"><span className="paper-list-key">Step 1 — Task Analysis</span> Identify what the agent is trying to accomplish, what information it needs at each step, and what decisions must be traceable.</div>
            <div className="paper-list-item"><span className="paper-list-key">Step 2 — Information Inventory</span> Enumerate inputs, retrieved intermediate results, decisions and their rationale, and final outputs.</div>
            <div className="paper-list-item"><span className="paper-list-key">Step 3 — Schema Definition</span> Define a TypedDict or Pydantic schema with type annotations and reducers for concurrent updates.</div>
            <div className="paper-list-item"><span className="paper-list-key">Step 4 — Validation Rules</span> Define preconditions, postconditions, and invariants.</div>
            <div className="paper-list-item"><span className="paper-list-key">Step 5 — Observability Integration</span> Map state fields to telemetry events, configure sampling and retention, and add decision-reference tracking.</div>
          </div>
        </div>

        {/* Section 8 */}
        <div className="paper-section">
          <div className="paper-section-num">8</div>
          <h2 className="paper-section-title">Discussion</h2>

          <h3 className="paper-subsection-title">8.1 Summary of Contributions</h3>
          <div className="paper-list">
            <div className="paper-list-item"><span className="paper-list-key">Contribution 1</span> An operational interpretation of working memory that translates CoALA's theoretical concepts into software engineering terms with explicit schema design guidance.</div>
            <div className="paper-list-item"><span className="paper-list-key">Contribution 2</span> A logging taxonomy providing a novel four-category classification with observability strategy guidance, extended with gating-aware instrumentation fields.</div>
            <div className="paper-list-item"><span className="paper-list-key">Contribution 3</span> State contracts for multi-agent systems: a proposed mechanism for specifying and validating agent interactions.</div>
            <div className="paper-list-item"><span className="paper-list-key">Contribution 4</span> Design patterns and checklists for state schema design, validation, and production deployment.</div>
            <div className="paper-list-item"><span className="paper-list-key">Contribution 5</span> The latent versus operative state model: a structural extension of the state-primacy principle that distinguishes between information present in state and information actively shaping behavior.</div>
          </div>

          <h3 className="paper-subsection-title">8.2 Conclusion</h3>
          <p>Agent state management is foundational to building effective LLM-based agents. The theoretical groundwork laid by CoALA and classical cognitive architectures provides essential conceptual clarity. This paper has attempted to bridge that theory to practice through frameworks, patterns, and engineering guidance.</p>
          <div className="paper-closing">
            <p>State schema design is architecture, not implementation detail. The choice of what information flows through an agent system determines what that system can reason about.</p>
            <p>State presence is not state operability. The choice of how information is weighted, prioritized, and permitted to influence action determines what the system actually does.</p>
            <p>Both insights are necessary. Neither is sufficient alone. Together, they define the practical frontier of agent state management as the field matures.</p>
          </div>
        </div>

        {/* References */}
        <div className="paper-section paper-references">
          <div className="paper-section-num">Ref</div>
          <h2 className="paper-section-title">References</h2>
          <div className="paper-ref-list">
            <div className="paper-ref">Anderson, J. R. (1996). ACT: A simple theory of complex cognition. <em>American Psychologist, 51</em>(4), 355–365.</div>
            <div className="paper-ref">Downs, C. (2026). The Cognitive Horizon of an Agent. Professor Bone Lab Working Paper.</div>
            <div className="paper-ref">Guo, T., et al. (2024). Large language model based multi-agents: A survey of progress and challenges. <em>arXiv:2402.01680</em>.</div>
            <div className="paper-ref">Kotseruba, I., & Tsotsos, J. K. (2020). 40 years of cognitive architectures. <em>Artificial Intelligence Review, 53</em>(1), 17–94.</div>
            <div className="paper-ref">Laird, J. E. (2012). <em>The Soar cognitive architecture</em>. MIT Press.</div>
            <div className="paper-ref">LangChain. (2024). LangGraph documentation. https://langchain-ai.github.io/langgraph/</div>
            <div className="paper-ref">OpenTelemetry. (2025). AI agent observability: Evolving standards and best practices. OpenTelemetry Blog.</div>
            <div className="paper-ref">Park, J. S., et al. (2023). Generative agents: Interactive simulacra of human behavior. <em>UIST 2023</em>.</div>
            <div className="paper-ref">Sumers, T. R., Yao, S., Narasimhan, K., & Griffiths, T. L. (2024). Cognitive architectures for language agents. <em>Transactions on Machine Learning Research</em>.</div>
            <div className="paper-ref">Yao, S., et al. (2023). ReAct: Synergizing reasoning and acting in language models. <em>ICLR 2023</em>.</div>
          </div>
        </div>

        <div className="paper-footer-note">
          Professor Bone Lab · Draft v3, Revised February 2026 · Licensed under CC BY 4.0
        </div>

      </div>
    </div>
  );
}
