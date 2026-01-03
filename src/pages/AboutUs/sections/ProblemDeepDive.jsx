import React from "react";

export default function ProblemDeepDive() {
  return (
    <section className="container section">
      <Header
        k="🧠 Problem Statement"
        t="The internet moves fast — harm reaches kids faster"
        d="Cyberbullying, explicit content, and stranger contact have scaled globally. The biggest issue is not that parents don’t care — it’s that manual protection can’t keep up."
      />

      <div style={grid()}>
        <Card title="Global rise in cyberbullying">
          Harassment is no longer limited to school circles. It comes from anonymous accounts,
          group chats, gaming lobbies, and public comment sections — and it often targets the most
          vulnerable moments.
        </Card>

        <Card title="Unexpected exposure to explicit content">
          Inappropriate text and visuals can appear suddenly through forwards, spam, pop-ups, or
          misleading links. Many times the child didn’t search for it — it found them.
        </Card>

        <Card title="Stranger contact with minors">
          In games and social platforms, strangers can initiate contact easily. Conversations may start
          harmless and then shift into manipulation, grooming, or coercion.
        </Card>

        <Card title="Mental health consequences">
          Continuous exposure can lead to anxiety, isolation, sleep issues, reduced confidence,
          and long-term trauma. For some, the effects are immediate and severe.
        </Card>
      </div>

      <div style={{ marginTop: 18, display: "grid", gap: 14 }}>
        <WideCard
          title="Why traditional solutions fail"
          bullets={[
            "Manual monitoring is impossible 24/7.",
            "Blocking entire apps often backfires and pushes kids to secret usage.",
            "Reporting systems are reactive — harm happens first, action happens later.",
            "Simple keyword filters miss slang, coded language, and image-based content.",
          ]}
        />
        <WideCard
          title="Why the problem cannot be ignored"
          bullets={[
            "Digital spaces are now part of everyday life for minors and adults alike.",
            "The goal is not to ban the internet — the goal is to create safer usage.",
            "Protection must work in real-time, without invading personal dignity.",
          ]}
        />
      </div>
    </section>
  );
}

function Header({ k, t, d }) {
  return (
    <div style={{ maxWidth: 950, marginBottom: 14 }}>
      <div style={kicker()}>{k}</div>
      <h2 className="h2" style={{ marginTop: 10 }}>{t}</h2>
      <p className="p" style={{ marginTop: 10, opacity: 0.85 }}>{d}</p>
    </div>
  );
}

function Card({ title, children }) {
  return (
    <div style={card()}>
      <div style={{ fontWeight: 900, fontSize: 15 }}>{title}</div>
      <p style={{ marginTop: 8, opacity: 0.82, fontSize: 14, lineHeight: 1.6 }}>{children}</p>
    </div>
  );
}

function WideCard({ title, bullets }) {
  return (
    <div style={card()}>
      <div style={{ fontWeight: 900, fontSize: 15 }}>{title}</div>
      <ul style={{ marginTop: 10, paddingLeft: 18, opacity: 0.85, lineHeight: 1.7 }}>
        {bullets.map((x) => (
          <li key={x} style={{ marginBottom: 6 }}>{x}</li>
        ))}
      </ul>
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

const grid = () => ({
  display: "grid",
  gap: 14,
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
});

const card = () => ({
  borderRadius: 20,
  padding: "clamp(14px, 2.2vw, 18px)",
  background: "rgba(18,18,22,0.75)",
  border: "1px solid rgba(255,255,255,0.08)",
  boxShadow: "0 14px 44px rgba(0,0,0,0.25)",
});
