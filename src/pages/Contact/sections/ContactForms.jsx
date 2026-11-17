import React from "react";
import { useSearchParams } from "react-router-dom";
import { SUPPORT_EMAIL } from "../contactApi";
import SchoolPartnershipForm from "./SchoolPartnershipForm";
import FeedbackForm from "./FeedbackForm";
import "./ContactForms.css";

const TABS = [
  {
    key: "schools",
    tab: "School partnership",
    eyebrow: "For schools",
    title: "Bring CensorX to your school",
    text: "Tell us about your school and what your students are facing. We will come back to you with how we can help.",
    steps: [
      "You share a few details about your school.",
      "We contact you to understand what you need.",
      "Together we plan the next step for your families.",
    ],
    Form: SchoolPartnershipForm,
  },
  {
    key: "feedback",
    tab: "Feedback",
    eyebrow: "For everyone",
    title: "Help us make CensorX better",
    text: "Found a problem, have an idea, or just want to tell us how it is going? We read every message.",
    steps: [
      "Tell us what happened or what you would like.",
      "Add your email only if you want a reply.",
      "We use it to improve the app for families.",
    ],
    Form: FeedbackForm,
  },
];

export default function ContactForms() {
  const [params, setParams] = useSearchParams();
  const active = TABS.find((t) => t.key === params.get("form")) || TABS[0];
  const { Form } = active;

  const select = (key) =>
    setParams({ form: key }, { replace: true, preventScrollReset: true });

  // Left / right arrow keys move between tabs.
  const onKeyDown = (e) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const i = TABS.indexOf(active);
    const next = TABS[(i + (e.key === "ArrowRight" ? 1 : TABS.length - 1)) % TABS.length];
    select(next.key);
    document.getElementById(`cxCf-tab-${next.key}`)?.focus();
  };

  return (
    <section className="section" id="contact-forms">
      <div className="container">
        <div className="cxCf-head">
          <div>
            <h1 className="h2">Get in touch</h1>
            <p className="cxCf-intro">
              <strong>{active.title}.</strong> {active.text}
            </p>
          </div>

          <div className="cxCf-tabs" role="tablist" aria-label="Contact forms" onKeyDown={onKeyDown}>
            {TABS.map((t) => (
              <button
                key={t.key}
                id={`cxCf-tab-${t.key}`}
                type="button"
                role="tab"
                aria-selected={t.key === active.key}
                aria-controls="cxCf-panel"
                tabIndex={t.key === active.key ? 0 : -1}
                className={`cxCf-tab${t.key === active.key ? " active" : ""}`}
                onClick={() => select(t.key)}
              >
                {t.tab}
              </button>
            ))}
          </div>
        </div>

        <div
          className="cxCf-shell"
          id="cxCf-panel"
          role="tabpanel"
          aria-labelledby={`cxCf-tab-${active.key}`}
        >
          <div className="cxCf-main">
            {/* key resets the form state when switching tabs */}
            <Form key={active.key} />
          </div>
        </div>

        <div className="cxCf-foot">
          <ol className="cxCf-footSteps">
            {active.steps.map((s, i) => (
              <li key={s}>
                <b>{i + 1}.</b> {s}
              </li>
            ))}
          </ol>
          <span>
            Prefer email? <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
          </span>
        </div>
      </div>
    </section>
  );
}
