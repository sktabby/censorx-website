import React from "react";

const css = `
/* smooth scroll when clicking contents links */
html{scroll-behavior:smooth}
.pp-wrap{background:#fff;color:#1f2937;padding:56px 20px 80px;font-family:Inter,system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif;line-height:1.7;font-size:16px}
.pp{max-width:860px;margin:0 auto}
.pp h1{font-size:38px;line-height:1.2;margin:0 0 8px;color:#0f172a;font-weight:700;letter-spacing:-0.5px}
.pp .pp-sub{color:#475569;font-size:17px;margin:0 0 18px}
.pp .pp-meta{display:inline-block;background:#f1f5f9;color:#334155;border:1px solid #e2e8f0;border-radius:999px;padding:6px 14px;font-size:14px;font-weight:600}
.pp .pp-box{background:#f8fafc;border:1px solid #e2e8f0;border-left:4px solid #32b2a9;border-radius:8px;padding:18px 22px;margin:28px 0}
.pp .pp-box h2{border:0;margin:0 0 8px;padding:0;font-size:17px;color:#0f172a}
.pp .pp-box ul{margin:0;padding-left:20px}
.pp .pp-box li{margin:4px 0}
.pp .pp-toc{background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:18px 22px;margin:0 0 36px}
.pp .pp-toc h2{border:0;margin:0 0 10px;padding:0;font-size:15px;text-transform:uppercase;letter-spacing:.06em;color:#64748b}
.pp .pp-toc ol{margin:0;padding-left:20px;columns:2;column-gap:32px}
.pp .pp-toc li{margin:3px 0;break-inside:avoid}
.pp .pp-toc a{color:#1d4ed8;text-decoration:none}
.pp .pp-toc a:hover{text-decoration:underline}
.pp section{margin:0 0 8px;scroll-margin-top:90px}
.pp section h2{font-size:22px;color:#0f172a;margin:36px 0 12px;padding-bottom:8px;border-bottom:1px solid #e2e8f0;font-weight:700}
.pp p{margin:0 0 14px;color:#334155}
.pp ul.pp-list{margin:0 0 14px;padding-left:22px;color:#334155}
.pp ul.pp-list li{margin:7px 0}
.pp strong{color:#0f172a}
.pp a{color:#1d4ed8}
.pp mark{background:#fef08a;color:#713f12;padding:1px 4px;border-radius:3px}
@media(max-width:640px){.pp h1{font-size:30px}.pp .pp-toc ol{columns:1}.pp-wrap{padding:36px 16px 60px}}
`;

export default function DeleteAccount() {
  return (
    <div className="pp-wrap">
      <style>{css}</style>
      <article className="pp">
        <h1>Delete your CensorX account</h1>

        <p>
          CensorX, published on Google Play by{" "}
          <mark>[CONFIRM: developer name exactly as shown on Google Play]</mark>, lets you
          delete your account and its data at any time.
        </p>

        <section id="in-the-app">
          <h2>In the app</h2>
          <ul className="pp-list">
            <li>Parent: open Account, then Delete Account, then confirm.</li>
            <li>
              Child device: a child's device has no separate account. The Parent removes
              the device under Devices, or deletes the Parent account, which removes every
              linked device and its data.
            </li>
          </ul>
        </section>

        <section id="without-the-app">
          <h2>Without the app</h2>
          <p>
            Email <a href="mailto:team@censorx.in">team@censorx.in</a> from the email
            address or phone number registered on the account, with the subject "Delete my
            account". We will confirm that the account is yours and delete it within 15
            days.
          </p>
        </section>

        <section id="what-is-deleted">
          <h2>What is deleted</h2>
          <p>
            Your profile (name, email address, phone number), linked devices and sessions,
            the child's or student's name, alerts and message excerpts, usage summaries,
            reports and push-notification tokens.
          </p>
        </section>

        <section id="what-is-kept">
          <h2>What is kept</h2>
          <p>
            <mark>
              [CONFIRM: state exactly what is kept after deletion and for how long, for
              example "Nothing" or "Encrypted backups, which are overwritten within N
              days".]
            </mark>
          </p>
        </section>

        <p>
          To delete only some data without deleting your account, remove the relevant
          device under Devices, or email <a href="mailto:team@censorx.in">team@censorx.in</a>.
        </p>
      </article>
    </div>
  );
}
