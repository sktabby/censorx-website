import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../../routes/routes";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";

// ✅ put your image here (same folder as co-founders)
import safetyImg from "../../../assets/team/censorx-visual.png";

export default function WhatCensorXDoes() {
  return (
    <Section
      title="What CensorX does"
      subtitle="A real-time digital safety layer built for the moment harm appears."
    >
      <Card
        className="soft"
        style={{
          borderRadius: 22,
          padding: 22,
          background:
            "linear-gradient(180deg, rgba(7,25,24,0.78), rgba(0,0,0,0.55))",
          border: "1px solid rgba(50,178,169,0.20)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.28)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <style>{`
          .cx-wrap{
            display: grid;
            grid-template-columns: 1.15fr 0.85fr;
            gap: 22px;
            align-items: center;
          }

          @media (max-width: 900px){
            .cx-wrap{
              grid-template-columns: 1fr;
              gap: 18px;
            }
          }

          .cx-para {
            max-width: 820px;
            font-size: 14px;
            line-height: 1.75;
            color: rgba(255,255,255,0.82);
            letter-spacing: -0.01em;
          }

          .cx-para strong {
            color: rgba(255,255,255,0.96);
            font-weight: 800;
          }

          .cx-paraAccent {
            color: #32b2a9;
            font-weight: 800;
          }

          .cx-divider {
            width: 48px;
            height: 2px;
            border-radius: 999px;
            background: rgba(50,178,169,0.45);
            margin: 16px 0;
          }

          /* IMAGE FRAME */
          .cx-imageFrame{
            position: relative;
            width: 100%;
            max-width: 340px;
            aspect-ratio: 4 / 5;
            margin-left: auto;
            border-radius: 18px;
            overflow: hidden;
            background: rgba(255,255,255,0.04);
            border: 1px solid rgba(255,255,255,0.12);
            box-shadow: 0 18px 45px rgba(0,0,0,0.35);
          }

          @media (max-width: 900px){
            .cx-imageFrame{
              margin: 0 auto;
              max-width: 280px;
            }
          }

          .cx-imageFrame img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            transform: scale(1.03);
          }

          /* soft blend overlay */
          .cx-imageFrame::after{
            content:"";
            position:absolute;
            inset:0;
            background:
              radial-gradient(260px 200px at 30% 20%, rgba(50,178,169,0.18), transparent 60%),
              linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.45));
            pointer-events:none;
          }

          .cx-foot {
            margin-top: 16px;
            display: flex;
            justify-content: flex-start;
          }
        `}</style>

        <div className="cx-wrap">
          {/* LEFT CONTENT */}
          <div className="cx-para">
            <strong>CensorX</strong> is a real-time AI-powered safety layer that
            reduces exposure to harmful online content and harassment —
            especially for minors — while keeping normal app usage smooth.

            <div className="cx-divider" />

            Unlike traditional tools that block everything or react only after
            damage is done, CensorX works{" "}
            <span className="cx-paraAccent">in the moment</span>. It runs quietly
            in the background, detects risky text and visuals, assesses severity
            instantly, and takes the right safety action — block, blur, warn, or
            notify — without storing private data or turning daily life into
            surveillance.

            <br /><br />

            The goal is simple: <strong>prevention, not punishment</strong>.  
            Protect users while respecting privacy, dignity, and trust.

            <div className="cx-foot">
              <NavLink to={ROUTES.ABOUT} style={{ textDecoration: "none" }}>
                <button
                  type="button"
                  style={{
                    padding: "10px 14px",
                    borderRadius: 12,
                    border: "1px solid rgba(50,178,169,0.35)",
                    background: "rgba(50,178,169,0.12)",
                    color: "rgba(255,255,255,0.95)",
                    fontSize: 13,
                    fontWeight: 800,
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  See more <span aria-hidden="true">→</span>
                </button>
              </NavLink>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="cx-imageFrame">
            <img src={safetyImg} alt="CensorX digital safety in action" />
          </div>
        </div>
      </Card>
    </Section>
  );
}
