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
            Case Study Cyber Security Company
          </h3>
          <div className="caseStudy__inner-banner">
            <div className="caseStudy__banner">
              <div className="caseStudy__banner-bg">
                <img className="bg" src={bannerURL + "bg-circles.png"} />
              </div>
              <img className="item item1" src={bannerURL + "item-1.png"} />
              <img className="item item2" src={bannerURL + "item-2.png"} />
              <img className="item item3" src={bannerURL + "item-3.png"} />
              <img className="item item4" src={bannerURL + "item-4.png"} />
              <img
                className="man"
                src={bannerURL + "man-with-arms-crossed.png"}
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
