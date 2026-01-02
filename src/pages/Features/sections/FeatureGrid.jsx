
import React from "react";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";

export default function FeatureGrid() {
  const feats = [
    { t: "Harassment detection", d: "Detects toxic, abusive, and threatening language patterns." },
    { t: "NSFW content filtering", d: "Reduces exposure to explicit content and unsafe media." },
    { t: "Brutal/violent detection", d: "Flags disturbing visuals and violent patterns." },
    { t: "Real-time alerts", d: "Notifies guardians when high-risk events occur." },
    { t: "Role-based protection", d: "Different experience for parents, kids, and individuals." },
    { t: "Usage insights (optional)", d: "High-level wellness indicators without reading private content." },
  ];

  return (
    <Section
      title="Features & capabilities"
      subtitle="Everything you need for real-time protection — with privacy-first defaults."
    >
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 14 }}>
        {feats.map((f) => (
          <Card key={f.t} className="soft">
            <div style={{ fontWeight: 900 }}>{f.t}</div>
            <p className="p">{f.d}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
