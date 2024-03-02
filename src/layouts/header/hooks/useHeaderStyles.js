import React from "react";

const useHeaderStyles = ({ styleName, setStyle } = {}) => {
  React.useEffect(() => {
    if (!styleName || !setStyle) return;
    const styleClass = styleName && styleName !== "" ? `_${styleName}` : "";
    setStyle(styleClass);

    return () => {
      setStyle("");
    };
  }, [styleName, setStyle]);
};

export default useHeaderStyles;
