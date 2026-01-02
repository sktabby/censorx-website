
import React from "react";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";

export default function ContactInfo() {
  return (
    <Section
      title="Contact & feedback"
      subtitle="For evaluation, collaboration, or support."
    >
      <Card className="soft">
        <ul className="list">
          <li><b>Support email:</b> youremail@example.com</li>
          <li><b>Evaluation:</b> share device + test scenario details</li>
          <li><b>Collaboration:</b> research, institutions, partnerships</li>
        </ul>
        <p className="p" style={{ marginTop: 12 }}>
          Replace placeholders with your real contact details.
        </p>
      </Card>
    </Section>
  );
}
