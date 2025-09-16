import React, { useState } from "react";
import { Heart, Minus, Plus } from "lucide-react";

// Example images
import product1 from '../../assets/product/product1.png'
import product2 from "../../assets/product/product2.png";
import product3 from "../../assets/product/product3.png";
import product4 from "../../assets/product/product4.png";

const ProductDescription = () => {
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(product1);

  const thumbnails = [product1, product2, product3,product4];

  return (
    <div className="bg-gradient-to-br from-pink-50 via-white to-red-50 py-10 px-4 sm:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Left Side - Product Images */}
        <div>
          <img
            src={mainImage}
            alt="Product"
            className="w-full h-[400px] object-contain rounded-lg shadow"
          />
          <div className="flex justify-center gap-3 mt-4">
            {thumbnails.map((thumb, index) => (
              <img
                key={index}
                src={thumb}
                alt="thumb"
                onClick={() => setMainImage(thumb)}
                className={`w-20 h-20 object-contain rounded-md border cursor-pointer ${
                  mainImage === thumb ? "border-pink-500" : "border-gray-200"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right Side - Product Info */}
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
            Ultra Smoothing Shampoo for Smooth & Shiny Hair- 250ml
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Niacinamide & Aloe Vera | Restores Smoothness & Texture By 37%
          </p>

          {/* Rating */}
          <div className="flex items-center mt-3">
            <span className="bg-pink-500 text-white px-2 py-0.5 rounded text-sm font-medium">
              ★ 4.7
            </span>
            <span className="ml-2 text-sm text-gray-600">(397 Reviews)</span>
          </div>

          {/* Reward Points */}
          <p className="text-pink-500 text-sm mt-3">
            ★ Get Reward Points in this product
          </p>

          {/* Price Section */}
          <div className="mt-3">
            <p className="text-xl font-bold text-gray-800">
              Rs. 872.00{" "}
              <span className="line-through text-gray-400 text-base ml-2">
                Rs. 952
              </span>{" "}
              <span className="text-pink-500 text-base">8% off</span>
            </p>
            <p className="text-xs text-gray-500 mt-1">
              inclusive of all taxes
            </p>
            <p className="text-xs text-red-500 mt-1">
              Note: Order placed between 9am to 4pm
            </p>
          </div>

          {/* Coupon */}
          <div className="mt-4 border-t pt-4">
            <p className="text-gray-700 text-sm">
              <span className="font-semibold">🎟 Use Coupon</span>
              <br />
              Save more from the MakeoverMe coupons{" "}
              <a href="#" className="text-pink-500 font-medium">
                More Coupons &gt;
              </a>
            </p>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="flex items-center gap-3 mt-6">
            <div className="flex items-center border rounded-md">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-2 text-gray-600 hover:text-pink-500"
              >
                <Minus size={16} />
              </button>
              <span className="px-4 py-2">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-2 text-gray-600 hover:text-pink-500"
              >
                <Plus size={16} />
              </button>
            </div>

            <button className="flex-1 bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-md font-medium">
              ADD TO CART
            </button>
            <button className="border border-pink-300 p-2 rounded-md text-pink-500 hover:bg-pink-50">
              <Heart size={20} />
            </button>
          </div>

          {/* View Product Detail */}
          <button className="mt-4 text-sm text-gray-700 underline">
            View Product Detail
          </button>
        </div>
      </div>

      {/* Bottom link */}
      <div className="text-center mt-10">
        <a href="#" className="text-pink-500 font-semibold">
          View More Product &gt;&gt;
        </a>
      </div>
    </div>
  );
};

export default ProductDescription;
