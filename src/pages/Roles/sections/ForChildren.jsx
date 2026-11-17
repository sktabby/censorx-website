
import React, { useEffect, useRef, useState } from "react";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";
import childImg from "../../../assets/team/child_img.webp";

export default function ForChildren() {
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
      title="For Children"
      subtitle="You deserve to feel safe online."
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
          .cxChild-wrap {
            display: grid;
            grid-template-columns: 1.15fr 0.85fr;
            gap: 22px;
            align-items: center;
          }

          @media (max-width: 900px) {
            .cxChild-wrap {
              grid-template-columns: 1fr;
              gap: 18px;
            }
          }

          .cxChild-para {
            max-width: 820px;
            font-size: 13px;
            line-height: 1.75;
            color: rgba(255,255,255,0.82);
            letter-spacing: -0.01em;
          }

          .cxChild-para p {
            margin: 0 0 12px;
          }

          .cxChild-para strong {
            color: rgba(255,255,255,0.96);
            font-weight: 700;
          }

          .cxChild-accent {
            color: #32b2a9;
            font-weight: 700;
          }

          .cxChild-divider {
            width: 48px;
            height: 2px;
            border-radius: 999px;
            background: rgba(50,178,169,0.45);
            margin: 16px 0;
          }

          /* smooth expand / collapse, same feel as SolutionWhatIs */
          .cxChild-clip {
            max-height: calc(1.75em * 5);
            overflow: hidden;
            transition: max-height 500ms ease;
            -webkit-mask-image: linear-gradient(to bottom, #000 55%, transparent);
            mask-image: linear-gradient(to bottom, #000 55%, transparent);
          }

          .cxChild-clip.expanded {
            -webkit-mask-image: none;
            mask-image: none;
          }

          .cxChild-foot {
            margin-top: 16px;
            display: flex;
            justify-content: flex-start;
          }

          /* Same Read More button as SolutionWhatIs */

          .cxChild-readMoreBtn {
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

          .cxChild-readMoreBtn:hover {
            background: rgba(50,178,169,0.16);
            border-color: rgba(50,178,169,0.5);
            transform: translateY(-2px);
          }

          .cxChild-readMoreArrow {
            display: inline-block;
            transition: transform 300ms ease;
          }

          .cxChild-readMoreArrow.rotated {
            transform: rotate(180deg);
          }

          /* IMAGE FRAME */

          .cxChild-imageFrame {
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
            .cxChild-imageFrame {
              margin: 0 auto;
              max-width: 280px;
            }
          }

          .cxChild-imageFrame img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            transform: scale(1.03);
            display: block;
          }

          .cxChild-imageFrame::after {
            content: "";
            position: absolute;
            inset: 0;
            background:
              radial-gradient(260px 200px at 30% 20%, rgba(50,178,169,0.18), transparent 60%),
              linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.45));
            pointer-events: none;
          }

          @media (prefers-reduced-motion: reduce) {
            .cxChild-clip,
            .cxChild-readMoreBtn,
            .cxChild-readMoreArrow {
              transition: none;
            }
          }
        `}</style>

        <div className="cxChild-wrap">
          {/* LEFT CONTENT */}
          <div className="cxChild-para">
            <div
              ref={textRef}
              className={`cxChild-clip${expanded ? " expanded" : ""}`}
              style={expanded ? { maxHeight: fullHeight } : undefined}
            >
              <p>
                <strong>The internet can be a wonderful place.</strong> You can
                learn, play, laugh and talk to your friends. But sometimes it
                can also be unkind, and sometimes things pop up that make you
                feel scared, sad or confused.
              </p>

              <p>
                If that has ever happened to you,{" "}
                <span className="cxChild-accent">it was not your fault</span>.
                When someone says hurtful things, it says something about them,
                not about you. You do not have to carry it alone.
              </p>

              <div className="cxChild-divider" />

              <p>
                CensorX is a safety helper on your phone. Your parent or
                guardian sets it up using a link code, so you do not need to
                make an account or log in.
              </p>

              <p>
                <strong>If a harmful picture or video appears,</strong> CensorX
                covers your screen with a blur, so you do not have to look at
                it. You will see a button to leave the app and go back to your
                home screen. You can look away, and that is okay.
              </p>

              <p>
                <strong>If a chat or message looks like bullying or a threat,</strong>{" "}
                CensorX lets your parent know that there may be a concern. They
                see a short part of the message and the app it came from. Then
                someone who loves you can check on you and help.
              </p>

              <p>
                <strong>Short videos are hard to stop watching.</strong> That is
                how they are made. Your parent can turn them off, or allow a
                limited time. When the time is up, you will see a message, and
                you can close it yourself. Your parent can also set safe hours,
                like at bedtime, so your phone does not steal your sleep. This
                is not a punishment. It is so you have time for rest, homework,
                friends and fun outside.
              </p>

              <div className="cxChild-divider" />

              <p>
                <strong>We want to be honest with you.</strong> Your phone shows
                a notice whenever CensorX is on, so you always know it is there.
                Your parent can see a short part of a message when it is
                flagged, which apps it was in, and how much time you spend on
                your apps. Screenshots stay on your phone and are never sent
                anywhere. Your parent may also choose to stop CensorX being
                removed without them knowing. CensorX does not hide, and it is
                not there to spy on you.
              </p>

              <p>
                CensorX is not perfect. It can miss things, and sometimes it may
                flag something harmless, like a joke between friends. If
                something online upsets you, tell your parent, a teacher or
                another adult you trust, even if CensorX did not notice.
                Talking about it always helps.
              </p>

              <p>You deserve to feel safe, and you deserve to be heard.</p>
            </div>

            {showToggle && (
              <div className="cxChild-foot">
                <button
                  type="button"
                  onClick={() => setExpanded((v) => !v)}
                  className="cxChild-readMoreBtn"
                  aria-expanded={expanded}
                >
                  {expanded ? "Read Less" : "Read More"}

                  <span
                    className={`cxChild-readMoreArrow ${
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
          <div className="cxChild-imageFrame">
            <img src={childImg} alt="Child safety protection" />
          </div>
        </div>
      </Card>
    </Section>
  );
}
