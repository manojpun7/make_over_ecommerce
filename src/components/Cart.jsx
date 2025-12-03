import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCart, addCartToBackend, deleteCartItemFromBackend } from "../lib/store/cart/cartThunk";
import { setCart } from "../lib/store/cart/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const shippingCost = 120;

  const subtotal = cartItems.reduce(
    (acc, item) => acc + Number(item.unit_price) * item.quantity,
    0
  );
  const grandTotal = subtotal + shippingCost;

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const handleIncrease = (productId, e) => {
    e.stopPropagation();
    const product = cartItems.find(i => i.product.id === productId)?.product;
    if (product) dispatch(addCartToBackend(product));
  };

  const handleDecrease = (productId, e) => {
    e.stopPropagation();
    dispatch(deleteCartItemFromBackend(productId));
  };

  const handleDelete = (productId, e) => {
    e.stopPropagation();
    const updated = cartItems.filter(i => i.product.id !== productId);
    dispatch(deleteCartItemFromBackend(productId));
    dispatch(setCart(updated));
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">
        Your Cart ({cartItems.length} items)
      </h2>

      <div className="divide-y">
        {cartItems.length === 0 ? (
          <p className="text-center py-10 text-gray-500">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => {
            const product = item.product;
            return (
              <div key={item.id} className="flex items-center justify-between py-4">

                <div className="flex items-center space-x-4">
                  <img
                    src={product.preview || "/src/assets/image4.png"}
                    alt={product.name}
                    className="w-16 h-16 rounded-md object-cover"
                  />
                  <div>
                    <h3 className="text-sm font-semibold">{product.name}</h3>
                    <p className="text-xs text-gray-500">Stock: {product.stock}</p>
                  </div>
                </div>

                <p className="w-24 text-gray-700">Rs. {item.unit_price}</p>

                <div className="flex items-center border rounded">
                  <button onClick={(e) => handleDecrease(product.id, e)} className="px-2 py-1">-</button>
                  <span className="px-3">{item.quantity}</span>
                  <button onClick={(e) => handleIncrease(product.id, e)} className="px-2 py-1">+</button>
                </div>

                <p className="w-24 font-semibold text-right">
                  Rs. {(item.unit_price * item.quantity).toFixed(2)}
                </p>

                <button
                  onClick={(e) => handleDelete(product.id, e)}
                  className="ml-4 text-red-500 hover:text-red-700 font-semibold text-sm"
                >
                  Remove
                </button>

              </div>
            );
          })
        )}
      </div>

      <div className="mt-6 border-t pt-4 space-y-2 text-sm text-gray-700">
        <div className="flex justify-between">
          <span>Subtotal:</span>
          <span>Rs. {subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-semibold text-lg">
          <span>Grand Total:</span>
          <span>Rs. {grandTotal.toFixed(2)}</span>
        </div>
      </div>

      <button className="mt-4 w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-md">
        Check Out
      </button>
    </div>
  );
};

export default Cart;
