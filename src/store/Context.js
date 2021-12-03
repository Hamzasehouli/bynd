import React, { createContext, useState, useEffect } from "react";
import { cartItems } from "./cartItems";
import { sampleShoes } from "./sampleShoes";
import { bestSelling } from "./bestSelling";
import { allProducts } from "./allProducts";

export const Appcontext = createContext({
  data: [],
  sample: [],
  cart: [],
  isLoggedIn: false,
  setLoggedIn: () => {},
  setCartItem: () => {},
});

const Initcontext = function (props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cart, setCart] = useState(cartItems);
  const [sample, setSample] = useState(sampleShoes);
  const [data, setData] = useState(allProducts);

  useEffect(() => {
    if (!localStorage.getItem("cart")) return;
    setCart(JSON.parse(localStorage.getItem("cart")));
  }, []);

  const ctx = {
    data,
    cart,
    sample,
    isLoggedIn,
    setLoggedIn: (state) => {
      setIsLoggedIn(state);
    },
    setCartItem: (state) => {
      setCart([...cart, state]);
      localStorage.setItem("cart", JSON.stringify([...cart, state]));
    },
  };
  return (
    <Appcontext.Provider value={ctx}>{props.children}</Appcontext.Provider>
  );
};

export default Initcontext;
