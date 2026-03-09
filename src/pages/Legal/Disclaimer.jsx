import React from "react";
import Section from "../../components/ui/Section";
import Card from "../../components/ui/Card";

export default function Disclaimer() {
  return (
    <Section
      title="Disclaimer"
      subtitle="Important information about the use and limitations of CensorX."
    >
      <Card className="soft">

        <p className="p">
          CensorX is designed to help improve online safety by detecting
          potentially harmful content and providing users with additional
          protection tools. While we strive to make our technology reliable
          and effective, users should understand that automated safety systems
          have certain limitations.
        </p>

        <ul className="list">
          <li>
            <strong>AI-based detection is probabilistic:</strong> Content
            detection models may occasionally produce false positives
            (flagging safe content) or false negatives (missing harmful
            content).
          </li>

          <li>
            <strong>System performance may vary:</strong> Results can depend on
            factors such as device capability, operating system behavior,
            application permissions, and network conditions.
          </li>

          <li>
            <strong>Not a replacement for human judgment:</strong> CensorX is a
            supportive safety tool and should not be considered a complete
            substitute for parental guidance, moderation policies, or user
            discretion.
          </li>

          <li>
            <strong>Feature availability may change:</strong> Certain features
            may evolve over time as the platform improves, and functionality
            may differ across devices or environments.
          </li>
        </ul>

        <p className="p" style={{ marginTop: 12 }}>
          By using CensorX, you acknowledge that the platform is intended to
          enhance digital safety but cannot guarantee the detection or
          prevention of every instance of harmful or inappropriate content.
        </p>

        <p className="p">
          If you encounter issues, unexpected behavior, or have suggestions for
          improvement, we encourage you to contact us so we can continue making
          the platform better and safer for everyone.
        </p>

      </Card>
    </Section>
  );
}