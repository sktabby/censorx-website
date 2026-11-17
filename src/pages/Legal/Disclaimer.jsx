import React from "react";

const css = `
html{scroll-behavior:smooth}
.pp-wrap{background:#fff;color:#1f2937;padding:28px 20px 80px;font-family:var(--font);line-height:1.7;font-size:15px}
.pp{max-width:860px;margin:0 auto}
.pp h1{font-size:33.5px;line-height:1.2;margin:0 0 8px;color:#0f172a;font-weight:700;letter-spacing:-0.5px}
.pp .pp-sub{color:#475569;font-size:16px;margin:0 0 18px}
.pp section{margin:0 0 8px}
.pp section h2{font-size:19.5px;color:#0f172a;margin:36px 0 12px;padding-bottom:8px;border-bottom:1px solid #e2e8f0;font-weight:700}
.pp p{margin:0 0 14px;color:#334155}
.pp ul.pp-list{margin:0 0 14px;padding-left:22px;color:#334155}
.pp ul.pp-list li{margin:7px 0}
.pp strong{color:#0f172a}
.pp a{color:#1d4ed8}
@media(max-width:640px){.pp h1{font-size:26.5px}.pp-wrap{padding:20px 16px 60px}}
`;

export default function Disclaimer() {
  return (
    <div className="pp-wrap">
      <style>{css}</style>
      <article className="pp">
        <h1>Disclaimer</h1>
        <p className="pp-sub">Effective date: 1 December 2026</p>

        <p>
          <strong>A safety aid, not a guarantee.</strong> CensorX uses automated,
          on-device analysis to detect harmful content and possible harassment. No
          such system is perfect. CensorX will sometimes miss harmful content, and
          sometimes flag content that is harmless. Alerts are worded as possible
          concerns for a parent to review — they are not proof that harassment or
          harm has occurred, and they are not an accusation against any person.
        </p>

        <p>
          <strong>Not a substitute for parenting.</strong> CensorX supports a
          parent’s care; it does not replace it. No app can replace conversation,
          attention and trust between a parent and a child. Please do not treat
          CensorX as your only safety measure.
        </p>

        <p>
          <strong>Not an emergency service.</strong> CensorX does not contact
          police, schools or any authority, and it cannot respond to emergencies.
          If a child is in immediate danger, contact your local emergency
          services. In India, children can also call Childline on 1098, free, at
          any time.
        </p>

        <p>
          <strong>Not professional advice.</strong> Nothing in the app or on this
          website is legal, medical or psychological advice. If you are concerned
          about a child’s wellbeing, please speak to a qualified professional.
        </p>

        <p>
          <strong>Third-party apps and platforms.</strong> CensorX works alongside
          the apps your child uses but is not affiliated with, endorsed by or
          connected to any of them. Those platforms change frequently, and changes
          to them, or to Android itself, can affect what CensorX is able to detect.
        </p>

        <p>
          <strong>Lawful use is your responsibility.</strong> CensorX is built for
          parents and legal guardians protecting their own children, with a
          visible notice on the child’s phone. Using monitoring software on any
          person you do not have legal authority over may be unlawful. You are
          responsible for using CensorX lawfully.
        </p>

        <p>
          <strong>Website information.</strong> The information on censorx.in is
          provided in good faith for general understanding of the product. We work
          to keep it accurate, but features and availability may change as the
          product develops.
        </p>

        <p>
          This disclaimer should be read together with our{" "}
          <a href="/terms">Terms of Service</a> and{" "}
          <a href="/privacy">Privacy Policy</a>. Questions:{" "}
          <a href="mailto:team@censorx.in">team@censorx.in</a>.
        </p>
      </article>
    </div>
  );
}