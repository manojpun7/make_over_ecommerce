import React from "react";
import HeroPage from "./HeroPage";
import FlashSale from "./FlashSale";
import ProductOfDay from "./ProductOfDay";
import BestBeautyProducts from "./BestBeautyProducts";
import Accessories from "./Accessories";
import BestOutfitDeal from "./BestOutfitDeal";

const HomePage = () => {
  return (
    <div>
      <HeroPage />
      <FlashSale />
      <ProductOfDay />
      <BestBeautyProducts />
      <Accessories />
      <BestOutfitDeal />
    </div>
  );
};

export default HomePage;
