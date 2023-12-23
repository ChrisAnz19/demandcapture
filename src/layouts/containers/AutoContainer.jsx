import React from "react";
import styles from "../styles/layouts.module.scss";

const AutoContainer = ({ children }) => {
  return <div className={styles.autocontainer}>{children}</div>;
};

export default AutoContainer;
