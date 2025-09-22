import React from "react";
import Logo from "components/Logo";
import "./NewMain.scss";

const NewMain = () => {
  return (
    <div className="new-main">
      <div className="new-main__container">
        <div className="new-main__logo">
          <Logo />
        </div>
        <div className="new-main__content">
          <p className="new-main__text">
            DemandCapture (2021–2024) delivered outsourced sales development solutions that helped organizations build pipeline and accelerate revenue.
          </p>
          <p className="new-main__text">
            In 2024, the company concluded its independent operations, with its clients and services transitioning to a leading provider in the sales development industry.
          </p>
          <p className="new-main__text">
            From zero to $1M ARR in under 90 days, DemandCapture went on to book more than 25,000 client meetings and helped customers close deals with 44% of the Fortune 100.
          </p>
          <p className="new-main__text">
            This chapter set the foundation — now we're excited to be moving forward to build the next big thing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewMain;
