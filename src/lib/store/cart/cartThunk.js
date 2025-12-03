import axios from "axios";
import { setCart } from "./cartSlice";

// Fetch cart from backend
export const fetchCart = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("access_token");

    const res = await axios.get("http://64.227.179.189:8000/api/cart/", {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
        "Content-Type": "application/json",
      },
    });

    // Map backend response to Redux store format
    const backendCart = res.data.map((i) => ({
      cart_item_id: i.id,             // ✅ DB cart item id
      id: i.id,                       // ✅ Use same for React key
      product: i.product,             // ✅ full product object
      unit_price: Number(i.unit_price),
      quantity: Number(i.quantity),
      subtotal: Number(i.subtotal),
      stock: i.product.stock,
      name: i.product.name,
      slug: i.product.slug,
      preview: i.product.preview
    }));



    dispatch(setCart(backendCart));
    localStorage.setItem("cartItems", JSON.stringify(backendCart));
  } catch (err) {
    console.error("Cart fetch failed:", err.response?.data || err);
  }
};

// Add to cart and send correct payload to backend
export const addCartToBackend = (product) => async (dispatch, getState) => {
  try {
    const token = localStorage.getItem("access_token");

    const payload = {
      product: product.id,  // ✅ correct product ID
      quantity: 1,
    };

    const res = await axios.post(
      "http://64.227.179.189:8000/api/cart/add/",
      payload,
      {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
          "Content-Type": "application/json",
        },
      }
    );

    const cart = getState().cart.items;
    const productId = product.id;

    const target = cart.find((i) => i.product.id === productId);

    let updatedCart;

    // ✅ If item exists → increase qty
    if (target) {
      updatedCart = cart.map((i) =>
        i.product.id === productId
          ? { ...i, quantity: i.quantity + 1 }
          : i
      );
    }
    // ✅ If not → add new item from backend response
    else {
      updatedCart = [
        ...cart,
        {
          cart_item_id: res.data.id,      // ✅ cart DB id
          id: res.data.id,
          product: res.data.product,
          quantity: Number(res.data.quantity),
          unit_price: Number(res.data.unit_price),
          subtotal: Number(res.data.subtotal),
          stock: res.data.product.stock,
          preview: res.data.product.preview,
        },
      ];
    }

    dispatch(setCart(updatedCart)); // ✅ update UI instantly
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));

  } catch (err) {
    console.error("Add cart API failed:", err.response?.data || err);
  }
};



// Delete cart item

export const deleteCartItemFromBackend = (productId) => async (dispatch, getState) => {
  try {
    const token = localStorage.getItem("access_token");

    // call backend remove API
    await axios.post(
      "http://64.227.179.189:8000/api/cart/remove/",
      { product_id: productId },
      {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
          "Content-Type": "application/json",
        },
      }
    );

    const cart = getState().cart.items;
    const target = cart.find((i) => i.product.id === productId);

    let updatedCart;

    // if quantity is 1 → remove item
    if (target.quantity === 1) {
      updatedCart = cart.filter((i) => i.product.id !== productId);
    }
    // if quantity > 1 → just reduce quantity
    else {
      updatedCart = cart.map((i) =>
        i.product.id === productId
          ? { ...i, quantity: i.quantity - 1 }
          : i
      );
    }

    dispatch(setCart(updatedCart));
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  } catch (err) {
    console.error("Delete cart failed:", err.response?.data || err);
  }
};
