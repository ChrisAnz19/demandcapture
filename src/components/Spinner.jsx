import React from "react";

const Spinner = (props) => {
  return (
    <div className="spinner" {...props}>
      <div></div>
      <div></div>
    </div>
  );
};

export const SpinnerWrapper = (props) => {
  return <div className="spinner__wrapper" {...props} />;
};
export const SpinnerPageLoader = (props) => {
  return (
    <SpinnerWrapper style={{ minHeight: "100vh", minHeight: "100dvh" }}>
      <Spinner />
    </SpinnerWrapper>
  );
};
export default Spinner;
