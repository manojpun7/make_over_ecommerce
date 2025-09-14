import React from "react";
import ProductCard from "./ProductCard";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";

const products = [
  {
    id: 1,
    title: "Baby Dress Set Pure Cotton",
    image: image1,
    rating: 4.6,
    reviews: 311,
    discount: "11% off",
    price: 1126,
    oldPrice: 1265,
  },
  {
    id: 2,
    title: "Color Contrast Handbag For Female",
    image: image2,
    rating: 4.6,
    reviews: 311,
    discount: "12% off",
    price: 492,
    oldPrice: 599,
  },
  {
    id: 3,
    title: "Black Leather Accessories Male",
    image: image3,
    rating: 4.6,
    reviews: 311,
    discount: "7% off",
    price: 1414,
    oldPrice: 1520,
  },
  {
    id: 4,
    title: "Platinum Watch Set Male",
    image: image4,
    rating: 4.6,
    reviews: 311,
    discount: "10% off",
    price: 806,
    oldPrice: 896,
  },
];

const BestOutfitDeal = () => {
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
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 mb-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BestOutfitDeal;
