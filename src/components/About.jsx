import Seo from "./Seo";
import { SEO_ROUTES } from "../seoData";

export default function About() {
  return (
    <div className="inner-section">
      <Seo {...SEO_ROUTES.about} />
      <div className="section-tag">01 — About</div>
      <h1 className="section-heading">The Road That<br />Built the Engineer</h1>

      <div className="about-grid">
        <div className="about-bio">
          <p>My name is <strong>Clarence Downs</strong>, though most people call me <strong>Faheem</strong>, and many know me as <strong className="hl">Professor Bone</strong>. I am an emerging agentic AI systems engineer and the founder of <strong>Professor Bone Lab</strong>.</p>
          <p>The name has a story. My father was a soldier in the Vietnam War, and we lived on base in Germany. My mother says the GIs used to play with me as an infant and were amazed at my physical strength. Those soldiers gave me the name <strong>Bone Crusher</strong>. As time moved on, the name changed: the &ldquo;Crusher&rdquo; was dropped, and I was just <strong>Bone</strong>.</p>
          <p>I have always been studious by nature, but make no mistake: I am not a professor in the real and most respected sense of the word. I am a <strong>student</strong>, a questioner, always reaching beyond the next boundary.</p>
          <p>My professional foundation was built in logistics. I entered the industry in <strong>2017 in management with UPS</strong>, where I developed a deep respect for operational discipline, coordination, timing, and reliable systems. In <strong>2018</strong>, UPS gave me the chance to work with automation, not from inside a building but from an operations and supervision perspective. I found it exciting, but soon I was reaching for another boundary.</p>
          <p><strong>2022</strong> was a turning point. I started experimenting with ChatGPT, and I resigned from UPS to begin driving 18-wheelers as the owner-operator of <strong>LaM Logistics LLC</strong>. Driving across the country was amazing because it gave me room to think, and the more I thought, the more I wanted to know about <strong>generative AI</strong>. In <strong>2025</strong>, I joined <strong>Walmart Private Fleet</strong>, where I continue to work in real-world conditions where routing, safety, compliance, and execution must align under pressure.</p>
          <p style={{fontStyle:"italic",color:"var(--text-primary)",fontWeight:500}}>That journey gave me something uncommon in AI.</p>
          <p>I did not come into engineering through abstraction alone. I came through <strong>operations, pressure, responsibility, and lived systems</strong>. Logistics taught me how complex systems behave in the real world: success is not just about whether something works in theory, but whether it performs reliably under constraints, uncertainty, and consequence.</p>
          <p>All the while, I was building my skills in computer technology, programming, and AI. What began as curiosity became disciplined study, then system design, technical writing, and the architecture of multi-agent AI environments. Today, my work centers on building AI systems that are not only intelligent, but <strong className="hl">governable, observable, and usable in real-world settings</strong>. I am completing the <strong>Agentic AI Certificate Program at Johns Hopkins University</strong> and pursuing the <strong>Claude Certified Architect</strong> designation through Anthropic. My work focuses on agentic systems, evaluation frameworks, and governance-first architectures such as <strong>PACS (Perception, Analysis, Control Systems)</strong>.</p>
          <p>Right now, I am putting that into practice in two places. The first is <a className="hl" href="https://www.newarkai.org" target="_blank" rel="noopener"><strong>Newark AI</strong></a>, an institution I am building for artificial intelligence in Newark, for people across generations, beginning with a program for our youth. It is still in development. The second is my ongoing research into <strong>Constitutional Runtime Computation (CRC)</strong>, which continues to shape how I think about governing agentic systems.</p>
          <p>I am also building <strong>Unc's AI Academy</strong> — an educational initiative focused on helping adult learners and career changers develop practical, real-world skills in AI. The mission is rooted in my own journey: creating a pathway into technology for those who did not start there, but are willing to build.</p>
          <div className="faith-note">
            Because intelligence alone is not enough.<br />
            Systems must be built to operate in reality.
          </div>
        </div>

        <div className="identity-card">
          <h2>Clarence Downs</h2>
          <div className="title-row">A.K.A. PROFESSOR BONE</div>
          <div className="identity-divider" />
          {[
            ["BASE",   "Tobyhanna, PA · Northeast US"],
            ["2016",   "A.S. Networking Systems Technology · Daytona State College"],
            ["2017",   "Logistics Mgmt · UPS"],
            ["2018",   "Automation Operations · UPS"],
            ["2022",   "Owner-Operator · LaM Logistics LLC"],
            ["2025",   "Walmart Private Fleet · OTR"],
            ["2025",   "B.S. Information Technology · Daytona State College"],
            ["2026",   "Agentic AI Program · Johns Hopkins University"],
            ["2026",   "Google AI Professional Certification"],
            ["SELF",   "Python for Data Science · Independent Study"],
            ["CERT",   "CCA · Anthropic (In Progress)"],
            ["LAB",    "Professor Bone Lab"],
            ["NOW",    "Newark AI · Founder"],
            ["RESEARCH", "Constitutional Runtime Computation (CRC)"],
            ["TARGET", "Walmart Global Tech"],
          ].map(([k, v], i) => (
            <div key={i} className="identity-detail">
              <span>{k}</span> {v}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
