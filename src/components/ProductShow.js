import classes from "./ProductShow.module.css";
import Button from "./Button";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Appcontext } from "../store/Context";

const ProductShow = function (props) {
  const params = useParams();
  const ctx = useContext(Appcontext);

  let product = ctx.data.find((p) => p.image === params.productId);
  console.log(product.image);
  const img = require(`../images/${product.image}.jpg`);

  return (
    <section className={classes.section__product}>
      <figure className={classes.productContainer}>
        <figure className={classes.productsImg}>
          <img alt="ddd" src={img.default}></img>
        </figure>
        <div className={classes.productInfo}>
          <h1 style={{ textTransform: "capitalize" }}>{product.title}</h1>
          <p>
            Taking inspiration from the human body and '90s athletics
            aesthetics, the Nike Air Max 95 mixes comfort with modern
            communication.Text bubbles meet the swiftness of Air in the iconic
            design that now has Airmoji patches to customise your vibe.
          </p>
          <p>${product.price}</p>
          <Button
            styl="outline"
            method={() => {
              ctx.setCartItem({
                id: product.id,
                title: product.title,
                collection: product.collection,
                price: product.price,
                quantity: product.quantity ?? 1,
                image: product.image,
              });
            }}
          >
            Add to cart
          </Button>
        </div>
      </figure>
    </section>
  );
};

export default ProductShow;
