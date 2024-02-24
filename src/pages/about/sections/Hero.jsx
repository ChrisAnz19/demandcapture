import React from "react";
import { AutoContainer } from "layouts/containers";
import useHeroAutoHeight from "hooks/useHeroAutoHeight";

const heroUrl = process.env.PUBLIC_URL + "./images/about/about-hero.webp";

const Hero = () => {
  useHeroAutoHeight();

  return (
    <section className="hero hero--about">
      <AutoContainer>
        <div className="hero__inner">
          <div className="hero__inner-content">
            <h2>DemandCapture</h2>
            <p>
              DemandCapture stands as the foremost name in appointment-setting
              services. Our headquarters are nestled in the heart of New York
              City, where we excel at assisting businesses in pinpointing
              prospective clients by delivering actionable insights and actively
              engaging potential leads.
              <br />
              &nbsp;
              <br />
              Our strategic approach enables businesses to craft a pipeline of
              highly qualified prospects and cultivate a portfolio of
              sought-after brand names. Our unwavering dedication to excellence
              and our commitment to innovation has paved the way for our clients
              to close business with an impressive 43% of the Fortune 100.
            </p>
          </div>
        </div>
      </AutoContainer>
      <div className="bg _noeffects">
        <div className="bg__image">
          <img
            src={heroUrl}
            alt="bg"
            style={{
              objectPosition: "30% center",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
