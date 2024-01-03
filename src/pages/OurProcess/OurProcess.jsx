import React from "react";
import OurProcessHero from "./sections/OurProcessHero";
import Onboarding from "./sections/Onboarding";

import { useHeaderStyles } from "layouts/header";
import { FAQ, Testimonials } from "layouts";

import "./styles.scss";

const OurProcess = () => {
  useHeaderStyles("white");

  return (
    <>
      <OurProcessHero />
      <Onboarding />
      <Testimonials />
      <FAQ />
    </>
  );
};

export default OurProcess;
