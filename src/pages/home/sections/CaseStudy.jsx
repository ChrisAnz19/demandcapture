import { AutoContainer } from "layouts/containers";
import React from "react";

const shapeURL =
  process.env.PUBLIC_URL + "/images/illustrations/tabs-illustration.svg";
const bannerURL = process.env.PUBLIC_URL + "/images/case-study/";

const CaseStudy = () => {
  return (
    <section className="caseStudy">
      <AutoContainer>
        <div className="caseStudy__inner">
          <h3 className="caseStudy__inner-title">
            Case Study <br /> Cyber Security Company
          </h3>
          <div className="caseStudy__inner-banner">
            <div className="caseStudy__banner">
              <div className="caseStudy__banner-bg">
                <img
                  className="bg"
                  src={bannerURL + "man-with-arms-crossed.webp"}
                  alt="bg-circles"
                />
              </div>
              <img
                className="item item1"
                src={bannerURL + "item-1.svg"}
                alt="item-1"
              />
              <img
                className="item item2"
                src={bannerURL + "item-2.svg"}
                alt="item-2"
              />
              <img
                className="item item3"
                src={bannerURL + "item-3.svg"}
                alt="item-3"
              />
              <img
                className="item item4"
                src={bannerURL + "item-4.svg"}
                alt="item-4"
              />
            </div>
          </div>
        </div>
        <div className="bg">
          <div className="bg__image">
            <img src={shapeURL} alt="" />
          </div>
        </div>
      </AutoContainer>
    </section>
  );
};

export default CaseStudy;
