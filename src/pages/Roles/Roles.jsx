
import React from "react";
import ForParents from "./sections/ForParents";
import ForChildren from "./sections/ForChildren";
import ForIndividuals from "./sections/ForIndividuals";

export default function Roles() {
  return (
    <>
      <ForParents />
      <ForChildren />
      <ForIndividuals />
    </>
  );
}
