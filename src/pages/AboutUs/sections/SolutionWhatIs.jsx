
import React, { useState } from "react";
import logo from "../../../assets/team/c_logo_without_bg.png";

export default function SolutionWhatIs() {
  const [open, setOpen] = useState(false);

  return (
    <section className="container section">
      <div className="cx-solutionCard">
        <div className="cx-solutionHeading">
          <img
            src={logo}
            alt="CensorX logo"
            className="cx-solutionLogo"
          />
          <div className="cx-solutionTitle">
            What CensorX actually does
          </div>
        </div>

        <p className="cx-solutionPara">
          CensorX lives on your child's phone and does its work right there, on the
          phone. Think of it as a caring adult glancing over a shoulder — not
          reading everything, just watching for the things that hurt. It looks for
          harassment in chats, harmful images in feeds, and the endless pull of
          short videos that quietly eat hours. When something harmful shows up, it
          acts in that moment: a harmful image is blurred before it is really
          seen, a cruel message that is part of a pattern reaches you as a short
          alert, and short-video apps can be paused or limited at the times you
          choose. Nothing waits for a report, a screenshot, or a confession.
        </p>

        <div
          className={`cx-solutionExpandable ${open ? "expanded" : ""}`}
          aria-hidden={!open}
        >
          <p className="cx-solutionPara">
            It is not a restriction tool. We don't switch off the internet or
            turn every app into a locked door — your child still chats, still
            watches, still plays. Protection sits beside normal use instead of
            replacing it, because a child who feels trapped will always find
            another phone. It is built on honesty: your child can always see
            that CensorX is on, every permission is explained before we ask for
            it, and screenshots are checked on the phone and never
            uploaded. You get what matters — alerts and a weekly
            summary — not a copy of every private conversation. And it is built
            with humility. No system catches everything. CensorX will sometimes
            miss a message and sometimes flag one it shouldn't, which is why
            every alert asks you to look, not to panic, and why nothing we
            build replaces a real conversation between you and your child. Our
            aim is simple: a child who can grow up online with more confidence
            and less exposure, and a parent who can breathe a little easier.
          </p>
        </div>

        <div className="cx-solutionActions">
          <button
            type="button"
            onClick={() => setOpen((s) => !s)}
            className="cx-readMoreBtn"
            aria-expanded={open}
          >
            {open ? "Read Less" : "Read More"}
            <span className={`cx-readMoreArrow ${open ? "rotated" : ""}`}>
              ↓
            </span>
          </button>
        </div>
      </div>

      <style>{`
        .cx-solutionCard {
          border-radius: var(--radius-xl);
          padding: clamp(18px, 3vw, 24px);
          background: linear-gradient(
            180deg,
            rgba(7,25,24,0.78),
            rgba(0,0,0,0.40)
          );
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 18px 50px rgba(0,0,0,0.28);
        }

        .cx-solutionHeading {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 14px;
        }

        .cx-solutionLogo {
          width: 56px;
          height: 56px;
          object-fit: contain;
          flex-shrink: 0;
        }

        .cx-solutionTitle {
          font-weight: 800;
          font-size: 16px;
          color: var(--text);
        }

        .cx-solutionPara {
          margin: 0;
          opacity: 0.9;
          font-size: clamp(13px, 2.3vw, 14.5px);
          line-height: 1.85;
          color: var(--muted);
        }

        .cx-solutionExpandable {
          display: grid;
          grid-template-rows: 0fr;
          opacity: 0;
          transition:
            grid-template-rows 500ms ease,
            opacity 350ms ease;
        }

        .cx-solutionExpandable > p {
          min-height: 0;
          overflow: hidden;
        }

        .cx-solutionExpandable.expanded {
          grid-template-rows: 1fr;
          opacity: 1;
        }

        .cx-solutionExpandable.expanded > p {
          padding-top: 12px;
        }

        .cx-solutionActions {
          display: flex;
          margin-top: 16px;
        }

        .cx-readMoreBtn {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          appearance: none;
          border: 1px solid rgba(50,178,169,0.22);
          background: rgba(50,178,169,0.08);
          color: var(--text);
          padding: 10px 16px;
          border-radius: 999px;
          font-weight: 700;
          font-size: 13px;
          cursor: pointer;
          transition:
            transform 200ms ease,
            background 200ms ease,
            border-color 200ms ease;
        }

        .cx-readMoreBtn:hover {
          background: rgba(50,178,169,0.16);
          border-color: rgba(50,178,169,0.5);
          transform: translateY(-2px);
        }

        .cx-readMoreArrow {
          display: inline-block;
          transition: transform 300ms ease;
        }

        .cx-readMoreArrow.rotated {
          transform: rotate(180deg);
        }

        @media (prefers-reduced-motion: reduce) {
          .cx-solutionExpandable,
          .cx-readMoreBtn,
          .cx-readMoreArrow {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
