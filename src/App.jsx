import { useState, useEffect } from "react";
import "./index.css";
import "./App.css";
import Nav       from "./components/Nav";
import Hero      from "./components/Hero";
import About     from "./components/About";
import Projects  from "./components/Projects";
import Research  from "./components/Research";
import Education from "./components/Education";
import Academy   from "./components/Academy";
import Contact   from "./components/Contact";

// Derive page key from URL path
function pageFromPath() {
  const path = window.location.pathname.replace(/^\//, "").replace(/\/$/, "");
  const valid = ["home","about","projects","research","education","academy","contact","continuum"];
  return valid.includes(path) ? path : "home";
}

export default function App() {
  const [page, setPage] = useState(pageFromPath);

  // Push a new history entry and update state
  function navigate(p) {
    const url = p === "home" ? "/" : `/${p}`;
    window.history.pushState({ page: p }, "", url);
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Handle browser back / forward buttons
  useEffect(() => {
    function onPopState(e) {
      const p = e.state?.page ?? pageFromPath();
      setPage(p);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    window.addEventListener("popstate", onPopState);
    window.history.replaceState({ page }, "", window.location.pathname);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const pages = {
    home:      <Hero setPage={navigate} />,
    about:     <About />,
    projects:  <Projects setPage={navigate} />,
    research:  <Research />,
    education: <Education />,
    academy:   <Academy />,
    contact:   <Contact />,
    continuum: <div style={{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",color:"#00D4FF",fontFamily:"Syne Mono,monospace"}}>Continuum page coming soon</div>,
  };

  return (
    <>
      {/* Background */}
      <div className="bg-layer">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>
      <div className="grid-overlay" />
      <div className="pb-avatar-bg" />

      {/* Nav */}
      <Nav page={page} setPage={navigate} />

      {/* Page */}
      <div className="page-content">
        {pages[page] || <Hero setPage={navigate} />}
      </div>

      {/* Footer */}
      <footer>
        <span className="footer-text">© 2025 Clarence Downs · Professor Bone Lab · JHU</span>
        <div className="footer-links">
          <a href="https://github.com/ProfessorBone"          target="_blank" rel="noopener">GitHub</a>
          <a href="https://www.linkedin.com/in/clarencedowns/" target="_blank" rel="noopener">LinkedIn</a>
          <a href="mailto:clarenced2@icloud.com">Email</a>
        </div>
      </footer>
    </>
  );
}
