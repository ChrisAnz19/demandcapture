import React from "react";
import { AutoContainer } from "layouts/containers";
import Input, { InputWrapper } from "components/Input";
import Button from "components/Button";

const bannerURL = process.env.PUBLIC_URL + "/images/hero/hero-1.png";
const bgURL = process.env.PUBLIC_URL + "/images/hero/hero-bg.png";

const Hero = () => {
  return (
    <section className="hero">
      <AutoContainer>
        <div className="hero__inner">
          <div className="hero__inner-content">
            <h1>
              Leader in <br /> Appointment-Setting Services
            </h1>
            <p>
              First vendor to engage a prospect and guide the solution
              evaluation process resulting in a 74% win rate.”
              <br />- Forrester Research
            </p>
            <InputWrapper>
              <Input placeholder="Enter your email" shadow />
              <Button text={"Contact Sales"} shadow />
            </InputWrapper>
          </div>
          <div className="hero__inner-banner">
            <img src={bannerURL} alt="hero-banner" />
          </div>
        </div>
        <div className="bg">
          <div className="bg__image">
            <img src={bgURL} alt="bg" />
          </div>
        </div>
      </AutoContainer>
    </section>
  );
};

export default Hero;
