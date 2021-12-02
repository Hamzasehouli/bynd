import React, { createContext, useState, useReducer } from "react";

const cartItems = [
  {
    id: 0,
    title: "nike green",
    image: "nike-green",
    price: 99,
    collection: "sneakers",
    quantity: 1,
  },
  {
    id: 1,
    title: "nike black",
    image: "nike-black",
    price: 99,
    collection: "sneakers",
    quantity: 3,
  },
];

const sampleShoes = [
  {
    id: 0,
    title: "nike green",
    image: "nike-green",
    price: 99,
    collection: "sneakers",
  },
  {
    id: 1,
    title: "nike red",
    image: "nike-red",
    price: 99,
    collection: "sneakers",
  },
  {
    id: 2,
    title: "nike black",
    image: "nike-black",
    price: 99,
    collection: "sneakers",
  },
  {
    id: 3,
    title: "nike white black",
    image: "nike-white-black",
    price: 99,
    collection: "sneakers",
  },
  {
    id: 4,
    title: "nike orange",
    image: "nike-orange",
    price: 99,
    collection: "sneakers",
  },
];

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
  const [data, setData] = useState([
    {
      img: "black",
      price: 49,
      collection: "sneakers",
    },
    {
      img: "white",
      price: 88,
      collection: "sneakers",
    },
    {
      img: "black",
      price: 55,
      collection: "sneakers",
    },
    {
      img: "white",
      price: 67,
      collection: "sneakers",
    },
    {
      img: "white",
      price: 67,
      collection: "sneakers",
    },
    {
      img: "white",
      price: 67,
      collection: "sneakers",
    },
    {
      img: "white",
      price: 67,
      collection: "sneakers",
    },
    {
      img: "black",
      price: 49,
      collection: "sneakers",
    },
    {
      img: "white",
      price: 88,
      collection: "sneakers",
    },
    {
      img: "black",
      price: 55,
      collection: "bestselling",
    },
    {
      img: "white",
      price: 67,
      collection: "bestselling",
    },
    {
      img: "white",
      price: 67,
      collection: "bestselling",
    },
    {
      img: "white",
      price: 67,
      collection: "bestselling",
    },
    {
      img: "white",
      price: 67,
      collection: "bestselling",
    },
    {
      img: "black",
      price: 49,
      collection: "wandern",
    },
    {
      img: "white",
      price: 88,
      collection: "wandern",
    },
    {
      img: "black",
      price: 55,
      collection: "wandern",
    },
    {
      img: "white",
      price: 67,
      collection: "wandern",
    },
    {
      img: "white",
      price: 67,
      collection: "wandern",
    },
    {
      img: "white",
      price: 67,
      collection: "sneakers",
    },
    {
      img: "white",
      price: 67,
      collection: "sneakers",
    },
  ]);

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
    },
  };
  return (
    <Appcontext.Provider value={ctx}>{props.children}</Appcontext.Provider>
  );
};

export default Initcontext;
