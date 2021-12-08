import React, {
  createContext,
  useState,
  useEffect,
  useReducer,
  useMemo,
} from "react";
import { cartItems } from "./cartItems";
import { sampleShoes } from "./sampleShoes";
import { bestSelling } from "./bestSelling";
import { allProducts } from "./allProducts";

export const Appcontext = createContext({
  data: [],
  sample: [],
  cart: [],
  user: "",
  setUser: () => {},
  isLoggedIn: false,
  setLoggedIn: () => {},
  setCartItem: () => {},
  removeItemfromCart: () => {},
  changeQuantity: () => {},
});

const Initcontext = function (props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState();
  const [cart, setCart] = useState("");
  const [sample, setSample] = useState(sampleShoes);
  const [data, setData] = useState(allProducts);

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("cart"))) {
      setCart([]);
      return;
    }

    setCart(JSON.parse(localStorage.getItem("cart")));
  }, []);

  // useMemo(() => {
  //   console.log("test");
  // }, [isLoggedIn]);

  const ctx = {
    data: allProducts,
    cart,
    sample,
    isLoggedIn,
    user,
    setUser: (state) => {
      setUser(state);
    },
    setLoggedIn: (state) => {
      console.log(state);
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
