
import React from "react";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";

export default function ProblemHighlight() {
  return (
    <Section
      title="The internet changed. Safety didn’t."
      subtitle="Harassment, explicit content exposure, and unwanted interactions can happen instantly — especially to minors."
    >
      <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 14 }}>
        <Card style={{ gridColumn: "span 4" }} className="soft">
          <h3 style={{ margin: 0 }}>Real-time harm</h3>
          <p className="p">Toxic messages and explicit content can appear unexpectedly and spread fast.</p>
        </Card>
        <Card style={{ gridColumn: "span 4" }} className="soft">
          <h3 style={{ margin: 0 }}>Mental health impact</h3>
          <p className="p">Online harassment can trigger anxiety, fear, isolation, and long-term distress.</p>
        </Card>
        <Card style={{ gridColumn: "span 4" }} className="soft">
          <h3 style={{ margin: 0 }}>Traditional tools fail</h3>
          <p className="p">Reporting is slow, blocking is manual, and filters often miss context.</p>
        </Card>
      </div>

      <div style={{ marginTop: 14, color: "var(--muted2)", fontSize: 13 }}>
        Tip: add one verified stat later (optional).
      </div>
    </Section>
  );
}
