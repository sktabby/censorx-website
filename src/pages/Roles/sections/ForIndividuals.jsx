import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../../routes/routes";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";

import individualImg from "../../../assets/team/Individual.png";

export default function ForIndividuals() {
  const [expanded, setExpanded] = useState(false);
  const [showToggle, setShowToggle] = useState(false);
  const textRef = useRef(null);

  // ✅ Detect overflow (more than 5 lines)
  useEffect(() => {
    if (textRef.current) {
      const el = textRef.current;

      // Temporarily remove clamp to measure full height
      el.classList.remove("cxInd-collapsed");

      const fullHeight = el.scrollHeight;

      // Apply clamp and re-measure
      el.classList.add("cxInd-collapsed");
      const clampedHeight = el.clientHeight;

      if (fullHeight > clampedHeight + 4) {
        setShowToggle(true);
      }
    }
  }, []);

  return (
    <Section
      title="For Individuals"
      subtitle="Self-protection for focus, wellbeing, and peace of mind."
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
          .cxInd-wrap{
            display:grid;
            grid-template-columns: 1.15fr 0.85fr;
            gap:22px;
            align-items:center;
          }

          @media (max-width: 900px){
            .cxInd-wrap{ grid-template-columns: 1fr; gap:18px; }
          }

          .cxInd-para{
            max-width: 820px;
            font-size: 14px;
            line-height: 1.75;
            color: rgba(255,255,255,0.82);
            letter-spacing: -0.01em;
          }

          .cxInd-para strong{
            color: rgba(255,255,255,0.96);
            font-weight: 800;
          }

          .cxInd-accent{
            color:#32b2a9;
            font-weight: 800;
          }

          .cxInd-divider{
            width: 48px;
            height: 2px;
            border-radius: 999px;
            background: rgba(50,178,169,0.45);
            margin: 16px 0;
          }

          .cxInd-foot{
            margin-top: 16px;
            display:flex;
            justify-content:flex-start;
          }

          /* ✅ Collapsed (5 lines) */
          .cxInd-collapsed{
            display: -webkit-box;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .cxInd-imageFrame{
            position:relative;
            width:100%;
            max-width: 340px;
            aspect-ratio: 4 / 5;
            margin-left:auto;
            border-radius: 18px;
            overflow:hidden;
            background: rgba(255,255,255,0.04);
            border: 1px solid rgba(255,255,255,0.12);
            box-shadow: 0 18px 45px rgba(0,0,0,0.35);
          }

          @media (max-width: 900px){
            .cxInd-imageFrame{
              margin: 0 auto;
              max-width: 280px;
            }
          }

          .cxInd-imageFrame img{
            width:100%;
            height:100%;
            object-fit: cover;
            transform: scale(1.03);
            display:block;
          }

          .cxInd-imageFrame::after{
            content:"";
            position:absolute;
            inset:0;
            background:
              radial-gradient(260px 200px at 30% 20%, rgba(50,178,169,0.18), transparent 60%),
              linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.45));
          }
        `}</style>

        <div className="cxInd-wrap">
          {/* LEFT CONTENT */}
          <div className="cxInd-para">
            <div
              ref={textRef}
              className={!expanded ? "cxInd-collapsed" : ""}
            >
              <strong>For individuals</strong>, CensorX helps you stay in control
              of your digital space. It reduces exposure to harassment across
              apps and gives you{" "}
              <span className="cxInd-accent">
                customizable sensitivity
              </span>{" "}
              so you decide what gets filtered.

              <div className="cxInd-divider" />

              Whether it’s toxic conversations, unwanted triggers, or harmful
              media, CensorX responds{" "}
              <span className="cxInd-accent">in the moment</span> with the right
              action — blur, warn, or block — so you can protect your focus,
              wellbeing, and peace of mind without breaking your normal flow.
            </div>

            {/* ✅ Show button only if needed */}
            {showToggle && (
              <div className="cxInd-foot">
                <button
                  type="button"
                  onClick={() => setExpanded((v) => !v)}
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
                  {expanded ? (
                    <>
                      Read less <span aria-hidden="true">↑</span>
                    </>
                  ) : (
                    <>
                      Read more <span aria-hidden="true">→</span>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>

          {/* RIGHT IMAGE */}
          <div className="cxInd-imageFrame">
            <img src={individualImg} alt="Individual protection" />
          </div>
        </div>
      </Card>
    </Section>
  );
}
