import React, { useLayoutEffect } from "react";

const useHubSpotForm = ({
  region,
  portalId,
  formId,
  targetSelector,
  ...params
}) => {
  useLayoutEffect(() => {
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
        });
      }
    });
  }, []);
};

export default useHubSpotForm;
