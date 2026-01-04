import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../routes/routes";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "34px 0",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(255,255,255,0.02)",
      }}
    >
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 0.8fr",
          gap: 24,
          alignItems: "start",
        }}
      >
        {/* LEFT: BRAND + CONTACT */}
        <div style={{ minWidth: 240 }}>
          <div style={{ fontWeight: 900, fontSize: 16, letterSpacing: "-0.01em" }}>
            CensorX
          </div>

          <div
            style={{
              color: "var(--muted2)",
              fontSize: 13,
              lineHeight: 1.6,
              marginTop: 8,
              maxWidth: 380,
            }}
          >
            A privacy-first digital safety layer for real-time protection.
          </div>

          {/* CONTACT */}
          <div style={{ marginTop: 14, display: "grid", gap: 8 }}>
            <div style={{ fontSize: 12, fontWeight: 800, color: "var(--muted2)", letterSpacing: "0.04em" }}>
              CONTACT
            </div>

            <div style={{ display: "grid", gap: 6 }}>
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
                  }}
                >
                  censorx01@gmail.com
                </a>
              </div>

              <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span style={{ opacity: 0.9, marginTop: 1 }}>📞</span>
                <div style={{ display: "grid", gap: 3 }}>
                  <a
                    href="tel:+919820376923"
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                      fontSize: 13,
                      opacity: 0.92,
                    }}
                  >
                    +91 98203 76923
                  </a>
                  <a
                    href="tel:+918454800911"
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                      fontSize: 13,
                      opacity: 0.92,
                    }}
                  >
                    +91 84548 00911
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 16, color: "var(--muted2)", fontSize: 12, opacity: 0.8 }}>
            © {new Date().getFullYear()} CensorX. All rights reserved.
          </div>
        </div>

        {/* RIGHT: LEGAL (IMPROVED) */}
        <div style={{ display: "grid", gap: 12, justifyItems: "end" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 12px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.10)",
              background: "rgba(255,255,255,0.03)",
              color: "var(--muted2)",
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            LEGAL
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              justifyContent: "flex-end",
            }}
          >
            <FooterPillLink to={ROUTES.PRIVACY_POLICY}>Privacy Policy</FooterPillLink>
            <FooterPillLink to={ROUTES.TERMS}>Terms</FooterPillLink>
            <FooterPillLink to={ROUTES.DISCLAIMER}>Disclaimer</FooterPillLink>
          </div>

          <div style={{ color: "var(--muted2)", fontSize: 12, opacity: 0.75, textAlign: "right" }}>
            By using CensorX, you agree to our policies and terms.
          </div>
        </div>
      </div>

      {/* MOBILE RESPONSIVE FIX */}
      <style>{`
        @media (max-width: 820px) {
          footer .container {
            grid-template-columns: 1fr !important;
          }
          footer .container > div:last-child {
            justify-items: start !important;
            text-align: left !important;
            margin-top: 10px;
          }
          footer .container > div:last-child > div:last-child {
            text-align: left !important;
          }
          footer .container > div:last-child > div:nth-child(2) {
            justify-content: flex-start !important;
          }
        }
      `}</style>
    </footer>
  );
}

function FooterPillLink({ to, children }) {
  return (
    <NavLink
      to={to}
      className="navA"
      style={{
        padding: "10px 12px",
        borderRadius: 999,
        border: "1px solid rgba(255,255,255,0.10)",
        background: "rgba(255,255,255,0.02)",
        textDecoration: "none",
        fontSize: 13,
        fontWeight: 700,
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
