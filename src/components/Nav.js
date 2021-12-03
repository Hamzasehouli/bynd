import { Link } from "react-router-dom";
import classes from "./Nav.module.css";
import { useContext } from "react";
import { Appcontext } from "../store/Context";
import Button from "./Button";
const Nav = function () {
  const ctx = useContext(Appcontext);
  console.log(ctx.isLoggedIn);
  return (
    <nav className={classes.nav}>
      <ul className={classes.nav__links}>
        <li>
          <Link to="/collections">Shop</Link>
        </li>
        <li>
          <Link to="/collections/best-selling">Best selling</Link>
        </li>
        {/* <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="/accout/login">Contact</a>
        </li> */}
      </ul>
      <Link to="/">
        {/* <img src="#"></img> */}
        <p style={{ fontSize: 4 + "rem", fontWeight: 700 }}>bynd</p>
      </Link>
      <ul className={classes.nav__links}>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        {ctx.isLoggedIn ? (
          <button
            type="button"
            onClick={() => {
              ctx.setLoggedIn(false);
              document.cookie = "jwt=''; path=/";
            }}
          >
            Logout
          </button>
        ) : (
          ""
        )}
        {ctx.isLoggedIn ? (
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        ) : (
          ""
        )}
        <li>
          <Link to="/account/login">Account</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
