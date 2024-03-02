import React from "react";

import { useHeaderStyles } from "layouts/header";
import { FAQ, Testimonials } from "layouts";
import ProcessBanner from "./ProcessBanner";
import Onboarding from "./sections/Onboarding";

import "./styles.scss";
const styleName = "white";
const OurProcess = ({ setHeaderStyle }) => {
  React.useEffect(() => {
    if (!setHeaderStyle) return;
    
    const styleClass = styleName && styleName !== "" ? `_${styleName}` : "";
    setHeaderStyle(styleClass);

    return () => {
      setHeaderStyle("");
    };
  }, []);

  return (
    <>
      <ProcessBanner title="Our Process" />
      <Onboarding />
      <Testimonials />
      <FAQ />
    </>
  );
};

export default OurProcess;
