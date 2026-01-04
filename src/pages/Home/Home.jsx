import React from "react";
import Hero from "./sections/Hero";
import ProblemHighlight from "./sections/ProblemHighlight";
import WhatCensorXDoes from "./sections/WhatCensorXDoes";
import WhoItsFor from "./sections/WhoItsFor";
import WhyDifferent from "./sections/WhyDifferent";
import CoFounders from "./sections/CoFounders";
import TrustSignals from "./sections/TrustSignals";

function Divider() {
  return <div className="sectionDivider" />;
}

export default function Home() {
  return (
    <>
      <Hero />

      <Divider />
      <ProblemHighlight />

      <Divider />
      <WhatCensorXDoes />

      <Divider />
      <WhoItsFor />

      <Divider />
      <WhyDifferent />

      
      <Divider />
      <CoFounders />

      <Divider />
      <TrustSignals />
    </>
  );
}
