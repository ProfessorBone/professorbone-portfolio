import { useState, useEffect } from "react";
import "./index.css";
import "./App.css";
import Nav        from "./components/Nav";
import Hero       from "./components/Hero";
import About      from "./components/About";
import Projects   from "./components/Projects";
import Research   from "./components/Research";
import Education  from "./components/Education";
import Academy    from "./components/Academy";
import Contact    from "./components/Contact";
import Continuum  from "./components/Continuum";
import FreightMind from "./components/FreightMind";
import BuildGuide from "./components/BuildGuide";

function pageFromPath() {
  const path = window.location.pathname.replace(/^\//, "").replace(/\/$/, "");
  const valid = ["home","about","projects","research","education","academy","contact","continuum","freightmind","buildguide"];
  return valid.includes(path) ? path : "home";
}

export default function App() {
  const [page, setPage] = useState(pageFromPath);

  function navigate(p) {
    const url = p === "home" ? "/" : `/${p}`;
    window.history.pushState({ page: p }, "", url);
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

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

  // Full-screen immersive pages — no nav/footer
  if (page === "continuum") {
    return (
      <>
        <div className="bg-layer"><div className="orb orb-1" /><div className="orb orb-2" /><div className="orb orb-3" /></div>
        <Continuum setPage={navigate} />
      </>
    );
  }

  if (page === "freightmind") {
    return (
      <>
        <div className="bg-layer"><div className="orb orb-1" /><div className="orb orb-2" /><div className="orb orb-3" /></div>
        <FreightMind setPage={navigate} />
      </>
    );
  }

  if (page === "buildguide") {
    return (
      <>
        <div className="bg-layer"><div className="orb orb-1" /><div className="orb orb-2" /><div className="orb orb-3" /></div>
        <BuildGuide setPage={navigate} />
      </>
    );
  }

  const pages = {
    home:      <Hero setPage={navigate} />,
    about:     <About />,
    projects:  <Projects setPage={navigate} />,
    research:  <Research />,
    education: <Education />,
    academy:   <Academy />,
    contact:   <Contact />,
  };

  return (
    <>
      <div className="bg-layer">
        <div className="orb orb-1" /><div className="orb orb-2" /><div className="orb orb-3" />
      </div>
      <div className="grid-overlay" />
      <div className="pb-avatar-bg" />
      <Nav page={page} setPage={navigate} />
      <div className="page-content">
        {pages[page] || <Hero setPage={navigate} />}
      </div>
      <footer>
        <span className="footer-text">© 2025 Clarence Downs · Professor Bone Lab · JHU</span>
        <div className="footer-links">
          <a href="https://github.com/ProfessorBone" target="_blank" rel="noopener">GitHub</a>
          <a href="https://www.linkedin.com/in/clarencedowns/" target="_blank" rel="noopener">LinkedIn</a>
          <a href="mailto:clarenced2@icloud.com">Email</a>
        </div>
      </footer>
    </>
  );
}
