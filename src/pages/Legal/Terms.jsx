import React from "react";

const css = `
html{scroll-behavior:smooth}
.tm-wrap{background:#fff;color:#1f2937;padding:28px 20px 80px;font-family:var(--font);line-height:1.7;font-size:15px}
.tm{max-width:860px;margin:0 auto}
.tm h1{font-size:33.5px;line-height:1.2;margin:0 0 8px;color:#0f172a;font-weight:700;letter-spacing:-0.5px}
.tm h2{font-size:19.5px;color:#0f172a;margin:36px 0 12px;padding-bottom:8px;border-bottom:1px solid #e2e8f0;font-weight:700;scroll-margin-top:90px}
.tm h3{font-size:16px;color:#0f172a;margin:20px 0 8px;font-weight:700}
.tm p{margin:0 0 14px;color:#334155}
.tm ul{margin:0 0 14px;padding-left:22px;color:#334155}
.tm li{margin:7px 0}
.tm strong,.tm b{color:#0f172a}
.tm a{color:#1d4ed8}
.tm .tm-date{color:#475569;font-size:16px;margin:0 0 18px}
.tm .tm-toc{background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:18px 22px;margin:0 0 28px}
.tm .tm-toc p{margin:0 0 10px;font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#64748b}
.tm .tm-toc ol{margin:0;padding-left:20px;columns:2;column-gap:28px;font-size:14px;line-height:2}
.tm .tm-toc li{margin:0}
.tm .tm-toc a{color:#1d4ed8;text-decoration:none}
.tm .tm-toc a:hover{text-decoration:underline}
@media(max-width:640px){.tm h1{font-size:26.5px}.tm-wrap{padding:20px 16px 60px}.tm-toc ol{columns:1}}
`;

export default function Terms() {
  return (
    <div>
      <style>{css}</style>
      <div className="tm-wrap">
        <div className="tm">
          <h1>Terms of Service</h1>
          <p className="tm-date">Effective date: 1 December 2026</p>

          <div className="tm-toc">
            <p>Contents</p>
            <ol>
              <li><a href="#t1">Who we are and acceptance</a></li>
              <li><a href="#t2">Definitions</a></li>
              <li><a href="#t3">Who may use CensorX</a></li>
              <li><a href="#t4">What CensorX does</a></li>
              <li><a href="#t5">Lawful and honest use</a></li>
              <li><a href="#t6">Setting up a child device</a></li>
              <li><a href="#t7">Permissions and Device Admin</a></li>
              <li><a href="#t8">Your account and PIN</a></li>
              <li><a href="#t9">Subscriptions and billing</a></li>
              <li><a href="#t10">School activation codes</a></li>
              <li><a href="#t11">Detection is an aid, not a guarantee</a></li>
              <li><a href="#t12">Acceptable use</a></li>
              <li><a href="#t13">Our content and your feedback</a></li>
              <li><a href="#t14">Privacy</a></li>
              <li><a href="#t15">Ending the service or your account</a></li>
              <li><a href="#t16">Disclaimers and limits of liability</a></li>
              <li><a href="#t17">Governing law</a></li>
              <li><a href="#t18">Changes and contact</a></li>
            </ol>
          </div>

          <h2 id="t1">1. Who we are and acceptance</h2>
          <p>
            These terms are an agreement between you and <b>Mohammad Tabish
            Ashrafi Raees Ahmed Shaikh</b>, an individual developer based in
            Thane, Maharashtra, India, operating the CensorX service and
            publishing on Google Play under the developer name <b>CensorX</b>{" "}
            ("CensorX", "we", "us"). By creating an account or using the app or
            website, you accept these terms. If CensorX is later transferred to
            a company formed by its founders, these terms continue with that
            company and we will tell you first.
          </p>

          <h2 id="t2">2. Definitions</h2>
          <ul>
            <li><b>Service:</b> the CensorX Android app, the censorx.in website and the school portal.</li>
            <li><b>Parent:</b> the adult account holder who manages protection.</li>
            <li><b>Child device:</b> a phone linked by the Parent on which protection runs.</li>
            <li><b>School:</b> an institution that buys activation codes and shares them with parents.</li>
          </ul>

          <h2 id="t3">3. Who may use CensorX</h2>
          <p>
            You must be <b>at least 18 years old</b> to create an account. You
            may set up protection only on a device belonging to your own child,
            or a child you have legal authority over. A child uses CensorX only
            through a device linked by their Parent; children do not create
            accounts.
          </p>

          <h2 id="t4">4. What CensorX does</h2>
          <p>
            CensorX checks what appears on a linked child device — on the
            device itself — to blur harmful images, detect possible harassment
            in on-screen text and message notifications, limit short-video
            apps, and send the Parent alerts and weekly reports in the app and
            by email. A visible notice on the child's phone always shows when
            protection is on.
          </p>

          <h2 id="t5">5. Lawful and honest use</h2>
          <p>
            CensorX is a parental-care tool, not a surveillance tool. You agree
            not to use it to monitor any adult, an employee, a partner, or any
            person you do not have legal authority over. You agree not to use
            it covertly: the child notice must stay visible, and we build the
            product so it cannot be hidden. Misuse of monitoring software can
            be a criminal offence; you are responsible for using CensorX
            lawfully in your circumstances.
          </p>

          <h2 id="t6">6. Setting up a child device</h2>
          <p>
            The Parent links a child device with a code generated in the parent
            app, confirms the child's age bracket, and allows the permissions
            on the child's phone. We encourage you to set CensorX up together
            with your child and explain why it is there — the app shows the
            child an explanation before protection starts.
          </p>

          <h2 id="t7">7. Permissions and Device Admin</h2>
          <p>
            Protection depends on the permissions described in our{" "}
            <a href="/privacy">Privacy Policy</a> (Accessibility,
            notification access, screen capture, notifications). If a
            permission is turned off, the related protection stops and the
            Parent is notified. <b>Device Admin is optional</b>, offered only
            on the child device to make removal harder without the Parent
            knowing; it can be declined and switched off at any time.
          </p>

          <h2 id="t8">8. Your account and PIN</h2>
          <p>
            Keep your sign-in details and parent PIN private. The PIN protects
            sensitive actions — devices, alerts and account deletion. You are
            responsible for activity on your account; tell us at{" "}
            <a href="mailto:team@censorx.in">team@censorx.in</a> if you believe
            it has been compromised.
          </p>

          <h2 id="t9">9. Subscriptions and billing</h2>
          <ul>
            <li>
              Paid plans are sold as subscriptions through <b>Google Play's
              billing system</b>. Current prices are shown in the app before
              you buy.
            </li>
            <li>
              Subscriptions renew automatically until cancelled in your Google
              Play settings. Cancelling stops the next renewal; the current
              period runs to its end.
            </li>
            <li>
              Refunds are handled under Google Play's refund policies. For
              billing questions, contact us or use Google Play's help.
            </li>
            <li>
              We may change prices or plans; changes apply from your next
              renewal and Google Play will show the new price first.
            </li>
          </ul>

          <h2 id="t10">10. School activation codes</h2>
          <ul>
            <li>
              A school may buy seats and give parents activation codes. The
              Parent enters the code, the student ID and the student name to
              activate.
            </li>
            <li>
              A code is for one student and one activation; it cannot be
              resold or transferred. The school can see the student's name and
              whether the code is active — never alerts, messages or reports.
            </li>
            <li>
              School-sponsored access runs for the school's licence period. If
              the school's licence ends or is cancelled, access through that
              code ends with it.
            </li>
            <li>
              If you delete your account, your child's seat record at the
              school is kept for the school's accounting with all personal
              details removed, and it is not carried into the school's next
              renewal.
            </li>
          </ul>

          <h2 id="t11">11. Detection is an aid, not a guarantee</h2>
          <p>
            CensorX uses automated, on-device analysis. It will sometimes miss
            harmful content and sometimes flag harmless content. Alerts are
            worded as possible concerns for you to review — they are not proof,
            and they are not a substitute for your own care, conversation and
            judgment. Do not rely on CensorX as your only safety measure. If a
            child is in danger, contact local emergency services; in India,
            children can also call <b>Childline on 1098</b>.
          </p>

          <h2 id="t12">12. Acceptable use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>use the Service against anyone you lack legal authority over, or try to hide it from the child;</li>
            <li>reverse engineer, resell, or interfere with the Service or its security;</li>
            <li>use the Service to break any law, or to harass or harm anyone;</li>
            <li>share activation codes outside the school's intended families.</li>
          </ul>

          <h2 id="t13">13. Our content and your feedback</h2>
          <p>
            The app, website, name, logo and models belong to us or our
            licensors. We grant you a personal, non-transferable licence to use
            the app for its intended purpose. If you send us feedback, we may
            use it to improve the Service without obligation to you.
          </p>

          <h2 id="t14">14. Privacy</h2>
          <p>
            How we handle personal data — including what never leaves the
            child's phone — is described in our{" "}
            <a href="/privacy">Privacy Policy</a>, which forms
            part of these terms.
          </p>

          <h2 id="t15">15. Ending the service or your account</h2>
          <p>
            You can delete your account at any time (Account &rsaquo; Delete
            Account in the app, <a href="/delete-account">censorx.in/delete-account</a>,
            or by email). We may suspend or end accounts that break these
            terms, with notice where reasonable. We may discontinue the
            Service; if we do, we will give reasonable notice and Google
            Play's rules on refunds for paid periods will apply.
          </p>

          <h2 id="t16">16. Disclaimers and limits of liability</h2>
          <p>
            The Service is provided "as is" and "as available". To the extent
            permitted by law, we disclaim warranties of uninterrupted or
            error-free operation and of detection accuracy (section 11). To
            the extent permitted by law, our total liability for any claim is
            limited to the amount you paid for the Service in the 12 months
            before the claim. Nothing in these terms limits liability that
            cannot be limited under Indian law.
          </p>

          <h2 id="t17">17. Governing law</h2>
          <p>
            These terms are governed by the laws of India. Courts at Thane,
            Maharashtra have exclusive jurisdiction, subject to any rights you
            have under consumer protection law.
          </p>

          <h2 id="t18">18. Changes and contact</h2>
          <p>
            If we change these terms in a meaningful way, we will tell you in
            the app or by email before the change takes effect. Questions:{" "}
            <a href="mailto:team@censorx.in">team@censorx.in</a>. Grievance
            Officer: Mr. Mohammad Ashar, same address.
          </p>
        </div>
      </div>
    </div>
  );
}