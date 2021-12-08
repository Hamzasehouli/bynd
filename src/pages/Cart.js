import { useContext, useReducer, useMemo, useState, useEffect } from "react";
import { Appcontext } from "../store/Context";
import classes from "./Cart.module.css";
import Button from "../components/Button";
const initData = { quantity: 1 };

const Cart = function (props) {
  const ctx = useContext(Appcontext);

  const reducer = function (state, action) {
    let ff;
    const item = ctx.cart.find((item) => item.id === action.id);
    if (action.type === "increase") {
      // ff = { quantity: item.quantity };
      item.quantity++;
      ff = { quantity: item.quantity };
      const cart = JSON.parse(localStorage.getItem("cart"));
      cart.forEach((element) => {
        if (element.id === item.id) {
          element.quantity = item.quantity;

          localStorage.setItem("cart", JSON.stringify(ctx.cart));
        }
      });
    } else if (action.type === "decrease") {
      if (item.quantity <= 1) return;
      // ff = { quantity: item.quantity };
      item.quantity--;
      ff = { quantity: item.quantity };
      const cart = JSON.parse(localStorage.getItem("cart"));
      cart.forEach((element) => {
        if (element.id === item.id) {
          element.quantity = item.quantity;

          localStorage.setItem("cart", JSON.stringify(ctx.cart));
        }
      });
    }
    return ff;
  };

  const [state, dispatch] = useReducer(reducer, initData);

  document.title = "Cart | bynd";

  const removeItem = function (id) {
    ctx.removeItemfromCart(id);
  };
  if (ctx.cart?.length === 0) {
    return (
      <section
        style={{
          minHeight: 50 + "vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 5 + "rem",
          // paddingTop: 7 + "rem",
        }}
      >
        <p>Cart is empty 🛒🛒</p>;
      </section>
    );
  }
  return (
    <>
      {props.status !== "profile" ? (
        <div className={classes.newsBox}>
          <p className={(classes.news, classes.first)}>
            ❤️ We offset emissions on all orders 🌎 Free shipping on orders over
            $55
          </p>
          <p className={(classes.news, classes.sec)}>
            ❤️ We offset emissions on all orders 🌎 Free shipping on orders over
            $55
          </p>
        </div>
      ) : (
        ""
      )}
      <ul
        style={{ padding: props.status === "profile" ? "2rem 2em 2rem 0" : "" }}
        className={classes.cartList}
      >
        {ctx?.cart?.map((cartItem) => {
          let image = require(`../images/${cartItem.image}.jpg`);
          return (
            <li
              key={cartItem.id}
              style={{
                width: props.status === "profile" ? "100%" : "",
              }}
              className={classes.cartItem}
            >
              <img
                className={classes.cartImg}
                src={image.default}
                alt="ss"
              ></img>

              <div className={classes.info}>
                <h4 className={classes.heading4}>{cartItem.title}</h4>
                <h5 className={classes.heading5}>{cartItem.collection}</h5>
                <p className={classes.price}>${cartItem.price}</p>
                <div className={classes.count}>
                  <button
                    onClick={() =>
                      dispatch({ type: "decrease", id: cartItem.id })
                    }
                    type="button"
                  >
                    -
                  </button>
                  <span>{cartItem.quantity}</span>
                  <button
                    onClick={() => {
                      dispatch({ type: "increase", id: cartItem.id });
                    }}
                    type="button"
                  >
                    +
                  </button>
                </div>
              </div>
              <Button
                method={() => removeItem(cartItem.id)}
                type="button"
                styl="outline"
                className={classes.delete}
              >
                remove
              </Button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Cart;
