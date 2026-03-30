import { useState } from "react";
import "./index.css";
import "./App.css";
import Nav      from "./components/Nav";
import Hero     from "./components/Hero";
import About    from "./components/About";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Education from "./components/Education";
import Academy  from "./components/Academy";
import Contact  from "./components/Contact";

export default function App() {
  const [page, setPage] = useState("home");

  const pages = { home: <Hero setPage={setPage} />, about: <About />, projects: <Projects />, research: <Research />, education: <Education />, academy: <Academy />, contact: <Contact /> };

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
      <Nav page={page} setPage={(p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); }} />

      {/* Page */}
      <div className="page-content">
        {pages[page] || <Hero setPage={setPage} />}
      </div>

      {/* Footer */}
      <footer>
        <span className="footer-text">© 2025 Clarence Downs · Professor Bone Lab · JHU</span>
        <div className="footer-links">
          <a href="https://github.com/ProfessorBone"         target="_blank" rel="noopener">GitHub</a>
          <a href="https://www.linkedin.com/in/clarencedowns/" target="_blank" rel="noopener">LinkedIn</a>
          <a href="mailto:clarenced2@icloud.com">Email</a>
        </div>
      </footer>
    </>
  );
}
