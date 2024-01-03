import React from "react";

const useHeaderStyles = ({ styleName, setStyle }) => {
  React.useEffect(() => {
    const styleClass = styleName && styleName !== "" ? `_${styleName}` : "";
    setStyle(styleClass);

    return () => {
      setStyle("");
    };
  }, []);
};

export default useHeaderStyles;
