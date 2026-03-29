import { useState } from "react";
import { ggibParts, papers } from "../data/research";

export default function Research() {
  const [ggibOpen, setGgibOpen] = useState(false);

  return (
    <div className="inner-section">
      <div className="section-tag">03 — Research</div>
      <h2 className="section-heading">Papers &<br />Frameworks</h2>
      <p className="section-sub">
        Original research produced under the <strong>Professor Bone Lab</strong> identity at JHU.
        Writing voice: problem-statement-first, direct declarative, no hedging.
      </p>

      <div className="research-list">

        {/* GGIB Accordion */}
        <div className="research-card ggib-card" onClick={() => setGgibOpen(!ggibOpen)}>
          <div className="ggib-header">
            <div className="research-num">01</div>
            <div className="research-content">
              <div className="research-title">
                GGIB-M Benchmark Specification
                <span className="ggib-badge">6 PARTS</span>
              </div>
              <div className="research-meta">Governed General Intelligence Benchmark · Metacognition Track · w/ Caroline Brooks · Kaggle</div>
              <div className="research-abstract">Full six-part benchmark specification targeting epistemic regulation in AI behavior. Evaluates whether AI systems can accurately assess the boundaries of their own knowledge under adversarial and standard conditions.</div>
            </div>
            <div className={`research-arrow ${ggibOpen ? "open" : ""}`}>↓</div>
          </div>

          {ggibOpen && (
            <div className="ggib-parts" onClick={(e) => e.stopPropagation()}>
              <div className="ggib-divider" />
              {ggibParts.map((p) => (
                <a
                  key={p.part}
                  href={`/papers/${p.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ggib-part"
                >
                  <span className="ggib-part-num">{p.part}</span>
                  <span className="ggib-part-title">{p.title}</span>
                  <span className="ggib-dl">↓ PDF</span>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Standalone papers */}
        {papers.map((p) => (
          <a
            key={p.num}
            href={`/papers/${p.file}`}
            target="_blank"
            rel="noopener noreferrer"
            className="research-card"
            style={{textDecoration:"none"}}
          >
            <div className="research-num">{p.num}</div>
            <div className="research-content">
              <div className="research-title">{p.title}</div>
              <div className="research-meta">{p.meta}</div>
              <div className="research-abstract">{p.abstract}</div>
            </div>
            <div className="research-arrow">↓ PDF</div>
          </a>
        ))}

      </div>
    </div>
  );
}
