
import React from "react";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";

export default function WhyTraditionalFails() {
  return (
    <Section
      title="Why traditional solutions fail"
      subtitle="Reporting and manual blocking are too slow for real-time harm."
    >
      <Card className="soft">
        <ul className="list">
          <li><b>Reactive by design:</b> harm happens first, action happens later.</li>
          <li><b>Manual burden:</b> users must block/report continuously.</li>
          <li><b>Low context:</b> keyword filters often miss nuance and intent.</li>
          <li><b>No unified layer:</b> each app behaves differently; protection isn’t consistent.</li>
        </ul>
      </Card>
    </Section>
  );
}
