import React, { useState } from "react";
import Popup from "components/Popup";
import useHubSpotForm from "hooks/useHubSpotForm";
import Spinner, { SpinnerWrapper } from "components/Spinner";

const PricingEnterprisePopup = (props) => {
  const [isReady, setReady] = useState(false);

  useHubSpotForm({
    targetSelector: "#hbspt-pricing-enterprise-form",
    region: "na1",
    portalId: "44155674",
    formId: "a5b03390-7624-42ed-8c63-10a939b92275",
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
        id="hbspt-pricing-enterprise-form"
        style={{
          display: isReady ? undefined : "none",
        }}
      />
    </Popup>
  );
};

export default PricingEnterprisePopup;
