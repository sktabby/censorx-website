
import React from "react";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";

export default function WhatIsCensorX() {
  return (
    <Section
      title="What is CensorX?"
      subtitle="A real-time AI-powered protection layer that reduces exposure to harassment and harmful content."
    >
      <Card className="soft">
        <p className="p">
          CensorX is built to work quietly in the background and respond immediately when risky content appears —
          so users don’t have to constantly “fight” the internet themselves.
        </p>
        <ul className="list">
          <li>Created to close the gap between exposure and protection.</li>
          <li>Focuses on prevention and wellbeing, not blame.</li>
          <li>Designed for parents, children, individuals — and future institutional use.</li>
        </ul>
      </Card>
    </Section>
  );
}
