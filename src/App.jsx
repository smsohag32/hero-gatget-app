import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createContext, useState } from "react";

export const ProductContext = createContext([]);
export const CartContext = createContext([]);

const App = () => {
  const { cartArr, products } = useLoaderData();
  const [cart, setCart] = useState(cartArr);
  return (
    <ProductContext.Provider value={products}>
      <CartContext.Provider value={[cart, setCart]}>
        <Header />
        <div className="min-h-[calc(100vh-137px)]">
          <Outlet />
        </div>
        <Footer />
      </CartContext.Provider>
    </ProductContext.Provider>
  );
};

export default App;
