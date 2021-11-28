import { Link } from "react-router-dom";
import classes from "./Nav.module.css";
const Nav = function () {
  return (
    <nav className={classes.nav}>
      <ul className={classes.nav__links}>
        <li>
          <a href="#">Shop</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="/accout/login">Contact</a>
        </li>
      </ul>
      <Link to="/">
        {/* <img src="#"></img> */}
        <p style={{ fontSize: 4 + "rem", fontWeight: 700 }}>bynd</p>
      </Link>
      <ul className={classes.nav__links}>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/account/login">Account</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
