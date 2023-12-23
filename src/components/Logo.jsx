import React from "react";
import styles from "./styles/components.module.scss";

const ASSETS_URL = process.env.PUBLIC_URL;
const LOGO_LINK = ASSETS_URL + "/logo.svg";

const Logo = ({ addClass = "" }) => {
  return (
    <span className={`${styles.logo} ${addClass}`}>
      <img src={LOGO_LINK} alt="Demmand Capture" />
    </span>
  );
};

export default Logo;
