import { useState } from "react";
import "../nav.css";

export default function Nav({ page, setPage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["home", "about", "projects", "research", "education"];

  function go(p, e) {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    setPage(p);
    setMenuOpen(false);
  }

  return (
    <>
      <nav>
        <a className="nav-radio" href="/contact" aria-label="Let's Talk — contact Professor Bone" onClick={(e) => go("contact", e)}>
          <img src="/cb-radio-header.png" alt="" width="2057" height="765" />
          <svg className="nav-radio-light" viewBox="0 0 2057 765" aria-hidden="true">
            <defs>
              <radialGradient id="radio-light-shade">
                <stop offset="0" stopColor="#050a14" />
                <stop offset="0.57" stopColor="#050a14" />
                <stop offset="1" stopColor="#050a14" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="598" cy="274" r="47" fill="url(#radio-light-shade)" />
          </svg>
          <span className="nav-radio-label" aria-hidden="true">Let’s<br />Talk</span>
        </a>
        {/* ── Desktop links ── */}
        <ul className="nav-links nav-desktop">
          {links.map((l) => (
            <li key={l}>
              <a
                className={page === l ? "active" : ""}
                href={l === "home" ? "/" : `/${l}`}
                onClick={(e) => go(l, e)}
              >
                {l.charAt(0).toUpperCase() + l.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* ── Hamburger button (mobile only) ── */}
        <button
          className={`nav-hamburger ${menuOpen ? "nav-hamburger-open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* ── Mobile slide-down menu ── */}
      <div id="mobile-navigation" hidden={!menuOpen} className={`nav-mobile-menu ${menuOpen ? "nav-mobile-menu-open" : ""}`}>
        <ul className="nav-mobile-links">
          {links.map((l) => (
            <li key={l}>
              <a
                className={page === l ? "active" : ""}
                href={l === "home" ? "/" : `/${l}`}
                onClick={(e) => go(l, e)}
              >
                {l.charAt(0).toUpperCase() + l.slice(1)}
              </a>
            </li>
          ))}
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
