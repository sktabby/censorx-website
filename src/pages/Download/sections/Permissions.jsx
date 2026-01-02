
import React from "react";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";

export default function Permissions() {
  return (
    <Section
      title="Required permissions (explained)"
      subtitle="We explain permissions clearly — because trust matters."
    >
      <Card className="soft">
        <ul className="list">
          <li><b>Accessibility / overlay (if used):</b> to detect and protect content on-screen.</li>
          <li><b>Notifications (optional):</b> to detect risky incoming messages and trigger alerts.</li>
          <li><b>Network (optional):</b> only if your prototype uses remote checks or updates.</li>
        </ul>
        <p className="p" style={{ marginTop: 12 }}>
          Update this list based on your actual APK permissions.
        </p>
      </Card>
    </Section>
  );
}
