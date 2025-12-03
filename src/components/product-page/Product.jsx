import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductDescription from "./ProductDescription";
import ProductDetails from "./ProductDetails";
import CustomerReviews from "./CustomerReviews";
import SimilarProduct from "./SimilarProduct";

// Simple in-memory cache for fetched products
const productCache = {};

const Product = () => {
  const { slug } = useParams(); // get slug from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // If product is already cached, use it
    if (productCache[slug]) {
      setProduct(productCache[slug]);
      setLoading(false);
      return;
    }

    const fetchProduct = async () => {
      setLoading(true);
      setError("");

      try {
        const res = await axios.get(
          `http://64.227.179.189:8000/api/products/${slug}/`
        );
        setProduct(res.data);

        // Save in cache
        productCache[slug] = res.data;
      } catch (err) {
        console.error(err);
        if (err.response?.status === 429) {
          setError(
            "Too many requests. Please wait a few seconds and refresh the page."
          );
        } else {
          setError("Failed to load product. Please try again.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  if (loading) return <p className="text-center mt-4">Loading product...</p>;
  if (error) return <p className="text-center mt-4 text-red-500">{error}</p>;
  if (!product) return <p className="text-center mt-4">Product not found</p>;

  return (
    <>
      <ProductDescription product={product} />
      <ProductDetails product={product} />
      <CustomerReviews productId={product.id} />
      <SimilarProduct productId={product.id} />
    </>
  );
};

export default Product;
