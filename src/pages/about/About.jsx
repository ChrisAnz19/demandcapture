import React from "react";
import Hero from "./sections/Hero";
import Partners from "./sections/SubHero";
import { FAQ, Testimonials } from "layouts";

import "../../styles/customers.scss";
import PartnersBanner from "./sections/PartnersBanner";

const About = () => {
  return (
    <>
      <Hero />
      <Partners />
      <PartnersBanner />
      <Testimonials />
      <FAQ />
    </>
  );
};

export default About;
