import React, { createContext, useState, useEffect, useReducer } from "react";
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
  removeItemfromCart: () => {},
  changeQuantity: () => {},
});

const Initcontext = function (props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cart, setCart] = useState("");
  const [sample, setSample] = useState(sampleShoes);
  const [data, setData] = useState(allProducts);

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("cart"))) {
      setCart([]);
      return;
    }
    // console.log(JSON.parse(localStorage.getItem("cart")));
    // console.log(JSON.parse(localStorage.getItem("cart")));
    setCart(JSON.parse(localStorage.getItem("cart")));
  }, []);

  const ctx = {
    data: allProducts,
    cart,
    sample,
    isLoggedIn,

    setLoggedIn: (state) => {
      setIsLoggedIn(state);
    },
    setCartItem: (state) => {
      const id = state.id;
      cart.forEach((c) => {
        if (c.id === id) {
          c.quantity++;
        }
      });
      if (cart.some((c) => c.id === id)) {
        return;
      }
      // const uniq = cart.filter((c) => cart.some((s) => s.id === c.id));
      setCart([...cart, state]);
      localStorage.setItem("cart", JSON.stringify([...cart, state]));
    },
    removeItemfromCart: (id) => {
      // const items = JSON.parse(localStorage.getItem("cart"));
      const data = cart?.filter((i) => id !== i.id);

      setCart([]);
      setCart(data);
      // localStorage.clear();
      localStorage.removeItem("cart");
      localStorage.clear();
      localStorage.setItem("cart", JSON.stringify([]));
      // localStorage.setItem("cart", JSON.stringify(cart));
    },
    // changeQuantity: (id, status) => {
    //   if(status === 'decrease'){

    //   }else if(status === 'increase'){

    //   }
    // },
  };
  return (
    <Appcontext.Provider value={ctx}>{props.children}</Appcontext.Provider>
  );
};

export default Initcontext;
