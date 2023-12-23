import React from "react";
import styles from "./styles/components.module.scss";

export const BUTTON_VARIANTS = {
  DEFAULT: "buttonPrimary--default",
  WHITE: "buttonPrimary--white",
};
const shadowClass = "buttonPrimary--shadow";

const Button = ({
  variant = BUTTON_VARIANTS.DEFAULT,
  shadow = false,
  text,
  children,
  ...props
}) => {
  const getClassName = () => {
    let className = styles.buttonPrimary;
    className += ` ${styles[variant]}`;
    className += shadow ? ` ${shadowClass}` : "";
    return className;
  };

  return (
    <button type="button" className={getClassName()} {...props}>
      {text && <span>{text}</span>}
      {children && children}
    </button>
  );
};

export { Button };
export default Button;
