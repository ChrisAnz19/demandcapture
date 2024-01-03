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

function App() {
  const [headerStyle, setHeaderStyle] = useState(false);
  const [menu, setMenu] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    setMenu(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Header active={menu} setActive={setMenu} headerStyle={headerStyle}>
        <Nav active={menu} isHome={isHome} />
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/our-process"
          element={<OurProcess setHeaderStyle={setHeaderStyle} />}
        />
        <Route path="/about-us" element={<About />} />
        <Route path="/case-study" element={<Case />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
