
import React from "react";
import Section from "../../components/ui/Section";
import Card from "../../components/ui/Card";

export default function Disclaimer() {
  return (
    <Section
      title="Disclaimer"
      subtitle="CensorX is a prototype/evaluation build unless stated otherwise."
    >
      <Card className="soft">
        <ul className="list">
          <li>Detection is probabilistic and may produce false positives/negatives.</li>
          <li>Results depend on device performance, permissions, and app environment.</li>
          <li>Use responsibly and report issues through the Contact page.</li>
        </ul>
      </Card>
    </Section>
  );
}
