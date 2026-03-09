import React, { useState } from "react";

export default function ProblemDeepDive() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="container section">
      <Header
        k="Problem"
        t="Why digital safety needs to be proactive"
        d="Online harm is no longer rare or limited. It can appear in chats, reels, comments, gaming spaces, and shared media — often before a child or parent even realizes it."
      />

      <div style={single()}>
        <div style={card()}>
          <div style={{ fontWeight: 900, fontSize: 16, marginBottom: 10, color: "var(--text)" }}>
            What families are dealing with today
          </div>

          <p style={para()}>
            Harmful online experiences rarely come in just one form. A child may
            face bullying in a group chat, explicit media through a forwarded post,
            or unsafe conversations that start casually and become manipulative.
            The deeper issue is speed — harmful content reaches people faster than
            manual protection can respond.
            {!expanded ? (
              <>
                {" "}
                <span style={{ opacity: 0.82 }}>
                  Parents cannot monitor every screen all day, and traditional
                  tools often either over-block or react too late.
                </span>
              </>
            ) : (
              <>
                <span style={{ display: "block", marginTop: 12, opacity: 0.9 }}>
                  Many existing solutions are still too rigid. Blocking everything
                  can create frustration and secret usage, while reporting systems
                  usually act only after harm has already happened. Simple filters
                  also struggle with slang, context, memes, screenshots, and
                  image-based abuse. That is why modern digital safety must work
                  in the moment — quietly, responsibly, and with far better timing.
                </span>
              </>
            )}
          </p>

          <div style={{ marginTop: 14, display: "flex", flexWrap: "wrap", gap: 10 }}>
            <Tag>Cyberbullying</Tag>
            <Tag>Explicit content</Tag>
            <Tag>Stranger contact</Tag>
            <Tag>Real-time risk</Tag>
          </div>

          <div style={{ marginTop: 16, display: "flex" }}>
            <button
              type="button"
              onClick={() => setExpanded((s) => !s)}
              style={readMoreBtn()}
            >
              {expanded ? "Show less" : "Read more"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Header({ k, t, d }) {
  return (
    <div style={{ maxWidth: 920, marginBottom: 16 }}>
      <div style={kicker()}>{k}</div>
      <h2 className="h2" style={{ marginTop: 12 }}>
        {t}
      </h2>
      <p className="p" style={{ marginTop: 10, opacity: 0.88, maxWidth: 780 }}>
        {d}
      </p>
    </div>
  );
}

function Tag({ children }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "8px 12px",
        borderRadius: 999,
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        fontSize: 12,
        fontWeight: 700,
        color: "var(--muted)",
      }}
    >
      {children}
    </span>
  );
}

const kicker = () => ({
  display: "inline-flex",
  padding: "7px 12px",
  borderRadius: 999,
  background: "rgba(50,178,169,0.10)",
  border: "1px solid rgba(50,178,169,0.18)",
  fontSize: 12,
  fontWeight: 800,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "var(--c4)",
});

const single = () => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: 14,
});

const para = () => ({
  margin: 0,
  opacity: 0.9,
  fontSize: "clamp(14px, 2.5vw, 15.5px)",
  lineHeight: 1.85,
  color: "var(--muted)",
});

const readMoreBtn = () => ({
  appearance: "none",
  border: "1px solid rgba(50,178,169,0.22)",
  background: "rgba(50,178,169,0.08)",
  color: "var(--text)",
  padding: "10px 14px",
  borderRadius: 999,
  fontWeight: 800,
  fontSize: 13,
  cursor: "pointer",
  transition: "transform 120ms ease, background 120ms ease, border 120ms ease",
});

const card = () => ({
  borderRadius: 24,
  padding: "clamp(18px, 3vw, 24px)",
  background: "linear-gradient(180deg, rgba(7,25,24,0.78), rgba(0,0,0,0.40))",
  border: "1px solid rgba(255,255,255,0.08)",
  boxShadow: "0 18px 50px rgba(0,0,0,0.28)",
});