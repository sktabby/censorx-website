
import React from "react";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";

export default function ForParents() {
  return (
    <Section
      title="For Parents"
      subtitle="Protect without spying. Get alerts only when it matters."
    >
      <Card className="soft">
        <ul className="list">
          <li>Receive real-time alerts for high-risk situations.</li>
          <li>Set protection levels based on child age and maturity.</li>
          <li>Encourage healthy online habits without constant monitoring.</li>
        </ul>
      </Card>
    </Section>
  );
}
