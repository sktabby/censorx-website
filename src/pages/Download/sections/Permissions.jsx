import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";
import Button from "../../../components/ui/Button";

const perms = [
  {
    t: "Accessibility",
    use: "Harassment detection and short-video limits",
    d: "Reads text shown on screen and typed on the child’s phone, and sees which app is open. CensorX does not use it to act on the user’s behalf.",
  },
  {
    t: "Notification access",
    use: "Harassment detection",
    d: "Checks incoming message notifications for harassment, even when the messaging app is closed.",
  },
  {
    t: "Screen capture",
    use: "Harmful image blur",
    d: "Checks on-screen images on the phone itself and blurs unsafe content. Screenshots are never uploaded.",
  },
  {
    t: "Notifications",
    use: "Transparency and alerts",
    d: "Shows a notice on the child’s phone whenever monitoring is on, and delivers alerts to the parent.",
  },
  {
    t: "Device Admin",
    use: "Uninstall protection",
    d: "Stops the app being removed without the parent knowing. It can be turned off at any time.",
    optional: true,
  },
];

export default function Permissions() {
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
      title="Permissions, explained"
      subtitle="We explain every permission before we ask for it, because trust matters."
    >
      <style>{`
        .cxPm-grid{
          display:grid;
          grid-template-columns:repeat(2, minmax(0,1fr));
          gap:14px;
        }
        @media (max-width: 800px){
          .cxPm-grid{ grid-template-columns:1fr; }
        }
        .cxPm-card{
          border:1px solid rgba(255,255,255,0.12);
          background:rgba(255,255,255,0.04);
          border-radius:var(--radius-lg);
          padding:18px 18px 16px;
        }
        .cxPm-head{
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:10px;
          margin-bottom:6px;
        }
        .cxPm-head h4{
          margin:0;
          font-size:15px;
          font-weight:800;
        }
        .cxPm-opt{
          font-size:11px;
          font-weight:700;
          letter-spacing:0.08em;
          text-transform:uppercase;
          padding:4px 9px;
          border-radius:999px;
          background:#ffffff;
          color:#111827;
          white-space:nowrap;
        }
        .cxPm-use{
          display:inline-block;
          font-size:12px;
          font-weight:700;
          padding:4px 10px;
          border-radius:var(--radius-sm);
          border:1px solid rgba(255,255,255,0.18);
          color:rgba(255,255,255,0.85);
          margin-bottom:10px;
        }
        .cxPm-card p{
          margin:0;
          font-size:12.5px;
          line-height:1.7;
          color:var(--muted2);
        }
        .cxPm-foot{
          margin-top:16px;
          font-size:12.5px;
          line-height:1.7;
          color:var(--muted2);
        }
      `}</style>

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

      <div className="cxPm-grid">
        {perms.map((p) => (
          <div key={p.t} className="cxPm-card">
            <div className="cxPm-head">
              <h4>{p.t}</h4>
              {p.optional && <span className="cxPm-opt">Optional</span>}
            </div>
            <span className="cxPm-use">Used for: {p.use}</span>
            <p>{p.d}</p>
          </div>
        ))}
      </div>

      <p className="cxPm-foot">
        Each permission is requested with an explanation first. Full details are in
        our <a href="/legal/privacy-policy">Privacy Policy</a>.
      </p>

      {/* ✅ FEEDBACK FORM */}
      <Card className="soft" style={{ marginTop: 22 }}>
        <div style={{ fontWeight: 800, fontSize: 17.5, marginBottom: 10 }}>Send Feedback</div>
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
            <div style={{ fontWeight: 700, fontSize: 12, marginBottom: 6, color: "var(--muted2)" }}>
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
            <FormSubmitButton submitting={submitting} />

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
          <p className="p" style={{ marginTop: 10, fontSize: 13, color: "var(--muted2)" }}>
            By submitting, you agree that we may use these details to respond to you. See our <a href="/legal/privacy-policy">Privacy Policy</a>.
          </p>
        </form>
      </Card>
    </Section>
  );
}

/* ---------- helpers ---------- */

function Input({ label, hint = "", error = false, ...props }) {
  return (
    <label style={{ display: "grid", gap: 6 }}>
      <span style={{ fontWeight: 700, fontSize: 12, color: "var(--muted2)" }}>{label}</span>
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
      <span style={{ fontWeight: 700, fontSize: 12, color: "var(--muted2)" }}>{label}</span>

      <div style={{ position: "relative" }}>
        <select {...props} style={selectStyle()}>
          {options.map((v) => (
            <option
              key={v}
              value={v}
              style={{
                background: "#0b0c10",
                color: "#ffffff",
              }}
            >
              {v}
            </option>
          ))}
        </select>

        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            right: 12,
            top: "50%",
            transform: "translateY(-50%)",
            pointerEvents: "none",
            opacity: 0.9,
            fontSize: 13,
            lineHeight: 1,
            color: "rgba(255,255,255,0.85)",
          }}
        >
          ▾
        </span>
      </div>
    </label>
  );
}

function FormSubmitButton({ submitting }) {
  return (
    <button
      type="submit"
      disabled={submitting}
      style={{
        padding: "12px 16px",
        borderRadius: 14,
        border: "1px solid rgba(255,255,255,0.12)",
        background: "linear-gradient(180deg, rgba(79,195,247,0.22), rgba(79,195,247,0.12))",
        color: "inherit",
        fontWeight: 800,
        cursor: submitting ? "not-allowed" : "pointer",
        boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
        transition: "transform 120ms ease, filter 120ms ease",
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.transform = "translateY(1px)";
        e.currentTarget.style.filter = "brightness(1.05)";
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = "translateY(0px)";
        e.currentTarget.style.filter = "none";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0px)";
        e.currentTarget.style.filter = "none";
      }}
    >
      {submitting ? "Submitting..." : "Submit Feedback"}
    </button>
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
    padding: "12px 38px 12px 12px",
    borderRadius: 14,
    border: "1px solid rgba(255,255,255,0.16)",
    background: "rgba(255,255,255,0.08)",
    color: "#ffffff",
    outline: "none",
    appearance: "none",
    WebkitAppearance: "none",
    MozAppearance: "none",
    boxShadow: "0 10px 24px rgba(0,0,0,0.25), inset 0 0 0 1px rgba(255,255,255,0.03)",
  };
}