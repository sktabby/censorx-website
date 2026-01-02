
import React from "react";
import Section from "../../components/ui/Section";
import Card from "../../components/ui/Card";

export default function Terms() {
  return (
    <Section
      title="Terms of Use (Template)"
      subtitle="Replace this text with your real terms before public release."
    >
      <Card className="soft">
        <ul className="list">
          <li>Prototype builds are provided for evaluation purposes.</li>
          <li>Do not use as the only safety measure in high-risk situations.</li>
          <li>You are responsible for complying with local laws and platform policies.</li>
        </ul>
        <p className="p" style={{ marginTop: 12 }}>
          Add details: limitations of liability, acceptable use, termination, updates, etc.
        </p>
      </Card>
    </Section>
  );
}
