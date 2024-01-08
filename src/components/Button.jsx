import React from "react";

export const BUTTON_VARIANTS = {
  DEFAULT: "buttonPrimary--default",
  WHITE: "buttonPrimary--white",
};
const shadowClass = "_shadow";
const lgClass = "_lg";

const Button = ({
  variant = BUTTON_VARIANTS.DEFAULT,
  shadow = false,
  lg = false,
  text,
  children,
  ...props
}) => {
  const getClassName = () => {
    let className = "buttonPrimary";
    className += ` ${variant}`;
    className += shadow ? ` ${shadowClass}` : "";
    className += lg ? ` ${lgClass}` : "";
    return className;
  };

  return (
    <button type="button" className={getClassName()} {...props}>
      {text && <span>{text}</span>}
      {children && children}
    </button>
  );
};
const IconButton = ({ icoURL, children, ...props }) => {
  return (
    <button type="button" className={"buttonIco"} {...props}>
      {icoURL && <img src={icoURL} alt="icon" />}
      {children && children}
    </button>
  );
};
const LinkButton = ({ icoURL, children, ...props }) => {
  return (
    <a type="button" className={"buttonIco"} {...props}>
      {icoURL && <img src={icoURL} alt="icon" />}
      {children && children}
    </a>
  );
};

export { Button, IconButton, LinkButton };
export default Button;
