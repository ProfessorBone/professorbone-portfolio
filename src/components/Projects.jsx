import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div className="inner-section">
      <div className="section-tag">02 — Projects</div>
      <h2 className="section-heading">Intelligent<br />Systems Built</h2>
      <p className="section-sub">
        Production-grade AI infrastructure built on real logistics context.
        Every project solves a problem I've lived — from the cab to the command line.
      </p>

      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p.id} className="project-card">
            <div className="proj-icon">{p.icon}</div>
            <div className="proj-id">{p.id}</div>
            <div className="proj-title">{p.title}</div>
            <p className="proj-desc">{p.description}</p>
            <div className="proj-tags">
              {p.tags.map((t) => <span key={t} className="proj-tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
