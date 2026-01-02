
import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../../routes/routes";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";
import Button from "../../../components/ui/Button";

export default function ClosingCTA() {
  return (
    <Section
      title="Start evaluating CensorX"
      subtitle="Download the prototype, follow the guide, and share your feedback."
    >
      <Card className="soft">
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <NavLink to={ROUTES.DOWNLOAD}>
            <Button variant="primary">Download APK</Button>
          </NavLink>
          <NavLink to={ROUTES.USER_GUIDE}>
            <Button variant="outline">User Guide</Button>
          </NavLink>
          <NavLink to={ROUTES.CONTACT}>
            <Button variant="outline">Contact</Button>
          </NavLink>
        </div>
      </Card>
    </Section>
  );
}
