import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../../routes/routes";

import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";

function Icon({ children }) {
  return (
    <span
      aria-hidden="true"
      style={{
        width: 34,
        height: 34,
        borderRadius: 12,
        display: "grid",
        placeItems: "center",
        background: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.14)",
        boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
      }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        {children}
      </svg>
    </span>
  );
}

export default function ProblemHighlight() {
  const cardBase = {
    padding: 16,
    borderRadius: 18,
    border: "1px solid rgba(255,255,255,0.12)",
    boxShadow: "0 18px 45px rgba(0,0,0,0.35)",
  };

  const heading = {
    margin: 0,
    fontSize: 15,
    fontWeight: 700,
    letterSpacing: "-0.01em",
    lineHeight: 1.2,
  };

  const body = {
    margin: 0,
    marginTop: 8,
    opacity: 0.9,
    lineHeight: 1.55,
    fontSize: 13,
  };

  const stat = {
    marginTop: 10,
    fontSize: 12,
    opacity: 0.9,
    color: "var(--muted2)",
  };

  return (
    <Section
      title="The internet changed. Safety didn’t."
      subtitle="Harassment, explicit exposure, and unwanted contact can happen in seconds — especially to minors."
    >
      <div
        style={{
          display: "grid",
          gap: 12,
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          alignItems: "stretch",
        }}
      >
        {/* CARD 1 */}
        <Card
          className="soft"
          style={{
            ...cardBase,
            background:
              "linear-gradient(180deg, rgba(50,178,169,0.22), rgba(7,25,24,0.85))",
          }}
        >
          <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
            <Icon>
              <path
                d="M12 3l8 4v6c0 5-3.5 8-8 8s-8-3-8-8V7l8-4z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <path
                d="M12 8v5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <path
                d="M12 16h.01"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
            </Icon>

            <div>
              <h3 style={heading}>Harm appears instantly</h3>
              <p style={body}>Toxic + explicit content can pop up without warning.</p>
              <div style={stat}>
                <strong>55%</strong> reported exposure to vulgar/explicit content (2025).
              </div>
            </div>
          </div>
        </Card>

        {/* CARD 2 */}
        <Card
          className="soft"
          style={{
            ...cardBase,
            background:
              "linear-gradient(180deg, rgba(35,127,121,0.20), rgba(0,0,0,0.88))",
          }}
        >
          <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
            <Icon>
              <path
                d="M7 9a5 5 0 0110 0v2a4 4 0 01-4 4h-2a4 4 0 01-4-4V9z"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <path
                d="M10 19h4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <path
                d="M9 12c1.2-1 2.8-1 4 0"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </Icon>

            <div>
              <h3 style={heading}>Strangers reach minors</h3>
              <p style={body}>DMs and game chats create direct access to kids.</p>
              <div style={stat}>
                <strong>75%</strong> of under-16s were contacted by strangers (2025).
              </div>
            </div>
          </div>
        </Card>

        {/* CARD 3 */}
        <Card
          className="soft"
          style={{
            ...cardBase,
            background:
              "linear-gradient(180deg, rgba(7,25,24,0.65), rgba(0,0,0,0.95))",
          }}
        >
          <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
            <Icon>
              <path
                d="M12 21s-7-4.4-7-10a4 4 0 017-2 4 4 0 017 2c0 5.6-7 10-7 10z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <path
                d="M9.2 12.2l1.6 1.6 3.9-3.9"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Icon>

            <div>
              <h3 style={heading}>Mental toll is real</h3>
              <p style={body}>Harassment can fuel anxiety, fear, and isolation.</p>
              <div style={stat}>
                <strong>7.5%</strong> of female victims considered suicide (reported).
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* footer */}
      <div
        style={{
          marginTop: 12,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 10,
          flexWrap: "wrap",
        }}
      >
        <div style={{ fontSize: 12, color: "var(--muted2)", opacity: 0.9 }}>
          Sources: Sky News (2025) •{" "}
          <a
            href="https://childrenofthedigitalage.org/information-guides-for-parents/inappropriate-content/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "inherit", textDecoration: "underline", opacity: 0.95 }}
          >
            Children of the Digital Age
          </a>
        </div>

        <NavLink to={ROUTES.ABOUT} style={{ textDecoration: "none" }}>
          <button
            type="button"
            style={{
              padding: "10px 12px",
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,0.14)",
              background: "rgba(255,255,255,0.06)",
              color: "inherit",
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Read more →
          </button>
        </NavLink>
      </div>
    </Section>
  );
}
