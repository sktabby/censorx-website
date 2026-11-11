import React from "react";

/* Small shared building blocks for the Contact page forms. */

export function Field({ id, label, required, hint, error, children }) {
  return (
    <div className={`cxCf-field${error ? " has-error" : ""}`}>
      <label className="cxCf-label" htmlFor={id}>
        {label}
        {required ? (
          <span className="cxCf-req" aria-hidden="true">
            *
          </span>
        ) : (
          <span className="cxCf-opt">Optional</span>
        )}
      </label>
      {children}
      {hint && !error && (
        <p className="cxCf-hint" id={`${id}-hint`}>
          {hint}
        </p>
      )}
      {error && (
        <p className="cxCf-error" id={`${id}-error`} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

/**
 * Pill choices. `multiple` = checkboxes (value is an array),
 * otherwise radios (value is a string).
 */
export function ChipGroup({
  id,
  label,
  required,
  hint,
  error,
  options,
  value,
  onChange,
  multiple = false,
}) {
  const isOn = (opt) => (multiple ? value.includes(opt) : value === opt);

  const toggle = (opt) => {
    if (!multiple) return onChange(opt);
    onChange(isOn(opt) ? value.filter((v) => v !== opt) : [...value, opt]);
  };

  return (
    <fieldset
      id={id}
      tabIndex={-1}
      className={`cxCf-field cxCf-fieldset${error ? " has-error" : ""}`}
    >
      <legend className="cxCf-label">
        {label}
        {required ? (
          <span className="cxCf-req" aria-hidden="true">
            *
          </span>
        ) : (
          <span className="cxCf-opt">Optional</span>
        )}
      </legend>

      <div className="cxCf-chips">
        {options.map((opt) => (
          <label key={opt} className="cxCf-chip">
            <input
              type={multiple ? "checkbox" : "radio"}
              name={id}
              checked={isOn(opt)}
              onChange={() => toggle(opt)}
            />
            <span>{opt}</span>
          </label>
        ))}
      </div>

      {hint && !error && <p className="cxCf-hint">{hint}</p>}
      {error && (
        <p className="cxCf-error" role="alert">
          {error}
        </p>
      )}
    </fieldset>
  );
}

export function StarRating({ id, label, value, onChange }) {
  return (
    <fieldset id={id} className="cxCf-field cxCf-fieldset">
      <legend className="cxCf-label">
        {label}
        <span className="cxCf-opt">Optional</span>
      </legend>

      <div className="cxCf-stars">
        {[1, 2, 3, 4, 5].map((n) => (
          <label key={n} className={`cxCf-star${n <= value ? " on" : ""}`}>
            <input
              type="radio"
              name={id}
              checked={value === n}
              onChange={() => onChange(n)}
              onClick={() => value === n && onChange(0)}
              aria-label={`${n} out of 5`}
            />
            <span aria-hidden="true">★</span>
          </label>
        ))}
        {value > 0 && <span className="cxCf-starText">{value} / 5</span>}
      </div>
    </fieldset>
  );
}

/** Hidden field that only bots fill in. */
export function Honeypot({ value, onChange }) {
  return (
    <div className="cxCf-hp" aria-hidden="true">
      <label>
        Website
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </div>
  );
}

export function SubmitRow({ submitting, label, error }) {
  return (
    <div className="cxCf-submitRow">
      {error && (
        <p className="cxCf-formError" role="alert">
          {error}
        </p>
      )}
      <button type="submit" className="cxCf-submit" disabled={submitting}>
        {submitting ? "Sending…" : label}
        {!submitting && (
          <span className="cxCf-submitArrow" aria-hidden="true">
            →
          </span>
        )}
      </button>
      <p className="cxCf-legal">
        By submitting, you agree that we may use these details to respond to
        you. See our <a href="/legal/privacy-policy">Privacy Policy</a>.
      </p>
    </div>
  );
}

export function SuccessPanel({ title, text, onReset }) {
  return (
    <div className="cxCf-success" role="status">
      <div className="cxCf-successIcon" aria-hidden="true">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 12.5l4.5 4.5L19 7.5"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
      <button type="button" className="cxCf-again" onClick={onReset}>
        Send another
      </button>
    </div>
  );
}
