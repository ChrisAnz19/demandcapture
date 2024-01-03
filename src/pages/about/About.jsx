import React from "react";
import Hero from "./sections/Hero";
import Partners from "./sections/SubHero";
import Faq from "layouts/faq/Faq";
import Features from "../case/sections/Features";
import PartnersBanner from "./sections/PartnersBanner";
import "./styles.scss";

const About = () => {
  return (
    <>
      <Hero />
      <Partners />
      <PartnersBanner />
      <Features />
      <Faq />
    </>
  );
};

export default About;
