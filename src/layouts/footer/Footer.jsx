import React from "react";
import Logo from "components/Logo";
import { AutoContainer } from "layouts/containers";
import "./styles.scss";
import Button, { BUTTON_VARIANTS, LinkButton } from "components/Button";
import Input, { InputWrapper } from "components/Input";
import {
  Link,
  // useNavigate
} from "react-router-dom";

const icoURL = process.env.PUBLIC_URL + "/images/icons/socials/";

const Footer = ({ showContactPopup }) => {
  return (
    <footer className="footer">
      <AutoContainer>
        <FooterContact showContactPopup={showContactPopup} />
        <div className="footer__inner">
          <div className="footer__inner-info">
            <Logo white />
            <p>
              “First vendor to engage a prospect and guide the solution
              evaluation process Resulting in a 74% win rate.”{" "}
              <span className="noBreak">- Forrester Research</span>
            </p>
            <div className="footer__inner-info-social">
              <LinkButton
                icoURL={icoURL + "facebook.svg"}
                href="https://www.linkedin.com/company/demandcapture"
              />
              <LinkButton
                icoURL={icoURL + "instagram.svg"}
                href="https://www.instagram.com/demand_capture/"
              />
            </div>
          </div>
          <div className="footer__inner-links">
            <div className="footer__inner-links-column">
              <Link to="/our-process" className="footer-link _lg">
                Our Process
              </Link>
              <Link to="/case-study" className="footer-link">
                Case Studies
              </Link>
            </div>
            <div className="footer__inner-links-column">
              <Link to="/about-us" className="footer-link _lg">
                Company
              </Link>
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
              <Link to="/Pricing" className="footer-link _lg">
                Pricing
              </Link>
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

const FooterContact = ({ showContactPopup }) => {
  // const navigate = useNavigate();
  // const navToContacts = () => navigate("/contact-us");
  return (
    <div className="footer__contact">
      <h6>
        <span>
          Is your organization ready to accelerate revenue generation?
        </span>
        <br />
        <span>
          We want to see your company reach its full market potential. 
        </span>
      </h6>
      <Button
        variant={BUTTON_VARIANTS.WHITE}
        text="Contact Sales"
        onClick={showContactPopup}
      />
    </div>
  );
};
const FooterCopyright = () => {
  return (
    <div className="footer__copyright">
      ©️ 2024 Demand Capture | All Rights Reserved
    </div>
  );
};

export default Footer;
