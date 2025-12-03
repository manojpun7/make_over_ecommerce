import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCartToBackend } from "../lib/store/cart/cartThunk";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItems = useSelector(state => state.cart.items);
  const cartItem = cartItems.find(i => i.product === product.uuid);
  const inCartQuantity = cartItem ? cartItem.quantity : 0;

  const handleClick = () => {
    navigate(`/products/${product.slug}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(addCartToBackend(product)); // 🔥 Now hits backend
  };

  return (
    <div onClick={handleClick} className="cursor-pointer bg-white rounded-xl shadow-sm hover:shadow-2xl p-1 flex flex-col relative pt-4 pb-4">
      
      {product.tag && <span className="absolute top-2 left-2 bg-pink-500 text-white text-xs px-2 py-1 rounded">{product.tag}</span>}

      <img
        src={product.preview ? product.preview : "/src/assets/image4.png"}
        onError={(e) => (e.target.src = "/src/assets/image4.png")}
        alt={product.name}
        className="w-full h-40 object-cover mb-3 rounded-md"
      />

      <div className="flex-1 flex flex-col">
        <p className="text-lg font-bold text-gray-800">Rs. {product.unit_price}</p>
        <p className="text-sm text-gray-600 mb-3">{product.name}</p>

        <div className="mt-auto flex items-center gap-3">
          {product.stock === 0 ? (
            <button className="flex-1 bg-gray-400 text-white text-sm py-2 rounded-md cursor-not-allowed">Out of Stock</button>
          ) : (
            <button
              onClick={handleAddToCart}
              disabled={inCartQuantity >= product.stock}
              className={`flex-1 text-white text-sm py-2 rounded-md ${inCartQuantity >= product.stock ? "bg-gray-400 cursor-not-allowed" : "bg-pink-500 hover:bg-pink-600"}`}
            >
              {inCartQuantity >= product.stock ? "Max Quantity Reached" : "Add To Cart"}
            </button>
          )}
          <button className="text-pink-500 border px-2 py-1 rounded">♥</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
