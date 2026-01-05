import React, { useState } from "react";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";

export default function FeatureGrid() {
  const feats = [
    {
      t: "Harassment detection",
      short:
        "Detects toxic, abusive, and threatening language patterns in real time across chats and messages.",
      long:
        "CensorX analyzes conversations contextually, identifying repeated aggression, escalating tone, and harmful intent — not just keywords. This allows early intervention before harassment causes lasting harm.",
    },
    {
      t: "Harmful content filtering",
      short:
        "Reduces exposure to explicit, disturbing, and unsafe content that appears unexpectedly.",
      long:
        "Both visual and textual content are screened in real time to detect nudity, graphic material, and unsafe media delivered via links, forwards, or pop-ups — even when the user didn’t search for it.",
    },
    {
      t: "Real-time alerts",
      short:
        "Notifies guardians only when high-risk events occur.",
      long:
        "Alerts are triggered for high-confidence situations, ensuring parents stay informed without constant notifications. The focus is on meaningful intervention, not surveillance.",
    },
    {
      t: "Role-based protection",
      short:
        "Protection adapts for parents, kids, and individuals.",
      long:
        "Parents receive alerts and oversight, kids receive silent protection without feeling watched, and individuals get optional safety assistance — ensuring dignity, balance, and effectiveness for every role.",
    },
  ];

  return (
    <Section
      title="Features & capabilities"
      subtitle="Everything you need for real-time protection — with privacy-first defaults."
    >
      {/* ✅ ONE CARD PER ROW */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 14,
        }}
      >
        {feats.map((f) => (
          <FeatureCard key={f.t} {...f} />
        ))}
      </div>
    </Section>
  );
}

function FeatureCard({ t, short, long }) {
  const [open, setOpen] = useState(false);

  return (
    <Card className="soft">
      <div style={{ fontWeight: 900, fontSize: 15 }}>{t}</div>

      {/* ✅ PARTIAL CONTENT ALWAYS VISIBLE */}
      <p
        className="p"
        style={{
          marginTop: 8,
          opacity: 0.85,
          lineHeight: 1.65,
          maxWidth: 820,
        }}
      >
        {short}
        {open && (
          <span style={{ display: "block", marginTop: 8, opacity: 0.9 }}>
            {long}
          </span>
        )}
      </p>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        style={{
          marginTop: 8,
          background: "none",
          border: "none",
          padding: 0,
          color: "rgba(79,195,247,0.95)",
          fontWeight: 800,
          fontSize: 13,
          cursor: "pointer",
        }}
      >
        {open ? "Show less" : "Read more"}
      </button>
    </Card>
  );
}
