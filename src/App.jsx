
import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ROUTES } from "./routes/routes";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home/Home";

import ScrollToTop from "./components/layout/ScrollToTop";
import Seo from "./seo/Seo.jsx";

// Every page except Home loads on demand, so the first visit stays light.
const Roles = lazy(() => import("./pages/Roles/Roles"));
const Features = lazy(() => import("./pages/Features/Features"));
const Download = lazy(() => import("./pages/Download/Download"));
const UserGuide = lazy(() => import("./pages/UserGuide/UserGuide"));
const Roadmap = lazy(() => import("./pages/Roadmap/Roadmap"));
const UseCases = lazy(() => import("./pages/UseCases/UseCases"));
const WhyItMatters = lazy(() => import("./pages/WhyItMatters/WhyItMatters"));
const FAQ = lazy(() => import("./pages/FAQ/FAQ"));
const Contact = lazy(() => import("./pages/Contact/Contact"));

const PrivacyPolicy = lazy(() => import("./pages/Legal/PrivacyPolicy"));
const Terms = lazy(() => import("./pages/Legal/Terms"));
const Disclaimer = lazy(() => import("./pages/Legal/Disclaimer"));
const DeleteAccount = lazy(() => import("./pages/Legal/DeleteAccount"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs"));
const Team = lazy(() => import("./pages/Team/Team"));
const Career = lazy(() => import("./pages/Career/Career"));
const Schools = lazy(() => import("./pages/Schools/Schools"));

const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
  return (
    <div className="appShell">
      <ScrollToTop />
      <Seo />

      <Navbar />
      <main className="mainWrap">
        <Suspense fallback={<div style={{ minHeight: "60vh" }} />}>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />

          <Route path={ROUTES.ROLES} element={<Roles />} />
          <Route path={ROUTES.FEATURES} element={<Features />} />
          <Route path={ROUTES.DOWNLOAD} element={<Download />} />
          <Route path={ROUTES.USER_GUIDE} element={<UserGuide />} />
          <Route path={ROUTES.ROADMAP} element={<Roadmap />} />
          <Route path={ROUTES.USE_CASES} element={<UseCases />} />
          <Route path={ROUTES.WHY_IT_MATTERS} element={<WhyItMatters />} />
          <Route path={ROUTES.FAQ} element={<FAQ />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path={ROUTES.TEAM} element={<Team />} />
          <Route path={ROUTES.CAREER} element={<Career />} />
          <Route path={ROUTES.SCHOOLS} element={<Schools />} />

          <Route path={ROUTES.PRIVACY_POLICY} element={<PrivacyPolicy />} />
          <Route path={ROUTES.TERMS} element={<Terms />} />
          <Route path="/legal/privacy-policy" element={<Navigate to={ROUTES.PRIVACY_POLICY} replace />} />
          <Route path="/legal/terms" element={<Navigate to={ROUTES.TERMS} replace />} />
          <Route path={ROUTES.DISCLAIMER} element={<Disclaimer />} />
          <Route path={ROUTES.ABOUT} element={<AboutUs />} />


          <Route path={ROUTES.DELETE_ACCOUNT} element={<DeleteAccount />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
