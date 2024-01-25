import React, { useState } from "react";
import Popup from "components/Popup";
import useHubSpotForm from "hooks/useHubSpotForm";
import Spinner, { SpinnerWrapper } from "components/Spinner";

const ContactUsPopup = (props) => {
  const [isReady, setReady] = useState(false);

  useHubSpotForm({
    targetSelector: "#hbspt-contact-form",
    region: "na1",
    portalId: "44155674",
    formId: "8fc5e78f-cce8-4b7b-af67-61b8ca0f7de8",
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
        id="hbspt-contact-form"
        style={{
          display: isReady ? undefined : "none",
        }}
      />
    </Popup>
  );
};

export default ContactUsPopup;
