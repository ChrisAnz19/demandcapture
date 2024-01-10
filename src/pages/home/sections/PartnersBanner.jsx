import React from "react";
import { AutoContainer } from "layouts/containers";

const logosURL = process.env.PUBLIC_URL + "/images/logos/investors/";
const shapeURL =
  process.env.PUBLIC_URL + "/images/illustrations/tabs-illustration.svg";
const bg = process.env.PUBLIC_URL + "/images/bg.png";

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
                logoLink={logosURL + "zoominfo.svg "}
                title={"zoominfo"}
              />
              <PartnersItem
                href={"/"}
                logoLink={logosURL + "google-logo.svg "}
                title={"google"}
                addClass="_sm"
              />
              <PartnersItem
                href={"/"}
                logoLink={logosURL + "nvidia.svg "}
                title={"nvidia"}
              />
              <PartnersItem
                href={"/"}
                logoLink={logosURL + "bombora.svg "}
                title={"bombora"}
              />
              <PartnersItem
                href={"/"}
                logoLink={logosURL + "apollo.svg "}
                title={"apollo"}
              />
            </div>
            <div className="partners__inner-banner-shape">
              <img src={shapeURL} alt="shape" />
            </div>
          </div>
        </div>
      </AutoContainer>
      <div className="bg">
        <div className="bg__image">
          <img src={bg} alt="bg" />
        </div>
      </div>
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
