
import React, { useState } from "react";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";

const FAQS = [
  { q: "Is my data safe?", a: "CensorX is designed with privacy-first defaults and transparent permission use." },
  { q: "Does it read my messages?", a: "It focuses on detecting harmful patterns for protection, not on storing or sharing conversations." },
  { q: "Will it slow my phone?", a: "The goal is lightweight real-time protection. Performance varies by device; optimize as you iterate." },
  { q: "Can it work on all apps?", a: "It’s built as an added safety layer. Coverage depends on the app environment and permissions granted." },
  { q: "Is it free or paid?", a: "Prototype for evaluation. Future pricing can include free + premium tiers if you want." },
];

export default function FAQList() {
  return (
    <Section
      title="FAQs"
      subtitle="Clear answers to the most common questions."
    >
      <div style={{ display: "grid", gap: 12 }}>
        {FAQS.map((x, idx) => (
          <FAQItem key={idx} q={x.q} a={x.a} />
        ))}
      </div>
    </Section>
  );
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <Card className="soft">
      <button
        onClick={() => setOpen((s) => !s)}
        style={{
          width: "100%",
          background: "transparent",
          border: "none",
          color: "inherit",
          cursor: "pointer",
          padding: 0,
          textAlign: "left",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <div style={{ fontWeight: 900 }}>{q}</div>
        <kbd className="pill">{open ? "—" : "+"}</kbd>
      </button>

      {open && <p className="p" style={{ marginTop: 10 }}>{a}</p>}
    </Card>
  );
}
