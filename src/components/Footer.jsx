export default function Footer({ setPage }) {
  function go(p, e) {
    e.preventDefault();
    setPage && setPage(p);
  }

  return (
    <footer className="pb-footer">
      <div className="pb-footer-grid">

        {/* Column 1 — Identity */}
        <div className="pb-footer-col">
          <div className="pb-footer-brand">Professor Bone</div>
          <div className="pb-footer-role">AI Systems Architect</div>
          <div className="pb-footer-ident">
            <div>Clarence Downs</div>
            <div>Professor Bone Lab · JHU</div>
          </div>
          <div className="pb-footer-location">
            <div>Newark, NJ</div>
            <div>NY/NJ Metropolitan Area</div>
          </div>
          <div className="pb-footer-socials">
            <a href="https://github.com/ProfessorBone" target="_blank" rel="noopener">GitHub</a>
            <a href="https://www.linkedin.com/in/clarencedowns/" target="_blank" rel="noopener">LinkedIn</a>
            <a href="mailto:clarenced2@icloud.com">Email</a>
          </div>
        </div>

        {/* Column 2 — Services */}
        <div className="pb-footer-col">
          <div className="pb-footer-col-label">Services</div>
          <ul className="pb-footer-nav">
            <li><a href="/services" className="pb-footer-link pb-footer-link-primary" onClick={(e) => go("services", e)}>Governed AI Architecture</a></li>
            <li><a href="/services" className="pb-footer-link" onClick={(e) => go("services", e)}>Multi-Agent Systems</a></li>
            <li><a href="/services" className="pb-footer-link" onClick={(e) => go("services", e)}>Agentic Web Apps</a></li>
            <li><a href="/services" className="pb-footer-link" onClick={(e) => go("services", e)}>RAG &amp; Knowledge Systems</a></li>
            <li><a href="/services" className="pb-footer-link" onClick={(e) => go("services", e)}>Full-Stack AI Integration</a></li>
            <li><a href="/services" className="pb-footer-link" onClick={(e) => go("services", e)}>Privacy &amp; Compliance AI</a></li>
          </ul>
        </div>

        {/* Column 3 — Work */}
        <div className="pb-footer-col">
          <div className="pb-footer-col-label">Work</div>
          <ul className="pb-footer-nav" style={{ marginBottom: "28px" }}>
            <li><a href="/continuum" className="pb-footer-link" onClick={(e) => go("continuum", e)}>Continuum</a></li>
            <li><a href="/freightmind" className="pb-footer-link" onClick={(e) => go("freightmind", e)}>FreightMind</a></li>
            <li><a href="/buildguide" className="pb-footer-link" onClick={(e) => go("buildguide", e)}>Build Guide</a></li>
          </ul>
          <div className="pb-footer-col-label">Research</div>
          <ul className="pb-footer-nav">
            <li><a href="/research" className="pb-footer-link" onClick={(e) => go("research", e)}>Papers &amp; Frameworks</a></li>
            <li><a href="/research" className="pb-footer-link" onClick={(e) => go("research", e)}>GGIB-M Benchmark</a></li>
          </ul>
        </div>

        {/* Column 4 — Connect */}
        <div className="pb-footer-col">
          <div className="pb-footer-col-label">Connect</div>
          <ul className="pb-footer-nav" style={{ marginBottom: "28px" }}>
            <li><a href="/about" className="pb-footer-link" onClick={(e) => go("about", e)}>About</a></li>
            <li><a href="/education" className="pb-footer-link" onClick={(e) => go("education", e)}>Education</a></li>
            <li><a href="/academy" className="pb-footer-link" onClick={(e) => go("academy", e)}>Unc's AI Academy</a></li>
            <li><a href="/services" className="pb-footer-link" onClick={(e) => go("services", e)}>Services</a></li>
          </ul>
          <a href="/contact" className="pb-footer-cta" onClick={(e) => go("contact", e)}>Let's Talk</a>
        </div>

      </div>

      <div className="pb-footer-bottom">
        <span className="pb-footer-copy">© 2025 Clarence Downs · Professor Bone Lab · JHU</span>
        <div className="pb-footer-legal">
          <span>Privacy</span>
          <span>Terms</span>
        </div>
      </div>
    </footer>
  );
}
