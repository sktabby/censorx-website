
import React from "react";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";

export default function PreventionNotPunishment() {
  return (
    <Section
      title="Prevention, not punishment"
      subtitle="The goal is to reduce harm and protect wellbeing — not to shame or police."
    >
      <Card className="soft">
        <ul className="list">
          <li>Minimizes exposure to harmful content early.</li>
          <li>Supports safer digital habits with gentle interventions.</li>
          <li>Prioritizes vulnerable users while respecting privacy.</li>
        </ul>
      </Card>
    </Section>
  );
}
