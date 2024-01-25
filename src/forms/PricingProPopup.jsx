import React, { useState } from "react";
import Popup from "components/Popup";
import useHubSpotForm from "hooks/useHubSpotForm";
import Spinner, { SpinnerWrapper } from "components/Spinner";

const PricingProPopup = (props) => {
  const [isReady, setReady] = useState(false);

  useHubSpotForm({
    targetSelector: "#hbspt-pricing-pro-form",
    region: "na1",
    portalId: "44155674",
    formId: "137f28af-5d32-41ea-9a0c-540f2a56c221",
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
        id="hbspt-pricing-pro-form"
        style={{
          display: isReady ? undefined : "none",
        }}
      />
    </Popup>
  );
};

export default PricingProPopup;
