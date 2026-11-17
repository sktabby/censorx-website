
import React from "react";
import FAQList from "./sections/FAQList";
import { FAQS } from "./faqData";
import JsonLd from "../../seo/JsonLd";

// Built from the same list that is shown on the page, so they cannot drift.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FAQ() {
  return (
    <>
      <JsonLd id="faq" data={faqSchema} />
      <FAQList />
    </>
  );
}
