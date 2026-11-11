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

const sections = [
  ["t1", "The Service"],
  ["t2", "Eligibility and authority"],
  ["t3", "Lawful use of monitoring"],
  ["t4", "Your account"],
  ["t5", "Permissions and uninstall protection"],
  ["t6", "Access, activation codes and subscriptions"],
  ["t7", "Detection is an aid, not a guarantee"],
  ["t8", "Acceptable use"],
  ["t9", "Intellectual property"],
  ["t10", "Privacy"],
  ["t11", "Third-party services"],
  ["t12", "Changes, suspension and termination"],
  ["t13", "Disclaimer"],
  ["t14", "Limitation of liability"],
  ["t15", "Indemnity"],
  ["t16", "Governing law and jurisdiction"],
  ["t17", "Changes to these Terms"],
  ["t18", "Contact"],
];

export default function Terms() {
  return (
    <div className="pp-wrap">
      <style>{css}</style>
      <article className="pp">
        <h1>Terms of Service</h1>
        <p className="pp-sub">
          Please read these terms carefully before using CensorX.
        </p>
        <span className="pp-meta">Effective date: 1 December 2026</span>

        <p style={{ marginTop: 24 }}>
          These Terms of Service (“Terms”) are an agreement between you and{" "}
          <strong>CensorX</strong>, operated by Tabish Shaikh, Thane, Maharashtra, India
          (“CensorX”, “we”, “us”). They govern your use of the CensorX Android
          application and the website censorx.in (together, the “Service”). By creating
          an account or using the Service, you accept these Terms. If you do not accept
          them, do not use the Service.
        </p>

        <div className="pp-box">
          <h2>In short</h2>
          <ul>
            <li>You must be 18 or over, and a parent or lawful guardian of the child.</li>
            <li>Monitor only devices you have the legal right to monitor.</li>
            <li>Never hide CensorX or its monitoring notification.</li>
            <li>Detection is an aid. It can miss things and is not an emergency service.</li>
            <li>Subscriptions are billed through Google Play and can be cancelled there.</li>
          </ul>
        </div>

        <nav className="pp-toc" aria-label="Contents">
          <h2>Contents</h2>
          <ol>
            {sections.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`}>{label}</a>
              </li>
            ))}
          </ol>
        </nav>

        <section id="t1">
          <h2>1. The Service</h2>
          <p>
            CensorX is a parental control and monitoring application. On a protected
            device it detects possible online harassment, blurs harmful images, applies
            short-video limits set by the parent, and reports alerts and usage summaries
            to the parent. Monitoring is always disclosed by a notification on the
            protected device.
          </p>
        </section>

        <section id="t2">
          <h2>2. Eligibility and authority</h2>
          <p>
            You must be at least 18 years old to create an account. You may switch on
            CensorX protection only on (a) a device used by a child of whom you are the
            parent or lawful guardian, or (b) your own device. You confirm that you have
            the legal authority to consent to monitoring of that device.
          </p>
        </section>

        <section id="t3">
          <h2>3. Lawful use of monitoring</h2>
          <p>
            You must not use CensorX to monitor any adult without that person’s
            knowledge and consent, or to monitor any person or device you have no legal
            right to monitor. You must not attempt to hide CensorX or its monitoring
            notification. Unlawful monitoring may be a criminal offence, and we may
            suspend or terminate accounts used for it and co-operate with the
            authorities.
          </p>
        </section>

        <section id="t4">
          <h2>4. Your account</h2>
          <p>
            You are responsible for the accuracy of the information you provide, for
            keeping your sign-in details secure, and for all activity under your account.
            Tell us promptly at <a href="mailto:team@censorx.in">team@censorx.in</a> if
            you suspect unauthorised access.
          </p>
        </section>

        <section id="t5">
          <h2>5. Permissions and uninstall protection</h2>
          <p>
            The Service works only if the permissions described in the{" "}
            <a href="/legal/privacy-policy">Privacy Policy</a> are granted on the protected device. You
            may withdraw any permission at any time in the device’s settings; the related
            protection will stop. Uninstall protection using Android Device Admin is
            optional and can be switched off at any time.
          </p>
        </section>

        <section id="t6">
          <h2>6. Access, activation codes and subscriptions</h2>
          <p>
            <strong>6.1 Activation codes.</strong> Access may be provided through an
            activation code issued by a School. Any fee for a code is agreed between you
            and the School, and payments and refunds for it are handled by the School. A
            code may be redeemed once and is not transferable.
          </p>
          <p>
            <strong>6.2 Subscriptions.</strong> Where we offer paid subscriptions in the
            app, they are sold and billed through Google Play. Prices are shown in the
            app before purchase. Subscriptions renew automatically until cancelled. You
            can cancel at any time in Google Play, and access continues until the end of
            the paid period. Refunds are handled under Google Play’s refund policy and
            applicable law.
          </p>
          <p>
            <strong>6.3</strong> We may change prices or plans for future billing periods
            and will give notice before a change applies to you.
          </p>
        </section>

        <section id="t7">
          <h2>7. Detection is an aid, not a guarantee</h2>
          <p>
            CensorX uses automated models. It may fail to detect harmful content or
            harassment, and it may flag content that is harmless. The Service supports a
            parent’s supervision and does not replace it. CensorX is not an emergency
            service. If a child is in danger, contact the police or the Childline number
            1098.
          </p>
        </section>

        <section id="t8">
          <h2>8. Acceptable use</h2>
          <p>You must not:</p>
          <ul className="pp-list">
            <li>use the Service for any unlawful purpose;</li>
            <li>
              attempt to bypass, disable or interfere with its security or protection
              features;
            </li>
            <li>
              reverse engineer, copy or modify the app except as the law permits;
            </li>
            <li>share, resell or misuse activation codes; or</li>
            <li>use the Service to harass, exploit or harm any person.</li>
          </ul>
        </section>

        <section id="t9">
          <h2>9. Intellectual property</h2>
          <p>
            The Service, including its software, models, design and content, belongs to
            CensorX and its licensors. We grant you a personal, non-exclusive,
            non-transferable, revocable licence to use the app for its intended purpose
            under these Terms.
          </p>
        </section>

        <section id="t10">
          <h2>10. Privacy</h2>
          <p>
            Our <a href="/legal/privacy-policy">Privacy Policy</a> explains how personal data is
            handled and forms part of these Terms.
          </p>
        </section>

        <section id="t11">
          <h2>11. Third-party services</h2>
          <p>
            The Service relies on third-party services, including Google Play and Google
            Firebase. Their own terms apply to your use of those services, and we are not
            responsible for them.
          </p>
        </section>

        <section id="t12">
          <h2>12. Changes, suspension and termination</h2>
          <p>
            We may update or discontinue features to improve the Service, maintain
            security or comply with law. We may suspend or terminate your access if you
            breach these Terms or create a risk to others. You may stop using the Service
            and delete your account at any time. Sections 9 and 13 to 16 continue to apply
            after termination.
          </p>
        </section>

        <section id="t13">
          <h2>13. Disclaimer</h2>
          <p>
            To the fullest extent permitted by law, the Service is provided “as is” and
            “as available”, without warranties of any kind, express or implied, including
            warranties of accuracy, fitness for a particular purpose and uninterrupted
            operation.
          </p>
        </section>

        <section id="t14">
          <h2>14. Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, CensorX is not liable for indirect,
            incidental, special or consequential loss, or for any harm arising from
            content that the Service did not detect or wrongly flagged. Our total
            liability arising from the Service is limited to the amount you paid us for it
            in the twelve months before the claim arose. Nothing in these Terms excludes
            liability that cannot be excluded under Indian law.
          </p>
        </section>

        <section id="t15">
          <h2>15. Indemnity</h2>
          <p>
            You agree to indemnify CensorX against claims and costs arising from your
            unlawful use of the Service or your breach of sections 2, 3 or 8.
          </p>
        </section>

        <section id="t16">
          <h2>16. Governing law and jurisdiction</h2>
          <p>
            These Terms are governed by the laws of India. The courts at Thane,
            Maharashtra have exclusive jurisdiction over any dispute arising from them.
          </p>
        </section>

        <section id="t17">
          <h2>17. Changes to these Terms</h2>
          <p>
            We may update these Terms. We will change the effective date above and, for
            significant changes, notify you in the app or by email. Continued use after a
            change takes effect means you accept the updated Terms.
          </p>
        </section>

        <section id="t18">
          <h2>18. Contact</h2>
          <ul className="pp-list">
            <li>
              Email: <a href="mailto:team@censorx.in">team@censorx.in</a>
            </li>
            <li>
              Grievance Officer: Mr. Mohammad Ashar,{" "}
              <a href="mailto:team@censorx.in">team@censorx.in</a>
            </li>
          </ul>
        </section>
      </article>
    </div>
  );
}