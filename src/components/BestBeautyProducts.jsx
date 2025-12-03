import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BeautyProductCard from "./BeautyProductCard";
import { fetchProducts } from "../lib/store/products/productsThunks.js"; // adjust path

const BestBeautyProducts = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts()); // fetch products on component mount
  }, [dispatch]);

  // Filter products with category "Beauty"
  const beautyProducts = products?.filter(
    (product) => product.category?.name === "Beauty"
  );

  if (loading) return <p>Loading...</p>;
  if (!beautyProducts || beautyProducts.length === 0)
    return <p>No beauty products found.</p>;

  return (
    <div className="bg-gradient-to-br from-pink-50 via-white to-red-50 py-10 px-4 sm:px-8">
      {/* Header */}
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">
        Best Beauty Products
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-3">
        {beautyProducts.map((product) => (
          <BeautyProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BestBeautyProducts;
