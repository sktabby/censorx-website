
import React from "react";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";

export default function StepFlow() {
  const steps = [
    { n: "01", t: "Runs in the background", d: "Works quietly without interrupting normal use." },
    { n: "02", t: "Detects risky content", d: "Identifies harassment, explicit, and violent patterns." },
    { n: "03", t: "Assesses risk level", d: "Uses AI to estimate severity and urgency." },
    { n: "04", t: "Takes instant action", d: "Block • Blur • Warn • Notify — based on settings." },
  ];

  return (
    <Section
      title="How CensorX works (high-level)"
      subtitle="Simple, non-technical flow — focused on trust and clarity."
    >
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 14 }}>
        {steps.map((s) => (
          <Card key={s.n} className="soft">
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
              <div style={{ fontWeight: 900 }}>{s.t}</div>
              <kbd className="pill">{s.n}</kbd>
            </div>
            <p className="p">{s.d}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
