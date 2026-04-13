import Seo from "./Seo";
import { SEO_ROUTES } from "../seoData";

export default function Services({ setPage }) {
  function go(p, e) {
    e.preventDefault();
    setPage && setPage(p);
  }

  return (
    <div className="inner-section">
      <Seo {...SEO_ROUTES.services} />
      <div className="section-tag">03 — Services</div>
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
      <div className="svc-tier-label">Primary Service</div>
      <div className="svc-primary-block">
        <h2 className="svc-primary-title">Governed AI Architecture</h2>
        <p className="svc-body">
          Most AI systems are built first and governed later. That order produces fragile systems that drift from their intended purpose, violate constraints under pressure, and lose trust over time.
        </p>
        <p className="svc-body">
          I design systems where governance is embedded at the architectural level. It is defined in the specification, enforced through every interaction, and observable at runtime. This is not a compliance layer. It is the system.
        </p>
        <div className="svc-list-label">What this includes</div>
        <ul className="svc-list">
          <li><strong>Behavioral Constraint Weighting Architecture (BCWA)</strong>: a priority-ordered constraint system governing decision-making at every layer</li>
          <li><strong>Value Resolution Stack</strong>: structured handling of competing objectives when constraints conflict</li>
          <li><strong>Task Priority Engine</strong>: governance-aware sequencing that respects constraint hierarchies</li>
          <li><strong>Specification-embedded evaluation</strong>: defined drift types with detection and correction methodology</li>
          <li><strong>Injection defense architecture</strong>: protection against prompt manipulation and constraint bypass</li>
          <li><strong>Ethics-first constraint ordering</strong> for organizations requiring value-aligned systems</li>
        </ul>
        <div className="svc-for">
          <span className="svc-for-label">Who this is for</span>
          <p>Organizations that need AI systems they can trust in production. Teams operating in environments where safety, compliance, or alignment is not optional.</p>
        </div>
      </div>

      {/* ── Applied Services ── */}
      <div className="svc-tier-label">Applied Services</div>
      <div className="svc-applied-grid">
        {/* Card A: Multi-Agent */}
        <div className="svc-applied-card">
          <h3 className="svc-applied-title">Multi-Agent Systems Design</h3>
          <p className="svc-body">
            Multi-agent systems are used when single-agent architectures are no longer sufficient.
          </p>
          <p className="svc-body">
            When coordination, scale, or operational complexity requires it, I design multi-agent systems where each agent operates within defined boundaries and participates in a governed system of interaction.
          </p>
          <p className="svc-body">
            Each agent has a role, a scope, and enforced constraints. Orchestration is explicit. Communication is structured. Behavior is controlled at the system level, not left to emergence.
          </p>
          <div className="svc-list-label">What this includes</div>
          <ul className="svc-list">
            <li>Role-based agent architecture with defined responsibilities and constraints</li>
            <li>Orchestration layer design with governed routing and coordination</li>
            <li>Agent-to-agent communication models including task delegation and handoff protocols</li>
            <li>System-level governance spanning the full agent network</li>
            <li>Governed deployments with explicit configuration, roles, and constraint enforcement</li>
          </ul>
          <div className="svc-list-label" style={{ marginTop: "28px" }}>Proof of work</div>
          <ul className="svc-proof-list">
            <li>
              <a href="/freightmind" className="svc-proof-link" onClick={(e) => go("freightmind", e)}>FreightMind</a>: two governed agents (Jack Crawford, orchestrator/governance; Will Graham, field operations/route intelligence) running on real logistics data with persistent route memory and a live operational dashboard
            </li>
            <li>
              <a href="/continuum" className="svc-proof-link" onClick={(e) => go("continuum", e)}>Continuum</a>: governance architecture including BCWA, Value Resolution Stack, and multi-agent coordination model
            </li>
            <li>
              <strong>Apex</strong>: ten-agent governed revenue system with defined roles, interaction contracts, and system-level constraint enforcement
            </li>
          </ul>
        </div>

        {/* Card B: Agentic Web Apps */}
        <div className="svc-applied-card">
          <h3 className="svc-applied-title">Agentic Web Apps</h3>
          <p className="svc-body">
            Not every problem requires a multi-agent system. Many are better solved with a single, well-governed agent operating within a clearly defined domain.
          </p>
          <p className="svc-body">
            I build domain-bounded agentic applications designed to solve specific operational problems. These are not generic chat interfaces. They are software systems with embedded AI agents that guide workflows, support decisions, and move users to the correct next step.
          </p>
          <p className="svc-body">
            AEGIS is an example of this approach: a governed, domain-bounded system designed to guide users through structured workflows.
          </p>
          <div className="svc-list-label">What this includes</div>
          <ul className="svc-list">
            <li>Single-agent architecture design with explicit domain boundaries</li>
            <li>Domain-specific knowledge integration using structured data and operational rules</li>
            <li>Retrieval-augmented generation (RAG) grounded in real organizational knowledge</li>
            <li>Full-stack implementation including frontend, API, and backend systems</li>
            <li>Governance specification defining the agent's role, constraints, and behavioral limits</li>
          </ul>
          <div className="svc-for" style={{ marginTop: "28px" }}>
            <span className="svc-for-label">Who this is for</span>
            <p>Organizations that need a reliable, explainable AI system for a defined workflow. Teams that value control, auditability, and operational clarity over novelty.</p>
          </div>
        </div>
      </div>

      {/* ── Supporting Capabilities ── */}
      <div className="svc-tier-label">Supporting Capabilities</div>
      <div className="svc-support-grid">
        <div className="glass-card svc-support-card">
          <div className="svc-support-title">Retrieval and Knowledge Systems</div>
          <p className="svc-support-body">
            Every retrieval system I build starts from one principle: the system must know when it does not have sufficient information to answer. Without that boundary, retrieval becomes a confidence engine for bad data.
          </p>
          <p className="svc-support-body">
            I design retrieval pipelines that connect agents to approved knowledge sources and enforce answer integrity. This includes document ingestion, structured chunking, vector search, relevance evaluation, confidence scoring, and citation-aware response generation.
          </p>
          <p className="svc-support-body">
            Each system is built to surface what it knows, flag what it does not, and never fabricate the difference.
          </p>
        </div>

        <div className="glass-card svc-support-card">
          <div className="svc-support-title">Full-Stack AI Integration</div>
          <p className="svc-support-body">
            AI systems require real infrastructure to operate reliably. I build the full application layer around the agent, including React frontends, API services, configuration systems, local service integrations, and live operational dashboards connected to real data sources.
          </p>
          <p className="svc-support-body">
            The result is a system that runs in production under real conditions, not a prototype that fails at the first edge case.
          </p>
        </div>

        <div className="glass-card svc-support-card">
          <div className="svc-support-title">Privacy and Compliance-Aware AI</div>
          <p className="svc-support-body">
            Some domains require strict control over data handling and system behavior. I design AI systems with privacy and compliance constraints built into the architecture from the beginning.
          </p>
          <p className="svc-support-body">
            This includes data minimization, controlled model exposure, role-based access, auditability, and clearly defined trust boundaries.
          </p>
          <p className="svc-support-body">
            Architectures can be designed to support HIPAA-aligned workflows and BAA-compatible integrations where required.
          </p>
        </div>
      </div>

      {/* ── Closing ── */}
      <div className="svc-closing">
        Most systems I build are intentionally single-agent and domain-bounded for reliability. Multi-agent architectures are deployed when coordination, scale, or system complexity requires it. In every case, governance comes first.
      </div>

      {/* ── CTA ── */}
      <div className="services-cta">
        <h2 className="services-cta-heading">Let's Build Something Real</h2>
        <p className="services-cta-body">If you need an AI system that operates reliably under real constraints, let's talk.</p>
        <a href="/contact" className="btn-primary" onClick={(e) => go("contact", e)}>Let's Talk</a>
      </div>
    </div>
  );
}
