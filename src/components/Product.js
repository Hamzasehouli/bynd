import classes from "./Product.module.css";
import { useContext } from "react";
import { Appcontext } from "../store/Context";
import Button from "./Button";

const Product = function (props) {
  const image = require(`../images/${props.data.image}.jpg`);
  const ctx = useContext(Appcontext);

  return (
    <li className={classes.product}>
      <img alt="mm" className={classes.img} src={image.default}></img>
      <div className={classes.info}>
        <h4 className={classes.headingQuartary}>{props.data.title}</h4>
        <h4 className={classes.headingQuartary}>{props.data.collection}</h4>
        <p className={classes.price}>${props.data.price} </p>
        <Button
          method={() => {
            ctx.setCartItem({
              id: props.data.id,
              title: props.data.title,
              collection: props.data.collection,
              price: props.data.price,
              quantity: props.data.quantity ?? 1,
              image: props.data.image,
            });
          }}
          styl="outline"
          type="button"
        >
          Add to cart
        </Button>
      </div>
    </li>
  );
};

export default Product;
