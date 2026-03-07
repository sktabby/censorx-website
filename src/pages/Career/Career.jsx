import React, { useMemo, useState } from "react";
import Section from "../../components/ui/Section";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import "./Career.css";

export default function Career() {
  const FORM_ACTION =
    "https://docs.google.com/forms/d/e/REPLACE_WITH_YOUR_FORM_ID/formResponse";

  const ENTRY_FULLNAME = "entry.REPLACE_FULLNAME";
  const ENTRY_PHONE = "entry.REPLACE_PHONE";
  const ENTRY_EMAIL = "entry.REPLACE_EMAIL";
  const ENTRY_COLLEGE = "entry.REPLACE_COLLEGE";
  const ENTRY_PASSING_YEAR = "entry.REPLACE_PASSING_YEAR";
  const ENTRY_ROLE = "entry.REPLACE_ROLE";
  const ENTRY_TECH = "entry.REPLACE_TECH";
  const ENTRY_LEVEL = "entry.REPLACE_LEVEL";
  const ENTRY_YOE = "entry.REPLACE_YOE";
  const ENTRY_GITHUB = "entry.REPLACE_GITHUB";
  const ENTRY_LINKEDIN = "entry.REPLACE_LINKEDIN";
  const ENTRY_PORTFOLIO = "entry.REPLACE_PORTFOLIO";
  const ENTRY_PROJECT = "entry.REPLACE_PROJECT";
  const ENTRY_CONTRIB = "entry.REPLACE_CONTRIB";
  const ENTRY_STACK = "entry.REPLACE_STACK";
  const ENTRY_ONE_LINE = "entry.REPLACE_ONE_LINE";
  const ENTRY_FEATURE = "entry.REPLACE_FEATURE";
  const ENTRY_RESUME_TEXT = "entry.REPLACE_RESUME_TEXT";

  const roleOptions = ["AIML Engineer Intern", "Android Developer Intern"];

  const aimlTechOptions = [
    "Python",
    "NumPy",
    "Pandas",
    "PyTorch",
    "TensorFlow",
    "Machine Learning Fundamentals",
    "Neural Network Training",
    "Model Evaluation (Precision, Recall, F1 Score)",
    "Image Processing Basics",
    "Dataset Preparation & Data Cleaning",
    "Dataset Labeling & Annotation",
    "OpenCV",
    "Pillow (PIL)",
    "Albumentations",
    "Transfer Learning & Model Fine-Tuning",
    "Image Classification Models (EfficientNet, ResNet, MobileNet)",
    "Multi-Label Classification",
    "Video Processing & Frame Extraction",
    "FFmpeg",
    "Temporal / Video Classification Models",
    "Natural Language Processing (NLP)",
    "Text Classification / Sentiment Analysis",
    "Transformer Models (BERT / DistilBERT)",
    "HuggingFace Transformers",
    "NLTK",
    "spaCy",
  ];

  const androidTechOptions = [
    "Kotlin Programming",
    "Android SDK Fundamentals",
    "Jetpack Compose for UI Development",
    "MVVM or Clean Architecture",
    "Kotlin Coroutines / Asynchronous Programming",
    "Android Permission Handling",
    "Understanding of Background Services and Android Components",
    "Basic Understanding of Mobile Application Security",
    "AccessibilityService Implementation",
    "Notification Listener / Notification-Based Processing",
    "Firebase Authentication and Firestore",
    "Android Performance Optimization",
    "Experience with Real-Time Data Processing",
    "Understanding of Google Play Policy Requirements",
    "Knowledge of Parental Control or Monitoring App Development",
  ];

  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // collapsed by default
  const [openSections, setOpenSections] = useState({
    a: false,
    b: false,
    c: false,
    d: false,
    e: false,
    f: false,
  });

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    college: "",
    passingYear: "",
    role: "AIML Engineer Intern",
    tech: [],
    level: "",
    yearsOfExperience: "",
    github: "",
    linkedin: "",
    portfolio: "",
    projectTitle: "",
    contribution: "",
    projectStack: "",
    oneLine: "",
    feature: "",
    resumeFile: null,
  });

  const techOptions = useMemo(() => {
    return form.role === "AIML Engineer Intern"
      ? aimlTechOptions
      : androidTechOptions;
  }, [form.role]);

  function toggleSection(key) {
    setOpenSections((s) => ({ ...s, [key]: !s[key] }));
  }

  function onChange(e) {
    const { name, value } = e.target;

    if (name === "role") {
      setForm((s) => ({
        ...s,
        role: value,
        tech: [],
      }));
      return;
    }

    setForm((s) => ({ ...s, [name]: value }));
  }

  function onFileChange(e) {
    const file = e.target.files?.[0] || null;

    if (!file) {
      setForm((s) => ({ ...s, resumeFile: null }));
      return;
    }

    if (file.type !== "application/pdf") {
      alert("Please upload PDF file only.");
      e.target.value = "";
      return;
    }

    setForm((s) => ({ ...s, resumeFile: file }));
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

  const sectionComplete = {
    a:
      !!form.fullName.trim() &&
      !!form.phone.trim() &&
      validateEmail(form.email) &&
      !!form.college.trim() &&
      !!form.passingYear.trim(),

    b: !!form.role.trim(),

    c:
      !!form.level.trim() &&
      !!form.yearsOfExperience.trim() &&
      form.tech.length > 0 &&
      (!!form.github.trim() || !!form.linkedin.trim() || !!form.portfolio.trim()),

    d:
      !!form.projectTitle.trim() &&
      !!form.contribution.trim() &&
      !!form.projectStack.trim(),

    e: !!form.oneLine.trim() && !!form.feature.trim(),

    f: !!form.resumeFile,
  };

  const completedCount = Object.values(sectionComplete).filter(Boolean).length;
  const totalSections = Object.keys(sectionComplete).length;
  const progress = Math.round((completedCount / totalSections) * 100);

  function canSubmit() {
    return Object.values(sectionComplete).every(Boolean);
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
    data.append(ENTRY_COLLEGE, form.college);
    data.append(ENTRY_PASSING_YEAR, form.passingYear);
    data.append(ENTRY_ROLE, form.role);
    data.append(ENTRY_TECH, techText);
    data.append(ENTRY_LEVEL, form.level);
    data.append(ENTRY_YOE, form.yearsOfExperience);
    data.append(ENTRY_GITHUB, form.github);
    data.append(ENTRY_LINKEDIN, form.linkedin);
    data.append(ENTRY_PORTFOLIO, form.portfolio);
    data.append(ENTRY_PROJECT, form.projectTitle);
    data.append(ENTRY_CONTRIB, form.contribution);
    data.append(ENTRY_STACK, form.projectStack);
    data.append(ENTRY_ONE_LINE, form.oneLine);
    data.append(ENTRY_FEATURE, form.feature);
    data.append(
      ENTRY_RESUME_TEXT,
      form.resumeFile
        ? `PDF Selected: ${form.resumeFile.name}`
        : "No PDF uploaded"
    );

    try {
      await fetch(FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data.toString(),
      });

      setSent(true);
      setForm({
        fullName: "",
        phone: "",
        email: "",
        college: "",
        passingYear: "",
        role: "AIML Engineer Intern",
        tech: [],
        level: "",
        yearsOfExperience: "",
        github: "",
        linkedin: "",
        portfolio: "",
        projectTitle: "",
        contribution: "",
        projectStack: "",
        oneLine: "",
        feature: "",
        resumeFile: null,
      });

      setTimeout(() => setSent(false), 3000);
    } catch (err) {
      console.error("Careers form submit error:", err);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="career-page container">
      <Section
        title="Hiring Process — Application Form"
        subtitle="Fill the form carefully. Complete all sections before submitting."
      >
        <div className="career-top-info">
          <Card className="soft career-info-card">
            <div className="career-info-card-head">
              <div>
                <div className="career-mini-title">Open Positions</div>
                <div className="career-mini-subtitle">
                  Currently hiring for two internship roles
                </div>
              </div>
              <div className="career-pill">{completedCount}/{totalSections} Sections Done</div>
            </div>

            <div className="career-open-positions">
              <div className="career-position-box">
                <div className="career-position-role">AIML Engineer Intern</div>
                <div className="career-position-text">
                  For candidates with ML, NLP, CV, model training, dataset preparation, and evaluation skills.
                </div>
              </div>

              <div className="career-position-box">
                <div className="career-position-role">Android Developer Intern</div>
                <div className="career-position-text">
                  For candidates with Kotlin, Compose, Android services, Firebase, permissions, and policy-safe app features.
                </div>
              </div>
            </div>
          </Card>

          <Card className="soft career-progress-card">
            <div className="career-progress-head">
              <span className="career-mini-title">Application Progress</span>
              <span className="career-progress-text">{progress}% Complete</span>
            </div>
            <div className="career-progress-track">
              <div
                className="career-progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
          </Card>
        </div>

        <Card className="soft career-form-card">
          <form onSubmit={onSubmit} className="career-form">
            <CollapsibleSection
              title="Section A — Basic Details"
              subtitle="Personal and academic information"
              open={openSections.a}
              onToggle={() => toggleSection("a")}
              complete={sectionComplete.a}
            >
              <Grid2>
                <Field label="Name *">
                  <input
                    className="inp"
                    name="fullName"
                    value={form.fullName}
                    onChange={onChange}
                    placeholder="Enter your full name"
                  />
                </Field>

                <Field label="Phone *">
                  <input
                    className="inp"
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    placeholder="+91 XXXXX XXXXX"
                  />
                </Field>

                <Field label="Email *">
                  <input
                    className="inp"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="Enter your email"
                  />
                </Field>

                <Field label="College *">
                  <input
                    className="inp"
                    name="college"
                    value={form.college}
                    onChange={onChange}
                    placeholder="Enter your college name"
                  />
                </Field>

                <Field label="Passing Year *">
                  <input
                    className="inp"
                    name="passingYear"
                    value={form.passingYear}
                    onChange={onChange}
                    placeholder="e.g. 2026"
                  />
                </Field>
              </Grid2>
            </CollapsibleSection>

            <CollapsibleSection
              title="Section B — Role Applying For"
              subtitle="Choose the internship role"
              open={openSections.b}
              onToggle={() => toggleSection("b")}
              complete={sectionComplete.b}
            >
              <Grid2>
                <Field label="Position Applying For *">
                  <div className="select-wrap">
                    <select
                      className="inp select-inp"
                      name="role"
                      value={form.role}
                      onChange={onChange}
                    >
                      {roleOptions.map((role) => (
                        <option key={role} value={role}>
                          {role}
                        </option>
                      ))}
                    </select>
                  </div>
                </Field>
              </Grid2>
            </CollapsibleSection>

            <CollapsibleSection
              title="Section C — Skills & Tools"
              subtitle="Select your primary tools and profile links"
              open={openSections.c}
              onToggle={() => toggleSection("c")}
              complete={sectionComplete.c}
            >
              <Field label="Primary Tools You Know (Multi Select) *">
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

              <Grid3>
                <Field label="Experience Level *">
                  <div className="select-wrap">
                    <select
                      className="inp select-inp"
                      name="level"
                      value={form.level}
                      onChange={onChange}
                    >
                      <option value="">Select level</option>
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                    </select>
                  </div>
                </Field>

                <Field label="Years of Experience *">
                  <input
                    className="inp"
                    name="yearsOfExperience"
                    value={form.yearsOfExperience}
                    onChange={onChange}
                    placeholder="e.g. 0, 1, 2"
                  />
                </Field>

                <Field label="GitHub">
                  <input
                    className="inp"
                    name="github"
                    value={form.github}
                    onChange={onChange}
                    placeholder="GitHub link"
                  />
                </Field>
              </Grid3>

              <Grid2>
                <Field label="LinkedIn">
                  <input
                    className="inp"
                    name="linkedin"
                    value={form.linkedin}
                    onChange={onChange}
                    placeholder="LinkedIn profile link"
                  />
                </Field>

                <Field label="Portfolio">
                  <input
                    className="inp"
                    name="portfolio"
                    value={form.portfolio}
                    onChange={onChange}
                    placeholder="Portfolio link"
                  />
                </Field>
              </Grid2>
            </CollapsibleSection>

            <CollapsibleSection
              title="Section D — Project Proof"
              subtitle="Show your strongest project"
              open={openSections.d}
              onToggle={() => toggleSection("d")}
              complete={sectionComplete.d}
            >
              <Field label="Best project you’ve built (title) *">
                <input
                  className="inp"
                  name="projectTitle"
                  value={form.projectTitle}
                  onChange={onChange}
                  placeholder="Enter project title"
                />
              </Field>

              <Field label="Your contribution (what exactly you did) *">
                <textarea
                  className="inp"
                  name="contribution"
                  value={form.contribution}
                  onChange={onChange}
                  placeholder="Explain your exact contribution"
                  rows={4}
                />
              </Field>

              <Field label="Tech stack used *">
                <input
                  className="inp"
                  name="projectStack"
                  value={form.projectStack}
                  onChange={onChange}
                  placeholder="e.g. Kotlin, Firebase, Python, PyTorch"
                />
              </Field>
            </CollapsibleSection>

            <CollapsibleSection
              title="Section E — Short Questions"
              subtitle="Tell us how you think about CensorX"
              open={openSections.e}
              onToggle={() => toggleSection("e")}
              complete={sectionComplete.e}
            >
              <Field label="What do you know about censorx.ai? Describe in one line *">
                <textarea
                  className="inp"
                  name="oneLine"
                  value={form.oneLine}
                  onChange={onChange}
                  placeholder="Write in one line"
                  rows={3}
                />
              </Field>

              <Field label="What is one feature you’d love to build in this project? (3–5 lines) *">
                <textarea
                  className="inp"
                  name="feature"
                  value={form.feature}
                  onChange={onChange}
                  placeholder="Write 3–5 lines"
                  rows={4}
                />
              </Field>
            </CollapsibleSection>

            <CollapsibleSection
              title="Section F — Resume"
              subtitle="Upload your resume in PDF format"
              open={openSections.f}
              onToggle={() => toggleSection("f")}
              complete={sectionComplete.f}
            >
              <Field label="Upload Resume PDF *">
                <label className="pdf-upload-box">
                  <input
                    type="file"
                    accept="application/pdf"
                    onChange={onFileChange}
                    className="pdf-hidden-input"
                  />
                  <div className="pdf-upload-content">
                    <div className="pdf-upload-icon">📄</div>
                    <div className="pdf-upload-title">
                      {form.resumeFile ? form.resumeFile.name : "Choose PDF File"}
                    </div>
                    <div className="pdf-upload-subtitle">
                      PDF only • Max size depends on your final backend/upload handling
                    </div>
                  </div>
                </label>
              </Field>

              <div className="career-note">
                Note: this UI accepts PDF input, but direct file upload to Google Forms does not work through this custom fetch method. For real PDF storage, use Firebase Storage/backend or embed the original Google Form upload field.
              </div>
            </CollapsibleSection>

            <div className="career-submit-row">
              <Button
                variant="primary"
                type="submit"
                disabled={submitting || !canSubmit()}
              >
                {submitting ? "Submitting..." : "Submit Application"}
              </Button>

              {sent && (
                <span className="career-submit-note success">
                  Application submitted successfully ✅
                </span>
              )}

              {!canSubmit() && (
                <span className="career-submit-note">
                  Complete all sections to submit
                </span>
              )}
            </div>
          </form>
        </Card>
      </Section>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="career-field">
      <span className="career-label">{label}</span>
      {children}
    </label>
  );
}

function CollapsibleSection({
  title,
  subtitle,
  open,
  onToggle,
  children,
  complete,
}) {
  return (
    <div className={`career-collapsible ${complete ? "done" : ""}`}>
      <button
        type="button"
        className="career-collapsible-head"
        onClick={onToggle}
      >
        <div className="career-collapsible-left">
          <div className="career-collapsible-title-row">
            <div className="career-collapsible-title">{title}</div>
            {complete && <span className="career-complete-badge">✔ Complete</span>}
          </div>
          {subtitle ? (
            <div className="career-collapsible-subtitle">{subtitle}</div>
          ) : null}
        </div>

        <span className={`career-toggle ${open ? "open" : ""}`}>
          {open ? "Hide" : "View"}
        </span>
      </button>

      {open && <div className="career-collapsible-body">{children}</div>}
    </div>
  );
}

function Grid2({ children }) {
  return (
    <div className="career-grid career-grid-2">
      {React.Children.map(children, (child, i) => (
        <div key={i} className="career-grid-item">
          {child}
        </div>
      ))}
    </div>
  );
}

function Grid3({ children }) {
  return (
    <div className="career-grid career-grid-3">
      {React.Children.map(children, (child, i) => (
        <div key={i} className="career-grid-item">
          {child}
        </div>
      ))}
    </div>
  );
}