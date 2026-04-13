const contacts = [
  { label: "Email",    title: "clarenced2@icloud.com",            desc: "Best for hiring inquiries, research collaboration, and Academy questions.", href: "mailto:clarenced2@icloud.com" },
  { label: "LinkedIn", title: "linkedin.com/in/clarencedowns",     desc: "Connect for professional networking and career opportunities.",             href: "https://www.linkedin.com/in/clarencedowns/" },
  { label: "GitHub",   title: "github.com/ProfessorBone",          desc: "Source code, project repositories, and open research artifacts.",           href: "https://github.com/ProfessorBone" },
];

import Seo from "./Seo";
import { SEO_ROUTES } from "../seoData";

export default function Contact() {
  return (
    <div className="inner-section" style={{maxWidth:"640px"}}>
      <Seo {...SEO_ROUTES.contact} />
      <div className="section-tag">06 — Contact</div>
      <h1 className="section-heading">Let's<br />Connect</h1>
      <p className="section-sub">
        Hiring for AI engineering roles, research collaboration, or interested in Unc's AI Academy?
        Reach out — I read everything.
      </p>
      <div style={{display:"flex",flexDirection:"column",gap:"14px"}}>
        {contacts.map((c) => (
          <a key={c.label} href={c.href} target={c.href.startsWith("mailto") ? "_self" : "_blank"} rel="noopener noreferrer"
            className="glass-card" style={{textDecoration:"none",display:"block",cursor:"pointer"}}>
            <div className="card-label">{c.label}</div>
            <div className="card-title">{c.title}</div>
            <div className="card-desc">{c.desc}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
