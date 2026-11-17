import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "@fontsource-variable/dm-sans";
import "./styles/theme.css";
import "./styles/globals.css";

// Pages are loaded on demand. On a prerendered page the saved HTML is already
// on screen, so load the current page's code BEFORE React renders. That way
// the page is swapped in place instead of flashing an empty placeholder.
const pageLoaders = {
  "/features": () => import("./pages/Features/Features"),
  "/roles": () => import("./pages/Roles/Roles"),
  "/download": () => import("./pages/Download/Download"),
  "/user-guide": () => import("./pages/UserGuide/UserGuide"),
  "/roadmap": () => import("./pages/Roadmap/Roadmap"),
  "/use-cases": () => import("./pages/UseCases/UseCases"),
  "/why-it-matters": () => import("./pages/WhyItMatters/WhyItMatters"),
  "/faq": () => import("./pages/FAQ/FAQ"),
  "/contact": () => import("./pages/Contact/Contact"),
  "/career": () => import("./pages/Career/Career"),
  "/team": () => import("./pages/Team/Team"),
  "/about": () => import("./pages/AboutUs/AboutUs"),
  "/schools": () => import("./pages/Schools/Schools"),
  "/legal/disclaimer": () => import("./pages/Legal/Disclaimer"),
};

const rootEl = document.getElementById("root");
const path = window.location.pathname.replace(/\/+$/, "") || "/";
const preload = rootEl.hasChildNodes() ? pageLoaders[path] : undefined;

function render() {
  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}

if (preload) {
  preload().then(render, render);
} else {
  render();
}
