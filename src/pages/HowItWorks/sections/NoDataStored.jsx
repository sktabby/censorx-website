
import React from "react";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";

export default function NoDataStored() {
  return (
    <Section
      title="No data stored externally"
      subtitle="Designed to reduce sensitive exposure by default."
    >
      <Card className="soft">
        <ul className="list">
          <li>No selling or sharing of private content.</li>
          <li>Permissions are explained and must be consented.</li>
          <li>Focuses on action in the moment, not long-term surveillance.</li>
        </ul>
      </Card>
    </Section>
  );
}
