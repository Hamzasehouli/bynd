import { useContext } from "react";
import { Appcontext } from "../store/Context";
import classes from "./Cart.module.css";
import Button from "../components/Button";

const Cart = function (props) {
  const ctx = useContext(Appcontext);
  document.title = "Cart | bynd";

  if (ctx.cart?.length === 0) {
    return <p>Cart is empty</p>;
  }
  const removeItem = function (id) {
    ctx.removeItemfromCart(id);
  };
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
                  <button type="button">-</button>
                  <span>{cartItem.quantity}</span>
                  <button type="button">+</button>
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
