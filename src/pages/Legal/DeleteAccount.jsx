import React from "react";

const css = `
html{scroll-behavior:smooth}
.da-wrap{background:#fff;color:#1f2937;padding:28px 20px 80px;font-family:var(--font);line-height:1.7;font-size:15px}
.da{max-width:860px;margin:0 auto}
.da h1{font-size:33.5px;line-height:1.2;margin:0 0 8px;color:#0f172a;font-weight:700;letter-spacing:-0.5px}
.da h2{font-size:19.5px;color:#0f172a;margin:36px 0 12px;padding-bottom:8px;border-bottom:1px solid #e2e8f0;font-weight:700;scroll-margin-top:90px}
.da h3{font-size:16px;color:#0f172a;margin:20px 0 8px;font-weight:700}
.da p{margin:0 0 14px;color:#334155}
.da ul{margin:0 0 14px;padding-left:22px;color:#334155}
.da li{margin:7px 0}
.da strong,.da b{color:#0f172a}
.da a{color:#1d4ed8}
.da .da-box{background:#f8fafc;border:1px solid #e2e8f0;border-left:4px solid #32b2a9;border-radius:8px;padding:18px 22px;margin:0 0 28px;color:#334155}
@media(max-width:640px){.da h1{font-size:26.5px}.da-wrap{padding:20px 16px 60px}}
`;

export default function DeleteAccount() {
  return (
    <div>
      <style>{css}</style>
      <div className="da-wrap">
        <div className="da">
          <h1>Delete your CensorX account</h1>

          <div className="da-box">
            CensorX, published on Google Play under the developer name{" "}
            <b>CensorX</b> (operated by Mohammad Tabish Ashrafi Raees Ahmed
            Shaikh), lets you delete your account and its data at any time.
            You do not need the app installed to request deletion.
          </div>

          <h2>Delete in the app</h2>
          <ul>
            <li>
              <b>Parent:</b> open CensorX, go to <b>Account &rsaquo; Delete
              Account</b>, enter your parent PIN, and confirm{" "}
              <b>Delete Account Permanently</b>.
            </li>
            <li>
              <b>Child device:</b> child devices have no separate account. The
              Parent removes a device under <b>Devices</b>, or deletes the
              parent account, which removes every linked child device and its
              data.
            </li>
          </ul>

          <h2>Delete without the app</h2>
          <p>
            Email <a href="mailto:team@censorx.in">team@censorx.in</a> from the
            email address on your account with the subject{" "}
            <b>"Delete my account"</b>. We will confirm the account is yours
            and complete the deletion within <b>15 days</b>.
          </p>

          <h2>What is deleted</h2>
          <p>
            Your profile (name, email, and any optional details you added),
            linked child devices, safety alerts, usage summaries, weekly
            reports, notification tokens and your sign-in.
          </p>

          <h2>What is kept</h2>
          <ul>
            <li>
              If you activated through a school code: the school's seat record,
              with <b>all personal details removed</b> — no name, student ID,
              email or device information remains on it.
            </li>
            <li>
              Technical server logs, which delete automatically after about 30
              days.
            </li>
            <li>
              Payment records held by Google Play under Google's own policies.
            </li>
          </ul>

          <p>
            Full details are in our{" "}
            <a href="/privacy">Privacy Policy</a>. Questions:{" "}
            <a href="mailto:team@censorx.in">team@censorx.in</a>.
          </p>
        </div>
      </div>
    </div>
  );
}