
import React from "react";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";

export default function CustomLevels() {
  return (
    <Section
      title="Customizable protection levels"
      subtitle="Tune sensitivity to match age, comfort, and context."
    >
      <Card className="soft">
        <ul className="list">
          <li>Strict mode for children (recommended).</li>
          <li>Balanced mode for teens and general use.</li>
          <li>Personal mode for individuals with custom toggles.</li>
        </ul>
      </Card>
    </Section>
  );
}
