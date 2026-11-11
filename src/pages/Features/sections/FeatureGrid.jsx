import React, { useState } from "react";
import Section from "../../../components/ui/Section";

import feature1 from "../../../assets/feature1.jpg";
import feature2 from "../../../assets/feature2.jpg";
import feature3 from "../../../assets/feature3.jpg";
import feature4 from "../../../assets/feature4.jpg";

const feats = [
  {
    img: feature1,
    alt: "Online harassment detection",
    tag: "Chats & notifications",
    t: "Online Harassment Detection",
    short:
      "Spots bullying, abusive language and threats before they hurt your child for weeks.",
    long: [
      "CensorX checks the chat on your child’s screen and the message notifications they receive. It reads a few recent messages together instead of one at a time, so it understands the conversation, not just single words.",
      "It works with English and Hinglish, and the checking happens on the phone itself.",
      "A serious threat alerts you right away. Milder messages that keep adding up over about half an hour can raise one pattern alert, so you hear about a worrying trend and not about every small thing.",
      "Each alert uses gentle wording such as “Possible concern” or “Please review”. It shows a short excerpt and the name of the app, so you can start a calm conversation with your child.",
      "No detection is perfect. CensorX can miss things, and it can sometimes flag a harmless message, such as a joke between friends or a bad day being vented. It supports your care. It does not replace it.",
    ],
    chips: [],
  },
  {
    img: feature2,
    alt: "Harmful visual content blocking",
    tag: "Images",
    t: "Harmful Visual Content Blocking",
    short:
      "Covers unsafe images with a blur before your child has to see them.",
    long: [
      "With screen-capture permission, CensorX checks what appears on your child’s screen using a model that runs on the phone. When it finds an unsafe image, it blurs the screen straight away.",
      "To avoid flickering on and off, it confirms across a couple of checks before it blurs, and again before it clears the blur.",
      "While the blur is showing, your child sees a clear CensorX cover with a button to leave the app and go back to the home screen.",
      "Images are checked on the phone only. Screenshots are never saved or uploaded, and nothing from your child’s screen is sent to us.",
      "You see how many screens were censored in your reports. Like any automatic filter, it can miss some content and can sometimes blur something that is safe.",
    ],
    chips: [],
  },
  {
    img: feature3,
    alt: "Short-video and reels blocker",
    tag: "Screen time",
    t: "Short-Video / Reels Blocker",
    short:
      "Block short-video feeds, or allow a limited time, so scrolling does not take over their day.",
    long: [
      "Short videos are designed so that there is always one more to watch. This feature gives you control without a daily argument.",
      "You choose one of two ways: block short-video feeds completely, or allow them for a limited time each day.",
      "CensorX recognises when a full-screen short-video player is open. When the block or the time limit applies, your child sees a full-screen message and closes it themselves.",
      "It is built for short-video feeds. Longer videos are not limited.",
      "Used with safe hours, it helps protect sleep, homework and time for friends and family.",
    ],
    chips: [],
  },
  {
    img: feature4,
    alt: "Weekly reports",
    tag: "For parents",
    t: "Weekly Reports",
    short: "A clear weekly summary of how your child’s week went online.",
    long: [
      "Instead of checking the app every day, get one clear summary of the week. It runs over a rolling week that starts from the day you subscribed.",
      "Each report shows four things: how many screens were censored, how many possible concerns came up, how much your child used their device, and how well safe hours were kept.",
      "If you have more than one child, one report covers every linked child, with a separate card for each.",
      "Reports show counts and summaries. They do not include the full content of your child’s messages.",
      "Use it as a starting point for a calm talk about the week, such as what went well, what felt hard, and what to change together.",
    ],
    chips: [
     
    ],
  },
];

export default function FeatureGrid() {
  return (
    <Section
      title="Features & capabilities"
      subtitle="Four ways CensorX helps you protect your child, with privacy built in."
    >
      <style>{`
        .cxF-list{
          display:flex;
          flex-direction:column;
          gap:22px;
        }

        .cxF-card{
          display:flex;
          flex-direction:row;
          align-items:stretch;
          background:#ffffff;
          color:#111827;
          border-radius:20px;
          overflow:hidden;
          border-top:5px solid #32b2a9;
          box-shadow:0 14px 40px rgba(0,0,0,0.25);
        }
        .cxF-card:nth-child(even){
          flex-direction:row-reverse;
        }

        .cxF-media{
          flex:0 0 42%;
          position:relative;
          min-height:280px;
          background:#e5e7eb;
        }
        .cxF-media img{
          position:absolute;
          inset:0;
          width:100%;
          height:100%;
          object-fit:cover;
          object-position:center;
          display:block;
        }

        .cxF-body{
          flex:1;
          padding:28px 28px 24px;
          display:flex;
          flex-direction:column;
          justify-content:center;
        }

        .cxF-top{
          display:flex;
          align-items:center;
          justify-content:space-between;
          margin-bottom:12px;
        }
        .cxF-tag{
          font-size:11px;
          font-weight:800;
          letter-spacing:0.1em;
          text-transform:uppercase;
          color:#1f8a82;
          background:rgba(50,178,169,0.12);
          padding:5px 10px;
          border-radius:999px;
        }
        .cxF-num{
          font-size:34px;
          font-weight:900;
          line-height:1;
          color:rgba(17,24,39,0.12);
        }

        .cxF-title{
          font-size:22px;
          font-weight:900;
          line-height:1.25;
          color:#0b1220;
          margin:0 0 10px;
        }
        .cxF-text{
          font-size:15px;
          line-height:1.7;
          color:#374151;
          margin:0;
        }
        .cxF-long{
          margin-top:10px;
          color:#1f2937;
        }
        /* smooth expand / collapse */
        .cxF-collapse{
          display:grid;
          grid-template-rows:0fr;
          opacity:0;
          transition:grid-template-rows 0.4s ease, opacity 0.3s ease;
        }
        .cxF-collapse.open{
          grid-template-rows:1fr;
          opacity:1;
        }
        .cxF-collapseInner{ overflow:hidden; }

        .cxF-chips{
          display:flex;
          flex-wrap:wrap;
          gap:8px;
          margin-top:16px;
        }
        .cxF-chip{
          font-size:12px;
          font-weight:700;
          color:#111827;
          background:#f3f4f6;
          border:1px solid #e5e7eb;
          padding:5px 10px;
          border-radius:8px;
        }

        .cxF-btn{
          margin-top:16px;
          align-self:flex-start;
          background:none;
          border:none;
          padding:0;
          color:#1f8a82;
          font-weight:800;
          font-size:14px;
          cursor:pointer;
        }
        .cxF-btn:hover{ text-decoration:underline; }

        /* MOBILE + TABLET: image on top, text below */
        @media (max-width: 800px){
          .cxF-card,
          .cxF-card:nth-child(even){
            flex-direction:column;
          }
          .cxF-media{
            flex:none;
            width:100%;
            min-height:0;
            aspect-ratio:16 / 10;
          }
          .cxF-body{
            padding:20px 18px 20px;
          }
          .cxF-title{ font-size:19px; }
          .cxF-text{ font-size:14.5px; }
          .cxF-num{ font-size:28px; }
        }
      `}</style>

      <div className="cxF-list">
        {feats.map((f, i) => (
          <FeatureCard key={f.t} num={String(i + 1).padStart(2, "0")} {...f} />
        ))}
      </div>
    </Section>
  );
}

function FeatureCard({ num, img, alt, tag, t, short, long, chips }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="cxF-card">
      <div className="cxF-media">
        <img src={img} alt={alt} loading="lazy" />
      </div>

      <div className="cxF-body">
        <div className="cxF-top">
          <span className="cxF-tag">{tag}</span>
          <span className="cxF-num" aria-hidden="true">
            {num}
          </span>
        </div>

        <h3 className="cxF-title">{t}</h3>

        <p className="cxF-text">{short}</p>

        <div className={`cxF-collapse${open ? " open" : ""}`} aria-hidden={!open}>
          <div className="cxF-collapseInner">
            {long.map((p) => (
              <p key={p} className="cxF-text cxF-long">
                {p}
              </p>
            ))}
          </div>
        </div>

        {chips.length > 0 && (
          <div className="cxF-chips">
            {chips.map((c) => (
              <span key={c} className="cxF-chip">
                {c}
              </span>
            ))}
          </div>
        )}

        <button
          type="button"
          className="cxF-btn"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Show less" : "Read more →"}
        </button>
      </div>
    </div>
  );
}