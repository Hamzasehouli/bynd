import classes from "./Sample.module.css";
import Button from "../components/Button";

import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Appcontext } from "../store/Context";
const Sample = function () {
  const ctx = useContext(Appcontext);

  return (
    <section className={`${classes.sample}`}>
      <div className="container section">
        <h2 style={{ lineHeight: 170 + "%" }}>
          We make your shoes more sustainable and{" "}
          <span className={classes.wave}>environement friendly</span> and made
          with clean <span className={classes.wave}>ingredients.</span>
        </h2>
      </div>
      <ul className={`${classes.productList}`}>
        {ctx.sample.map((p) => {
          let image = require(`../images/${p.image}.jpg`);
          return (
            <li key={p.id} className={classes.productItem}>
              <Link to={`/product/${p.image}`}>
                <figure className={classes.productFigure}>
                  <img
                    alt="ss"
                    src={image.default}
                    className={classes.productImage}
                  ></img>
                </figure>
              </Link>
              <h3>{p.title}</h3>
              <p className={classes.productPrice}>USD {p.price}</p>
              <Button
                method={() => {
                  ctx.setCartItem({
                    id: p.id,
                    title: p.title,
                    collection: p.collection,
                    price: p.price,
                    quantity: p.quantity ?? 1,
                    image: p.image,
                  });
                }}
                styl="outline"
                type="button"
              >
                Add to cart
              </Button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Sample;
