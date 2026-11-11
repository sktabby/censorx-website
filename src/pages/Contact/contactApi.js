// Talks to the Apps Script backend in apps-script/contact-forms.gs
const ENDPOINT = import.meta.env.VITE_CONTACT_FORM_PROXY?.trim();

export const SUPPORT_EMAIL = "team@censorx.in";

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function isValidPhone(value) {
  const phone = value.trim();
  const digits = phone.replace(/\D/g, "");
  return /^[+\d][\d\s()-]*$/.test(phone) && digits.length >= 7 && digits.length <= 15;
}

/**
 * Sends one form submission. Resolves on success, throws an Error with a
 * message that is safe to show to the visitor on failure.
 */
export async function submitContactForm(payload) {
  if (!ENDPOINT) {
    throw new Error(
      `This form is not connected yet. Please email us at ${SUPPORT_EMAIL}.`
    );
  }

  let res;

  try {
    // text/plain keeps this a "simple" request, which Apps Script needs
    // (it cannot answer a CORS preflight).
    res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        ...payload,
        page: window.location.pathname + window.location.search,
      }),
    });
  } catch {
    throw new Error(
      "We could not reach the server. Check your connection and try again."
    );
  }

  let data = null;

  try {
    data = await res.json();
  } catch {
    // fall through to the generic error below
  }

  if (!res.ok || !data || data.ok !== true) {
    throw new Error(
      (data && data.error) ||
        `Something went wrong. Please try again or email ${SUPPORT_EMAIL}.`
    );
  }
}
