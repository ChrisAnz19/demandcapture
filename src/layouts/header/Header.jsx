import React from "react";
import Logo from "components/Logo";

import { Link } from "react-router-dom";
import { AutoContainer } from "layouts/containers";
import "./styles.scss";
import useSticky from "./hooks/useSticky";

const Header = ({ active, setActive, headerStyle, children }) => {
  const sticky = useSticky();

  return (
    <header
      id="header"
      className={`header ${active ? "active" : ""} ${sticky ?? ""} ${
        headerStyle || ""
      }`}
    >
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
