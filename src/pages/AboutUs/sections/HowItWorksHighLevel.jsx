import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../../routes/routes";

const css = `
  .cxHw{
    background:#ffffff;
    color:#111827;
    border-radius:24px;
    padding:clamp(22px, 4vw, 40px);
    box-shadow:0 18px 50px rgba(0,0,0,0.30);
    border-left:6px solid #0f6b65;
  }
  .cxHw-k{
    font-size:12px;
    font-weight:800;
    letter-spacing:0.12em;
    text-transform:uppercase;
    color:#0f6b65;
    margin:0 0 10px;
  }
  .cxHw h2{
    margin:0 0 6px;
    font-size:clamp(24px, 3.4vw, 34px);
    line-height:1.15;
    font-weight:900;
    color:#0b1220;
    letter-spacing:-0.01em;
  }
  .cxHw h3{
    margin:0 0 22px;
    font-size:clamp(16px, 2.2vw, 19px);
    line-height:1.4;
    font-weight:700;
    color:#0f6b65;
  }
  .cxHw p{
    margin:0 0 18px;
    font-size:clamp(14.5px, 1.8vw, 16px);
    line-height:1.85;
    color:#374151;
    max-width:820px;
  }
  .cxHw p:last-of-type{ margin-bottom:0; }
  .cxHw-n{
    display:inline-block;
    min-width:34px;
    font-weight:900;
    color:#0f6b65;
    letter-spacing:0.04em;
  }
  .cxHw p b{ color:#0b1220; }
  .cxHw-more{
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
  .cxHw-more:hover{ color:#0b4f4b; }
  .cxHw-cta{
    margin-top:26px;
    padding-top:22px;
    border-top:1px solid rgba(17,24,39,0.10);
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:14px;
    flex-wrap:wrap;
  }
  .cxHw-cta p{ margin:0; max-width:520px; }
  .cxHw-btn{
    display:inline-flex;
    align-items:center;
    justify-content:center;
    padding:12px 22px;
    border-radius:999px;
    background:#111827;
    color:#ffffff;
    font-weight:800;
    font-size:14px;
    text-decoration:none;
    box-shadow:0 10px 24px rgba(0,0,0,0.25);
    transition:transform .15s ease, background .15s ease;
  }
  .cxHw-btn:hover{
    transform:translateY(-2px);
    background:#0f6b65;
  }
`;

export default function HowItWorksHighLevel() {
  const [open, setOpen] = useState(false);

  return (
    <section className="container section">
      <style>{css}</style>
      <div className="cxHw">
        
        <h2>How CensorX works?</h2>

        <p>
          <span className="cxHw-n">01</span>
          <b>It stays on while the phone is used.</b> Once a parent sets it up, a
          small notice on the child's phone shows that protection is on. Nothing
          is hidden, and no one has to remember to open an app.
        </p>

        <p>
          <span className="cxHw-n">02</span>
          <b>It watches for harm, not for everything.</b> CensorX looks at what
          appears on screen and in message notifications for signs of harassment,
          bullying, hate and explicit or disturbing images. It is looking for
          danger, not for a child's secrets.
        </p>

        <p>
          <span className="cxHw-n">03</span>
          <b>It judges how serious the moment is.</b> A single rude word is not an
          emergency. A pattern of cruelty over an evening is. CensorX weighs
          recent messages together, so parents hear about real concerns instead of
          every stray comment.
        </p>

        <div className={`cxCollapse${open ? " open" : ""}`} aria-hidden={!open}>
          <div className="cxCollapseInner">
            <p>
              <span className="cxHw-n">04</span>
              <b>It responds right then.</b> A harmful image is blurred with a
              clear "leave app" option. Short-video apps can be limited at the
              times you set. A possible concern is sent to the parent as a short
              excerpt, with a gentle note to review it — never an alarm.
            </p>

            <p>
              <span className="cxHw-n">05</span>
              <b>It keeps what it sees on the phone.</b> Screen text and images are
              checked on the device and are not uploaded. Parents receive alerts
              and a weekly summary — screens blurred, concerns raised, device
              usage, safe-hours kept — not a transcript of their child's life.
            </p>

            <p>
              That is the whole idea. Protection at the moment it matters, honesty
              with the child, and a parent who is informed without becoming a
              spy.
            </p>
          </div>
        </div>

        <button
          type="button"
          className="cxHw-more"
          onClick={() => setOpen((s) => !s)}
        >
          {open ? "Show less" : "Read more"}
        </button>

        <div className="cxHw-cta">
          <p>Have a question about how this works for your family or your school?</p>
          <NavLink to={ROUTES.CONTACT} className="cxHw-btn">
            Contact us
          </NavLink>
        </div>
      </div>
    </section>
  );
}