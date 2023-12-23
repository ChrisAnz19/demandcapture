import React from "react";
import "./styles.scss";
import { AutoContainer } from "layouts/containers";

const Home = () => {
  return (
    <section className="home">
      <AutoContainer>
        <div className="home__inner">
          <br />
          <br />
          <h2>Hello there</h2>
          <br />
          <br />
        </div>
      </AutoContainer>
    </section>
  );
};

export default Home;
