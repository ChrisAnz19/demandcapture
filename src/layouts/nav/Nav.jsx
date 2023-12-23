import Button, { BUTTON_VARIANTS } from "components/Button";
import React from "react";
import { NavLink } from "react-router-dom";

import "./styles.scss";
const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__inner">
        <div className="nav__inner-group">
          <NavLink className="" to="our-process" children="Our Process" />
          <NavLink className="" to="about-us" children="About Us" />
          <NavLink className="" to="case-study" children="Case Study" />
          <NavLink className="" to="pricing" children="Pricing" />
        </div>
        <div className="nav__inner-buttons">
          <Button text={"Connect Wallet"} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
