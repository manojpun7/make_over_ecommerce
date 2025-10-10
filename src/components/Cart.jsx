import React, { useState } from "react";

const Cart = () => {
  // Sample cart data (you can replace with context/api data)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Ultra Smoothing Shampoo for Smooth & Shiny Hair- 250ml",
      type: "Bare Anatomy",
      price: 872,
      quantity: 1,
      image: "https://via.placeholder.com/60",
    },
    {
      id: 2,
      name: "Ultra Smoothing Shampoo for Smooth & Shiny Hair- 250ml",
      type: "Bare Anatomy",
      price: 1890,
      quantity: 1,
      image: "https://via.placeholder.com/60",
    },
    {
      id: 3,
      name: "Ultra Smoothing Shampoo for Smooth & Shiny Hair- 250ml",
      type: "Bare Anatomy",
      price: 0,
      quantity: 1,
      image: "https://via.placeholder.com/60",
    },
    {
      id: 4,
      name: "Ultra Smoothing Shampoo for Smooth & Shiny Hair- 250ml",
      type: "Bare Anatomy",
      price: 1414,
      quantity: 1,
      image: "https://via.placeholder.com/60",
    },
  ]);

  const shippingCost = 120;

  // Handle increment/decrement
  const updateQuantity = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const grandTotal = subtotal + shippingCost;

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Your Cart ({cartItems.length} items)</h2>
      
      {/* Cart Items */}
      <div className="divide-y">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between py-4">
            {/* Left: Image + Details */}
            <div className="flex items-center space-x-4">
              <img src={item.image} alt={item.name} className="w-16 h-16 rounded-md object-cover" />
              <div>
                <h3 className="text-sm font-semibold">{item.name}</h3>
                <p className="text-xs text-gray-500">Type: {item.type}</p>
              </div>
            </div>

            {/* Price */}
            <p className="w-24 text-gray-700">Rs. {item.price}</p>

            {/* Quantity Controls */}
            <div className="flex items-center border rounded">
              <button
                className="px-2 py-1 text-gray-600"
                onClick={() => updateQuantity(item.id, -1)}
              >
                -
              </button>
              <span className="px-3">{item.quantity}</span>
              <button
                className="px-2 py-1 text-gray-600"
                onClick={() => updateQuantity(item.id, 1)}
              >
                +
              </button>
            </div>

            {/* Total */}
            <p className="w-24 font-semibold text-right">
              Rs. {item.price * item.quantity}
            </p>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-6 border-t pt-4 space-y-2 text-sm text-gray-700">
        <div className="flex justify-between">
          <span>Subtotal:</span>
          <span>Rs. {subtotal}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping Cost:</span>
          <span>Rs. {shippingCost}</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Coupon Code:</span>
          <input
            type="text"
            placeholder="Add Coupon"
            className="border px-2 py-1 rounded text-sm w-32"
          />
        </div>
        <div className="flex justify-between font-semibold text-lg border-t pt-2">
          <span>Grand Total:</span>
          <span>Rs. {grandTotal}</span>
        </div>
      </div>

      {/* Checkout Button */}
      <button className="mt-4 w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-md">
        Check Out
      </button>
    </div>
  );
};

export default Cart;
