import React, { useEffect, useRef, useState } from "react";
import Section from "../../../components/ui/Section";

const stops = [
  {
    stage: "Now",
    t: "Launch on Google Play",
    d: "Public release for Android in India.",
    more: "We are testing CensorX with a small group of parents and fixing what they find. Once it is ready, anyone in India can install it from Google Play.",
    icon: <path d="M8 5v14l11-7L8 5z" />,
  },
  {
    stage: "Next",
    t: "More Indian languages",
    d: "Beyond English and Hinglish.",
    more: "Children do not chat in textbook English. We are teaching CensorX more Indian languages and the slang that comes with them, so fewer hurtful messages slip through.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" />
      </>
    ),
  },
  {
    stage: "Later",
    t: "Voice chat safety",
    d: "Catch bullying in voice notes and game chat.",
    more: "A lot of bullying now happens by voice. Doing this well and privately on a phone is hard, so we are researching it carefully before we promise anything.",
    icon: (
      <>
        <rect x="9" y="3" width="6" height="11" rx="3" />
        <path d="M5 11a7 7 0 0014 0M12 18v3" />
      </>
    ),
  },
  {
    stage: "Later",
    t: "More devices",
    d: "Protection beyond Android phones.",
    more: "CensorX works on Android phones today. Over time we want to cover the other devices children use, wherever the platform lets us do it properly.",
    icon: (
      <>
        <rect x="3" y="5" width="12" height="9" rx="2" />
        <rect x="16" y="9" width="5" height="10" rx="1.5" />
        <path d="M6 18h6" />
      </>
    ),
  },
  {
    stage: "Always",
    t: "Smarter every release",
    d: "Fewer misses. Fewer false alarms.",
    more: "No safety tool is perfect. We keep testing against real cases so CensorX misses less and worries you less, without collecting more data than the job needs.",
    icon: (
      <>
        <path d="M12 3l8 4v6c0 5-3.5 8-8 8s-8-3-8-8V7l8-4z" />
        <path d="M8.5 12.5l2.5 2.5 4.5-5" />
      </>
    ),
  },
];

export default function RoadmapTimeline() {
  const wrapRef = useRef(null);
  const [openSet, setOpenSet] = useState({});

  function toggle(i) {
    setOpenSet((s) => ({ ...s, [i]: !s[i] }));
  }

  useEffect(() => {
    const rows = wrapRef.current
      ? wrapRef.current.querySelectorAll(".cxRd-row")
      : [];
    if (!("IntersectionObserver" in window)) {
      rows.forEach((r) => r.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.25 }
    );
    rows.forEach((r) => io.observe(r));
    return () => io.disconnect();
  }, []);

  return (
    <Section title="Roadmap" as="h1" subtitle="The road ahead. One stop at a time.">
      <style>{`
        .cxRd-wrap{
          position:relative;
          padding:34px 0 34px;
        }

        /* ---------- THE ROAD ---------- */
        .cxRd-road{
          position:absolute;
          top:0; bottom:0;
          left:50%;
          width:58px;
          transform:translateX(-50%);
          background:#1f2937;
          border-radius:30px;
          box-shadow:
            inset 2px 0 0 rgba(255,255,255,0.22),
            inset -2px 0 0 rgba(255,255,255,0.22),
            0 12px 34px rgba(0,0,0,0.45);
          overflow:hidden;
        }
        .cxRd-road::before{
          content:"";
          position:absolute;
          top:0; bottom:0;
          left:50%;
          width:4px;
          transform:translateX(-50%);
          background:repeating-linear-gradient(180deg, #ffffff 0 18px, transparent 18px 36px);
          background-size:4px 36px;
          opacity:0.85;
          animation:cxRdDash 0.9s linear infinite;
        }
        @keyframes cxRdDash{
          to{ background-position:0 36px; }
        }

        /* ---------- THE CAR ---------- */
        .cxRd-car{
          position:absolute;
          left:50%;
          top:0;
          width:24px;
          margin-left:-12px;
          z-index:1;
          filter:drop-shadow(0 6px 8px rgba(0,0,0,0.5));
          animation:cxRdDrive 11s linear infinite;
        }
        @keyframes cxRdDrive{
          0%{ top:0; opacity:0; }
          4%{ opacity:1; }
          94%{ opacity:1; }
          100%{ top:calc(100% - 46px); opacity:0; }
        }

        /* ---------- ROWS ---------- */
        .cxRd-row{
          position:relative;
          z-index:2;
          display:grid;
          grid-template-columns:1fr 96px 1fr;
          align-items:center;
          margin-bottom:30px;
          opacity:0;
          transition:opacity .6s ease, transform .6s ease;
        }
        .cxRd-row.left{ transform:translateX(-36px); }
        .cxRd-row.right{ transform:translateX(36px); }
        .cxRd-row.in{ opacity:1; transform:none; }

        .cxRd-row.left .cxRd-card{ grid-column:1; grid-row:1; justify-self:end; }
        .cxRd-row.left .cxRd-big{ grid-column:3; grid-row:1; justify-self:start; }
        .cxRd-row.right .cxRd-card{ grid-column:3; grid-row:1; justify-self:start; }
        .cxRd-row.right .cxRd-big{ grid-column:1; grid-row:1; justify-self:end; }

        /* pin on the road */
        .cxRd-pin{
          grid-column:2;
          grid-row:1;
          justify-self:center;
          width:50px;
          height:50px;
          border-radius:50%;
          background:#ffffff;
          color:#111827;
          display:grid;
          place-items:center;
          box-shadow:0 8px 20px rgba(0,0,0,0.45);
          transition:transform .5s cubic-bezier(.2,1.4,.4,1) .15s;
          transform:scale(0.4);
        }
        .cxRd-row.in .cxRd-pin{ transform:scale(1); }
        .cxRd-row.is-now .cxRd-pin{
          background:var(--teal-ink);
          color:#ffffff;
          animation:cxRdPulse 1.8s ease-out infinite;
        }
        @keyframes cxRdPulse{
          0%{ box-shadow:0 0 0 0 rgba(255,255,255,0.55), 0 8px 20px rgba(0,0,0,0.45); }
          100%{ box-shadow:0 0 0 18px rgba(255,255,255,0), 0 8px 20px rgba(0,0,0,0.45); }
        }

        /* card */
        .cxRd-card{
          width:100%;
          max-width:360px;
          background:#ffffff;
          color:#111827;
          border-radius:var(--radius-lg);
          padding:18px 20px;
          box-shadow:0 14px 40px rgba(0,0,0,0.30);
          transition:box-shadow .25s ease;
        }
        .cxRd-card:hover,
        .cxRd-card.open{
          box-shadow:0 22px 50px rgba(0,0,0,0.38);
        }
        .cxRd-stage{
          font-size:11px;
          font-weight:700;
          letter-spacing:0.14em;
          text-transform:uppercase;
          color:#6b7280;
          margin-bottom:6px;
        }
        .cxRd-row.is-now .cxRd-stage{ color:var(--teal-ink); }
        .cxRd-card h4{
          margin:0 0 4px;
          font-size:16px;
          line-height:1.25;
          font-weight:800;
          color:#0b1220;
        }
        .cxRd-card p{
          margin:0;
          font-size:13px;
          line-height:1.6;
          color:#374151;
        }

        /* smooth expand */
        .cxRd-more{
          display:grid;
          grid-template-rows:0fr;
          opacity:0;
          transition:grid-template-rows .45s ease, opacity .35s ease, margin-top .45s ease;
          margin-top:0;
        }
        .cxRd-card.open .cxRd-more{
          grid-template-rows:1fr;
          opacity:1;
          margin-top:10px;
        }
        .cxRd-more > div{
          overflow:hidden;
          min-height:0;
        }
        .cxRd-more p{
          padding-top:10px;
          border-top:1px dashed rgba(17,24,39,0.15);
          line-height:1.7;
        }

        .cxRd-btn{
          margin-top:12px;
          display:inline-flex;
          align-items:center;
          gap:6px;
          background:none;
          border:none;
          padding:0;
          font:inherit;
          font-size:13px;
          font-weight:700;
          color:var(--teal-ink);
          cursor:pointer;
        }
        .cxRd-btn:hover{ color:#0b4f4b; }
        .cxRd-btn svg{
          transition:transform .35s ease;
        }
        .cxRd-card.open .cxRd-btn svg{
          transform:rotate(180deg);
        }

        /* big faded stage word on the empty side */
        .cxRd-big{
          font-size:clamp(35px, 5.4vw, 63.5px);
          font-weight:800;
          line-height:1;
          letter-spacing:-0.03em;
          text-transform:uppercase;
          color:transparent;
          -webkit-text-stroke:1.5px rgba(255,255,255,0.22);
          user-select:none;
        }

        /* start / finish labels */
        .cxRd-end{
          position:relative;
          z-index:2;
          display:flex;
          justify-content:center;
        }
        .cxRd-end span{
          background:#ffffff;
          color:#111827;
          font-size:12px;
          font-weight:800;
          letter-spacing:0.12em;
          text-transform:uppercase;
          padding:8px 16px;
          border-radius:999px;
          box-shadow:0 8px 20px rgba(0,0,0,0.4);
        }
        .cxRd-end.top{ margin-bottom:30px; }

        /* ---------- MOBILE ---------- */
        @media (max-width: 760px){
          .cxRd-road{
            left:4px;
            width:50px;
            transform:none;
          }
          .cxRd-row{
            grid-template-columns:58px 1fr;
            column-gap:14px;
            margin-bottom:22px;
          }
          .cxRd-row.left,
          .cxRd-row.right{ transform:translateY(26px); }
          .cxRd-row.in{ transform:none; }
          .cxRd-pin{
            grid-column:1;
            width:44px;
            height:44px;
          }
          .cxRd-row.left .cxRd-card,
          .cxRd-row.right .cxRd-card{
            grid-column:2;
            justify-self:stretch;
            max-width:none;
          }
          .cxRd-big{ display:none; }
          .cxRd-end{ justify-content:flex-start; }
        }

        @media (prefers-reduced-motion: reduce){
          .cxRd-road::before,
          .cxRd-car,
          .cxRd-row.is-now .cxRd-pin{ animation:none; }
          .cxRd-car{ display:none; }
          .cxRd-row,
          .cxRd-row.left,
          .cxRd-row.right{ opacity:1; transform:none; transition:none; }
          .cxRd-pin{ transform:none; transition:none; }
          .cxRd-more,
          .cxRd-btn svg{ transition:none; }
        }
      `}</style>

      <div className="cxRd-wrap" ref={wrapRef}>
        <div className="cxRd-road" aria-hidden="true">
          <svg className="cxRd-car" viewBox="0 0 24 46" fill="none">
            <rect x="2" y="1" width="20" height="44" rx="8" fill="#ffffff" />
            <rect x="5" y="9" width="14" height="9" rx="3" fill="#1f2937" />
            <rect x="5" y="29" width="14" height="7" rx="3" fill="#1f2937" />
            <rect x="4" y="41" width="5" height="3" rx="1.5" fill="#fbbf24" />
            <rect x="15" y="41" width="5" height="3" rx="1.5" fill="#fbbf24" />
          </svg>
        </div>

        <div className="cxRd-end top">
          <span>Start</span>
        </div>

        {stops.map((s, i) => {
          const isOpen = !!openSet[i];
          return (
            <div
              key={s.t}
              className={`cxRd-row ${i % 2 === 0 ? "left" : "right"}${
                s.stage === "Now" ? " is-now" : ""
              }`}
            >
              <div className={`cxRd-card${isOpen ? " open" : ""}`}>
                <div className="cxRd-stage">{s.stage}</div>
                <h4>{s.t}</h4>
                <p>{s.d}</p>

                <div className="cxRd-more" aria-hidden={!isOpen}>
                  <div>
                    <p>{s.more}</p>
                  </div>
                </div>

                <button
                  type="button"
                  className="cxRd-btn"
                  aria-expanded={isOpen}
                  onClick={() => toggle(i)}
                >
                  {isOpen ? "Show less" : "Read more"}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
              </div>

              <div className="cxRd-pin" aria-hidden="true">
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
                  {s.icon}
                </svg>
              </div>

              <div className="cxRd-big" aria-hidden="true">
                {s.stage}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}