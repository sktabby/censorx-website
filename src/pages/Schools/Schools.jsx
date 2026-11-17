import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../routes/routes";
import Section from "../../components/ui/Section";
import schoolImg from "../../assets/school.webp";

const PORTAL_URL = "https://school.censorx.in";

/* ---------- content ---------- */

const steps = [
  {
    t: "We set up your school",
    d: "Tell us your classes and how many students you have. We prepare your plan and your portal login, usually the same day.",
  },
  {
    t: "You share the codes",
    d: "Every class gets its own codes. We email them to you, and you can download them again from your portal at any time.",
  },
  {
    t: "Children are protected",
    d: "A parent types the code into the CensorX app on their child's phone. Protection begins, under your school's plan.",
  },
];

const gets = [
  {
    t: "You see all your students in one place.",
    d: "Every child from your school, listed by name and class. One screen. Nothing to keep up with.",
  },
  {
    t: "You give each family one code.",
    d: "One code for each student. It works once, on one phone. Lost the list? Download it again from the portal.",
  },
  {
    t: "You know who is protected.",
    d: "When a family uses their code, that child shows as active. You can see who may need a gentle reminder.",
  },
  {
    t: "You never see a child's private life.",
    d: "Only names and status. Messages and alerts go to the parent, and only the parent. A child's private world stays private.",
  },
];

const whyCards = [
  {
    t: "Watches over the apps children use",
    d: "CensorX looks out for harmful content and possible harassment in the chat apps your students already use, so a parent can hear about it early.",
    span: "span3",
    icon: <path d="M4 5h16v11H9l-5 4z" />,
  },
  {
    t: "A child's privacy stays safe",
    d: "The checking happens on the child's own phone. The school never sees messages, photos or chats. Only the parent is alerted.",
    span: "span3",
    icon: (
      <>
        <rect x="5" y="11" width="14" height="9" rx="2" />
        <path d="M8 11V8a4 4 0 018 0v3" />
      </>
    ),
  },
  {
    t: "Calm alerts for parents",
    d: "When something looks wrong, the parent gets a clear, gentle alert. It is not an accusation. It is a reason to talk with their child.",
    span: "span2",
    icon: (
      <>
        <path d="M6 9a6 6 0 0112 0c0 6 2 7 2 7H4s2-1 2-7z" />
        <path d="M10 20a2 2 0 004 0" />
      </>
    ),
  },
  {
    t: "Honest with children",
    d: "Every child can see that CensorX is on their phone. Nothing is hidden, so trust at home stays strong.",
    span: "span2",
    icon: (
      <>
        <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12z" />
        <circle cx="12" cy="12" r="2.5" />
      </>
    ),
  },
  {
    t: "Protection that stays on",
    d: "Parents enter one code, only once. After that, CensorX keeps watching quietly in the background, every day, not just in school hours.",
    span: "span2",
    dark: true,
    icon: <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />,
  },
];

const faqs = [
  {
    q: "How long does setup take?",
    a: "Usually one day. We create your school, then email you your login and your class codes.",
  },
  {
    q: "What happens when the plan ends?",
    a: "Protection pauses. When you renew, the same codes work again. No new codes. Nothing to hand out twice.",
  },
  {
    q: "Can we add students during the year?",
    a: "Yes. We add more codes to the class. They end on the same date as everyone else's.",
  },
  {
    q: "What plans are available?",
    a: "We have more than one plan, priced per student. Write to us and we will help you pick the right one.",
  },
  {
    q: "What if a code is lost or shared?",
    a: "Download it again from your portal, or tell us and we will give you a new one.",
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
      className="cxMoreBtn isPrimary"
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
  const [faqOpen, setFaqOpen] = useState(-1);

  // which part of the example portal is lit for each sentence
  const lit = {
    list: active === 0 || active === 2,
    codes: active === 1,
    status: active === 2,
    priv: active === 3,
  };

  return (
    <>
      <Section>
        <div className="sectionHead">
          <div className="cxSch-titleRow h2">
            <h1 className="h2">CensorX for Schools</h1>

            <a
              href={PORTAL_URL}
              className="cxMoreBtn"
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
        </div>
        <style>{`
          /* ---------- TITLE ROW + TOP LOGIN ---------- */
          .cxSch-titleRow{
            display:flex;
            align-items:center;
            justify-content:space-between;
            gap:14px;
            flex-wrap:wrap;
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
            font-size:clamp(21px, 3.1vw, 31.5px);
            line-height:1.2;
            font-weight:800;
            letter-spacing:-0.015em;
            color:var(--text);
          }
          .cxSch-hero p{
            margin:0;
            font-size:clamp(14px, 1.7vw, 16px);
            line-height:1.9;
            color:var(--muted);
          }
          .cxSch-actions{
            margin-top:28px;
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
            border-radius:var(--radius-xl);
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
            border-radius:var(--radius-xl);
            box-shadow:0 26px 70px rgba(0,0,0,0.45);
          }

          /* ---------- 3 STEPS ---------- */
          .cxSch-steps{
            display:grid;
            grid-template-columns:repeat(3, minmax(0,1fr));
            gap:18px;
            counter-reset:cxstep;
          }
          .cxSch-step{
            position:relative;
            background:#ffffff;
            color:#111827;
            border-radius:var(--radius-lg);
            padding:26px 22px 22px;
            box-shadow:0 18px 50px rgba(0,0,0,0.30);
          }
          .cxSch-step::before{
            counter-increment:cxstep;
            content:counter(cxstep, decimal-leading-zero);
            display:inline-block;
            font-size:13px;
            font-weight:800;
            letter-spacing:0.08em;
            color:#ffffff;
            background:var(--teal-ink);
            border-radius:999px;
            padding:5px 12px;
            margin-bottom:14px;
          }
          .cxSch-step b{
            display:block;
            font-size:15.5px;
            font-weight:800;
            letter-spacing:-0.01em;
            color:#0b1220;
            margin-bottom:8px;
          }
          .cxSch-step p{
            margin:0;
            font-size:13.5px;
            line-height:1.75;
            color:#4b5563;
          }
          .cxSch-step::after{
            content:"→";
            position:absolute;
            top:50%;
            right:-16px;
            transform:translateY(-50%);
            font-size:16px;
            font-weight:800;
            color:rgba(255,255,255,0.45);
          }
          .cxSch-step:last-child::after{ display:none; }

          /* ---------- WHAT YOU GET: sentences + live example ---------- */
          .cxSch-show{
            display:grid;
            grid-template-columns:minmax(0, 1.1fr) minmax(0, 0.9fr);
            gap:clamp(26px, 5vw, 64px);
            align-items:center;
          }
          .cxSch-lines{ display:grid; }
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
          .cxSch-line.on{ opacity:1; padding-left:26px; }
          .cxSch-line.on::before{ transform:scaleY(1); }
          .cxSch-line:focus-visible{
            outline:2px solid rgba(255,255,255,0.6);
            outline-offset:4px;
            border-radius:var(--radius-sm);
          }
          .cxSch-lineNum{
            font-size:13px;
            font-weight:800;
            letter-spacing:0.1em;
            color:var(--muted2);
            padding-top:7px;
          }
          .cxSch-line b{
            display:block;
            font-size:clamp(16.5px, 2.3vw, 23px);
            font-weight:800;
            line-height:1.25;
            letter-spacing:-0.01em;
            color:var(--text);
          }
          .cxSch-line span.cxSch-lineText{
            display:block;
            margin-top:8px;
            max-width:520px;
            font-size:14px;
            line-height:1.75;
            color:var(--muted);
          }

          /* the example portal */
          .cxSch-mock{
            background:#ffffff;
            color:#111827;
            border-radius:var(--radius-xl);
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
          .cxSch-mockTop b{ font-size:14px; font-weight:800; color:#0b1220; }
          .cxSch-mockTop span{
            font-size:10.5px;
            font-weight:700;
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
            border-radius:var(--radius-lg);
            border:1.5px solid transparent;
            opacity:0.3;
            transition:opacity 350ms ease, border-color 350ms ease, background 350ms ease;
          }
          .cxSch-part.lit{
            opacity:1;
            border-color:var(--teal-ink);
            background:#f3faf9;
          }
          .cxSch-partLabel{
            font-size:10.5px;
            font-weight:700;
            letter-spacing:0.1em;
            text-transform:uppercase;
            color:#6b7280;
            margin-bottom:9px;
          }
          .cxSch-codes{ display:flex; gap:8px; flex-wrap:wrap; }
          .cxSch-codes i{
            font-style:normal;
            font-family:var(--font-mono);
            font-size:12.5px;
            font-weight:700;
            padding:6px 10px;
            border-radius:var(--radius-sm);
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
            font-size:13px;
            font-weight:700;
            color:#111827;
          }
          .cxSch-row + .cxSch-row{ border-top:1px solid #eef0f2; }
          .cxSch-pill{
            display:inline-flex;
            align-items:center;
            gap:6px;
            font-size:11.5px;
            font-weight:700;
            padding:4px 10px;
            border-radius:999px;
            background:#f3f4f6;
            color:#6b7280;
            transition:box-shadow 350ms ease;
          }
          .cxSch-pill.on{ background:var(--teal-ink); color:#ffffff; }
          .cxSch-pill i{
            width:6px; height:6px; border-radius:50%;
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
            font-size:12.5px;
            line-height:1.5;
            font-weight:700;
            color:#111827;
          }
          .cxSch-priv svg{ flex-shrink:0; }

          /* ---------- WHY: bento grid ---------- */
          .cxSch-why{
            display:grid;
            grid-template-columns:repeat(6, minmax(0,1fr));
            gap:16px;
          }
          .cxSch-wCard{
            background:#ffffff;
            color:#111827;
            border-radius:var(--radius-xl);
            padding:28px;
            box-shadow:0 18px 50px rgba(0,0,0,0.30);
            display:flex;
            flex-direction:column;
            gap:12px;
            transition:transform 250ms ease;
          }
          .cxSch-wCard:hover{ transform:translateY(-4px); }
          .cxSch-wCard.span3{ grid-column:span 3; }
          .cxSch-wCard.span2{ grid-column:span 2; }
          .cxSch-wIcon{
            width:46px;
            height:46px;
            display:grid;
            place-items:center;
            border-radius:var(--radius-md);
            background:#e6f3f2;
            color:var(--teal-ink);
            margin-bottom:6px;
          }
          .cxSch-wCard b{
            font-size:16px;
            font-weight:700;
            line-height:1.3;
            letter-spacing:-0.01em;
            color:#0b1220;
          }
          .cxSch-wCard p{
            margin:0;
            font-size:14px;
            line-height:1.7;
            color:#4b5563;
          }
          .cxSch-wCard.dark{
            background:linear-gradient(135deg, var(--teal-ink), #071918);
            color:#ffffff;
            box-shadow:0 18px 50px rgba(15,107,101,0.35);
          }
          .cxSch-wCard.dark .cxSch-wIcon{ background:rgba(255,255,255,0.14); color:#ffffff; }
          .cxSch-wCard.dark b{ color:#ffffff; }
          .cxSch-wCard.dark p{ color:rgba(255,255,255,0.78); }

          /* ---------- PAYMENTS STRIP ---------- */
          .cxSch-pay{
            display:grid;
            grid-template-columns:minmax(0,1.2fr) auto;
            align-items:center;
            gap:clamp(20px, 3vw, 40px);
            border-radius:var(--radius-xl);
            padding:clamp(24px, 3.6vw, 38px);
            background:linear-gradient(180deg, rgba(7,25,24,0.78), rgba(0,0,0,0.40));
            border:1px solid rgba(255,255,255,0.08);
            box-shadow:0 20px 60px rgba(0,0,0,0.28);
          }
          .cxSch-pay h4{
            margin:0 0 10px;
            font-size:clamp(16.5px, 2.2vw, 22px);
            font-weight:800;
            line-height:1.3;
            letter-spacing:-0.01em;
            color:var(--text);
          }
          .cxSch-pay p{
            margin:0;
            max-width:620px;
            font-size:14.5px;
            line-height:1.9;
            color:var(--muted);
          }

          /* ---------- FAQ ---------- */
          .cxSch-faq{ display:grid; max-width:760px; }
          .cxSch-faqItem{ border-top:1px solid rgba(255,255,255,0.10); }
          .cxSch-faqItem:last-child{ border-bottom:1px solid rgba(255,255,255,0.10); }
          .cxSch-faqQ{
            display:flex;
            align-items:center;
            justify-content:space-between;
            gap:14px;
            width:100%;
            text-align:left;
            background:none;
            border:none;
            color:var(--text);
            font:inherit;
            font-size:15.5px;
            font-weight:700;
            letter-spacing:-0.01em;
            padding:20px 2px;
            cursor:pointer;
          }
          .cxSch-faqQ:focus-visible{
            outline:2px solid rgba(255,255,255,0.6);
            outline-offset:4px;
            border-radius:var(--radius-sm);
          }
          .cxSch-faqQ span{
            flex-shrink:0;
            width:26px;
            height:26px;
            display:inline-flex;
            align-items:center;
            justify-content:center;
            border-radius:50%;
            border:1px solid rgba(255,255,255,0.25);
            font-size:13px;
            font-weight:800;
            color:#32b2a9;
            transition:transform 250ms ease;
          }
          .cxSch-faqItem.open .cxSch-faqQ span{ transform:rotate(45deg); }
          .cxSch-faqA{
            margin:0;
            padding:0 36px 20px 2px;
            font-size:14px;
            line-height:1.85;
            color:var(--muted);
          }

          /* ---------- CLOSING BAND ---------- */
          .cxSch-band{
            margin-top:44px;
            border-radius:var(--radius-xl);
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
          .cxSch-band h4{
            margin:0 0 8px;
            font-size:clamp(16.5px, 2.2vw, 22px);
            font-weight:800;
            letter-spacing:-0.01em;
            color:var(--text);
          }
          .cxSch-band p{
            margin:0;
            max-width:540px;
            font-size:14.5px;
            line-height:1.8;
            color:var(--muted);
          }
          .cxSch-band .cxSch-actions{ margin-top:0; }

          /* ---------- RESPONSIVE ---------- */
          @media (max-width: 900px){
            .cxSch-hero{ grid-template-columns:1fr; }
            .cxSch-media{ order:-1; }
            .cxSch-media::before{ display:none; }
            .cxSch-steps{ grid-template-columns:1fr; }
            .cxSch-step::after{ display:none; }
            .cxSch-show{ grid-template-columns:1fr; }
            .cxSch-mock{ transform:none; max-width:460px; width:100%; margin:0 auto; }
            .cxSch-why{ grid-template-columns:1fr 1fr; }
            .cxSch-wCard.span3, .cxSch-wCard.span2{ grid-column:span 1; }
            .cxSch-pay{ grid-template-columns:1fr; }
          }
          @media (max-width: 600px){
            .cxSch-line{ grid-template-columns:38px 1fr; padding:20px 0 20px 14px; }
            .cxSch-line.on{ padding-left:18px; }
            .cxSch-why{ grid-template-columns:1fr; }
            .cxSch-actions{ width:100%; }
            .cxSch-actions .cxMoreBtn{ width:100%; justify-content:center; }
          }
          @media (prefers-reduced-motion: reduce){
            .cxSch-line, .cxSch-line::before, .cxSch-part,
            .cxSch-mock, .cxSch-wCard,
            .cxSch-faqQ span{ transition:none; }
            .cxSch-wCard:hover{ transform:none; }
            .cxSch-mock{ transform:none; }
            .cxSch-part.ring .cxSch-pill.on{ animation:none; }
          }
        `}</style>

        <div className="cxSch-hero">
          <div>
            <h3 className="cxSch-lead">
              Some of a child's hardest moments happen after school.
            </h3>
            <p>
              A cruel message in a group chat. A picture no child should see.
              These things reach children on their phones, at home, late at
              night. Many keep it to themselves, and carry it into your class
              the next morning. CensorX helps parents notice and step in
              early. Your school only has to share a code, and we keep the
              work small for your staff.
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
        title="Ready in a day, not a term"
        subtitle="Three simple steps."
      >
        <div className="cxSch-steps">
          {steps.map((s) => (
            <div key={s.t} className="cxSch-step">
              <b>{s.t}</b>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="What your school gets"
        subtitle="Four things, in plain words. Tap one to see it."
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
      </Section>

      <Section
        title="Why schools choose us"
        subtitle="Because you care about your students, in class and beyond it."
      >
        <div className="cxSch-why">
          {whyCards.map((w) => (
            <div key={w.t} className={`cxSch-wCard ${w.span}${w.dark ? " dark" : ""}`}>
              <span className="cxSch-wIcon" aria-hidden="true">
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
                  {w.icon}
                </svg>
              </span>
              <b>{w.t}</b>
              <p>{w.d}</p>
            </div>
          ))}
        </div>

        <div className="cxSch-pay" style={{ marginTop: 28 }}>
          <div>
            <h4>A plan that fits your school</h4>
            <p>
              We have more than one plan, priced per student. A new child
              joins during the year? Add them at any time. They share the
              same plan and the same end date. Every bill goes to your portal
              as a PDF.
            </p>
          </div>
          <div className="cxSch-actions">
            <NavLink to={`${ROUTES.CONTACT}?form=schools`} className="cxMoreBtn">
              Ask for a quote
              <span className="cxMoreArrow" aria-hidden="true">→</span>
            </NavLink>
          </div>
        </div>
      </Section>

      <Section
        title="Questions schools ask us"
        subtitle="Short and honest answers."
      >
        <div className="cxSch-faq">
          {faqs.map((f, i) => (
            <div
              key={f.q}
              className={`cxSch-faqItem${faqOpen === i ? " open" : ""}`}
            >
              <button
                type="button"
                className="cxSch-faqQ"
                onClick={() => setFaqOpen(faqOpen === i ? -1 : i)}
                aria-expanded={faqOpen === i}
              >
                {f.q}
                <span aria-hidden="true">+</span>
              </button>
              <div className={`cxCollapse${faqOpen === i ? " open" : ""}`}>
                <div className="cxCollapseInner">
                  <p className="cxSch-faqA">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cxSch-band">
          <div>
            <h4>Every child deserves to feel safe online.</h4>
            <p>
              Tell us about your school and we will do the setup with you.
              Already with us? Your portal is one click away.
            </p>
          </div>

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