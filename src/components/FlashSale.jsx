


import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

import coupon1 from "../assets/flash-sale/1coupon.png";
import coupon2 from "../assets/flash-sale/2coupon.png";
import coupon3 from "../assets/flash-sale/3coupon.png";
import coupon4 from "../assets/flash-sale/4coupon.png";
import { Link } from "react-router-dom";

const FlashSale = () => {
  const { products, loading } = useSelector((state) => state.products);

  // 🔥 Pick only 6 items (could be featured or random)
  const flashProducts = products.slice(0, 6);

  return (
    <div className="bg-gradient-to-br from-pink-50 via-white to-red-50 py-10 px-4 sm:px-8">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
          Flash Sale
        </h2>
        <Link to={'/products'} className="text-pink-500 text-sm sm:text-base font-medium hover:underline flex items-center">
          Explore All <span className="ml-1">➝</span>
        </Link>
      </div>

      {/* Loading State */}
      {loading && <p className="text-center text-lg">Loading flash sale...</p>}

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-10">
        {flashProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Coupon Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:flex justify-evenly gap-4 bg-gradient-to-r from-pink-200 to-pink-100 rounded-lg shadow p-4">
        <img src={coupon1} alt="coupon1" />
        <img src={coupon2} alt="coupon2" />
        <img src={coupon3} alt="coupon3" />
        <img src={coupon4} alt="coupon4" />
      </div>
    </div>
  );
};

export default FlashSale;
