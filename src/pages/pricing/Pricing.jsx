import React from "react";
import Hero from "./sections/Hero";
import "./styles.scss";
import { FAQ, Testimonials } from "layouts";

const Pricing = ({ showContactPopup }) => {
  return (
    <>
      <Hero showContactPopup={showContactPopup} />
      <Testimonials />
      <FAQ />
    </>
  );
};

export default Pricing;
