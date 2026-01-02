
import React from "react";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";

export default function EthicalAI() {
  return (
    <Section
      title="Ethical AI commitment"
      subtitle="Designed to reduce harm, avoid misuse, and protect vulnerable users."
    >
      <Card className="soft">
        <ul className="list">
          <li>Bias-aware improvement approach.</li>
          <li>Focus on wellbeing and safe intervention.</li>
          <li>Respectful defaults: protect without overreach.</li>
        </ul>
      </Card>
    </Section>
  );
}
