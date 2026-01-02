
import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../routes/routes";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

export default function NotFound() {
  return (
    <Section title="Page not found" subtitle="This route doesn’t exist.">
      <Card className="soft">
        <p className="p">Let’s get you back to safety.</p>
        <div style={{ marginTop: 12 }}>
          <NavLink to={ROUTES.HOME}>
            <Button variant="primary">Go Home</Button>
          </NavLink>
        </div>
      </Card>
    </Section>
  );
}
