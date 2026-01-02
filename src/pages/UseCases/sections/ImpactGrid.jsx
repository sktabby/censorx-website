
import React from "react";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";

export default function ImpactGrid() {
  const items = [
    { t: "Child safety", d: "Reduce unexpected exposure and risky interactions." },
    { t: "Cyberbullying prevention", d: "Detect toxicity early and respond fast." },
    { t: "Mental health support", d: "Reduce triggers and harmful content exposure." },
    { t: "Educational environments", d: "Safer digital learning and communication spaces." },
    { t: "Family digital wellness", d: "Protection that supports healthier online habits." },
  ];

  return (
    <Section
      title="Use cases & impact"
      subtitle="Real-world relevance across daily life and learning environments."
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
