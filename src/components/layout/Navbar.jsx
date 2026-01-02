
import React, { useMemo, useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ROUTES } from "../../routes/routes";
import Button from "../ui/Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  const items = useMemo(
    () => [
      { to: ROUTES.PROBLEM, label: "Problem" },
      { to: ROUTES.SOLUTION, label: "Solution" },
      { to: ROUTES.HOW_IT_WORKS, label: "How it works" },
      { to: ROUTES.ROLES, label: "Roles" },
      { to: ROUTES.PRIVACY, label: "Privacy" },
      { to: ROUTES.FEATURES, label: "Features" },
      { to: ROUTES.TRL, label: "TRL" },
      { to: ROUTES.ROADMAP, label: "Roadmap" },
      { to: ROUTES.FAQ, label: "FAQ" },
      { to: ROUTES.CONTACT, label: "Contact" },
    ],
    []
  );

  useEffect(() => {
    setOpen(false);
  }, [loc.pathname]);

  return (
    <header className="navWrap">
      <div className="container navBar">
        <NavLink to={ROUTES.HOME} className="brand">
          <div className="brandMark" aria-hidden="true" />
          <div>
            <div className="brandTitle">CensorX</div>
            <div className="brandSub">Real-time AI safety layer</div>
          </div>
        </NavLink>

        <nav className="navLinks">
          {items.map((x) => (
            <NavLink
              key={x.to}
              to={x.to}
              className={({ isActive }) => (isActive ? "navA active" : "navA")}
            >
              {x.label}
            </NavLink>
          ))}
        </nav>

        <div className="navActions">
          <NavLink to={ROUTES.DOWNLOAD}>
            <Button variant="primary">Download APK</Button>
          </NavLink>
          <button className="menuBtn" onClick={() => setOpen((s) => !s)} aria-label="Menu">
            ☰
          </button>
        </div>
      </div>

      {open && (
        <div className="container mobilePanel">
          {items.map((x) => (
            <NavLink key={x.to} to={x.to} className="mobileA">
              {x.label}
            </NavLink>
          ))}
          <NavLink to={ROUTES.DOWNLOAD}>
            <Button variant="primary" className="w100">Download APK</Button>
          </NavLink>
        </div>
      )}
    </header>
  );
}
