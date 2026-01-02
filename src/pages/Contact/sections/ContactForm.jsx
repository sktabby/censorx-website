
import React, { useState } from "react";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";
import Button from "../../../components/ui/Button";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", msg: "" });
  const [sent, setSent] = useState(false);

  function onChange(e) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    // Prototype-only: no backend call here.
    setSent(true);
    setTimeout(() => setSent(false), 2500);
    setForm({ name: "", email: "", msg: "" });
  }

  return (
    <Section
      title="Send a message"
      subtitle="This form is UI-only by default. Connect it to your backend later."
    >
      <Card className="soft">
        <form onSubmit={onSubmit} style={{ display: "grid", gap: 10 }}>
          <Field label="Name">
            <input className="inp" name="name" value={form.name} onChange={onChange} placeholder="Your name" />
          </Field>
          <Field label="Email">
            <input className="inp" name="email" value={form.email} onChange={onChange} placeholder="you@example.com" />
          </Field>
          <Field label="Message">
            <textarea className="inp" name="msg" value={form.msg} onChange={onChange} placeholder="What do you want to share?" rows={5} />
          </Field>

          <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
            <Button variant="primary" type="submit">Submit</Button>
            {sent && <span style={{ color: "var(--muted2)" }}>Message captured (UI demo).</span>}
          </div>
        </form>
      </Card>

      <style>{`
        .inp{
          width: 100%;
          padding: 12px 14px;
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          color: rgba(255,255,255,0.92);
          outline: none;
        }
        .inp:focus{ box-shadow: var(--focus); border-color: rgba(50,178,169,0.35); }
        textarea.inp{ resize: vertical; }
      `}</style>
    </Section>
  );
}

function Field({ label, children }) {
  return (
    <label style={{ display: "grid", gap: 6 }}>
      <span style={{ fontWeight: 800, color: "var(--muted)" }}>{label}</span>
      {children}
    </label>
  );
}
