import React from "react";
import ProductDescription from "./ProductDescription";
import Navbar from "../Navbar";
import ProductDetails from "./ProductDetails";
import CustomerReviews from "./CustomerReviews";
import Footer from "../Footer";
import SimilarProduct from "./SimilarProduct";

const Product = () => {
  return (
    <div>
      <ProductDescription />
      <ProductDetails />
      <CustomerReviews />
      <SimilarProduct/>
    </div>
  );
};

export default Product;
