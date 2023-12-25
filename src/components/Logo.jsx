import React from "react";

const ASSETS_URL = process.env.PUBLIC_URL;
const LOGO_LINK = ASSETS_URL + "/logo.svg";

const Logo = ({ addClass = "" }) => {
  return (
    <span className={`logo ${addClass}`}>
      <img src={LOGO_LINK} alt="Demmand Capture" />
    </span>
  );
};

export default Logo;
