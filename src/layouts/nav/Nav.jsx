import Button, { BUTTON_VARIANTS } from "components/Button";
import React from "react";
import { NavLink } from "react-router-dom";

import "./styles.scss";
const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__inner">
        <div className="nav__inner-links">
          <NavLink
            className="nav-link"
            to="our-process"
            children="Our Process"
          />
          <NavLink className="nav-link" to="about-us" children="About Us" />
          <NavLink className="nav-link" to="case-study" children="Case Study" />
          <NavLink className="nav-link" to="pricing" children="Pricing" />
        </div>
        <div className="nav__inner-buttons">
          <Button
            variant={BUTTON_VARIANTS.WHITE}
            shadow
            text={"Connect Wallet"}
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
