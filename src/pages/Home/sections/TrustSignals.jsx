
import React from "react";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";

export default function TrustSignals() {
  return (
    <Section title="Trust & ethics" subtitle="Safety only works when users trust it.">
      <Card className="soft">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12 }}>
          <Item title="On-device processing" text="Designed so sensitive content doesn’t need to leave your phone." />
          <Item title="Consent-driven" text="Permissions are explained clearly and used only for protection." />
          <Item title="Ethical AI" text="Built to reduce harm, avoid misuse, and protect vulnerable users." />
        </div>
      </Card>
    </Section>
  );
}

function Item({ title, text }) {
  return (
    <div style={{ padding: 12, borderRadius: 16, border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.03)" }}>
      <div style={{ fontWeight: 900 }}>{title}</div>
      <div style={{ color: "var(--muted2)", marginTop: 6, lineHeight: 1.6 }}>{text}</div>
    </div>
  );
}
