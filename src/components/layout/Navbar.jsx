import React, { useMemo, useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ROUTES } from "../../routes/routes";
import Button from "../ui/Button";
import logo from "../../assets/team/c_logo_without_bg.png";


export default function Navbar() {
  const [open, setOpen] = useState(false); // mobile menu
  const [ddOpen, setDdOpen] = useState(false); // dropdown
  const loc = useLocation();
  const ddRef = useRef(null);

  const exploreItems = useMemo(
    () => [
     { to: ROUTES.ABOUT, label: "About us" },
      { to: ROUTES.ROLES, label: "who can use censorX?" },
      { to: ROUTES.PRIVACY, label: "Privacy" },
      { to: ROUTES.TRL, label: "TRL" },
      { to: ROUTES.ROADMAP, label: "Roadmap" },
      { to: ROUTES.FAQ, label: "FAQ" },
       // ✅ add this route
    ],
    []
  );

const mainLinks = useMemo(
  () => [
    { to: ROUTES.HOME, label: "Home" },
    { to: ROUTES.FEATURES, label: "Features" },
    { to: ROUTES.TEAM, label: "Team" },
    { to: ROUTES.CAREER, label: "Careers" },
    { to: ROUTES.CONTACT, label: "Contact" },
  ],
  []
);

  useEffect(() => {
    setOpen(false);
    setDdOpen(false);
  }, [loc.pathname]);

  // close dropdown if clicked outside
  useEffect(() => {
    function onDocClick(e) {
      if (!ddRef.current) return;
      if (!ddRef.current.contains(e.target)) setDdOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <header className="navWrap">
      <div className="container navBar">
        <NavLink to={ROUTES.HOME} className="brand">
         <img
  src={logo}
  alt="CensorX logo"
  aria-hidden="true"
  style={{
    width: 46,
    height: 46,
    objectFit: "contain",
    opacity: 0.95,
  }}
/>

         <div>
  <div
    className="brandTitle"
    style={{
      fontSize: "clamp(16px, 3.5vw, 20px)",
      fontWeight: 900,
      lineHeight: 1.1,
    }}
  >
    CensorX.ai
  </div>

  <div
  className="brandSub"
  style={{
    fontSize: "clamp(10px, 2.4vw, 12px)",
    opacity: 0.8,
    marginTop: 1,

    /* 👇 critical for one-line behavior */
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "100%",
  }}
>
  Your Digital Guardian
</div>

</div>

        </NavLink>

        {/* DESKTOP LINKS */}
        <nav className="navLinks">
         

          {/* ✅ Keep these separate */}
          {mainLinks.map((x) => (
            <NavLink
              key={x.to}
              to={x.to}
              className={({ isActive }) => (isActive ? "navA active" : "navA")}
            >
              {x.label}
            </NavLink>
          ))}

           {/* ✅ Dropdown: Explore */}
          <div className="navDrop" ref={ddRef}>
            <button
              className={`navA dropBtn ${ddOpen ? "active" : ""}`}
              onClick={() => setDdOpen((s) => !s)}
              aria-haspopup="menu"
              aria-expanded={ddOpen}
              type="button"
            >
              Explore <span className="chev">▾</span>
            </button>

            {ddOpen && (
              <div className="dropMenu" role="menu">
                {exploreItems.map((x) => (
                  <NavLink
                    key={x.to}
                    to={x.to}
                    className="dropItem"
                    role="menuitem"
                    onClick={() => setDdOpen(false)}
                  >
                    {x.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="navActions">
          <NavLink to={ROUTES.DOWNLOAD}>
         <div
  style={{
    fontSize: "clamp(11px, 2.8vw, 14px)",
    whiteSpace: "nowrap",        // ✅ prevents line break
  }}
>
  <Button variant="primary">
    <span style={{ whiteSpace: "nowrap" }}>Download APK</span>
  </Button>
</div>


          </NavLink>

          <button
            className="menuBtn"
            onClick={() => setOpen((s) => !s)}
            aria-label="Menu"
            type="button"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE PANEL */}
      {open && (
        <div className="container mobilePanel">
          <div className="mobileGroupTitle">Explore</div>
          {exploreItems.map((x) => (
            <NavLink key={x.to} to={x.to} className="mobileA">
              {x.label}
            </NavLink>
          ))}

          <div className="mobileGroupTitle">More</div>
          {mainLinks.map((x) => (
            <NavLink key={x.to} to={x.to} className="mobileA">
              {x.label}
            </NavLink>
          ))}

          
        </div>
      )}
    </header>
  );
}
