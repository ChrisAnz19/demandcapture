import React from "react";
import Hero from "./sections/Hero";
import SubHero from "./sections/SubHero";
import PartnersBanner from "./sections/PartnersBanner";
import InfoBox from "./sections/InfoBox";
import SystemBanner from "./sections/SystemBanner";

import "./styles.scss";
import Privilegies from "./sections/Privilegies";
import Success from "./sections/Success";

const Home = () => {
  return (
    <>
      <Hero />
      <SubHero />
      <PartnersBanner />
      <InfoBox>
        <h3>Orchestrating 1,000+ Meetings Each Month</h3>
        <p className="_lg">
          Through our proprietary technology, KnowledgeCore, DemandCapture
          leverages <br /> 22 billion data points to accelerate businesses
          revenue generation.
        </p>
        <p className="_lg">
          Proudly recognized as the first appointment-setting firm to enhance
          contact data <br /> through a user compatibility matrix to set
          appointments.
        </p>
      </InfoBox>
      <SystemBanner />
      <Privilegies />
      <InfoBox style={{ minHeight: 190 }}>
        <h3>The DemandCapture Promise</h3>
        <p className="_xlg">
          Only Pay For Meetings With Top-Tier Prospects Exceeding Your Criteria
        </p>
      </InfoBox>
      <Success />
    </>
  );
};

export default Home;
