import React, { useContext } from "react";

import { Link, useLoaderData } from "react-router-dom";
import CartItem from "./Cards/CartItem";
import { deleteShoppingCart, removeFromDb } from "../Utils/fakeDb";
import { CartContext } from "../App";
import { toast } from "react-hot-toast";

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  let total = 0;

  // condition rakhte hobay nai le error dibay
  if (cart.length > 0) {
    for (const product of cart) {
      total = total + product.price * product.quantity;
    }
  }

  // handle remove item in shopping cart in data bage
  const handleRemoveItem = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
    toast.error("Products Removed !!");
  };

  // place handler

  const orderHandler = () => {
    if (cart.length > 0) {
      setCart([]);
      deleteShoppingCart();
      return toast.success("Order Done 🔥");
    }
    return toast.error("Cart EMPTY! ⚠️");
  };

  // delete shopping cart handle clear cart

  const deleteCart = () => {
    if (cart.length > 0) {
      setCart([]);
      deleteShoppingCart();
      return toast.success("All items removed 🔥");
    }
    return toast.error("Cart is EMPTY! ⚠️");
  };
  return (
    <div className="flex min-h-screen items-start justify-center">
      <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10">
        <h2 className="text-xl font-semibold">
          {cart.length ? "Review Cart Items" : "Cart is EMPTY!!"}
        </h2>

        <ul className="flex flex-col divide-y divide-gray-700">
          {cart.map((product) => (
            <CartItem handleRemoveItem={handleRemoveItem} product={product} />
          ))}
        </ul>
        <div className="space-y-1 text-right">
          <p className="">
            Total amount: <span className="font-semibold">{total}</span>
          </p>
          <p className="text-sm text-gray-400">
            Not including taxes and shipping costs
          </p>
        </div>
        <div className="flex justify-end space-x-4">
          {cart.length > 0 ? (
            <button onClick={deleteCart} className="btn-outlined">
              Clear Cart
            </button>
          ) : (
            <Link to="/shop">
              <button className="btn-outlined">Back To Shop</button>
            </Link>
          )}
          <button onClick={orderHandler} className="btn-primary">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
