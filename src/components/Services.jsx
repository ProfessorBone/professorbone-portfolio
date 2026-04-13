import Seo from "./Seo";
import { SEO_ROUTES } from "../seoData";

export default function Services({ setPage }) {
  return (
    <div className="inner-section">
      <Seo {...SEO_ROUTES.services} />
      <div className="section-tag">06 — Services</div>
      <h1 className="section-heading services-heading">Governance-First<br />AI Systems</h1>
      <p className="section-sub">
        I design AI systems where governance is structural, not optional. Every system is constraint-governed, role-defined, and built to operate reliably under real conditions.
      </p>
      <p className="services-bridge">
        This work is delivered through governed architectures, agentic applications, and multi-agent systems designed for real operational environments.
      </p>
      <p className="services-bridge">
        These systems are used to guide users, automate workflows, and support decision-making in real operational environments.
      </p>

      {/* ── Primary Service ── */}
      <div className="services-section-label">Primary Service</div>
      <div className="services-primary-card">
        <div className="services-card-kicker">Governed AI Architecture</div>
        <div className="services-primary-layout">
          <div className="services-primary-main">
            <p className="services-card-body">
              Most AI systems are built first and governed later. That order produces fragile systems that drift from their intended purpose, violate constraints under pressure, and lose trust over time.
            </p>
            <p className="services-card-body">
              I design systems where governance is embedded at the architectural level. It is defined in the specification, enforced through every interaction, and observable at runtime. This is not a compliance layer. It is the system.
            </p>
            <div className="services-includes-label">What this includes</div>
            <ul className="services-list">
              <li>Behavioral Constraint Weighting Architecture (BCWA): a priority-ordered constraint system governing decision-making at every layer</li>
              <li>Value Resolution Stack: structured handling of competing objectives when constraints conflict</li>
              <li>Task Priority Engine: governance-aware sequencing that respects constraint hierarchies</li>
              <li>Specification-embedded evaluation: defined drift types with detection and correction methodology</li>
              <li>Injection defense architecture: protection against prompt manipulation and constraint bypass</li>
              <li>Ethics-first constraint ordering for organizations requiring value-aligned systems</li>
            </ul>
          </div>
          <div className="services-primary-aside">
            <div className="services-for-card">
              <div className="services-for-label">Who this is for</div>
              <p>Organizations that need AI systems they can trust in production. Teams operating in environments where safety, compliance, or alignment is not optional.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Applied Services ── */}
      <div className="services-section-label" style={{ marginTop: "72px" }}>Applied Services</div>
      <div className="services-applied-grid">
        <div className="services-applied-card">
          <div className="services-card-kicker">Multi-Agent Systems Design</div>
          <p className="services-card-body">
            Multi-agent systems are used when single-agent architectures are no longer sufficient.
          </p>
          <p className="services-card-body">
            When coordination, scale, or operational complexity requires it, I design multi-agent systems where each agent operates within defined boundaries and participates in a governed system of interaction.
          </p>
          <p className="services-card-body">
            Each agent has a role, a scope, and enforced constraints. Orchestration is explicit. Communication is structured. Behavior is controlled at the system level, not left to emergence.
          </p>
          <div className="services-includes-label">What this includes</div>
          <ul className="services-list">
            <li>Role-based agent architecture with defined responsibilities and constraints</li>
            <li>Orchestration layer design with governed routing and coordination</li>
            <li>Agent-to-agent communication models including task delegation and handoff protocols</li>
            <li>System-level governance spanning the full agent network</li>
            <li>Governed deployments with explicit configuration, roles, and constraint enforcement</li>
          </ul>
          <div className="services-includes-label" style={{ marginTop: "28px" }}>Proof of work</div>
          <ul className="services-proof-list">
            <li>
              <button className="services-proof-link" onClick={() => setPage("freightmind")}>FreightMind</button>: two governed agents (Jack Crawford, orchestrator/governance; Will Graham, field operations/route intelligence) running on real logistics data with persistent route memory and a live operational dashboard
            </li>
            <li>
              <button className="services-proof-link" onClick={() => setPage("continuum")}>Continuum</button>: full governance architecture documentation including BCWA, Value Resolution Stack, and multi-agent coordination model
            </li>
            <li>Apex: ten-agent governed revenue system with named roles, defined interaction contracts, and system-level constraint enforcement</li>
          </ul>
        </div>

        <div className="services-applied-card">
          <div className="services-card-kicker">Agentic Web Apps</div>
          <p className="services-card-body">
            Not every problem requires a multi-agent system. Many are better solved with a single, well-governed agent operating within a clearly defined domain.
          </p>
          <p className="services-card-body">
            I build domain-bounded agentic applications designed to solve specific operational problems. These are not generic chat interfaces. They are software systems with embedded AI agents that guide workflows, support decisions, and move users to the correct next step.
          </p>
          <p className="services-card-body">
            AEGIS is an example of this approach: a governed, domain-bounded system designed to guide users through structured workflows.
          </p>
          <div className="services-includes-label">What this includes</div>
          <ul className="services-list">
            <li>Single-agent architecture design with explicit domain boundaries</li>
            <li>Domain-specific knowledge integration using structured data and operational rules</li>
            <li>Retrieval-augmented generation (RAG) grounded in real organizational knowledge</li>
            <li>Full-stack implementation including frontend, API, and backend systems</li>
            <li>Governance specification defining the agent's role, constraints, and behavioral limits</li>
          </ul>
          <div className="services-for-card" style={{ marginTop: "28px", position: "static" }}>
            <div className="services-for-label">Who this is for</div>
            <p>Organizations that need a reliable, explainable AI system for a defined workflow. Teams that value control, auditability, and operational clarity over novelty.</p>
          </div>
        </div>
      </div>

      {/* ── Supporting Capabilities ── */}
      <div className="services-section-label" style={{ marginTop: "72px" }}>Supporting Capabilities</div>
      <div className="services-support-grid">
        <div className="services-support-card">
          <div className="services-support-title">Retrieval and Knowledge Systems (RAG)</div>
          <p className="services-support-body">
            Every retrieval system I build starts from one principle: the system must know when it does not have sufficient information to answer. Without that boundary, RAG becomes a confidence engine for bad data.
          </p>
          <p className="services-support-body">
            I design retrieval pipelines that connect agents to approved knowledge sources and enforce answer integrity. This includes document ingestion, structured chunking, vector search, relevance evaluation, confidence scoring, and citation-aware response generation.
          </p>
          <p className="services-support-body">
            Each system is built to surface what it knows, flag what it does not, and never fabricate the difference.
          </p>
        </div>

        <div className="services-support-card">
          <div className="services-support-title">Full-Stack AI Integration</div>
          <p className="services-support-body">
            AI systems require real infrastructure to operate reliably. I build the full application layer around the agent: React frontends, Express API services, YAML-driven configuration systems, local service deployments (geocoding, routing), and live operational dashboards wired to real data sources.
          </p>
          <p className="services-support-body">
            The result is a system that runs in production under real conditions, not a prototype that fails at the first edge case.
          </p>
        </div>

        <div className="services-support-card">
          <div className="services-support-title">Privacy and Compliance-Aware AI</div>
          <p className="services-support-body">
            Some domains require strict control over data handling and system behavior. I design AI systems with privacy and compliance constraints built into the architecture from the beginning.
          </p>
          <p className="services-support-body">
            Data minimization, controlled model exposure, role-based access, auditability, and clearly defined trust boundaries. Architectures can be designed to support HIPAA-aligned workflows and BAA-compatible integrations where required.
          </p>
        </div>
      </div>

      {/* ── Closing Position ── */}
      <div className="services-closing">
        <p>Most systems I build are intentionally single-agent and domain-bounded for reliability. Multi-agent architectures are deployed when coordination, scale, or system complexity requires it.</p>
        <p className="services-closing-em">In every case, governance comes first.</p>
      </div>

      {/* ── CTA ── */}
      <div className="services-cta">
        <h2 className="services-cta-heading">Let's Build Something Real</h2>
        <p className="services-cta-body">If you need an AI system that operates reliably under real constraints, let's talk.</p>
        <button className="btn-primary" onClick={() => setPage("contact")}>Let's Talk</button>
      </div>
    </div>
  );
}
