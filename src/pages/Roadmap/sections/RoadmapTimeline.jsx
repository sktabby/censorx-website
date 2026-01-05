
import React from "react";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";

export default function RoadmapTimeline() {
  const items = [
    { t: "Multi-language support", d: "Improve coverage across diverse languages and slang." },
    { t: "Audio harassment detection", d: "Extend protection to voice-based abuse (future phase)." },
    { t: "Cross-platform expansion", d: "Beyond Android: broader device coverage over time." },
 
    { t: "Continuous AI improvement", d: "Refine models with careful evaluation and guardrails." },
  ];

  return (
    <Section
      title="Roadmap"
      subtitle="Future vision designed to scale ethically and responsibly."
    >
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 14 }}>
        {items.map((x) => (
          <Card key={x.t} className="soft">
            <div style={{ fontWeight: 900 }}>{x.t}</div>
            <p className="p">{x.d}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
