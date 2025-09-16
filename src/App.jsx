import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";

import HomePage from "./components/HomePage";
import { Routes, Route } from "react-router-dom";
import Product from "./components/product-page/Product";

function App() {
  return (
    <div className="w-full mx-auto text-gray-800 max-w-[1440px]">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      
        <Route path="/product" element={<Product />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
