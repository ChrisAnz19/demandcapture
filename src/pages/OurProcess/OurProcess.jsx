import React from "react";
import OurProcessHero from "./sections/OurProcessHero";
import Onboarding from "./sections/Onboarding";

import { useHeaderStyles } from "layouts/header";
import { FAQ, Testimonials } from "layouts";

import "./styles.scss";
import "../../styles/ourprocess.scss"


const OurProcess = ({ setHeaderStyle }) => {
  useHeaderStyles({
    styleName: "white",
    setStyle: setHeaderStyle,
  });

  return (
    <>
      <OurProcessHero title="Our Process" />
      <Onboarding />
      <Testimonials />
      <FAQ />
    </>
  );
};

export default OurProcess;
