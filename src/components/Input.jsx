import React from "react";

export const INPUT_STYLES = {
  ROUNDED: "input--rounded",
  BORDER: "input--border",
};

const Input = ({ style = INPUT_STYLES.ROUNDED, shadow = false, ...props }) => {
  const getClassName = () => {
    let className = `input ${style}`;
    className += shadow ? " _shadow" : "";
    return className;
  };

  return (
    <div className={getClassName()}>
      <input type="text" {...props} />
    </div>
  );
};

export const InputWrapper = ({ addClass = "", ...props }) => {
  return <div className={`input__wrapper ${addClass}`} {...props} />;
};

export default Input;
