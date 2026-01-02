
import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../../routes/routes";
import Card from "../../../components/ui/Card";
import Button from "../../../components/ui/Button";

export default function Hero() {
  return (
    <section style={{ padding: "34px 0 12px" }}>
      <div className="container grid2">
        <div className="pageHeader">
          <div className="badgeRow">
            <kbd className="pill">Privacy-first</kbd>
            <kbd className="pill">On-device</kbd>
            <kbd className="pill">Real-time</kbd>
          </div>

          <h1 className="h1">
            Real-Time AI Protection Against Online Harassment & Harmful Content
          </h1>

          <p className="p">
            CensorX acts as a digital safety layer that detects risky content instantly and responds in the moment —
            without storing your private data.
          </p>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 16 }}>
            <NavLink to={ROUTES.DOWNLOAD}>
              <Button variant="primary">Download APK</Button>
            </NavLink>
            <NavLink to={ROUTES.HOW_IT_WORKS}>
              <Button variant="outline">How It Works</Button>
            </NavLink>
          </div>
        </div>

        <Card className="soft">
          <div style={{ fontWeight: 900, fontSize: 16, marginBottom: 8 }}>
            What CensorX does in seconds
          </div>

          <div style={{ color: "var(--muted)", lineHeight: 1.7 }}>
            • Detects harassment, hate, and toxic language<br />
            • Filters explicit & violent imagery<br />
            • Protects children silently, without disrupting usage<br />
            • Sends parents real-time alerts when needed<br />
          </div>

          <hr className="sep" />

          <div style={{ display: "grid", gap: 10 }}>
            <MiniStat title="Cross-app layer" text="Works as an extra safety shield across apps." />
            <MiniStat title="Fast actions" text="Block • Blur • Warn • Notify — instantly." />
            <MiniStat title="Data stays local" text="No external storage by default." />
          </div>
        </Card>
      </div>
    </section>
  );
}

function MiniStat({ title, text }) {
  return (
    <div style={{ padding: 12, borderRadius: 16, border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.03)" }}>
      <div style={{ fontWeight: 800 }}>{title}</div>
      <div style={{ color: "var(--muted2)", marginTop: 6, lineHeight: 1.5 }}>{text}</div>
    </div>
  );
}
