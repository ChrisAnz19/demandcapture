import React from "react";
import { useEffect } from "react";
import useMediaQuery from "./useMediaQuery";
import { useLocation } from "react-router-dom";

const useHeroAutoHeight = () => {
  const minWidth = useMediaQuery();
  const location = useLocation();

  useEffect(() => {
    const hero = document.querySelector(".hero");
    if (hero?.classList && hero.classList.contains("hero--sm")) return;

    if (minWidth < 640 && hero) {
      let docHeight = document.documentElement.clientHeight;
      console.log(`${docHeight}px`);
      hero.style.height = `${docHeight}px`;
      hero.style.minHeight = `unset`;
    }
    return () => {
      if (hero) {
        hero.style.height = null;
        hero.style.minHeight = null;
      }
    };
  }, [minWidth, location]);
};

export default useHeroAutoHeight;
