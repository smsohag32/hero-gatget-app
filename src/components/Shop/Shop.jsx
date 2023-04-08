import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "../Cards/ProductCard";
import { addToDb } from "../../Utils/fakeDb";
import { ProductContext } from "../../App";

const Shop = () => {
  const productsData = useContext(ProductContext);
  const [cart, setCart] = useContext();
  // const products = useContext(ProductContext);

  //   card button handler
  const handleAddToCart = (id) => {
    addToDb(id);
  };
  return (
    <div className="product-container">
      {productsData.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          handleAddToCart={handleAddToCart}
        ></ProductCard>
      ))}
    </div>
  );
};

export default Shop;
