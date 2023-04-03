import React, { Children } from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import About from "./Component/About";
import ContactUs from "./Component/Contact";
import Foot from "./Component/Footer";


function App() {
  return (
    <div>
      
        <Navbar />
        <Hero/>
        <About/>
        <ContactUs/>
        <Foot />
      
    </div>
  );
}

export default App;
