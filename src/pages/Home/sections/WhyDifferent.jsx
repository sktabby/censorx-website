import React from "react";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";

export default function WhyDifferent() {
  const points = [
    {
      t: "It acts before the hurt lands",
      d: "A harmful image is blurred the moment it appears, not after your child has already seen it.",
      icon: <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />,
    },
    {
      t: "Nothing behind your child's back",
      d: "Your child can always see that protection is on. No secrets, no spying, no broken trust.",
      icon: (
        <>
          <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
          <circle cx="12" cy="12" r="3" />
        </>
      ),
    },
    {
      t: "What it sees stays on the phone",
      d: "Screens are checked on the device itself. Screenshots are never saved or uploaded.",
      icon: (
        <>
          <rect x="5" y="11" width="14" height="10" rx="2.5" />
          <path d="M8 11V8a4 4 0 018 0v3" />
        </>
      ),
    },
    {
      t: "You hear only what matters",
      d: "No flood of messages to read. Just a short, calm alert when something really needs you.",
      icon: (
        <>
          <path d="M6 9a6 6 0 0112 0c0 6 2.5 7 2.5 7h-17S6 15 6 9z" />
          <path d="M10 20a2 2 0 004 0" />
        </>
      ),
    },
    {
      t: "It understands how kids really talk",
      d: "Children do not chat in textbook English. CensorX is built for Hinglish, slang and all.",
      icon: (
        <path d="M21 12a8 8 0 01-11.5 7.2L4 20l1-4.6A8 8 0 1121 12z" />
      ),
    },
    {
      t: "Their apps stay the same",
      d: "Nothing to change or replace. Your child keeps the apps they love, with someone watching the door.",
      icon: (
        <>
          <rect x="4" y="4" width="7" height="7" rx="2" />
          <rect x="13" y="4" width="7" height="7" rx="2" />
          <rect x="4" y="13" width="7" height="7" rx="2" />
          <rect x="13" y="13" width="7" height="7" rx="2" />
        </>
      ),
    },
  ];

  // Duplicate for seamless looping
  const loop = [...points, ...points];

  return (
    <Section
      title="Why CensorX is different"
      subtitle="Because protecting a child should never cost you their trust."
    >
      <style>{`
        .cx-why {
          background: transparent;
          padding: 0;
          border-radius: 0;
        }

        .cx-qRow {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 18px;
        }

        .cx-hint {
          font-size: 12px;
          color: rgba(255,255,255,0.70);
        }

        /* Infinite moving belt */

        .cx-loopWrap {
          position: relative;
          overflow: hidden;
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 7%,
            black 93%,
            transparent
          );
          mask-image: linear-gradient(
            to right,
            transparent,
            black 7%,
            black 93%,
            transparent
          );
        }

        .cx-belt {
          display: flex;
          gap: 18px;
          padding: 8px 6px 18px;
          width: max-content;
          will-change: transform;
          animation: cxMarquee 50s linear infinite;
        }

        .cx-loopWrap:hover .cx-belt {
          animation-play-state: paused;
        }

        @keyframes cxMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* White moving cards */

        .cx-card {
          flex: 0 0 auto;
          width: 300px;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: linear-gradient(160deg, #ffffff 0%, #f7faf9 65%, #eef5f4 100%) !important;
          color: #111827 !important;
          border: 1px solid #e5e7eb;
          box-shadow: 0 14px 40px rgba(0,0,0,0.22);
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .cx-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 22px 48px rgba(0,0,0,0.30);
        }

        .cx-inner {
          position: relative;
          padding: 24px 22px;
          min-height: 215px;
          display: flex;
          flex-direction: column;
        }

        .cx-num {
          position: absolute;
          right: 16px;
          top: 6px;
          font-size: 56.5px;
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.04em;
          color: rgba(15,107,101,0.10);
          user-select: none;
          transition: color 0.3s ease;
        }

        .cx-card:hover .cx-num {
          color: rgba(15,107,101,0.22);
        }

        .cx-icon {
          width: 46px;
          height: 46px;
          border-radius: var(--radius-md);
          display: grid;
          place-items: center;
          background: #111827;
          color: #ffffff;
          margin-bottom: 16px;
          box-shadow: 0 8px 18px rgba(17,24,39,0.30);
          transition: background 0.3s ease, transform 0.3s ease;
        }

        .cx-card:hover .cx-icon {
          background: var(--teal-ink);
          transform: rotate(-6deg) scale(1.06);
        }

        .cx-title {
          margin: 0;
          font-size: 16px;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #0b1220;
          line-height: 1.3;
        }

        .cx-underline {
          width: 36px;
          height: 3px;
          border-radius: 999px;
          margin-top: 12px;
          background: var(--teal-ink);
          transition: width 0.3s ease;
        }

        .cx-card:hover .cx-underline {
          width: 72px;
        }

        .cx-desc {
          margin-top: 12px;
          font-size: 13px;
          line-height: 1.7;
          color: #374151;
        }

        /* Mobile */

        @media (max-width: 640px) {
          .cx-card {
            width: 264px;
          }

          .cx-inner {
            padding: 20px 18px;
            min-height: 215px;
          }

          .cx-title {
            font-size: 15.5px;
          }

          .cx-desc {
            font-size: 12.5px;
          }

          .cx-num {
            font-size: 47.5px;
          }

          .cx-belt {
            animation-duration: 22s;
          }
        }

        /* Reduced motion accessibility */

        @media (prefers-reduced-motion: reduce) {
          .cx-belt {
            animation: none !important;
            transform: none !important;
          }

          .cx-card:hover,
          .cx-card:hover .cx-icon {
            transform: none;
          }
        }
      `}</style>

      <div className="cx-why">
        <div className="cx-qRow">
          <div className="cx-hint">
            Hover to pause
          </div>
        </div>

        <div className="cx-loopWrap">
          <div
            className="cx-belt"
            aria-label="Why CensorX is different (looping)"
          >
            {loop.map((p, i) => (
              <Card key={`${p.t}-${i}`} className="soft cx-card">
                <div className="cx-inner">
                  <div className="cx-num" aria-hidden="true">
                    {String((i % points.length) + 1).padStart(2, "0")}
                  </div>

                  <div className="cx-icon" aria-hidden="true">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {p.icon}
                    </svg>
                  </div>

                  <div className="cx-title">{p.t}</div>

                  <div
                    className="cx-underline"
                    aria-hidden="true"
                  />

                  <div className="cx-desc">{p.d}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}