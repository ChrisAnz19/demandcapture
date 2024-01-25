import React, { useState } from "react";
import Popup from "components/Popup";
import useHubSpotForm from "hooks/useHubSpotForm";
import Spinner, { SpinnerWrapper } from "components/Spinner";

const ContactSalesPopup = (props) => {
  const [isReady, setReady] = useState(false);

  useHubSpotForm({
    targetSelector: "#hbspt-sales-form",
    region: "na1",
    portalId: "44155674",
    formId: "b0fac1b5-ed3c-46bf-80f0-730bb2684310",
    onFormReady: () => setReady(true),
  });

  return (
    <Popup {...props}>
      {!isReady && (
        <SpinnerWrapper
          style={{
            minHeight: 240,
          }}
        >
          <Spinner />
        </SpinnerWrapper>
      )}
      <div
        className="popup__form"
        id="hbspt-sales-form"
        style={{
          display: isReady ? undefined : "none",
        }}
      />
      {/* 
          <div className="popup__form">
            <div className="popup__form-row">
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
                className="buttonPrimary buttonPrimary--default"
                onClick={close}
              >
                <span>Submit</span>
              </button> 
          </div>
              */}
    </Popup>
  );
};

export default ContactSalesPopup;
