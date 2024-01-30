import React from "react";
import { AutoContainer } from "layouts/containers";
import Input, { InputWrapper } from "components/Input";
import Button from "components/Button";

const bannerURL = process.env.PUBLIC_URL + "/images/hero/hero.webp";
const bgURL = process.env.PUBLIC_URL + "/images/hero/hero-bg.png";
const bgBannerURL = process.env.PUBLIC_URL + "/images/hero/hero-mobile.webp";

const Hero = ({ showContactPopup }) => {
  const triggerPopup = (e) => {
    if (e?.preventDefault) e.preventDefault();
    showContactPopup();
  };
  return (
    <section className="hero">
      <AutoContainer
        style={{
          maxWidth: 1440,
        }}
      >
        <div className="hero__inner">
          <div className="hero__inner-content">
            <h1>
              <span className="noBreak">Leader in</span>{" "}
              <span className="noBreak">Appointment-Setting</span> Services
            </h1>
            <p>
              "First vendor to engage a prospect and guide the solution
              evaluation process resulting in a 74% win rate.”
              <br />
              <span className="noBreak">- Forrester Research</span>
            </p>
            <InputWrapper>
              <Input
                placeholder="Enter your email"
                onFocus={triggerPopup}
                inputMode="none"
                readOnly
              />
              <Button text={"Contact Sales"} onClick={showContactPopup} />
            </InputWrapper>
          </div>
          <div className="hero__inner-banner">
            <img src={bannerURL} alt="hero-banner" />
          </div>
        </div>
        <div className="bg">
          <div className="bg__image _man">
            <img src={bgBannerURL} alt="bg" />
          </div>
          <div className="bg__image">
            <img src={bgURL} alt="bg" />
          </div>
        </div>
      </AutoContainer>
    </section>
  );
};

export default Hero;
