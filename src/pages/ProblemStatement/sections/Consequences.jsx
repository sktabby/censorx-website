
import React from "react";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";

export default function Consequences() {
  return (
    <Section
      title="Why this cannot be ignored"
      subtitle="The impact is not just digital — it affects mental wellbeing, confidence, and safety."
    >
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 14 }}>
        <Card className="soft">
          <div style={{ fontWeight: 900 }}>Mental health stress</div>
          <p className="p">Harassment can cause anxiety, fear, and withdrawal — especially in teens.</p>
        </Card>
        <Card className="soft">
          <div style={{ fontWeight: 900 }}>Normalization of harm</div>
          <p className="p">Repeated exposure can make abusive behavior feel “normal”.</p>
        </Card>
        <Card className="soft">
          <div style={{ fontWeight: 900 }}>Safety risks</div>
          <p className="p">Unwanted contact and coercion can escalate beyond the screen.</p>
        </Card>
      </div>
    </Section>
  );
}
