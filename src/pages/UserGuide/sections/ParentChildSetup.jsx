
import React from "react";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";

export default function ParentChildSetup() {
  return (
    <Section
      title="Parent–child setup"
      subtitle="Protect children with minimal friction."
    >
      <Card className="soft">
        <ul className="list">
          <li>Parent enables protection and receives alerts when needed.</li>
          <li>Child experience stays simple: no complex settings required.</li>
          <li>Use the pairing method your app supports (code / QR / device link).</li>
        </ul>
      </Card>
    </Section>
  );
}
