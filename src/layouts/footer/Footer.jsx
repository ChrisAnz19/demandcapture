import React from "react";
import Logo from "components/Logo";
import { AutoContainer } from "layouts/containers";
import "./styles.scss";
import Button, { BUTTON_VARIANTS, IconButton } from "components/Button";
import Input, { InputWrapper } from "components/Input";

const icoURL = process.env.PUBLIC_URL + "/images/icons/socials/";

const Footer = () => {
  return (
    <footer className="footer">
      <AutoContainer>
        <FooterContact />
        <div className="footer__inner">
          <div className="footer__inner-info">
            <Logo white />
            <p>
              “First vendor to engage a prospect and guide the solution
              evaluation process Resulting in a 74% win rate.” - Forrester
              Research
            </p>
            <div className="footer__inner-info-social">
              <IconButton icoURL={icoURL + "facebook.svg"} />
              <IconButton icoURL={icoURL + "instagram.svg"} />
            </div>
          </div>
          <div className="footer__inner-links">
            <div className="footer__inner-links-column">
              <h6>Our Process</h6>
              <a href="/" className="footer-link">
                Case Studies
              </a>
            </div>
            <div className="footer__inner-links-column">
              <h6>Company</h6>

              <a href="/" className="footer-link">
                About
              </a>
              <a href="/" className="footer-link">
                Privacy Policy
              </a>
              <a href="/" className="footer-link">
                Terms of Use
              </a>
            </div>
            <div className="footer__inner-links-column">
              <h6>Pricing</h6>

              <a href="/" className="footer-link">
                Contact Us
              </a>
            </div>
          </div>
          <div className="footer__inner-news">
            <h6>SUBSCRIBE TO OUR NEWSLETTER</h6>
            <InputWrapper>
              <Input placeholder="Enter your email" shadow />
              <Button text={"Subscribe"} shadow />
            </InputWrapper>
          </div>
        </div>
        <FooterCopyright />
      </AutoContainer>
    </footer>
  );
};

const FooterContact = () => {
  return (
    <div className="footer__contact">
      <h6>
        Is your organization ready to accelerate revenue generation? <br />
        We want to see your company reach its full market potential. 
      </h6>
      <Button variant={BUTTON_VARIANTS.WHITE} text="Contact Sales" shadow />
    </div>
  );
};
const FooterCopyright = () => {
  return (
    <div className="footer__copyright">
      ©️ 2023 Demand Capture | All Rights Reserved
    </div>
  );
};

export default Footer;
