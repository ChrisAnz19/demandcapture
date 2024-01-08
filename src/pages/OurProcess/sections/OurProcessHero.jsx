import React from "react";
import { AutoContainer } from "layouts/containers";

const imgURl = process.env.PUBLIC_URL + "images/our-process/hero/";

const OurProcessHero = ({ modifier }) => {
  return (
    <section className={`ourprocess ${modifier ? "ourprocess--home" : ""}`}>
      <AutoContainer style={{ maxWidth: 1310 }}>
        <div className="ourprocess__inner">
          <h2>Our Process</h2>
          <ul className="ourprocess__banner">
            <OurProcessItem
              title={"Client ICP & Requirements Defined"}
              imgUrl={imgURl + "pyramid-part-1.svg"}
            >
              <ol>
                <li>
                  <span>Social Profiles</span>
                </li>
                <li>
                  <span>Company News</span>
                </li>
                <li>
                  <span>Brand Insights</span>
                </li>
                <li>
                  <span>Sales Activity</span>
                </li>
              </ol>
            </OurProcessItem>
            <OurProcessItem
              title={"KnowledgeCore Deployed"}
              imgUrl={imgURl + "pyramid-part-2.svg"}
            >
              <ol>
                <li>
                  <span>CoreFocus</span>
                </li>
                <li>
                  <span>CoreConnect</span>
                </li>
                <li>
                  <span>CoreNow</span>
                </li>
              </ol>
            </OurProcessItem>
            <OurProcessItem
              title={"Outbound Activity by DemandCapture"}
              imgUrl={imgURl + "pyramid-part-3.svg"}
            >
              <ol className="_lg">
                <li>
                  <span>25,000+ Monthly Calls</span>
                </li>
              </ol>
            </OurProcessItem>
            <OurProcessItem
              title={"Appointments Set by DemandCapture"}
              imgUrl={imgURl + "pyramid-part-4.svg"}
            >
              <div className="ourprocess-group">
                <ol className="_lg">
                  <li>
                    <span>200+ Integrations</span>
                  </li>
                </ol>
                <a href="#">
                  <img
                    src={
                      imgURl +
                      `${
                        modifier
                          ? "links/salesforce_logo.svg"
                          : "links/salesforce_logo_white.svg"
                      }`
                    }
                    alt="salesforce"
                  />
                </a>
                <a href="#">
                  <img
                    src={
                      imgURl +
                      `${
                        modifier
                          ? "links/hubspot_logo.svg"
                          : "links/hubspot_logo_white.svg"
                      }`
                    }
                    alt="hubspot"
                  />
                </a>
              </div>
            </OurProcessItem>
          </ul>
        </div>
        <div className="bg">
          <div className="bg__image">
            <img src={imgURl + "bg-lines.webp"} alt="bg" />
          </div>
        </div>
      </AutoContainer>
    </section>
  );
};

const OurProcessItem = ({ imgUrl, title, children }) => {
  return (
    <li className="ourprocess__banner-item">
      <span className="ourprocess__banner-item-line"></span>
      <span className="ourprocess__banner-item-image">
        <img src={imgUrl} alt="shape-part" />
      </span>
      <div className="ourprocess__banner-item-content">
        <h5 className="_sm">{title}</h5>
        {children}
      </div>
    </li>
  );
};
export default OurProcessHero;
