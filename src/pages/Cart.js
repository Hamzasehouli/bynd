import classes from "./Cart.module.css";
import image from "../images/black.jpg";
const Cart = function (props) {
  document.title = "Cart | bynd";
  return (
    <>
      <p>Cart is empty</p>
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
        <li
          style={{
            width: props.status === "profile" ? "100%" : "",
          }}
          className={classes.cartItem}
        >
          <img className={classes.cartImg} src={image} alt="ss"></img>

          <div className={classes.info}>
            <h4 className={classes.heading4}>Neroli</h4>
            <h5 className={classes.heading5}>Sneakers</h5>
            <p className={classes.price}>$55</p>
            <div className={classes.count}>
              <button type="button">-</button>
              <span>2</span>
              <button type="button">+</button>
            </div>
          </div>
          <p className={classes.delete}>remove</p>
        </li>
        <li
          style={{ width: props.status === "profile" ? "100%" : "" }}
          className={classes.cartItem}
        >
          <img className={classes.cartImg} src={image} alt="ss"></img>

          <div className={classes.info}>
            <h4 className={classes.heading4}>Neroli</h4>
            <h5 className={classes.heading5}>Sneakers</h5>
            <p className={classes.price}>$55</p>
            <div className={classes.count}>
              <button type="button">-</button>
              <span>2</span>
              <button type="button">+</button>
            </div>
          </div>
          <p className={classes.delete}>remove</p>
        </li>
      </ul>
    </>
  );
};

export default Cart;
