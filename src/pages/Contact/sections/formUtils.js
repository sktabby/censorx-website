/* Non-component helpers for the Contact page forms. */

/** Props shared by every text input / select / textarea. */
export function inputProps(id, error, hint) {
  return {
    id,
    name: id,
    className: "cxCf-input",
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? `${id}-error` : hint ? `${id}-hint` : undefined,
  };
}

/** Moves focus to the first field that failed validation. */
export function focusFirstError(errors) {
  const firstId = Object.keys(errors)[0];
  if (!firstId) return;
  const el = document.getElementById(firstId);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "center" });
  el.focus({ preventScroll: true });
}
