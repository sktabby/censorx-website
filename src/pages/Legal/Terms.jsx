import React from "react";
import Section from "../../components/ui/Section";
import Card from "../../components/ui/Card";

export default function Terms() {
  return (
    <Section
      title="Terms of Use"
      subtitle="Please read these terms carefully before using CensorX services."
    >
      <Card className="soft">

        <p className="p">
          These Terms of Use govern your access to and use of the CensorX
          platform, including our website, applications, and related
          services. By using CensorX, you agree to comply with these terms.
          If you do not agree with any part of these terms, you should not
          use the service.
        </p>

        <h3 style={{ marginTop: 16 }}>1. Purpose of the Service</h3>

        <p className="p">
          CensorX provides digital safety tools designed to detect and
          reduce exposure to harmful online content. The platform is
          intended to support safer digital experiences for individuals
          and families.
        </p>

        <h3 style={{ marginTop: 16 }}>2. Acceptable Use</h3>

        <ul className="list">
          <li>You agree to use CensorX only for lawful purposes.</li>
          <li>You must not attempt to misuse, disrupt, or reverse engineer the service.</li>
          <li>You must not use the platform to violate the privacy or rights of others.</li>
        </ul>

        <h3 style={{ marginTop: 16 }}>3. Limitations of the Service</h3>

        <ul className="list">
          <li>
            CensorX uses automated detection systems that may occasionally
            produce incorrect results.
          </li>
          <li>
            The platform is intended to assist digital safety but cannot
            guarantee the detection of every harmful or inappropriate
            interaction.
          </li>
          <li>
            Users should not rely solely on automated systems in
            high-risk situations where human supervision is necessary.
          </li>
        </ul>

        <h3 style={{ marginTop: 16 }}>4. User Responsibilities</h3>

        <p className="p">
          Users are responsible for ensuring that their use of the platform
          complies with applicable laws, regulations, and platform policies.
          You are also responsible for managing permissions and device
          settings required for the application's functionality.
        </p>

        <h3 style={{ marginTop: 16 }}>5. Intellectual Property</h3>

        <p className="p">
          All content, software, technology, and design related to CensorX
          are owned by or licensed to CensorX. You may not copy, modify,
          distribute, or reproduce any part of the platform without
          authorization.
        </p>

        <h3 style={{ marginTop: 16 }}>6. Service Updates</h3>

        <p className="p">
          We may update or improve the CensorX platform over time. Features,
          functionality, or availability may change as the system evolves.
          Continued use of the service after updates indicates acceptance
          of the revised terms.
        </p>

        <h3 style={{ marginTop: 16 }}>7. Limitation of Liability</h3>

        <p className="p">
          CensorX is provided on an "as available" basis. While we work to
          maintain reliable service, we cannot guarantee uninterrupted
          operation or complete accuracy of automated detections.
          To the extent permitted by law, CensorX shall not be held liable
          for indirect, incidental, or consequential damages arising from
          the use of the platform.
        </p>

        <h3 style={{ marginTop: 16 }}>8. Termination</h3>

        <p className="p">
          We reserve the right to suspend or terminate access to the service
          if users violate these terms or misuse the platform.
        </p>

        <h3 style={{ marginTop: 16 }}>9. Changes to These Terms</h3>

        <p className="p">
          These Terms of Use may be updated periodically. The latest version
          will always be available on our website. Continued use of the
          service after changes indicates acceptance of the updated terms.
        </p>

        <h3 style={{ marginTop: 16 }}>10. Contact</h3>

        <p className="p">
          If you have questions about these Terms of Use, you can contact us at:
        </p>

        <ul className="list">
          <li>Email: contact@censorx.in</li>
          <li>Company: CensorX.ai</li>
        </ul>

      </Card>
    </Section>
  );
}