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

const VALID_PAGES = ["home","about","projects","research","education","academy","contact","continuum","freightmind","buildguide"];
const VALID_PAPERS = ["agent-state","orchestrator","cognitive","epistemic","ggib-1","ggib-2","ggib-3","ggib-4","ggib-5","ggib-6"];

function pageFromPath() {
  const path = window.location.pathname.replace(/^\//, "").replace(/\/$/, "");
  if (VALID_PAGES.includes(path)) return path;
  // Support /research/[paper-id] sub-routes
  if (path.startsWith("research/")) {
    const paperId = path.slice("research/".length);
    if (VALID_PAPERS.includes(paperId)) return path;
  }
  return "home";
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

  // For /research/[paper-id], extract the sub-path and pass as initialPaper
  const isResearchSub = page.startsWith("research/");
  const basePage = isResearchSub ? "research" : page;
  const initialPaper = isResearchSub ? page.split("/")[1] : null;

  const pages = {
    home:      <Hero setPage={navigate} />,
    about:     <About />,
    projects:  <Projects setPage={navigate} />,
    research:  <Research initialPaper={initialPaper} setPage={navigate} />,
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
      <Nav page={basePage} setPage={navigate} />
      <div className="page-content">
        {pages[basePage] || <Hero setPage={navigate} />}
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
