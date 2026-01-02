
import React from "react";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";

export default function ConsentPermissions() {
  return (
    <Section
      title="Consent-driven permissions"
      subtitle="Users should understand what’s being accessed and why."
    >
      <Card className="soft">
        <ul className="list">
          <li>Each permission is explained in simple language.</li>
          <li>Permissions are used only to deliver protection features.</li>
          <li>Users can disable features and change settings anytime.</li>
        </ul>
      </Card>
    </Section>
  );
}
