import { useState } from "react";

export default function Nav({ page, setPage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["about", "projects", "research", "education", "academy", "services"];

  function go(p, e) {
    e.preventDefault();
    setPage(p);
    setMenuOpen(false);
  }

  return (
    <>
      <nav>
        <a className="nav-logo" href="/" onClick={(e) => go("home", e)}>
          <span className="p">P</span><span className="b">B</span> Home
        </a>

        {/* ── Desktop links ── */}
        <ul className="nav-links nav-desktop">
          {links.map((l) => (
            <li key={l}>
              <a
                className={page === l ? "active" : ""}
                href={`/${l}`}
                onClick={(e) => go(l, e)}
              >
                {l.charAt(0).toUpperCase() + l.slice(1)}
              </a>
            </li>
          ))}
          <li>
            <a
              className={`nav-build-guide ${page === "buildguide" ? "active" : ""}`}
              href="/buildguide"
              onClick={(e) => go("buildguide", e)}
            >
              Build Guide
            </a>
          </li>
          <li>
            <a className="nav-cta" href="/contact" onClick={(e) => go("contact", e)}>
              Let's Talk
            </a>
          </li>
        </ul>

        {/* ── Hamburger button (mobile only) ── */}
        <button
          className={`nav-hamburger ${menuOpen ? "nav-hamburger-open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* ── Mobile slide-down menu ── */}
      <div className={`nav-mobile-menu ${menuOpen ? "nav-mobile-menu-open" : ""}`}>
        <ul className="nav-mobile-links">
          {links.map((l) => (
            <li key={l}>
              <a
                className={page === l ? "active" : ""}
                href={`/${l}`}
                onClick={(e) => go(l, e)}
              >
                {l.charAt(0).toUpperCase() + l.slice(1)}
              </a>
            </li>
          ))}
          <li>
            <a
              className={`nav-mobile-buildguide ${page === "buildguide" ? "active" : ""}`}
              href="/buildguide"
              onClick={(e) => go("buildguide", e)}
            >
              Build Guide
            </a>
          </li>
          <li>
            <a
              className="nav-mobile-cta"
              href="/contact"
              onClick={(e) => go("contact", e)}
            >
              Let's Talk
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
