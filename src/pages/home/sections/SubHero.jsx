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
  {
    href: "/",
    logoLink: logosURL + "morgan.svg",
    title: "morgan",
  },
  { href: "/", logoLink: logosURL + "ibm.svg", title: "ibm" },
  {
    href: "/",
    logoLink: newLogosURL + "Merck.svg",
    title: "Merck",
    addClass: "_lg",
  },
  {
    href: "/",
    logoLink: newLogosURL + "American Express.svg",
    title: "American Express",
    addClass: "_lg",
  },
  { href: "/", logoLink: newLogosURL + "CBS_logo.svg", title: "CBS_logo" },
  {
    href: "/",
    logoLink: newLogosURL + "Comcast.svg",
    title: "Comcast",
    addClass: "_lg",
  },
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
    addClass: "_xlg",
  },
];

// const sliderSettings = {
//   dots: false,
//   arrows: false,
//   infinite: true,
//   slidesToShow: 6.5,
//   slidesToScroll: 1,
//   autoplay: true,
//   speed: 5000,
//   autoplaySpeed: 0,
//   cssEase: "linear",
//   pauseOnHover: false,
//   responsive: [
//     {
//       breakpoint: 1280,
//       settings: {
//         slidesToShow: 6,
//         variableWidth: false,
//       },
//     },
//     {
//       breakpoint: 1180,
//       settings: {
//         slidesToShow: 5,
//         variableWidth: false,
//       },
//     },
//     {
//       breakpoint: 860,
//       settings: {
//         slidesToShow: 4.5,
//         variableWidth: false,
//       },
//     },
//     {
//       breakpoint: 760,
//       settings: {
//         slidesToShow: 3.5,
//         variableWidth: false,
//       },
//     },
//     {
//       breakpoint: 540,
//       settings: {
//         slidesToShow: 3,
//         variableWidth: false,
//       },
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 2.2,
//         variableWidth: false,
//       },
//     },
//   ],
// };
const ratios = [
  {
    width: "95.5469px",
    height: "28.7969px",
  },
  {
    width: "119.25px",
    height: "28.7969px",
  },
  {
    width: "134.828px",
    height: "28.7969px",
  },
  {
    width: "189.234px",
    height: "28.7969px",
  },
  {
    width: "72.6094px",
    height: "28.7969px",
  },
  {
    width: "96.3906px",
    height: "28.7969px",
  },
  {
    width: "79.5781px",
    height: "28.7969px",
  },
  {
    width: "94.5312px",
    height: "28.7969px",
  },
  {
    width: "81.4688px",
    height: "28.7969px",
  },
  {
    width: "118.062px",
    height: "28.7969px",
  },
  {
    width: "108.062px",
    height: "28.7969px",
  },
  {
    width: "158.781px",
    height: "28.7969px",
  },
  {
    width: "57.5938px",
    height: "28.7969px",
  },
];

const SubHero = () => {
  // const [init, setInit] = useState(false);

  const ref = useRef(null);
  // useEffect(() => {
  //   if (ref.current) setInit(true);
  // }, [ref.current]);

  return (
    <section className="customers customers--lg">
      <AutoContainer>
        <div className="customers__inner" ref={ref}>
          <div className="carousel">
            <CarouselTrack logosArray={logosArray} />
            <CarouselTrack logosArray={logosArray} />
            <CarouselTrack logosArray={logosArray} />
            <CarouselTrack logosArray={logosArray} />
          </div>
          {/* <div className="customers__inner-slider">
            <Slider {...sliderSettings}>
              {[...logosArray].map((data, index) => (
                <SubHeroItem key={index} {...data} />
              ))}
            </Slider>
          </div> */}
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

const CarouselTrack = ({ logosArray }) => {
  return (
    <div className="carousel-track">
      {[...logosArray].map((data, index) => {
        let ratio = ratios[index];
        let width = `${(parseInt(ratio.width) / 18).toFixed(2)}em`;
        let height = `${(parseInt(ratio.height) / 18).toFixed(2)}em`;
        console.log({ width, height });
        return <SubHeroItem key={index} {...data} style={{ width, height }} />;
      })}
    </div>
  );
};

const SubHeroItem = ({ href, logoLink, title, addClass = "", style }) => {
  return (
    <a
      className={` carousel-item ${addClass}`}
      href={href}
      title={title}
      style={style}
    >
      <img src={logoLink} alt={title} />
    </a>
  );
};

export default SubHero;
