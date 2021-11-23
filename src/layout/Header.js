import classes from "./Header.module.css";
import Button from "../components/Button";

const Header = function () {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul className={classes.nav__links}>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <a href="">
          {/* <img src="#"></img> */}
          <p style={{ fontSize: 4 + "rem", fontWeight: 700 }}>bynd</p>
        </a>
        <ul className={classes.nav__links}>
          <li>
            <a href="#">Cart</a>
          </li>
          <li>
            <a href="#">Account</a>
          </li>
        </ul>
      </nav>
      <figure className={classes.hero__container}>
        <div className={classes.hero}>
          <h1
            style={{
              fontSize: 7 + "rem",
              width: 60 + "%",
              marginBottom: 2 + "rem",
              fontWeight: 700,
              lineHeight: 90 + "%",
            }}
          >
            Bynd shoes and run.
          </h1>
          <h2
            style={{
              fontSize: 3 + "rem",
              width: 60 + "%",
              marginBottom: 2 + "rem",
              fontWeight: 700,
              lineHeight: 110 + "%",
            }}
          >
            Our shoes are made of recycable materials.
          </h2>
          <Button styl="main" type="button">
            Shop now
          </Button>
        </div>
      </figure>
    </header>
  );
};

export default Header;
