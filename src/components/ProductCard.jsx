import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="pl-4 pt-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-1 relative flex flex-col">
      {/* Tag */}
      {product.tag && (
        <span className="absolute top-2 left-2 bg-pink-500 text-white text-xs font-semibold px-2 py-1 rounded">
          {product.tag}
        </span>
      )}

      {/* Image */}
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-contain mb-3"
      />

      {/* Info */}
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

        {/* Buttons aligned bottom */}
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
  );
};

export default ProductCard;
