import React, { useMemo, useState } from "react";
import Section from "../../components/ui/Section";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

export default function Career() {
  // ✅ IMPORTANT INFO extracted + used in page
  const locationText =
    "In-Office — Kalsekar Incubation Centre (AIKTC), Plot Nos. 2 & 3, Sector 16, Khandagaon, Near Thana Naka, New Panvel";
  const meta = [
    { k: "Type", v: "Paid Internship (In-Office)" },
    { k: "Duration", v: "2–6 months (based on performance & availability)" },
    { k: "Start", v: "Immediate" },
    { k: "Location", v: locationText },
  ];

  // ✅ Roles (2 departments only)
  const roles = useMemo(
    () => [
      {
        dept: "Android App Development",
        items: [
          {
            title: "Android Developer Intern (Kotlin + Compose)",
            exp: "0–1 years (students / freshers welcome)",
            highlights: [
              "Kotlin, Jetpack Compose, MVVM, Coroutines/Flow",
              "Firebase Auth (Phone OTP), FCM, Play Billing (Subscriptions)",
              "Foreground Services, Accessibility + Overlay, TFLite",
              "Gated onboarding: auth → billing → verify → PIN → license → permissions → service enable",
            ],
          },
          {
            title: "Android Security & Licensing Intern (App Security)",
            exp: "0–1 years (security-minded builders)",
            highlights: [
              "Android Keystore, secure local storage, offline token verification",
              "Device-binding, signature verification, expiry warnings",
              "Anti-tamper patterns (time rollback detection)",
              "Hard-stop enforcement: block model load if license invalid",
            ],
          },
        ],
      },
      {
        dept: "Backend Development (Firebase + APIs)",
        items: [
          {
            title: "Backend Developer Intern (Firebase / Node.js / Python)",
            exp: "0–1 years (APIs + DB basics)",
            highlights: [
              "Firebase Admin SDK / Firestore / Cloud Functions + FCM",
              "OR Node.js (Express/Nest) / Python (FastAPI), REST APIs",
              "Play subscription verification + server-side token verification",
              "License issuance (signed tokens), device linking (max 3), policy + heartbeat + dashboard aggregation",
            ],
          },
        ],
      },
    ],
    []
  );

  // ✅ Google Forms submit (same pattern as your ContactForm)
  // Replace these with your Careers Google Form action + entry IDs (use prefilled link to get entry.*)
  const FORM_ACTION =
    "https://docs.google.com/forms/d/e/REPLACE_WITH_YOUR_FORM_ID/formResponse";

  const ENTRY_FULLNAME = "entry.REPLACE_FULLNAME";
  const ENTRY_PHONE = "entry.REPLACE_PHONE";
  const ENTRY_EMAIL = "entry.REPLACE_EMAIL";
  const ENTRY_CITY = "entry.REPLACE_CITY";
  const ENTRY_INOFFICE = "entry.REPLACE_INOFFICE";
  const ENTRY_DURATION = "entry.REPLACE_DURATION";
  const ENTRY_HOURS = "entry.REPLACE_HOURS";
  const ENTRY_DEPARTMENT = "entry.REPLACE_DEPARTMENT";
  const ENTRY_ROLE = "entry.REPLACE_ROLE";
  const ENTRY_TECH = "entry.REPLACE_TECH";
  const ENTRY_LEVEL = "entry.REPLACE_LEVEL";
  const ENTRY_GITHUB = "entry.REPLACE_GITHUB";
  const ENTRY_LINKEDIN = "entry.REPLACE_LINKEDIN";
  const ENTRY_PORTFOLIO = "entry.REPLACE_PORTFOLIO";
  const ENTRY_PROJECT = "entry.REPLACE_PROJECT";
  const ENTRY_CONTRIB = "entry.REPLACE_CONTRIB";
  const ENTRY_STACK = "entry.REPLACE_STACK";
  const ENTRY_CHALLENGES = "entry.REPLACE_CHALLENGES";
  const ENTRY_IMMEDIATE = "entry.REPLACE_IMMEDIATE";
  const ENTRY_WEEKLYTARGETS = "entry.REPLACE_WEEKLYTARGETS";
  const ENTRY_PRODREVIEWS = "entry.REPLACE_PRODREVIEWS";
  const ENTRY_WHY = "entry.REPLACE_WHY";
  const ENTRY_FEATURE = "entry.REPLACE_FEATURE";
  const ENTRY_DEBUG = "entry.REPLACE_DEBUG";
  const ENTRY_RESUME_LINK = "entry.REPLACE_RESUME_LINK"; // if you collect link instead of file upload

  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    inOffice: "Yes",
    duration: "3 months",
    hoursPerDay: "",
    department: "Android",
    role: "Android Developer Intern (Kotlin + Compose)",
    tech: [],
    level: "Beginner",
    github: "",
    linkedin: "",
    portfolio: "",
    projectTitle: "",
    contribution: "",
    projectStack: "",
    challenges: "",
    immediate: "Yes",
    weeklyTargets: "Yes",
    prodReviews: "Yes",
    why: "",
    feature: "",
    debug: "",
    resumeLink: "",
  });

  const techOptions = [
    "Kotlin",
    "Jetpack Compose",
    "Firebase Auth",
    "FCM",
    "Play Billing",
    "Android Services",
    "Accessibility/Overlay",
    "TFLite",
    "Node.js",
    "Python",
    "FastAPI",
    "Express/NestJS",
    "Firestore",
    "PostgreSQL",
    "JWT/Auth",
    "Crypto basics",
    "Other",
  ];

  const roleOptionsByDept = {
    Android: [
      "Android Developer Intern (Kotlin + Compose)",
      "Android Security & Licensing Intern (App Security)",
    ],
    Backend: ["Backend Developer Intern (Firebase / Node.js / Python)"],
  };

  function onChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function onDeptChange(e) {
    const dept = e.target.value;
    const nextRole = roleOptionsByDept[dept]?.[0] || "";
    setForm((s) => ({ ...s, department: dept, role: nextRole }));
  }

  function toggleTech(t) {
    setForm((s) => {
      const has = s.tech.includes(t);
      const next = has ? s.tech.filter((x) => x !== t) : [...s.tech, t];
      return { ...s, tech: next };
    });
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || "").trim());
  }

  function canSubmit() {
    if (!form.fullName.trim()) return false;
    if (!form.phone.trim()) return false;
    if (!validateEmail(form.email)) return false;
    if (!form.city.trim()) return false;
    if (!form.hoursPerDay.trim()) return false;
    if (!form.projectTitle.trim()) return false;
    if (!form.contribution.trim()) return false;
    if (!form.why.trim()) return false;
    if (!form.debug.trim()) return false;
    return true;
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (!canSubmit()) return;

    setSubmitting(true);
    setSent(false);

    const techText = (form.tech || []).join(", ");
    const data = new URLSearchParams();

    data.append(ENTRY_FULLNAME, form.fullName);
    data.append(ENTRY_PHONE, form.phone);
    data.append(ENTRY_EMAIL, form.email);
    data.append(ENTRY_CITY, form.city);
    data.append(ENTRY_INOFFICE, form.inOffice);
    data.append(ENTRY_DURATION, form.duration);
    data.append(ENTRY_HOURS, form.hoursPerDay);

    data.append(ENTRY_DEPARTMENT, form.department);
    data.append(ENTRY_ROLE, form.role);

    data.append(ENTRY_TECH, techText);
    data.append(ENTRY_LEVEL, form.level);

    data.append(ENTRY_GITHUB, form.github);
    data.append(ENTRY_LINKEDIN, form.linkedin);
    data.append(ENTRY_PORTFOLIO, form.portfolio);

    data.append(ENTRY_PROJECT, form.projectTitle);
    data.append(ENTRY_CONTRIB, form.contribution);
    data.append(ENTRY_STACK, form.projectStack);
    data.append(ENTRY_CHALLENGES, form.challenges);

    data.append(ENTRY_IMMEDIATE, form.immediate);
    data.append(ENTRY_WEEKLYTARGETS, form.weeklyTargets);
    data.append(ENTRY_PRODREVIEWS, form.prodReviews);

    data.append(ENTRY_WHY, form.why);
    data.append(ENTRY_FEATURE, form.feature);
    data.append(ENTRY_DEBUG, form.debug);

    data.append(ENTRY_RESUME_LINK, form.resumeLink);

    try {
      await fetch(FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data.toString(),
      });

      setSent(true);
      setForm((s) => ({
        ...s,
        fullName: "",
        phone: "",
        email: "",
        city: "",
        hoursPerDay: "",
        tech: [],
        github: "",
        linkedin: "",
        portfolio: "",
        projectTitle: "",
        contribution: "",
        projectStack: "",
        challenges: "",
        why: "",
        feature: "",
        debug: "",
        resumeLink: "",
      }));
      setTimeout(() => setSent(false), 3000);
    } catch (err) {
      console.error("Careers form submit error:", err);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="container" style={{ padding: "56px 0" }}>
      {/* HERO */}
      <div style={{ display: "grid", gap: 14, marginBottom: 18 }}>
        <h1 style={{ margin: 0, lineHeight: 1.1 }}>Careers at CensorX</h1>
        <p style={{ margin: 0, color: "var(--muted2)", maxWidth: 820 }}>
          Build safety tech that protects children in real-time. We’re hiring
          paid, in-office interns to ship CensorX Production — real-time content
          censoring + parental safety with offline ML, subscriptions, licensing,
          and dashboard controls.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: 10,
          }}
        >
          {meta.map((m) => (
            <Card
              key={m.k}
              className="soft"
              style={{
                gridColumn: "span 6",
                padding: 16,
              }}
            >
              <div style={{ fontSize: 12, color: "var(--muted)" }}>{m.k}</div>
              <div style={{ fontWeight: 900, marginTop: 6 }}>{m.v}</div>
            </Card>
          ))}
        </div>
      </div>

      {/* OPEN ROLES */}
      <Section
        title="Open Roles (Internships)"
        subtitle="Two departments. In-office. Paid. Selection is based on seriousness + ability to ship."
      >
        <div style={{ display: "grid", gap: 14 }}>
          {roles.map((dept) => (
            <div key={dept.dept} style={{ display: "grid", gap: 10 }}>
              <div
                style={{
                  fontWeight: 950,
                  fontSize: 16,
                  letterSpacing: 0.2,
                }}
              >
                {dept.dept}
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(12, 1fr)",
                  gap: 12,
                }}
              >
                {dept.items.map((r) => (
                  <Card
                    key={r.title}
                    className="soft"
                    style={{ gridColumn: "span 12", padding: 18 }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: 10,
                        flexWrap: "wrap",
                        alignItems: "baseline",
                      }}
                    >
                      <div style={{ fontSize: 16, fontWeight: 950 }}>
                        {r.title}
                      </div>
                      <div style={{ color: "var(--muted2)", fontSize: 13 }}>
                        {r.exp}
                      </div>
                    </div>

                    <ul style={{ margin: "10px 0 0", paddingLeft: 18 }}>
                      {r.highlights.map((h) => (
                        <li key={h} style={{ color: "var(--muted2)" }}>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* SELECTION PROCESS + BENEFITS */}
      <Section
        title="Selection Process"
        subtitle="Simple, fast, practical. We don’t select only on resumes."
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: 12,
          }}
        >
          <Card className="soft" style={{ gridColumn: "span 6", padding: 18 }}>
            <div style={{ fontWeight: 950, marginBottom: 10 }}>
              Steps (Internships)
            </div>
            <ol style={{ margin: 0, paddingLeft: 18, color: "var(--muted2)" }}>
              <li>Application Form Submission</li>
              <li>Short Screening Call (10–15 mins)</li>
              <li>
                Practical Task (Mini Assignment)
                <div style={{ fontSize: 12, marginTop: 6 }}>
                  Android: small feature/flow • Backend: 1–2 APIs + data model
                </div>
              </li>
              <li>Technical Interview (30–45 mins)</li>
              <li>Final Confirmation + Offer</li>
            </ol>
          </Card>

          <Card className="soft" style={{ gridColumn: "span 6", padding: 18 }}>
            <div style={{ fontWeight: 950, marginBottom: 10 }}>
              Internship Benefits
            </div>
            <ul style={{ margin: 0, paddingLeft: 18, color: "var(--muted2)" }}>
              <li>Paid internship (in-office)</li>
              <li>
                Work on real production: subscriptions, licensing, security, ML
              </li>
              <li>Mentorship + structured execution plan</li>
              <li>Strong portfolio outcomes (real features shipped)</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* APPLICATION FORM */}
      <Section
        title="Apply Now"
        subtitle="Fill the form below. If your profile matches, we’ll schedule a short screening call."
      >
        <Card className="soft">
          <form onSubmit={onSubmit} style={{ display: "grid", gap: 14 }}>
            {/* A — Basic Details */}
            <FormHeader
              title="Section A — Basic Details"
              subtitle="Tell us who you are + your availability."
            />

            <Grid2>
              <Field label="Full Name *">
                <input
                  className="inp"
                  name="fullName"
                  value={form.fullName}
                  onChange={onChange}
                  placeholder="Your full name"
                />
              </Field>

              <Field label="Phone Number (WhatsApp) *">
                <input
                  className="inp"
                  name="phone"
                  value={form.phone}
                  onChange={onChange}
                  placeholder="+91 XXXXX XXXXX"
                />
              </Field>

              <Field label="Email Address *">
                <input
                  className="inp"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="you@example.com"
                />
              </Field>

              <Field label="Current City *">
                <input
                  className="inp"
                  name="city"
                  value={form.city}
                  onChange={onChange}
                  placeholder="Mumbai / Navi Mumbai / Panvel..."
                />
              </Field>
            </Grid2>

            <Grid3>
              <Field label="Available for in-office internship?">
                <select
                  className="inp"
                  name="inOffice"
                  value={form.inOffice}
                  onChange={onChange}
                >
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </Field>

              <Field label="Internship Duration">
                <select
                  className="inp"
                  name="duration"
                  value={form.duration}
                  onChange={onChange}
                >
                  <option>2 months</option>
                  <option>3 months</option>
                  <option>4 months</option>
                  <option>6 months</option>
                </select>
              </Field>

              <Field label="Daily availability (hours/day) *">
                <input
                  className="inp"
                  name="hoursPerDay"
                  value={form.hoursPerDay}
                  onChange={onChange}
                  placeholder="e.g., 5"
                />
              </Field>
            </Grid3>

            <Divider />

            {/* B — Role Applying For */}
            <FormHeader
              title="Section B — Role Applying For"
              subtitle="Choose department + role."
            />

            <Grid2>
              <Field label="Department">
                <select
                  className="inp"
                  name="department"
                  value={form.department}
                  onChange={onDeptChange}
                >
                  <option value="Android">Android</option>
                  <option value="Backend">Backend</option>
                </select>
              </Field>

              <Field label="Role">
                <select
                  className="inp"
                  name="role"
                  value={form.role}
                  onChange={onChange}
                >
                  {(roleOptionsByDept[form.department] || []).map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </Field>
            </Grid2>

            <Divider />

            {/* C — Skills & Tools */}
            <FormHeader
              title="Section C — Skills & Tools"
              subtitle="Pick what you know best."
            />

            <Field label="Primary tech you know (select all that apply)">
              <div className="chips">
                {techOptions.map((t) => {
                  const active = form.tech.includes(t);
                  return (
                    <button
                      key={t}
                      type="button"
                      className={`chip ${active ? "on" : ""}`}
                      onClick={() => toggleTech(t)}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
            </Field>

            <Grid2>
              <Field label="Experience level">
                <select
                  className="inp"
                  name="level"
                  value={form.level}
                  onChange={onChange}
                >
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Strong</option>
                </select>
              </Field>

              <Field label="GitHub / LinkedIn / Portfolio (any)">
                <div style={{ display: "grid", gap: 8 }}>
                  <input
                    className="inp"
                    name="github"
                    value={form.github}
                    onChange={onChange}
                    placeholder="GitHub link"
                  />
                  <input
                    className="inp"
                    name="linkedin"
                    value={form.linkedin}
                    onChange={onChange}
                    placeholder="LinkedIn link"
                  />
                  <input
                    className="inp"
                    name="portfolio"
                    value={form.portfolio}
                    onChange={onChange}
                    placeholder="Portfolio link"
                  />
                </div>
              </Field>
            </Grid2>

            <Divider />

            {/* D — Project Proof */}
            <FormHeader
              title="Section D — Project Proof"
              subtitle="Show one strong project (clear proof > long resume)."
            />

            <Field label="Best project you’ve built (title) *">
              <input
                className="inp"
                name="projectTitle"
                value={form.projectTitle}
                onChange={onChange}
                placeholder="e.g., Subscription app with Firebase + Billing"
              />
            </Field>

            <Field label="Your contribution (what exactly you did) *">
              <textarea
                className="inp"
                name="contribution"
                value={form.contribution}
                onChange={onChange}
                placeholder="3–5 lines. Be specific."
                rows={4}
              />
            </Field>

            <Grid2>
              <Field label="Tech stack used">
                <input
                  className="inp"
                  name="projectStack"
                  value={form.projectStack}
                  onChange={onChange}
                  placeholder="Kotlin, Compose, Firebase..."
                />
              </Field>

              <Field label="Challenges faced + how you solved">
                <textarea
                  className="inp"
                  name="challenges"
                  value={form.challenges}
                  onChange={onChange}
                  placeholder="Short + direct."
                  rows={3}
                />
              </Field>
            </Grid2>

            <Divider />

            {/* E — Availability & Work Style */}
            <FormHeader
              title="Section E — Availability & Work Style"
              subtitle="Production work needs consistency."
            />

            <Grid3>
              <Field label="Can you start immediately?">
                <select
                  className="inp"
                  name="immediate"
                  value={form.immediate}
                  onChange={onChange}
                >
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </Field>

              <Field label="Comfortable with weekly progress targets?">
                <select
                  className="inp"
                  name="weeklyTargets"
                  value={form.weeklyTargets}
                  onChange={onChange}
                >
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </Field>

              <Field label="Comfortable with production code + reviews?">
                <select
                  className="inp"
                  name="prodReviews"
                  value={form.prodReviews}
                  onChange={onChange}
                >
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </Field>
            </Grid3>

            <Divider />

            {/* F — Short Questions */}
            <FormHeader
              title="Section F — Short Questions"
              subtitle="This helps us filter for seriousness."
            />

            <Field label="Why do you want to work on CensorX? (3–5 lines) *">
              <textarea
                className="inp"
                name="why"
                value={form.why}
                onChange={onChange}
                placeholder="Keep it real + focused."
                rows={4}
              />
            </Field>

            <Field label="What is one feature you’d love to build in this project? (3–5 lines)">
              <textarea
                className="inp"
                name="feature"
                value={form.feature}
                onChange={onChange}
                placeholder="Example: license enforcement, dashboard sync, onboarding gates..."
                rows={4}
              />
            </Field>

            <Field label="If you get stuck, how do you debug/solve? (2–3 lines) *">
              <textarea
                className="inp"
                name="debug"
                value={form.debug}
                onChange={onChange}
                placeholder="Your process matters."
                rows={3}
              />
            </Field>

            <Divider />

            {/* G — Uploads (link-based) */}
            <FormHeader
              title="Section G — Resume"
              subtitle="If your Google Form supports file upload, keep it there. Here we collect a link as backup."
            />

            <Field label="Resume link (Drive/Dropbox) — recommended *">
              <input
                className="inp"
                name="resumeLink"
                value={form.resumeLink}
                onChange={onChange}
                placeholder="Paste your resume link (public / accessible)."
              />
              <div style={{ marginTop: 8, fontSize: 12, color: "var(--muted2)" }}>
                Tip: If you prefer file upload, enable “File upload” in your Google Form and map its entry ID instead.
              </div>
            </Field>

            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <Button
                variant="primary"
                type="submit"
                disabled={submitting || !canSubmit()}
              >
                {submitting
                  ? "Submitting..."
                  : "Apply Now (Paid Internship – In Office)"}
              </Button>

              {sent && (
                <span style={{ color: "var(--muted2)" }}>
                  Application submitted ✅
                </span>
              )}

              {!canSubmit() && (
                <span style={{ color: "var(--muted2)", fontSize: 12 }}>
                  Fill required fields marked *
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

          .chips{
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
          }
          .chip{
            border-radius: 999px;
            border: 1px solid rgba(255,255,255,0.10);
            background: rgba(255,255,255,0.03);
            color: rgba(255,255,255,0.86);
            padding: 8px 10px;
            font-weight: 800;
            font-size: 12px;
            cursor: pointer;
            transition: transform .08s ease, border-color .12s ease, background .12s ease;
          }
          .chip:hover{ transform: translateY(-1px); }
          .chip.on{
            border-color: rgba(50,178,169,0.40);
            background: rgba(50,178,169,0.10);
            color: rgba(255,255,255,0.95);
          }

          @media (max-width: 900px){
            .col-span-6{ grid-column: span 12 !important; }
          }
        `}</style>
      </Section>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label style={{ display: "grid", gap: 6 }}>
      <span style={{ fontWeight: 900, color: "var(--muted)" }}>{label}</span>
      {children}
    </label>
  );
}

function FormHeader({ title, subtitle }) {
  return (
    <div style={{ display: "grid", gap: 6 }}>
      <div style={{ fontWeight: 950 }}>{title}</div>
      {subtitle ? (
        <div style={{ color: "var(--muted2)", fontSize: 13 }}>{subtitle}</div>
      ) : null}
    </div>
  );
}

function Divider() {
  return (
    <div
      aria-hidden="true"
      style={{
        height: 1,
        width: "100%",
        background: "rgba(255,255,255,0.07)",
        margin: "6px 0",
      }}
    />
  );
}

function Grid2({ children }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        gap: 12,
      }}
    >
      {React.Children.map(children, (child, i) => (
        <div key={i} style={{ gridColumn: "span 6" }} className="col-span-6">
          {child}
        </div>
      ))}
    </div>
  );
}

function Grid3({ children }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        gap: 12,
      }}
    >
      {React.Children.map(children, (child, i) => (
        <div key={i} style={{ gridColumn: "span 4" }} className="col-span-6">
          {child}
        </div>
      ))}
    </div>
  );
}