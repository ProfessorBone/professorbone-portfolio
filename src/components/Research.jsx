import Seo from "./Seo";
import { SEO_ROUTES } from "../seoData";
import AgentStateFramework from "./papers/AgentStateFramework";
import OrchestratorEpistemicCapture from "./papers/OrchestratorEpistemicCapture";
import CognitiveHorizon from "./papers/CognitiveHorizon";
import EpistemicGovernance from "./papers/EpistemicGovernance";
import GGIBPart1 from "./papers/GGIBPart1";
import GGIBPart2 from "./papers/GGIBPart2";
import GGIBPart3 from "./papers/GGIBPart3";
import GGIBPart4 from "./papers/GGIBPart4";
import GGIBPart5 from "./papers/GGIBPart5";
import GGIBPart6 from "./papers/GGIBPart6";
import "../paper.css";
import "../paper-ggib.css";
import "../research.css";

// Preserve previously published paper URLs independently of the current overview.
const PAPER_COMPONENTS = {
  "agent-state": AgentStateFramework,
  orchestrator: OrchestratorEpistemicCapture,
  cognitive: CognitiveHorizon,
  epistemic: EpistemicGovernance,
  "ggib-1": GGIBPart1,
  "ggib-2": GGIBPart2,
  "ggib-3": GGIBPart3,
  "ggib-4": GGIBPart4,
  "ggib-5": GGIBPart5,
  "ggib-6": GGIBPart6,
};

const CYCLE = [
  { name: "Observe", actor: "Agent", description: "Receive the context the governing system makes available." },
  { name: "Reason", actor: "Agent", description: "Work through the task within that context." },
  { name: "Submit", actor: "Agent", description: "Propose a typed transition for adjudication." },
  { name: "Resolve", actor: "Runtime", description: "Determine whether the proposed transition may occur." },
];

const SURFACES = [
  { name: "Memory & retrieval", question: "What may the system remember, and how may that record shape what an agent sees next?" },
  { name: "Tools & effects", question: "Who may authorize a tool invocation, and when may its result affect governed state?" },
  { name: "Task continuity", question: "Who owns the record of what remains, what may happen next, and when a task is complete?" },
  { name: "Authority & drift", question: "Who may change the governing standards, and how can the system detect when they stop holding?" },
];

export default function Research({ initialPaper = null, setPage }) {
  if (initialPaper && PAPER_COMPONENTS[initialPaper]) {
    const PaperComponent = PAPER_COMPONENTS[initialPaper];
    const paperSeo = SEO_ROUTES[`research/${initialPaper}`];
    return (
      <>
        {paperSeo && <Seo {...paperSeo} />}
        <PaperComponent onBack={() => setPage?.("research")} />
      </>
    );
  }

  function go(page, event) {
    if (!setPage || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    setPage(page);
  }

  return (
    <main className="inner-section crc-research" aria-labelledby="research-heading">
      <Seo {...SEO_ROUTES.research} />
      <header className="crc-header">
        <div className="section-tag">04 — Research</div>
        <h1 className="section-heading" id="research-heading">Current<br />Research</h1>
        <p className="crc-kicker">Constitutional Runtime Computation</p>
        <p className="crc-intro">
          My current research centers on how AI systems govern the passage from reasoning to action,
          and how the body of research around that question can grow coherently.
        </p>
        <div className="crc-status"><span aria-hidden="true" />Conceptual architecture · Ongoing research</div>
      </header>

      <nav className="crc-contents" aria-label="On this page">
        <a href="#crc-architecture">The architecture <span aria-hidden="true">↗</span></a>
        <a href="#crc-corpus">The corpus <span aria-hidden="true">↗</span></a>
        <a href="#crc-open-questions">Open questions <span aria-hidden="true">↗</span></a>
      </nav>

      <section className="crc-section" id="crc-architecture" aria-labelledby="crc-architecture-heading">
        <div className="crc-section-label">01 / The central question</div>
        <h2 id="crc-architecture-heading">When may an agent’s reasoning become an actual effect?</h2>
        <p>
          Building AEGIS raised a practical question: how could an AI-assisted system support a
          practitioner’s work while keeping her authority enforceable? That question helped shape
          Constitutional Runtime Computation, or CRC.
        </p>
        <p>
          CRC proposes a runtime architecture in which an agent reasons and submits a typed proposal.
          A separate governing runtime determines whether that transition is authorized from the
          system’s current state. The proposal must pass through that boundary before it can become
          an authorized effect.
        </p>
        <figure className="crc-cycle">
          <figcaption>The proposed agent loop <span>ORSR</span></figcaption>
          <ol>
            {CYCLE.map(({ name, actor, description }, index) => (
              <li key={name} className={actor === "Runtime" ? "crc-runtime-step" : undefined}>
                <span className="crc-step-number">0{index + 1}</span>
                <strong>{name}</strong>
                <span className="crc-step-actor">{actor}</span>
                <p>{description}</p>
              </li>
            ))}
          </ol>
        </figure>
        <aside className="crc-distinction" aria-label="An important distinction">
          <strong>Authorization and correctness are separate questions.</strong>
          <p>
            A procedurally legitimate transition can still carry an incorrect or harmful conclusion.
            CRC investigates the conditions under which an effect is permitted; content quality
            remains a separate responsibility.
          </p>
        </aside>
        <a className="crc-text-link" href="/projects" onClick={(event) => go("projects", event)}>How AEGIS informed the research <span aria-hidden="true">→</span></a>
      </section>

      <section className="crc-section" aria-labelledby="crc-companions-heading">
        <div className="crc-section-label">02 / Beyond the core paper</div>
        <h2 id="crc-companions-heading">Following authority through the system.</h2>
        <p>
          The core argument raises further questions wherever an agent encounters information,
          invokes a capability, or continues a task. Companion papers examine those surfaces and
          the relationships between them.
        </p>
        <dl className="crc-surfaces">
          {SURFACES.map(({ name, question }) => (
            <div key={name}><dt>{name}</dt><dd>{question}</dd></div>
          ))}
        </dl>
      </section>

      <section className="crc-section" id="crc-corpus" aria-labelledby="crc-corpus-heading">
        <div className="crc-section-label">03 / Constitutional Corpus Engineering</div>
        <h2 id="crc-corpus-heading">How does a growing body of research stay coherent?</h2>
        <p>
          As CRC expanded, maintaining the relationships between its papers became an engineering
          problem of its own. Definitions could drift. Two documents could appear to own the same
          concept. A revision could repair one paper while leaving dependent papers inconsistent.
        </p>
        <p>
          The resulting work on Constitutional Corpus Engineering examines how a technical corpus
          can make ownership, authority, dependencies, versions, and unresolved questions explicit.
          The method grows from the CRC case study; its usefulness beyond that setting requires
          further validation.
        </p>
        <div className="crc-corpus-practices">
          <details>
            <summary>Creating the corpus <span aria-hidden="true">+</span></summary>
            <div className="crc-detail-body"><p>
              Give each artifact a declared purpose and scope. Identify which source owns a
              definition, which papers consume it, and where a proposed contribution extends
              existing work. Explanations, navigation, evidence, and governing definitions carry
              different kinds of authority.
            </p></div>
          </details>
          <details>
            <summary>Maintaining coherence <span aria-hidden="true">+</span></summary>
            <div className="crc-detail-body"><p>
              Review a change alongside the artifacts that depend on it. Keep current versions
              identifiable, preserve historical records, and make unresolved dependencies visible.
              Writing a proposed solution, publishing its specification, and demonstrating closure
              are distinct steps.
            </p></div>
          </details>
          <details>
            <summary>Entering the corpus <span aria-hidden="true">+</span></summary>
            <div className="crc-detail-body"><p>
              Readers need an orientation: where to begin, which sources govern, and what remains
              open. New contributions need a declared role, authority boundary, dependency analysis,
              and review before admission. Settled material, recognized unresolved dependencies,
              and exploratory research follow different routes.
            </p></div>
          </details>
        </div>
      </section>

      <section className="crc-section" id="crc-open-questions" aria-labelledby="crc-open-heading">
        <div className="crc-section-label">04 / The research frontier</div>
        <h2 id="crc-open-heading">What remains open.</h2>
        <p>
          CRC is a developing conceptual architecture. Formal verification of a deployed substrate
          remains future work. Central questions include:
        </p>
        <ul className="crc-questions">
          <li>How can human judgment become computable rules without being distorted or frozen in place?</li>
          <li>How can a deployed governing runtime be verified as its rules and operating conditions evolve?</li>
          <li>How can the architecture distinguish an incomplete rule from a judgment that cannot be reduced to a rule?</li>
        </ul>
      </section>
      <div className="crc-conversation">
        <p>Interested in the architecture or the corpus methodology?</p>
        <a className="crc-text-link" href="/contact" onClick={(event) => go("contact", event)}>Let’s talk about the research <span aria-hidden="true">→</span></a>
      </div>
    </main>
  );
}
