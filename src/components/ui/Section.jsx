
import React from "react";

export default function Section({ title, subtitle, children }) {
  return (
    <section className="section">
      <div className="container">
        {(title || subtitle) && (
          <div style={{ marginBottom: 12 }}>
            {title && <h2 className="h2">{title}</h2>}
            {subtitle && <p className="p">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
