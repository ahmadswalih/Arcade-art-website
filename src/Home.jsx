import React from "react";
import { About, Gallery, Hero, Work } from "./components";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Gallery />
      <Work />
    </div>
  );
};

export default Home;
