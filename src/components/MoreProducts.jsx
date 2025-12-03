import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { searchProducts } from "../lib/store/searchProducts/searchProductsThunks";
import { fetchCategories } from "../lib/store/category/categoryThunks";

let debounceTimeout;

const MoreProducts = () => {
  const dispatch = useDispatch();
  const { products, loading, count } = useSelector((state) => state.searchProducts);
  const { categories, loading: categoriesLoading } = useSelector((state) => state.categories);

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [windowStart, setWindowStart] = useState(1);
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const pageWindow = 5;
  const totalPages = Math.ceil(count / 10);

  const getVisiblePages = () => {
    const end = Math.min(windowStart + pageWindow - 1, totalPages);
    const pages = [];
    for (let i = windowStart; i <= end; i++) pages.push(i);
    return pages;
  };

  // Fetch products from backend
  const fetchData = useCallback(() => {
    dispatch(
      searchProducts({
        page: currentPage,
        search: searchTerm,
        sort,
        category,
        priceRange,
      })
    );
  }, [dispatch, currentPage, searchTerm, sort, category, priceRange]);

  // Fetch categories if not already loaded
  useEffect(() => {
    if (!categories || categories.length === 0) {
      dispatch(fetchCategories());
    }
  }, [categories, dispatch]);

  // Debounce search input
  useEffect(() => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      setCurrentPage(1);
      setWindowStart(1);
      fetchData();
    }, 500);

    return () => clearTimeout(debounceTimeout);
  }, [searchTerm, fetchData]);

  // Fetch products whenever category, sort, priceRange, or page changes
  useEffect(() => {
    setCurrentPage(1);
    setWindowStart(1);
    fetchData();
  }, [category, sort, priceRange, currentPage, fetchData]);

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
      if (newPage > windowStart + pageWindow - 1) setWindowStart((w) => w + pageWindow);
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="flex bg-gradient-to-br from-pink-50 via-white to-red-50 min-h-screen p-6">
      {/* Sidebar */}
      <aside className="w-64 pr-6 hidden md:block">
        <div className="space-y-6 text-gray-700">
          {/* Search */}
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

          {/* Sort */}
          <div>
            <label className="block text-sm mb-1">Sort By:</label>
            <select
              className="w-full border rounded-lg px-3 py-2 text-sm"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="">Default</option>
              <option value="asc">Price: Low to High</option>
              <option value="desc">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm mb-1">Category:</label>
            {categoriesLoading ? (
              <p>Loading categories...</p>
            ) : (
              <select
                className="w-full border rounded-lg px-3 py-2 text-sm"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.slug}>
                    {cat.name}
                  </option>
                ))}
              </select>
            )}
          </div>

          {/* Price Range */}
          <div>
            <label className="block text-sm mb-1">Price Range:</label>
            <select
              className="w-full border rounded-lg px-3 py-2 text-sm"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            >
              <option value="">All Price Ranges</option>
              <option value="0-1000">Under Rs. 1000</option>
              <option value="1000-2000">Rs. 1000 - 2000</option>
              <option value="2000+">Above Rs. 2000</option>
            </select>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {loading && <p className="text-gray-600 text-center py-10">Loading products...</p>}

        {!loading && products.length === 0 && (
          <p className="text-gray-600 text-center py-10">No products found.</p>
        )}

        {!loading && products.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg border ${
                currentPage === 1 ? "bg-gray-200 cursor-not-allowed" : "bg-white hover:bg-gray-100"
              }`}
            >
              Previous
            </button>

            {getVisiblePages().map((num) => (
              <button
                key={num}
                onClick={() => setCurrentPage(num)}
                className={`px-4 py-2 rounded-lg border ${
                  currentPage === num ? "bg-red-500 text-white font-semibold" : "bg-white hover:bg-gray-100"
                }`}
              >
                {num}
              </button>
            ))}

            {windowStart + pageWindow - 1 < totalPages && <span className="px-2">...</span>}

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg border ${
                currentPage === totalPages ? "bg-gray-200 cursor-not-allowed" : "bg-white hover:bg-gray-100"
              }`}
            >
              Next
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default MoreProducts;
