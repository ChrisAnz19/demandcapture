import React, { useLayoutEffect } from "react";

const useHubSpotForm = ({
  region,
  portalId,
  formId,
  targetSelector,
  ...params
}) => {
  useLayoutEffect(() => {
    if (window.zi_init) {
      console.log("zi_init");
      window.zi_init();
    }
    const script = document.createElement("script");
    // script.src = "https://js.hsforms.net/forms/shell.js";
    // script.src = "https://js.hsforms.net/forms/embed/v2.js";
    script.src = "https://js.hsforms.net/forms/embed/v3.js";

    document.body.appendChild(script);

    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          target: targetSelector,
          region,
          portalId,
          formId,
          ...params,
          onFormSubmitted: function () {
            if (window._zi_fc && window._zi_fc.fcTriggerSubmit) {
              window._zi_fc.fcTriggerSubmit();
            }
          },
        });
      }
    });
    return () => script.remove();
  }, []);
};

export default useHubSpotForm;
