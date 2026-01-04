import React from "react";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";

export default function WhyDifferent() {
  const points = [
    { t: "No app modification", d: "Works as an additional safety layer without changing other apps." },
    { t: "Real-time actions", d: "Detect → assess → respond instantly where the harm happens." },
    { t: "Privacy-first defaults", d: "Minimizes exposure and increases trust from day one." },
    { t: "Cross-platform thinking", d: "Built to grow beyond a single platform or use-case." },
  ];

  // ✅ duplicate for seamless looping
  const loop = [...points, ...points];

  return (
    <Section title="Why CensorX is different" subtitle="Built like a product — not just a detector.">
      <style>{`
        .cx-qRow{
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:12px;
          flex-wrap:wrap;
          margin-bottom: 12px;
        }
        .cx-qPill{
          display:inline-flex;
          align-items:center;
          gap:10px;
          padding: 10px 12px;
          border-radius: 999px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.10);
          color: rgba(255,255,255,0.80);
          font-size: 13px;
          line-height: 1.2;
        }
        .cx-qDot{
          width:10px;
          height:10px;
          border-radius:99px;
          background:#32b2a9;
          box-shadow: 0 0 0 6px rgba(50,178,169,0.12);
          flex:0 0 auto;
        }

        /* ---- LOOP BELT ---- */
      .cx-loopWrap{
  overflow: hidden;
  -webkit-mask-image: linear-gradient(
    to right,
    transparent,
    black 10%,
    black 90%,
    transparent
  );
  mask-image: linear-gradient(
    to right,
    transparent,
    black 10%,
    black 90%,
    transparent
  );
}


        /* subtle edge fades so it feels circular */
        .cx-loopWrap::before,
        .cx-loopWrap::after{
          content:"";
          position:absolute;
          top:0;
          bottom:0;
          width: 64px;
          z-index: 2;
          pointer-events:none;
        }
        .cx-loopWrap::before{
          left:0;
         
        }
        .cx-loopWrap::after{
          right:0;
        
        }

        .cx-belt{
          display:flex;
          gap: 14px;
          padding: 6px 6px;
          width: max-content;
          will-change: transform;
          animation: cxMarquee 50s linear infinite;
        }

        /* pause on hover for readability */
        .cx-loopWrap:hover .cx-belt{
          animation-play-state: paused;
        }

        /* continuous circular swipe */
        @keyframes cxMarquee{
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } /* because we duplicated the list */
        }

        /* ---- CARD STYLE ---- */
        .cx-card{
          flex: 0 0 auto;
          width: 290px;
          border-radius: 22px;
          overflow: hidden;
          background: linear-gradient(180deg, rgba(7,25,24,0.78), rgba(0,0,0,0.55));
          border: 1px solid rgba(255,255,255,0.10);
          box-shadow: 0 18px 55px rgba(0,0,0,0.18);
          position: relative;
        }

        /* highlight glow */
        .cx-card::before{
          content:"";
          position:absolute;
          inset:-2px;
          background:
            radial-gradient(420px 160px at 20% 0%, rgba(50,178,169,0.22), transparent 60%),
            radial-gradient(420px 160px at 80% 40%, rgba(35,127,121,0.16), transparent 60%);
          opacity: 0.9;
          pointer-events:none;
        }

        .cx-inner{
          position: relative;
          padding: 14px 14px 16px;
        }

        .cx-top{
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap: 10px;
        }

        .cx-index{
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.18em;
          color: rgba(50,178,169,0.78);
        }

        .cx-badge{
          display:inline-flex;
          align-items:center;
          gap:8px;
          padding: 6px 10px;
          border-radius: 999px;
          background: rgba(50,178,169,0.10);
          border: 1px solid rgba(50,178,169,0.22);
          color: rgba(255,255,255,0.82);
          font-size: 12px;
          font-weight: 650;
          white-space: nowrap;
        }
        .cx-miniDot{
          width:7px;
          height:7px;
          border-radius:99px;
          background:#32b2a9;
          box-shadow: 0 0 0 4px rgba(50,178,169,0.12);
        }

        .cx-title{
          margin: 10px 0 0;
          font-size: 15px;
          font-weight: 900;
          letter-spacing: -0.01em;
          color: rgba(255,255,255,0.94);
          line-height: 1.25;
        }

        .cx-underline{
          width: 38px;
          height: 2px;
          border-radius: 999px;
          margin-top: 10px;
          background: rgba(50,178,169,0.55);
        }

        .cx-desc{
          margin-top: 10px;
          font-size: 13px;
          line-height: 1.6;
          color: rgba(255,255,255,0.78);
        }

        /* make it feel swipe-y on mobile */
        @media (max-width: 640px){
          .cx-card{ width: 260px; }
          .cx-loopWrap::before, .cx-loopWrap::after{ width: 44px; }
          .cx-belt{ animation-duration: 22s; }
        }

        @media (prefers-reduced-motion: reduce){
          .cx-belt{ animation: none !important; transform: none !important; }
          .cx-loopWrap::before, .cx-loopWrap::after{ display:none; }
        }
      `}</style>

      {/* Q -> A vibe */}
      <div className="cx-qRow">
        <div className="cx-qPill">
          <span className="cx-qDot" aria-hidden="true" />
          <span>How is CensorX unique?</span>
        </div>

        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.65)" }}>
          Hover to pause
        </div>
      </div>

      {/* Infinite loop belt */}
      <div className="cx-loopWrap">
        <div className="cx-belt" aria-label="Why CensorX is different (looping)">
          {loop.map((p, i) => (
            <Card key={`${p.t}-${i}`} className="soft cx-card">
              <div className="cx-inner">
                

                <div className="cx-title">{p.t}</div>
                <div className="cx-underline" aria-hidden="true" />
                <div className="cx-desc">{p.d}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
