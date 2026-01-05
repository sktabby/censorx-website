
import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./routes/routes";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home/Home";

import Roles from "./pages/Roles/Roles";
import PrivacyEthics from "./pages/PrivacyEthics/PrivacyEthics";
import Features from "./pages/Features/Features";
import Download from "./pages/Download/Download";
import UserGuide from "./pages/UserGuide/UserGuide";
import TRL from "./pages/TRL/TRL";
import Roadmap from "./pages/Roadmap/Roadmap";
import UseCases from "./pages/UseCases/UseCases";
import WhyItMatters from "./pages/WhyItMatters/WhyItMatters";
import FAQ from "./pages/FAQ/FAQ";
import Contact from "./pages/Contact/Contact";

import PrivacyPolicy from "./pages/Legal/PrivacyPolicy";
import Terms from "./pages/Legal/Terms";
import Disclaimer from "./pages/Legal/Disclaimer";
import AboutUs from "./pages/AboutUs/AboutUs";

import ScrollToTop from "./components/layout/ScrollToTop";


import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="appShell">
            <ScrollToTop />

      <Navbar />
      <main className="mainWrap">
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          
          <Route path={ROUTES.ROLES} element={<Roles />} />
          <Route path={ROUTES.PRIVACY} element={<PrivacyEthics />} />
          <Route path={ROUTES.FEATURES} element={<Features />} />
          <Route path={ROUTES.DOWNLOAD} element={<Download />} />
          <Route path={ROUTES.USER_GUIDE} element={<UserGuide />} />
          <Route path={ROUTES.TRL} element={<TRL />} />
          <Route path={ROUTES.ROADMAP} element={<Roadmap />} />
          <Route path={ROUTES.USE_CASES} element={<UseCases />} />
          <Route path={ROUTES.WHY_IT_MATTERS} element={<WhyItMatters />} />
          <Route path={ROUTES.FAQ} element={<FAQ />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />

          <Route path={ROUTES.PRIVACY_POLICY} element={<PrivacyPolicy />} />
          <Route path={ROUTES.TERMS} element={<Terms />} />
          <Route path={ROUTES.DISCLAIMER} element={<Disclaimer />} />
          <Route path={ROUTES.ABOUT} element={<AboutUs />} />


          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
