import React, { useEffect, useState } from "react";
import { AutoContainer } from "layouts/containers";
import ContactUsPopup from "forms/ContactUsPopup";

const Help = () => {
  const bgURL = process.env.PUBLIC_URL + "/images/contacts-bg.png";
  const shapeURL = process.env.PUBLIC_URL + "/images/contact_us.webp";
  const [formVisible, setFormVisible] = useState(false);

  const popupClose = () => setFormVisible(false);
  const popupShow = () => setFormVisible(true);

  return (
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
          <div className="contacts__container">
            <div className="contacts__container-wrapper">
              <h5>Send us a message</h5>
              <div className="contacts__container-form">
                <div className="input__wrapper" onClick={popupShow}>
                  <label htmlFor="input-1">
                    How can we best help you today?
                  </label>
                  <div className="input input--rounded input--select">
                    <input type="hidden" />
                    <div className="input__selected">
                      <span>Sales Enquiry</span>
                    </div>
                    <ul className="input__dropdown">
                      <li className="input__dropdown-item" data-value="Sales">
                        <span>Sales Enquiry</span>
                      </li>
                      <li className="input__dropdown-item" data-value="Support">
                        <span>Support Enquiry</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="input__wrapper">
                  <label htmlFor="input-2">Name</label>
                  <div className="input input--rounded">
                    <input type="text" id="input-2" onFocus={popupShow} />
                  </div>
                </div>
                <div className="input__wrapper">
                  <label htmlFor="input-3">Email</label>
                  <div className="input input--rounded">
                    <input type="text" id="input-3" onFocus={popupShow} />
                  </div>
                </div>
                <div className="input__wrapper">
                  <label htmlFor="input-4">Phone</label>
                  <div className="input input--rounded">
                    <input type="text" id="input-4" onFocus={popupShow} />
                  </div>
                </div>
                <div className="input__wrapper ">
                  <label htmlFor="input-5">Job Title</label>
                  <div className="input input--rounded">
                    <input type="text" id="input-5" onFocus={popupShow} />
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={popupShow}
                className="buttonPrimary buttonPrimary--default _shadow"
              >
                <span>Submit</span>
              </button>
            </div>
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
      {formVisible && <ContactUsPopup close={popupClose} />}
    </section>
  );
};

export default Help;
