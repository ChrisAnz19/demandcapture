import React from "react";
import { AutoContainer } from "layouts/containers";

const shapeURL =
  process.env.PUBLIC_URL + "/images/illustrations/tabs-illustration.svg";
const borderURL =
  process.env.PUBLIC_URL + "/images/illustrations/border-shape.svg";

const PartnersBanner = () => {
  return (
    <section className="partners partners--about">
      <AutoContainer>
        <div className="partners__inner">
          <div className="partners__inner-banner">
            <div className="partners__inner-banner-row">
              <h6>
                First vendor to engage a prospect and guide the solution
                evaluation process Resulting in a 74% win rate.” - Forrester
                Research
              </h6>
            </div>
            <div className="partners__inner-banner-shape">
              <img src={shapeURL} alt="shape" />
            </div>
          </div>
          <div className="partners__inner-container">
            <div className="partners__inner-container-item">
              <strong>Sales & Engineering Headquarters in New York City</strong>
              <div className="partners__inner-container-bg">
              <img src={borderURL} alt="border" />
              </div>
            </div>
            <div className="partners__inner-container-item">
              <strong>NPS Score of 96</strong>
              <div className="partners__inner-container-bg">
              <img src={borderURL} alt="border" />
              </div>
            </div>
            <div className="partners__inner-container-item">
              <strong>NYU & MIT Data Science Team</strong>
              <div className="partners__inner-container-bg">
                <img src={borderURL} alt="border" />
              </div>
            </div>
          </div>
        </div>
      </AutoContainer>
    </section>
  );
};

export default PartnersBanner;
