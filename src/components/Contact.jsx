import Seo from "./Seo";
import { SEO_ROUTES } from "../seoData";

const contacts = [
  { label: "Email", title: "clarenced2@icloud.com", href: "mailto:clarenced2@icloud.com" },
  { label: "LinkedIn", title: "linkedin.com/in/clarencedowns", href: "https://www.linkedin.com/in/clarencedowns/" },
  { label: "GitHub", title: "github.com/ProfessorBone", href: "https://github.com/ProfessorBone" },
];

export default function Contact() {
  return (
    <main className="inner-section frosted-page contact-page" aria-labelledby="contact-heading">
      <Seo {...SEO_ROUTES.contact} />
      <header className="frosted-card frosted-header frosted-row">
        <div>
          <div className="section-tag">07 — Contact</div>
          <h1 className="section-heading" id="contact-heading">Let’s Talk</h1>
        </div>
        <p className="section-sub">
          I welcome collaborative research, thoughtful discussion, and serious inquiries
          about AI systems and governance.
        </p>
      </header>
      <div className="contact-methods">
        {contacts.map((c) => (
          <a key={c.label} href={c.href} target={c.href.startsWith("mailto") ? "_self" : "_blank"} rel="noopener noreferrer"
            className="frosted-card contact-method">
            <div className="card-label">{c.label}</div>
            <h2 className="card-title">{c.title}</h2>
          </a>
        ))}
      </div>
    </main>
  );
}
