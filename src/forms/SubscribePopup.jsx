import React, { useState } from "react";
import Popup from "components/Popup";
import useHubSpotForm from "hooks/useHubSpotForm";
import Spinner, { SpinnerWrapper } from "components/Spinner";

const SubscribePopup = (props) => {
  const [isReady, setReady] = useState(false);

  useHubSpotForm({
    targetSelector: "#hbspt-subscribe-form",
    region: "na1",
    portalId: "44155674",
    formId: "07e92a5b-c912-475c-b432-6c7306d36329",
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
        id="hbspt-subscribe-form"
        style={{
          display: isReady ? undefined : "none",
        }}
      />
    </Popup>
  );
};

export default SubscribePopup;
