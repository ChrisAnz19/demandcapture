import React from "react";
import { AutoContainer } from "layouts/containers";

const Research = () => {
  const imageURL = process.env.PUBLIC_URL + "/images/research/";
  return (
    <>
      <section className="research">
        <AutoContainer>
          <div className="research__inner">
            <div className="research__inner-content">
              <h6>According to Forrester research,</h6>
              <p>
                “DemandCapture is the first vendor to engage a prospect and
                guide the solution evaluation process results in a 74% win
                rate.”
              </p>
              <div className="research__inner-border">
                <span>
                  <img src={imageURL + "top.svg"} alt="border" />
                </span>
                <span>
                  <img src={imageURL + "bottom.svg"} alt="border" />
                </span>
              </div>
              <div className="research__inner-quotes">
                <span>
                  <img src={imageURL + "top-quote.png"} alt="quote" />
                </span>
                <span>
                  <img src={imageURL + "bottom-quote.png"} alt="quote" />
                </span>
              </div>
            </div>
          </div>
        </AutoContainer>
        <div className="research__bg">
          <div className="research__bg-image">
            <img src={imageURL + "research.webp"} alt="research" />
          </div>
          <div className="research__bg-shape">
            <img src={imageURL + "bg-shape.webp"} alt="research" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Research;
