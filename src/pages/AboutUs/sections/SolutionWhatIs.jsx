import React from "react";

export default function SolutionWhatIs() {
  return (
    <section className="container section">
      <Header
        k="🛡️ Solution"
        t="What is CensorX?"
        d="CensorX is a real-time AI-powered safety layer that reduces exposure to harmful online content and harassment — especially for minors — while keeping normal app usage smooth."
      />

      <div style={grid()}>
        <Card title="Definition of CensorX">
          CensorX is a digital protection layer that reacts in the moment. It doesn’t wait for a report,
          and it doesn’t rely on parents constantly checking chats. It prevents harmful exposure as it happens.
        </Card>

        <Card title="Why it was created">
          Existing tools either block everything or do nothing until after the damage.
          CensorX was created to protect during the moment of exposure — when it matters most.
        </Card>

        <Card title="What gap it fills">
          Not just parental control. Not just blocking apps. Not just after-the-fact reporting.
          CensorX focuses on real-time prevention, safety, and healthier digital habits.
        </Card>

        <Card title="Digital safety layer mindset">
          The goal is to keep the internet usable while reducing shock, harm, and risk.
          It’s designed to protect without turning life into surveillance.
        </Card>
      </div>

      <div style={{ marginTop: 16 }}>
        <WideCard
          title="Prevention, not punishment"
          text="CensorX is built to guide and protect — not shame, scare, or punish. It helps families create safer digital boundaries while respecting privacy, dignity, and trust."
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

function WideCard({ title, text }) {
  return (
    <div style={card()}>
      <div style={{ fontWeight: 900, fontSize: 15 }}>{title}</div>
      <p style={{ marginTop: 10, opacity: 0.85, lineHeight: 1.7 }}>{text}</p>
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
