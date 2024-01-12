import React from "react";
import { useLocation } from "react-router-dom";

const usePathChange = ({ onLocationChange }) => {
  const location = useLocation();

  React.useEffect(() => {
    if (onLocationChange) onLocationChange();
    window.scrollTo(0, 0);
  }, [location]);

  return location;
};

export default usePathChange;
