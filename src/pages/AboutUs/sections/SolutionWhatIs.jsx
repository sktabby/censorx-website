import React from "react";

export default function SolutionWhatIs() {
  return (
    <section className="container section">
      <Header
        k="Solution"
        t="What CensorX is really trying to solve"
        d="CensorX is a real-time digital safety layer designed to reduce exposure to harmful content and harassment while keeping the online experience normal, usable, and respectful."
      />

      <div style={grid()}>
        <Card title="A protection layer, not a restriction layer">
          CensorX is designed to step in only when risk appears. It is not about
          blocking everything — it is about making digital spaces safer without
          making daily use frustrating.
        </Card>

        <Card title="Built for the moment harm appears">
          Many tools respond after a report. CensorX focuses on the moment of
          exposure, when timely action can matter most.
        </Card>

        <Card title="Made for families, individuals, and safer usage">
          The idea is simple: help people stay protected while still allowing
          healthy, normal use of apps, platforms, and conversations.
        </Card>

        <Card title="Privacy-first by design">
          Safety should not come at the cost of dignity. CensorX is built around
          responsible detection, minimal intrusion, and trust-centered protection.
        </Card>
      </div>

      <div style={{ marginTop: 16 }}>
        <WideCard
          title="Prevention, not fear"
          text="CensorX is meant to guide, protect, and reduce harm — not to shame users, create panic, or turn digital life into constant surveillance. The goal is safer digital behavior with more confidence and less exposure."
        />
      </div>
    </section>
  );
}

function Header({ k, t, d }) {
  return (
    <div style={{ maxWidth: 920, marginBottom: 16 }}>
      <div style={kicker()}>{k}</div>
      <h2 className="h2" style={{ marginTop: 12 }}>{t}</h2>
      <p className="p" style={{ marginTop: 10, opacity: 0.88, maxWidth: 780 }}>{d}</p>
    </div>
  );
}

function Card({ title, children }) {
  return (
    <div style={card()}>
      <div style={{ fontWeight: 900, fontSize: 16, color: "var(--text)" }}>{title}</div>
      <p
        style={{
          marginTop: 10,
          opacity: 0.88,
          fontSize: "clamp(13.5px, 2vw, 15px)",
          lineHeight: 1.75,
          color: "var(--muted)",
        }}
      >
        {children}
      </p>
    </div>
  );
}

function WideCard({ title, text }) {
  return (
    <div style={card()}>
      <div style={{ fontWeight: 900, fontSize: 16, color: "var(--text)" }}>{title}</div>
      <p
        style={{
          marginTop: 10,
          opacity: 0.9,
          lineHeight: 1.8,
          color: "var(--muted)",
          fontSize: "clamp(14px, 2vw, 15.5px)",
        }}
      >
        {text}
      </p>
    </div>
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

const grid = () => ({
  display: "grid",
  gap: 14,
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
});

const card = () => ({
  borderRadius: 24,
  padding: "clamp(18px, 3vw, 24px)",
  background: "linear-gradient(180deg, rgba(7,25,24,0.78), rgba(0,0,0,0.40))",
  border: "1px solid rgba(255,255,255,0.08)",
  boxShadow: "0 18px 50px rgba(0,0,0,0.28)",
});