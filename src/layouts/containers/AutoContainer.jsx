import React from "react";

const AutoContainer = ({ children, ...props }) => {
  return (
    <div className={"autocontainer"} {...props}>
      {children}
    </div>
  );
};

export default AutoContainer;
