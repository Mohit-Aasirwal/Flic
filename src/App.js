import React from "react";
import Contact from "./components/Contact";
import HomeHero from "./components/HomeHero";
import Navbar from "./components/Navbar";
import Teams from "./components/Teams";
import Timeline from "./components/Timeline";
import "./index.css";

const App = () => {
  return (
    <div className="bg-[#202020]">
      <Navbar />
      <div className="pt-10">
        <HomeHero />
        <hr />
        <Timeline />
        <hr />
        <Teams />
        <hr />
        <Contact />
      </div>
    </div>
  );
};

export default App;
