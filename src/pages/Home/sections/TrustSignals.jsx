import React from "react";
import Section from "../../../components/ui/Section";

const always = [
  {
    t: "Show your child that protection is on",
    d: "A notice stays visible on their phone. Nothing runs in secret.",
  },
  {
    t: "Explain every permission first",
    d: "We tell you what it is for, in plain words, before we ask.",
  },
  {
    t: "Check screens on the phone itself",
    d: "Screenshots are checked on the device and never uploaded. Only short excerpts of flagged messages reach the parent.",
  },
  {
    t: "Delete your data when you ask",
    d: "Ask us, and your account and data are removed within 15 days.",
  },
];

const never = [
  {
    t: "Hide the app or monitor in secret",
    d: "A child who is watched secretly learns not to trust. We won't build that.",
  },
  {
    t: "Send you a copy of every chat",
    d: "You get short alerts about real concerns, not your child's whole life.",
  },
  {
    t: "Sell your family's data",
    d: "Your child's safety is the product. Their data is not.",
  },
  {
    t: "Pretend we are perfect",
    d: "CensorX can miss things or get one wrong. We say so openly.",
  },
];

export default function TrustSignals() {
  return (
    <Section
      title="Trust & ethics"
      subtitle="You are trusting us with your child. Here is what we promise in return."
    >
      <style>{`
        .cxTr-cols{
          display:grid;
          grid-template-columns:repeat(2, minmax(0,1fr));
          gap:16px;
        }
        @media (max-width: 860px){
          .cxTr-cols{ grid-template-columns:1fr; }
        }

        .cxTr-col{
          border-radius:var(--radius-xl);
          padding:22px 18px 14px;
          background:linear-gradient(180deg, rgba(7,25,24,0.78), rgba(0,0,0,0.40));
          border:1px solid rgba(255,255,255,0.08);
          box-shadow:0 18px 50px rgba(0,0,0,0.28);
        }

        .cxTr-colHead{
          margin:0 6px 10px;
          padding-bottom:14px;
          border-bottom:1px solid rgba(255,255,255,0.08);
          font-size:13px;
          font-weight:800;
          letter-spacing:0.12em;
          text-transform:uppercase;
          color:var(--text);
        }

        .cxTr-item{
          display:flex;
          gap:14px;
          align-items:flex-start;
          padding:12px 8px;
          border-radius:var(--radius-md);
          transition:background .2s ease;
        }
        .cxTr-item:hover{
          background:rgba(255,255,255,0.04);
        }

        .cxTr-mark{
          width:30px;
          height:30px;
          border-radius:50%;
          display:grid;
          place-items:center;
          flex-shrink:0;
          margin-top:2px;
        }
        .cxTr-col.yes .cxTr-mark{
          background:rgba(50,178,169,0.14);
          border:1px solid rgba(50,178,169,0.35);
          color:#32b2a9;
        }
        .cxTr-col.no .cxTr-mark{
          background:rgba(239,68,68,0.14);
          border:1px solid rgba(239,68,68,0.4);
          color:#f87171;
        }

        .cxTr-item b{
          display:block;
          font-size:14px;
          font-weight:800;
          line-height:1.35;
          color:var(--text);
        }
        .cxTr-item span{
          display:block;
          margin-top:4px;
          font-size:12.5px;
          line-height:1.65;
          color:var(--muted2);
        }

        .cxTr-foot{
          margin-top:18px;
          display:flex;
          justify-content:center;
        }

        @media (max-width: 640px){
          .cxTr-col{ padding:18px 12px 10px; }
          .cxTr-item{ padding:11px 4px; }
        }
        @media (prefers-reduced-motion: reduce){
          .cxTr-item{ transition:none; }
        }
      `}</style>

      <div className="cxTr-cols">
        <div className="cxTr-col yes">
          <div className="cxTr-colHead">What we always do</div>
          {always.map((x) => (
            <div key={x.t} className="cxTr-item">
              <div className="cxTr-mark" aria-hidden="true">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
              </div>
              <div>
                <b>{x.t}</b>
                <span>{x.d}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="cxTr-col no">
          <div className="cxTr-colHead">What we never do</div>
          {never.map((x) => (
            <div key={x.t} className="cxTr-item">
              <div className="cxTr-mark" aria-hidden="true">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </div>
              <div>
                <b>{x.t}</b>
                <span>{x.d}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="cxTr-foot">
        <a className="cxMoreBtn" href="/legal/privacy-policy">
          Read our Privacy Policy
          <span className="cxMoreArrow" aria-hidden="true">→</span>
        </a>
      </div>
    </Section>
  );
}