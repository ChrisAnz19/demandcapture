import React from "react";
import { AutoContainer } from "layouts/containers";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Stars from "components/Stars";

const avatarURL = process.env.PUBLIC_URL + "/images/avatars/";

const TestimonialsSwiper = () => {
  const [swiper, setSwiper] = React.useState(null);

  return (
    <section className="testimonials">
      <AutoContainer style={{ maxWidth: 1125 }}>
        <div className="testimonials__inner">
          <div className="testimonials__inner-title">
            <strong>SATISFIED Clients </strong>
            <h3>
              OUR <br /> Testimonials
            </h3>
            <p>
              Navigating success through collaboration. Quality Connections,
              Measurable Results.
            </p>
            <div className="testimonials__inner-title-arrows">
              <button
                className="swiper-arrow swiper-arrow-prev"
                onClick={() => swiper.slidePrev()}
              >
                {"<"}
              </button>
              <button
                className="swiper-arrow swiper-arrow-next"
                onClick={() => swiper.slideNext()}
              >
                {">"}
              </button>
            </div>
          </div>
          <div className="testimonials__inner-swiper">
            <Swiper
              spaceBetween={18}
              slidesPerView={"auto"}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => setSwiper(swiper)}
              pagination={false}
            >
              <SwiperSlide>
                <TestimonialsSlide
                  avatarURL={avatarURL + "user-1.png "}
                  name="Karl Mills"
                  position="EDHC"
                  text={`As a Sales Leader, I am truly impressed by DemandCapture's ability to orchestrate a substantial number of outbound meetings with prospective buyers. Their strategic approach and execution have significantly contributed to the overall success of our pipeline growth initiatives.`}
                />
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialsSlide
                  avatarURL={avatarURL + "user-2.jpeg "}
                  name="Emma Cromwell"
                  position="Salesloft"
                  text={`DemandCapture is a leader in Achieving optimization and success in sales. through our partnership, the team is accelerating revenue growth, conquering markets, and creating lasting customer connections.`}
                />
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialsSlide
                  avatarURL={avatarURL + "user-3.jpeg"}
                  name="David King"
                  position="Lorem ipsum"
                  text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat`}
                />
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialsSlide
                  avatarURL={avatarURL + "user-1.png "}
                  name="Karl Mills"
                  position="EDHC"
                  text={`As a Sales Leader, I am truly impressed by DemandCapture's ability to orchestrate a substantial number of outbound meetings with prospective buyers. Their strategic approach and execution have significantly contributed to the overall success of our pipeline growth initiatives.`}
                />
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialsSlide
                  avatarURL={avatarURL + "user-2.jpeg "}
                  name="Emma Cromwell"
                  position="Salesloft"
                  text={`DemandCapture is a leader in Achieving optimization and success in sales. through our partnership, the team is accelerating revenue growth, conquering markets, and creating lasting customer connections.`}
                />
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialsSlide
                  avatarURL={avatarURL + "user-3.jpeg"}
                  name="David King"
                  position="Lorem ipsum"
                  text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat`}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </AutoContainer>
    </section>
  );
};

const TestimonialsSlide = ({ text, rating = 5, name, position, avatarURL }) => {
  return (
    <div className="testimonials__slide">
      <p>{text}</p>
      <Stars rating={rating} />
      <div className="testimonials__user">
        <div className="testimonials__user-img">
          <img src={avatarURL} alt={name} />
        </div>
        <div className="testimonials__user-content">
          <strong>{name}</strong>
          <span>{position}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSwiper;
