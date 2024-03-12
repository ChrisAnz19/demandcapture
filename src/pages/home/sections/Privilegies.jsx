import { AutoContainer } from "layouts/containers";
import React from "react";

const imagesURL = process.env.PUBLIC_URL + "/images/privilegies/";

const Privilegies = () => {
  return (
    <section className="privilegies">
      <AutoContainer>
        <div className="privilegies__inner">
          <div className="privilegies__inner-title">
            <h3>The Artistry & Precision of Our Winning DNA</h3>
            <h5>Quality Connections, Measurable Results</h5>
          </div>
          <div className="privilegiesGraph">
            <div className="privilegiesGraph__columns">
              <div className="privilegiesGraph__column">
                <div className="privilegiesGraph__column-list">
                  <strong>
                    Client ICP & <br />
                    Requirements Defined
                  </strong>
                  <ul>
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
                  </ul>
                </div>
                <div className="privilegiesGraph__column-list">
                  <strong>Outbound Activity by DemandCapture</strong>
                  <span>25,000+ Monthly Calls</span>
                </div>
              </div>
              <div className="privilegiesGraph__column">
                <div className="privilegiesGraph__column-list">
                  <strong>Knowledge Deployed</strong>
                  <ul>
                    <li>
                      <span>CoreFocus</span>
                    </li>
                    <li>
                      <span>CoreConnect</span>
                    </li>
                    <li>
                      <span>CoreNow</span>
                    </li>
                  </ul>
                </div>
                <div className="privilegiesGraph__column-list">
                  <strong>Appointments Set by DemandCapture</strong>
                  <span>200+ Integrations</span>
                  <div className="privilegiesGraph-group">
                    <img
                      src={imagesURL + "brands/Salesforce.com_logo.png"}
                      alt="salesforce"
                    />
                    <img
                      src={imagesURL + "brands/2560px-hubspot_logo.png"}
                      alt="hubspot"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="privilegiesGraph__joints">
              <PrivilegiesGraphJoint />
              <PrivilegiesGraphJoint />
              <PrivilegiesGraphJoint />
              <PrivilegiesGraphJoint />
            </div>
            <div className="privilegiesGraph-bg">
              <img src={imagesURL + "phone-on-hand.png"} alt="phone" />
            </div>
          </div>
        </div>
        <div className="bg">
          <div className="bg__image">
            <img src={imagesURL + "bg.png"} alt="bg" />
          </div>
        </div>
      </AutoContainer>
    </section>
  );
};
const PrivilegiesGraphJoint = () => {
  return (
    <div className="privilegiesGraph__joints-item">
      <div>
        <img
          className="_circle"
          src={imagesURL + "joints/circle.svg"}
          alt="circle"
        />
        <img className="_line" src={imagesURL + "joints/line.svg"} alt="line" />
      </div>
    </div>
  );
};
export default Privilegies;
