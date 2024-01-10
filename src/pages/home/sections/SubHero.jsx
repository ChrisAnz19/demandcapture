import React from "react";
import { AutoContainer } from "layouts/containers";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const logosURL = process.env.PUBLIC_URL + "/images/logos/customers/";

const SubHero = () => {
  const [swiper, setSwiper] = React.useState(null);
  return (
    <section className="customers">
      <AutoContainer>
        <div className="customers__inner">
          <div className="customers__inner-slider">
            <Swiper
              speed={5000}
              slidesPerView={3}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => setSwiper(swiper)}
              pagination={false}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              breakpoints={{
                680: {
                  slidesPerView: 5,
                  spaceBetween: 10,
                },
              }}
            >
              <SwiperSlide>
                <SubHeroItem
                  href="/"
                  logoLink={logosURL + "amazon.svg"}
                  title="amazon"
                />
              </SwiperSlide>
              <SwiperSlide>
                <SubHeroItem
                  href="/"
                  logoLink={logosURL + "walmart.svg"}
                  title="walmart"
                />
              </SwiperSlide>
              <SwiperSlide>
                <SubHeroItem
                  href="/"
                  logoLink={logosURL + "microsoft.svg"}
                  title="microsoft"
                />
              </SwiperSlide>
              <SwiperSlide>
                <SubHeroItem
                  href="/"
                  logoLink={logosURL + "morgan.svg"}
                  title="morgan"
                />
              </SwiperSlide>
              <SwiperSlide>
                <SubHeroItem
                  href="/"
                  logoLink={logosURL + "ibm.svg"}
                  title="ibm"
                />
              </SwiperSlide>
              <SwiperSlide>
                <SubHeroItem
                  href="/"
                  logoLink={logosURL + "amazon.svg"}
                  title="amazon"
                />
              </SwiperSlide>
              <SwiperSlide>
                <SubHeroItem
                  href="/"
                  logoLink={logosURL + "walmart.svg"}
                  title="walmart"
                />
              </SwiperSlide>
              <SwiperSlide>
                <SubHeroItem
                  href="/"
                  logoLink={logosURL + "microsoft.svg"}
                  title="microsoft"
                />
              </SwiperSlide>
              <SwiperSlide>
                <SubHeroItem
                  href="/"
                  logoLink={logosURL + "morgan.svg"}
                  title="morgan"
                />
              </SwiperSlide>
              <SwiperSlide>
                <SubHeroItem
                  href="/"
                  logoLink={logosURL + "ibm.svg"}
                  title="ibm"
                />
              </SwiperSlide>
              <SwiperSlide>
                <SubHeroItem
                  href="/"
                  logoLink={logosURL + "amazon.svg"}
                  title="amazon"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="customers__inner-title">
            <h6>
              Our Customers Have Closed
              <span className="noBreak">43% Of The Fortune 100</span>
            </h6>
          </div>
        </div>
      </AutoContainer>
    </section>
  );
};

const SubHeroItem = ({ href, logoLink, title }) => {
  return (
    <a className="customers-item" href={href} title={title}>
      <img src={logoLink} alt={title} />
    </a>
  );
};

export default SubHero;


