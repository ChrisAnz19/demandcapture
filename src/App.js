import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "pages/home";
import { Footer, Header, Nav } from "layouts";
import About from "pages/about";
import Pricing from "pages/pricing";
import { Policy, Terms } from "pages/policy";
import OurProcess from "pages/OurProcess/OurProcess";
import Case from "pages/case";
import Contact from "pages/contact";
import PopUp from "layouts/PopUp";

function App() {
  const [headerStyle, setHeaderStyle] = useState(false);
  const [menu, setMenu] = useState(false);
  const [contactPopup, setContactPopup] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === "/";
  const showContactPopup = () => setContactPopup(true);

  useEffect(() => {
    setMenu(false);
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    if (contactPopup && menu) setMenu(false);
  }, [contactPopup]);

  return (
    <>
      <Header active={menu} setActive={setMenu} headerStyle={headerStyle}>
        <Nav
          active={menu}
          isHome={isHome}
          showContactPopup={showContactPopup}
        />
      </Header>
      <Routes>
        <Route
          path="/"
          element={<Home showContactPopup={showContactPopup} />}
        />
        <Route
          path="/our-process"
          element={<OurProcess setHeaderStyle={setHeaderStyle} />}
        />
        <Route path="/about-us" element={<About />} />
        <Route path="/case-study" element={<Case />} />
        <Route
          path="/pricing"
          element={<Pricing showContactPopup={showContactPopup} />}
        />
        <Route path="/policy" element={<Policy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <Footer showContactPopup={showContactPopup} />
      {contactPopup && <PopUp close={() => setContactPopup(false)} />}
    </>
  );
}

export default App;
