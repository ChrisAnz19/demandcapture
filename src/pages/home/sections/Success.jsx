import { AutoContainer } from "layouts/containers";
import React from "react";

const shapeURL =
  process.env.PUBLIC_URL + "/images/illustrations/tabs-illustration.svg";
const shapeVerticalURL =
  process.env.PUBLIC_URL +
  "/images/illustrations/tabs-illustration-vertical.svg";
const successFolder = process.env.PUBLIC_URL + "/images/success/";

const Success = () => {
  return (
    <section className="success">
      <AutoContainer>
        <div className="success__inner">
          <div className="success__inner-group">
            <div className="success__title">
              <h3>Navigating Success through Collaboration</h3>
              <h5>Our Results, Your Victories</h5>
            </div>
            <BannerKnowledge />
          </div>
          <div className="success__inner-group">
            <div className="success__title">
              <h3>Fostering a Winning Culture</h3>
              <h5>outperforming Established Industry Benchmarks</h5>
            </div>
          </div>
        </div>
        <div className="bg">
          <div className="bg__image">
            <img src={shapeURL} alt="shape" />
          </div>
          <div className="bg__image">
            <img src={shapeVerticalURL} alt="shape" />
          </div>
          <div className="bg__image">
            <img src={shapeVerticalURL} alt="shape" />
          </div>
        </div>
      </AutoContainer>
    </section>
  );
};

const BannerKnowledge = () => {
  return (
    <div className="successKnowledge">
      <div className="successKnowledge__label">
        <div className="successKnowledge__label-image">
          <img src={successFolder + "knowledge.png"} alt="knowledge core" />
        </div>
      </div>
      <div className="successKnowledge__row">
        <BannerKnowledgeItem
          index={1}
          iconURl={successFolder + "icon-star.svg"}
          title="5%"
          subtitle="Cancel Rate"
        />
        <BannerKnowledgeItem
          index={2}
          iconURl={successFolder + "icon-tick.svg"}
          title="74%"
          subtitle="Next Steps Booked"
        />
        <BannerKnowledgeItem
          index={3}
          iconURl={successFolder + "icon-finance.svg"}
          title="$100 MM+"
          subtitle="Pipeline Generation"
        />
        <div className="successKnowledge__row-lines">
          <img src={successFolder + "lines.svg"} alt="lines" />
        </div>
      </div>
    </div>
  );
};

const BannerKnowledgeItem = ({ iconURl, title, subtitle, index }) => {
  const titleClass = title && title.length && title.length > 5 ? "_sm" : "";
  return (
    <div className="successKnowledge__item-wrapper">
      <div className="successKnowledge__item">
        <div className="successKnowledge__item-bg">
          <img src={successFolder + `border-${index}.svg`} alt="border" />
        </div>
        <div className="successKnowledge__item-icon">
          <img src={iconURl} alt="incon-finance" />
        </div>
        <div className="successKnowledge__item-group">
          <strong className={titleClass}>{title}</strong>
          <small>{subtitle}</small>
        </div>
      </div>
    </div>
  );
};

export default Success;
