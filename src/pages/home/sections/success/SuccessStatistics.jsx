import React from "react";

const groupIMG = process.env.PUBLIC_URL + "/images/success/3-items-group.svg";

const SuccessStatistics = () => {
  return (
    <div className="successStatistics">
      <div className="successStatistics__title">
        <h4>Industry Averages</h4>
        <h4>Demand Capture</h4>
      </div>
      <GroupRow
        content={[
          {
            title: "35%",
            subtitle: "Cancel Rate",
            textSize: "sm",
            muted: true,
          },
          { title: "7x", textSize: "lg" },
          { title: "5%" },
        ]}
      />
      <GroupRow
        content={[
          {
            title: "22%",
            subtitle: "Next Steps Booked",
            textSize: "sm",
            muted: true,
          },
          { title: "3x", textSize: "lg" },
          { title: "74%" },
        ]}
      />
    </div>
  );
};
const GroupRow = ({ content }) => {
  return (
    <div className="successStatistics__group-wrapper">
      <div className="successStatistics__group">
        <div className="successStatistics__group-bg">
          <img src={groupIMG} alt="bg" />
        </div>
        <div className="successStatistics__group-row">
          {content.map((item, index) => (
            <div className="successStatistics__group-column" key={index}>
              <GroupItem {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
const GroupItem = ({ title, subtitle, textSize = "md", muted = false }) => {
  const getClassName = () => {
    let className = "successStatistics__item-content";
    className += muted ? " _muted" : "";
    className += ` _${textSize}`;

    return className;
  };
  return (
    <div className={"successStatistics__item"}>
      <div className={getClassName()}>
        {title && <strong>{title}</strong>}
        {subtitle && <small>{subtitle}</small>}
      </div>
    </div>
  );
};

export default SuccessStatistics;
