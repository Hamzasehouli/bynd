import classes from "./Baseitem.module.css";
import image from "../images/black.jpg";
const Baseitem = function (props) {
  return (
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
  );
};

export default Baseitem;
