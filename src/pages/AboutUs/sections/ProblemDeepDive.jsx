import React, { useState } from "react";

export default function ProblemDeepDive() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="container section">
      <Header
        k="🧠 Problem Statement"
        t="The internet moves fast — harm reaches kids faster"
        d="Cyberbullying, explicit content, and stranger contact have scaled globally. The biggest issue is not that parents don’t care — it’s that manual protection can’t keep up."
      />

      <div style={single()}>
        <div style={card()}>
          <div style={{ fontWeight: 900, fontSize: 15, marginBottom: 8 }}>
            What’s happening (and why it matters)
          </div>

          <p style={para()}>
            Online harm today doesn’t arrive in one form — it stacks. Cyberbullying now comes from
            anonymous accounts, group chats, gaming lobbies, and public comments. Explicit content can
            appear unexpectedly via forwards, spam, pop-ups, or misleading links — often without the
            child searching for it. Stranger contact is also easier than ever on games and social platforms,
            where “friendly” chats can quickly shift into manipulation or coercion. Over time, repeated exposure
            can impact mental health: anxiety, isolation, sleep issues, low confidence, and trauma.
            {!expanded ? (
              <>
                {" "}
                <span style={{ opacity: 0.75 }}>
                  Traditional protections lag behind—manual monitoring isn’t 24/7, blanket app blocks backfire,
                  reporting is reactive, and simple keyword filters miss slang, coded language, and image-based content.
                </span>
              </>
            ) : (
              <>
                <span style={{ display: "block", marginTop: 10, opacity: 0.9 }}>
                  The hard truth: most “solutions” react after harm happens. Parents can’t watch every screen,
                  banning apps pushes kids to secret usage, and platform reporting systems move too slowly. Even
                  advanced filters fail when content is visual, contextual, or disguised in slang. That’s why the goal
                  isn’t banning the internet — it’s enabling safer use in real-time, without invading dignity or trust.
                </span>
              </>
            )}
          </p>

          <div style={{ marginTop: 12, display: "flex" }}>
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
    <div style={{ maxWidth: 950, marginBottom: 14 }}>
      <div style={kicker()}>{k}</div>
      <h2 className="h2" style={{ marginTop: 10 }}>
        {t}
      </h2>
      <p className="p" style={{ marginTop: 10, opacity: 0.85 }}>
        {d}
      </p>
    </div>
  );
}

const kicker = () => ({
  display: "inline-flex",
  padding: "7px 12px",
  borderRadius: 999,
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.08)",
  fontSize: 12,
  fontWeight: 800,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
});

const single = () => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: 14,
});

const para = () => ({
  margin: 0,
  opacity: 0.86,
  fontSize: "clamp(13px, 3.5vw, 14.5px)",
  lineHeight: 1.75,
});

const readMoreBtn = () => ({
  appearance: "none",
  border: "1px solid rgba(255,255,255,0.14)",
  background: "rgba(255,255,255,0.04)",
  color: "rgba(255,255,255,0.92)",
  padding: "9px 12px",
  borderRadius: 999,
  fontWeight: 800,
  fontSize: 13,
  cursor: "pointer",
  transition: "transform 120ms ease, background 120ms ease, border 120ms ease",
});

const card = () => ({
  borderRadius: 20,
  padding: "clamp(14px, 2.2vw, 18px)",
  background: "rgba(18,18,22,0.75)",
  border: "1px solid rgba(255,255,255,0.08)",
  boxShadow: "0 14px 44px rgba(0,0,0,0.25)",
});
