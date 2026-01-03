import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../../routes/routes";

export default function HowItWorksHighLevel() {
  return (
    <section className="container section">
      <Header
        k="⚙️ How CensorX Works"
        t="High-level flow — simple, fast, privacy-first"
        d="We explain how CensorX works without technical jargon. The focus is trust: it runs quietly, detects harmful content, takes action instantly, and avoids external storage."
      />

      <div style={flowWrap()}>
        <Step n="1" title="Runs in the background">
          CensorX stays active while you use apps normally. There’s no need to “start” it every time.
        </Step>
        <Step n="2" title="Detects harmful text & images">
          It watches for risky patterns like harassment, bullying, hate, explicit content, and disturbing visuals.
        </Step>
        <Step n="3" title="AI checks risk instantly">
          The system quickly assesses severity and decides what safety response is needed.
        </Step>
        <Step n="4" title="Instant safety action">
          Depending on the level, CensorX can <b>Block</b>, <b>Blur</b>, <b>Warn</b>, or <b>Notify</b> (if enabled).
        </Step>
        <Step n="5" title="No data stored externally">
          The goal is protection without turning your private activity into stored server data.
        </Step>
      </div>

      <div style={{ marginTop: 18, display: "flex", gap: 12, flexWrap: "wrap" }}>
        <NavLink to={ROUTES.HOW_IT_WORKS} className="navA" style={{ textDecoration: "none" }}>
          View “How it works” page →
        </NavLink>
        <NavLink to={ROUTES.PRIVACY} className="navA" style={{ textDecoration: "none" }}>
          See Privacy & Ethics →
        </NavLink>
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

function Step({ n, title, children }) {
  return (
    <div style={step()}>
      <div style={num()}>{n}</div>
      <div>
        <div style={{ fontWeight: 900, fontSize: 15 }}>{title}</div>
        <div style={{ marginTop: 8, opacity: 0.85, lineHeight: 1.7 }}>{children}</div>
      </div>
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

const flowWrap = () => ({
  display: "grid",
  gap: 12,
});

const step = () => ({
  display: "grid",
  gridTemplateColumns: "44px 1fr",
  gap: 12,
  borderRadius: 20,
  padding: "clamp(14px, 2.2vw, 18px)",
  background: "rgba(18,18,22,0.75)",
  border: "1px solid rgba(255,255,255,0.08)",
  boxShadow: "0 14px 44px rgba(0,0,0,0.25)",
});

const num = () => ({
  width: 40,
  height: 40,
  borderRadius: 14,
  display: "grid",
  placeItems: "center",
  fontWeight: 900,
  background: "rgba(79,195,247,0.16)",
  border: "1px solid rgba(79,195,247,0.25)",
});
