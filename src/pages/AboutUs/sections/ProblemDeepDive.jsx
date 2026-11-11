import React, { useState } from "react";
import aboutImg from "../../../assets/aboutusimage.jpg";

const css = `
  .cxAb{
    background:#ffffff;
    color:#111827;
    border-radius:24px;
    padding:clamp(22px, 4vw, 40px);
    box-shadow:0 18px 50px rgba(0,0,0,0.30);
    border-left:6px solid #0f6b65;
    display:grid;
    grid-template-columns:minmax(0, 1.3fr) minmax(240px, 0.7fr);
    gap:clamp(22px, 4vw, 44px);
    align-items:start;
  }
  .cxAb-k{
    font-size:12px;
    font-weight:800;
    letter-spacing:0.12em;
    text-transform:uppercase;
    color:#0f6b65;
    margin:0 0 10px;
  }
  .cxAb h2{
    margin:0 0 6px;
    font-size:clamp(24px, 3.4vw, 34px);
    line-height:1.15;
    font-weight:900;
    color:#0b1220;
    letter-spacing:-0.01em;
  }
  .cxAb h3{
    margin:0 0 18px;
    font-size:clamp(16px, 2.2vw, 19px);
    line-height:1.4;
    font-weight:700;
    color:#0f6b65;
  }
  .cxAb p{
    margin:0 0 16px;
    font-size:clamp(14.5px, 1.8vw, 16px);
    line-height:1.85;
    color:#374151;
    max-width:820px;
  }
  .cxAb p:last-of-type{ margin-bottom:0; }
  .cxAb p b{ color:#0b1220; }
  .cxAb-more{
    margin-top:18px;
    background:none;
    border:none;
    padding:0;
    font:inherit;
    font-size:14px;
    font-weight:800;
    color:#0f6b65;
    cursor:pointer;
    text-decoration:underline;
    text-underline-offset:4px;
  }
  .cxAb-more:hover{ color:#0b4f4b; }

  .cxAb-media{
    margin:0;
    position:sticky;
    top:90px;
  }
  .cxAb-media img{
    display:block;
    width:100%;
    height:auto;
    aspect-ratio:3 / 4;
    object-fit:cover;
    border-radius:20px;
    box-shadow:0 20px 50px rgba(0,0,0,0.30);
  }
  @media (max-width: 900px){
    .cxAb{ grid-template-columns:1fr; }
    .cxAb-media{
      position:static;
      order:-1;
      max-width:340px;
      margin:0 auto;
      width:100%;
    }
  }
`;

export default function ProblemDeepDive() {
  const [open, setOpen] = useState(false);

  return (
    <section className="container section">
      <style>{css}</style>
      <div style={{ marginBottom: 12 }}>
        <h2 className="h2">About us</h2>
        <p className="p">Why CensorX exists, and how it works.</p>
      </div>
      <div className="cxAb">
        <div>
        <h2>Why we built CensorX</h2>
        <h3>Because the internet reached our children faster than our ability to protect them.</h3>

        <p>
          Every parent knows the feeling. You hand over a phone for homework, for a
          game, for a video call with a cousin — and somewhere in those hours, a
          world opens that you cannot see. A stranger says hello in a game lobby. A
          reel appears that no child should watch. A group chat turns cruel at
          midnight, and your child reads every word alone.
        </p>

        <p>
          <b>The harm is not rare, and it is not slow.</b> It arrives in seconds,
          through the same apps that bring joy and friendship. By the time a parent
          notices a change in mood or a quieter dinner table, the damage has often
          already been done.
        </p>

        <div className={`cxCollapse${open ? " open" : ""}`} aria-hidden={!open}>
          <div className="cxCollapseInner">
            <p>
              We started CensorX because the tools we found did not fit real
              families. Some block so much that a child feels punished and finds a
              way around them. Others only react after a report, long after the
              moment that mattered. Most cannot read the way our children actually
              talk — the slang, the Hinglish, the memes, the screenshots. And almost
              none of them look at a harmful image before a child does.
            </p>

            <p>
              <b>We wanted something different.</b> Protection that works in the
              moment, right on the phone. A child who knows it is there and
              understands why. A parent who hears about the things that matter,
              without having to read every message their child sends. Not control
              for its own sake — care, done with respect.
            </p>

            <p>
              That is the problem CensorX exists to solve. Not to keep children off
              the internet, but to let them grow up on it with someone watching the
              door.
            </p>
          </div>
        </div>

        <button
          type="button"
          className="cxAb-more"
          onClick={() => setOpen((s) => !s)}
        >
          {open ? "Show less" : "Read more"}
        </button>
        </div>

        <figure className="cxAb-media">
          <img src={aboutImg} alt="CensorX — about us" />
        </figure>
      </div>
    </section>
  );
}