import React from "react";
import { AutoContainer } from "layouts/containers";

const shapeURL =
  process.env.PUBLIC_URL + "/images/illustrations/tabs-illustration.svg";
const systemIllustrationURL =
  process.env.PUBLIC_URL + "/images/illustrations/system-illustration.svg";

const SystemBanner = () => {
  return (
    <section className="systemBanner">
      <AutoContainer>
        <div className="systemBanner__inner">
          <SystemBannerMessage>
            2,800 Data Points Per COntact
          </SystemBannerMessage>
          <SystemBannerMessage>
            Intent Data from 200MM Sales Calls
          </SystemBannerMessage>
          <SystemBannerMessage>
            7 Proprietary Deep learning Algorithms
          </SystemBannerMessage>
          <SystemBannerInfo title={"Outcome"}>
            <p>
              IBM's Marketing Department comprises of 3,267 professionals,
              featuring 414 key decision-makers holding positions of marketing
              director or above. Leveraging our user compatibility matrix,
              KnowledgeCore precisely identifies the optimal 12 individuals
              within IBM to engage
              <br />
              <b>- Precision-Driven Performance</b>
            </p>
          </SystemBannerInfo>
          <div className="systemBanner__inner-image">
            <img src={systemIllustrationURL} alt="system-graph" />
          </div>
        </div>
        <div className="bg">
          <div className="bg__image">
            <img src={shapeURL} alt="shape" />
          </div>
          <div className="bg__image">
            <img src={shapeURL} alt="shape" />
          </div>
        </div>
      </AutoContainer>
    </section>
  );
};

const SystemBannerInfo = ({ title, children }) => {
  return (
    <div className="systemBanner__info">
      <div className="systemBanner__info-body">
        <strong className="systemBanner__info-title">{title}</strong>
        <div className="systemBanner__info-content">{children}</div>
      </div>
    </div>
  );
};
const SystemBannerMessage = ({ children }) => {
  return <div className="systemBanner-message">{children}</div>;
};
export default SystemBanner;
