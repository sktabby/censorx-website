
import React from "react";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";

export default function WhatNext() {
  return (
    <Section
      title="What’s next"
      subtitle="A roadmap to scale responsibly."
    >
      <Card className="soft">
        <ul className="list">
          <li>Model improvement with bias-aware evaluation.</li>
          <li>Safer user controls and permission transparency.</li>
          <li>Performance tuning and device compatibility.</li>
        </ul>
      </Card>
    </Section>
  );
}
