import React from "react";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Research from "./sections/Research";

import "./styles.scss";
import { FAQ, Testimonials } from "layouts";

const Case = () => {
  return (
    <>
      <Hero />
      <Research />
      <Features />
      <Testimonials />
      <FAQ />
    </>
  );
};

export default Case;
