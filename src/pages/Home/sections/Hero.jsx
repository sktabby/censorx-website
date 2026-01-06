
import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../../routes/routes";
import Card from "../../../components/ui/Card";
import Button from "../../../components/ui/Button";
import CensorXMobileDemo from "../../../components/ui/CensorXMobileDemo";

export default function Hero() {
  return (
    <section style={{ padding: "34px 0 12px" }}>
      <div className="container grid2">
        <div className="pageHeader">
          <div className="badgeRow">
            <kbd className="pill">Product of ATA minds</kbd>

          </div>

          <h1 className="h1">
            Real-Time AI Protection Against Online Harassment & Harmful Content
          </h1>

          <p className="p">
            CensorX acts as a digital safety layer that detects risky content instantly and responds in the moment.
          </p>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 16 }}>
            <NavLink to={ROUTES.DOWNLOAD}>
              <Button variant="primary">Download APK</Button>
            </NavLink>
            <Button
              variant="outline"
              onClick={() => {
                const el = document.getElementById("how-it-works");
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              How It Works
            </Button>

          </div>
        </div>

        <Card className="soft">
          <CensorXMobileDemo />
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
