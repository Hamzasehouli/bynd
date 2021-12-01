import React, { createContext, useState } from "react";

export const Appcontext = createContext({
  data: [],
  isLoggedIn: false,
  setLoggedIn: () => {},
});

const Initcontext = function (props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
    isLoggedIn,
    setLoggedIn: (state) => {
      setIsLoggedIn(state);
    },
  };
  return (
    <Appcontext.Provider value={ctx}>{props.children}</Appcontext.Provider>
  );
};

export default Initcontext;
