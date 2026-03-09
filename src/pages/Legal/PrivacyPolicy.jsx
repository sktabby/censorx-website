import React from "react";
import Section from "../../components/ui/Section";
import Card from "../../components/ui/Card";

export default function PrivacyPolicy() {
  return (
    <Section
      title="Privacy Policy"
      subtitle="How CensorX protects your privacy and handles your information."
    >
      <Card className="soft">

        <p className="p">
          At <strong>CensorX</strong>, protecting user privacy is one of our core principles.
          Our platform is designed to provide digital safety and content protection while
          minimizing the collection of personal information. We believe that powerful safety
          technology should not come at the cost of user privacy.
        </p>

        <p className="p">
          This Privacy Policy explains how CensorX collects, processes, and protects
          information when you use our services, website, or applications.
        </p>

        <h3 style={{ marginTop: 16 }}>1. Information We Collect</h3>

        <p className="p">
          CensorX collects only the information necessary to operate safety features
          and improve the platform.
        </p>

        <ul className="list">
          <li>
            <strong>Account Information:</strong> When you create an account, we may collect
            basic information such as your email address and login credentials.
          </li>

          <li>
            <strong>Device Information:</strong> Basic technical information such as device
            type, operating system, and application version may be collected to ensure
            compatibility and performance.
          </li>

          <li>
            <strong>Usage Information:</strong> We may collect anonymous usage statistics
            that help us understand how features are used and improve system reliability.
          </li>
        </ul>

        <h3 style={{ marginTop: 16 }}>2. How We Use Information</h3>

        <p className="p">
          Information collected by CensorX is used solely to operate, maintain, and improve
          our safety services.
        </p>

        <ul className="list">
          <li>To enable real-time safety and content protection features.</li>
          <li>To improve detection models and system performance.</li>
          <li>To ensure application security and prevent misuse.</li>
          <li>To communicate important service updates or support responses.</li>
        </ul>

        <h3 style={{ marginTop: 16 }}>3. Privacy-First Design</h3>

        <p className="p">
          CensorX is built with a privacy-first architecture. Wherever possible,
          processing occurs directly on the user's device instead of external servers.
          This reduces the need to transmit or store personal content.
        </p>

        <ul className="list">
          <li>We do not sell or trade personal data.</li>
          <li>We avoid storing sensitive user content whenever possible.</li>
          <li>We prioritize on-device processing for safety features.</li>
        </ul>

        <h3 style={{ marginTop: 16 }}>4. Data Security</h3>

        <p className="p">
          We implement reasonable technical and organizational safeguards to protect
          information from unauthorized access, misuse, or disclosure. These safeguards
          include secure authentication systems, encrypted communications, and restricted
          internal access controls.
        </p>

        <h3 style={{ marginTop: 16 }}>5. User Control</h3>

        <p className="p">
          Users remain in control of their data and permissions. Safety features that
          require system access (such as accessibility or notification services) are
          enabled only after explicit user consent.
        </p>

        <ul className="list">
          <li>Users can disable permissions at any time through device settings.</li>
          <li>Users may contact us to request clarification about data usage.</li>
        </ul>

        <h3 style={{ marginTop: 16 }}>6. Third-Party Services</h3>

        <p className="p">
          CensorX may use trusted third-party services such as authentication providers
          or cloud infrastructure to support the platform. These services are used only
          when necessary and are expected to follow industry-standard privacy practices.
        </p>

        <h3 style={{ marginTop: 16 }}>7. Children's Safety</h3>

        <p className="p">
          One of the primary goals of CensorX is to protect children and families from
          harmful online content. The platform is designed to support parental safety
          tools while maintaining responsible data handling practices.
        </p>

        <h3 style={{ marginTop: 16 }}>8. Changes to This Policy</h3>

        <p className="p">
          We may update this Privacy Policy periodically to reflect improvements to our
          technology or regulatory requirements. Updated versions will be published on
          our website and will take effect upon posting.
        </p>

        <h3 style={{ marginTop: 16 }}>9. Contact</h3>

        <p className="p">
          If you have any questions about this Privacy Policy or the way CensorX handles
          data, please contact us:
        </p>

        <ul className="list">
          <li>Email: contact@censorx.in</li>
          <li>Company: CensorX.ai</li>
        </ul>

        <p className="p" style={{ marginTop: 12 }}>
          By using CensorX services, you acknowledge that you have read and understood
          this Privacy Policy.
        </p>

      </Card>
    </Section>
  );
}