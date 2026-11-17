import React from "react";
import Section from "../../../components/ui/Section";

export default function DownloadCard() {
  return (
    <Section
      title={
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
        
        </div>
      }
    >
      <style>{`
        .cxDl-hero{
          background:#ffffff;
          color:#111827;
          border-radius:var(--radius-xl);
          padding:30px 28px;
          box-shadow:0 18px 50px rgba(0,0,0,0.30);
          display:flex;
          gap:24px;
          align-items:center;
          justify-content:space-between;
          flex-wrap:wrap;
        }
        .cxDl-hero h3{
          margin:0 0 8px;
          font-size:24.5px;
          line-height:1.2;
          font-weight:800;
          color:#0b1220;
        }
        .cxDl-hero p{
          margin:0;
          max-width:560px;
          font-size:14px;
          line-height:1.7;
          color:#374151;
        }

        /* ---------- COMING SOON BUTTON ---------- */
        .cxDl-btn{
          position:relative;
          overflow:hidden;
          display:flex;
          flex-direction:row;
          align-items:center;
          gap:14px;
          padding:12px 26px;
          border-radius:var(--radius-lg);
          background:#111827;
          color:#ffffff;
          cursor:default;
          white-space:nowrap;
          box-shadow:0 12px 30px rgba(17,24,39,0.35);
          animation:cxDlFloat 3s ease-in-out infinite;
        }
        .cxDl-btn-text{
          display:flex;
          flex-direction:column;
          gap:2px;
        }
        .cxDl-btn-small{
          font-size:10px;
          font-weight:700;
          letter-spacing:0.14em;
          text-transform:uppercase;
          opacity:0.75;
        }
        .cxDl-btn-main{
          display:flex;
          align-items:center;
          gap:10px;
          font-size:16px;
          font-weight:800;
        }
        .cxDl-dots{
          display:inline-flex;
          gap:4px;
        }
        .cxDl-dots i{
          width:6px;
          height:6px;
          border-radius:50%;
          background:#ffffff;
          opacity:0.3;
          animation:cxDlDot 1.2s infinite;
        }
        .cxDl-dots i:nth-child(2){ animation-delay:0.2s; }
        .cxDl-dots i:nth-child(3){ animation-delay:0.4s; }

        .cxDl-shine{
          position:absolute;
          top:0;
          left:-60%;
          width:40%;
          height:100%;
          background:linear-gradient(
            100deg,
            transparent,
            rgba(255,255,255,0.35),
            transparent
          );
          transform:skewX(-20deg);
          animation:cxDlShine 2.8s ease-in-out infinite;
          pointer-events:none;
        }

        @keyframes cxDlShine{
          0%{ left:-60%; }
          60%,100%{ left:130%; }
        }
        @keyframes cxDlDot{
          0%,100%{ opacity:0.3; transform:translateY(0); }
          50%{ opacity:1; transform:translateY(-3px); }
        }
        @keyframes cxDlFloat{
          0%,100%{ transform:translateY(0); }
          50%{ transform:translateY(-3px); }
        }

        /* ---------- MOBILE ---------- */
        @media (max-width: 800px){
          .cxDl-hero{ padding:22px 18px; }
          .cxDl-hero h3{ font-size:20px; }
          .cxDl-btn{ width:100%; justify-content:center; }
        }

        @media (prefers-reduced-motion: reduce){
          .cxDl-btn,
          .cxDl-shine,
          .cxDl-dots i{ animation:none; }
        }
      `}</style>

      <div className="cxDl-hero">
        <div>
          <h3>CensorX is coming to Google Play</h3>
          <p>
            We are testing CensorX with a small group of parents before the public
            launch. When it is ready, you will find it on Google Play.
          </p>
        </div>

        <div
          className="cxDl-btn"
          role="note"
          aria-label="Android app, coming soon on Google Play"
        >
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            aria-hidden="true"
            style={{ flexShrink: 0 }}
          >
            <rect
              x="1"
              y="1"
              width="32"
              height="32"
              rx="9"
              stroke="#fff"
              strokeOpacity="0.5"
              strokeWidth="2"
            />
            <path d="M13 10.5v13l11-6.5-11-6.5z" fill="#fff" />
          </svg>

          <span className="cxDl-btn-text">
            <span className="cxDl-btn-small">Coming soon on</span>
            <span className="cxDl-btn-main">
              Google Play
              <span className="cxDl-dots" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
            </span>
          </span>
          <span className="cxDl-shine" aria-hidden="true" />
        </div>
      </div>
    </Section>
  );
}