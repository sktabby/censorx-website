import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../routes/routes";

export default function Footer() {
  return (
    <footer className="ft">
      <style>{`
        .ft{
          padding:56px 0 28px;
          border-top:1px solid rgba(255,255,255,0.08);
          background:
            radial-gradient(900px 340px at 20% 0%, rgba(79,195,247,0.06), transparent 60%),
            rgba(255,255,255,0.02);
        }

        .ftGrid{
          display:grid;
          grid-template-columns:1.6fr 1fr 1fr 1fr;
          gap:40px;
          align-items:start;
        }

        .ftBrand{
          font-weight:800;
          font-size:17.5px;
          letter-spacing:-0.01em;
        }
        .ftTag{
          margin:12px 0 0;
          max-width:380px;
          color:var(--muted2);
          font-size:12.5px;
          line-height:1.75;
        }

        .ftSocial{
          margin-top:20px;
          display:flex;
          gap:10px;
        }
        .ftSocial a{
          width:38px;
          height:38px;
          border-radius:50%;
          display:grid;
          place-items:center;
          color:inherit;
          border:1px solid rgba(255,255,255,0.14);
          transition:transform .15s ease, border-color .15s ease, background .15s ease;
        }
        .ftSocial a:hover{
          transform:translateY(-2px);
          border-color:rgba(255,255,255,0.4);
          background:rgba(255,255,255,0.06);
        }

        .ftLabel{
          margin:0 0 16px;
          font-size:12px;
          font-weight:800;
          letter-spacing:0.12em;
          text-transform:uppercase;
          color:var(--muted2);
        }

        .ftList{
          list-style:none;
          margin:0;
          padding:0;
          display:grid;
          gap:12px;
        }
        .ftList a{
          display:inline-flex;
          align-items:center;
          gap:10px;
          color:inherit;
          opacity:0.85;
          text-decoration:none;
          font-size:13px;
          line-height:1.4;
          word-break:break-word;
          transition:opacity .15s ease, transform .15s ease;
        }
        .ftList a:hover{
          opacity:1;
          transform:translateX(3px);
        }
        .ftList svg{ flex-shrink:0; }

        .ftBottom{
          margin-top:44px;
          padding-top:20px;
          border-top:1px solid rgba(255,255,255,0.08);
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:10px 24px;
          flex-wrap:wrap;
          color:var(--muted2);
          font-size:12.5px;
        }

        @media (max-width: 900px){
          .ftGrid{
            grid-template-columns:1fr 1fr;
            gap:34px 24px;
          }
          .ftCol-brand{ grid-column:1 / -1; }
        }
        @media (max-width: 520px){
          .ft{ padding:40px 0 24px; }
          .ftGrid{ grid-template-columns:1fr; gap:30px; }
          .ftBottom{
            margin-top:32px;
            flex-direction:column;
            align-items:flex-start;
          }
        }
        @media (prefers-reduced-motion: reduce){
          .ftSocial a, .ftList a{ transition:none; }
          .ftSocial a:hover, .ftList a:hover{ transform:none; }
        }
      `}</style>

      <div className="container">
        <div className="ftGrid">
          {/* BRAND + SOCIAL */}
          <div className="ftCol-brand">
            <div className="ftBrand">CensorX</div>
            <p className="ftTag">
              A privacy-first digital safety layer for real-time protection against harmful content and online harassment.
            </p>

            <div className="ftSocial">
              <a
                href="https://www.instagram.com/censorx.ai/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.youtube.com/@censorx-YourDigitalGuardian"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
              >
                <YouTubeIcon />
              </a>
              <a
                href="https://www.linkedin.com/company/censorx-ai"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <p className="ftLabel">Contact</p>
            <ul className="ftList">
              <li>
                <a href="mailto:team@censorx.in">
                  <MailIcon />
                  team@censorx.in
                </a>
              </li>
              <li>
                <a href="tel:+919820376923">
                  <PhoneIcon />
                  +91 98203 76923
                </a>
              </li>
              <li>
                <a href="tel:+918454800911">
                  <PhoneIcon />
                  +91 84548 00911
                </a>
              </li>
            </ul>
          </div>

          {/* CO-FOUNDERS */}
          <div>
            <p className="ftLabel">Co-founders</p>
            <ul className="ftList">
              <li>
                <FounderLink name="Aqsa" href="https://www.linkedin.com/in/aqsashah2004/" />
              </li>
              <li>
                <FounderLink name="Tabish" href="https://www.linkedin.com/in/tabish-profile/" />
              </li>
              <li>
                <FounderLink name="Ashar" href="https://www.linkedin.com/in/mohammadashar0911/" />
              </li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <p className="ftLabel">Legal</p>
            <ul className="ftList">
              <li><NavLink to={ROUTES.PRIVACY_POLICY}>Privacy Policy</NavLink></li>
              <li><NavLink to={ROUTES.TERMS}>Terms</NavLink></li>
              <li><NavLink to={ROUTES.DISCLAIMER}>Disclaimer</NavLink></li>
              <li><NavLink to={ROUTES.DELETE_ACCOUNT}>Delete account</NavLink></li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="ftBottom">
          <div>© {new Date().getFullYear()} CensorX. All rights reserved.</div>
          <div>By using CensorX, you agree to our policies and terms.</div>
          <div>Built by Tabish Shaikh</div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- helpers ---------- */

function FounderLink({ name, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      referrerPolicy="no-referrer"
      aria-label={`${name} on LinkedIn`}
    >
      <LinkedInIcon />
      {name}
    </a>
  );
}

/* ---------- icons (line style, inherit text colour) ---------- */

const iconProps = {
  width: 17,
  height: 17,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

function MailIcon() {
  return (
    <svg {...iconProps}>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg {...iconProps}>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg {...iconProps}>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M8 10.5V17M8 7.5v.01M12 17v-6.5M12 13.5c0-1.7 1.1-3 2.6-3S17 11.6 17 13.5V17" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg {...iconProps}>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="M10 9.5v5l4.5-2.5L10 9.5z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg {...iconProps}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.2 6.8h.01" />
    </svg>
  );
}