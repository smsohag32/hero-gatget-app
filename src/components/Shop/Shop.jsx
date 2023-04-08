import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "../Cards/ProductCard";
import { addToDb } from "../../Utils/fakeDb";
import { CartContext, ProductContext } from "../../App";
import { toast } from "react-hot-toast";

const Shop = () => {
  const productsData = useContext(ProductContext);
  const [cart, setCart] = useContext(CartContext);
  // const products = useContext(ProductContext);

  //   card button handler
  const handleAddToCart = (product) => {
    let newCart = [];
    const exist = cart.find((pd) => pd.id === product.id);
    if (!exist) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      const rest = cart.filter((pd) => pd.id !== product.id);
      exist.quantity = exist.quantity + 1;
      newCart = [...rest, exist];
    }
    toast.success("Product Added !!");
    setCart(newCart);
    addToDb(product.id);
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
