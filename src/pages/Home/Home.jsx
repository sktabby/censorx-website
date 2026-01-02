
import React from "react";
import Hero from "./sections/Hero";
import ProblemHighlight from "./sections/ProblemHighlight";
import WhatCensorXDoes from "./sections/WhatCensorXDoes";
import WhoItsFor from "./sections/WhoItsFor";
import WhyDifferent from "./sections/WhyDifferent";
import TrustSignals from "./sections/TrustSignals";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemHighlight />
      <WhatCensorXDoes />
      <WhoItsFor />
      <WhyDifferent />
      <TrustSignals />
    </>
  );
}
