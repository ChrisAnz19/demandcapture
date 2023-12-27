import Home from "pages/home";
import { Header, Nav } from "layouts";
import React, { useState } from "react";
import About from "pages/about";

function App() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <Header active={menu} setActive={setMenu}>
        <Nav active={menu} />
      </Header>
      {/* <Home /> */}
      <About />
    </>
  );
}

export default App;
