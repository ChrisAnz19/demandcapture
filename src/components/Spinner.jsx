import React from "react";

const Spinner = (props) => {
  return <div class="spinner" {...props}><div></div><div></div></div>;
};

export const SpinnerWrapper = (props) => {
  return <div class="spinner__wrapper" {...props} />;
};
export default Spinner;
