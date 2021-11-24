import Button from "../components/Button";
import black from "../images/black.jpg";
import white from "../images/white.jpg";
import classes from "./Learn.module.css";

const Learn = function () {
  return (
    <section className="section">
      <ul className={classes.learnList}>
        <li>
          <img className={classes.learnImage} alt="s" src={black}></img>
        </li>
        <li>
          <img className={classes.learnImage} alt="s" src={white}></img>
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
