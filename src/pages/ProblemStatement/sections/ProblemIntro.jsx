
import React from "react";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";

export default function ProblemIntro() {
  return (
    <Section
      title="Problem Statement"
      subtitle="Online harassment and harmful content exposure are escalating — and most defenses react too late."
    >
      <Card className="soft">
        <ul className="list">
          <li>Cyberbullying and harassment can happen across any app, anytime.</li>
          <li>Explicit/violent content can appear unexpectedly through messages, links, or media.</li>
          <li>Minors are at higher risk of manipulation, unwanted contact, and harmful exposure.</li>
          <li>Families often discover harm only after emotional damage is done.</li>
        </ul>
      </Card>
    </Section>
  );
}
