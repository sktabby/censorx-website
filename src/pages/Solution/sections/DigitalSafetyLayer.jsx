
import React from "react";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";

export default function DigitalSafetyLayer() {
  return (
    <Section
      title="A digital safety layer"
      subtitle="Not a replacement for apps — an added shield on top of what you already use."
    >
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14 }}>
        <Card className="soft">
          <div style={{ fontWeight: 900 }}>Works with daily usage</div>
          <p className="p">No need to change habits or abandon platforms.</p>
        </Card>
        <Card className="soft">
          <div style={{ fontWeight: 900 }}>Responds in the moment</div>
          <p className="p">Reduces exposure before content spreads or escalates.</p>
        </Card>
        <Card className="soft">
          <div style={{ fontWeight: 900 }}>Built for trust</div>
          <p className="p">Privacy-first defaults and transparent permission use.</p>
        </Card>
      </div>
    </Section>
  );
}
