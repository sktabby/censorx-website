
import React from "react";
import { NavLink } from "react-router-dom";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";
import Button from "../../../components/ui/Button";
import { ROUTES } from "../../../routes/routes";

export default function WhoItsFor() {
  return (
    <Section title="Who it’s for" subtitle="Designed for different users — without forcing one experience on everyone.">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 14 }}>
        <RoleCard title="Parents" text="Get alerts and protect children without constant surveillance." />
        <RoleCard title="Children" text="No login. No interruption. Silent protection while they use apps." />
        <RoleCard title="Individuals" text="Reduce exposure, avoid harassment, and protect mental wellbeing." />
      </div>

      <div style={{ marginTop: 14 }}>
        <NavLink to={ROUTES.ROLES}>
          <Button variant="outline">Explore roles</Button>
        </NavLink>
      </div>
    </Section>
  );
}

function RoleCard({ title, text }) {
  return (
    <Card className="soft">
      <div style={{ fontWeight: 900, fontSize: 16 }}>{title}</div>
      <p className="p">{text}</p>
    </Card>
  );
}
