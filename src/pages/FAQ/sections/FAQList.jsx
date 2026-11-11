import React, { useState } from "react";
import Section from "../../../components/ui/Section";

const FAQS = [
  {
    q: "What exactly is CensorX, and what problem does it solve?",
    a: "CensorX is a real-time AI digital safety app that protects children from harmful content and cyberbullying as it appears on the screen. It goes beyond app or website blocking by understanding what the user is actually seeing in real time."
  },
  {
    q: "How is CensorX different from Google Family Link or other parental control apps?",
    a: "Traditional parental control apps focus on restricting access, such as blocking apps or limiting screen time. CensorX focuses on protecting experience by detecting harmful images, videos, and harassment inside apps where traditional controls fail."
  },
  {
    q: "Does CensorX work inside messaging, social and short-video apps?",
    a: "CensorX works across most messaging, social and short-video apps on Android without needing any integration from those apps. Automatic detection can miss things or flag harmless content, so it supports a parent's own care and does not replace it."
  },
  {
    q: "How does CensorX detect harmful content in real time?",
    a: "CensorX uses on-device AI to analyze what is displayed on the screen, including images, videos, and text. Detection happens instantly, allowing harmful content to be blocked or flagged the moment it appears."
  },
  {
    q: "Does CensorX read, store, or upload private messages or media?",
    a: "No. CensorX follows a privacy-first approach. All analysis happens locally on the device. No messages, images, videos, or screen recordings are stored or uploaded to servers."
  },
  {
    q: "What happens if a child tries to uninstall or disable CensorX?",
    a: "CensorX continuously monitors its protection state. If a child attempts to uninstall, force-stop, or disable permissions, parents are notified and re-enabling protection requires parent authentication."
  },
  {
    q: "Does CensorX work without internet or in Incognito / Private mode?",
    a: "Yes. CensorX does not rely on browser history or network traffic. It continues working offline and is unaffected by Incognito or Private mode because it analyzes what appears on the screen directly."
  },
  {
    q: "What if CensorX blocks something harmless by mistake?",
    a: "CensorX is tuned conservatively to reduce false positives. Parents always have override controls, and detections are logged for improvement, not punishment."
  },
  {
    q: "Will CensorX slow down the phone or drain battery?",
    a: "CensorX uses lightweight, optimized on-device models and event-based detection. Battery usage is comparable to standard accessibility services and works well on mid-range Android devices."
  },
  {
    q: "Who is CensorX for, and is this a prototype or production app?",
    a: "CensorX is designed for parents and children who want real-time digital safety. CensorX is in closed testing and will be available on Google Play."
  }
];

export default function FAQList() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <Section title="FAQs" subtitle="Clear answers to the most common questions.">
      <style>{`
        .cxFq-list{
          display:grid;
          gap:12px;
        }

        .cxFq-item{
          border-radius:18px;
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
          border-radius:18px;
        }

        .cxFq-num{
          flex-shrink:0;
          font-size:12px;
          font-weight:900;
          letter-spacing:0.08em;
          color:rgba(255,255,255,0.45);
          transition:color .3s ease;
        }
        .cxFq-item.open .cxFq-num{ color:#0f6b65; }

        .cxFq-q{
          flex:1;
          font-size:15.5px;
          font-weight:900;
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
          font-size:14.5px;
          line-height:1.8;
          color:#374151;
          max-width:860px;
        }

        @media (max-width: 600px){
          .cxFq-btn{ padding:16px 14px; gap:10px; }
          .cxFq-q{ font-size:14.5px; }
          .cxFq-a{ padding:0 14px 16px 14px; font-size:14px; }
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