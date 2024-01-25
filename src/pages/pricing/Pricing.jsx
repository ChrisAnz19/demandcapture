import React from "react";
import Hero from "./sections/Hero";
import "./styles.scss";
import { FAQ, Testimonials } from "layouts";

const Pricing = () => {
  return (
    <>
      <Hero />
      <Testimonials />
      <FAQ />
    </>
  );
};

export default Pricing;
