import { useState } from 'react';
import { FAQ } from '../data';

function FaqItem({ q, a, idx }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <h3>
        <button
          className="faq-q"
          aria-expanded={open}
          aria-controls={`fa${idx}`}
          id={`fq${idx}`}
          onClick={() => setOpen(o => !o)}
        >
          {q}
          <span className="pm" aria-hidden="true" />
        </button>
      </h3>
      <div className="faq-a" id={`fa${idx}`} role="region" aria-labelledby={`fq${idx}`}>
        <div><p>{a}</p></div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  return (
    <section id="faq">
      <div className="container">
        <div className="sec-head rv">
          <span className="label">06 — FAQ</span>
          <h2>Questions, <em>answered</em></h2>
        </div>
        <div className="faq rv" id="faqList">
          {FAQ.map(([q, a], i) => (
            <FaqItem key={i} idx={i} q={q} a={a} />
          ))}
        </div>
      </div>
    </section>
  );
}
