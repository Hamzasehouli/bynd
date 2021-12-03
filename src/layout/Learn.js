import Button from "../components/Button";
import black from "../images/wandern.jpg";
import white from "../images/white.jpg";
import classes from "./Learn.module.css";
import { useRef, useEffect } from "react";
import simpleParallax from "simple-parallax-js";

const Learn = function () {
  const leftImage = useRef();
  const rightImage = useRef();
  useEffect(() => {
    new simpleParallax(leftImage.current, {
      orientation: "right",
    });
    new simpleParallax(rightImage.current, { orientation: "left" });
  });
  return (
    <section className="section">
      <ul className={classes.learnList}>
        <li>
          <img
            ref={leftImage}
            className={classes.learnImage}
            alt="s"
            src={black}
          ></img>
        </li>
        <li>
          <img
            ref={rightImage}
            className={classes.learnImage}
            alt="s"
            src={white}
          ></img>
        </li>
      </ul>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: 4 + "rem " + 0,
        }}
      >
        <Button styl="main">Shop All Products</Button>
      </div>
    </section>
  );
};

export default Learn;
