
import React from "react";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";

export default function SetupSteps() {
  return (
    <Section
      title="How to use CensorX"
      subtitle="A simple onboarding flow that anyone can follow."
    >
      <Card className="soft">
        <ol className="list">
          <li>Install the APK.</li>
          <li>Select your role: Parent / Child / Individual.</li>
          <li>Choose protection level (Strict / Balanced / Personal).</li>
          <li>Grant permissions (explained on-screen).</li>
          <li>Start using apps normally — CensorX runs in the background.</li>
        </ol>
      </Card>
    </Section>
  );
}
