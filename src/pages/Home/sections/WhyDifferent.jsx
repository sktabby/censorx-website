
import React from "react";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";

export default function WhyDifferent() {
  const points = [
    { t: "No app modification", d: "Works as an additional safety layer without changing other apps." },
    { t: "Real-time actions", d: "Detect → assess → respond instantly where the harm happens." },
    { t: "Privacy-first defaults", d: "Minimizes exposure and increases trust from day one." },
    { t: "Cross-platform thinking", d: "Built to grow beyond a single platform or use-case." },
  ];

  return (
    <Section title="Why CensorX is different" subtitle="Built like a product — not just a detector.">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 14 }}>
        {points.map((p) => (
          <Card key={p.t} className="soft">
            <div style={{ fontWeight: 900 }}>{p.t}</div>
            <div style={{ color: "var(--muted)", marginTop: 8, lineHeight: 1.65 }}>{p.d}</div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
