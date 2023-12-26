import React from "react";

const ASSETS_URL = process.env.PUBLIC_URL;
const LOGO_LINK = ASSETS_URL + "/logo.svg";
const LOGO_WHITE_LINK = ASSETS_URL + "/logo-white.svg";

const Logo = ({ white = false, addClass = "" }) => {
  return (
    <span className={`logo ${addClass}`}>
      <img src={!white ? LOGO_LINK : LOGO_WHITE_LINK} alt="Demmand Capture" />
    </span>
  );
};

export default Logo;
