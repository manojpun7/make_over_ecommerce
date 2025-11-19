import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../lib/store/cart/cartSlice"; // adjust path

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items); // get cart from Redux
  const shippingCost = 120;

  const subtotal = cartItems.reduce((acc, item) => acc + item.unit_price * item.quantity, 0);
  const grandTotal = subtotal + shippingCost;

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">
        Your Cart ({cartItems.length} items)
      </h2>

      <div className="divide-y">
        {cartItems.length === 0 ? (
          <p className="text-center py-10 text-gray-500">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between py-4">
              <div className="flex items-center space-x-4">
                <img src={item.preview || item.image} alt={item.name} className="w-16 h-16 rounded-md object-cover" />
                <div>
                  <h3 className="text-sm font-semibold">{item.name}</h3>
                  <p className="text-xs text-gray-500">Type: {item.type}</p>
                  <p className="text-xs text-gray-500">Stock: {item.stock}</p>
                </div>
              </div>

              <p className="w-24 text-gray-700">Rs. {item.unit_price}</p>

              <div className="flex items-center border rounded">
                <button
                  className="px-2 py-1 text-gray-600"
                  onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span className="px-3">{item.quantity}</span>
                <button
                  className="px-2 py-1 text-gray-600"
                  onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                  disabled={item.quantity >= item.stock}
                >
                  +
                </button>
              </div>

              <p className="w-24 font-semibold text-right">Rs. {item.unit_price * item.quantity}</p>

              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="ml-4 text-red-500 hover:text-red-700 font-semibold text-sm"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>

      <div className="mt-6 border-t pt-4 space-y-2 text-sm text-gray-700">
        <div className="flex justify-between">
          <span>Subtotal:</span>
          <span>Rs. {subtotal}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping Cost:</span>
          <span>Rs. {shippingCost}</span>
        </div>
        <div className="flex justify-between font-semibold text-lg border-t pt-2">
          <span>Grand Total:</span>
          <span>Rs. {grandTotal}</span>
        </div>
      </div>

      <button className="mt-4 w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-md">
        Check Out
      </button>
    </div>
  );
};

export default Cart;
