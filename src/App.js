import Home from "pages/home";
import { Header, Nav } from "layouts";
import React, { useState } from "react";

function App() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <Header active={menu} setActive={setMenu}>
        <Nav active={menu} />
      </Header>
      <Home />
    </>
  );
}

export default App;
