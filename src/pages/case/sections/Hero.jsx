import React from "react";
import { AutoContainer } from "layouts/containers";

const Hero = () => {
  const shapeURL =
    process.env.PUBLIC_URL + "/images/illustrations/tabs-illustration.svg";
  const logoURL = process.env.PUBLIC_URL + "/images/";

  return (
    <section className="hero hero--sm hero--case">
      <AutoContainer>
        <div className="hero__inner">
          <div className="hero__inner-content">
            <h2>On track to set nearly 1,000 meetings per month</h2>
            <p>
              “The ability to strike while the iron is hot has made lead
              conversion a daily reality for the team who are on track to set
              nearly 1,000 meetings per month with an organization-wide cancel
              rate of less than 5%.”
            </p>
          </div>
          <div className="partners__inner-banner">
            <div className="partners__inner-banner-row">
              <a
                className="partners__inner-banner-item "
                href="/"
                title="zoominfo"
              >
                <img src={logoURL + "logo.svg"} alt="zoominfo" />
              </a>
              <strong className="partners__inner-banner-text">+</strong>
              <a
                className="partners__inner-banner-item "
                href="/"
                title="zoominfo"
              >
                <img
                  src={logoURL + "logos/investors/zoominfo-logo.svg"}
                  alt="zoominfo"
                />
              </a>
            </div>
            <div className="partners__inner-banner-shape">
              <img src={shapeURL} alt="shape" />
            </div>
          </div>
        </div>
      </AutoContainer>
    </section>
  );
};

export default Hero;
