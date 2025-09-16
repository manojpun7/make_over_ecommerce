import React from "react";
import baby from "../../assets/product-of-the-day/baby.png";
import bag from "../../assets/product-of-the-day/bag.png";
import purse from "../../assets/product-of-the-day/purse.png";
import shampoo from "../../assets/product-of-the-day/shampoo.png";
import watch from "../../assets/product-of-the-day/watch.png";
import ProductCard from "../ProductCard";


const products = [
  {
    id: 1,
    title: "Baby Dress Set Pure Cotton",
    image: baby,
    rating: 4.6,
    reviews: 311,
    discount: "11% off",
    price: 1126,
    oldPrice: 1265,
  },
  {
    id: 2,
    title: "Color Contrast Handbag For Female",
    image: bag,
    rating: 4.6,
    reviews: 311,
    discount: "12% off",
    price: 492,
    oldPrice: 599,
  },
  {
    id: 3,
    title: "Black Leather Accessories Male",
    image: purse,
    rating: 4.6,
    reviews: 311,
    discount: "7% off",
    price: 1414,
    oldPrice: 1520,
  },
  {
    id: 4,
    title: "Platinum Watch Set Male",
    image: watch,
    rating: 4.6,
    reviews: 311,
    discount: "10% off",
    price: 806,
    oldPrice: 896,
  },
  {
    id: 5,
    title: "Bare Anatomy Ultra Smooth Shampoo",
    image: shampoo,
    rating: 4.6,
    reviews: 311,
    discount: "15% off",
    price: 490,
    oldPrice: 576,
  },
 
];

const SimilarProduct = () => {
  return (
    <div className="bg-gradient-to-br from-pink-50 via-white to-red-50 py-10 px-4 sm:px-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
          Explore Similar Products
        </h2>
        <a
          href="#"
          className="text-pink-500 text-sm sm:text-base font-medium hover:underline flex items-center"
        >
          Explore All <span className="ml-1">➝</span>
        </a>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SimilarProduct;
