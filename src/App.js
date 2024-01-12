import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "pages/home";
import { Footer, Header, Nav } from "layouts";
import About from "pages/about";
import Pricing from "pages/pricing";
import { Policy, Terms } from "pages/policy";
import OurProcess from "pages/OurProcess/OurProcess";
import Case from "pages/case";
import Contact from "pages/contact";
import PopUp from "layouts/PopUp";
import usePathChange from "hooks/usePathChange";
import useHeroAutoHeight from "hooks/useHeroAutoHeight";

function App() {
  const [headerStyle, setHeaderStyle] = useState(false);
  const [menu, setMenu] = useState(false);
  const [contactPopup, setContactPopup] = useState(false);

  useHeroAutoHeight();
  const location = usePathChange({
    onLocationChange: () => setMenu(false),
  });
  const isHome = location.pathname === "/";

  const showContactPopup = () => {
    document.body.classList.add("active");
    setContactPopup(true);
  };
  const PopUpColose = () => {
    document.body.classList.remove("active");
    setContactPopup(false);
  };

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
      {contactPopup && (
        <PopUp close={PopUpColose} showContactPopup={showContactPopup} />
      )}
    </>
  );
}

export default App;
