import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "pages/home";
import { Header, Nav } from "layouts";
import About from "pages/about";
import Pricing from "pages/pricing";
import { Policy, Terms } from "pages/policy";
import Footer from "layouts/footer/Footer";
import OurProcess from "pages/OurProcess/OurProcess";
import Case from "pages/case";
import Contact from "pages/contact";

function App() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Header active={menu} setActive={setMenu}>
          <Nav active={menu} />
        </Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-process" element={<OurProcess />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/case-study" element={<Case />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
