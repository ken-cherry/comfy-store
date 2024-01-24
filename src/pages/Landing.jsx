import React from "react";
import { FeaturedProducts, Hero } from "../components";
import { customFetch } from "../utils";
import SingleProduct from "./SingleProduct";

const url = "/products?featured=true";

export const loader = async () => {
  const response = await customFetch(url);
  const products = response.data.data;
  return { products };
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <SingleProduct />
    </>
  );
};

export default Landing;
