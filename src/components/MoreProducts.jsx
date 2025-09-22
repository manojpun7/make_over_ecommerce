import React from "react";
import { Heart } from "lucide-react";
import ProductCard from "./ProductCard";
import baby from "../assets/product-of-the-day/baby.png";
import bag from "../assets/product-of-the-day/bag.png";
import purse from "../assets/product-of-the-day/purse.png";
import serum from "../assets/product-of-the-day/serum.png";
import shampoo from "../assets/product-of-the-day/shampoo.png";
import watch from "../assets/product-of-the-day/watch.png";
import frok from "../assets/flash-sale/frok.png";
import hair from "../assets/flash-sale/hair.png";
import moisturizer from "../assets/flash-sale/moisturizer.png";
import ring from "../assets/flash-sale/ring.png";
import shoes from "../assets/flash-sale/shoes.png";
import shirt from "../assets/flash-sale/shirt.png";


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
    tag: "BEST SELLER",
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
    tag: "BEST SELLER",
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
    tag: "BEST SELLER",
  },
  {
    id: 6,
    title: "Organic Vitamin C Serum",
    image: serum,
    rating: 4.6,
    reviews: 311,
    discount: "10% off",
    price: 900,
    oldPrice: 1000,
  },
   {
      id: 7,
      title: "Daily Moisturizing Lotion",
      image: moisturizer,
      rating: 4.6,
      reviews: 311,
      discount: "11% off",
      price: 1126,
      oldPrice: 1265,
      tag: "BEST SELLER",
    },
    {
      id: 8,
      title: "Ladies Cotton Blue Dress",
      image: frok,
      rating: 4.6,
      reviews: 311,
      discount: "12% off",
      price: 492,
      oldPrice: 599,
    },
    {
      id: 9,
      title: "Ecco Men's Soft Sneaker",
      image: shoes,
      rating: 4.6,
      reviews: 311,
      discount: "7% off",
      price: 1414,
      oldPrice: 1520,
    },
    {
      id: 10,
      title: "Long Wavy Hair Wig",
      image: hair,
      rating: 4.6,
      reviews: 311,
      discount: "10% off",
      price: 806,
      oldPrice: 896,
      tag: "BEST SELLER",
    },
    {
      id: 11,
      title: "Platinum Ring Set-6",
      image: ring,
      rating: 4.6,
      reviews: 311,
      discount: "15% off",
      price: 490,
      oldPrice: 576,
      tag: "BEST SELLER",
    },
    {
      id: 12,
      title: "New Black Shirt Full Sleeve",
      image: shirt,
      rating: 4.6,
      reviews: 311,
      discount: "10% off",
      price: 900,
      oldPrice: 1000,
    },
];

const MoreProducts = () => {
  return (
    <div className="flex bg-gradient-to-br from-pink-50 via-white to-red-50 min-h-screen p-6">
      {/* Sidebar */}
      <aside className="w-64 pr-6 hidden md:block">
        <div className="space-y-6 text-gray-700">
          <div>
            <label className="block text-sm mb-1">Sort By:</label>
            <select className="w-full border rounded-lg px-3 py-2 text-sm">
              <option>Default</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>

          <div>
            <label className="block text-sm mb-1">Category:</label>
            <select className="w-full border rounded-lg px-3 py-2 text-sm">
              <option>All Categories</option>
              <option>Men</option>
              <option>Women</option>
              <option>Kids</option>
              <option>Beauty</option>
            </select>
          </div>

          <div>
            <label className="block text-sm mb-1">Price Range:</label>
            <select className="w-full border rounded-lg px-3 py-2 text-sm">
              <option>All Price Ranges</option>
              <option>Under Rs. 1000</option>
              <option>Rs. 1000 - 2000</option>
              <option>Above Rs. 2000</option>
            </select>
          </div>
        </div>
      </aside>

      {/* Product Grid */}
      <main className="flex-1">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">More Products</h2>
          <select className="border rounded-lg px-3 py-2 text-sm">
            <option>Best Match</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
             <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default MoreProducts;
