import React from "react";
import { border1, border2, border3 } from "./svgs/Borders";

const successFolder = process.env.PUBLIC_URL + "/images/success/";
const borders = [border1, border2, border3];

const SuccessKnowledge = () => {
  return (
    <div className="successKnowledge">
      <div className="successKnowledge__label">
        <div className="successKnowledge__label-image">
          <img src={successFolder + "knowledge.png"} alt="knowledge core" />
        </div>
      </div>
      <div className="successKnowledge__row">
        <SuccessKnowledgeItem
          index={1}
          iconURl={successFolder + "icon-star.svg"}
          title="5%"
          subtitle="Cancel Rate"
        />
        <SuccessKnowledgeItem
          index={2}
          iconURl={successFolder + "icon-tick.svg"}
          title="74%"
          subtitle="Next Steps Booked"
        />
        <SuccessKnowledgeItem
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

const SuccessKnowledgeItem = ({ iconURl, title, subtitle, index }) => {
  const titleClass = title && title.length && title.length > 5 ? "_sm" : "";
  return (
    <div className="successKnowledge__item-wrapper">
      <div className="successKnowledge__item">
        <div className="successKnowledge__item-bg">{borders[index - 1]}</div>
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

export default SuccessKnowledge;
