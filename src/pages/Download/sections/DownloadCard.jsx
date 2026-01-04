import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";
import Button from "../../../components/ui/Button";

export default function DownloadCard() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    type: "Suggestion",
    rating: "⭐⭐⭐⭐⭐ (5)",
    name: "",
    email: "",
    device: "",
    message: "",
  });

  const [toast, setToast] = useState({ show: false, type: "ok", msg: "" });
  const [submitting, setSubmitting] = useState(false);

  // ✅ Your Google Form ID
  const FORM_ID = "1FAIpQLSd4HtsC9v9hvtzZ6oUlN0ogC-dCRaKvMoRKDweVp-DnDiJsrQ";

  // ✅ Entry IDs (from your prefill link)
  const ENTRY = useMemo(
    () => ({
      type: "entry.804999473",
      rating: "entry.1653625578",
      name: "entry.1273027329",
      email: "entry.1137452355",
      device: "entry.336944369",
      message: "entry.405543446",
    }),
    []
  );

  const REDIRECT_TO = "/"; // change to "/download" or "/thanks" if you have

  function showToast(type, msg) {
    setToast({ show: true, type, msg });
    window.clearTimeout(showToast._t);
    showToast._t = window.setTimeout(() => setToast((s) => ({ ...s, show: false })), 2200);
  }

  function onChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function isValidEmail(v) {
    if (!v) return true; // optional
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
  }

  async function onSubmit(e) {
    e.preventDefault();

    // Validation
    if (!form.message.trim()) {
      showToast("error", "Please write your feedback before submitting.");
      return;
    }
    if (!isValidEmail(form.email)) {
      showToast("error", "Please enter a valid email (or leave it empty).");
      return;
    }

    setSubmitting(true);

    try {
      const url = `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`;

      const fd = new FormData();
      fd.append(ENTRY.type, form.type);
      fd.append(ENTRY.rating, form.rating);
      fd.append(ENTRY.name, form.name);
      fd.append(ENTRY.email, form.email);
      fd.append(ENTRY.device, form.device);
      fd.append(ENTRY.message, form.message);

      // ✅ submit silently, no Google branding
      await fetch(url, {
        method: "POST",
        mode: "no-cors",
        body: fd,
      });

      showToast("ok", "✅ Feedback submitted! Redirecting…");

      // ✅ optional: reset form
      setForm({
        type: "Suggestion",
        rating: "⭐⭐⭐⭐⭐ (5)",
        name: "",
        email: "",
        device: "",
        message: "",
      });

      // ✅ redirect after toast
      setTimeout(() => navigate(REDIRECT_TO), 1500);
    } catch (err) {
      showToast("error", "Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Section
      title="APK Download"
      subtitle="For evaluators and testing. Prototype build — not a production store release."
    >
      {/* ✅ Floating Toast */}
      {toast.show && (
        <div
          style={{
            position: "fixed",
            top: 18,
            right: 18,
            zIndex: 9999,
            minWidth: 240,
            maxWidth: 360,
            padding: "12px 14px",
            borderRadius: 16,
            border:
              toast.type === "error"
                ? "1px solid rgba(255,90,90,0.35)"
                : "1px solid rgba(0,200,140,0.35)",
            background: "rgba(10,10,12,0.92)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 18px 50px rgba(0,0,0,0.35)",
            color: "#fff",
            fontSize: 13,
            lineHeight: 1.35,
          }}
        >
          {toast.msg}
        </div>
      )}

      <Card className="soft">
        {/* TOP ROW */}
        <div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div style={{ fontWeight: 900, fontSize: 16 }}>CensorX Prototype APK</div>
            <div style={{ color: "var(--muted2)", marginTop: 6 }}>
              Supported Android: 9+ (recommended). Update this as per your build.
            </div>
          </div>

          <Button as="a" href="/Censorx-version-1.0.apk" download variant="primary">
            Download APK
          </Button>
        </div>

        <hr className="sep" />

        <ul className="list">
          <li>Build type: Evaluation / Prototype</li>
          <li>Purpose: Demonstration + testing</li>
          <li>Disclaimer: Use only on test devices if possible</li>
        </ul>

        <hr className="sep" />

        {/* FEEDBACK FORM */}
        <div style={{ fontWeight: 900, fontSize: 16, marginBottom: 10 }}>Send Feedback</div>
        <p className="p" style={{ color: "var(--muted2)", marginTop: 0 }}>
          Help us improve CensorX. Please don’t include personal chats or sensitive content.
        </p>

        <form onSubmit={onSubmit} style={{ display: "grid", gap: 12, marginTop: 12 }}>
          {/* Row 1 */}
          <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
            <Select
              label="Feedback Type"
              name="type"
              value={form.type}
              onChange={onChange}
              options={["Bug", "Suggestion", "Feature Request", "Other"]}
            />

            <Select
              label="Rating"
              name="rating"
              value={form.rating}
              onChange={onChange}
            // options
            options={[
              "⭐⭐⭐⭐⭐ (5)",
              "⭐⭐⭐⭐☆ (4)",
              "⭐⭐⭐☆☆ (3)",
              "⭐⭐☆☆☆ (2)",
              "⭐☆☆☆☆ (1)",
            ]}

            />
          </div>

          {/* Row 2 */}
          <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
            <Input label="Name (optional)" name="name" value={form.name} onChange={onChange} placeholder="Your name" />
            <Input
              label="Email (optional)"
              name="email"
              value={form.email}
              onChange={onChange}
              placeholder="you@example.com"
              type="email"
              error={!isValidEmail(form.email)}
              hint={!isValidEmail(form.email) ? "Invalid email format" : ""}
            />
          </div>

          {/* Row 3 */}
          <Input
            label="Device model (optional)"
            name="device"
            value={form.device}
            onChange={onChange}
            placeholder="e.g., Redmi Note 11"
          />

          {/* Message */}
          <div>
            <div style={{ fontWeight: 800, fontSize: 12, marginBottom: 6, color: "var(--muted2)" }}>
              Feedback / Issue Description (required)
            </div>
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              placeholder="What worked well? What didn’t? Any bugs or suggestions?"
              rows={5}
              style={textareaStyle()}
            />
          </div>

          {/* Actions */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Button variant="primary" type="submit" disabled={submitting}>
              {submitting ? "Submitting..." : "Submit Feedback"}
            </Button>

            <Button
              variant="ghost"
              type="button"
              disabled={submitting}
              onClick={() =>
                setForm({
                  type: "Suggestion",
                  rating: "⭐⭐⭐⭐⭐ (5)",
                  name: "",
                  email: "",
                  device: "",
                  message: "",
                })
              }
            >
              Clear
            </Button>
          </div>
        </form>
      </Card>
    </Section>
  );
}

/* ---------- helpers ---------- */

function Input({ label, hint = "", error = false, ...props }) {
  return (
    <label style={{ display: "grid", gap: 6 }}>
      <span style={{ fontWeight: 800, fontSize: 12, color: "var(--muted2)" }}>{label}</span>
      <input {...props} style={inputStyle(error)} />
      {hint ? (
        <span style={{ fontSize: 12, color: error ? "rgba(255,120,120,0.95)" : "var(--muted2)" }}>
          {hint}
        </span>
      ) : null}
    </label>
  );
}

function Select({ label, options, ...props }) {
  return (
    <label style={{ display: "grid", gap: 6 }}>
      <span style={{ fontWeight: 800, fontSize: 12, color: "var(--muted2)" }}>{label}</span>
      <select {...props} style={selectStyle()}>
        {options.map((v) => (
          <option key={v} value={v}>
            {v}
          </option>
        ))}
      </select>
    </label>
  );
}

function inputStyle(error) {
  return {
    width: "100%",
    padding: "12px 12px",
    borderRadius: 14,
    border: error ? "1px solid rgba(255,90,90,0.35)" : "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.04)",
    color: "inherit",
    outline: "none",
  };
}

function textareaStyle() {
  return {
    width: "100%",
    padding: "12px 12px",
    borderRadius: 14,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.04)",
    color: "inherit",
    outline: "none",
    resize: "vertical",
  };
}

function selectStyle() {
  return {
    width: "100%",
    padding: "12px 12px",
    borderRadius: 14,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.04)",
    color: "inherit",
    outline: "none",
    appearance: "none",
  };
}
