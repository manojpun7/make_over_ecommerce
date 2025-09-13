import React from "react";
import frok from "../assets/flash-sale/frok.png";
import hair from "../assets/flash-sale/hair.png";
import moisturizer from "../assets/flash-sale/moisturizer.png";
import ring from "../assets/flash-sale/ring.png";
import shoes from "../assets/flash-sale/shoes.png";
import shirt from "../assets/flash-sale/shirt.png";
import coupon1 from "../assets/flash-sale/1coupon.png"
import coupon2 from "../assets/flash-sale/2coupon.png"
import coupon3 from "../assets/flash-sale/3coupon.png"
import coupon4 from "../assets/flash-sale/4coupon.png"

const products = [
  {
    id: 1,
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
    id: 2,
    title: "Ladies Cotton Blue Dress",
    image: frok,
    rating: 4.6,
    reviews: 311,
    discount: "12% off",
    price: 492,
    oldPrice: 599,
  },
  {
    id: 3,
    title: "Ecco Men's Soft Sneaker",
    image: shoes,
    rating: 4.6,
    reviews: 311,
    discount: "7% off",
    price: 1414,
    oldPrice: 1520,
  },
  {
    id: 4,
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
    id: 5,
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
    id: 6,
    title: "New Black Shirt Full Sleeve",
    image: shirt,
    rating: 4.6,
    reviews: 311,
    discount: "10% off",
    price: 900,
    oldPrice: 1000,
  },
];

const FlashSale = () => {
  return (
    <div className="bg-gradient-to-br from-pink-50 via-white to-red-50 py-10 px-4 sm:px-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
          Flash Sale
        </h2>
        <a
          href="#"
          className="text-pink-500 text-sm sm:text-base font-medium hover:underline flex items-center"
        >
          Explore All <span className="ml-1">➝</span>
        </a>
      </div>

      <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-1 relative flex flex-col"
          >
            {product.tag && (
              <span className="absolute top-2 left-2 bg-pink-500 text-white text-xs font-semibold px-2 py-1 rounded">
                {product.tag}
              </span>
            )}

            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-contain mb-3"
            />

            <div className="flex-1 flex flex-col">
              <p className="text-gray-600 text-sm mb-1">
                {product.rating}★/{product.reviews}
              </p>
              <p className="text-pink-500 text-sm font-medium mb-1">
                {product.discount}
              </p>
              <p className="text-lg font-bold text-gray-800">
                Rs. {product.price}{" "}
                <span className="line-through text-gray-400 text-sm ml-1">
                  Rs. {product.oldPrice}
                </span>
              </p>
              <p className="text-sm text-gray-600 mb-3">{product.title}</p>

              <div className="mt-auto flex items-center gap-3">
                <button className="flex-1 bg-pink-500 hover:bg-pink-600 text-white text-sm py-2 rounded-md">
                  Add To Cart
                </button>
                <button className="text-pink-500 border border-pink-300 p-1.5 rounded-md hover:bg-pink-50">
                  ♥
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Coupon Section */}
      <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3  lg:flex justify-evenly gap-4 bg-gradient-to-r from-pink-200 to-pink-100 rounded-lg shadow p-4 ">
        <img src={coupon1} alt="" />
        <img src={coupon2} alt="" />
        <img src={coupon3} alt="" />
        <img src={coupon4} alt="" />
      </div>
    </div>
  );
};

export default FlashSale;
