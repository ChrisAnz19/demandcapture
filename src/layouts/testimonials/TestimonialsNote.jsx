import React from "react";
import { AutoContainer } from "layouts/containers";

const TestimonialsNote = () => {
  return (
    <section className="tNote">
      <AutoContainer style={{ maxWidth: 1085 }}>
        <div className="tNote__inner">
          <div className="tNote__inner-primary">
            <h5 className="_primary">
              Unlock success with our <br />
              performance guarantee
            </h5>
            <p className="_xlg">
              <br />
              <i>
                Pay only for meetings with top-tier <br />
                prospects exceeding your criteria
              </i>
              <br />
              <br />
              <b> The DemandCapture Promise</b>
              <br />
              <br />
              <i>Quality Connections, Measurable Results</i>
            </p>
          </div>
          <div className="tNote__inner-secondary">
            <h5>Partnership Includes:</h5>
            <ul>
              <li>Premium Data</li>
              <li>KnowlegdeCore Deployed</li>
              <li>Enterprise Sales Representatives</li>
              <li>Performance Dashboard</li>
              <li>Campaign Manager</li>
            </ul>
          </div>
        </div>
      </AutoContainer>
    </section>
  );
};

export default TestimonialsNote;
