import React, { useState } from "react";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";
import Button from "../../../components/ui/Button";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", msg: "" });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // ✅ Google Form submit URL
  const FORM_ACTION =
    "https://docs.google.com/forms/d/e/1FAIpQLSdA1yt-eYWq4GmY8TO7XYetNttG85eGc_2uIsNtZ0SkFxvWyQ/formResponse";

  // ✅ Correct entry IDs (from your prefilled link)
  const ENTRY_NAME = "entry.392664418";
  const ENTRY_EMAIL = "entry.1110020034";
  const ENTRY_MSG = "entry.297372926";

  function onChange(e) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  async function onSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.email || !form.msg) return;

    setSubmitting(true);
    setSent(false);

    const data = new URLSearchParams();
    data.append(ENTRY_NAME, form.name);
    data.append(ENTRY_EMAIL, form.email);
    data.append(ENTRY_MSG, form.msg);

    try {
      await fetch(FORM_ACTION, {
        method: "POST",
        mode: "no-cors", // required for Google Forms
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: data.toString(),
      });

      setSent(true);
      setForm({ name: "", email: "", msg: "" });
      setTimeout(() => setSent(false), 2500);
    } catch (err) {
      console.error("Form submit error:", err);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Section
      title="Send a message"
      subtitle="Messages are sent directly to our inbox."
    >
      <Card className="soft">
        <form onSubmit={onSubmit} style={{ display: "grid", gap: 10 }}>
          <Field label="Name">
            <input
              className="inp"
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Your name"
            />
          </Field>

          <Field label="Email">
            <input
              className="inp"
              name="email"
              value={form.email}
              onChange={onChange}
              placeholder="you@example.com"
            />
          </Field>

          <Field label="Message">
            <textarea
              className="inp"
              name="msg"
              value={form.msg}
              onChange={onChange}
              placeholder="What do you want to share?"
              rows={5}
            />
          </Field>

          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <Button variant="primary" type="submit" disabled={submitting}>
              {submitting ? "Sending..." : "Submit"}
            </Button>

            {sent && (
              <span style={{ color: "var(--muted2)" }}>
                Message sent successfully ✅
              </span>
            )}
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
        .inp:focus{
          box-shadow: var(--focus);
          border-color: rgba(50,178,169,0.35);
        }
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
