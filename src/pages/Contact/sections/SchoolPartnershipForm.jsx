import React, { useState } from "react";
import { EMAIL_RE, isValidPhone, submitContactForm } from "../contactApi";
import {
  ChipGroup,
  Field,
  Honeypot,
  SubmitRow,
  SuccessPanel,
} from "./formKit";
import { focusFirstError, inputProps } from "./formUtils";

const ROLES = [
  "Principal / Head of school",
  "Vice principal",
  "Teacher",
  "School counsellor",
  "Administrator / Management",
  "IT coordinator",
  "Parent representative (PTA)",
  "Other",
];

const BOARDS = ["CBSE", "ICSE / ISC", "State board", "IB", "Cambridge (IGCSE)", "Other"];

const STUDENT_COUNTS = [
  "Under 300",
  "300 – 800",
  "800 – 1,500",
  "1,500 – 3,000",
  "More than 3,000",
];

const GRADES = ["Primary (1–5)", "Middle (6–8)", "Secondary (9–10)", "Senior secondary (11–12)"];

const INTERESTS = [
  "Awareness session for parents",
  "Session for students",
  "Pilot with our families",
  "Just exploring",
];

const CONTACT_METHODS = ["Email", "Phone call", "WhatsApp"];

const EMPTY = {
  contactName: "",
  role: "",
  email: "",
  phone: "",
  schoolName: "",
  city: "",
  board: "",
  studentCount: "",
  grades: [],
  interests: [],
  preferredContact: "Email",
  message: "",
  website: "",
};

// Order here = order on screen, so the first error gets focus.
function validate(f) {
  const e = {};
  if (!f.contactName.trim()) e.contactName = "Please enter your name.";
  if (!f.role) e.role = "Please choose your role.";
  if (!f.email.trim()) e.email = "Please enter your email.";
  else if (!EMAIL_RE.test(f.email.trim())) e.email = "This email does not look right.";
  if (!f.phone.trim()) e.phone = "Please enter a phone number.";
  else if (!isValidPhone(f.phone)) e.phone = "This phone number does not look right.";
  if (!f.schoolName.trim()) e.schoolName = "Please enter your school's name.";
  if (!f.city.trim()) e.city = "Please enter your city and state.";
  if (!f.studentCount) e.studentCount = "Please choose a range.";
  if (f.interests.length === 0) e.interests = "Please pick at least one.";
  return e;
}

export default function SchoolPartnershipForm() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [sent, setSent] = useState(false);

  const set = (name, value) => {
    setForm((s) => ({ ...s, [name]: value }));
    if (errors[name]) setErrors((s) => ({ ...s, [name]: undefined }));
  };
  const onInput = (e) => set(e.target.name, e.target.value);

  async function onSubmit(e) {
    e.preventDefault();
    if (submitting) return;

    const found = validate(form);
    setErrors(found);
    setFormError("");

    if (Object.keys(found).length) {
      focusFirstError(found);
      return;
    }

    setSubmitting(true);
    try {
      await submitContactForm({ formType: "schools", ...form });
      setSent(true);
      setForm(EMPTY);
    } catch (err) {
      setFormError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  if (sent) {
    return (
      <SuccessPanel
        title="Thank you — we have your details"
        text="Someone from the CensorX team will get in touch with you about your school."
        onReset={() => setSent(false)}
      />
    );
  }

  return (
    <form className="cxCf-form" onSubmit={onSubmit} noValidate>
      <h4 className="cxCf-group">About you</h4>

      <div className="cxCf-row">
        <Field id="contactName" label="Your name" required error={errors.contactName}>
          <input
            {...inputProps("contactName", errors.contactName)}
            value={form.contactName}
            onChange={onInput}
            autoComplete="name"
            maxLength={100}
            placeholder="Full name"
          />
        </Field>

        <Field id="role" label="Your role" required error={errors.role}>
          <select {...inputProps("role", errors.role)} value={form.role} onChange={onInput}>
            <option value="">Select your role</option>
            {ROLES.map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </Field>
      </div>

      <div className="cxCf-row">
        <Field
          id="email"
          label="Work email"
          required
          error={errors.email}
          hint="A school email address helps us verify the request."
        >
          <input
            {...inputProps("email", errors.email, true)}
            type="email"
            inputMode="email"
            value={form.email}
            onChange={onInput}
            autoComplete="email"
            maxLength={254}
            placeholder="you@yourschool.edu"
          />
        </Field>

        <Field id="phone" label="Phone number" required error={errors.phone}>
          <input
            {...inputProps("phone", errors.phone)}
            type="tel"
            inputMode="tel"
            value={form.phone}
            onChange={onInput}
            autoComplete="tel"
            maxLength={20}
            placeholder="+91 98765 43210"
          />
        </Field>
      </div>

      <h4 className="cxCf-group">About your school</h4>

      <Field id="schoolName" label="School name" required error={errors.schoolName}>
        <input
          {...inputProps("schoolName", errors.schoolName)}
          value={form.schoolName}
          onChange={onInput}
          autoComplete="organization"
          maxLength={150}
          placeholder="Name of the school"
        />
      </Field>

      <div className="cxCf-row">
        <Field id="city" label="City and state" required error={errors.city}>
          <input
            {...inputProps("city", errors.city)}
            value={form.city}
            onChange={onInput}
            autoComplete="address-level2"
            maxLength={100}
            placeholder="e.g. Pune, Maharashtra"
          />
        </Field>

        <Field id="studentCount" label="Number of students" required error={errors.studentCount}>
          <select
            {...inputProps("studentCount", errors.studentCount)}
            value={form.studentCount}
            onChange={onInput}
          >
            <option value="">Select a range</option>
            {STUDENT_COUNTS.map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field id="board" label="Board / curriculum">
        <select {...inputProps("board")} value={form.board} onChange={onInput}>
          <option value="">Select a board</option>
          {BOARDS.map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
      </Field>

      <ChipGroup
        id="grades"
        label="Grades you teach"
        multiple
        options={GRADES}
        value={form.grades}
        onChange={(v) => set("grades", v)}
      />

      <h4 className="cxCf-group">How can we help?</h4>

      <ChipGroup
        id="interests"
        label="What are you interested in?"
        required
        multiple
        hint="Pick as many as you like."
        error={errors.interests}
        options={INTERESTS}
        value={form.interests}
        onChange={(v) => set("interests", v)}
      />

      <Field
        id="message"
        label="Anything else we should know?"
        hint="For example, a concern you are seeing among students."
      >
        <textarea
          {...inputProps("message", null, true)}
          rows={4}
          value={form.message}
          onChange={onInput}
          maxLength={2000}
          placeholder="Tell us a little about your school and what you need."
        />
      </Field>

      <ChipGroup
        id="preferredContact"
        label="Best way to reach you"
        required
        options={CONTACT_METHODS}
        value={form.preferredContact}
        onChange={(v) => set("preferredContact", v)}
      />

      <Honeypot value={form.website} onChange={(v) => set("website", v)} />

      <SubmitRow submitting={submitting} label="Request a partnership call" error={formError} />
    </form>
  );
}
