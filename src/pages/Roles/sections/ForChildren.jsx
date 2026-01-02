
import React from "react";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";

export default function ForChildren() {
  return (
    <Section
      title="For Children"
      subtitle="Silent protection with minimal disruption."
    >
      <Card className="soft">
        <ul className="list">
          <li>No login flow for kids (optional setup via parent).</li>
          <li>Protection runs quietly in the background.</li>
          <li>Helps reduce exposure to toxic chats and unsafe media.</li>
        </ul>
      </Card>
    </Section>
  );
}
