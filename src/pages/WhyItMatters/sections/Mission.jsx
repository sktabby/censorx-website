
import React from "react";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";

export default function Mission() {
  return (
    <Section
      title="Why CensorX matters"
      subtitle="A safer internet is possible — but only if protection is real-time and trustworthy."
    >
      <Card className="soft">
        <ul className="list">
          <li>Empowers parents without turning life into surveillance.</li>
          <li>Protects mental wellbeing by reducing harmful exposure.</li>
          <li>Promotes ethical technology that respects privacy and consent.</li>
        </ul>
      </Card>
    </Section>
  );
}
