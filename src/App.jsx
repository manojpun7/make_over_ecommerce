import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroPage from "./components/HeroPage";
import FlashSale from "./components/FlashSale";
import ProductOfDay from "./components/ProductOfDay";
import BestBeautyProducts from "./components/BestBeautyProducts";
import Accessories from "./components/Accessories";
import Footer from "./components/Footer";
import BestOutfitDeal from "./components/BestOutfitDeal";
import Product from "./components/product-page/Product";

function App() {
  return (
    <div className="w-full mx-auto text-gray-800 max-w-[1440px]">
      {/* <Navbar />
      <HeroPage />
      <FlashSale />
      <ProductOfDay/>
      <BestBeautyProducts/>
      <Accessories/>
      <BestOutfitDeal/>
      <Footer/> */}


      {/* product page */}
      <Product/>
    </div>
  );
}

export default App;
