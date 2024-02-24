import { useEffect } from "react";
import useMediaQuery from "./useMediaQuery";
import { useLocation } from "react-router-dom";

const useHeroAutoHeight = (dependencies = []) => {
  const minWidth = useMediaQuery();
  const location = useLocation();

  const initAutoHeight = () => {
    const hero = document.querySelector(".hero");
    if (hero?.classList && hero.classList.contains("hero--sm")) return;
    console.log("-start-", hero);

    if (minWidth < 640 && hero) {
      console.log("-set hero styles-");
      let docHeight = document.documentElement.clientHeight;
      console.log(`${docHeight}px`);
      hero.style.height = `${docHeight}px`;
      hero.style.minHeight = `unset`;
    }
  };
  const clearAutoHeight = () => {
    const hero = document.querySelector(".hero");
    console.log("-end-");

    if (!hero) return;
    if (hero?.classList && hero.classList.contains("hero--sm")) return;

    hero.style.height = null;
    hero.style.minHeight = null;
  };

  useEffect(() => {
    initAutoHeight();

    return () => {
      clearAutoHeight();
    };
  }, [minWidth, location, initAutoHeight, ...dependencies]);
};

export default useHeroAutoHeight;
