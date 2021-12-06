import Product from "./Product";
import classes from "./CollectioncmpProducts.module.css";
const CollectioncmpProducts = function (props) {
  return (
    <ul className={classes.productsList}>
      {props?.data?.map((d) => (
        <Product key={d.id} data={d}></Product>
      ))}
    </ul>
  );
};

export default CollectioncmpProducts;
