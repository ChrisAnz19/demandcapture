import React from "react";
import { AutoContainer } from "layouts/containers";
const logosURL = process.env.PUBLIC_URL + "/images/logos/investors/";

const SubHero = () => {
  return (
    <section className="customers customers--about">
      <AutoContainer>
        <div className="customers__inner">
          <h5 className="sm">
            Our
            <span> Investors & Partners</span>
          </h5>
          <div className="customers__inner-row">
            <SubHeroItem
              href="/"
              logoLink={logosURL + "zoominfo-white.png"}
              title="zoominfo"
            />
            <SubHeroItem
              href="/"
              logoLink={logosURL + "google-white.png"}
              title="google"
            />
            <SubHeroItem
              href="/"
              logoLink={logosURL + "nvidia-white.png"}
              title="nvidia"
            />
            <SubHeroItem
              href="/"
              logoLink={logosURL + "bombora-white.png"}
              title="bombora"
              sm="sm"
            />
            <SubHeroItem
              href="/"
              logoLink={logosURL + "apollo-white.png"}
              title="apollo"
              sm="sm"
            />
          </div>
        </div>
      </AutoContainer>
    </section>
  );
};

const SubHeroItem = ({ href, logoLink, title, sm }) => {
  const itemHeight = sm ? "customers-item--sm" : "";
  return (
    <a className={`customers-item ${itemHeight}`} href={href} title={title}>
      <img src={logoLink} alt={title} />
    </a>
  );
};

export default SubHero;
