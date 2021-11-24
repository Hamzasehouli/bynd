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
  );
};

export default Nav;
