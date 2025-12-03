import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

let initialCart = [];
if (typeof window !== "undefined") {
  const stored = localStorage.getItem("cartItems");
  initialCart = stored ? JSON.parse(stored) : [];
}

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: initialCart },
  reducers: {
    setCart: (state, action) => {  // ✅ Add this
      state.items = action.payload;
    },

    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.items.find((i) => i.product === product.uuid);

      if (existing) {
        if (existing.quantity < product.stock) existing.quantity += 1;
      } else {
        state.items.push({
          cart_item_id: uuidv4(),
          product: product.uuid,
          uuid: product.uuid,
          id: product.id,
          slug: product.slug,
          name: product.name,
          stock: product.stock,
          unit_price: product.unit_price,
          quantity: 1,
        });
      }
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item) {
        item.quantity = Math.max(1, Math.min(quantity, item.stock));
      }
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart, setCart } = cartSlice.actions;
export default cartSlice.reducer;
