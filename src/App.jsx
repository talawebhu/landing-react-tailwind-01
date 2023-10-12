import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Newsletter from "./components/Newsletter";
import Prices from "./components/Prices";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Newsletter />
      <Prices />
    </div>
  )
}

export default App;
