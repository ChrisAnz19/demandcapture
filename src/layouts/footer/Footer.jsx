import React, { useState } from "react";
import Logo from "components/Logo";
import { AutoContainer } from "layouts/containers";
import "./styles.scss";
import Button, { BUTTON_VARIANTS, LinkButton } from "components/Button";
import Input, { InputWrapper } from "components/Input";
import {
  Link,
  // useNavigate
} from "react-router-dom";
import SubscribePopup from "forms/SubscribePopup";

const icoURL = process.env.PUBLIC_URL + "/images/icons/socials/";

const Footer = ({ showContactPopup }) => {
  const [popupVisible, setPopupVisible] = useState(false);
  const popupClose = () => setPopupVisible(false);
  const popupShow = () => setPopupVisible(true);
  const triggerPopup = (e) => {
    if (e?.preventDefault) e.preventDefault();
    popupShow();
  };

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
                icoURL={icoURL + "linkedin2.svg"}
                target="_blank"
                href="https://www.linkedin.com/company/demandcapture"
              />
              <LinkButton
                icoURL={icoURL + "instagram.svg"}
                target="_blank"
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
              <Input
                placeholder="Enter your email"
                shadow
                onFocus={triggerPopup}
                inputMode="none"
                readOnly
              />
              <Button text={"Subscribe"} shadow onClick={popupShow} />
            </InputWrapper>
          </div>
        </div>
        <FooterCopyright />
      </AutoContainer>
      {popupVisible && (
        <SubscribePopup close={popupClose} style={{ maxWidth: 600 }} />
      )}
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
      <span className="ico">
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512" />
        </svg>
      </span>
      <span>2024 Demand Capture | All Rights Reserved</span>
    </div>
  );
};

export default Footer;
