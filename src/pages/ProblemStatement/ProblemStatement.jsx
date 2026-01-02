
import React from "react";
import ProblemIntro from "./sections/ProblemIntro";
import Consequences from "./sections/Consequences";
import WhyTraditionalFails from "./sections/WhyTraditionalFails";

export default function ProblemStatement() {
  return (
    <>
      <ProblemIntro />
      <Consequences />
      <WhyTraditionalFails />
    </>
  );
}
