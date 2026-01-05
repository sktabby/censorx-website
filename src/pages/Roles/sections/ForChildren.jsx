import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../../routes/routes";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";

// ✅ use same style of image import
import childImg from "../../../assets/team/child_img.png";

export default function ForChildren() {
  const [expanded, setExpanded] = useState(false);
  const [showToggle, setShowToggle] = useState(false);
  const textRef = useRef(null);

  // ✅ Detect overflow (more than 5 lines)
  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    // Remove clamp to measure full height
    el.classList.remove("cxChild-collapsed");
    const fullHeight = el.scrollHeight;

    // Add clamp and measure clamped height
    el.classList.add("cxChild-collapsed");
    const clampedHeight = el.clientHeight;

    setShowToggle(fullHeight > clampedHeight + 4);
  }, []);

  return (
    <Section
      title="For Children"
      subtitle="Silent protection with minimal disruption."
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
          .cxChild-wrap{
            display:grid;
            grid-template-columns: 1.15fr 0.85fr;
            gap:22px;
            align-items:center;
          }

          @media (max-width: 900px){
            .cxChild-wrap{ grid-template-columns: 1fr; gap:18px; }
          }

          .cxChild-para{
            max-width: 820px;
            font-size: 14px;
            line-height: 1.75;
            color: rgba(255,255,255,0.82);
            letter-spacing: -0.01em;
          }

          .cxChild-para strong{
            color: rgba(255,255,255,0.96);
            font-weight: 800;
          }

          .cxChild-accent{
            color:#32b2a9;
            font-weight: 800;
          }

          .cxChild-divider{
            width: 48px;
            height: 2px;
            border-radius: 999px;
            background: rgba(50,178,169,0.45);
            margin: 16px 0;
          }

          .cxChild-foot{
            margin-top: 16px;
            display:flex;
            justify-content:flex-start;
          }

          /* ✅ Collapsed (5 lines) */
          .cxChild-collapsed{
            display: -webkit-box;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          /* IMAGE FRAME */
          .cxChild-imageFrame{
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
            .cxChild-imageFrame{
              margin: 0 auto;
              max-width: 280px;
            }
          }

          .cxChild-imageFrame img{
            width:100%;
            height:100%;
            object-fit: cover;
            object-position: center;
            transform: scale(1.03);
            display:block;
          }

          .cxChild-imageFrame::after{
            content:"";
            position:absolute;
            inset:0;
            background:
              radial-gradient(260px 200px at 30% 20%, rgba(50,178,169,0.18), transparent 60%),
              linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.45));
            pointer-events:none;
          }
        `}</style>

        <div className="cxChild-wrap">
          {/* LEFT CONTENT */}
          <div className="cxChild-para">
            <div
              ref={textRef}
              className={!expanded ? "cxChild-collapsed" : ""}
            >
              <strong>For kids</strong>, CensorX avoids complex flows and keeps
              things calm. There’s{" "}
              <span className="cxChild-accent">no mandatory login</span> for
              children — setup can be done optionally by a parent — and
              protection runs quietly in the background.

              <div className="cxChild-divider" />

              When harmful chat, unsafe media, or toxic language appears, CensorX
              reacts <span className="cxChild-accent">in the moment</span> with
              minimal disruption — by blurring, warning, or blocking the content
              — so children can stay safer without feeling watched or
              interrupted.
            </div>

            {/* ✅ Show button only if needed */}
            {showToggle && (
              <div className="cxChild-foot">
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
          <div className="cxChild-imageFrame">
            <img src={childImg} alt="Child safety protection" />
          </div>
        </div>
      </Card>
    </Section>
  );
}
