import React from "react";

const css = `
html{scroll-behavior:smooth}
.pp-wrap{background:#fff;color:#1f2937;padding:28px 20px 80px;font-family:var(--font);line-height:1.7;font-size:15px}
.pp{max-width:860px;margin:0 auto}
.pp h1{font-size:33.5px;line-height:1.2;margin:0 0 8px;color:#0f172a;font-weight:700;letter-spacing:-0.5px}
.pp h2{font-size:19.5px;color:#0f172a;margin:36px 0 12px;padding-bottom:8px;border-bottom:1px solid #e2e8f0;font-weight:700;scroll-margin-top:90px}
.pp h3{font-size:16px;color:#0f172a;margin:20px 0 8px;font-weight:700}
.pp p{margin:0 0 14px;color:#334155}
.pp ul{margin:0 0 14px;padding-left:22px;color:#334155}
.pp li{margin:7px 0}
.pp strong,.pp b{color:#0f172a}
.pp a{color:#1d4ed8}
.pp .pp-date{color:#475569;font-size:16px;margin:0 0 18px}
.pp .pp-toc{background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:18px 22px;margin:0 0 28px}
.pp .pp-toc p{margin:0 0 10px;font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#64748b}
.pp .pp-toc ol{margin:0;padding-left:20px;columns:2;column-gap:28px;font-size:14px;line-height:2}
.pp .pp-toc li{margin:0}
.pp .pp-toc a{color:#1d4ed8;text-decoration:none}
.pp .pp-toc a:hover{text-decoration:underline}
.pp .pp-box{background:#f8fafc;border:1px solid #e2e8f0;border-left:4px solid #32b2a9;border-radius:8px;padding:18px 22px;margin:0 0 28px;color:#334155}
@media(max-width:640px){.pp h1{font-size:26.5px}.pp-wrap{padding:20px 16px 60px}.pp-toc ol{columns:1}}
`;

export default function PrivacyPolicy() {
  return (
    <div>
      <style>{css}</style>
      <div className="pp-wrap">
        <div className="pp">
          <h1>Privacy Policy</h1>
          <p className="pp-date">Effective date: 1 December 2026</p>

          <div className="pp-box">
            <b>In short:</b> CensorX protects children by checking what appears
            on their phone's screen, on the phone itself. Screen images and the
            content of messages are never uploaded to us. Parents receive alerts
            about the type of concern, not copies of conversations. The child
            always sees that protection is on. You can delete your account and
            data at any time.
          </div>

          <div className="pp-toc">
            <p>Contents</p>
            <ol>
              <li><a href="#s1">Who we are</a></li>
              <li><a href="#s2">Who this policy covers</a></li>
              <li><a href="#s3">Information we collect</a></li>
              <li><a href="#s4">What never leaves the child's phone</a></li>
              <li><a href="#s5">How we use information</a></li>
              <li><a href="#s6">Device permissions, explained</a></li>
              <li><a href="#s7">Children's data and parental consent</a></li>
              <li><a href="#s8">Who we share information with</a></li>
              <li><a href="#s9">Where your data is stored</a></li>
              <li><a href="#s10">How long we keep data</a></li>
              <li><a href="#s11">Deleting your account and your rights</a></li>
              <li><a href="#s12">Security</a></li>
              <li><a href="#s13">Changes to this policy</a></li>
              <li><a href="#s14">Contact and Grievance Officer</a></li>
            </ol>
          </div>

          <h2 id="s1">1. Who we are</h2>
          <p>
            CensorX is a child digital-safety application for Android, operated
            by <b>Mohammad Tabish Ashrafi Raees Ahmed Shaikh</b>, an individual
            developer based in Thane, Maharashtra, India, publishing on Google
            Play under the developer name <b>CensorX</b>. In this policy, "CensorX",
            "we", "us" and "our" refer to this operator.
          </p>
          <p>
            If CensorX is later transferred to a company formed by its founders,
            your data will move with the service under this same policy, and we
            will tell you before that happens (see section 8).
          </p>

          <h2 id="s2">2. Who this policy covers</h2>
          <ul>
            <li>
              <b>Parent:</b> an adult (18 or older) who creates a CensorX
              account and manages protection for their child, or for a child
              they have legal authority over.
            </li>
            <li>
              <b>Child device:</b> a phone linked by the Parent on which
              CensorX's protection runs. The child does not create an account
              of their own.
            </li>
            <li>
              <b>School:</b> an institution that purchases activation codes and
              shares them with parents. Schools are covered in sections 3.6
              and 8.
            </li>
          </ul>

          <h2 id="s3">3. Information we collect</h2>

          <h3>3.1 Parent account</h3>
          <p>
            When you sign up we collect your <b>name</b> and <b>email
            address</b>, with a password, or your Google account details if you
            use Google Sign-In. Passwords are handled by Google Firebase
            Authentication; we never see or store them in readable form. On
            your profile you may optionally add your <b>gender</b> and{" "}
            <b>date of birth</b>; both are your choice and can be left empty.
          </p>

          <h3>3.2 Child device</h3>
          <p>
            When you link a child's phone we store a <b>device name and display
            name you choose</b>, the child's <b>age bracket</b> (below 18, or
            18 and above), and a link code. We do not ask for the child's date
            of birth or create a profile of the child.
          </p>

          <h3>3.3 Safety alerts</h3>
          <p>
            When CensorX detects a possible concern on the child's phone, the
            phone sends us an alert containing only the <b>type of concern</b>,
            its <b>severity</b> and the <b>time</b>. The content of the message
            or screen is not included. We attach the alert to your account so
            you can see it in the parent app.
          </p>

          <h3>3.4 Daily protection summary</h3>
          <p>
            The child's phone reports a daily <b>count of screens that were
            blurred</b>. The images themselves are never sent.
          </p>

          <h3>3.5 Device usage summaries</h3>
          <p>
            Where usage tracking is enabled, the child's phone reports daily
            totals of <b>protected time</b> and <b>time limited on short-video
            apps</b>. We do not collect lists of the apps your child uses or
            per-app histories.
          </p>

          <h3>3.6 School activation</h3>
          <p>
            If your child's school gave you an activation code, we collect the{" "}
            <b>school code</b>, the <b>student ID</b> and the <b>student
            name</b> you enter, to connect your subscription to the school's
            licence. Your school can see the student's name and whether the
            code is active — nothing else (see section 8).
          </p>

          <h3>3.7 Payments</h3>
          <p>
            Subscriptions are purchased through <b>Google Play's billing
            system</b>. Google processes the payment; we never receive your
            card or bank details. We receive your subscription status so we can
            provide the service.
          </p>

          <h3>3.8 Technical information</h3>
          <p>
            We collect the information needed to run the service: your device
            model (parent's phone), push notification tokens, app version,
            and server logs of requests. We use <b>Firebase Analytics</b> in
            the parent app to understand how the app is used. Analytics is{" "}
            <b>not used on child devices</b>, and CensorX does not use the
            advertising ID or show advertising.
          </p>

          <h2 id="s4">4. What never leaves the child's phone</h2>
          <ul>
            <li>
              <b>Screen images.</b> Screenshots taken for safety checking are
              analysed on the phone and are never saved to our servers or
              transmitted anywhere.
            </li>
            <li>
              <b>Message content.</b> CensorX reads on-screen text and message
              notifications on the device to detect harassment. The text itself
              is not uploaded. Alerts carry only the type, severity and time
              (section 3.3).
            </li>
            <li>
              <b>Alert history on the device.</b> A record of alerts kept on
              the child's phone stays there until the app is removed.
            </li>
          </ul>

          <h2 id="s5">5. How we use information</h2>
          <ul>
            <li>To provide protection and deliver alerts to the Parent.</li>
            <li>
              To send the Parent a weekly summary report — screens censored,
              possible concerns, device usage and safe-hours compliance — in
              the app and by email.
            </li>
            <li>
              To send service emails: link codes, login alerts, recovery codes,
              device-transfer confirmations, emergency alerts and subscription
              notices.
            </li>
            <li>To manage subscriptions and school activation codes.</li>
            <li>To secure the service and prevent fraud and misuse.</li>
            <li>To improve the app using analytics from parent devices.</li>
          </ul>
          <p>
            We do not sell personal data, and we do not use it for advertising.
          </p>

          <h2 id="s6">6. Device permissions, explained</h2>
          <p>
            Each permission is explained inside the app before it is requested.
          </p>
          <ul>
            <li>
              <b>Accessibility:</b> lets CensorX read text visible on the
              child's screen and see which app is open, to detect harassment
              and apply short-video limits. Analysis happens on the device.
            </li>
            <li>
              <b>Notification access:</b> lets CensorX check incoming message
              notifications for harassment, even when the messaging app is
              closed.
            </li>
            <li>
              <b>Screen capture:</b> lets CensorX check on-screen images and
              blur unsafe content. Images are processed on the device and never
              uploaded.
            </li>
            <li>
              <b>Notifications:</b> shows the always-visible notice on the
              child's phone that protection is on, and delivers alerts to the
              Parent.
            </li>
            <li>
              <b>Device Admin (optional, child device only):</b> helps prevent
              the app being removed without the Parent knowing. It is optional,
              can be declined, and can be switched off at any time. CensorX has
              no hidden or stealth mode.
            </li>
          </ul>

          <h2 id="s7">7. Children's data and parental consent</h2>
          <p>
            CensorX processes a child's data only after a Parent — the child's
            parent or legal guardian — sets up protection and consents on the
            child's behalf, as required by India's Digital Personal Data
            Protection Act, 2023. The child always sees a visible notice when
            protection is on. We collect the minimum about the child: a
            device/display name, an age bracket, alert types and daily
            summaries — never message content or screen images (section 4).
          </p>

          <h2 id="s8">8. Who we share information with</h2>
          <ul>
            <li>
              <b>The Parent:</b> alerts, summaries and reports about the linked
              child device go to the Parent's account.
            </li>
            <li>
              <b>Schools:</b> if you joined through a school code, the school
              can see the student name you entered and whether the code is
              active. Schools never see alerts, reports, messages or usage.
            </li>
            <li>
              <b>Service providers:</b> Google Firebase / Google Cloud
              (authentication, database, server functions, push notifications,
              app integrity, analytics) and Resend (email delivery). They
              process data for us under their own safeguards. Google Play
              processes payments.
            </li>
            <li>
              <b>Legal:</b> we may disclose information if required by law or
              to protect a child from serious harm.
            </li>
            <li>
              <b>Business transfer:</b> if CensorX is transferred to a company
              formed by its founders, or to a successor that continues the
              service, data transfers with it under this policy and we will
              notify you first.
            </li>
          </ul>

          <h2 id="s9">9. Where your data is stored</h2>
          <p>
            Your data is stored in Google Cloud's <b>Mumbai, India
            (asia-south1)</b> region. Some processing runs on Google servers in
            the <b>United States</b>, and our email provider processes messages
            outside India. These providers protect data under their own
            security and data-processing commitments.
          </p>

          <h2 id="s10">10. How long we keep data</h2>
          <ul>
            <li>
              <b>Account data, child devices, alerts and reports:</b> kept
              while your account exists, and deleted when you delete it
              (section 11).
            </li>
            <li>
              <b>Device usage summaries:</b> deleted automatically after{" "}
              <b>100 days</b>.
            </li>
            <li>
              <b>Server logs:</b> deleted automatically after about{" "}
              <b>30 days</b>.
            </li>
            <li>
              <b>Payment records:</b> kept by Google Play under Google's own
              policies.
            </li>
          </ul>

          <h2 id="s11">11. Deleting your account and your rights</h2>
          <p>You can delete your account and data in three ways:</p>
          <ul>
            <li>
              <b>In the app:</b> Account &rsaquo; Delete Account. Your parent
              PIN confirms it is you.
            </li>
            <li>
              <b>On the web:</b>{" "}
              <a href="/delete-account">censorx.in/delete-account</a>.
            </li>
            <li>
              <b>By email:</b> write to{" "}
              <a href="mailto:team@censorx.in">team@censorx.in</a> from the
              email on your account. We complete email requests within{" "}
              <b>15 days</b>.
            </li>
          </ul>
          <p>
            Deletion removes your profile, linked child devices, alerts, usage
            summaries, reports and sign-in. If you joined through a school,
            the school's licence record is kept for its seat accounting,{" "}
            <b>with all personal details removed</b> — no name, ID, email or
            device information remains on it. Google Play keeps its own payment
            records.
          </p>
          <p>
            You can also ask us to correct your information, or ask what we
            hold about you, at the same email address.
          </p>

          <h2 id="s12">12. Security</h2>
          <p>
            Data is encrypted in transit, access to our systems is restricted,
            and sign-ins are protected by Firebase Authentication with app
            integrity checks. No system is perfectly secure, and we cannot
            guarantee absolute security, but protecting families' data is the
            reason this product exists and we treat it that way.
          </p>

          <h2 id="s13">13. Changes to this policy</h2>
          <p>
            If we change this policy in a meaningful way, we will tell you in
            the app or by email before the change takes effect, and update the
            date at the top. Earlier versions are available on request.
          </p>

          <h2 id="s14">14. Contact and Grievance Officer</h2>
          <p>
            <b>Operator:</b> CensorX, operated by Mohammad Tabish Ashrafi Raees
            Ahmed Shaikh, Thane, Maharashtra, India.
            <br />
            <b>Email:</b>{" "}
            <a href="mailto:team@censorx.in">team@censorx.in</a>
          </p>
          <p>
            <b>Grievance Officer (India):</b> Mr. Mohammad Ashar,{" "}
            <a href="mailto:team@censorx.in">team@censorx.in</a>. We acknowledge
            grievances promptly and aim to resolve them within 15 days. If you
            are not satisfied, you may approach the Data Protection Board of
            India.
          </p>
        </div>
      </div>
    </div>
  );
}