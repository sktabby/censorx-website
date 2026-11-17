import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../../routes/routes";

import Section from "../../../components/ui/Section";

function Icon({ children }) {
  return (
    <span className="cxPr-icon" aria-hidden="true">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        {children}
      </svg>
    </span>
  );
}

export default function ProblemHighlight() {
  return (
    <Section
      title="The internet changed. Safety didn’t."
      subtitle=""
    >
      <style>{`
        .cxPr-grid{
          display:grid;
          gap:20px;
          grid-template-columns:repeat(3, minmax(0,1fr));
          align-items:stretch;
        }
        @media (max-width: 900px){
          .cxPr-grid{ grid-template-columns:1fr; }
        }

        /* ---------- CARD ---------- */
        .cxPr-card{
          position:relative;
          overflow:hidden;
          border-radius:var(--radius-xl);
          padding:26px 24px 24px;
          color:#111827;
          background:linear-gradient(160deg, #ffffff 0%, #f6fbfa 60%, #e9f6f4 100%);
          box-shadow:
            0 20px 50px rgba(0,0,0,0.32),
            inset 0 1px 0 rgba(255,255,255,0.9);
          display:flex;
          flex-direction:column;
          transition:transform .25s ease, box-shadow .25s ease;
        }
        /* gradient border */
        .cxPr-card::before{
          content:"";
          position:absolute;
          inset:0;
          border-radius:var(--radius-xl);
          padding:1.5px;
          background:linear-gradient(
            160deg,
            #0a4a46 0%,
            rgba(10,74,70,0.25) 45%,
            rgba(10,74,70,0.6) 100%
          );
          -webkit-mask:
            linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);
          -webkit-mask-composite:xor;
          mask-composite:exclude;
          pointer-events:none;
        }
        /* corner wash */
        .cxPr-card::after{
          content:"";
          position:absolute;
          right:-70px; top:-70px;
          width:210px; height:210px;
          border-radius:50%;
          background:radial-gradient(circle, rgba(10,74,70,0.16), rgba(10,74,70,0) 70%);
          pointer-events:none;
        }
        .cxPr-card:hover{
          transform:translateY(-6px);
          box-shadow:
            0 30px 70px rgba(0,0,0,0.40),
            0 0 36px rgba(10,74,70,0.18),
            inset 0 1px 0 rgba(255,255,255,0.9);
        }

        /* ---------- STAT ---------- */
        .cxPr-stat{
          position:relative;
          z-index:1;
          display:flex;
          flex-direction:column;
          margin-bottom:18px;
        }
        .cxPr-stat strong{
          font-size:49.5px;
          font-weight:800;
          line-height:0.95;
          letter-spacing:-0.035em;
          background:linear-gradient(135deg, #073936 0%, #0a4a46 50%, var(--teal-ink) 100%);
          -webkit-background-clip:text;
          background-clip:text;
          color:transparent;
        }
        .cxPr-stat span{
          margin-top:10px;
          font-size:13px;
          line-height:1.55;
          font-weight:600;
          color:#073936;
        }

        /* ---------- HEAD ---------- */
        .cxPr-head{
          position:relative;
          z-index:1;
          display:flex;
          align-items:center;
          gap:12px;
          padding-top:16px;
          border-top:1px solid rgba(10,74,70,0.18);
          margin-bottom:10px;
        }
        .cxPr-icon{
          width:42px;
          height:42px;
          border-radius:var(--radius-md);
          display:grid;
          place-items:center;
          color:#ffffff;
          flex-shrink:0;
          background:linear-gradient(145deg, var(--teal-ink), #073936);
          box-shadow:
            0 10px 22px rgba(10,74,70,0.40),
            inset 0 1px 0 rgba(255,255,255,0.25);
        }
        .cxPr-card h3{
          margin:0;
          font-size:16px;
          font-weight:800;
          line-height:1.25;
          letter-spacing:-0.01em;
          color:#0b1220;
        }
        .cxPr-card p{
          position:relative;
          z-index:1;
          margin:0;
          font-size:13.5px;
          line-height:1.7;
          color:#374151;
        }

        /* ---------- FOOTER ---------- */
        .cxPr-foot{
          margin-top:20px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:10px;
          flex-wrap:wrap;
        }
        .cxPr-src{
          font-size:12px;
          color:var(--muted2);
          opacity:0.9;
        }
        @media (max-width: 600px){
          .cxPr-card{ padding:22px 20px 20px; }
          .cxPr-stat strong{ font-size:40.5px; }
        }
        @media (prefers-reduced-motion: reduce){
          .cxPr-card{ transition:none; }
          .cxPr-card:hover{ transform:none; }
        }
      `}</style>

      <div className="cxPr-grid">
        {/* CARD 1 */}
        <div className="cxPr-card">
          <div className="cxPr-stat">
            <strong>55%</strong>
            <span>of surveyed teens had seen sexual or violent content not meant for their age.</span>
          </div>
          <div className="cxPr-head">
            <Icon>
              <path
                d="M12 3l8 4v6c0 5-3.5 8-8 8s-8-3-8-8V7l8-4z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <path
                d="M12 8v5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <path
                d="M12 16h.01"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
            </Icon>
            <h3>Harmful content finds them first</h3>
          </div>
          <p>
            It appears without searching — in reels, feeds and game chats, often
            before a parent knows.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="cxPr-card">
          <div className="cxPr-stat">
            <strong>75%</strong>
            <span>of under-16s in the survey had been contacted by strangers on social media or in games.</span>
          </div>
          <div className="cxPr-head">
            <Icon>
              <path
                d="M7 9a5 5 0 0110 0v2a4 4 0 01-4 4h-2a4 4 0 01-4-4V9z"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <path
                d="M10 19h4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <path
                d="M9 12c1.2-1 2.8-1 4 0"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </Icon>
            <h3>Strangers can reach a child directly</h3>
          </div>
          <p>
            Direct messages and in-game chat open a private line to a child that
            no one else sees.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="cxPr-card">
          <div className="cxPr-stat">
            <strong>24/7</strong>
            <span>exposure. A child's phone is with them at home, at tuition, on holidays and late at night.</span>
          </div>
          <div className="cxPr-head">
            <Icon>
              <path
                d="M12 21s-7-4.4-7-10a4 4 0 017-2 4 4 0 017 2c0 5.6-7 10-7 10z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <path
                d="M9.2 12.2l1.6 1.6 3.9-3.9"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Icon>
            <h3>The damage is not just online</h3>
          </div>
          <p>
            Harassment and unwanted contact follow a child home. The stress shows
            up in sleep, school and confidence.
          </p>
        </div>
      </div>

      {/* footer */}
      <div className="cxPr-foot">
        <div className="cxPr-src">
          Source: Sky News survey of Darlington secondary students, March 2025.
        </div>

        <NavLink to={ROUTES.ABOUT} className="cxMoreBtn">
          Read More
          <span className="cxMoreArrow" aria-hidden="true">→</span>
        </NavLink>
      </div>
    </Section>
  );
}