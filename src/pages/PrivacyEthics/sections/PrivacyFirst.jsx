
import React from "react";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";

export default function PrivacyFirst() {
  return (
    <Section
      title="Privacy-first design"
      subtitle="If safety breaks privacy, users won’t trust it. CensorX is built with trust as a feature."
    >
      <Card className="soft">
        <ul className="list">
          <li>No message storage by default.</li>
          <li>No third-party sharing or selling.</li>
          <li>Designed for local processing wherever possible.</li>
          <li>Transparent and minimal permissions.</li>
        </ul>
      </Card>
    </Section>
  );
}
