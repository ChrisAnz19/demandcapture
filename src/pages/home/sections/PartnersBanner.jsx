import React from "react";
import { AutoContainer } from "layouts/containers";

const logosURL = process.env.PUBLIC_URL + "/images/logos/investors/";
const shapeURL =
  process.env.PUBLIC_URL + "/images/illustrations/tabs-illustration.svg";

const PartnersBanner = () => {
  return (
    <section className="partners">
      <AutoContainer>
        <div className="partners__inner">
          <h3>
            Appointment Setting Is A Facet Of Our Story;
            <br />
            Technology Leadership Is Our Defining Narrative
          </h3>
          <div className="partners__inner-banner">
            <h5>Our Investors & Partners</h5>
            <div className="partners__inner-banner-row">
              <PartnersItem
                href={"/"}
                logoLink={logosURL + "zoominfo.png "}
                title={"zoominfo"}
              />
              <PartnersItem
                href={"/"}
                logoLink={logosURL + "google.png "}
                title={"google"}
                addClass="_sm"
              />
              <PartnersItem
                href={"/"}
                logoLink={logosURL + "nvidia.png "}
                title={"nvidia"}
              />
              <PartnersItem
                href={"/"}
                logoLink={logosURL + "bombora.png "}
                title={"bombora"}
              />
              <PartnersItem
                href={"/"}
                logoLink={logosURL + "apollo.png "}
                title={"apollo"}
              />
            </div>
            <div className="partners__inner-banner-shape">
              <img src={shapeURL} alt="shape" />
            </div>
          </div>
        </div>
      </AutoContainer>
    </section>
  );
};

const PartnersItem = ({ href, logoLink, title, addClass = "" }) => {
  return (
    <a className={`partners-item ${addClass}`} href={href} title={title}>
      <img src={logoLink} alt={title} />
    </a>
  );
};
export default PartnersBanner;
