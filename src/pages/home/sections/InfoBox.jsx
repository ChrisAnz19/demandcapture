import React from "react";
import { AutoContainer } from "layouts/containers";

const InfoBox = ({ children, ...props }) => {
  return (
    <section className="infobox" {...props}>
      <AutoContainer>
        <div className="infobox__inner">{children}</div>
      </AutoContainer>
    </section>
  );
};

export default InfoBox;
