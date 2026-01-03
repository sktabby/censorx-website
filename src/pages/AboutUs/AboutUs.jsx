import React from "react";

import ProblemDeepDive from "./sections/ProblemDeepDive";
import SolutionWhatIs from "./sections/SolutionWhatIs";
import HowItWorksHighLevel from "./sections/HowItWorksHighLevel";

export default function AboutUs() {
  return (
    <div className="page">
     
      <ProblemDeepDive />
      <SolutionWhatIs />
      <HowItWorksHighLevel />
    </div>
  );
}
