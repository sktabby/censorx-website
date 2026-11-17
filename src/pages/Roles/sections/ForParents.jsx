
import React, { useEffect, useRef, useState } from "react";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";
import parentImg from "../../../assets/team/parent.webp";

export default function ForParents() {
  const [expanded, setExpanded] = useState(false);
  const [showToggle, setShowToggle] = useState(false);
  const [fullHeight, setFullHeight] = useState(0);
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    // collapsed height = 5 lines (line-height 1.75)
    const measure = () => {
      const full = el.scrollHeight;
      const collapsed = parseFloat(getComputedStyle(el).fontSize) * 1.75 * 5;

      setFullHeight(full);
      setShowToggle(full > collapsed + 4);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <Section
      title="For Parents" as="h1"
      subtitle="Peace of mind for you. A safer phone for your child."
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
          .cxPar-wrap {
            display: grid;
            grid-template-columns: 1.15fr 0.85fr;
            gap: 22px;
            align-items: center;
          }

          @media (max-width: 900px) {
            .cxPar-wrap {
              grid-template-columns: 1fr;
              gap: 18px;
            }
          }

          .cxPar-para {
            max-width: 820px;
            font-size: 13px;
            line-height: 1.75;
            color: rgba(255,255,255,0.82);
            letter-spacing: -0.01em;
          }

          .cxPar-para p {
            margin: 0 0 12px;
          }

          .cxPar-para strong {
            color: rgba(255,255,255,0.96);
            font-weight: 700;
          }

          .cxPar-accent {
            color: #32b2a9;
            font-weight: 700;
          }

          .cxPar-divider {
            width: 48px;
            height: 2px;
            border-radius: 999px;
            background: rgba(50,178,169,0.45);
            margin: 16px 0;
          }

          /* smooth expand / collapse, same feel as SolutionWhatIs */
          .cxPar-clip {
            max-height: calc(1.75em * 5);
            overflow: hidden;
            transition: max-height 500ms ease;
            -webkit-mask-image: linear-gradient(to bottom, #000 55%, transparent);
            mask-image: linear-gradient(to bottom, #000 55%, transparent);
          }

          .cxPar-clip.expanded {
            -webkit-mask-image: none;
            mask-image: none;
          }

          .cxPar-foot {
            margin-top: 16px;
            display: flex;
            justify-content: flex-start;
          }

          /* Same Read More button as SolutionWhatIs */

          .cxPar-readMoreBtn {
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

          .cxPar-readMoreBtn:hover {
            background: rgba(50,178,169,0.16);
            border-color: rgba(50,178,169,0.5);
            transform: translateY(-2px);
          }

          .cxPar-readMoreArrow {
            display: inline-block;
            transition: transform 300ms ease;
          }

          .cxPar-readMoreArrow.rotated {
            transform: rotate(180deg);
          }

          /* IMAGE FRAME */

          .cxPar-imageFrame {
            position: relative;
            width: 100%;
            max-width: 340px;
            aspect-ratio: 4 / 5;
            margin-left: auto;
            border-radius: var(--radius-lg);
            overflow: hidden;
            background: rgba(255,255,255,0.04);
            border: 1px solid rgba(255,255,255,0.12);
            box-shadow: 0 18px 45px rgba(0,0,0,0.35);
          }

          @media (max-width: 900px) {
            .cxPar-imageFrame {
              margin: 0 auto;
              max-width: 280px;
            }
          }

          .cxPar-imageFrame img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            transform: scale(1.03);
            display: block;
          }

          .cxPar-imageFrame::after {
            content: "";
            position: absolute;
            inset: 0;
            background:
              radial-gradient(260px 200px at 30% 20%, rgba(50,178,169,0.18), transparent 60%),
              linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.45));
            pointer-events: none;
          }

          @media (prefers-reduced-motion: reduce) {
            .cxPar-clip,
            .cxPar-readMoreBtn,
            .cxPar-readMoreArrow {
              transition: none;
            }
          }
        `}</style>

        <div className="cxPar-wrap">
          {/* LEFT CONTENT */}
          <div className="cxPar-para">
            <div
              ref={textRef}
              className={`cxPar-clip${expanded ? " expanded" : ""}`}
              style={expanded ? { maxHeight: fullHeight } : undefined}
            >
              <p>
                <strong>Every parent knows this worry.</strong> Your child is
                safe in the next room, but their phone can take them anywhere.
                You cannot always see who is talking to them, or what they are
                being told.
              </p>

              <p>
                A cruel message from a classmate can hurt more than we realise.
                Many children do not tell anyone. They keep the pain inside,
                and they slowly go quiet. By the time we notice, it has often
                been hurting for weeks.
              </p>

              <div className="cxPar-divider" />

              <p>
                <strong>Social media does not wait for your child to be ready.</strong>{" "}
                A few minutes of scrolling can show them violent clips, adult
                images and hateful comments. They do not have to look for it. It
                finds them. And once a child has seen something upsetting, they
                cannot unsee it.
              </p>

              <p>
                Then there are short videos. They are made to never end: one more,
                then one more. Homework waits. Sleep waits. A child who once
                loved playing outside cannot put the phone down. This is not
                because your child is bad or weak. These apps are built to hold
                on to them, and many children cannot stop on their own.
              </p>

              <p>
                Games can be the same. Hours pass quietly, and a hobby slowly
                becomes a habit. You may not even notice until your child is tired
                all the time, short-tempered, or no longer interested in anything
                else.
              </p>

              <div className="cxPar-divider" />

              <p>
                CensorX is here to help you notice{" "}
                <span className="cxPar-accent">sooner</span>. If it finds
                bullying, threats or unsafe messages on your child’s phone, you
                get an alert with a short excerpt and the app it came from. It
                can blur harmful images before your child sees them. You can set
                limits on short-video feeds, and when time is up, your child sees
                a message and can close it themselves. And a daily usage summary
                shows you which apps, including games, take up your child’s time,
                so you can talk about it before it becomes a struggle.
              </p>

              <p>
                Then you can talk to your child, gently and early, before a small
                problem becomes a big one.
              </p>

              <div className="cxPar-divider" />

              <p>
                <strong>We believe in being honest with children.</strong>{" "}
                CensorX is a monitoring app, and it does not hide. Your child’s
                phone shows a notice whenever protection is on. We encourage you
                to tell your child that it is there, and to explain why. Safety
                works best with{" "}
                <span className="cxPar-accent">trust, not secrecy</span>.
              </p>

              <p>
                No app can replace you. CensorX can miss things, and sometimes it
                may flag a message that is harmless. It is here to support your
                love, your attention and your conversations, not to take their
                place.
              </p>

              <p>
                You do not have to watch everything. You only need to know when
                your child might need you.
              </p>
            </div>

            {showToggle && (
              <div className="cxPar-foot">
                <button
                  type="button"
                  onClick={() => setExpanded((v) => !v)}
                  className="cxPar-readMoreBtn"
                  aria-expanded={expanded}
                >
                  {expanded ? "Read Less" : "Read More"}

                  <span
                    className={`cxPar-readMoreArrow ${
                      expanded ? "rotated" : ""
                    }`}
                    aria-hidden="true"
                  >
                    ↓
                  </span>
                </button>
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
