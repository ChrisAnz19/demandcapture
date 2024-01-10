import React from "react";
import { AutoContainer } from "layouts/containers";
const logosURL = process.env.PUBLIC_URL + "/images/logos/investors/";

const SubHero = () => {
  return (
    <section className="customers customers--about">
      <AutoContainer>
        <div className="customers__inner">
          <h5 className="sm">Our Investors & Partners</h5>
          <div className="customers__inner-row">
            <SubHeroItem
              href="/"
              logoLink={logosURL + "zoominfo_white.svg"}
              title="zoominfo"
            />
            <SubHeroItem
              href="/"
              logoLink={logosURL + "google_white.svg"}
              title="google"
            />
            <SubHeroItem
              href="/"
              logoLink={logosURL + "nvidia_white.svg"}
              title="nvidia"
            />
            <SubHeroItem
              href="/"
              logoLink={logosURL + "bombara_white.svg"}
              title="bombora"
              sm="sm"
            />
            <SubHeroItem
              href="/"
              logoLink={logosURL + "apollo_white.svg"}
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
