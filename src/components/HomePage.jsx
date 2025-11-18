// import React from "react";
// import HeroPage from "./HeroPage";
// import FlashSale from "./FlashSale";
// import ProductOfDay from "./ProductOfDay";
// import BestBeautyProducts from "./BestBeautyProducts";
// import Accessories from "./Accessories";
// import BestOutfitDeal from "./BestOutfitDeal";

// const HomePage = () => {
//   return (
//     <div>
//       <HeroPage />
//       <FlashSale />
//       <ProductOfDay />
//       <BestBeautyProducts />
//       <Accessories />
//       <BestOutfitDeal />
//     </div>
//   );
// };

// export default HomePage;



import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../lib/store/products/productsThunks.js";

import HeroPage from "./HeroPage";
import FlashSale from "./FlashSale";
import ProductOfDay from "./ProductOfDay";
import BestBeautyProducts from "./BestBeautyProducts";
import Accessories from "./Accessories";
import BestOutfitDeal from "./BestOutfitDeal";

const HomePage = () => {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector((state) => state.products);


  console.log("from the homepage product",products);

  // 🔥 FETCH PRODUCTS WHEN HOMEPAGE LOADS
  useEffect(() => {
    dispatch(fetchProducts()); // only runs on "/"
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
      <FlashSale products={products} />       {/* Example */}
      <ProductOfDay products={products} />
      <BestBeautyProducts products={products} />
      <Accessories products={products} />
      {/* <BestOutfitDeal products={products} /> */}
    </div>
  );
};

export default HomePage;
