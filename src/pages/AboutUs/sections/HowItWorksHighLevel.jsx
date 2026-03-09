import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../../routes/routes";

export default function HowItWorksHighLevel() {
  return (
    <section className="container section">
      <Header
        k="How It Works"
        t="How CensorX works in a simple way"
        d="CensorX is designed to work quietly in the background, detect harmful situations quickly, and respond in real time — without turning normal digital use into something stressful."
      />

      <div style={flowWrap()}>
        <Step n="1" title="Runs quietly in the background">
          CensorX stays active while apps are being used normally, so protection
          does not depend on someone remembering to open it every time.
        </Step>

        <Step n="2" title="Looks for harmful patterns">
          It checks for risky signals such as harassment, bullying, hate, explicit
          material, and disturbing visuals.
        </Step>

        <Step n="3" title="AI evaluates the level of risk">
          The system quickly understands whether the situation is mild, serious,
          or urgent and prepares the right response.
        </Step>

        <Step n="4" title="Responds instantly">
          Based on the level of risk, CensorX can warn, blur, block, or notify —
          depending on the safety setup being used.
        </Step>

        <Step n="5" title="Protection with privacy in mind">
          The goal is safety without unnecessary storage, giving users protection
          while respecting private digital activity.
        </Step>
      </div>

      <div
        style={{
          marginTop: 18,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <NavLink
          to={ROUTES.CONTACT}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "12px 18px",
            borderRadius: 999,
            background: "linear-gradient(90deg, rgba(50,178,169,.95), rgba(35,127,121,.95))",
            color: "#001110",
            fontWeight: 800,
            fontSize: 14,
            boxShadow: "0 10px 24px rgba(50,178,169,.18)",
          }}
        >
          Contact Us
        </NavLink>
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

function Step({ n, title, children }) {
  return (
    <div style={step()}>
      <div style={num()}>{n}</div>
      <div>
        <div style={{ fontWeight: 900, fontSize: 15.5, color: "var(--text)" }}>{title}</div>
        <div
          style={{
            marginTop: 8,
            opacity: 0.88,
            lineHeight: 1.75,
            color: "var(--muted)",
            fontSize: "clamp(13.5px, 2vw, 15px)",
          }}
        >
          {children}
        </div>
      </div>
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

const flowWrap = () => ({
  display: "grid",
  gap: 14,
});

const step = () => ({
  display: "grid",
  gridTemplateColumns: "44px 1fr",
  gap: 14,
  borderRadius: 22,
  padding: "clamp(16px, 2.5vw, 20px)",
  background: "linear-gradient(180deg, rgba(7,25,24,0.78), rgba(0,0,0,0.40))",
  border: "1px solid rgba(255,255,255,0.08)",
  boxShadow: "0 18px 50px rgba(0,0,0,0.28)",
  alignItems: "start",
});

const num = () => ({
  width: 40,
  height: 40,
  borderRadius: 14,
  display: "grid",
  placeItems: "center",
  fontWeight: 900,
  color: "var(--text)",
  background: "rgba(50,178,169,0.14)",
  border: "1px solid rgba(50,178,169,0.24)",
});