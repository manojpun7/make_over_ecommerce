import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../lib/store/products/productsThunks";

const MoreProducts = () => {
  const dispatch = useDispatch();
  const { products, loading, count } = useSelector((state) => state.products);

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(count / 10); // backend returns total count

  // Pagination window size
  const pageWindow = 5;
  const [windowStart, setWindowStart] = useState(1);

  useEffect(() => {
    dispatch(fetchProducts(currentPage));
  }, [currentPage, dispatch]);

  // Compute visible pages
  const getVisiblePages = () => {
    const end = Math.min(windowStart + pageWindow - 1, totalPages);
    const pages = [];
    for (let i = windowStart; i <= end; i++) pages.push(i);
    return pages;
  };

  // Handle previous / next
  const handlePrevious = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      if (newPage < windowStart) setWindowStart((w) => w - pageWindow);
      setCurrentPage(newPage);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      const newPage = currentPage + 1;
      if (newPage > windowStart + pageWindow - 1)
        setWindowStart((w) => w + pageWindow);
      setCurrentPage(newPage);
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex bg-gradient-to-br from-pink-50 via-white to-red-50 min-h-screen p-6">
      {/* ---------------- Sidebar ---------------- */}
      <aside className="w-64 pr-6 hidden md:block">
        <div className="space-y-6 text-gray-700">
          <div>
            <label className="block text-sm mb-1">Search:</label>
            <input
              type="text"
              placeholder="Search products..."
              className="w-full border rounded-lg px-3 py-2 text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Sort By:</label>
            <select className="w-full border rounded-lg px-3 py-2 text-sm">
              <option>Default</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>

          <div>
            <label className="block text-sm mb-1">Category:</label>
            <select className="w-full border rounded-lg px-3 py-2 text-sm">
              <option>All Categories</option>
              <option>Men</option>
              <option>Women</option>
              <option>Kids</option>
              <option>Beauty</option>
            </select>
          </div>

          <div>
            <label className="block text-sm mb-1">Price Range:</label>
            <select className="w-full border rounded-lg px-3 py-2 text-sm">
              <option>All Price Ranges</option>
              <option>Under Rs. 1000</option>
              <option>Rs. 1000 - 2000</option>
              <option>Above Rs. 2000</option>
            </select>
          </div>
        </div>
      </aside>

      {/* ---------------- Main ---------------- */}
      <main className="flex-1">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">More Products</h2>
          <select className="border rounded-lg px-3 py-2 text-sm">
            <option>Best Match</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>

        {loading && (
          <p className="text-gray-600 text-center py-10">Loading products...</p>
        )}

        {!loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* ---------------- Sliding Pagination ---------------- */}
        <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg border ${
              currentPage === 1
                ? "bg-gray-200 cursor-not-allowed"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            Previous
          </button>

          {getVisiblePages().map((num) => (
            <button
              key={num}
              onClick={() => handlePageClick(num)}
              className={`px-4 py-2 rounded-lg border ${
                currentPage === num
                  ? "bg-red-500 text-white font-semibold"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              {num}
            </button>
          ))}

          {windowStart + pageWindow - 1 < totalPages && (
            <span className="px-2">...</span>
          )}

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg border ${
              currentPage === totalPages
                ? "bg-gray-200 cursor-not-allowed"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
};

export default MoreProducts;
