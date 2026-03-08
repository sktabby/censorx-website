import React, { useMemo, useState } from "react";
import Section from "../../components/ui/Section";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import "./Career.css";

export default function Career() {
  const GOOGLE_FORM_ACTION =
    "https://docs.google.com/forms/d/e/1FAIpQLSfSSI3GzW63zzsZyESFG2Ay8gps_zkISOpXeW5kY5V45ujAsw/formResponse";
  const FORM_PROXY = import.meta.env.VITE_CAREER_FORM_PROXY?.trim();

  const ENTRY_FULLNAME = "entry.1168823030";
  const ENTRY_PHONE = "entry.2133584293";
  const ENTRY_EMAIL = "entry.1665577135";
  const ENTRY_COLLEGE = "entry.956283703";
  const ENTRY_PASSING_YEAR = "entry.8653486";

  const ENTRY_ROLE = "entry.1784132193";
  const ENTRY_LEVEL = "entry.1652615009";
  const ENTRY_YOE = "entry.1116189191";
  const ENTRY_LAPTOP = "entry.666967842";
  const ENTRY_PROFILE = "entry.1891684248";

  const ENTRY_AIML_TECH = "entry.900693916";
  const ENTRY_ANDROID_TECH = "entry.446159435";

  const ENTRY_PROJECT = "entry.848944499";
  const ENTRY_CONTRIB = "entry.2019725695";
  const ENTRY_STACK = "entry.1771726744";

  const ENTRY_ONE_LINE = "entry.1124866945";
  const ENTRY_FEATURE = "entry.581197367";

  // This is the current Google Form text field for resume sharing.
  const ENTRY_RESUME_LINK = "entry.1434083192";

  const roleOptions = ["AIML Engineer Intern", "Andriod Developer Intern"];

  const aimlTechOptions = [
    "Python",
    "NumPy",
    "Pandas",
    "PyTorch or TensorFlow",
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
    "NLTK or spaCy",
  ];

  const androidTechOptions = [
    "Kotlin programming",
    "Android SDK fundamentals",
    "Jetpack Compose for UI development",
    "MVVM or Clean Architecture",
    "Kotlin Coroutines / asynchronous programming",
    "Android permission handling",
    "Understanding of background services and Android components",
    "Basic understanding of mobile application security",
    "AccessibilityService implementation",
    "Notification Listener / notification-based processing",
    "Firebase Authentication and Firestore",
    "Android performance optimization",
    "Experience with real-time data processing",
    "Understanding of Google Play policy requirements",
    "Knowledge of parental control or monitoring app development",
  ];

  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [openSections, setOpenSections] = useState({
    a: false,
    b: false,
    c: false,
    d: false,
    e: false,
    f: false,
  });

  const [popup, setPopup] = useState({
    show: false,
    type: "",
    message: "",
  });

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    college: "",
    passingYear: "",
    role: "AIML Engineer Intern",
    level: "",
    yearsOfExperience: "",
    hasLaptop: "Yes",
    profileLink: "",
    tech: [],
    projectTitle: "",
    contribution: "",
    projectStack: "",
    oneLine: "",
    feature: "",
    resumeLink: "",
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

  function showPopup(type, message) {
    setPopup({ show: true, type, message });

    setTimeout(() => {
      setPopup({ show: false, type: "", message: "" });
    }, 3000);
  }

  const sectionComplete = {
    a:
      !!form.fullName.trim() &&
      !!form.phone.trim() &&
      validateEmail(form.email) &&
      !!form.college.trim() &&
      !!form.passingYear.trim(),

    b:
      !!form.role.trim() &&
      !!form.level.trim() &&
      !!form.yearsOfExperience.trim() &&
      !!form.hasLaptop.trim() &&
      !!form.profileLink.trim(),

    c: form.tech.length > 0,

    d:
      !!form.projectTitle.trim() &&
      !!form.contribution.trim() &&
      !!form.projectStack.trim(),

    e:
      !!form.oneLine.trim() &&
      !!form.feature.trim(),

    f: !!form.resumeLink.trim(),
  };

  const progressSections = ["a", "b", "c", "d", "e", "f"];
  const completedCount = progressSections.filter((key) => sectionComplete[key]).length;
  const totalSections = progressSections.length;
  const progress = Math.round((completedCount / totalSections) * 100);

  function canSubmit() {
    return Object.values(sectionComplete).every(Boolean);
  }

  function buildPayload() {
    return {
      fullName: form.fullName.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
      college: form.college.trim(),
      passingYear: form.passingYear.trim(),
      role: form.role,
      level: form.level.trim(),
      yearsOfExperience: form.yearsOfExperience.trim(),
      hasLaptop: form.hasLaptop,
      profileLink: form.profileLink.trim(),
      tech: [...form.tech],
      projectTitle: form.projectTitle.trim(),
      contribution: form.contribution.trim(),
      projectStack: form.projectStack.trim(),
      oneLine: form.oneLine.trim(),
      feature: form.feature.trim(),
      resumeLink: form.resumeLink.trim(),
    };
  }

  async function submitToProxy(payload) {
    await fetch(FORM_PROXY, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
    });
  }

  async function submitToGoogleForm(payload) {
    const techText = (payload.tech || []).join(", ");
    const data = new URLSearchParams();

    data.append(ENTRY_FULLNAME, payload.fullName);
    data.append(ENTRY_PHONE, payload.phone);
    data.append(ENTRY_EMAIL, payload.email);
    data.append(ENTRY_COLLEGE, payload.college);
    data.append(ENTRY_PASSING_YEAR, payload.passingYear);

    data.append(ENTRY_ROLE, payload.role);
    data.append(ENTRY_LEVEL, payload.level);
    data.append(ENTRY_YOE, payload.yearsOfExperience);
    data.append(ENTRY_LAPTOP, payload.hasLaptop);
    data.append(ENTRY_PROFILE, payload.profileLink);

    if (payload.role === "AIML Engineer Intern") {
      data.append(ENTRY_AIML_TECH, techText);
    } else {
      data.append(ENTRY_ANDROID_TECH, techText);
    }

    data.append(ENTRY_PROJECT, payload.projectTitle);
    data.append(ENTRY_CONTRIB, payload.contribution);
    data.append(ENTRY_STACK, payload.projectStack);
    data.append(ENTRY_ONE_LINE, payload.oneLine);
    data.append(ENTRY_FEATURE, payload.feature);
    data.append(ENTRY_RESUME_LINK, payload.resumeLink);

    await fetch(GOOGLE_FORM_ACTION, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: data.toString(),
    });
  }

  async function onSubmit(e) {
    e.preventDefault();

    const currentScrollY = window.scrollY;

    if (!canSubmit()) {
      showPopup("warning", "Please complete all required sections before submitting.");
      requestAnimationFrame(() => {
        window.scrollTo({ top: currentScrollY, behavior: "auto" });
      });
      return;
    }

    setSubmitting(true);

    try {
      const payload = buildPayload();

      if (FORM_PROXY) {
        await submitToProxy(payload);
      } else {
        await submitToGoogleForm(payload);
      }

      showPopup("success", "Application submitted successfully.");

      requestAnimationFrame(() => {
        window.scrollTo({ top: currentScrollY, behavior: "auto" });
      });

      // Reset after popup closes / delay
      setTimeout(() => {
        setForm({
          fullName: "",
          phone: "",
          email: "",
          college: "",
          passingYear: "",
          role: "AIML Engineer Intern",
          level: "",
          yearsOfExperience: "",
          hasLaptop: "Yes",
          profileLink: "",
          tech: [],
          projectTitle: "",
          contribution: "",
          projectStack: "",
          oneLine: "",
          feature: "",
          resumeLink: "",
        });

        setOpenSections({
          a: false,
          b: false,
          c: false,
          d: false,
          e: false,
          f: false,
        });
      }, 3000);
    } catch (err) {
      console.error("Careers form submit error:", err);
      showPopup("error", "Error submitting application. Please try again.");

      requestAnimationFrame(() => {
        window.scrollTo({ top: currentScrollY, behavior: "auto" });
      });
    } finally {
      setSubmitting(false);
    }
  }


  return (
    <div className="">
      <Section
        title="Apply For Internship at Censorx.ai"
        subtitle="We are Expanding Our Team!"
      >

        <div className="career-top-info">
          <Card className="soft career-info-card">
            <div className="career-info-card-head">
              <div>
                <div className="career-mini-title">Open Positions</div>
                <div className="career-mini-subtitle">
                  Apply for the role that best matches your skills
                </div>
              </div>

              <div className="career-info-actions">

                <a
                  href="/files/Censorx Technologies.pdf"
                  download="Censorx Technologies.pdf"
                  className="career-details-btn"
                >
                  Details
                </a>
                <button
                  type="button"
                  className="career-apply-btn"
                  onClick={() => {
                    const formSection = document.getElementById("career-form-section");
                    if (formSection) {
                      const topOffset = 90;
                      const elementTop =
                        formSection.getBoundingClientRect().top + window.pageYOffset - topOffset;

                      window.scrollTo({
                        top: elementTop,
                        behavior: "smooth",
                      });
                    }
                  }}
                >
                  Apply Now
                </button>
              </div>
            </div>

            <div className="career-open-positions">
              <div className="career-position-box">
                <div className="career-position-role">AIML Engineer Intern</div>
                <div className="career-position-text">
                  Best for candidates with ML, NLP, computer vision, training, evaluation,
                  and dataset handling experience.
                </div>
              </div>

              <div className="career-position-box">
                <div className="career-position-role">Andriod Developer Intern</div>
                <div className="career-position-text">
                  Best for candidates with Kotlin, Compose, Android components,
                  services, Firebase, permissions, and real-time app features.
                </div>
              </div>
            </div>

            <div className="career-job-details">
              <div className="career-job-detail-item">
                <span className="career-job-detail-label">Internship Duration:</span>
                <span className="career-job-detail-value">6–11 Months</span>
              </div>

              <div className="career-job-detail-item">
                <span className="career-job-detail-label">Mode:</span>
                <span className="career-job-detail-value">In-Office Internship — Compulsory</span>
              </div>

              <div className="career-job-detail-item">
                <span className="career-job-detail-label">Type:</span>
                <span className="career-job-detail-value">Full-Time Paid Internship</span>
              </div>

              <div className="career-job-detail-item">
                <span className="career-job-detail-label">Start:</span>
                <span className="career-job-detail-value">Immediate</span>
              </div>

              <div className="career-job-detail-item">
                <span className="career-job-detail-label">Location:</span>
                <span className="career-job-detail-value">
                  Kalsekar Incubation Centre (AIKTC), Plot Nos. 2 & 3, Sector 16,
                  Khandagaon, Near Thana Naka, New Panvel
                </span>
              </div>
              <div className="career-job-detail-item">
                <span className="career-job-detail-label">Queries & Technical Support:</span>
                <span className="career-job-detail-value">+91 98203 76923</span>
              </div>
            </div>
          </Card>
        </div>

        <div id="career-form-section">
          <Card className="soft career-form-card">
            <h2 className="form-heading">Application Form</h2>
            <form onSubmit={onSubmit} className="career-form" >

              <Card className="soft career-progress-card">
                <div className="career-progress-head">
                  <span className="career-mini-title"> Progress</span>
                  <span className="career-progress-text">{progress}% Complete</span>
                </div>
                <div className="career-progress-track">
                  <div
                    className="career-progress-fill"
                    style={{ width: `${progress}%` }}
                  />
                </div>

              </Card>
              <CollapsibleSection
                title="Section A"
                subtitle="Basic Details"
                open={openSections.a}
                onToggle={() => toggleSection("a")}
                complete={sectionComplete.a}
              >
                <Grid2>
                  <Field label="Name *">
                    <input className="inp" name="fullName" value={form.fullName} onChange={onChange} />
                  </Field>
                  <Field label="Contact No *">
                    <input className="inp" name="phone" value={form.phone} onChange={onChange} />
                  </Field>
                  <Field label="E-Mail *">
                    <input className="inp" name="email" value={form.email} onChange={onChange} />
                  </Field>
                  <Field label="College *">
                    <input className="inp" name="college" value={form.college} onChange={onChange} />
                  </Field>
                  <Field label="Passing Year *">
                    <input className="inp" name="passingYear" value={form.passingYear} onChange={onChange} />
                  </Field>
                </Grid2>
              </CollapsibleSection>

              <CollapsibleSection
                title="Section B"
                subtitle="Role & Experience"
                open={openSections.b}
                onToggle={() => toggleSection("b")}
                complete={sectionComplete.b}
              >
                <Grid2>
                  <Field label="Position applying for *">
                    <div className="select-wrap">
                      <select className="inp select-inp" name="role" value={form.role} onChange={onChange}>
                        {roleOptions.map((role) => (
                          <option key={role} value={role}>{role}</option>
                        ))}
                      </select>
                    </div>
                  </Field>

                  <Field label="Experience level *">
                    <div className="select-wrap">
                      <select className="inp select-inp" name="level" value={form.level} onChange={onChange}>
                        <option value="">Select</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                      </select>
                    </div>
                  </Field>

                  <Field label="Year of Experience *">
                    <input
                      className="inp"
                      name="yearsOfExperience"
                      value={form.yearsOfExperience}
                      onChange={onChange}
                    />
                  </Field>

                  <Field label="Do you have your own laptop? *">
                    <div className="select-wrap">
                      <select className="inp select-inp" name="hasLaptop" value={form.hasLaptop} onChange={onChange}>
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </div>
                  </Field>

                  <Field label="GitHub / LinkedIn / Portfolio (any) *">
                    <input
                      className="inp"
                      name="profileLink"
                      value={form.profileLink}
                      onChange={onChange}
                      placeholder="Paste any one link"
                    />
                  </Field>
                </Grid2>
              </CollapsibleSection>

              <CollapsibleSection
                title="Section C"
                subtitle={
                  form.role === "AIML Engineer Intern"
                    ? "Skills & Tools for AIML Engineer Intern"
                    : "Skills & Tools for Andriod Developer Intern"
                }
                open={openSections.c}
                onToggle={() => toggleSection("c")}
                complete={sectionComplete.c}
              >
                <Field label="Select primary tools you know *">
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
              </CollapsibleSection>

              <CollapsibleSection
                title="Section D"
                subtitle="Project Proof"
                open={openSections.d}
                onToggle={() => toggleSection("d")}
                complete={sectionComplete.d}
              >
                <Field label="Best project you've built (title). *">
                  <input className="inp" name="projectTitle" value={form.projectTitle} onChange={onChange} />
                </Field>

                <Field label="Your contribution (what exactly you did). *">
                  <textarea className="inp" name="contribution" value={form.contribution} onChange={onChange} rows={4} />
                </Field>

                <Field label="Tech stack used *">
                  <input className="inp" name="projectStack" value={form.projectStack} onChange={onChange} />
                </Field>
              </CollapsibleSection>

              <CollapsibleSection
                title="Section E"
                subtitle="Short Questions"
                open={openSections.e}
                onToggle={() => toggleSection("e")}
                complete={sectionComplete.e}
              >
                <Field label="What do you know about censorx.ai ? Describe in one line. *">
                  <textarea className="inp" name="oneLine" value={form.oneLine} onChange={onChange} rows={3} />
                </Field>

                <Field label="What is one feature you'd love to build in this project? (3-5 lines) *">
                  <textarea className="inp" name="feature" value={form.feature} onChange={onChange} rows={4} />
                </Field>
              </CollapsibleSection>

              <CollapsibleSection
                title="Section F"
                subtitle="Resume"
                open={openSections.f}
                onToggle={() => toggleSection("f")}
                complete={sectionComplete.f}
              >
                <Field label="Resume Link *">
                  <input
                    className="inp"
                    type="url"
                    name="resumeLink"
                    value={form.resumeLink}
                    onChange={onChange}
                    placeholder="Paste Google Drive / resume URL"
                  />
                </Field>

                <div className="career-note">
                  Share a public link so the team can open your resume without requesting access.
                </div>
              </CollapsibleSection>

              <div className="career-submit-row">
                <div className="career-submit-row">
                  <button className="career-apply-btn" type="submit" disabled={submitting}>
                    {submitting ? "Submitting..." : "Submit Application"}
                  </button>
                </div>
              </div>
            </form>
          </Card>
        </div>
        {popup.show && (
          <div className="career-popup-overlay">
            <div className={`career-popup career-popup-${popup.type}`}>
              <div className="career-popup-content">
                <span>{popup.message}</span>
                <button
                  type="button"
                  className="career-popup-close"
                  onClick={() => setPopup({ show: false, type: "", message: "" })}
                >
                  ×
                </button>
              </div>
            </div>
          </div>
        )}
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

function CollapsibleSection({ title, subtitle, open, onToggle, children, complete }) {
  return (
    <div className={`career-collapsible ${complete ? "done" : ""}`}>
      <button type="button" className="career-collapsible-head" onClick={onToggle}>
        <div className="career-collapsible-left">
          <div className="career-collapsible-title-row">
            <div className="career-collapsible-title">{title}</div>
            {complete && <span className="career-complete-badge">Complete</span>}
          </div>
          {subtitle ? <div className="career-collapsible-subtitle">{subtitle}</div> : null}
        </div>
        <span className={`career-toggle ${open ? "open" : ""}`}>{open ? "Hide" : "View"}</span>
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
