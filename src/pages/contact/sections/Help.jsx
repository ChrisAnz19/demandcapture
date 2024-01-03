import React from "react";
import { AutoContainer } from "layouts/containers";

const Help = () => {
  const bgURL = process.env.PUBLIC_URL + "/images/contacts-bg.png";
  const shapeURL = process.env.PUBLIC_URL + "/images/research/bg-shape.png";
  return (
    <>
      <section className="contacts">
        <AutoContainer>
          <div className="contacts__inner">
            <div className="contacts__inner-content">
              <h2>We’re Here to Help</h2>
              <p>
                <strong>Reach Our Team - Fill Out the Form Today</strong>
                <br />
                Unlock personalized support and Pilot Options by sharing your
                details with us. We're here to assist you every step of the way!
              </p>
            </div>
            <div className="contacts__container bgBorder">
              <div className="contacts__container-wrapper">
                <h5>Send us a Message</h5>
                <div className="contacts__container-form">
                  <div className="input__wrapper">
                    <label htmlFor="input-1">
                      How can we best help you today?
                    </label>
                    <div className="input input--rounded">
                      <input type="text" id="input-1" />
                    </div>
                  </div>
                  <div className="input__wrapper">
                    <label htmlFor="input-2">Name</label>
                    <div className="input input--rounded">
                      <input type="text" id="input-2" />
                    </div>
                  </div>
                  <div className="input__wrapper">
                    <label htmlFor="input-3">Email</label>
                    <div className="input input--rounded">
                      <input type="text" id="input-3" />
                    </div>
                  </div>
                  <div className="input__wrapper">
                    <label htmlFor="input-4">Phone</label>
                    <div className="input input--rounded">
                      <input type="text" id="input-4" />
                    </div>
                  </div>
                  <div className="input__wrapper ">
                    <label htmlFor="input-5">Job Title</label>
                    <div className="input input--rounded">
                      <input type="text" id="input-5" />
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="buttonPrimary buttonPrimary--default _shadow"
                >
                  <span>Contact</span>
                </button>
              </div>
              <span className="bgBorder__shape"></span>
              <span className="bgBorder__shape _top"></span>
            </div>
          </div>
        </AutoContainer>
        <div className="bg">
          <div className="bg__image">
            <img src={bgURL} alt="shape" />
          </div>
          <div className="bg__image-wrapper">
            <div className="bg__image">
              <img src={shapeURL} alt="shape" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Help;
