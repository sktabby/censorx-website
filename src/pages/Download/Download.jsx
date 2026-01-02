
import React from "react";
import DownloadCard from "./sections/DownloadCard";
import Permissions from "./sections/Permissions";
import InstallSteps from "./sections/InstallSteps";

export default function Download() {
  return (
    <>
      <DownloadCard />
      <Permissions />
      <InstallSteps />
    </>
  );
}
