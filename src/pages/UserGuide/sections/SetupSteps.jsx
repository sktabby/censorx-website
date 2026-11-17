
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
          <li>Install CensorX from Google Play on the parent's phone and on the child's phone.</li>
          <li>Select your role: Parent / Child.</li>
          <li>Choose protection level (Strict / Balanced / Personal).</li>
          <li>Grant permissions (explained on-screen).</li>
          <li>Start using apps normally. CensorX stays on, and a notice on the child's phone shows that protection is active.</li>
        </ol>
      </Card>
    </Section>
  );
}
