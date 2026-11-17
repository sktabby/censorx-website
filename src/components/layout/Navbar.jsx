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
  const mobileRef = useRef(null);
  const menuBtnRef = useRef(null);

  const exploreItems = useMemo(
    () => [
      { to: ROUTES.ABOUT, label: "About us" },
      { to: ROUTES.ROLES, label: "Who can use CensorX?" },
      { to: ROUTES.CAREER, label: "Careers" },
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
      { to: ROUTES.SCHOOLS, label: "Schools" },
      { to: ROUTES.CONTACT, label: "Contact" },
    ],
    []
  );

  useEffect(() => {
    function handleOutsideClick(e) {
      const clickedInsidePanel = mobileRef.current?.contains(e.target);
      const clickedMenuButton = menuBtnRef.current?.contains(e.target);

      if (!clickedInsidePanel && !clickedMenuButton) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [open]);

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
                fontSize: "clamp(15px, 3.1vw, 17.5px)",
                fontWeight: 800,
                lineHeight: 1.1,
              }}
            >
              CensorX
            </div>

            <div
              className="brandSub"
              style={{
                fontSize: "clamp(10px, 2.2vw, 12px)",
                opacity: 0.8,
                marginTop: 1,
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
              Explore
              <svg
                className="chev"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
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
                fontSize: "clamp(11px, 2.5vw, 13px)",
                whiteSpace: "nowrap",
              }}
            >
              <Button variant="primary">
                <span style={{ whiteSpace: "nowrap" }}>Get the app</span>
              </Button>
            </div>
          </NavLink>

          <button
            ref={menuBtnRef}
            className="menuBtn"
            onClick={() => setOpen((s) => !s)}
            aria-label="Menu"
            aria-expanded={open}
            type="button"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE PANEL */}
      {open && (
        <div ref={mobileRef} className="container mobilePanel">
          <div className="mobileGroupTitle">Menu</div>
          {mainLinks.map((x) => (
            <NavLink key={x.to} to={x.to} className="mobileA">
              {x.label}
            </NavLink>
          ))}

          <div className="mobileGroupTitle">Explore</div>
          {exploreItems.map((x) => (
            <NavLink key={x.to} to={x.to} className="mobileA">
              {x.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}