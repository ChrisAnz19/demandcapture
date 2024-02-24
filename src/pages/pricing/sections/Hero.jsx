import React, { useState } from "react";
import { AutoContainer } from "layouts/containers";
import PricingStarterPopup from "forms/PricingStarterPopup";
import PricingProPopup from "forms/PricingProPopup";
import PricingEnterprisePopup from "forms/PricingEnterprisePopup";
import useHeroAutoHeight from "hooks/useHeroAutoHeight";

const FORM_TYPES = {
  starter: "Starter",
  professional: "Professional",
  enterprise: "Enterprise",
};
const Hero = () => {
  const [form, setForm] = useState(null);
  useHeroAutoHeight();

  const bgURL = process.env.PUBLIC_URL + "/images/pricing/hero-bg.webp";
  const shapeUrl = process.env.PUBLIC_URL + "/images/pricing/hero-shape.png";

  const popupClose = () => setForm(null);

  return (
    <section className="hero hero--sm">
      <AutoContainer>
        <div className="hero__inner">
          <div className="hero__inner-content">
            <h2>PRICING & PLANS</h2>
            <p>
              DemandCapture provides versatile packages tailored to meet your
              appointment-setting needs. Reach out to our Sales Team to initiate
              and launch your pilot program.
            </p>
          </div>
          <div className="hero__inner-row">
            <div className="hero__item">
              <div className="hero__item-content">
                <div className="hero__item-group">
                  <h5 className="_lg">Starter</h5>
                  <p>
                    <span> Engineered To</span>
                    <br />
                    <span>Accelerate Your Pipeline</span>
                  </p>
                  <button
                    className="buttonPrimary buttonPrimary--default"
                    onClick={() => setForm(FORM_TYPES.starter)}
                  >
                    <span>Contact Sales</span>
                  </button>
                </div>
                <div className="hero__item-box">
                  <h6 className="_sm">Included:</h6>
                  <ul className="list list--gray">
                    <li className="list__item">KnowledgeCore Deployed</li>
                    <li className="list__item">
                      3+ Enterprise Sales Representatives
                    </li>
                    <li className="list__item">Performance Dashboard</li>
                    <li className="list__item">Dedicated Campaign Manager</li>
                  </ul>
                </div>
                <div className="hero__item-shape">
                  <img src={shapeUrl} alt="shape" />
                </div>
              </div>
              <div className="hero__item-bg"></div>
            </div>
            <div className="hero__item">
              <div className="hero__item-content">
                <div className="hero__item-group">
                  <h5 className="_lg">Professional</h5>
                  <p>
                    <span> Crafted To Fulfill </span>
                    <br />
                    <span>All Your Requirements</span>
                  </p>
                  <button
                    className="buttonPrimary buttonPrimary--default"
                    onClick={() => setForm(FORM_TYPES.professional)}
                  >
                    <span>Contact Sales</span>
                  </button>
                </div>
                <div className="hero__item-box">
                  <h6 className="_sm">Included:</h6>
                  <ul className="list list--gray">
                    <li className="list__item">KnowledgeCore Deployed</li>
                    <li className="list__item">
                      5+ Enterprise Sales Representatives
                    </li>
                    <li className="list__item">Performance Dashboard</li>
                    <li className="list__item">Dedicated Campaign Manager</li>
                    <li className="list__item">CRM Integration</li>
                  </ul>
                </div>
                <div className="hero__item-shape">
                  <img src={shapeUrl} alt="shape" />
                </div>
              </div>
              <div className="hero__item-bg _gradient"></div>
            </div>
            <div className="hero__item">
              <div className="hero__item-content">
                <div className="hero__item-group">
                  <h5 className="_lg">Enterprise</h5>
                  <p>
                    <span> Designed With </span>
                    <br />
                    <span>Scalability In Mind</span>
                  </p>
                  <button
                    className="buttonPrimary buttonPrimary--default"
                    onClick={() => setForm(FORM_TYPES.enterprise)}
                  >
                    <span>Contact Sales</span>
                  </button>
                </div>
                <div className="hero__item-box">
                  <h6 className="_sm">Included:</h6>
                  <ul className="list list--gray">
                    <li className="list__item">KnowledgeCore Deployed</li>
                    <li className="list__item">
                      10+ Enterprise Sales Representatives
                    </li>
                    <li className="list__item">Performance Dashboard</li>
                    <li className="list__item">Dedicated Campaign Manager</li>
                    <li className="list__item">CRM Integration</li>
                  </ul>
                </div>
                <div className="hero__item-shape">
                  <img src={shapeUrl} alt="shape" />
                </div>
              </div>
              <div className="hero__item-bg"></div>
            </div>
          </div>
        </div>
      </AutoContainer>
      <div className="bg">
        <div className="bg__image">
          <img src={bgURL} alt="bg" />
        </div>
      </div>
      {form === FORM_TYPES.starter && (
        <PricingStarterPopup close={popupClose} />
      )}
      {form === FORM_TYPES.professional && (
        <PricingProPopup close={popupClose} />
      )}
      {form === FORM_TYPES.enterprise && (
        <PricingEnterprisePopup close={popupClose} />
      )}
    </section>
  );
};
export default Hero;
