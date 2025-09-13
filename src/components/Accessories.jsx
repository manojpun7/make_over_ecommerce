import React from "react";
import ProductCard from "./ProductCard";
import ellipse2 from '../assets/accessories/ellipse 2.png'
import ellipse3 from '../assets/accessories/ellipse 3.png'
import ellipse4 from '../assets/accessories/ellipse 4.png'
import ellipse5 from '../assets/accessories/ellipse 5.png'
import ellipse6 from '../assets/accessories/ellipse 6.png'
import ellipse7 from '../assets/accessories/ellipse 7.png'

const products = [
  {
    id: 1,
    title: "Baby Dress Set Pure Cotton",
    image: ellipse2,
    rating: 4.6,
    reviews: 311,
    discount: "11% off",
    price: 1126,
    oldPrice: 1265,
  },
  {
    id: 2,
    title: "Color Contrast Handbag For Female",
    image: ellipse3,
    rating: 4.6,
    reviews: 311,
    discount: "12% off",
    price: 492,
    oldPrice: 599,
  },
  {
    id: 3,
    title: "Black Leather Accessories Male",
    image: ellipse4,
    rating: 4.6,
    reviews: 311,
    discount: "7% off",
    price: 1414,
    oldPrice: 1520,
  },
  {
    id: 4,
    title: "Platinum Watch Set Male",
    image: ellipse5,
    rating: 4.6,
    reviews: 311,
    discount: "10% off",
    price: 806,
    oldPrice: 896,
  },
  {
    id: 5,
    title: "Bare Anatomy Ultra Smooth Shampoo",
    image: ellipse6,
    rating: 4.6,
    reviews: 311,
    discount: "15% off",
    price: 490,
    oldPrice: 576,
  },
  {
    id: 6,
    title: "Organic Vitamin C Serum",
    image: ellipse7,
    rating: 4.6,
    reviews: 311,
    discount: "10% off",
    price: 900,
    oldPrice: 1000,
  },
];

const Accessories = () => {
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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Accessories;
