import React, { useEffect } from "react";
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
import MoreFlashSaleProducts from "./components/MoreFlashSaleProducts";
import { useDispatch } from "react-redux";
import { fetchCart } from "./lib/store/cart/cartThunk";


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart()); // ✅ Load cart on startup
  }, [dispatch]);
  return (
    <div className="w-full mx-auto text-gray-800 xl:max-w-7xl">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/products/:slug" element={<Product />} />
        <Route path="/products" element={<MoreProducts />} />
        <Route path="/flash-sales" element={<MoreProducts />} />
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
