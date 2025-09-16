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
      <Navbar />
      <ProductDescription />
      <ProductDetails />
      <CustomerReviews />
      <SimilarProduct/>
      <Footer/>
    </div>
  );
};

export default Product;
