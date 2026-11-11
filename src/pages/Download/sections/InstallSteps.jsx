import React from "react";
import Section from "../../../components/ui/Section";

const steps = [
  {
    t: "Install from Google Play",
    d: "When CensorX is live, install it from Google Play on the parent’s phone and on the child’s phone. Please do not install it from any other source.",
  },
  {
    t: "Parent creates an account",
    d: "On the parent’s phone, open CensorX and sign in with your phone number, email or Google account.",
  },
  {
    t: "Link the child’s phone",
    d: "In the parent’s app, add a device to get a link code. On the child’s phone, choose “Child” and enter the code.",
  },
  {
    t: "Turn on protection",
    d: "On the child’s phone, read the explanation, tap “I agree”, and allow the permissions one by one. A notice then shows that protection is on.",
  },
];

export default function InstallSteps() {
  return (
    <Section
      title="How to setup Censorx on your Andriod Phone"
      subtitle="Four simple steps. A parent sets everything up."
    >
      <style>{`
        .cxSt-grid{
          display:grid;
          grid-template-columns:repeat(4, minmax(0,1fr));
          gap:14px;
        }
        @media (max-width: 1000px){
          .cxSt-grid{ grid-template-columns:repeat(2, minmax(0,1fr)); }
        }
        @media (max-width: 600px){
          .cxSt-grid{ grid-template-columns:1fr; }
        }
        .cxSt-card{
          position:relative;
          border:1px solid rgba(255,255,255,0.12);
          background:rgba(255,255,255,0.04);
          border-radius:18px;
          padding:22px 18px 18px;
          overflow:hidden;
          transition:transform .18s ease, border-color .18s ease;
        }
        .cxSt-card:hover{
          transform:translateY(-3px);
          border-color:rgba(255,255,255,0.28);
        }
        .cxSt-num{
          font-size:46px;
          font-weight:900;
          line-height:1;
          color:rgba(255,255,255,0.16);
          margin-bottom:10px;
        }
        .cxSt-card h4{
          margin:0 0 8px;
          font-size:16px;
          font-weight:900;
        }
        .cxSt-card p{
          margin:0;
          font-size:13.5px;
          line-height:1.7;
          color:var(--muted2);
        }
      `}</style>

      <div className="cxSt-grid">
        {steps.map((s, i) => (
          <div key={s.t} className="cxSt-card">
            <div className="cxSt-num" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h4>{s.t}</h4>
            <p>{s.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}