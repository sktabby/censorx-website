
import React from "react";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";

export default function ForIndividuals() {
  return (
    <Section
      title="For Individuals"
      subtitle="Self-protection for focus, wellbeing, and peace of mind."
    >
      <Card className="soft">
        <ul className="list">
          <li>Reduce harassment exposure across apps.</li>
          <li>Control what you see with customizable sensitivity.</li>
          <li>Improve digital wellbeing with fewer unwanted triggers.</li>
        </ul>
      </Card>
    </Section>
  );
}
