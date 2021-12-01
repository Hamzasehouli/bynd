import classes from "./Product.module.css";
const Product = function (props) {
  const image = require(`../images/${props.data.img}.jpg`);
  console.log(image);
  return (
    <li className={classes.product}>
      <img className={classes.img} src={image.default}></img>
      <div>
        <h4 className={classes.headingQuartary}>{props.data.collection}</h4>
        <p className={classes.price}>${props.data.price} </p>
      </div>
    </li>
  );
};

export default Product;
