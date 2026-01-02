
import React from "react";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";

export default function InstallSteps() {
  return (
    <Section
      title="Installation steps"
      subtitle="Simple onboarding for evaluators."
    >
      <Card className="soft">
        <ol className="list">
          <li>Download the APK.</li>
          <li>Enable “Install from unknown sources” if prompted.</li>
          <li>Open CensorX and choose your role.</li>
          <li>Grant permissions only when you understand why they are needed.</li>
          <li>Run a quick test: open a chat app and try sample messages.</li>
        </ol>
      </Card>
    </Section>
  );
}
