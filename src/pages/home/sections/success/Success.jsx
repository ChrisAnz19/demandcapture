import React from "react";
import { AutoContainer } from "layouts/containers";
import SuccessKnowledge from "./SuccessKnowledge";
import SuccessStatistics from "./SuccessStatistics.jsx";

const shapeURL =
  process.env.PUBLIC_URL + "/images/illustrations/tabs-illustration.svg";
const shapeVerticalURL =
  process.env.PUBLIC_URL +
  "/images/illustrations/tabs-illustration-vertical.svg";

const Success = () => {
  return (
    <section className="success">
      <AutoContainer>
        <div className="success__inner">
          <div className="success__inner-group">
            <div className="success__title">
              <h3>
                Navigating Success <br /> through Collaboration
              </h3>
              <h5>Our Results, Your Victories</h5>
            </div>
            <SuccessKnowledge />
          </div>
          <div className="success__inner-group">
            <div className="success__title">
              <h3>Fostering a Winning Culture</h3>
              <h5>
                outperforming Industry <br /> Established Benchmarks
              </h5>
            </div>
            <SuccessStatistics />
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

export default Success;
