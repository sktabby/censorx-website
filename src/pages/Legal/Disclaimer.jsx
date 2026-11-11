import React from "react";

const css = `
html{scroll-behavior:smooth}
.pp-wrap{background:#fff;color:#1f2937;padding:56px 20px 80px;font-family:Inter,system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif;line-height:1.7;font-size:16px}
.pp{max-width:860px;margin:0 auto}
.pp h1{font-size:38px;line-height:1.2;margin:0 0 8px;color:#0f172a;font-weight:700;letter-spacing:-0.5px}
.pp .pp-sub{color:#475569;font-size:17px;margin:0 0 18px}
.pp section{margin:0 0 8px}
.pp section h2{font-size:22px;color:#0f172a;margin:36px 0 12px;padding-bottom:8px;border-bottom:1px solid #e2e8f0;font-weight:700}
.pp p{margin:0 0 14px;color:#334155}
.pp ul.pp-list{margin:0 0 14px;padding-left:22px;color:#334155}
.pp ul.pp-list li{margin:7px 0}
.pp strong{color:#0f172a}
.pp a{color:#1d4ed8}
@media(max-width:640px){.pp h1{font-size:30px}.pp-wrap{padding:36px 16px 60px}}
`;

export default function Disclaimer() {
  return (
    <div className="pp-wrap">
      <style>{css}</style>
      <article className="pp">
        <h1>Disclaimer</h1>
        <p className="pp-sub">
          Important information about the use and limitations of CensorX.
        </p>

        <section>
          <h2>Limitations of automated detection</h2>
          <p>
            CensorX is designed to help improve online safety by detecting potentially
            harmful content and providing users with additional protection tools. While
            we strive to make our technology reliable and effective, users should
            understand that automated safety systems have certain limitations.
          </p>
          <ul className="pp-list">
            <li>
              <strong>AI-based detection is probabilistic:</strong> Content detection
              models may occasionally produce false positives (flagging safe content) or
              false negatives (missing harmful content).
            </li>
            <li>
              <strong>System performance may vary:</strong> Results can depend on factors
              such as device capability, operating system behavior, application
              permissions, and network conditions.
            </li>
            <li>
              <strong>Not a replacement for human judgment:</strong> CensorX is a
              supportive safety tool and should not be considered a complete substitute
              for parental guidance, moderation policies, or user discretion.
            </li>
            <li>
              <strong>Not an emergency service:</strong> If a child is in danger, contact
              the police or the Childline number 1098.
            </li>
            <li>
              <strong>Feature availability may change:</strong> Certain features may
              evolve over time as the platform improves, and functionality may differ
              across devices or environments.
            </li>
          </ul>
          <p>
            By using CensorX, you acknowledge that the platform is intended to enhance
            digital safety but cannot guarantee the detection or prevention of every
            instance of harmful or inappropriate content.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            If you encounter issues, unexpected behavior, or have suggestions for
            improvement, email us at{" "}
            <a href="mailto:team@censorx.in">team@censorx.in</a>.
          </p>
          <p>
            See our <a href="/legal/privacy-policy">Privacy Policy</a> and{" "}
            <a href="/legal/terms">Terms of Service</a>.
          </p>
        </section>
      </article>
    </div>
  );
}