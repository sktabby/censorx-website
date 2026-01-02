
import React from "react";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";

export default function Vision() {
  return (
    <Section
      title="Future vision"
      subtitle="A safer internet where protection is normal — and privacy is respected."
    >
      <Card className="soft">
        <ul className="list">
          <li>Protection that adapts to people, not just platforms.</li>
          <li>Tools for families, educators, and institutions (optional future).</li>
          <li>Ethical safeguards that prevent misuse and overreach.</li>
        </ul>
      </Card>
    </Section>
  );
}
