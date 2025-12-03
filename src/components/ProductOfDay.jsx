import React from "react";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const ProductOfDay = () => {

  const { items, loading } = useSelector((state) => state.productOfTheDay);


  // 🔥 Pick only 6 items (could be featured or random)
  const flashProducts = [...items]
    .sort(() => Math.random() - 0.5)
    .slice(0, 6);
  return (
    <div className="bg-gradient-to-br from-pink-50 via-white to-red-50 py-10 px-4 sm:px-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
          Product Of The Day
        </h2>
       <Link to={'/products'} className="text-pink-500 text-sm sm:text-base font-medium hover:underline flex items-center">
          Explore All <span className="ml-1">➝</span>
        </Link>
        {/* Loading State */}
        {loading && <p className="text-center text-lg">Loading Product of the Day...</p>}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-10">
        {flashProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductOfDay;
