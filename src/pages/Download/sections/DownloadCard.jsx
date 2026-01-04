
// import React from "react";
// import Section from "../../../components/ui/Section";
// import Card from "../../../components/ui/Card";
// import Button from "../../../components/ui/Button";

// export default function DownloadCard() {
//   return (
//     <Section
//       title="APK Download"
//       subtitle="For evaluators and testing. Prototype build — not a production store release."
//     >
//       <Card className="soft">
//         <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
//           <div>
//             <div style={{ fontWeight: 900, fontSize: 16 }}>CensorX Prototype APK</div>
//             <div style={{ color: "var(--muted2)", marginTop: 6 }}>
//               Supported Android: 9+ (recommended). Update this as per your build.
//             </div>
//           </div>

//           {/* Replace this href with your actual APK link */}
//           <Button
//             as="a"
//             href="public/Censorx-version-1.0.apk"
//             download
//             variant="primary"
//           >
//             Download APK
//           </Button>

//         </div>

//         <hr className="sep" />

//         <ul className="list">
//           <li>Build type: Evaluation / Prototype</li>
//           <li>Purpose: Demonstration + testing</li>
//           <li>Disclaimer: Use only on test devices if possible</li>
//         </ul>
//       </Card>
//     </Section>
//   );
// }



import React, { useMemo, useState } from "react";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";
import Button from "../../../components/ui/Button";

export default function DownloadCard() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    device: "",
    rating: "5",
    message: "",
  });
  const [status, setStatus] = useState({ type: "idle", msg: "" });

  // ✅ Replace with your own Google Form link (prefill is optional)
  const FEEDBACK_FORM_URL = useMemo(() => {
    // Example: "https://docs.google.com/forms/d/e/<FORM_ID>/viewform"
    return ""; // <- paste here when ready
  }, []);

  function onChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function onSubmit(e) {
    e.preventDefault();

    // Basic validation
    if (!form.message.trim()) {
      setStatus({ type: "error", msg: "Please write your feedback before submitting." });
      return;
    }

    // ✅ Option A: Open Google Form (no backend)
    if (FEEDBACK_FORM_URL) {
      // If you want: pass details via query params using prefilled Google Form links.
      window.open(FEEDBACK_FORM_URL, "_blank", "noopener,noreferrer");
      setStatus({ type: "ok", msg: "Opened the feedback form. Thank you!" });
      return;
    }

    // ✅ Fallback: mailto (works without backend, but opens email app)
    const subject = encodeURIComponent("CensorX APK Feedback");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nDevice: ${form.device}\nRating: ${form.rating}/5\n\nFeedback:\n${form.message}\n`
    );
    window.location.href = `mailto:yourteam@email.com?subject=${subject}&body=${body}`;
    setStatus({ type: "ok", msg: "Opening your email app to send feedback…" });
  }

  return (
    <Section
      title="APK Download"
      subtitle="For evaluators and testing. Prototype build — not a production store release."
    >
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

          {/* ✅ FIXED: Vite public file should be referenced from root */}
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

        {/* FEEDBACK FORM */}
        <hr className="sep" />

        <div style={{ fontWeight: 900, fontSize: 16, marginBottom: 10 }}>Send Feedback</div>
        <p className="p" style={{ color: "var(--muted2)", marginTop: 0 }}>
          Help us improve CensorX. No sensitive content—please avoid sharing personal chats/images.
        </p>

        <form onSubmit={onSubmit} style={{ display: "grid", gap: 10, marginTop: 10 }}>
          <div style={{ display: "grid", gap: 10, gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}>
            <Input
              label="Name (optional)"
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Your name"
            />
            <Input
              label="Email (optional)"
              name="email"
              value={form.email}
              onChange={onChange}
              placeholder="you@example.com"
              type="email"
            />
          </div>

          <div style={{ display: "grid", gap: 10, gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}>
            <Input
              label="Device model (optional)"
              name="device"
              value={form.device}
              onChange={onChange}
              placeholder="e.g., Redmi Note 12"
            />

            <div>
              <div style={{ fontWeight: 800, fontSize: 12, marginBottom: 6, color: "var(--muted2)" }}>
                Rating
              </div>
              <select
                name="rating"
                value={form.rating}
                onChange={onChange}
                style={selectStyle()}
              >
                <option value="5">★★★★★ (5)</option>
                <option value="4">★★★★☆ (4)</option>
                <option value="3">★★★☆☆ (3)</option>
                <option value="2">★★☆☆☆ (2)</option>
                <option value="1">★☆☆☆☆ (1)</option>
              </select>
            </div>
          </div>

          <div>
            <div style={{ fontWeight: 800, fontSize: 12, marginBottom: 6, color: "var(--muted2)" }}>
              Feedback
            </div>
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              placeholder="What worked well? What didn’t? Any bugs or suggestions?"
              rows={4}
              style={textareaStyle()}
            />
          </div>

          {status.type !== "idle" && (
            <div
              style={{
                padding: "10px 12px",
                borderRadius: 14,
                fontSize: 13,
                border: "1px solid rgba(255,255,255,0.10)",
                background: "rgba(255,255,255,0.04)",
              }}
            >
              {status.msg}
            </div>
          )}

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Button variant="primary" type="submit">
              Submit Feedback
            </Button>
            <Button
              variant="ghost"
              type="button"
              onClick={() => {
                setForm({ name: "", email: "", device: "", rating: "5", message: "" });
                setStatus({ type: "idle", msg: "" });
              }}
            >
              Clear
            </Button>
          </div>
        </form>
      </Card>
    </Section>
  );
}

/* ---------- Small helpers (inline styles to match your current setup) ---------- */

function Input({ label, ...props }) {
  return (
    <label style={{ display: "grid", gap: 6 }}>
      <span style={{ fontWeight: 800, fontSize: 12, color: "var(--muted2)" }}>{label}</span>
      <input {...props} style={inputStyle()} />
    </label>
  );
}

function inputStyle() {
  return {
    width: "100%",
    padding: "12px 12px",
    borderRadius: 14,
    border: "1px solid rgba(255,255,255,0.10)",
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
