import React from "react";
import { createPortal } from "react-dom";

const PopUp = ({ close }) => {
  const iconURL = process.env.PUBLIC_URL + "/images/icons/";

  return createPortal(
    <>
      <div className="popUp">
        <div className="popUp__inner">
          <div className="popUp__inner-content">
            <button className="popUp__inner-close" onClick={close}>
              <img src={iconURL + "cancel.svg"} alt="canscel" />
            </button>
            <div className="popUp__inner-group">
              <div className="popUp__inner-ico">
                <img src={iconURL + "logo-sm.svg"} alt="logo" />
              </div>
              <h6 className="_sm">Accelerate Revenue Generation</h6>
              <h6>Let Us Help You Reach Your Full Market Potential</h6>
            </div>
            <div className="popUp__form">
              <div className="popUp__form-row">
                <div className="input__wrapper">
                  <label htmlFor="name">First Name</label>
                  <div className="input input--border">
                    <input type="text" />
                  </div>
                </div>
                <div className="input__wrapper">
                  <label htmlFor="company">Company </label>
                  <div className="input input--border">
                    <input type="text" id="company" />
                  </div>
                </div>
                <div className="input__wrapper">
                  <label htmlFor="number">Phone Number</label>
                  <div className="input input--border">
                    <input type="text" id="number" />
                  </div>
                </div>
                <div className="input__wrapper">
                  <label htmlFor="email">Business Email</label>
                  <div className="input input--border">
                    <input type="email" id="email" />
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="buttonPrimary buttonPrimary--default _shadow"
                onClick={close}
              >
                <span>Submit</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("popups")
  );
};

export default PopUp;
