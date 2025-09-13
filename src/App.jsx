import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroPage from "./components/HeroPage";

function App() {
  return (
    <div className="w-full mx-auto text-gray-800 max-w-[1440px]">
      <Navbar />
      <HeroPage/>
    </div>
  );
}

export default App;
