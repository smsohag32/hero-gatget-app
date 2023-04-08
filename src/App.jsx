import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createContext, useState } from "react";
import MyDialog from "./components/Modal/Modal";

export const ProductContext = createContext([]);
export const CartContext = createContext([]);

const App = () => {
  let [isOpen, setIsOpen] = useState(false);

  const { cartArr, products } = useLoaderData();
  const [cart, setCart] = useState(cartArr);
  const cartAlert = sessionStorage.getItem("alert");
  if (cart.length > 0 && cartAlert !== "true") {
    setIsOpen(true);
    sessionStorage.setItem("alert", true);
  }
  return (
    <ProductContext.Provider value={products}>
      <CartContext.Provider value={[cart, setCart]}>
        <Header />
        <div className="min-h-[calc(100vh-137px)]">
          <Outlet />
        </div>
        <MyDialog isOpen={isOpen} setIsOpen={setIsOpen} />
        <Footer />
      </CartContext.Provider>
    </ProductContext.Provider>
  );
};

export default App;
