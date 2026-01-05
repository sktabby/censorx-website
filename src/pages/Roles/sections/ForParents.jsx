import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../../routes/routes";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";

// ✅ parent-focused image
import parentImg from "../../../assets/team/parent.png";

export default function ForParents() {
  const [expanded, setExpanded] = useState(false);
  const [showToggle, setShowToggle] = useState(false);
  const textRef = useRef(null);

  // ✅ Show "Read more" only if content exceeds 5 lines
  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    // remove clamp -> measure full height
    el.classList.remove("cxPar-collapsed");
    const fullHeight = el.scrollHeight;

    // add clamp -> measure clamped height
    el.classList.add("cxPar-collapsed");
    const clampedHeight = el.clientHeight;

    setShowToggle(fullHeight > clampedHeight + 4);
  }, []);

  return (
    <Section
      title="For Parents"
      subtitle="Protect without spying. Get alerts only when it matters."
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
          .cxPar-wrap{
            display:grid;
            grid-template-columns: 1.15fr 0.85fr;
            gap:22px;
            align-items:center;
          }

          @media (max-width: 900px){
            .cxPar-wrap{ grid-template-columns: 1fr; gap:18px; }
          }

          .cxPar-para{
            max-width: 820px;
            font-size: 14px;
            line-height: 1.75;
            color: rgba(255,255,255,0.82);
            letter-spacing: -0.01em;
          }

          .cxPar-para strong{
            color: rgba(255,255,255,0.96);
            font-weight: 800;
          }

          .cxPar-accent{
            color:#32b2a9;
            font-weight: 800;
          }

          .cxPar-divider{
            width: 48px;
            height: 2px;
            border-radius: 999px;
            background: rgba(50,178,169,0.45);
            margin: 16px 0;
          }

          .cxPar-foot{
            margin-top: 16px;
            display:flex;
            justify-content:flex-start;
          }

          /* ✅ Collapsed text (5 lines) */
          .cxPar-collapsed{
            display: -webkit-box;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          /* IMAGE FRAME */
          .cxPar-imageFrame{
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
            .cxPar-imageFrame{
              margin: 0 auto;
              max-width: 280px;
            }
          }

          .cxPar-imageFrame img{
            width:100%;
            height:100%;
            object-fit: cover;
            object-position: center;
            transform: scale(1.03);
            display:block;
          }

          .cxPar-imageFrame::after{
            content:"";
            position:absolute;
            inset:0;
            background:
              radial-gradient(260px 200px at 30% 20%, rgba(50,178,169,0.18), transparent 60%),
              linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.45));
            pointer-events:none;
          }
        `}</style>

        <div className="cxPar-wrap">
          {/* LEFT CONTENT */}
          <div className="cxPar-para">
            <div
              ref={textRef}
              className={!expanded ? "cxPar-collapsed" : ""}
            >
              <strong>For parents</strong>, CensorX provides reassurance without
              turning protection into surveillance. You receive{" "}
              <span className="cxPar-accent">real-time alerts</span> only when
              serious or high-risk situations occur — not every message or
              interaction.

              <div className="cxPar-divider" />

              Protection levels can be adjusted based on your child’s age and
              maturity, helping guide safer online behavior while encouraging
              independence and trust. The focus is{" "}
              <span className="cxPar-accent">
                awareness, not constant monitoring
              </span>{" "}
              — so families can stay protected without breaking privacy.
            </div>

            {/* ✅ Show button only if needed */}
            {showToggle && (
              <div className="cxPar-foot">
                <NavLink
                  to={expanded ? ROUTES.HOW_IT_WORKS : "#"}
                  onClick={(e) => {
                    if (!expanded) {
                      e.preventDefault();
                      setExpanded(true);
                    }
                  }}
                  style={{ textDecoration: "none" }}
                >
                  <button
                    type="button"
                    onClick={(e) => {
                      if (expanded) {
                        e.preventDefault();
                        setExpanded(false);
                      }
                    }}
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
                </NavLink>
              </div>
            )}
          </div>

          {/* RIGHT IMAGE */}
          <div className="cxPar-imageFrame">
            <img src={parentImg} alt="Parental digital safety control" />
          </div>
        </div>
      </Card>
    </Section>
  );
}
