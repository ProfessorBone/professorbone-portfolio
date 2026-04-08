import { useState } from "react";

export default function Nav({ page, setPage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["about", "projects", "research", "education", "academy"];

  function go(p) {
    setPage(p);
    setMenuOpen(false);
  }

  return (
    <>
      <nav>
        <button className="nav-logo" onClick={() => go("home")}>
          <span className="p">P</span><span className="b">B</span> Home
        </button>

        {/* ── Desktop links ── */}
        <ul className="nav-links nav-desktop">
          {links.map((l) => (
            <li key={l}>
              <button className={page === l ? "active" : ""} onClick={() => go(l)}>
                {l.charAt(0).toUpperCase() + l.slice(1)}
              </button>
            </li>
          ))}
          <li>
            <button
              className={`nav-build-guide ${page === "buildguide" ? "active" : ""}`}
              onClick={() => go("buildguide")}
            >
              Build Guide
            </button>
          </li>
          <li>
            <button className="nav-cta" onClick={() => go("contact")}>
              Let's Talk
            </button>
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
              <button className={page === l ? "active" : ""} onClick={() => go(l)}>
                {l.charAt(0).toUpperCase() + l.slice(1)}
              </button>
            </li>
          ))}
          <li>
            <button
              className={`nav-mobile-buildguide ${page === "buildguide" ? "active" : ""}`}
              onClick={() => go("buildguide")}
            >
              Build Guide
            </button>
          </li>
          <li>
            <button className="nav-mobile-cta" onClick={() => go("contact")}>
              Let's Talk
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
