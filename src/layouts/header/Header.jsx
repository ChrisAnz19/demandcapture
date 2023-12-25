import React from "react";
import Logo from "components/Logo";

import { Link } from "react-router-dom";
import { AutoContainer } from "layouts/containers";
import "./styles.scss";

const Header = ({ children }) => {
  return (
    <header className="header">
      <AutoContainer>
        <div className="header__inner">
          <Link
            to={"/"}
            className="header__inner-logo"
            aria-label="home"
            role="link"
          >
            <Logo />
          </Link>
          {children}
          <BurgerButton />
        </div>
      </AutoContainer>
    </header>
  );
};

const BurgerButton = ({ active, ...props }) => {
  return (
    <button
      type="button"
      className={`burger ${active ? "active" : ""}`}
      {...props}
    ></button>
  );
};

export default Header;
