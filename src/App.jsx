import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import { Routes, Route } from "react-router-dom";
import Product from "./components/product-page/Product";
import Dashboard from "./components/dashboard/Dashboard";
import SignUp from "./components/auth/SignUp";
import Cart from "./components/Cart";
import MoreProducts from "./components/MoreProducts";
import Login from "./components/auth/Login";
import VerifyEmail from "./components/auth/VerifyEmail";


function App() {
  return (
    <div className="w-full mx-auto text-gray-800 xl:max-w-7xl">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/product" element={<Product />} />
        <Route path="/more-products" element={<MoreProducts />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/verify-email" element={<VerifyEmail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
