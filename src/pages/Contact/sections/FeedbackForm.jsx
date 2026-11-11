import React, { useState } from "react";
import { EMAIL_RE, submitContactForm } from "../contactApi";
import {
  ChipGroup,
  Field,
  Honeypot,
  StarRating,
  SubmitRow,
  SuccessPanel,
} from "./formKit";
import { focusFirstError, inputProps } from "./formUtils";

const CATEGORIES = ["Something is not working", "Suggestion", "Appreciation", "Question", "Other"];
const ABOUT = ["CensorX app", "This website", "Something else"];
const USER_TYPES = ["Parent", "Student", "Teacher / School", "Other"];

const BUG = CATEGORIES[0];
const APP = ABOUT[0];

const EMPTY = {
  category: "",
  about: "",
  rating: 0,
  message: "",
  deviceModel: "",
  androidVersion: "",
  userType: "",
  name: "",
  email: "",
  wantsReply: false,
  website: "",
};

function validate(f) {
  const e = {};
  if (!f.category) e.category = "Please choose a type.";
  if (!f.about) e.about = "Please choose one.";
  if (!f.message.trim()) e.message = "Please write your feedback.";
  else if (f.message.trim().length < 10) e.message = "Please tell us a little more.";
  if (!f.userType) e.userType = "Please choose one.";
  if (f.wantsReply && !f.email.trim()) e.email = "We need your email to reply to you.";
  else if (f.email.trim() && !EMAIL_RE.test(f.email.trim()))
    e.email = "This email does not look right.";
  return e;
}

export default function FeedbackForm() {
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

  // Device details only matter when reporting a problem with the app.
  const showDevice = form.category === BUG && form.about === APP;

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
      await submitContactForm({
        formType: "feedback",
        ...form,
        deviceModel: showDevice ? form.deviceModel : "",
        androidVersion: showDevice ? form.androidVersion : "",
      });
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
        title="Thank you for your feedback"
        text="We read every message. It helps us make CensorX better for families."
        onReset={() => setSent(false)}
      />
    );
  }

  return (
    <form className="cxCf-form" onSubmit={onSubmit} noValidate>
      <h4 className="cxCf-group">Your feedback</h4>

      <ChipGroup
        id="category"
        label="What kind of feedback is it?"
        required
        error={errors.category}
        options={CATEGORIES}
        value={form.category}
        onChange={(v) => set("category", v)}
      />

      <ChipGroup
        id="about"
        label="What is it about?"
        required
        error={errors.about}
        options={ABOUT}
        value={form.about}
        onChange={(v) => set("about", v)}
      />

      <StarRating
        id="rating"
        label="Your overall experience"
        value={form.rating}
        onChange={(v) => set("rating", v)}
      />

      <Field
        id="message"
        label="Your feedback"
        required
        error={errors.message}
        hint={
          form.category === BUG
            ? "What did you do, what did you expect, and what happened instead?"
            : "Please do not include passwords or private messages."
        }
      >
        <textarea
          {...inputProps("message", errors.message, true)}
          rows={5}
          value={form.message}
          onChange={onInput}
          maxLength={3000}
          placeholder="Tell us what is on your mind."
        />
      </Field>

      {showDevice && (
        <div className="cxCf-row">
          <Field id="deviceModel" label="Phone model">
            <input
              {...inputProps("deviceModel")}
              value={form.deviceModel}
              onChange={onInput}
              maxLength={80}
              placeholder="e.g. Samsung Galaxy A54"
            />
          </Field>

          <Field id="androidVersion" label="Android version">
            <input
              {...inputProps("androidVersion")}
              value={form.androidVersion}
              onChange={onInput}
              maxLength={40}
              placeholder="e.g. Android 14"
            />
          </Field>
        </div>
      )}

      <h4 className="cxCf-group">About you</h4>

      <ChipGroup
        id="userType"
        label="I am a"
        required
        error={errors.userType}
        options={USER_TYPES}
        value={form.userType}
        onChange={(v) => set("userType", v)}
      />

      <div className="cxCf-row">
        <Field id="name" label="Name">
          <input
            {...inputProps("name")}
            value={form.name}
            onChange={onInput}
            autoComplete="name"
            maxLength={100}
            placeholder="Your name"
          />
        </Field>

        <Field id="email" label="Email" required={form.wantsReply} error={errors.email}>
          <input
            {...inputProps("email", errors.email)}
            type="email"
            inputMode="email"
            value={form.email}
            onChange={onInput}
            autoComplete="email"
            maxLength={254}
            placeholder="you@example.com"
          />
        </Field>
      </div>

      <label className="cxCf-check">
        <input
          type="checkbox"
          checked={form.wantsReply}
          onChange={(e) => set("wantsReply", e.target.checked)}
        />
        <span>I would like a reply from the CensorX team.</span>
      </label>

      <Honeypot value={form.website} onChange={(v) => set("website", v)} />

      <SubmitRow submitting={submitting} label="Send feedback" error={formError} />
    </form>
  );
}
