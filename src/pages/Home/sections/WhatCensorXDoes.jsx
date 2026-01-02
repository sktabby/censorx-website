
import React from "react";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";

export default function WhatCensorXDoes() {
  const items = [
    "Detects harassment & toxic language",
    "Filters explicit (NSFW) content",
    "Flags brutal / violent visuals",
    "Protects children silently",
    "Alerts parents in real time",
    "Keeps privacy-first defaults",
  ];

  return (
    <Section title="What CensorX does" subtitle="A practical safety layer designed for prevention, not punishment.">
      <Card className="soft">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 10 }}>
          {items.map((x) => (
            <div key={x} style={{ padding: 12, borderRadius: 16, border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.03)" }}>
              <div style={{ fontWeight: 900 }}>✓</div>
              <div style={{ marginTop: 6, color: "var(--muted)" }}>{x}</div>
            </div>
          ))}
        </div>
      </Card>
    </Section>
  );
}
