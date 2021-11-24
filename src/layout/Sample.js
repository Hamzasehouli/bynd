import classes from "./Sample.module.css";
import Button from "../components/Button";
import image from "../images/black.jpg";
import { useState } from "react";
const Sample = function () {
  const [products] = useState([
    {
      img: "",
      title: "Sneaker",
      price: "110.99",
    },
    {
      img: "",
      title: "Wanderes",
      price: "100.99",
    },
    {
      img: "",
      title: "Icehikers",
      price: "99.99",
    },
    {
      img: "",
      title: "Icehikers",
      price: "99.99",
    },
    {
      img: "",
      title: "Icehikers",
      price: "99.99",
    },
  ]);
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
        {products.map((p) => (
          <li className={classes.productItem}>
            <figure className={classes.productFigure}>
              <img alt="ss" src={image} className={classes.productImage}></img>
            </figure>
            <h3>{p.title}</h3>
            <p className={classes.productPrice}>USD {p.price}</p>
            <Button styl="outline" type="button">
              Shop Now
            </Button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Sample;
