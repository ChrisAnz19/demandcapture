import React from "react";
import Logo from "components/Logo";
import { AutoContainer } from "layouts/containers";
import "./styles.scss";
import Button, { BUTTON_VARIANTS, IconButton } from "components/Button";
import Input, { InputWrapper } from "components/Input";
import { Link, useNavigate } from "react-router-dom";

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
              <Link to="/case-study" className="footer-link">
                Case Studies
              </Link>
            </div>
            <div className="footer__inner-links-column">
              <h6>Company</h6>
              <Link to="/about-us" className="footer-link">
                About
              </Link>
              <Link to="/policy" className="footer-link">
                Privacy Policy
              </Link>
              <Link to="/terms" className="footer-link">
                Terms of Use
              </Link>
            </div>
            <div className="footer__inner-links-column">
              <h6>Pricing</h6>
              <Link to="/contact-us" className="footer-link">
                Contact Us
              </Link>
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
  const navigate = useNavigate();
  const navToContacts = () => navigate("/contact-us");
  return (
    <div className="footer__contact">
      <h6>
        Is your organization ready to accelerate revenue generation? <br />
        We want to see your company reach its full market potential. 
      </h6>
      <Button
        variant={BUTTON_VARIANTS.WHITE}
        text="Contact Sales"
        shadow
        onClick={navToContacts}
      />
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
