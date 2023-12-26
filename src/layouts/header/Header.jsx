import React from "react";
import Logo from "components/Logo";

import { Link } from "react-router-dom";
import { AutoContainer } from "layouts/containers";
import "./styles.scss";

const Header = ({ active, setActive, children }) => {
  return (
    <header className={`header ${active ? "active" : ""}`}>
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
          <BurgerButton active={active} onClick={() => setActive(!active)} />
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
    >
      <span></span>
    </button>
  );
};

export default Header;
