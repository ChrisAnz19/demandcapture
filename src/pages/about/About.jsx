import React from "react";
import Hero from "./sections/Hero";
import Partners from "./sections/SubHero";
import Features from "./sections/Features";
import { FAQ } from "layouts";

import "./styles.scss";

const About = () => {
  return (
    <>
      <Hero />
      <Partners />
      <Features />
      <FAQ />
    </>
  );
};

export default About;
