
import React from "react";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";

export default function RealWorld() {
  return (
    <Section
      title="Real-world scenarios"
      subtitle="Where protection makes a meaningful difference."
    >
      <Card className="soft">
        <ul className="list">
          <li>Kids receiving harmful messages in chats or gaming communities.</li>
          <li>Students exposed to explicit links or violent media.</li>
          <li>Individuals facing harassment in public comment sections.</li>
          <li>Families seeking balance between safety and privacy.</li>
        </ul>
      </Card>
    </Section>
  );
}
