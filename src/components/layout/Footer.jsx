
import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../routes/routes";

export default function Footer() {
  return (
    <footer style={{ padding: "32px 0", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="container" style={{ display: "flex", justifyContent: "space-between", gap: 14, flexWrap: "wrap" }}>
        <div>
          <div style={{ fontWeight: 900 }}>CensorX</div>
          <div style={{ color: "var(--muted2)", fontSize: 13, marginTop: 6 }}>
            A privacy-first digital safety layer for real-time protection.
          </div>
        </div>

        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
          <NavLink to={ROUTES.PRIVACY_POLICY} className="navA">Privacy Policy</NavLink>
          <NavLink to={ROUTES.TERMS} className="navA">Terms</NavLink>
          <NavLink to={ROUTES.DISCLAIMER} className="navA">Disclaimer</NavLink>
        </div>
      </div>
    </footer>
  );
}
