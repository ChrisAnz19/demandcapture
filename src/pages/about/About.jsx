import React from "react";
import Hero from "./sections/Hero";
import Partners from "./sections/SubHero";
import Faq from "layouts/faq/Faq";
import Features from "./sections/Features";
import Footer from "layouts/footer/Footer";
import "./styles.scss";

const About = () => {
  return (
    <>
      <Hero />
      <Partners />
      <Features />
      <Faq />
    </>
  );
};

export default About;
