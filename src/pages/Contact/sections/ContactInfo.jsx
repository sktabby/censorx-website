
import React from "react";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";

export default function ContactInfo() {
  return (
    <Section
      title="Contact & feedback"
      subtitle="For evaluation, collaboration, or support."
    >
      <Card className="soft cx-contactInfoCard">
        <ul className="cx-contactList">
          <li>
            <b>Support email:</b> team@censorx.in
          </li>
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

      <style>{`
        .cx-contactInfoCard {
          background: #ffffff !important;
          border: 1px solid rgba(21, 76, 72, 0.18) !important;
          border-radius: 18px !important;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05) !important;
        }

        .cx-contactList {
          display: grid;
          gap: 18px;
          margin: 0;
          padding: 5px 0 5px 22px;
          color: #202927;
          font-size: 15px;
          line-height: 1.7;
        }

        .cx-contactList li::marker {
          color: #237f79;
        }

        .cx-contactList b {
          color: #103e3a;
          font-weight: 800;
        }

        @media (max-width: 640px) {
          .cx-contactList {
            gap: 14px;
            font-size: 14px;
          }
        }
      `}</style>
    </Section>
  );
}
