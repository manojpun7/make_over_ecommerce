import React  from "react";
import {  useSelector } from "react-redux";


const HeroPage = () => {

  // Get products and categories from Redux store
  const { products, loading: productsLoading } = useSelector(
    (state) => state.products
  );
  const { categories, loading: categoriesLoading } = useSelector(
    (state) => state.categories
  );

  // Fetch categories on mount

  // Filter featured products for hero carousel
  const featuredProducts =
    products?.filter((p) => p.is_featured && p.preview) || [];

  // Loading state
  if (productsLoading || categoriesLoading)
    return <p className="text-center py-10">Loading...</p>;

  return (
    <div>
      {/* Hero Section */}
      <div className="pt-8 flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-red-50 pb-12 w-full">
        <div className="w-11/12 max-w-6xl text-center">
          <h1 className="text-2xl sm:text-3xl font-semibold mb-10 text-gray-800">
            What are you looking for?
          </h1>

          {/* Search */}
          <div className="relative mb-12 w-full max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search for Clothes"
              className="w-full px-12 py-4 text-gray-700 placeholder-gray-400 rounded-full border border-gray-200 focus:ring-2 focus:ring-pink-200 shadow-md"
            />
          </div>

          {/* 🔥 Categories from Redux store */}
          <div className="flex flex-wrap justify-center gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                className="flex flex-col items-center p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-20 h-20 mb-2 object-cover rounded-full"
                />
                <p className="text-sm font-medium text-gray-800">{category.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="pb-8 overflow-hidden relative bg-gradient-to-br from-pink-50 via-white to-red-50 w-full">
        <style>
          {`
            @keyframes scroll {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
            .carousel-track {
              display: flex;
              animation: scroll 12s linear infinite;
            }
          `}
        </style>

        <div className="carousel-track">
          {[...featuredProducts, ...featuredProducts].map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-3 w-3/4 h-48 sm:w-1/2 sm:h-56 md:w-1/3 md:h-72 lg:w-3/12 lg:h-80"
            >
              <img
                src={item.preview}
                alt={item.name}
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
