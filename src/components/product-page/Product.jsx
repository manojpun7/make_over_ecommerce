import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDescription from "./ProductDescription";
import ProductDetails from './ProductDetails'
import CustomerReviews from './CustomerReviews'
import SimilarProduct from './SimilarProduct'
import axios from "axios";

const Product = () => {
  const { slug } = useParams(); // get slug from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://64.227.179.189:8000/api/products/${slug}/`);
        setProduct(res.data);


        console.log("data from product-page",res);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);


  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found</p>;

  return (<>


    <ProductDescription product={product} />;
    <ProductDetails />
    <CustomerReviews />
    <SimilarProduct />
  </>)
};

export default Product;
