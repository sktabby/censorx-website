import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../routes/routes";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "42px 0",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        background:
          "radial-gradient(900px 340px at 20% 0%, rgba(79,195,247,0.06), transparent 60%), rgba(255,255,255,0.02)",
      }}
    >
      <div className="container" style={{ display: "grid", gap: 18 }}>
        {/* TOP GRID */}
        <div className="ftGrid">
          {/* LEFT */}
          <div style={{ minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
              <div style={{ fontWeight: 950, fontSize: 16, letterSpacing: "-0.01em" }}>CensorX.ai</div>

              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "6px 10px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.10)",
                  background: "rgba(255,255,255,0.03)",
                  color: "var(--muted2)",
                  fontSize: 11,
                  fontWeight: 900,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Privacy-first safety
              </span>
            </div>

            <div
              style={{
                color: "var(--muted2)",
                fontSize: 13,
                lineHeight: 1.7,
                marginTop: 10,
                maxWidth: 520,
              }}
            >
              A privacy-first digital safety layer for real-time protection against harmful content and online harassment.
            </div>

            {/* CONTACT */}
            <div style={{ marginTop: 18, display: "grid", gap: 10 }}>
              <FooterLabel>Contact</FooterLabel>

              <div style={{ display: "grid", gap: 10 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <span style={{ opacity: 0.9 }}>📧</span>
                  <a
                    href="mailto:censorx01@gmail.com"
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                      fontSize: 13,
                      lineHeight: 1.4,
                      opacity: 0.92,
                      wordBreak: "break-word",
                    }}
                  >
                    censorx01@gmail.com
                  </a>
                </div>

                <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <span style={{ opacity: 0.9, marginTop: 1 }}>📞</span>
                  <div style={{ display: "grid", gap: 6 }}>
                    <a
                      href="tel:+919820376923"
                      style={{ color: "inherit", textDecoration: "none", fontSize: 13, opacity: 0.92 }}
                    >
                      +91 98203 76923
                    </a>
                    <a
                      href="tel:+918454800911"
                      style={{ color: "inherit", textDecoration: "none", fontSize: 13, opacity: 0.92 }}
                    >
                      +91 84548 00911
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* SOCIAL */}
            <div style={{ marginTop: 18, display: "grid", gap: 10 }}>
              <FooterLabel>Social</FooterLabel>
              <div className="ftPills">
                <ExtPill
                  href="https://www.instagram.com/ataminds?igsh=MWxzam90a2xoZTd5dg=="
                  label="Instagram"
                  icon={<InstagramIcon />}
                />
                <ExtPill href="https://youtube.com/@ataminds?si=5oP1fxznhvHj03FD" label="YouTube" icon={<YouTubeIcon />} />
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="ftRight">
            {/* LEGAL */}
            <div style={{ display: "grid", gap: 10 }}>
              <FooterLabel className="ftRightLabel">Legal</FooterLabel>

              <div className="ftLegal">
                <FooterPillLink to={ROUTES.PRIVACY_POLICY}>Privacy Policy</FooterPillLink>
                <FooterPillLink to={ROUTES.TERMS}>Terms</FooterPillLink>
                <FooterPillLink to={ROUTES.DISCLAIMER}>Disclaimer</FooterPillLink>
              </div>

              <div className="ftLegalNote" style={{ color: "var(--muted2)", fontSize: 12, opacity: 0.75 }}>
                By using CensorX, you agree to our policies and terms.
              </div>
            </div>

            {/* COFOUNDERS */}
            <div
              className="ftCard"
              style={{
                padding: 14,
                borderRadius: 18,
                border: "1px solid rgba(255,255,255,0.10)",
                background: "rgba(255,255,255,0.03)",
                boxShadow: "0 16px 40px rgba(0,0,0,0.25)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
                <FooterLabel>Co-founders</FooterLabel>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "var(--muted2)", fontSize: 11, opacity: 0.9 }}>
                  <LinkedInMark />
                  LinkedIn
                </span>
              </div>

              <div style={{ marginTop: 10, display: "grid", gap: 8 }}>
                <FounderLink name="Aqsa" href="https://www.linkedin.com/in/aqsashah2004/" />
                <FounderLink name="Tabish" href="https://www.linkedin.com/in/tabish-profile/" />
                <FounderLink name="Ashar" href="https://www.linkedin.com/in/mohammadashar0911/" />
              </div>

              <div style={{ marginTop: 10, fontSize: 11, color: "var(--muted2)", opacity: 0.8 }}>
                Note: LinkedIn may ask you to sign in depending on your region/settings.
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="ftBottom">
          <div>© {new Date().getFullYear()} CensorX. All rights reserved.</div>
          <div style={{ opacity: 0.9 }}>Built by ATA Minds</div>
        </div>
      </div>

      {/* RESPONSIVE + ELEGANT MOBILE */}
      <style>{`
        .ftGrid{
          display:grid;
          grid-template-columns: 1.25fr 0.75fr;
          gap: 26px;
          align-items:start;
        }

        .ftRight{
          display:grid;
          gap: 14px;
          justify-items: end;
        }

        .ftPills{
          display:flex;
          gap:10px;
          flex-wrap:wrap;
        }

        .ftLegal{
          display:flex;
          flex-wrap:wrap;
          gap:10px;
          justify-content:flex-end;
        }

        .ftLegalNote{
          text-align:right;
        }

        .ftBottom{
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap: 12px;
          padding-top: 14px;
          border-top: 1px solid rgba(255,255,255,0.08);
          color: var(--muted2);
          font-size: 12px;
          opacity: 0.85;
          flex-wrap: wrap;
        }

        @media (max-width: 900px){
          .ftGrid{
            grid-template-columns: 1fr;
          }
          .ftRight{
            justify-items: start;
          }
          .ftLegal{
            justify-content:flex-start;
          }
          .ftLegalNote{
            text-align:left;
          }
        }

        @media (max-width: 520px){
          footer{
            padding: 36px 0;
          }
          .ftPills a{
            flex: 1 1 auto;
          }
          .ftLegal a{
            flex: 1 1 auto;
            text-align:center;
          }
          .ftBottom{
            gap: 8px;
          }
        }
      `}</style>
    </footer>
  );
}

/* ---------- small UI helpers ---------- */

function FooterLabel({ children, align = "left", className = "" }) {
  return (
    <div
      className={className}
      style={{
        fontSize: 12,
        fontWeight: 900,
        color: "var(--muted2)",
        letterSpacing: "0.10em",
        textTransform: "uppercase",
        textAlign: align,
      }}
    >
      {children}
    </div>
  );
}

function ExtPill({ href, label, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "11px 12px",
        borderRadius: 999,
        border: "1px solid rgba(255,255,255,0.10)",
        background: "rgba(255,255,255,0.02)",
        textDecoration: "none",
        fontSize: 13,
        fontWeight: 800,
        lineHeight: 1,
        transition: "transform 120ms ease, background 120ms ease, border 120ms ease",
        color: "inherit",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.05)";
        e.currentTarget.style.border = "1px solid rgba(255,255,255,0.18)";
        e.currentTarget.style.transform = "translateY(-1px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.02)";
        e.currentTarget.style.border = "1px solid rgba(255,255,255,0.10)";
        e.currentTarget.style.transform = "translateY(0px)";
      }}
    >
      <span style={{ display: "inline-flex", opacity: 0.95 }}>{icon}</span>
      {label}
    </a>
  );
}

function FounderLink({ name, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      referrerPolicy="no-referrer"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10,
        padding: "11px 12px",
        borderRadius: 14,
        border: "1px solid rgba(255,255,255,0.10)",
        background: "rgba(255,255,255,0.02)",
        textDecoration: "none",
        color: "inherit",
        transition: "transform 120ms ease, background 120ms ease, border 120ms ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.05)";
        e.currentTarget.style.border = "1px solid rgba(255,255,255,0.18)";
        e.currentTarget.style.transform = "translateY(-1px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.02)";
        e.currentTarget.style.border = "1px solid rgba(255,255,255,0.10)";
        e.currentTarget.style.transform = "translateY(0px)";
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
        <span
          style={{
            width: 30,
            height: 30,
            borderRadius: 11,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(79,195,247,0.10)",
            border: "1px solid rgba(79,195,247,0.22)",
            fontWeight: 950,
            fontSize: 12,
            flexShrink: 0,
          }}
        >
          {String(name || "?").slice(0, 1).toUpperCase()}
        </span>

        <div style={{ display: "grid", gap: 2, minWidth: 0 }}>
          <span style={{ fontWeight: 900, fontSize: 13, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {name}
          </span>
          <span style={{ fontSize: 12, color: "var(--muted2)" }}>View profile</span>
        </div>
      </div>

      <span style={{ display: "inline-flex", flexShrink: 0 }}>
        <LinkedInMark />
      </span>
    </a>
  );
}

function FooterPillLink({ to, children }) {
  return (
    <NavLink
      to={to}
      className="navA"
      style={{
        padding: "11px 12px",
        borderRadius: 999,
        border: "1px solid rgba(255,255,255,0.10)",
        background: "rgba(255,255,255,0.02)",
        textDecoration: "none",
        fontSize: 13,
        fontWeight: 800,
        lineHeight: 1,
        transition: "transform 120ms ease, background 120ms ease, border 120ms ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.05)";
        e.currentTarget.style.border = "1px solid rgba(255,255,255,0.18)";
        e.currentTarget.style.transform = "translateY(-1px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.02)";
        e.currentTarget.style.border = "1px solid rgba(255,255,255,0.10)";
        e.currentTarget.style.transform = "translateY(0px)";
      }}
    >
      {children}
    </NavLink>
  );
}

/* ---------- icons ---------- */

function LinkedInMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <rect x="2.4" y="2.4" width="19.2" height="19.2" rx="4.2" fill="#0A66C2" />
      <path
        d="M7.2 10.1h2.2v7.2H7.2v-7.2Zm1.1-3.4a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6ZM10.8 10.1h2.1v1c.3-.6 1.1-1.2 2.3-1.2 2.3 0 2.8 1.4 2.8 3.3v4.1h-2.2v-3.7c0-.9 0-2-1.2-2s-1.4.9-1.4 1.9v3.8h-2.2v-7.2Z"
        fill="#fff"
      />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M23.498 6.186a2.958 2.958 0 00-2.08-2.093C19.584 3.5 12 3.5 12 3.5s-7.584 0-9.418.593A2.958 2.958 0 00.502 6.186C0 8.028 0 12 0 12s0 3.972.502 5.814a2.958 2.958 0 002.08 2.093C4.416 20.5 12 20.5 12 20.5s7.584 0 9.418-.593a2.958 2.958 0 002.08-2.093C24 15.972 24 12 24 12s0-3.972-.502-5.814z"
        fill="#FF0000"
      />
      <path d="M9.75 15.02L15.5 12 9.75 8.98v6.04z" fill="#fff" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.5 2.5h9A5 5 0 0 1 21.5 7.5v9a5 5 0 0 1-5 5h-9a5 5 0 0 1-5-5v-9a5 5 0 0 1 5-5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        opacity="0.92"
      />
      <path
        d="M12 16.2a4.2 4.2 0 1 0 0-8.4 4.2 4.2 0 0 0 0 8.4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        opacity="0.92"
      />
      <path d="M17.6 6.7h.01" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}
