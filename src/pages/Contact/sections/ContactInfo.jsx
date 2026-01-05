import React from "react";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";

export default function ContactInfo() {
  return (
    <Section
      title="Contact & feedback"
      subtitle="For evaluation, collaboration, or support."
    >
      <Card className="soft">
        <ul className="list">
          <li><b>Support email:</b> censorx01@gmail.com</li>
          <li>
            <b>Evaluation:</b> Share device model, Android version, and test
            scenario details
          </li>
          <li>
            <b>Collaboration:</b> Research institutions, educators, and
            partnerships
          </li>
        </ul>
      </Card>
    </Section>
  );
}
