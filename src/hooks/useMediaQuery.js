import React, { useState, useEffect } from "react";

const defaultMediaWidth = 640;
const mediaQueries = [
  {
    media: "(min-width: 980px)",
    minWidth: 980,
  },
];

const useMediaQuery = () => {
  const [minWidth, setMinWidth] = useState(defaultMediaWidth);
  const setMedia = (value) => setMinWidth(value);

  const checkWidth = React.useCallback((e) => {
    let isMatches = false;
    let currentMedia = e.media;

    if (!currentMedia) return;

    for (let index = mediaQueries.length - 1; index >= 0; index--) {
      let mql = mediaQueries[index];
      if (mql.media === currentMedia && e.matches) {
        isMatches = true;
        setMedia(mql.minWidth);
        break;
      }
    }
    if (!isMatches) {
      setMedia(defaultMediaWidth);
    }
  }, []);

  useEffect(() => {
    const mqlMediaArray = [];
    mediaQueries.forEach((mql) => {
      const mqlMedia = window.matchMedia(mql.media);
      mqlMedia.addListener(checkWidth);
      mqlMediaArray.push(mqlMedia);
    });

    setMedia(window.innerWidth);

    return () => {
      mqlMediaArray.forEach((mqlMedia) => {
        mqlMedia.removeListener(checkWidth);
      });
    };
  }, [minWidth]);

  return minWidth;
};

export default useMediaQuery;
