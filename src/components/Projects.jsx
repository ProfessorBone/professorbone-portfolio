import Seo from "./Seo";
import { SEO_ROUTES } from "../seoData";

export default function Projects({ setPage }) {
  function go(p, e) {
    e.preventDefault();
    setPage && setPage(p);
  }

  return (
    <main className="inner-section frosted-page" aria-labelledby="projects-heading">
      <Seo {...SEO_ROUTES.projects} />
      <header className="frosted-card frosted-header">
      <div className="section-tag">02 — Projects</div>
      <h1 className="section-heading" id="projects-heading">Current Work</h1>
      </header>

      <div className="projects-grid">

        {/* ── NEWARK AI ── */}
        <article className="pb-card proj-feature frosted-card frosted-row" id="newark-ai">
          <div className="project-summary frosted-card-heading">
          <img className="proj-logo" src="/newarkai-logo.png" alt="Newark AI logo" width="800" height="695" />
          <div className="proj-status proj-status-live">In development</div>
          <h2 className="proj-feature-title">
            <a href="https://www.newarkai.org/" target="_blank" rel="noopener">Newark AI</a>
          </h2>
          <p className="proj-lead">
            An independent civic institution taking shape in the city we call home. Newark AI is being
            built to help our neighbors across generations understand, question, and build with
            artificial intelligence. Its first planned program, Cohort One, focuses on young people.
          </p>
          <div className="proj-tags">
            {["Civic Institution", "AI Literacy", "Youth Education", "Institutional Governance"].map((t) => (
              <span key={t} className="proj-tag">{t}</span>
            ))}
          </div>
          </div>
          <div className="proj-body">
            <p>
              <a className="proj-inline-link" href="https://www.newarkai.org/" target="_blank" rel="noopener noreferrer">Newark AI</a> begins with a personal responsibility to the place we live and the people we share it
              with. Newark’s residents are our neighbors, our elders, our youth, our friends, and our
              colleagues. As AI changes education, work, public services, and everyday life, we believe we
              have a responsibility to help our community understand those changes and participate in shaping them.
            </p>
            <p>
              We are building Newark AI as an independent civic institution where residents across generations
              can learn how AI works, question its uses, and build with it on their own terms. That includes
              developing practical skills and the judgment to recognize when a technology is useful, when its
              claims deserve scrutiny, and when its use should be challenged.
            </p>
            <p>
              The mission spans generations, and the first planned program is Cohort One, a youth program
              currently being designed. It will give young people opportunities to examine AI critically and
              create projects of their own. We intend to develop and evaluate that first program carefully,
              using the evidence to guide expansion as staffing, funding, and institutional capacity allow.
            </p>
            <p>
              I’m one of three founders. My work focuses on program architecture, institutional governance,
              and the systems that make responsibilities, decisions, and records clear. For me, that work is
              part of the obligation: if we ask our community to trust this institution, we need to build
              something worthy of that trust.
            </p>
          </div>
        </article>

        {/* ── AEGIS ── */}
        <article className="pb-card proj-feature frosted-card frosted-row" id="aegis">
          <div className="project-summary frosted-card-heading">
          <img className="proj-logo proj-logo-wide" src="/aegis-logo.png" alt="AEGIS logo" width="900" height="785" />
          <div className="proj-status proj-status-paused">Paused</div>
          <h2 className="proj-feature-title">AEGIS</h2>
          <p className="proj-lead">
            An AI-assisted clinical practice platform that began with a personal goal: helping Nafisah
            manage the demands of her practice. It developed into a governed multi-agent architecture
            designed to support practice operations while preserving clinical boundaries and practitioner authority.
          </p>
          <div className="proj-tags">
            {["AI Governance", "Multi-Agent Systems", "Clinical Practice", "Runtime Architecture"].map((t) => (
              <span key={t} className="proj-tag">{t}</span>
            ))}
          </div>
          </div>
          <div className="proj-body">
            <p>
              AEGIS began as an effort to help Nafisah. As a licensed clinical social worker and substance
              abuse professional in private practice, she carries both the responsibility of caring for people
              and the operational demands of running a practice. I wanted to build something that could
              meaningfully support her work.
            </p>
            <p>
              That goal also raised a larger question. Social work has approached AI with understandable
              hesitation. The work involves sensitive information, professional judgment, and relationships
              built on trust. Bringing AI into that setting requires a clear account of what the technology
              may do, what it may access, and where human authority remains unconditional.
            </p>
            <p>
              The early application work covered intake, client guidance, administrative review, and payments.
              As the project developed, I designed a governed agent architecture with distinct responsibilities:
              Pepper coordinates approved workflows; Mantis produces clinical artifacts for review; Okoye
              produces compliance findings; and Shuri provides systems intelligence.
            </p>
            <p>
              The architecture makes those boundaries explicit. Pepper holds sole dispatch authority over the
              domain agents. MEC, the constitutional evaluation layer, determines whether domain outputs are
              admissible before they enter the practitioner’s Decision Queue. Nafisah retains final authority
              over the decisions presented there.
            </p>
            <p>
              Application features, runtime components, and governance controls reached different stages of
              completion. AEGIS remains a developing implementation, with its central purpose intact:
              supporting a practitioner’s work in a way that respects the responsibilities she holds to the
              people in her care.
            </p>

            <h3 className="proj-subhead">How AEGIS Informed CRC</h3>
            <p>
              AEGIS gave concrete stakes to the questions that informed Constitutional Runtime Computation:
              who may authorize an agent’s actions, how changes to system state are governed, and how human
              decision rights remain enforceable.
            </p>
            <p>
              CRC develops those questions into a runtime model in which an agent observes, reasons, and
              submits a typed proposal. The governing system resolves whether the proposed transition is
              permitted. That Observe, Reason, Submit, Resolve loop grew from a practical concern at the
              heart of AEGIS: making the boundaries around AI authority part of how the system operates.{" "}
              <a className="proj-inline-link" href="/research" onClick={(e) => go("research", e)}>Read the CRC research →</a>
            </p>
          </div>
        </article>

      </div>
    </main>
  );
}
