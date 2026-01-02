
import React from "react";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";

export default function TRLStatus() {
  return (
    <Section
      title="Technology Readiness"
      subtitle="Clear maturity status builds credibility."
    >
      <Card className="soft">
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
          <kbd className="pill">Current TRL</kbd>
          <div style={{ fontWeight: 900, fontSize: 18 }}>TRL 6 (prototype demonstrated)</div>
        </div>

        <hr className="sep" />

        <ul className="list">
          <li><b>Working now:</b> real-time detection + basic safety actions.</li>
          <li><b>In progress:</b> better personalization, smarter alert thresholds.</li>
          <li><b>Planned:</b> multi-language + richer institutional use-cases.</li>
        </ul>
      </Card>
    </Section>
  );
}
