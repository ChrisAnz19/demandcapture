import React, { useState } from "react";
import Popup from "components/Popup";
import useHubSpotForm from "hooks/useHubSpotForm";
import Spinner, { SpinnerWrapper } from "components/Spinner";

const PricingStarterPopup = (props) => {
  const [isReady, setReady] = useState(false);

  useHubSpotForm({
    targetSelector: "#hbspt-pricing-starter-form",
    region: "na1",
    portalId: "44155674",
    formId: "cc184d7a-f5fb-4f61-bb6a-dcdf07c50851",
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
        id="hbspt-pricing-starter-form"
        style={{
          display: isReady ? undefined : "none",
        }}
      />
    </Popup>
  );
};

export default PricingStarterPopup;
