
import React from "react";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";

export default function Troubleshooting() {
  return (
    <Section
      title="Troubleshooting"
      subtitle="Quick fixes for common setup issues."
    >
      <Card className="soft">
        <ul className="list">
          <li>If protection isn’t triggering, confirm permissions are enabled.</li>
          <li>Restart the app once after granting accessibility/notification access.</li>
          <li>Check battery optimization settings (some phones kill background services).</li>
          <li>Use a small set of test messages to validate detection behavior.</li>
        </ul>
      </Card>
    </Section>
  );
}
