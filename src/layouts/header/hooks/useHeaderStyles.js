import React from "react";

const useHeaderStyles = (styleName) => {
  React.useEffect(() => {
    const styleClass = styleName && styleName !== "" ? `_${styleName}` : "";
    const header = document.getElementById("header");
    header.classList.add(styleClass);

    return () => {
      header.classList.remove(styleClass);
    };
  }, []);
};

export default useHeaderStyles;
