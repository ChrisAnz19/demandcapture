import React, { useEffect, useRef, useState } from "react";
import { AutoContainer } from "layouts/containers";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const logosURL = process.env.PUBLIC_URL + "/images/logos/customers/";
const newLogosURL = process.env.PUBLIC_URL + "/images/logos/fortune/";

const logosArray = [
  { href: "/", logoLink: logosURL + "amazon.svg", title: "amazon" },
  { href: "/", logoLink: logosURL + "walmart.svg", title: "walmart" },
  { href: "/", logoLink: logosURL + "microsoft.svg", title: "microsoft" },
  { href: "/", logoLink: logosURL + "morgan.svg", title: "morgan" },
  { href: "/", logoLink: logosURL + "ibm.svg", title: "ibm" },
  { href: "/", logoLink: newLogosURL + "Merck.svg", title: "Merck" },
  {
    href: "/",
    logoLink: newLogosURL + "American Express.svg",
    title: "American Express",
  },
  { href: "/", logoLink: newLogosURL + "CBS_logo.svg", title: "CBS_logo" },
  { href: "/", logoLink: newLogosURL + "Comcast.svg", title: "Comcast" },
  { href: "/", logoLink: newLogosURL + "Fidelity.svg", title: "Fidelity" },
  {
    href: "/",
    logoLink: newLogosURL + "General Motors.svg",
    title: "General Motors",
  },
  {
    href: "/",
    logoLink: newLogosURL + "Johnson and Johnson.svg",
    title: "Johnson and Johnson",
  },
  {
    href: "/",
    logoLink: newLogosURL + "Liberty Mutual.svg",
    title: "Liberty Mutual",
    addClass: "_lg",
  },
];

const sliderSettings = {
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 5000,
  autoplaySpeed: 0,
  cssEase: "linear",
  variableWidth: true,
  pauseOnHover: false,
};

const SubHero = () => {
  const [init, setInit] = useState(false);

  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) setInit(true);
  }, [ref.current]);

  console.log("ref.current", !!ref.current);

  return (
    <section className="customers customers--lg">
      <AutoContainer>
        <div className="customers__inner" ref={ref}>
          <div className="customers__inner-slider">
            {!!init && (
              <Slider {...sliderSettings}>
                {[...logosArray].map((data, index) => (
                  <SubHeroItem key={index} {...data} />
                ))}
              </Slider>
            )}
          </div>
          <div className="customers__inner-title">
            <h6>
              Our Customers Have Closed{" "}
              <span className="noBreak">43% Of The Fortune 100</span>
            </h6>
          </div>
        </div>
      </AutoContainer>
    </section>
  );
};

const SubHeroItem = ({ href, logoLink, title, addClass = "" }) => {
  return (
    <a className={`customers-item ${addClass}`} href={href} title={title}>
      <img src={logoLink} alt={title} />
    </a>
  );
};

export default SubHero;
