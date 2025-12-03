

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../lib/store/products/productsThunks.js";

import HeroPage from "./HeroPage";
import FlashSale from "./FlashSale";
import ProductOfDay from "./ProductOfDay";
import BestBeautyProducts from "./BestBeautyProducts";
import Accessories from "./Accessories";
import BestOutfitDeal from "./BestOutfitDeal";
import { fetchCategories } from "../lib/store/category/categoryThunks.js";
import { fetchFlashSales } from "../lib/store/products/flash-sale/flashSaleThunk.js";
import { fetchProductOfTheDay } from "../lib/store/products/product-of-the-day/productOfTheDayThunk.js";

const HomePage = () => {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector((state) => state.products);


  console.log("from the homepage product", products);

  // 🔥 FETCH PRODUCTS WHEN HOMEPAGE LOADS
  useEffect(() => {
    dispatch(fetchProducts()); // only runs on "/"
  }, [dispatch]);

  
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  
  useEffect(() => {
    dispatch(fetchFlashSales());
  }, [dispatch]);
  
  useEffect(() => {
    dispatch(fetchProductOfTheDay());
  }, [dispatch]);


  return (
    <div>
      {/* Show loading or error globally */}
      {loading && (
        <p className="text-center mt-4 text-lg font-medium">Loading products...</p>
      )}

      {error && (
        <p className="text-center mt-4 text-red-500">{error}</p>
      )}

      {/* Pass products to sections if needed */}
      <HeroPage />
      <FlashSale />       {/* Example */}
      <ProductOfDay  />
      <BestBeautyProducts products={products} />
      <Accessories products={products} />
      {/* <BestOutfitDeal products={products} /> */}
    </div>
  );
};

export default HomePage;
