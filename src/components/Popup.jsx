import React, { useEffect } from "react";
import { createPortal } from "react-dom";

const Popup = ({ close, style = {}, children }) => {
  const iconURL = process.env.PUBLIC_URL + "/images/icons/";

  useEffect(() => {
    const body = document.querySelector("body");
    let paddingRight = window.innerWidth - document.documentElement.clientWidth;

    body.style.overflow = "hidden";
    body.style.paddingRight = `${paddingRight}px`;

    return () => {
      body.style.overflow = "";
      body.style.paddingRight = "";
    };
  }, []);

  return createPortal(
    <>
      <div className="popup" >
        <div className="popup__inner" style={style}>
          <button className="popup-close" onClick={close}>
            <img src={iconURL + "cancel.svg"} alt="canscel" />
          </button>
          <div className="popup__inner-header">
            <div className="popup__inner-header-ico">
              <img src={iconURL + "logo-sm.svg"} alt="logo" />
            </div>
            <h6 className="_sm">Accelerate Revenue Generation</h6>
            <h6>
              Let Us Help You Reach Your{" "}
              <span className="noBreak">Full Market Potential</span>
            </h6>
          </div>

          {children}
        </div>
      </div>
    </>,
    document.getElementById("popups")
  );
};

export default Popup;
