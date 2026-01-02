
import React from "react";
import SetupSteps from "./sections/SetupSteps";
import ParentChildSetup from "./sections/ParentChildSetup";
import Troubleshooting from "./sections/Troubleshooting";

export default function UserGuide() {
  return (
    <>
      <SetupSteps />
      <ParentChildSetup />
      <Troubleshooting />
    </>
  );
}
