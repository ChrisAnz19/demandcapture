import React from "react";
import { AutoContainer } from "layouts/containers";

const heroUrl = process.env.PUBLIC_URL + "./images/about/about-hero.png";

const Hero = () => {
  return (
    <section className="hero hero--about">
      <AutoContainer>
        <div className="hero__inner">
          <div className="hero__inner-content">
            <h2>DemandCapture</h2>
            <p>
              DemandCapture stands as the foremost name in pipeline development
              services within the industry. Our headquarters are nestled in the
              heart of New York City, where we excel at assisting businesses in
              pinpointing prospective clients by delivering actionable insights
              and actively engaging potential leads.
              <br />
              <br />
              This strategic approach empowers businesses to customize their
              sales strategies for unparalleled effectiveness. Our unwavering
              dedication to excellence and our commitment to innovation has
              paved the way for our clients to close business with an impressive
              43% of the Fortune 100.
            </p>
          </div>
        </div>
      </AutoContainer>
      <div className="bg">
        <div className="bg__image">
          <img src={heroUrl} alt="bg" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
