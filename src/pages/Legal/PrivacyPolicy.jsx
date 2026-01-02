
import React from "react";
import Section from "../../components/ui/Section";
import Card from "../../components/ui/Card";

export default function PrivacyPolicy() {
  return (
    <Section
      title="Privacy Policy (Template)"
      subtitle="Replace this text with your real policy before public release."
    >
      <Card className="soft">
        <p className="p">
          CensorX is designed with privacy-first principles. By default, we aim to minimize data collection and avoid
          storing sensitive personal content.
        </p>
        <ul className="list">
          <li>We do not sell user data.</li>
          <li>We use permissions only to provide safety features.</li>
          <li>We encourage transparency and user control.</li>
        </ul>
        <p className="p" style={{ marginTop: 12 }}>
          Add details: what data is processed, where it is processed, retention rules, contact, jurisdiction.
        </p>
      </Card>
    </Section>
  );
}
