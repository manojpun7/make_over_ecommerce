import React from "react";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";


const Accessories = () => {
   const { products, loading } = useSelector((state) => state.products);

  // 🔥 Pick only 6 items (could be featured or random)
  const flashProducts = [...products]
    .sort(() => Math.random() - 0.5)
    .slice(0, 6);
  return (
    <div className="bg-gradient-to-br from-pink-50 via-white to-red-50 py-10 px-4 sm:px-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
          Product Of The Day
        </h2>
        <a
          href="#"
          className="text-pink-500 text-sm sm:text-base font-medium hover:underline flex items-center"
        >
          Explore All <span className="ml-1">➝</span>
        </a>
        {loading && <p>loading items....</p>}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-10">
        {flashProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Price Categories */}
      <div className="grid grid-cols-1  md:grid-cols-3 gap-8 text-center pt-8 mb-10">
        {/* Skin Products */}
        <div>
          <h3 className="font-semibold text-lg mb-8">Get Your Skin Products</h3>
          <div className="flex justify-evenly gap-3 flex-wrap">
            {["600", "500", "400"].map((price, i) => (
              <div
                key={i}
                className="w-20 h-20 flex flex-col justify-center items-center rounded-full bg-pink-200 text-2xl text-black font-bold"
              >
                <span className="text-xs font-normal">Under Rs</span>
                {price}
              </div>
            ))}
          </div>
        </div>

        {/* Hair Products */}
        <div>
          <h3 className="font-semibold text-lg mb-8">Get Your Hair Products</h3>
          <div className="flex justify-evenly gap-3 flex-wrap">
            {["300", "200", "100"].map((price, i) => (
              <div
                key={i}
                className="w-20 h-20 flex flex-col justify-center items-center rounded-full bg-cyan-100 text-black text-2xl font-bold"
              >
                <span className="text-xs font-normal">Under Rs</span>
                {price}
              </div>
            ))}
          </div>
        </div>

        {/* Makeup Products */}
        <div>
          <h3 className="font-semibold text-lg mb-8">Get Your Makeup Products</h3>
          <div className="flex justify-evenly gap-3 flex-wrap">
            {["1000", "600", "300"].map((price, i) => (
              <div
                key={i}
                className="w-20 h-20 flex flex-col justify-center items-center rounded-full bg-yellow-100 text-2xl text-black font-bold"
              >
                <span className="text-xs font-normal">Under Rs</span>
                {price}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accessories;
