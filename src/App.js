import React, { Suspense, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Footer, Header, Nav } from "layouts";

import usePathChange from "hooks/usePathChange";
import ContactSalesPopup from "forms/ContactSalesPopup";
import { SpinnerPageLoader } from "components/Spinner";
import NewMain from "pages/NewMain";

function App() {
  // --- >>>>: lazy import pagess ------
  // const Home = React.lazy(() => import("pages/home"));
  const OurProcess = React.lazy(() => import("pages/process/OurProcess"));
  const About = React.lazy(() => import("pages/about"));
  const Case = React.lazy(() => import("pages/case"));
  const Pricing = React.lazy(() => import("pages/pricing"));
  const Policy = React.lazy(() => import("pages/policy/Policy"));
  const Terms = React.lazy(() => import("pages/policy/Terms"));
  const Contact = React.lazy(() => import("pages/contact"));
  // --- <<<<: lazy import pagess ------

  const [headerStyle, setHeaderStyle] = useState(false);
  const [menu, setMenu] = useState(false);
  const [contactPopup, setContactPopup] = useState(false);

  const location = usePathChange({
    onLocationChange: () => setMenu(false),
  });
  const isHome = location.pathname === "/";

  const showContactPopup = () => {
    setContactPopup(true);
  };
  const popupClose = () => setContactPopup(false);

  useEffect(() => {
    if (contactPopup && menu) setMenu(false);
  }, [contactPopup]);

  return (
    <Suspense fallback={<SpinnerPageLoader />}>
      <Routes>
        <Route
          path="/"
          element={<NewMain />}
        />
        <Route
          path="/our-process"
          element={
            <>
              <Header active={menu} setActive={setMenu} headerStyle={headerStyle}>
                <Nav
                  active={menu}
                  isHome={isHome}
                  showContactPopup={showContactPopup}
                />
              </Header>
              <OurProcess setHeaderStyle={setHeaderStyle} />
              <Footer showContactPopup={showContactPopup} />
            </>
          }
        />
        <Route 
          path="/about-us" 
          element={
            <>
              <Header active={menu} setActive={setMenu} headerStyle={headerStyle}>
                <Nav
                  active={menu}
                  isHome={isHome}
                  showContactPopup={showContactPopup}
                />
              </Header>
              <About />
              <Footer showContactPopup={showContactPopup} />
            </>
          } 
        />
        <Route 
          path="/case-study" 
          element={
            <>
              <Header active={menu} setActive={setMenu} headerStyle={headerStyle}>
                <Nav
                  active={menu}
                  isHome={isHome}
                  showContactPopup={showContactPopup}
                />
              </Header>
              <Case />
              <Footer showContactPopup={showContactPopup} />
            </>
          } 
        />
        <Route
          path="/pricing"
          element={
            <>
              <Header active={menu} setActive={setMenu} headerStyle={headerStyle}>
                <Nav
                  active={menu}
                  isHome={isHome}
                  showContactPopup={showContactPopup}
                />
              </Header>
              <Pricing showContactPopup={showContactPopup} />
              <Footer showContactPopup={showContactPopup} />
            </>
          }
        />
        <Route 
          path="/policy" 
          element={
            <>
              <Header active={menu} setActive={setMenu} headerStyle={headerStyle}>
                <Nav
                  active={menu}
                  isHome={isHome}
                  showContactPopup={showContactPopup}
                />
              </Header>
              <Policy />
              <Footer showContactPopup={showContactPopup} />
            </>
          } 
        />
        <Route 
          path="/terms" 
          element={
            <>
              <Header active={menu} setActive={setMenu} headerStyle={headerStyle}>
                <Nav
                  active={menu}
                  isHome={isHome}
                  showContactPopup={showContactPopup}
                />
              </Header>
              <Terms />
              <Footer showContactPopup={showContactPopup} />
            </>
          } 
        />
        <Route 
          path="/contact-us" 
          element={
            <>
              <Header active={menu} setActive={setMenu} headerStyle={headerStyle}>
                <Nav
                  active={menu}
                  isHome={isHome}
                  showContactPopup={showContactPopup}
                />
              </Header>
              <Contact />
              <Footer showContactPopup={showContactPopup} />
            </>
          } 
        />
      </Routes>
      {contactPopup && <ContactSalesPopup close={popupClose} />}
    </Suspense>
  );
}

export default App;
