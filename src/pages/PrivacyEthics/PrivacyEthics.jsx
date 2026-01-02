
import React from "react";
import PrivacyFirst from "./sections/PrivacyFirst";
import ConsentPermissions from "./sections/ConsentPermissions";
import EthicalAI from "./sections/EthicalAI";

export default function PrivacyEthics() {
  return (
    <>
      <PrivacyFirst />
      <ConsentPermissions />
      <EthicalAI />
    </>
  );
}
