
import React from "react";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";
import Button from "../../../components/ui/Button";

export default function DownloadCard() {
  return (
    <Section
      title="APK Download"
      subtitle="For evaluators and testing. Prototype build — not a production store release."
    >
      <Card className="soft">
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontWeight: 900, fontSize: 16 }}>CensorX Prototype APK</div>
            <div style={{ color: "var(--muted2)", marginTop: 6 }}>
              Supported Android: 9+ (recommended). Update this as per your build.
            </div>
          </div>

          {/* Replace this href with your actual APK link */}
          <Button as="a" href="#" variant="primary">
            Download APK
          </Button>
        </div>

        <hr className="sep" />

        <ul className="list">
          <li>Build type: Evaluation / Prototype</li>
          <li>Purpose: Demonstration + testing</li>
          <li>Disclaimer: Use only on test devices if possible</li>
        </ul>
      </Card>
    </Section>
  );
}
