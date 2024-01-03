import React, { useEffect, useState } from "react";

const useSticky = ({ offset = 5 } = {}) => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setSticky(window.pageYOffset > offset);
    });
  }, []);

  return sticky ? "header--sticky" : "";
};

export default useSticky;
