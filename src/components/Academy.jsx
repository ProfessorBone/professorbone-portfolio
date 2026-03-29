const tiers = [
  { num: "TIER 01", name: "Foundations",  desc: "What is AI? How do LLMs work? Prompt engineering basics. No prior experience required." },
  { num: "TIER 02", name: "Builder",      desc: "Python fundamentals, API calls, building your first AI-powered tool. Hands-on projects throughout." },
  { num: "TIER 03", name: "Systems",      desc: "Multi-agent architecture, memory systems, tool use, deployment. Real production thinking." },
  { num: "TIER 04", name: "Architect",    desc: "Governance frameworks, edge nodes, spec-embedded evaluation. For serious builders only." },
];

export default function Academy() {
  return (
    <div className="inner-section">
      <div className="section-tag">05 — Academy</div>
      <h2 className="section-heading">Unc's AI<br />Academy</h2>

      <div className="academy-hero">
        <div>
          <div className="academy-title">Learn AI From Someone<br />Who Built It From Scratch</div>
          <p className="academy-sub">
            Unc's AI Academy is for <strong>adult learners, career changers, and people who came from hard places</strong>{" "}
            and want to build something real with AI. No gatekeeping. No jargon without explanation.
            Just clear, practical, honest teaching from someone who's lived the non-traditional path.
          </p>
        </div>
        <div className="academy-stat">
          <div className="stat-num">4</div>
          <div className="stat-label">CURRICULUM TIERS</div>
        </div>
      </div>

      <div className="tiers-grid">
        {tiers.map((t) => (
          <div key={t.num} className="tier-card">
            <div className="tier-num">{t.num}</div>
            <div className="tier-name">{t.name}</div>
            <div className="tier-desc">{t.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
