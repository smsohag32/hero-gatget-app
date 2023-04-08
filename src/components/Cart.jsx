import React from "react";

import { useLoaderData } from "react-router-dom";
import CartItem from "./Cards/CartItem";

const Cart = () => {
  const { cartArr } = useLoaderData();
  let total = 0;

  // condition rakhte hobay nai le error dibay
  if (cartArr.length > 0) {
    for (const product of cartArr) {
      total = total + product.price * product.quantity;
    }
  }
  return (
    <div className="flex min-h-screen items-start justify-center bg-gray-100 text-gray-900">
      <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10">
        <h2 className="text-xl font-semibold">
          {cartArr.length ? "Review Cart Items" : "Cart is EMPTY!!"}
        </h2>

        <ul className="flex flex-col divide-y divide-gray-700">
          {cartArr.map((product) => (
            <CartItem product={product} />
          ))}
        </ul>
        <p>{total}</p>
      </div>
    </div>
  );
};

export default Cart;
