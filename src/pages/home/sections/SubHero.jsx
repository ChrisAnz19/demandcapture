import React, { useEffect } from "react";
import { AutoContainer } from "layouts/containers";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

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


const SubHero = () => {
  const [swiper, setSwiper] = React.useState(null);
  const startAutoplay = (swiper) => {
    if (!swiper.autoplay) return;

    console.log("start swiper");
    swiper.autoplay.start();
    window.autoplay = swiper.autoplay;

    window.onload = () => {
      if (window?.autoplay?.play) window.autoplay.play();
    };
  };
  useEffect(() => {
    if (swiper) startAutoplay(swiper);
  }, [swiper]);

  return (
    <section className="customers customers--lg">
      <AutoContainer>
        <div className="customers__inner">
          <div className="customers__inner-slider">
            <Swiper
              speed={8000}
              slidesPerView={"auto"}
              slidesPerGroup={1}
              spaceBetween={20}
              // onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => startAutoplay(swiper)}
              pagination={false}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              breakpoints={{
                680: {
                  spaceBetween: 120,
                },
              }}
            >
              {[...logosArray, ...logosArray, ...logosArray].map(
                (data, index) => (
                  <SwiperSlide key={index}>
                    <SubHeroItem {...data} />
                  </SwiperSlide>
                )
              )}
            </Swiper>
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
