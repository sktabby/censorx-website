import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../routes/routes";
import Section from "../../components/ui/Section";
import schoolImg from "../../assets/school.jpg";

const PORTAL_URL = "https://school.censorx.in";

const gets = [
  {
    t: "You see your students in one place.",
    d: "Every child enrolled through your school, listed by name. One screen, nothing to maintain.",
  },
  {
    t: "You hand each family a code.",
    d: "The parent types it into the app and protection is on. That is the whole setup.",
  },
  {
    t: "You know who is actually protected.",
    d: "The moment a code is used, that student shows as active. You can see who still needs a reminder.",
  },
  {
    t: "You never see a child's private life.",
    d: "Names and status, nothing more. Messages, alerts and reports stay with the parent, where they belong.",
  },
];

// Example rows for the illustration only. Not real students.
const demoStudents = [
  { n: "Student A", on: true },
  { n: "Student B", on: true },
  { n: "Student C", on: false },
  { n: "Student D", on: true },
];

/* Filled teal login button used in the hero and the closing band */
function LoginButton() {
  return (
    <a
      href={PORTAL_URL}
      className="cxMoreBtn cxSch-loginFill"
      target="_blank"
      rel="noopener noreferrer"
    >
      School login
      <span className="cxMoreArrow" aria-hidden="true">→</span>
    </a>
  );
}

export default function Schools() {
  const [active, setActive] = useState(0);

  // which part of the example portal is lit for each sentence
  const lit = {
    list: active === 0 || active === 2,
    codes: active === 1,
    status: active === 2,
    priv: active === 3,
  };

  return (
    <>
      <Section
        title={
          <div className="cxSch-titleRow">
            <span>CensorX for Schools</span>

            <a
              href={PORTAL_URL}
              className="cxSch-loginTop"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="5" y="11" width="14" height="10" rx="2.5" />
                <path d="M8 11V8a4 4 0 018 0v3" />
              </svg>
              School login
            </a>
          </div>
        }
        subtitle=""
      >
        <style>{`
          /* ---------- TITLE ROW + TOP LOGIN ---------- */
          .cxSch-titleRow{
            display:flex;
            align-items:center;
            justify-content:space-between;
            gap:14px;
            flex-wrap:wrap;
          }
          .cxSch-loginTop{
            display:inline-flex;
            align-items:center;
            gap:9px;
            padding:11px 20px;
            border-radius:999px;
            background:#ffffff;
            color:#111827;
            font-size:14px;
            font-weight:900;
            line-height:1.2;
            letter-spacing:0;
            text-decoration:none;
            white-space:nowrap;
            box-shadow:0 10px 26px rgba(0,0,0,0.35);
            transition:transform 200ms ease, box-shadow 200ms ease, background 200ms ease, color 200ms ease;
          }
          .cxSch-loginTop:hover{
            transform:translateY(-2px);
            background:#0f6b65;
            color:#ffffff;
            box-shadow:0 14px 32px rgba(0,0,0,0.45);
          }

          /* ---------- FILLED LOGIN (hero + band) ---------- */
          .cxMoreBtn.cxSch-loginFill{
            background:#32b2a9;
            border-color:#32b2a9;
            color:#001110;
          }
          .cxMoreBtn.cxSch-loginFill:hover{
            background:#4fd1c5;
            border-color:#4fd1c5;
          }

          /* ---------- HERO ---------- */
          .cxSch-hero{
            display:grid;
            grid-template-columns:minmax(0, 1fr) minmax(0, 1.05fr);
            gap:clamp(24px, 4vw, 52px);
            align-items:center;
            padding:clamp(10px, 2vw, 20px) 0;
          }
          .cxSch-lead{
            margin:0 0 18px;
            font-size:clamp(24px, 3.4vw, 36px);
            line-height:1.2;
            font-weight:900;
            letter-spacing:-0.015em;
            color:var(--text);
          }
          .cxSch-hero p{
            margin:0;
            font-size:clamp(15px, 1.9vw, 17px);
            line-height:1.9;
            color:var(--muted);
          }
          .cxSch-actions{
            margin-top:30px;
            display:flex;
            gap:14px;
            flex-wrap:wrap;
          }
          .cxSch-media{
            position:relative;
            margin:0;
          }
          .cxSch-media::before{
            content:"";
            position:absolute;
            inset:18px -14px -14px 18px;
            border-radius:26px;
            border:1px solid rgba(255,255,255,0.14);
            pointer-events:none;
          }
          .cxSch-media img{
            position:relative;
            display:block;
            width:100%;
            height:auto;
            aspect-ratio:16 / 10;
            object-fit:cover;
            border-radius:24px;
            box-shadow:0 26px 70px rgba(0,0,0,0.45);
          }

          /* ---------- WHAT YOU GET: sentences + live example ---------- */
          .cxSch-show{
            display:grid;
            grid-template-columns:minmax(0, 1.1fr) minmax(0, 0.9fr);
            gap:clamp(26px, 5vw, 64px);
            align-items:center;
          }

          .cxSch-lines{
            display:grid;
          }
          .cxSch-line{
            position:relative;
            display:grid;
            grid-template-columns:54px 1fr;
            gap:6px;
            width:100%;
            text-align:left;
            background:none;
            border:none;
            border-top:1px solid rgba(255,255,255,0.10);
            color:inherit;
            font:inherit;
            padding:24px 0 24px 18px;
            cursor:pointer;
            opacity:0.5;
            transition:opacity 300ms ease, padding-left 300ms ease;
          }
          .cxSch-line:last-child{
            border-bottom:1px solid rgba(255,255,255,0.10);
          }
          .cxSch-line::before{
            content:"";
            position:absolute;
            left:0;
            top:24px;
            bottom:24px;
            width:3px;
            border-radius:3px;
            background:#ffffff;
            transform:scaleY(0);
            transform-origin:top;
            transition:transform 300ms ease;
          }
          .cxSch-line.on{
            opacity:1;
            padding-left:26px;
          }
          .cxSch-line.on::before{ transform:scaleY(1); }
          .cxSch-line:focus-visible{
            outline:2px solid rgba(255,255,255,0.6);
            outline-offset:4px;
            border-radius:8px;
          }
          .cxSch-lineNum{
            font-size:13px;
            font-weight:900;
            letter-spacing:0.1em;
            color:var(--muted2);
            padding-top:7px;
          }
          .cxSch-line b{
            display:block;
            font-size:clamp(19px, 2.5vw, 26px);
            font-weight:900;
            line-height:1.25;
            letter-spacing:-0.01em;
            color:var(--text);
          }
          .cxSch-line span.cxSch-lineText{
            display:block;
            margin-top:8px;
            max-width:520px;
            font-size:15px;
            line-height:1.75;
            color:var(--muted);
          }

          /* the example portal */
          .cxSch-mock{
            background:#ffffff;
            color:#111827;
            border-radius:24px;
            padding:22px;
            box-shadow:0 26px 70px rgba(0,0,0,0.45);
            transform:rotate(1.5deg);
            transition:transform 400ms ease;
          }
          .cxSch-mock:hover{ transform:rotate(0deg); }
          .cxSch-mockTop{
            display:flex;
            align-items:center;
            justify-content:space-between;
            gap:10px;
            padding-bottom:14px;
            border-bottom:1px solid #e5e7eb;
          }
          .cxSch-mockTop b{
            font-size:15px;
            font-weight:900;
            color:#0b1220;
          }
          .cxSch-mockTop span{
            font-size:10.5px;
            font-weight:800;
            letter-spacing:0.1em;
            text-transform:uppercase;
            color:#6b7280;
            background:#f3f4f6;
            padding:4px 9px;
            border-radius:999px;
          }

          .cxSch-part{
            margin-top:14px;
            padding:12px;
            border-radius:16px;
            border:1.5px solid transparent;
            opacity:0.3;
            transition:opacity 350ms ease, border-color 350ms ease, background 350ms ease;
          }
          .cxSch-part.lit{
            opacity:1;
            border-color:#0f6b65;
            background:#f3faf9;
          }
          .cxSch-partLabel{
            font-size:10.5px;
            font-weight:800;
            letter-spacing:0.1em;
            text-transform:uppercase;
            color:#6b7280;
            margin-bottom:9px;
          }

          .cxSch-codes{
            display:flex;
            gap:8px;
            flex-wrap:wrap;
          }
          .cxSch-codes i{
            font-style:normal;
            font-family:ui-monospace, SFMono-Regular, Menlo, monospace;
            font-size:12.5px;
            font-weight:700;
            padding:6px 10px;
            border-radius:9px;
            background:#111827;
            color:#ffffff;
            letter-spacing:0.06em;
          }

          .cxSch-row{
            display:flex;
            align-items:center;
            justify-content:space-between;
            gap:10px;
            padding:8px 2px;
            font-size:14px;
            font-weight:700;
            color:#111827;
          }
          .cxSch-row + .cxSch-row{ border-top:1px solid #eef0f2; }
          .cxSch-pill{
            display:inline-flex;
            align-items:center;
            gap:6px;
            font-size:11.5px;
            font-weight:800;
            padding:4px 10px;
            border-radius:999px;
            background:#f3f4f6;
            color:#6b7280;
            transition:box-shadow 350ms ease;
          }
          .cxSch-pill.on{
            background:#0f6b65;
            color:#ffffff;
          }
          .cxSch-pill i{
            width:6px;
            height:6px;
            border-radius:50%;
            background:currentColor;
          }
          .cxSch-part.ring .cxSch-pill.on{
            animation:cxSchRing 1.6s ease-out infinite;
          }
          @keyframes cxSchRing{
            0%{ box-shadow:0 0 0 0 rgba(15,107,101,0.45); }
            100%{ box-shadow:0 0 0 9px rgba(15,107,101,0); }
          }

          .cxSch-priv{
            display:flex;
            align-items:center;
            gap:12px;
            font-size:13.5px;
            line-height:1.5;
            font-weight:700;
            color:#111827;
          }
          .cxSch-priv svg{ flex-shrink:0; }

          /* ---------- CLOSING BAND ---------- */
          .cxSch-band{
            margin-top:44px;
            border-radius:24px;
            padding:clamp(24px, 3.6vw, 38px);
            background:linear-gradient(180deg, rgba(7,25,24,0.78), rgba(0,0,0,0.45));
            border:1px solid rgba(255,255,255,0.08);
            box-shadow:0 20px 60px rgba(0,0,0,0.28);
            display:flex;
            align-items:center;
            justify-content:space-between;
            gap:22px;
            flex-wrap:wrap;
          }
          .cxSch-band p{
            margin:0;
            max-width:540px;
            font-size:15.5px;
            line-height:1.8;
            color:var(--muted);
          }
          .cxSch-band .cxSch-actions{ margin-top:0; }

          /* ---------- RESPONSIVE ---------- */
          @media (max-width: 900px){
            .cxSch-hero{ grid-template-columns:1fr; }
            .cxSch-media{ order:-1; }
            .cxSch-media::before{ display:none; }
            .cxSch-show{ grid-template-columns:1fr; }
            .cxSch-mock{ transform:none; max-width:460px; width:100%; margin:0 auto; }
          }
          @media (max-width: 600px){
            .cxSch-loginTop{ padding:10px 16px; font-size:13px; }
            .cxSch-line{ grid-template-columns:38px 1fr; padding:20px 0 20px 14px; }
            .cxSch-line.on{ padding-left:18px; }
            .cxSch-actions{ width:100%; }
            .cxSch-actions .cxMoreBtn{ width:100%; justify-content:center; }
          }
          @media (prefers-reduced-motion: reduce){
            .cxSch-line, .cxSch-line::before, .cxSch-part,
            .cxSch-mock, .cxSch-loginTop{ transition:none; }
            .cxSch-mock{ transform:none; }
            .cxSch-loginTop:hover{ transform:none; }
            .cxSch-part.ring .cxSch-pill.on{ animation:none; }
          }
        `}</style>

        <div className="cxSch-hero">
          <div>
            <h3 className="cxSch-lead">
              A child's day does not end when the bell rings.
            </h3>
            <p>
              The group chats, games and feeds follow them home, and what
              happens there walks back into class the next morning. CensorX
              gives your school a simple way to help parents protect their
              children, without adding work for your staff.
            </p>

            <div className="cxSch-actions">
              <NavLink to={`${ROUTES.CONTACT}?form=schools`} className="cxMoreBtn">
                Partner with us
                <span className="cxMoreArrow" aria-hidden="true">→</span>
              </NavLink>

              <LoginButton />
            </div>
          </div>

          <figure className="cxSch-media">
            <img src={schoolImg} alt="Students at school" />
          </figure>
        </div>
      </Section>

      <Section
        title="What your school gets"
        subtitle="Four things, in plain words. Point at one to see it."
      >
        <div className="cxSch-show">
          {/* the four sentences */}
          <div className="cxSch-lines">
            {gets.map((x, i) => (
              <button
                key={x.t}
                type="button"
                className={`cxSch-line${active === i ? " on" : ""}`}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-pressed={active === i}
              >
                <span className="cxSch-lineNum" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <b>{x.t}</b>
                  <span className="cxSch-lineText">{x.d}</span>
                </span>
              </button>
            ))}
          </div>

          {/* the example portal */}
          <div className="cxSch-mock" aria-hidden="true">
            <div className="cxSch-mockTop">
              <b>Your school</b>
              <span>Example view</span>
            </div>

            <div className={`cxSch-part${lit.codes ? " lit" : ""}`}>
              <div className="cxSch-partLabel">Codes to share</div>
              <div className="cxSch-codes">
                <i>CX-••••</i>
                <i>CX-••••</i>
                <i>CX-••••</i>
              </div>
            </div>

            <div
              className={`cxSch-part${lit.list ? " lit" : ""}${
                lit.status ? " ring" : ""
              }`}
            >
              <div className="cxSch-partLabel">Students</div>
              {demoStudents.map((s) => (
                <div key={s.n} className="cxSch-row">
                  {s.n}
                  <span className={`cxSch-pill${s.on ? " on" : ""}`}>
                    <i />
                    {s.on ? "Active" : "Not yet"}
                  </span>
                </div>
              ))}
            </div>

            <div className={`cxSch-part${lit.priv ? " lit" : ""}`}>
              <div className="cxSch-priv">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0f6b65"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="5" y="11" width="14" height="10" rx="2.5" />
                  <path d="M8 11V8a4 4 0 018 0v3" />
                </svg>
                Messages, alerts and reports are not shown here. Only the
                parent sees them.
              </div>
            </div>
          </div>
        </div>

        <div className="cxSch-band">
          <p>
            Already a partner? Use School login to open your portal. New here?
            Tell us about your school and we will get back to you.
          </p>

          <div className="cxSch-actions">
            <NavLink to={`${ROUTES.CONTACT}?form=schools`} className="cxMoreBtn">
              Partner with us
              <span className="cxMoreArrow" aria-hidden="true">→</span>
            </NavLink>

            <LoginButton />
          </div>
        </div>
      </Section>
    </>
  );
}