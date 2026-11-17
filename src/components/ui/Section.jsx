
import React from "react";

// `as` lets a page promote its main heading to h1 without changing its look.
export default function Section({ title, subtitle, as = "h2", children }) {
  const Heading = as;
  return (
    <section className="section">
      <div className="container">
        {(title || subtitle) && (
          <div className="sectionHead">
            {title && <Heading className="h2">{title}</Heading>}
            {subtitle && <p className="p">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
