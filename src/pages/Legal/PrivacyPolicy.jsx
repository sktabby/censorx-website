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
  ["s1", "Definitions"],
  ["s2", "Personal data we collect"],
  ["s3", "How we use personal data"],
  ["s4", "Device permissions"],
  ["s5", "Children’s data and parental consent"],
  ["s6", "Who we share personal data with"],
  ["s7", "Storage and transfer"],
  ["s8", "Retention"],
  ["s9", "Your rights and choices"],
  ["s10", "Security"],
  ["s11", "Changes to this Policy"],
  ["s12", "Contact and Grievance Officer"],
];

export default function PrivacyPolicy() {
  return (
    <div className="pp-wrap">
      <style>{css}</style>
      <article className="pp">
        <h1>Privacy Policy</h1>
        <p className="pp-sub">
          How CensorX collects, uses, shares and protects personal data.
        </p>
        <span className="pp-meta">Effective date: 1 December 2026</span>

        <p style={{ marginTop: 24 }}>
          This Privacy Policy explains how <strong>CensorX</strong> (“CensorX”, “we”,
          “us”) collects, uses, shares and protects personal data when you use the
          CensorX Android application and the website censorx.in (together, the
          “Service”). CensorX is operated by Tabish Shaikh, Thane, Maharashtra, India.
        </p>
        <p>
          CensorX is a parental control and monitoring application. It is installed and
          set up by a parent or lawful guardian, and it shows a notification on the
          protected device whenever monitoring is on. It has no hidden or stealth mode.
        </p>

        <div className="pp-box">
          <h2>In short</h2>
          <ul>
            <li>Detection of harassment and harmful images runs on the child’s phone.</li>
            <li>
              Only short excerpts of flagged incidents, usage summaries and protection
              status are sent to our servers and shown to the parent.
            </li>
            <li>Screen images are never saved or uploaded.</li>
            <li>We do not sell personal data, show ads, or collect the advertising ID.</li>
            <li>You can delete your account and data at any time.</li>
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

        <section id="s1">
          <h2>1. Definitions</h2>
          <ul className="pp-list">
            <li>
              <strong>“Parent”</strong> means an adult aged 18 or over who creates a
              CensorX account and is the parent or lawful guardian of the child whose
              device is protected.
            </li>
            <li>
              <strong>“Protected Device”</strong> means an Android device on which
              CensorX protection is switched on. This is normally a child’s phone linked
              to the Parent’s account. It may also be the Parent’s own phone, when a
              child uses that phone.
            </li>
            <li>
              <strong>“School”</strong> means an educational institution that distributes
              CensorX activation codes to parents.
            </li>
          </ul>
        </section>

        <section id="s2">
          <h2>2. Personal data we collect</h2>
          <p>
            <strong>2.1 Account data (Parent).</strong> Phone number, when you sign in
            with a one-time password; name; email address; your password in protected
            form, when you sign in with email; and basic Google account details (name,
            email address, account identifier), when you use Google Sign-In.{" "}
            <mark>
              [CONFIRM: whether gender and date of birth are still collected. If yes add:
              “Gender and date of birth, if you choose to provide them.”]
            </mark>
          </p>
          <p>
            <strong>2.2 Child and linking data.</strong> The child’s or student’s name as
            entered by the Parent, the activation code redeemed, and the link between the
            Parent’s account and each Protected Device.
          </p>
          <p>
            <strong>2.3 Device data.</strong> A device identifier used to link and secure
            devices, the device model and Android version, a push-notification token, and
            an app installation identifier.
          </p>
          <p>
            <strong>2.4 Protection data from a Protected Device.</strong> With the
            permissions described in section 4, CensorX reads text shown on the screen,
            text typed on the device and the content of incoming notifications, and it
            examines images shown on the screen. This analysis is performed on the device
            itself. CensorX transmits data to our servers only as follows:
          </p>
          <ul className="pp-list">
            <li>
              <strong>Flagged incidents.</strong> When the on-device model flags possible
              harassment, bullying or a threat, we receive a short excerpt of the flagged
              text, the name of the app in which it appeared, the date and time, and a
              severity level. Text that is not flagged is not transmitted.
            </li>
            <li>
              <strong>Usage data.</strong> Daily usage time for each app, the number of
              times a short-video limit was applied, and whether protection is currently
              on.
            </li>
            <li>
              <strong>Screen images</strong> are analysed on the device only. They are
              never saved to our servers or transmitted.
            </li>
          </ul>
          <p>
            <strong>2.5 Analytics data.</strong> On devices signed in as a Parent, we use
            Google Analytics for Firebase to collect app-interaction events (such as
            screens opened and features used) and general device information. Analytics
            collection is switched off on any device linked as a child’s device. We do
            not collect the advertising ID, and CensorX does not display advertisements.
          </p>
          <p>
            <strong>2.6 Support and website data.</strong> Information you send us by
            email or through a form on censorx.in, such as your name, contact details and
            message.
          </p>
          <p>
            <strong>2.7 Payment data.</strong> Subscriptions bought in the app are
            processed by Google Play. We receive confirmation of the purchase and its
            status. We do not receive or store your card or bank details.
          </p>
        </section>

        <section id="s3">
          <h2>3. How we use personal data</h2>
          <p>We use personal data to:</p>
          <ul className="pp-list">
            <li>create, secure and manage accounts and verify sign-in;</li>
            <li>link a Parent’s account to Protected Devices;</li>
            <li>
              detect harassment and harmful content on a Protected Device and blur
              harmful images;
            </li>
            <li>
              show alerts, protection status and usage summaries to the Parent in the app;
            </li>
            <li>
              send the Parent weekly summary reports and service notices by email. Reports
              do not contain the raw content of messages;
            </li>
            <li>activate access through activation codes or subscriptions;</li>
            <li>
              measure how Parents use the app and how they found it, so that we can
              improve it;
            </li>
            <li>prevent fraud, abuse and unauthorised access; and</li>
            <li>comply with law.</li>
          </ul>
          <p>
            We do not sell personal data. We do not use a child’s data for advertising or
            to build an advertising profile.
          </p>
        </section>

        <section id="s4">
          <h2>4. Device permissions</h2>
          <p>
            CensorX asks for the following permissions on a Protected Device. Each is
            requested only after an explanation shown in the app.
          </p>
          <ul className="pp-list">
            <li>
              <strong>Accessibility service:</strong> to read on-screen and typed text and
              to identify the app in use, so that harassment can be detected and
              short-video limits applied. CensorX does not use this service to perform
              actions on the user’s behalf. CensorX is not an accessibility tool for
              people with disabilities.
            </li>
            <li>
              <strong>Notification access:</strong> to check incoming message
              notifications for harassment.
            </li>
            <li>
              <strong>Screen capture:</strong> to examine on-screen images on the device
              and blur harmful content.
            </li>
            <li>
              <strong>Notifications:</strong> to show the monitoring notice and deliver
              alerts.
            </li>
            <li>
              <strong>Device Admin (optional):</strong> to prevent the app from being
              removed without the Parent’s knowledge. It requests no other device control
              and can be switched off at any time in the device’s settings.
            </li>
          </ul>
          <p>
            While monitoring is on, the Protected Device shows a notification. If the
            notification is dismissed, it reappears automatically.
          </p>
        </section>

        <section id="s5">
          <h2>5. Children’s data and parental consent</h2>
          <p>
            CensorX is intended for use by parents and lawful guardians. Children do not
            create accounts. By setting up a Protected Device, the Parent confirms that
            they are the parent or lawful guardian of the child who uses it, that they
            are aged 18 or over, and that they consent to the processing of the child’s
            personal data described in this Policy. We encourage Parents to tell their
            child that CensorX is installed and what it does. If you believe we hold a
            child’s data without the consent of a parent or guardian, contact us and we
            will delete it.
          </p>
        </section>

        <section id="s6">
          <h2>6. Who we share personal data with</h2>
          <p>
            <strong>6.1 The Parent.</strong> Flagged incidents, protection status and
            usage data from a Protected Device are shown to the Parent whose account the
            device is linked to.
          </p>
          <p>
            <strong>6.2 Schools.</strong> Where access was obtained through a School, the
            School can see the student’s name, the activation code issued and whether that
            code has been redeemed. Schools cannot see alerts, message excerpts, usage
            data or any other content from a Protected Device.
          </p>
          <p>
            <strong>6.3 Service providers,</strong> who process data on our behalf:
          </p>
          <ul className="pp-list">
            <li>
              Google (Firebase and Google Cloud): authentication, database, server
              functions, push notifications, app integrity checks and analytics.
            </li>
            <li>Google Play: purchases and subscriptions.</li>
            <li>Resend: delivery of emails.</li>
          </ul>
          <p>
            <strong>6.4 Legal reasons.</strong> We may disclose personal data where
            required by law or a lawful order, or where necessary to protect the safety of
            a child or another person.
          </p>
          <p>
            <strong>6.5 Business transfer.</strong> CensorX is expected to be transferred
            to CensorX Technologies LLP once that entity is registered. Personal data will
            transfer with the Service, and this Policy will be updated to name the new
            operator.
          </p>
        </section>

        <section id="s7">
          <h2>7. Storage and transfer</h2>
          <p>
            Personal data is stored on Google’s cloud infrastructure and may be processed
            on servers outside India.{" "}
            <mark>[CONFIRM: Firestore and Cloud Functions region.]</mark>
          </p>
        </section>

        <section id="s8">
          <h2>8. Retention</h2>
          <p>
            We keep account, linking, flagged-incident and usage data for as long as the
            Parent’s account is active.{" "}
            <mark>
              [CONFIRM: any automatic expiry period for alerts, excerpts and usage data.
              If one exists, state it here.]
            </mark>{" "}
            Data from a Protected Device is deleted when the Parent removes that device
            from the account. All data linked to an account is deleted when the account is
            deleted, as described in section 9.{" "}
            <mark>
              [CONFIRM: what, if anything, remains after deletion, such as backups, and
              for how long.]
            </mark>
          </p>
        </section>

        <section id="s9">
          <h2>9. Your rights and choices</h2>
          <p>You may:</p>
          <ul className="pp-list">
            <li>access and correct your profile details in the app;</li>
            <li>remove a Protected Device from your account at any time;</li>
            <li>
              switch off any permission in the device’s settings, which stops the related
              protection;
            </li>
            <li>withdraw your consent, by deleting your account;</li>
            <li>
              delete your account and its data in the app (Account, then Delete Account)
              or by following the steps at{" "}
              <a href="/delete-account">censorx.in/delete-account</a>. Requests made by
              email are completed within 15 days;
            </li>
            <li>
              nominate another person to exercise your rights in the event of your death
              or incapacity; and
            </li>
            <li>
              raise a grievance with us under section 12 and, if it is not resolved,
              complain to the Data Protection Board of India.
            </li>
          </ul>
        </section>

        <section id="s10">
          <h2>10. Security</h2>
          <p>
            We protect personal data with encryption in transit, access rules that
            restrict each account to its own data, app integrity verification, and
            restricted staff access. No system is completely secure, and we cannot
            guarantee absolute security. We will notify affected users and the
            authorities of a personal data breach where the law requires it.
          </p>
        </section>

        <section id="s11">
          <h2>11. Changes to this Policy</h2>
          <p>
            We may update this Policy. We will change the effective date above and, for
            significant changes, notify Parents in the app or by email before the change
            takes effect.
          </p>
        </section>

        <section id="s12">
          <h2>12. Contact and Grievance Officer</h2>
          <p>Questions, requests and complaints about personal data:</p>
          <ul className="pp-list">
            <li>
              Email: <a href="mailto:team@censorx.in">team@censorx.in</a>
            </li>
            <li>
              Grievance Officer: Mr. Mohammad Ashar,{" "}
              <a href="mailto:team@censorx.in">team@censorx.in</a>
            </li>
            <li>
              Operator: CensorX, operated by Tabish Shaikh, Thane, Maharashtra, India
            </li>
          </ul>
          <p>
            We acknowledge grievances promptly and aim to resolve them within 15 days.
          </p>
        </section>
      </article>
    </div>
  );
}