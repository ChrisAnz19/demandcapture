import React from "react";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Faq from "layouts/faq/Faq";
import Research from "./sections/Research";

import "./styles.scss";

const Case = () => {
  return (
    <>
      <Hero />
      <Research />
      <Features />
      <Faq />
    </>
  );
};

export default Case;
