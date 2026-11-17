import React, { useState } from "react";
import Section from "../../../components/ui/Section";
import { FAQS } from "../faqData";

export default function FAQList() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <Section title="FAQs" as="h1" subtitle="Clear answers to the most common questions.">
      <style>{`
        .cxFq-list{
          display:grid;
          gap:12px;
        }

        .cxFq-item{
          border-radius:var(--radius-lg);
          background:rgba(255,255,255,0.04);
          border:1px solid rgba(255,255,255,0.10);
          transition:background .3s ease, border-color .3s ease, box-shadow .3s ease;
        }
        .cxFq-item:hover{
          border-color:rgba(255,255,255,0.24);
        }
        .cxFq-item.open{
          background:#ffffff;
          border-color:#ffffff;
          box-shadow:0 16px 44px rgba(0,0,0,0.32);
        }

        .cxFq-btn{
          width:100%;
          background:transparent;
          border:none;
          color:inherit;
          font:inherit;
          cursor:pointer;
          padding:18px 20px;
          text-align:left;
          display:flex;
          align-items:center;
          gap:14px;
        }
        .cxFq-btn:focus-visible{
          outline:2px solid rgba(255,255,255,0.6);
          outline-offset:2px;
          border-radius:var(--radius-lg);
        }

        .cxFq-num{
          flex-shrink:0;
          font-size:12px;
          font-weight:800;
          letter-spacing:0.08em;
          color:rgba(255,255,255,0.45);
          transition:color .3s ease;
        }
        .cxFq-item.open .cxFq-num{ color:var(--teal-ink); }

        .cxFq-q{
          flex:1;
          font-size:14.5px;
          font-weight:800;
          line-height:1.4;
          color:var(--text, #ffffff);
          transition:color .3s ease;
        }
        .cxFq-item.open .cxFq-q{ color:#0b1220; }

        .cxFq-ic{
          flex-shrink:0;
          width:32px;
          height:32px;
          border-radius:50%;
          display:grid;
          place-items:center;
          background:rgba(255,255,255,0.08);
          border:1px solid rgba(255,255,255,0.16);
          color:#ffffff;
          transition:transform .35s ease, background .3s ease, border-color .3s ease;
        }
        .cxFq-item.open .cxFq-ic{
          transform:rotate(45deg);
          background:#111827;
          border-color:#111827;
        }

        /* smooth open / close */
        .cxFq-body{
          display:grid;
          grid-template-rows:0fr;
          transition:grid-template-rows .4s ease;
        }
        .cxFq-item.open .cxFq-body{
          grid-template-rows:1fr;
        }
        .cxFq-body > div{
          overflow:hidden;
          min-height:0;
        }
        .cxFq-a{
          margin:0;
          padding:0 20px 20px 20px;
          font-size:13.5px;
          line-height:1.8;
          color:#374151;
          max-width:860px;
        }

        @media (max-width: 600px){
          .cxFq-btn{ padding:16px 14px; gap:10px; }
          .cxFq-q{ font-size:13.5px; }
          .cxFq-a{ padding:0 14px 16px 14px; font-size:13px; }
          .cxFq-num{ display:none; }
        }
        @media (prefers-reduced-motion: reduce){
          .cxFq-item, .cxFq-ic, .cxFq-body, .cxFq-q, .cxFq-num{ transition:none; }
        }
      `}</style>

      <div className="cxFq-list">
        {FAQS.map((x, idx) => (
          <FAQItem
            key={idx}
            n={idx + 1}
            q={x.q}
            a={x.a}
            open={openIndex === idx}
            onToggle={() =>
              setOpenIndex(openIndex === idx ? null : idx)
            }
          />
        ))}
      </div>
    </Section>
  );
}

function FAQItem({ n, q, a, open, onToggle }) {
  return (
    <div className={`cxFq-item${open ? " open" : ""}`}>
      <button
        type="button"
        className="cxFq-btn"
        onClick={onToggle}
        aria-expanded={open}
      >
        <span className="cxFq-num" aria-hidden="true">
          {String(n).padStart(2, "0")}
        </span>
        <span className="cxFq-q">{q}</span>
        <span className="cxFq-ic" aria-hidden="true">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>

      <div className="cxFq-body" aria-hidden={!open}>
        <div>
          <p className="cxFq-a">{a}</p>
        </div>
      </div>
    </div>
  );
}