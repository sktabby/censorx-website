import React, { useEffect, useMemo, useRef, useState } from "react";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";

import tabishImg from "../../../assets/team/tabish.jpeg";
import asharImg from "../../../assets/team/ashar.jpeg";
import aqsaImg from "../../../assets/team/aqsa.jpeg";

function useInView(options = { threshold: 0.18 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, options);

    obs.observe(el);
    return () => obs.disconnect();
  }, [options]);

  return { ref, inView };
}

function Underline() {
  return (
    <div
      aria-hidden="true"
      style={{
        width: 120,
        height: 3,
        borderRadius: 999,
        background: "rgba(255,255,255,0.18)",
        marginTop: 10,
      }}
    />
  );
}

export default function CoFounders() {
  const { ref, inView } = useInView();

  // ✅ Info unchanged — only combined at render time
  const members = useMemo(
    () => [
      {
        name: "Mohammad Ashar",
        role: "Co-Founder | Cloud & Security",
        line1: "Manages website development and research",
        line2: "Handles security, legal compliance, and operations",
        img: asharImg,
      },
      {
        name: "Tabish Shaikh",
        role: "Co-Founder | Computer Engineer",
        line1: "Leads AI/ML development and model integration,",
        line2: "Handles backend architecture and system logic",
        img: tabishImg,
      },
      {
        name: "Aqsa Shah",
        role: "Co-Founder | ECS Engineer",
        line1: "Oversees finance and frontend development",
        line2: "Leads marketing, strategy, and content creation",
        img: aqsaImg,
      },
    ],
    []
  );

  return (
    <Section title="Team" subtitle="The people behind CensorX.">
      <style>{`
        .cx-teamWrap{
          margin-top: 16px;
          width: 100%;
          max-width: 980px;
          margin-left: auto;
          margin-right: auto;
          padding: 0 12px;
        }

        .cx-teamGrid{
          display: grid;
          gap: 14px;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          justify-items: center;
          align-items: start;
        }

        @media (max-width: 980px){
          .cx-teamWrap{ max-width: 760px; }
          .cx-teamGrid{ grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        @media (max-width: 640px){
          .cx-teamWrap{ max-width: 360px; }
          .cx-teamGrid{ grid-template-columns: 1fr; gap: 12px; }
        }

        .cx-teamCard{
          width: 100%;
          max-width: 500px;
          border-radius: 22px;
          overflow: hidden;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.10);
          box-shadow: 0 14px 40px rgba(0,0,0,0.18);
          transform: translateY(12px);
          opacity: 0;
          transition: transform 850ms cubic-bezier(.2,.8,.2,1), opacity 850ms ease;
        }
        .cx-teamCard.in{ transform: translateY(0); opacity: 1; }
        .cx-teamCard:hover{ transform: translateY(-3px); }

        @media (max-width: 980px){
          .cx-teamCard{ max-width: 320px; }
        }
        @media (max-width: 640px){
          .cx-teamCard{ max-width: 320px; }
        }

        .cx-frame{
          width: 100%;
          max-width: 200px;
          aspect-ratio: 415 / 600;
          margin: 14px auto 0;
          border-radius: 18px;
          overflow: hidden;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.10);
          position: relative;
        }

        @media (max-width: 980px){
          .cx-frame{ max-width: 260px; }
        }

        @media (max-width: 640px){
          .cx-frame{
            max-width: 240px;
            margin-top: 12px;
            border-radius: 16px;
          }
        }

        .cx-frame img{
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transform: scale(1.02);
          transition: transform 900ms cubic-bezier(.2,.8,.2,1);
        }

        .cx-frame::after{
          content:"";
          position:absolute;
          inset:0;
          background:
            linear-gradient(to bottom, rgba(0,0,0,0.00), rgba(0,0,0,0.28));
          pointer-events:none;
        }

        .cx-teamCard:hover .cx-frame img{ transform: scale(1.05); }

        .cx-text{
          padding: 12px 16px 16px;
          text-align: center;
        }

        .cx-name{
          margin: 10px 0 0;
          font-size: 20px;
          font-weight: 850;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }

        .cx-role{
          margin: 10px 0 0;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 10px;
          border-radius: 999px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          font-size: 12px;
          font-weight: 650;
          opacity: 0.92;
        }

        .cx-dot{
          width: 7px;
          height: 7px;
          border-radius: 99px;
          background: var(--accent, #4FC3F7);
          box-shadow: 0 0 0 4px rgba(79,195,247,0.12);
          flex: 0 0 auto;
        }

        .cx-divider{
          width: 34px;
          height: 2px;
          border-radius: 999px;
          margin: 12px auto 10px;
          background: rgba(255,255,255,0.18);
        }

        .cx-desc{
          margin: 0;
          font-size: 12.5px;
          line-height: 1.6;
          opacity: 0.88;
        }

        @keyframes cxFloat{
          0%{ transform: translateY(0); }
          50%{ transform: translateY(-5px); }
          100%{ transform: translateY(0); }
        }
        .cx-teamCard.in .cx-frame{
          animation: cxFloat 7.2s ease-in-out 1.2s infinite;
        }
      `}</style>

      <Underline />

      <div ref={ref} className="cx-teamWrap">
        <div className="cx-teamGrid">
          {members.map((m, idx) => (
            <Card
              key={m.name}
              className={`soft cx-teamCard ${inView ? "in" : ""}`}
              style={{ transitionDelay: `${inView ? idx * 120 : 0}ms` }}
            >
              <div className="cx-frame">
                <img src={m.img} alt={m.name} />
              </div>

              <div className="cx-text">
                <h3 className="cx-name">{m.name}</h3>

                <div className="cx-role">
                  <span className="cx-dot" aria-hidden="true" />
                  <span>{m.role}</span>
                </div>

                <div className="cx-divider" />

                {/* ✅ combined line1 + line2 */}
                <p className="cx-desc">
                  {m.line1} {m.line2}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
